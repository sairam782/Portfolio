// Short interface sounds for the voice guide. They only ever play after the
// visitor has clicked something, and they can be switched off in the panel.

const files = { open: "/assets/sfx/open.mp3", connect: "/assets/sfx/connect.mp3", end: "/assets/sfx/end.mp3", navigate: "/assets/sfx/navigate.mp3" };
const cache = {};

export function soundOn() {
  try {
    return localStorage.getItem("voice-sound") !== "off";
  } catch {
    return true;
  }
}

export function setSoundOn(on) {
  try {
    localStorage.setItem("voice-sound", on ? "on" : "off");
  } catch {
    // the choice still holds for this visit
  }
}

export function play(name) {
  if (!soundOn() || !files[name]) return;
  try {
    const audio = (cache[name] ??= new Audio(files[name]));
    audio.volume = 0.32;
    audio.currentTime = 0;
    audio.play().catch(() => {});
  } catch {
    // sound is a nicety; never let it break the chat
  }
}
