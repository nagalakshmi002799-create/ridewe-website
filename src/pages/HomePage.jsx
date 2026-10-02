import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { HeroSection } from "../components/home/HeroSection.jsx";
import { RouteSection } from "../components/home/RouteSection.jsx";
import { SectionIntro } from "../components/home/SectionIntro.jsx";
import { ServicesSection } from "../components/home/ServicesSection.jsx";
import { VehiclesSection } from "../components/home/VehiclesSection.jsx";
import { Container } from "../components/layout/Container.jsx";
import { Section } from "../components/layout/Section.jsx";
import { WhatsAppButton } from "../components/layout/WhatsAppButton.jsx";
import { Button } from "../components/ui/button.jsx";
import { primaryContact } from "../utils/contact.js";

export function HomePage() {
  return (
    <>
      <HeroSection />
      <RouteSection />

      <Section className="bg-surface" id="about-preview">
        <Container className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div>
            <SectionIntro
              description="RideWe helps families, friends and travellers plan comfortable journeys across Madurai and South India with straightforward vehicle and tour guidance."
              eyebrow="About RideWe"
              title="Ride Together for Better Experiences."
            />
            <Button asChild className="mt-2 w-fit" variant="outline">
              <Link to="/about">
                Read More About Us
                <ArrowRight aria-hidden="true" size={16} />
              </Link>
            </Button>
          </div>
          <div className="rounded-[1.75rem] border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-accent-dark">
              Plan with clarity
            </p>
            <ul className="mt-5 space-y-3 text-sm leading-6 text-slate-600">
              <li>• Tour packages and custom trip ideas</li>
              <li>• Tourist vehicle rental and airport transfers</li>
              <li>• Route planning for outstation and sightseeing journeys</li>
            </ul>
          </div>
        </Container>
      </Section>

      <ServicesSection compact serviceIds={["tour-packages", "customized-tours", "vehicle-rental"]} />
      <VehiclesSection preview />

      <Section className="bg-surface" id="destinations-preview">
        <Container className="grid gap-6 lg:grid-cols-[1fr_auto] lg:items-center">
          <div>
            <SectionIntro
              description="Tell us where you would like to go. RideWe can help shape the route around your preferred destinations and travel plans."
              eyebrow="Tour Destinations"
              title="Explore the places you have in mind."
            />
          </div>
          <Button asChild className="w-fit" variant="outline">
            <Link to="/tour-destinations">Explore Destinations</Link>
          </Button>
        </Container>
      </Section>

      <Section className="bg-white" id="contact-preview">
        <Container className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <div>
            <SectionIntro
              description="Share your route, dates and travel plans. RideWe will help you work out the best option for your journey."
              eyebrow="Contact Us"
              title="Ready to plan your trip?"
            />
            <div className="mt-2 flex flex-wrap gap-3">
              <Button asChild className="w-fit">
                <Link to="/contact">Contact RideWe</Link>
              </Button>
              <WhatsAppButton className="w-fit" variant="outline">
                WhatsApp Us
              </WhatsAppButton>
            </div>
          </div>

          <div className="rounded-[1.75rem] border border-slate-200 bg-surface p-6 sm:p-8">
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-accent-dark">
              Direct enquiry
            </p>
            <div className="mt-5 space-y-4 text-sm text-slate-600">
              <p>
                <span className="font-semibold text-brand">Phone:</span>{" "}
                <a className="hover:underline" href={primaryContact.phoneHref}>
                  {primaryContact.phone}
                </a>
              </p>
              <p>
                <span className="font-semibold text-brand">WhatsApp:</span>{" "}
                <a
                  className="hover:underline"
                  href={primaryContact.whatsappHref}
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  {primaryContact.phone}
                </a>
              </p>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}
