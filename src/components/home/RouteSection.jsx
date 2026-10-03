import { ArrowRight } from "lucide-react";
import { Button } from "../ui/button.jsx";
import { scrollToSection } from "../../utils/scroll-to-section.js";

const routeImages = `${import.meta.env.BASE_URL}images/home/route-to-imagine`;

export function RouteSection() {
  return (
    <section
      aria-labelledby="route-title"
      className="relative isolate bg-[length:auto_170%] bg-[position:center_43%] text-[#0b4775]"
      id="route"
      style={{ backgroundImage: `url("${routeImages}/route-background.png")` }}
    >
      <div className="relative mx-auto min-h-[440px] max-w-[1600px] px-5 py-8 sm:px-8 sm:py-10 md:min-h-[360px] md:py-0 lg:min-h-[400px] lg:px-12">
        <div className="relative z-20 max-w-[520px] md:absolute md:left-8 md:top-1/2 md:w-[41%] md:-translate-y-1/2 lg:left-12">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#007f91] sm:text-sm">
            Journeys start here
          </p>
          <h2
            className="mt-3 text-3xl font-bold leading-tight tracking-[-0.035em] sm:text-4xl md:text-3xl lg:text-[2.65rem]"
            id="route-title"
          >
            From your starting point
            <br className="hidden sm:block" /> to your destination,
          </h2>
          <p className="mt-3 text-base leading-6 text-[#174c72] sm:text-lg">
            RideWe helps you plan the journey.
          </p>
          <Button
            asChild
            className="mt-5 h-11 rounded-full border-0 bg-gradient-to-r from-[#00a9c5] to-[#31c66a] px-5 text-sm !text-white shadow-md hover:brightness-105"
            onClick={(event) => scrollToSection(event, "trip-planner")}
          >
            <a href="#trip-planner">
              Plan My Trip
              <ArrowRight aria-hidden="true" size={17} />
            </a>
          </Button>
        </div>
        <img
          alt="RideWe journey by road from Madurai through Kerala to Karnataka"
          className="relative z-10 mt-6 block h-auto w-full object-contain md:absolute md:right-8 md:top-[44%] md:mt-0 md:w-[56%] md:-translate-y-1/2 lg:right-12 lg:w-[60%] lg:max-w-[1100px]"
          height="725"
          loading="eager"
          src={`${routeImages}/route-static.png`}
          width="2170"
        />
      </div>
    </section>
  );
}
