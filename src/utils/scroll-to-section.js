export function scrollToSection(event, sectionId) {
  event?.preventDefault();
  const behavior = window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ? "auto"
    : "smooth";

  if (sectionId === "home") {
    window.scrollTo({ top: 0, behavior });
    return;
  }

  document.getElementById(sectionId)?.scrollIntoView({
    behavior,
    block: "start",
  });
}
