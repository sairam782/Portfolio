"use client";

import { MotionConfig } from "motion/react";
import SmoothScroll from "./fx/SmoothScroll";
import { CursorGlow, ScrollProgress } from "./fx/Ambient";
import CommandPalette from "./CommandPalette";
import ThemePicker from "./ThemePicker";
import VoiceLauncher from "./voice/VoiceLauncher";
import { appearance } from "@/lib/site";

// Everything that needs the browser and wraps the whole site.
// "user" makes every motion component honor the visitor's reduced-motion setting.
export default function Providers({ children, voiceGuide = false }) {
  return (
    <MotionConfig reducedMotion="user">
      <SmoothScroll />
      <ScrollProgress />
      <CursorGlow />
      {children}
      <CommandPalette voiceGuide={voiceGuide} />
      {appearance.themePicker && <ThemePicker />}
      {voiceGuide && <VoiceLauncher />}
    </MotionConfig>
  );
}
