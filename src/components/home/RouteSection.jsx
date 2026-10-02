import { Container } from "../layout/Container.jsx";
import { JourneyRoute } from "./JourneyRoute.jsx";

const routeBackground = `${import.meta.env.BASE_URL}images/hero-south-india.svg`;

export function RouteSection() {
  return (
    <section
      aria-labelledby="route-title"
      className="relative isolate overflow-hidden bg-[#e8f7f9] py-8 text-[#0b4775] sm:py-10"
      id="route"
    >
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-cover bg-[center_15%] opacity-[0.12]"
        style={{ backgroundImage: `url("${routeBackground}")` }}
      />
      <div aria-hidden="true" className="absolute inset-0 -z-10 bg-gradient-to-r from-white/90 via-[#edfaff]/85 to-white/60" />
      <Container className="relative grid gap-5 lg:grid-cols-[0.68fr_1.32fr] lg:items-center">
        <div>
          <div>
            <p className="text-[11px] font-bold uppercase tracking-[0.16em] text-[#00a9b5]">
              Journeys start here
            </p>
            <h2
              className="mt-1.5 max-w-sm text-2xl font-bold leading-[1.12] tracking-[-0.035em] text-[#0b4775] sm:text-3xl"
              id="route-title"
            >
              From your starting point to your destination.
            </h2>
          </div>
          <p className="mt-2 max-w-md text-sm leading-5 text-[#245879]">
            RideWe helps you plan the journey.
          </p>
          <a
            className="mt-3 inline-flex h-9 items-center gap-2 rounded-full bg-gradient-to-r from-[#00a9c5] to-[#31c66a] px-5 text-sm font-semibold !text-white shadow-sm transition hover:brightness-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#007a83] focus-visible:ring-offset-2"
            href="#trip-planner"
            onClick={(event) => {
              event.preventDefault();
              document.getElementById("trip-planner")?.scrollIntoView({
                behavior: "smooth",
                block: "start",
              });
            }}
          >
            Plan My Trip <span aria-hidden="true">→</span>
          </a>
        </div>
        <div className="min-w-0">
          <JourneyRoute className="mt-2" showLabels />
          <p className="mt-1 text-right text-[9px] leading-3 text-slate-500">
            Illustrative route only; it does not define a fixed itinerary.
          </p>
        </div>
      </Container>
    </section>
  );
}
