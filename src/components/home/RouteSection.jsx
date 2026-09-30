import { Container } from "../layout/Container.jsx";
import { JourneyRoute } from "./JourneyRoute.jsx";

export function RouteSection() {
  return (
    <section
      aria-labelledby="route-title"
      className="relative overflow-hidden border-y border-white/10 bg-[#0B0D0F] py-10 text-white sm:py-14"
      id="route"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#00A9B5]/60 to-transparent"
      />
      <Container className="relative">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#7ae3d6]">
              A route to imagine
            </p>
            <h2
              className="mt-2 text-2xl font-bold tracking-[-0.04em] text-white sm:text-4xl"
              id="route-title"
            >
              Map the journey, then make it yours.
            </h2>
          </div>
          <p className="max-w-xl text-sm leading-6 text-white/70 sm:text-base">
            From Madurai to relaxed scenic escapes and multi-day planning, the path
            can be shaped around the way you want to travel.
          </p>
        </div>

        <div className="mt-8 overflow-hidden rounded-[2rem] border border-white/10 bg-[#121A1E] p-5 shadow-[0_32px_80px_-40px_rgba(0,169,181,0.35)] sm:p-8">
          <JourneyRoute className="mt-2" dark showLabels />
        </div>
        <p className="mt-4 text-xs text-white/55">
          Illustrative route only; it is meant to inspire the journey, not define a fixed itinerary.
        </p>
      </Container>
    </section>
  );
}
