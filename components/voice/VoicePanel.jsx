"use client";

import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { ConversationProvider, useConversation } from "@elevenlabs/react";
import { ArrowUp, Mic, MicOff, PhoneOff, Volume2, VolumeX, X } from "lucide-react";
import { nav, profile } from "@/lib/site";
import { caseStudies } from "@/lib/work";
import { voice } from "@/lib/voice";
import Orb from "./Orb";
import { play, setSoundOn, soundOn } from "./sounds";

// Pages the guide may open. Anything else it asks for is refused.
const pages = new Set(["/", "/contact", ...nav.map((item) => item.href), ...caseStudies.map((study) => `/work/${study.slug}`)]);

const problems = {
  busy: "The guide has had a lot of visitors. Please try again in a few minutes.",
  mic: "The microphone is blocked. Allow it in your browser, or type your question instead.",
  off: "The guide is not available right now.",
  unavailable: "The guide could not connect. Please try again.",
  blocked: "The guide ended this chat because the request was outside what it can help with.",
};

const clock = (seconds) => `${Math.floor(seconds / 60)}:${String(seconds % 60).padStart(2, "0")}`;

function Panel({ open, intent, onClose, onState }) {
  const router = useRouter();
  const [phase, setPhase] = useState("idle"); // idle, starting, live, ended
  const [mode, setMode] = useState("voice"); // voice or text
  const [lines, setLines] = useState([]);
  const [note, setNote] = useState("");
  const [draft, setDraft] = useState("");
  const [left, setLeft] = useState(voice.maxSeconds);
  const [sound, setSound] = useState(true);
  const queued = useRef("");
  const blocked = useRef(false);
  const orb = useRef(null);
  const log = useRef(null);
  const field = useRef(null);

  const add = useCallback((role, text) => {
    if (!text) return;
    setLines((all) => {
      const last = all[all.length - 1];
      if (last && last.role === role && last.text === text) return all;
      return [...all, { role, text, id: all.length }];
    });
  }, []);

  const clientTools = useMemo(
    () => ({
      // The guide can open a page of this site, and only a page on the list.
      open_page: ({ path }) => {
        if (typeof path !== "string" || !pages.has(path)) return "That page is not available.";
        play("navigate");
        router.push(path);
        return "Opened.";
      },
    }),
    [router]
  );

  function sendQueued() {
    const text = queued.current;
    if (!text) return;
    queued.current = "";
    add("user", text);
    chat.sendUserMessage(text);
  }

  const chat = useConversation({
    clientTools,
    onConnect: () => {
      setPhase("live");
      play("connect");
      // A question picked before the chat started goes out after the greeting, or after a short wait.
      setTimeout(sendQueued, 2500);
    },
    onMessage: ({ message, role }) => {
      add(role === "user" ? "user" : "agent", message);
      if (role !== "user") sendQueued();
    },
    onGuardrailTriggered: () => {
      blocked.current = true;
    },
    onError: () => {
      setNote((current) => current || problems.unavailable);
    },
    onDisconnect: () => {
      setPhase((current) => {
        if (current === "live" || current === "starting") play("end");
        return current === "idle" ? "idle" : "ended";
      });
      if (blocked.current) setNote(problems.blocked);
    },
  });

  const live = phase === "live";
  const speaking = live && mode === "voice" && chat.isSpeaking;

  const start = useCallback(
    async (kind, firstQuestion = "") => {
      if (phase === "starting" || phase === "live") return;
      setNote("");
      setLines([]);
      setLeft(voice.maxSeconds);
      setMode(kind);
      setPhase("starting");
      blocked.current = false;
      queued.current = firstQuestion;

      try {
        if (kind === "voice") {
          // Ask for the microphone first, so a refusal gets a clear message.
          const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
          stream.getTracks().forEach((track) => track.stop());
        }
      } catch {
        setPhase("idle");
        setNote(problems.mic);
        return;
      }

      try {
        const response = await fetch("/api/voice/session", { method: "POST", headers: { "content-type": "application/json" }, body: JSON.stringify({ mode: kind }) });
        const pass = await response.json().catch(() => ({}));
        if (!response.ok) throw new Error(pass.error || "unavailable");
        if (kind === "voice") chat.startSession({ conversationToken: pass.token, connectionType: "webrtc" });
        else chat.startSession({ signedUrl: pass.signedUrl, connectionType: "websocket", textOnly: true });
      } catch (error) {
        setPhase("idle");
        setNote(problems[error.message] ?? problems.unavailable);
      }
    },
    [chat, phase]
  );

  const end = useCallback(() => {
    if (phase === "live" || phase === "starting") chat.endSession();
  }, [chat, phase]);

  // The dock says how the visitor wants to start: by voice or by typing.
  useEffect(() => {
    if (!open || !intent) return;
    if (intent.mode === "voice") start("voice");
    else field.current?.focus();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [intent?.id]);

  // The microphone is never live while the panel is closed.
  useEffect(() => {
    if (!open) end();
  }, [open, end]);

  useEffect(() => {
    setSound(soundOn());
    return () => chat.endSession();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // A visible countdown, and a hard stop when the time is up.
  useEffect(() => {
    if (!live) return;
    const started = Date.now();
    const timer = setInterval(() => {
      const remaining = voice.maxSeconds - Math.floor((Date.now() - started) / 1000);
      setLeft(Math.max(0, remaining));
      if (remaining <= -3) chat.endSession();
    }, 1000);
    return () => clearInterval(timer);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [live]);

  // The orb follows the loudness of whoever is talking.
  useEffect(() => {
    if (!live || mode !== "voice") return;
    let frame = 0;
    let level = 0;
    const tick = () => {
      const target = Math.min(1, (chat.isSpeaking ? chat.getOutputVolume() : chat.getInputVolume()) * 2.2);
      level += (target - level) * 0.25;
      orb.current?.style.setProperty("--level", level.toFixed(3));
      frame = requestAnimationFrame(tick);
    };
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [live, mode]);

  useEffect(() => {
    if (lines.length) log.current?.scrollTo({ top: log.current.scrollHeight });
  }, [lines]);

  useEffect(() => {
    if (!open) return;
    const onKey = (event) => {
      if (event.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open, onClose]);

  function send(event) {
    event.preventDefault();
    const text = draft.trim().slice(0, voice.maxTypedLength);
    if (!text) return;
    setDraft("");
    if (live) {
      add("user", text);
      chat.sendUserMessage(text);
    } else {
      start("text", text);
    }
  }

  function toggleSound() {
    const next = !sound;
    setSound(next);
    setSoundOn(next);
    if (live) chat.setVolume({ volume: next ? 1 : 0 });
  }

  const status =
    phase === "starting" ? "Connecting" : !live ? (phase === "ended" ? "Chat ended" : "Ready") : mode === "text" ? "Chatting by text" : chat.isMuted ? "Microphone muted" : speaking ? "Speaking" : "Listening";

  const look = phase === "starting" ? "starting" : speaking ? "speaking" : live ? "live" : "idle";
  // The big orb shows before a chat starts and during a voice call. Typed chats keep the space for text.
  const stage = lines.length === 0 || (mode === "voice" && (live || phase === "starting"));

  useEffect(() => {
    onState?.(look);
  }, [look, onState]);

  if (!open) return null;

  return (
    <section id="voice-panel" className="voice-panel" role="dialog" aria-label="AI guide to this portfolio" data-lenis-prevent data-phase={phase}>
      <div className="voice-head">
        {!stage && <Orb size={36} state={look} />}
        <div className="voice-title">
          <strong>
            {voice.name} <span className="voice-badge">AI</span>
          </strong>
          <span role="status">
            {status}
            {live && <span className="tnum"> · {clock(left)}</span>}
          </span>
        </div>
        <button type="button" className="voice-icon" onClick={toggleSound} aria-pressed={!sound} aria-label={sound ? "Turn sound off" : "Turn sound on"}>
          {sound ? <Volume2 size={17} aria-hidden="true" /> : <VolumeX size={17} aria-hidden="true" />}
        </button>
        <button type="button" className="voice-icon" onClick={onClose} aria-label="Close the guide">
          <X size={18} aria-hidden="true" />
        </button>
      </div>

      {stage && (
        <div className="voice-stage">
          <Orb ref={orb} size={84} state={look} />
          <p>{phase === "starting" ? "Connecting to the guide\u2026" : live ? status : `Ask about ${profile.firstName}\u2019s projects, experience, or skills.`}</p>
        </div>
      )}

      <div className="voice-log" ref={log} role="log" aria-live="polite" aria-label="Conversation" tabIndex={0}>
        {lines.length === 0 && phase !== "starting" && (
          <div className="voice-intro">
            <ul>
              {voice.suggestions.map((question) => (
                <li key={question}>
                  <button type="button" onClick={() => start("text", question)}>
                    {question}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        )}
        {lines.map((line) => (
          <p key={line.id} className={`voice-line voice-line--${line.role}`}>
            <span className="sr-only">{line.role === "user" ? "You: " : "Guide: "}</span>
            {line.text}
          </p>
        ))}
      </div>

      {note && (
        <p className="voice-note" role="alert">
          {note}
        </p>
      )}

      <div className="voice-controls">
        {live && mode === "voice" ? (
          <>
            <button type="button" className="voice-btn" onClick={() => chat.setMuted(!chat.isMuted)} aria-pressed={chat.isMuted}>
              {chat.isMuted ? <MicOff size={16} aria-hidden="true" /> : <Mic size={16} aria-hidden="true" />}
              {chat.isMuted ? "Unmute" : "Mute"}
            </button>
            <button type="button" className="voice-btn voice-btn--end" onClick={end}>
              <PhoneOff size={16} aria-hidden="true" /> End
            </button>
          </>
        ) : live ? (
          <button type="button" className="voice-btn voice-btn--end" onClick={end}>
            <PhoneOff size={16} aria-hidden="true" /> End chat
          </button>
        ) : (
          <button type="button" className="voice-btn voice-btn--start" onClick={() => start("voice")} disabled={phase === "starting"}>
            <Mic size={16} aria-hidden="true" /> {phase === "ended" ? "Talk again" : "Start talking"}
          </button>
        )}
      </div>

      <form className="voice-form" onSubmit={send}>
        <label className="sr-only" htmlFor="voice-text">
          Type a question
        </label>
        <input
          id="voice-text"
          ref={field}
          type="text"
          value={draft}
          onChange={(event) => setDraft(event.target.value)}
          maxLength={voice.maxTypedLength}
          placeholder="Or type a question"
          autoComplete="off"
          disabled={phase === "starting"}
        />
        <button type="submit" aria-label="Send" disabled={!draft.trim() || phase === "starting"}>
          <ArrowUp size={17} aria-hidden="true" />
        </button>
      </form>

      <p className="voice-fine">
        AI guide with an ElevenLabs voice. It answers from this site and can be wrong. Chats run through ElevenLabs: audio is not saved, transcripts are kept for 30 days.
      </p>
    </section>
  );
}

export default function VoicePanel(props) {
  return (
    <ConversationProvider>
      <Panel {...props} />
    </ConversationProvider>
  );
}
