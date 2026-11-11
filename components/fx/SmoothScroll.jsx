"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import Lenis from "lenis";
import { scroller } from "./scroller";

// Inertial scrolling on desktop. Touch devices and reduced-motion users keep native scroll.
export default function SmoothScroll() {
  const pathname = usePathname();

  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const coarse = window.matchMedia("(pointer: coarse)").matches;
    if (reduce || coarse) return;

    const lenis = new Lenis({ lerp: 0.11, wheelMultiplier: 1, anchors: { offset: -96 }, autoRaf: true });
    scroller.lenis = lenis;
    return () => {
      lenis.destroy();
      scroller.lenis = null;
    };
  }, []);

  // New page: start at the top, unless the link points at an anchor.
  useEffect(() => {
    if (window.location.hash) {
      const target = document.getElementById(window.location.hash.slice(1));
      if (target) {
        const id = setTimeout(() => target.scrollIntoView({ block: "start" }), 60);
        return () => clearTimeout(id);
      }
    }
    if (scroller.lenis) scroller.lenis.scrollTo(0, { immediate: true, force: true });
    else window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}
