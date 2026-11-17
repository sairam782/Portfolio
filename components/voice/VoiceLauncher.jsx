"use client";

import { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import { AudioLines } from "lucide-react";
import { play } from "./sounds";

// The voice SDK is only downloaded when a visitor opens the guide.
const VoicePanel = dynamic(() => import("./VoicePanel"), { ssr: false });

// The button in the corner that opens the voice guide.
export default function VoiceLauncher() {
  const [open, setOpen] = useState(false);
  const [used, setUsed] = useState(false);

  useEffect(() => {
    const onOpen = () => {
      setUsed(true);
      setOpen(true);
    };
    window.addEventListener("voice:open", onOpen);
    return () => window.removeEventListener("voice:open", onOpen);
  }, []);

  function toggle() {
    if (!open) play("open");
    setUsed(true);
    setOpen((value) => !value);
  }

  return (
    <>
      {used && <VoicePanel open={open} onClose={() => setOpen(false)} />}
      <button type="button" className="voice-launch" data-open={open} aria-expanded={open} aria-controls="voice-panel" onClick={toggle}>
        <span className="voice-launch-orb" aria-hidden="true">
          <AudioLines size={16} />
        </span>
        <span className="voice-launch-label">{open ? "Close the guide" : "Ask the AI guide"}</span>
      </button>
    </>
  );
}
