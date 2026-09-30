import { ArrowUpRight, MapPin, Phone } from "lucide-react";
import { homepageNavigation } from "../../data/homepage.js";
import { PHONE_NUMBER, PHONE_TEL } from "../../utils/contact.js";
import { scrollToSection } from "../../utils/scroll-to-section.js";
import { Container } from "./Container.jsx";
import { WhatsAppButton } from "./WhatsAppButton.jsx";
import { JourneyRoute } from "../home/JourneyRoute.jsx";

export function SiteFooter() {
  return (
    <footer className="relative isolate mt-auto overflow-hidden bg-brand-dark text-white">
      <JourneyRoute
        animated={false}
        className="pointer-events-none absolute bottom-3 right-0 hidden w-[48%] max-w-2xl opacity-15 lg:block"
        dark
        showLabels={false}
      />
      <Container className="relative grid gap-10 py-12 sm:grid-cols-2 lg:grid-cols-[1.3fr_1fr_1fr] lg:py-14">
        <div>
          <a
            className="inline-flex w-fit items-center rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-brand-dark"
            href="#home"
            onClick={(event) => scrollToSection(event, "home")}
          >
            <img
              alt="RideWe Tours & Travels"
              className="w-[220px] object-contain"
              height="78"
              src={`${import.meta.env.BASE_URL}brand/ridewe-logo-horizontal.png`}
              width="220"
            />
          </a>
          <p className="mt-4 max-w-sm text-sm leading-6 text-white/70">
            Ride Together for Better Experiences.
          </p>
          <p className="mt-2 text-sm text-white/70">
            Madurai, Tamil Nadu, India
          </p>
        </div>

        <div>
          <h2 className="text-sm font-semibold text-white">Explore</h2>
          <nav aria-label="Footer navigation" className="mt-3 grid gap-2">
            {homepageNavigation.slice(1).map((item) => (
              <a
                className="w-fit rounded-sm text-sm text-white/70 transition-colors hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
                href={`#${item.id}`}
                key={item.id}
                onClick={(event) => scrollToSection(event, item.id)}
              >
                {item.label}
              </a>
            ))}
          </nav>
        </div>

        <div>
          <h2 className="text-sm font-semibold text-white">Get in touch</h2>
          <div className="mt-3 grid gap-3 text-sm text-white/70">
            <p className="flex items-center gap-2">
              <MapPin aria-hidden="true" className="shrink-0 text-accent" size={16} />
              Madurai, Tamil Nadu, India
            </p>
            <a
              className="flex w-fit items-center gap-2 rounded-sm hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
              href={PHONE_TEL}
            >
              <Phone aria-hidden="true" className="text-accent" size={16} />
              {PHONE_NUMBER}
            </a>
            <WhatsAppButton className="mt-1 w-fit" size="sm" variant="secondary">
              WhatsApp RideWe
            </WhatsAppButton>
          </div>
        </div>
      </Container>

      <div className="border-t border-white/10">
        <Container className="flex flex-col gap-2 py-4 text-xs text-white/55 sm:flex-row sm:items-center sm:justify-between">
          <p>Ride Together for Better Experiences.</p>
          <a
            className="inline-flex w-fit items-center gap-1 rounded-sm hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
            href="#home"
            onClick={(event) => scrollToSection(event, "home")}
          >
            Back to top <ArrowUpRight aria-hidden="true" size={14} />
          </a>
        </Container>
      </div>
    </footer>
  );
}
