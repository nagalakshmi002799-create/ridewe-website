import { ArrowRight } from "lucide-react";
import { motion, useReducedMotion } from "motion/react";
import { Button } from "../ui/button.jsx";
import { Container } from "../layout/Container.jsx";
import { WhatsAppButton } from "../layout/WhatsAppButton.jsx";
import { scrollToSection } from "../../utils/scroll-to-section.js";
import { TripPlannerPanel } from "./TripPlannerPanel.jsx";

const homeImages = `${import.meta.env.BASE_URL}images/home`;

export function HeroSection() {
  const reduceMotion = useReducedMotion();

  return (
    <section
      aria-labelledby="hero-title"
      className="relative isolate min-h-[calc(100svh-73px-10.49vw)] overflow-hidden bg-[#e9f4f5] bg-cover bg-no-repeat bg-[position:65%_56%] text-[#0b4775] sm:min-h-[calc(100svh-81px-10.49vw)] sm:bg-[position:50%_56%] lg:bg-[position:54%_56%] xl:min-h-[calc(100svh-77px-10.49vw)]"
      id="home"
      style={{
        backgroundImage: `url("${homeImages}/hero/ride-together-background.png")`,
      }}
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-gradient-to-r from-white/60 via-white/5 to-white/2"
      />
      <Container className="relative z-10 grid items-center gap-7 py-9 sm:py-12 lg:min-h-[410px] lg:grid-cols-[1.08fr_0.92fr] lg:gap-12 lg:py-6">
        <motion.div
          animate={reduceMotion ? undefined : { opacity: 1, y: 0 }}
          className="relative z-10 max-w-[590px]"
          initial={reduceMotion ? false : { opacity: 0, y: 18 }}
          transition={{ duration: 0.45, ease: "easeOut" }}
        >
          <h1
            className="max-w-xl text-[2.45rem] font-bold leading-[1.04] tracking-[-0.045em] text-[#0b4775] sm:text-5xl lg:text-[3.1rem]"
            id="hero-title"
          >
            Ride Together for
            <span className="block bg-gradient-to-r from-[#078cc5] via-[#00a9b5] to-[#26bd71] bg-clip-text text-transparent">
              Better Experiences.
            </span>
          </h1>
          <p className="mt-4 max-w-[490px] text-sm font-medium leading-6 text-[#174c72] sm:text-base sm:leading-6">
            Travel with RideWe Tours & Travels for comfortable rides, reliable cab services, airport transfers, sightseeing, outstation journeys, and thoughtfully customized trips.
          </p>
          <div className="mt-5 flex flex-wrap gap-3">
            <Button
              asChild
              className="group h-10 rounded-full border-0 bg-gradient-to-r from-[#00a9c5] to-[#31c66a] px-5 text-sm !text-white shadow-[0_8px_18px_-12px_rgba(0,100,110,0.65)] transition-shadow hover:brightness-105 hover:shadow-[0_10px_20px_-10px_rgba(0,100,110,0.55)]"
              onClick={(event) => scrollToSection(event, "trip-planner")}
            >
              <a href="#trip-planner">
                Plan My Trip
                <ArrowRight
                  aria-hidden="true"
                  className="transition-transform group-hover:translate-x-0.5"
                  size={17}
                />
              </a>
            </Button>
            <WhatsAppButton
              className="h-10 rounded-full border-[#00a9b5] bg-white/90 px-5 text-sm text-[#078a8e] shadow-[0_8px_18px_-12px_rgba(0,100,110,0.45)] transition-shadow hover:bg-white hover:shadow-[0_10px_20px_-10px_rgba(0,100,110,0.4)]"
              variant="outline"
            >
              Enquire on WhatsApp
            </WhatsAppButton>
          </div>
        </motion.div>

        <TripPlannerPanel className="mt-0 w-full max-w-[500px] justify-self-center rounded-2xl border-white/80 bg-white/95 p-4 shadow-[0_18px_48px_-22px_rgba(0,52,94,0.35)] transition-shadow hover:shadow-[0_22px_48px_-20px_rgba(0,52,94,0.38)] backdrop-blur-sm sm:p-5 lg:justify-self-end" />
      </Container>
    </section>
  );
}
