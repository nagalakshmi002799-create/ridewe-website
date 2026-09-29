export function SectionHeader({
  eyebrow,
  title,
  description,
  action,
}) {
  return (
    <div className="mb-8 flex flex-col gap-5 sm:mb-10 sm:flex-row sm:items-end sm:justify-between">
      <div className="max-w-2xl">
        {eyebrow ? (
          <p className="mb-2 text-sm font-semibold uppercase tracking-[0.14em] text-brand">
            {eyebrow}
          </p>
        ) : null}
        <h2 className="text-2xl font-bold tracking-tight text-slate-950 sm:text-3xl">
          {title}
        </h2>
        {description ? (
          <p className="mt-3 text-base leading-7 text-slate-600">
            {description}
          </p>
        ) : null}
      </div>
      {action}
    </div>
  );
}
