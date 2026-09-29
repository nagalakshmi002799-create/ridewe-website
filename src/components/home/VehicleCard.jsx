import { ArrowUpRight, CarFront } from "lucide-react";
import { cn } from "../../lib/cn.js";
import { scrollToSection } from "../../utils/scroll-to-section.js";

export function VehicleCard({ vehicle, className }) {
  return (
    <article
      className={cn(
        "group flex h-full flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white transition-shadow hover:shadow-[0_18px_40px_-28px_rgba(23,38,54,0.4)]",
        className,
      )}
    >
      <div className="relative grid aspect-[1.42/1] place-items-center overflow-hidden bg-[#edf1f3]">
        <span
          aria-hidden="true"
          className="absolute -right-8 -top-12 size-40 rounded-full border border-slate-300/70"
        />
        <span
          aria-hidden="true"
          className="absolute -right-4 -top-8 size-28 rounded-full border border-slate-300/70"
        />
        {vehicle.image ? (
          <img
            alt={`${vehicle.name} tourist vehicle`}
            className="size-full object-cover"
            height="420"
            loading="lazy"
            src={vehicle.image}
            width="600"
          />
        ) : (
          <div className="relative grid size-24 place-items-center rounded-full border border-white bg-white text-brand shadow-[0_10px_25px_-16px_rgba(23,38,54,0.5)]">
            <CarFront aria-hidden="true" size={42} strokeWidth={1.35} />
          </div>
        )}
        {!vehicle.image ? (
          <span className="absolute bottom-3 left-3 rounded-full bg-white/90 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider text-slate-500">
            Image to be added
          </span>
        ) : null}
      </div>
      <div className="flex flex-1 items-center justify-between gap-3 p-4 sm:p-5">
        <div>
          <h3 className="font-bold tracking-tight text-brand">{vehicle.name}</h3>
          <p className="mt-1 text-xs text-slate-500">Tourist vehicle</p>
        </div>
        <a
          aria-label={`Enquire about ${vehicle.name}`}
          className="grid size-10 shrink-0 place-items-center rounded-xl border border-slate-200 text-brand transition-colors hover:border-brand hover:bg-brand hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2"
          href="#contact"
          onClick={(event) => scrollToSection(event, "contact")}
        >
          <ArrowUpRight aria-hidden="true" size={18} />
        </a>
      </div>
    </article>
  );
}
