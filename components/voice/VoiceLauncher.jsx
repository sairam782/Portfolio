"use client";

import { useCallback, useEffect, useState } from "react";
import dynamic from "next/dynamic";
import { MessageCircleMore, Phone, X } from "lucide-react";
import Orb from "./Orb";
import { play } from "./sounds";

// The voice SDK is only downloaded when a visitor opens the guide.
const VoicePanel = dynamic(() => import("./VoicePanel"), { ssr: false });

// The dock in the corner: the orb, a button to talk, and a button to type.
export default function VoiceLauncher() {
  const [open, setOpen] = useState(false);
  const [intent, setIntent] = useState(null); // { mode: "voice" | "text", id }
  const [state, setState] = useState("idle");

  const launch = useCallback((mode) => {
    play("open");
    setIntent({ mode, id: Date.now() });
    setOpen(true);
  }, []);

  const close = useCallback(() => setOpen(false), []);

  useEffect(() => {
    const onOpen = () => launch("text");
    window.addEventListener("voice:open", onOpen);
    return () => window.removeEventListener("voice:open", onOpen);
  }, [launch]);

  return (
    <>
      {intent && <VoicePanel open={open} intent={intent} onClose={close} onState={setState} />}
      <div className="voice-dock" data-open={open}>
        <Orb size={44} state={open ? state : "idle"} />
        {open ? (
          <button type="button" className="voice-call" aria-expanded="true" aria-controls="voice-panel" onClick={close}>
            <X size={17} aria-hidden="true" />
            <span>Close</span>
          </button>
        ) : (
          <>
            <button type="button" className="voice-call" aria-expanded="false" aria-controls="voice-panel" onClick={() => launch("voice")}>
              <Phone size={16} aria-hidden="true" />
              <span>Ask by voice</span>
            </button>
            <button type="button" className="voice-chat" aria-label="Ask by text" aria-expanded="false" aria-controls="voice-panel" onClick={() => launch("text")}>
              <MessageCircleMore size={19} aria-hidden="true" />
            </button>
          </>
        )}
      </div>
    </>
  );
}
