"use client";

import { motion } from "motion/react";

const ease = [0.22, 1, 0.36, 1];

// Fades and lifts content into place the first time it enters the viewport.
export function Reveal({ as = "div", delay = 0, y = 28, blur = 10, className = "", children, ...rest }) {
  const Tag = motion[as] ?? motion.div;
  return (
    <Tag
      className={`rv ${className}`}
      initial={{ opacity: 0, y, filter: `blur(${blur}px)` }}
      whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      viewport={{ once: true, margin: "0px 0px -8% 0px" }}
      transition={{ duration: 0.9, delay, ease }}
      {...rest}
    >
      {children}
    </Tag>
  );
}

// A line of text that arrives one word at a time. Screen readers get the plain text.
export function Words({ text, delay = 0, stagger = 0.07, className = "" }) {
  const words = text.split(" ");
  return (
    <span className={`words ${className}`}>
      <span className="sr-only">{text}</span>
      {words.map((word, i) => (
        <span className="word" aria-hidden="true" key={`${word}-${i}`}>
          <motion.span
            className="rv"
            initial={{ opacity: 0, y: "0.6em", filter: "blur(12px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: delay + i * stagger, ease }}
          >
            {word}
          </motion.span>
          {i < words.length - 1 ? " " : ""}
        </span>
      ))}
    </span>
  );
}

// A whole line that arrives as one piece. Used for gradient text, where the
// gradient has to span the full line rather than restart on each word.
export function Line({ text, delay = 0, className = "" }) {
  return (
    <motion.span
      className={`rv line ${className}`}
      initial={{ opacity: 0, y: "0.5em", filter: "blur(14px)" }}
      whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      viewport={{ once: true }}
      transition={{ duration: 1.1, delay, ease }}
    >
      {text}
    </motion.span>
  );
}
