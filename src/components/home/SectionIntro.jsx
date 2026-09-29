export function SectionIntro({
  eyebrow,
  title,
  description,
  align = "left",
  light = false,
  titleId,
}) {
  return (
    <div
      className={`mb-8 max-w-2xl sm:mb-10 ${
        align === "center" ? "mx-auto text-center" : ""
      }`}
    >
      {eyebrow ? (
        <p
          className={`mb-3 text-xs font-bold uppercase tracking-[0.18em] ${
            light ? "text-accent" : "text-amber-700"
          }`}
        >
          {eyebrow}
        </p>
      ) : null}
      <h2
        className={`text-3xl font-bold leading-tight tracking-[-0.035em] sm:text-4xl ${
          light ? "text-white" : "text-brand"
        }`}
        id={titleId}
      >
        {title}
      </h2>
      {description ? (
        <p
          className={`mt-4 text-base leading-7 sm:text-lg ${
            light ? "text-white/70" : "text-slate-600"
          }`}
        >
          {description}
        </p>
      ) : null}
    </div>
  );
}
