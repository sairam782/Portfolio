"use client";

import { useEffect, useRef, useState } from "react";
import { Check, Copy } from "lucide-react";

export default function CopyEmail({ email }) {
  const [status, setStatus] = useState("");
  const timer = useRef(null);
  useEffect(() => () => clearTimeout(timer.current), []);

  async function copy() {
    clearTimeout(timer.current);
    try {
      await navigator.clipboard.writeText(email);
      setStatus("copied");
    } catch {
      setStatus("error");
    }
    timer.current = setTimeout(() => setStatus(""), 4000);
  }

  return (
    <>
      <button type="button" className="btn btn--glass" onClick={copy}>
        {status === "copied" ? <Check size={16} aria-hidden="true" /> : <Copy size={16} aria-hidden="true" />}
        {status === "copied" ? "Copied" : "Copy address"}
      </button>
      <p className="copy-status" role="status">
        {status === "copied" ? "Email address copied." : status === "error" ? "Copy did not work. Select the address above and copy it." : ""}
      </p>
    </>
  );
}
