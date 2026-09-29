import { motion, useReducedMotion } from "motion/react";
import { routeStops } from "../../data/homepage.js";
import { Container } from "../layout/Container.jsx";

export function RouteSection() {
  const reduceMotion = useReducedMotion();
  const pathAnimation = reduceMotion
    ? { animate: { pathLength: 1 } }
    : {
        initial: { pathLength: 0 },
        whileInView: { pathLength: 1 },
        viewport: { once: true, amount: 0.5 },
        transition: { duration: 1.1, ease: "easeInOut" },
      };

  return (
    <section
      aria-labelledby="route-title"
      className="overflow-hidden border-y border-slate-200 bg-[#f0f3f4] py-10 sm:py-12"
      id="route"
    >
      <Container>
        <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-amber-800">
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

        <div className="relative mt-8">
          <svg
            aria-hidden="true"
            className="absolute inset-x-[8%] top-3 hidden h-12 w-[84%] overflow-visible md:block"
            preserveAspectRatio="none"
            viewBox="0 0 1000 60"
          >
            <motion.path
              d="M 20 30 C 170 2, 230 58, 340 30 S 500 3, 610 30 S 800 58, 980 30"
              fill="none"
              pathLength="1"
              stroke="#c7a449"
              strokeDasharray="5 8"
              strokeLinecap="round"
              strokeWidth="2"
              {...pathAnimation}
            />
          </svg>
          <ol className="relative grid grid-cols-2 gap-x-5 gap-y-6 md:grid-cols-4 md:gap-5">
            {routeStops.map((stop, index) => (
              <li className="flex items-center gap-3 md:flex-col md:gap-2" key={stop}>
                <span
                  className={`grid size-7 shrink-0 place-items-center rounded-full border-[5px] border-white shadow-sm ${
                    index === 0 || index === routeStops.length - 1
                      ? "bg-accent"
                      : "bg-brand"
                  }`}
                >
                  <span className="sr-only">Stop {index + 1}</span>
                </span>
                <span className="text-sm font-semibold text-brand md:text-center">
                  {stop}
                </span>
              </li>
            ))}
          </ol>
        </div>
      </Container>
    </section>
  );
}
