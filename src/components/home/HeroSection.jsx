import { ArrowDown, ArrowRight, MapPin, ShieldCheck } from "lucide-react";
import { motion, useReducedMotion } from "motion/react";
import { Button } from "../ui/button.jsx";
import { Container } from "../layout/Container.jsx";
import { WhatsAppButton } from "../layout/WhatsAppButton.jsx";
import { scrollToSection } from "../../utils/scroll-to-section.js";
import { TripPlannerPanel } from "./TripPlannerPanel.jsx";

const heroImage = `${import.meta.env.BASE_URL}images/hero-south-india.svg`;

export function HeroSection() {
  const reduceMotion = useReducedMotion();

  return (
    <section
      aria-labelledby="hero-title"
      className="relative isolate overflow-hidden bg-white"
      id="home"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-36 -top-40 size-[30rem] rounded-full bg-amber-50"
      />
      <Container className="relative grid items-center gap-10 pb-14 pt-10 sm:pb-20 sm:pt-14 lg:min-h-[650px] lg:grid-cols-[0.94fr_1.06fr] lg:gap-8 lg:pb-20 lg:pt-16">
        <motion.div
          animate={reduceMotion ? undefined : { opacity: 1, y: 0 }}
          className="relative z-10"
          initial={reduceMotion ? false : { opacity: 0, y: 14 }}
          transition={{ duration: 0.45, ease: "easeOut" }}
        >
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-3.5 py-2 text-xs font-semibold text-slate-700 shadow-sm">
            <MapPin aria-hidden="true" className="text-amber-700" size={15} />
            Madurai, Tamil Nadu, India
          </div>
          <h1
            className="max-w-xl text-[2.65rem] font-bold leading-[1.08] tracking-[-0.045em] text-brand sm:text-6xl"
            id="hero-title"
          >
            Ride Together for{" "}
            <span className="relative inline-block">
              Better Experiences.
              <span
                aria-hidden="true"
                className="absolute -bottom-1 left-0 -z-10 h-2.5 w-full rounded-full bg-accent/55 sm:h-3"
              />
            </span>
          </h1>
          <p className="mt-5 max-w-xl text-base leading-7 text-slate-600 sm:text-lg sm:leading-8">
            Comfortable rides, curated tours, sightseeing and flexible travel
            from Madurai across South India.
          </p>
          <div className="mt-7 flex flex-wrap gap-3">
            <Button
              asChild
              className="group"
              onClick={(event) => scrollToSection(event, "trip-planner")}
              size="lg"
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
            <WhatsAppButton size="lg" variant="outline">
              WhatsApp Us
            </WhatsAppButton>
          </div>
          <div className="mt-8 flex items-center gap-2 text-sm text-slate-500">
            <ShieldCheck aria-hidden="true" className="text-slate-400" size={17} />
            <span>Share your plans directly with RideWe.</span>
          </div>
        </motion.div>

        <div className="relative mx-auto w-full max-w-[650px] lg:ml-auto">
          <div className="relative overflow-hidden rounded-[1.75rem] border border-slate-200 bg-[#eaf0f1] shadow-[0_24px_70px_-35px_rgba(23,38,54,0.45)]">
            <img
              alt="Original illustration of a white tourist vehicle travelling through a South Indian hill landscape"
              className="aspect-[1.2/1] w-full object-cover sm:aspect-[1.35/1]"
              height="720"
              src={heroImage}
              width="960"
            />
            <div className="absolute bottom-4 left-4 flex items-center gap-2 rounded-xl border border-white/70 bg-white/95 px-3.5 py-3 shadow-lg sm:bottom-6 sm:left-6">
              <span className="grid size-9 place-items-center rounded-lg bg-amber-100 text-amber-800">
                <MapPin aria-hidden="true" size={17} />
              </span>
              <span>
                <span className="block text-xs font-semibold text-brand">
                  Start your journey
                </span>
                <span className="mt-0.5 block text-[11px] text-slate-500">
                  From Madurai
                </span>
              </span>
            </div>
            <a
              className="absolute right-4 top-4 grid size-10 place-items-center rounded-full border border-white/70 bg-white/90 text-brand shadow-sm transition-transform hover:translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2 sm:right-6 sm:top-6"
              href="#route"
              onClick={(event) => scrollToSection(event, "route")}
              aria-label="Explore the sample route"
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
