"use client";

import { useEffect, useRef, useState } from "react";
import { animate, useInView } from "motion/react";

// Counts up to a number once it scrolls into view.
export default function Counter({ to, from = 0, decimals = 0, duration = 1.8, prefix = "", suffix = "" }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "0px 0px -10% 0px" });
  const [value, setValue] = useState(to);
  const [armed, setArmed] = useState(false);

  // Server HTML shows the final number. The count starts from "from" only after hydration.
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    setValue(from);
    setArmed(true);
  }, [from]);

  useEffect(() => {
    if (!armed || !inView) return;
    const controls = animate(from, to, { duration, ease: [0.16, 1, 0.3, 1], onUpdate: setValue });
    return () => controls.stop();
  }, [armed, inView, from, to, duration]);

  return (
    <span ref={ref} className="tnum">
      {prefix}
      {value.toFixed(decimals)}
      {suffix}
    </span>
  );
}
