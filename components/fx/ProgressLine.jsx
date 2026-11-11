"use client";

import { useRef } from "react";
import { motion, useScroll, useSpring } from "motion/react";

// Wraps a vertical list and draws a line down its side that fills as you read.
export default function ProgressLine({ children, className = "" }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 0.7", "end 0.6"] });
  const scaleY = useSpring(scrollYProgress, { stiffness: 120, damping: 30, mass: 0.4 });
  return (
    <div ref={ref} className={`progress-line ${className}`}>
      <span className="progress-rail" aria-hidden="true">
        <motion.i style={{ scaleY }} />
      </span>
      {children}
    </div>
  );
}
