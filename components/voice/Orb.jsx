import { forwardRef } from "react";

// The guide's face: a small disc of turning light in the theme colours.
// It turns slowly at rest, faster during a chat, and swells with the voice (--level).
const Orb = forwardRef(function Orb({ size = 44, state = "idle", className = "" }, ref) {
  return (
    <span ref={ref} className={`orb ${className}`} data-state={state} style={{ "--size": `${size}px` }} aria-hidden="true">
      <i />
      <i />
      <i />
    </span>
  );
});

export default Orb;
