"use client";

import { useEffect, useState } from "react";

// True when the visitor prefers reduced motion. Starts false so server and client HTML match.
export default function useStill() {
  const [still, setStill] = useState(false);
  useEffect(() => {
    const query = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setStill(query.matches);
    update();
    query.addEventListener("change", update);
    return () => query.removeEventListener("change", update);
  }, []);
  return still;
}
