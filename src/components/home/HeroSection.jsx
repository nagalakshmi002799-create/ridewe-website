import { ArrowRight } from "lucide-react";
import { motion, useReducedMotion } from "motion/react";
import { Button } from "../ui/button.jsx";
import { Container } from "../layout/Container.jsx";
import { WhatsAppButton } from "../layout/WhatsAppButton.jsx";
import { scrollToSection } from "../../utils/scroll-to-section.js";
import { TripPlannerPanel } from "./TripPlannerPanel.jsx";

const homeImages = `${import.meta.env.BASE_URL}images/home`;
const ciazImage = `${import.meta.env.BASE_URL}images/vehicles/ciaz.png`;
const rideweLogo = `${import.meta.env.BASE_URL}brand/ridewe-logo-horizontal.png`;

export function HeroSection() {
  const reduceMotion = useReducedMotion();

  return (
    <section
      aria-labelledby="hero-title"
      className="relative isolate overflow-hidden bg-[#e9f4f5] text-[#0b4775]"
      id="home"
    >
      <motion.img
        alt=""
        animate={reduceMotion ? undefined : { scale: 1.035, x: [0, -5, 0] }}
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 size-full object-cover object-[center_56%]"
        src={`${homeImages}/munnar-mountains.webp`}
        transition={{ duration: 24, ease: "easeInOut", repeat: Infinity }}
      />
      <img
        alt=""
        aria-hidden="true"
        className="pointer-events-none absolute inset-y-0 left-0 h-full w-[65%] object-cover object-[center_62%] sm:w-[56%]"
        loading="eager"
        src={`${import.meta.env.BASE_URL}images/destinations/kerala-coast.webp`}
        style={{
          maskImage: "linear-gradient(90deg, #000 0%, #000 54%, transparent 100%)",
          WebkitMaskImage: "linear-gradient(90deg, #000 0%, #000 54%, transparent 100%)",
        }}
      />
      <img
        alt=""
        aria-hidden="true"
        className="pointer-events-none absolute inset-y-0 left-[38%] hidden h-full w-[28%] object-cover object-[center_18%] md:block"
        loading="eager"
        src={`${homeImages}/madurai-meenakshi.webp`}
        style={{
          maskImage: "linear-gradient(90deg, transparent 0%, #000 18%, #000 76%, transparent 100%)",
          WebkitMaskImage: "linear-gradient(90deg, transparent 0%, #000 18%, #000 76%, transparent 100%)",
        }}
      />
      <img
        alt=""
        aria-hidden="true"
        className="pointer-events-none absolute inset-y-0 right-0 h-full w-[64%] object-cover object-[center_60%] sm:w-[55%]"
        loading="eager"
        src={`${homeImages}/munnar-road.webp`}
        style={{
          maskImage: "linear-gradient(270deg, #000 0%, #000 48%, transparent 100%)",
          WebkitMaskImage: "linear-gradient(270deg, #000 0%, #000 48%, transparent 100%)",
        }}
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-gradient-to-r from-white/70 via-white/45 to-white/10"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-0 right-[2%] z-0 hidden w-[clamp(145px,17vw,220px)] sm:block"
      >
        <img alt="" className="block w-full object-contain" src={ciazImage} />
        <img
          alt=""
          className="absolute bottom-[34%] left-[31%] w-[19%] object-contain"
          src={rideweLogo}
        />
      </div>
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
          <p className="mt-4 max-w-[490px] text-sm leading-6 text-[#174c72] sm:text-base sm:leading-6">
            Travel with RideWe Tours &amp; Travels for comfortable journeys,
            sightseeing, vehicle rental, outstation travel, airport transfers, and
            customized trips across South India.
          </p>
          <div className="mt-5 flex flex-wrap gap-3">
            <Button
              asChild
              className="group h-10 rounded-full border-0 bg-gradient-to-r from-[#00a9c5] to-[#31c66a] px-5 text-sm !text-white shadow-md hover:brightness-105"
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
              className="h-10 rounded-full border-[#00a9b5] bg-white/90 px-5 text-sm text-[#078a8e] hover:bg-white"
              variant="outline"
            >
              Enquire on WhatsApp
            </WhatsAppButton>
          </div>
        </motion.div>

        <TripPlannerPanel className="mt-0 w-full max-w-[500px] justify-self-center rounded-2xl border-white/80 bg-white/95 p-4 shadow-[0_18px_48px_-22px_rgba(0,52,94,0.35)] backdrop-blur-sm sm:p-5 lg:justify-self-end" />
      </Container>
    </section>
  );
}
