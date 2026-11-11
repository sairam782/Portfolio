"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import useStill from "./useStill";

function Word({ progress, range, children }) {
  const opacity = useTransform(progress, range, [0.18, 1]);
  return (
    <motion.span style={{ opacity }} aria-hidden="true">
      {children}{" "}
    </motion.span>
  );
}

// A statement whose words light up as the reader scrolls through it.
export default function ScrollText({ text, className = "" }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 0.85", "end 0.45"] });
  const words = text.split(" ");
  // Reduced motion: the full statement is simply shown.
  const still = useStill();

  return (
    <p ref={ref} className={`scroll-text ${className}`}>
      <span className="sr-only">{text}</span>
      {words.map((word, i) =>
        still ? (
          <span key={`${word}-${i}`} aria-hidden="true">
            {word}{" "}
          </span>
        ) : (
          <Word key={`${word}-${i}`} progress={scrollYProgress} range={[i / words.length, Math.min(1, (i + 1.5) / words.length)]}>
            {word}
          </Word>
        )
      )}
    </p>
  );
}
