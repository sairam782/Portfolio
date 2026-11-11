"use client";

import { useRef } from "react";

// A surface that tracks the cursor: a soft light follows it, and the card can tilt.
// Position is written to CSS variables, so no React re-render per mouse move.
export default function Spotlight({ as: Tag = "div", tilt = false, className = "", children, ...rest }) {
  const ref = useRef(null);

  function move(event) {
    const el = ref.current;
    if (!el || event.pointerType !== "mouse") return;
    const box = el.getBoundingClientRect();
    const px = (event.clientX - box.left) / box.width;
    const py = (event.clientY - box.top) / box.height;
    el.style.setProperty("--mx", `${px * 100}%`);
    el.style.setProperty("--my", `${py * 100}%`);
    el.style.setProperty("--px", (px - 0.5).toFixed(3));
    el.style.setProperty("--py", (py - 0.5).toFixed(3));
    if (tilt) {
      el.style.setProperty("--rx", `${(0.5 - py) * 5}deg`);
      el.style.setProperty("--ry", `${(px - 0.5) * 6}deg`);
    }
  }

  function leave() {
    const el = ref.current;
    if (!el) return;
    el.style.setProperty("--rx", "0deg");
    el.style.setProperty("--ry", "0deg");
    el.style.setProperty("--px", "0");
    el.style.setProperty("--py", "0");
  }

  return (
    <Tag ref={ref} className={`spot ${tilt ? "spot--tilt" : ""} ${className}`} onPointerMove={move} onPointerLeave={leave} {...rest}>
      {children}
    </Tag>
  );
}
