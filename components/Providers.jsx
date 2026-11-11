"use client";

import { MotionConfig } from "motion/react";
import SmoothScroll from "./fx/SmoothScroll";
import { CursorGlow, ScrollProgress } from "./fx/Ambient";
import CommandPalette from "./CommandPalette";

// Everything that needs the browser and wraps the whole site.
// "user" makes every motion component honor the visitor's reduced-motion setting.
export default function Providers({ children }) {
  return (
    <MotionConfig reducedMotion="user">
      <SmoothScroll />
      <ScrollProgress />
      <CursorGlow />
      {children}
      <CommandPalette />
    </MotionConfig>
  );
}
