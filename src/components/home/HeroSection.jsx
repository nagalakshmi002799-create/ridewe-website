import { ArrowDown, ArrowRight, MapPin, ShieldCheck } from "lucide-react";
import { motion, useReducedMotion } from "motion/react";
import { Button } from "../ui/button.jsx";
import { Container } from "../layout/Container.jsx";
import { WhatsAppButton } from "../layout/WhatsAppButton.jsx";
import { scrollToSection } from "../../utils/scroll-to-section.js";
import { JourneyRoute } from "./JourneyRoute.jsx";
import { TripPlannerPanel } from "./TripPlannerPanel.jsx";

const heroLogo = `${import.meta.env.BASE_URL}brand/ridewe-logo-circle.png`;

export function HeroSection() {
  const reduceMotion = useReducedMotion();

  return (
    <section
      aria-labelledby="hero-title"
      className="relative isolate overflow-hidden bg-[#0B0D0F] text-white"
      id="home"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-16 top-12 size-72 rounded-full bg-[#00A9B5]/10 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-20 top-0 size-96 rounded-full bg-[#35D45B]/10 blur-3xl"
      />
      <Container className="relative grid items-center gap-10 pb-14 pt-10 sm:pb-20 sm:pt-14 lg:min-h-[680px] lg:grid-cols-[0.94fr_1.06fr] lg:gap-8 lg:pb-[5.5rem] lg:pt-16">
        <motion.div
          animate={reduceMotion ? undefined : { opacity: 1, y: 0 }}
          className="relative z-10"
          initial={reduceMotion ? false : { opacity: 0, y: 18 }}
          transition={{ duration: 0.45, ease: "easeOut" }}
        >
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3.5 py-2 text-[11px] font-semibold uppercase tracking-[0.2em] text-white/80 backdrop-blur-sm">
            <MapPin aria-hidden="true" className="text-[#7ae3d6]" size={14} />
            Madurai • South India
          </div>
          <h1
            className="max-w-xl text-[2.7rem] font-bold leading-[1.04] tracking-[-0.055em] text-white sm:text-5xl lg:text-[4.2rem]"
            id="hero-title"
          >
            Ride Together for{" "}
            <span className="relative inline-block text-[#dffaf6]">
              Better Experiences.
              <span
                aria-hidden="true"
                className="absolute -bottom-1 left-0 -z-10 h-3 w-full rounded-full bg-gradient-to-r from-[#00A9B5]/80 to-[#35D45B]/70"
              />
            </span>
          </h1>
          <p className="mt-5 max-w-xl text-base leading-7 text-white/75 sm:text-lg sm:leading-8">
            RideWe helps you plan tours, transport and journeys across South India,
            from straightforward airport transfers to thoughtfully designed family
            and sightseeing trips.
          </p>
          <div className="mt-7 flex flex-wrap gap-3">
            <Button
              asChild
              className="group border border-[#00A9B5]/60 bg-gradient-to-r from-[#00A9B5] to-[#35D45B] text-[#0b0d0f] hover:brightness-105"
              onClick={(event) => scrollToSection(event, "trip-planner")}
              size="lg"
            >
              <a href="#trip-planner">
                Plan Your Trip
                <ArrowRight
                  aria-hidden="true"
                  className="transition-transform group-hover:translate-x-0.5"
                  size={17}
                />
              </a>
            </Button>
            <WhatsAppButton
              size="lg"
              variant="whatsapp"
            >
              WhatsApp Us
            </WhatsAppButton>
          </div>
          <div className="mt-8 flex items-center gap-2 text-sm text-white/70">
            <ShieldCheck aria-hidden="true" className="text-[#7ae3d6]" size={17} />
            <span>Share your plans directly with RideWe.</span>
          </div>
        </motion.div>

        <div className="relative mx-auto w-full max-w-[660px] lg:ml-auto">
          <div className="relative overflow-hidden rounded-[2rem] border border-white/15 bg-[#F5F8F7] p-5 shadow-[0_30px_80px_-32px_rgba(0,169,181,0.35)] sm:p-8">
            <div
              aria-hidden="true"
              className="absolute -right-18 -top-20 size-60 rounded-full border border-[#00A9B5]/25"
            />
            <div
              aria-hidden="true"
              className="absolute -left-10 top-10 size-20 rounded-full bg-[#35D45B]/15"
            />
            <div className="relative z-10 flex flex-col items-center">
              <div className="relative mb-4 flex w-full items-center justify-center">
                <span className="absolute left-0 top-1/2 h-px w-full bg-white/10" />
                <span className="relative rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.2em] text-[#dffaf6]">
                  South India travel
                </span>
              </div>
              <img
                alt="RideWe Tours & Travels logo showing a car, road, mountains and sun"
                className="w-[min(72%,300px)] object-contain"
                height="300"
                src={heroLogo}
                width="300"
              />
              <div className="mt-4 w-full max-w-md rounded-2xl border border-slate-200 bg-white px-4 pb-4 pt-2 shadow-sm">
                <p className="text-center text-[10px] font-bold uppercase tracking-[0.16em] text-[#007a83]">
                  A route to imagine
                </p>
                <JourneyRoute
                  animated={false}
                  className="mt-1"
                  showLabels={false}
                />
                <div className="flex justify-between text-[11px] font-semibold text-slate-600">
                  <span>Madurai</span>
                  <span>South India</span>
                </div>
              </div>
            </div>
            <a
              className="absolute right-4 top-4 z-20 grid size-10 place-items-center rounded-full border border-slate-200 bg-white text-brand shadow-sm transition-colors hover:border-accent/50 hover:bg-brand-soft focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 sm:right-6 sm:top-6"
              href="#route"
              aria-label="Explore the sample route"
              onClick={(event) => scrollToSection(event, "route")}
            >
              <ArrowDown aria-hidden="true" size={18} />
            </a>
          </div>
          <TripPlannerPanel />
        </div>
      </Container>
    </section>
  );
}
