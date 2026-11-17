"use client";

import { useEffect, useRef, useState } from "react";
import { Check, Palette } from "lucide-react";
import { appearance } from "@/lib/site";
import { themes } from "@/lib/themes";

// Switches the colour of the whole site and remembers the choice in this browser.
export function setTheme(id) {
  document.documentElement.setAttribute("data-theme", id);
  try {
    localStorage.setItem("theme", id);
  } catch {
    // private windows may refuse storage; the choice still holds for this page
  }
  window.dispatchEvent(new CustomEvent("themechange", { detail: id }));
}

// A small colour switcher in the corner. Turn it off in lib/site.js once a colour is chosen.
export default function ThemePicker() {
  const [open, setOpen] = useState(false);
  const [current, setCurrent] = useState(appearance.theme);
  const root = useRef(null);

  useEffect(() => {
    const read = () => setCurrent(document.documentElement.getAttribute("data-theme") || appearance.theme);
    read();
    window.addEventListener("themechange", read);
    return () => window.removeEventListener("themechange", read);
  }, []);

  useEffect(() => {
    if (!open) return;
    const onDown = (event) => {
      if (!root.current?.contains(event.target)) setOpen(false);
    };
    const onKey = (event) => {
      if (event.key === "Escape") {
        setOpen(false);
        root.current?.querySelector("button")?.focus();
      }
    };
    document.addEventListener("pointerdown", onDown);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("pointerdown", onDown);
      document.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <div className="theme-dock" ref={root} data-open={open}>
      {open && (
        <div className="theme-panel" id="theme-panel" role="group" aria-label="Site colour">
          <p>Site colour</p>
          <ul>
            {themes.map((theme) => (
              <li key={theme.id}>
                <button type="button" className="theme-option" aria-pressed={current === theme.id} onClick={() => setTheme(theme.id)}>
                  <span className="theme-swatch" style={{ background: `linear-gradient(120deg, ${theme.stops.join(", ")})` }} aria-hidden="true" />
                  {theme.name}
                  {current === theme.id && <Check size={14} aria-hidden="true" />}
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
      <button type="button" className="theme-toggle" aria-expanded={open} aria-controls="theme-panel" aria-label="Change site colour" onClick={() => setOpen((value) => !value)}>
        <Palette size={17} aria-hidden="true" />
      </button>
    </div>
  );
}
