import { Container } from "../layout/Container.jsx";
import { JourneyRoute } from "./JourneyRoute.jsx";

export function RouteSection() {
  return (
    <section
      aria-labelledby="route-title"
      className="overflow-hidden border-y border-slate-200 bg-[#f5f8f7] py-10 sm:py-12"
      id="route"
    >
      <Container>
        <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-accent-dark">
              A route to imagine
            </p>
            <h2
              className="mt-2 text-xl font-bold tracking-tight text-brand sm:text-2xl"
              id="route-title"
            >
              Your journey, your way.
            </h2>
          </div>
          <p className="text-sm text-slate-500">
            A sample route from Madurai through the hills
          </p>
        </div>

        <JourneyRoute className="mt-6 sm:mt-8" />
        <p className="mt-4 text-xs text-slate-500">
          Illustrative sample route only; destinations are not a fixed package.
        </p>
      </Container>
    </section>
  );
}
