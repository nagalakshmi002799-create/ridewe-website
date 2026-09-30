import { ArrowRight, CalendarDays, MapPin, Users } from "lucide-react";
import { Button } from "../ui/button.jsx";
import { Container } from "../layout/Container.jsx";
import { WhatsAppButton } from "../layout/WhatsAppButton.jsx";
import { scrollToSection } from "../../utils/scroll-to-section.js";

export function TripPlanningCta() {
  return (
    <section
      aria-labelledby="planning-cta-title"
      className="relative isolate overflow-hidden bg-brand-dark py-14 sm:py-20"
      id="contact"
    >
      <div
        aria-hidden="true"
        className="absolute -right-24 -top-40 -z-10 size-[28rem] rounded-full border border-white/10"
      />
      <div
        aria-hidden="true"
        className="absolute -right-10 -top-24 -z-10 size-[21rem] rounded-full border border-white/10"
      />
      <Container className="grid gap-10 lg:grid-cols-[1fr_auto] lg:items-center">
        <div className="max-w-2xl">
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-accent">
            Let&apos;s plan your next journey
          </p>
          <h2
            className="mt-3 text-3xl font-bold tracking-[-0.035em] text-white sm:text-5xl"
            id="planning-cta-title"
          >
            Planning a trip?
          </h2>
          <p className="mt-4 max-w-xl text-base leading-7 text-white/70 sm:text-lg">
            Share your destination, travel dates, number of travellers and vehicle
            requirement. RideWe is ready to hear about your plans.
          </p>
          <div className="mt-6 flex flex-wrap gap-x-5 gap-y-3 text-sm text-white/75">
            <span className="inline-flex items-center gap-2">
              <MapPin aria-hidden="true" className="text-accent" size={16} />
              Destination
            </span>
            <span className="inline-flex items-center gap-2">
              <CalendarDays aria-hidden="true" className="text-accent" size={16} />
              Travel dates
            </span>
            <span className="inline-flex items-center gap-2">
              <Users aria-hidden="true" className="text-accent" size={16} />
              Travellers &amp; vehicle
            </span>
          </div>
        </div>
        <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
          <Button
            asChild
            className="group bg-gradient-to-r from-accent to-[#35D45B] text-brand hover:brightness-95"
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
          <WhatsAppButton
            size="lg"
            variant="whatsapp"
          >
            WhatsApp RideWe
          </WhatsAppButton>
        </div>
      </Container>
    </section>
  );
}
