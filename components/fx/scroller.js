// Shared handle to the smooth-scroll instance, so dialogs can pause it.
export const scroller = { lenis: null };

export const lockScroll = () => {
  scroller.lenis?.stop();
  document.documentElement.style.overflow = "hidden";
};

export const unlockScroll = () => {
  scroller.lenis?.start();
  document.documentElement.style.overflow = "";
};
