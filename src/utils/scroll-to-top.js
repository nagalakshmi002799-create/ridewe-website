export function scrollToTop({ smooth = false } = {}) {
  const reducedMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)",
  ).matches;

  window.scrollTo({
    top: 0,
    left: 0,
    behavior: smooth && !reducedMotion ? "smooth" : "auto",
  });
}
