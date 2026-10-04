export function SectionIntro({
  eyebrow,
  title,
  description,
  align = "left",
  light = false,
  titleId,
  titleLevel = "h2",
  compact = false,
  titleAction,
}) {
  const Title = titleLevel;

  return (
    <div
      className={`${compact ? "mb-5 max-w-3xl sm:mb-5" : "mb-8 max-w-2xl sm:mb-10"} ${
        titleAction ? "w-full max-w-none" : ""
      } ${
        align === "center" ? "mx-auto text-center" : ""
      }`}
    >
      {eyebrow ? (
        <p
          className={`mb-3 text-xs font-bold uppercase tracking-[0.18em] ${
            light ? "text-accent" : "text-accent-dark"
          }`}
        >
          {eyebrow}
        </p>
      ) : null}
      <div
        className={
          titleAction
            ? "flex flex-col gap-3 md:flex-row md:items-center md:justify-between"
            : undefined
        }
      >
        <Title
          className={`${compact ? "text-2xl sm:text-[1.75rem]" : "text-3xl sm:text-4xl"} font-bold leading-tight tracking-[-0.035em] ${
            light ? "text-white" : compact ? "text-[#0b4775]" : "text-brand"
          } ${titleAction ? "min-w-0 flex-1 md:whitespace-nowrap md:text-xl lg:text-2xl" : ""}`}
          id={titleId}
        >
          {title}
        </Title>
        {titleAction}
      </div>
      {description ? (
        <p
          className={`${compact ? "mt-1.5 text-xs leading-5 sm:text-sm" : "mt-4 text-base leading-7 sm:text-lg"} ${
            light ? "text-white/70" : "text-slate-600"
          }`}
        >
          {description}
        </p>
      ) : null}
    </div>
  );
}
