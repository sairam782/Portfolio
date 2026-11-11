"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";

// Children drift a little slower than the page while they cross the viewport.
export default function Parallax({ children, amount = 40, className = "" }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [-amount, amount]);
  return (
    <div ref={ref} className={`parallax ${className}`}>
      <motion.div style={{ y }}>{children}</motion.div>
    </div>
  );
}
