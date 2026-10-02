import { Link } from "react-router-dom";
import { HeroSection } from "../components/home/HeroSection.jsx";
import { RouteSection } from "../components/home/RouteSection.jsx";
import { SectionIntro } from "../components/home/SectionIntro.jsx";
import { ServicesSection } from "../components/home/ServicesSection.jsx";
import { VehiclesSection } from "../components/home/VehiclesSection.jsx";
import { Container } from "../components/layout/Container.jsx";
import { PhoneButton } from "../components/layout/PhoneButton.jsx";
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
        <Container>
          <div>
            <SectionIntro
              description="RideWe Tours & Travels helps individuals, families, and groups plan and travel comfortably with suitable vehicles, sightseeing support, and customized travel options. From local sightseeing to outstation journeys, we focus on making travel planning simple and helping you choose the right option for your trip."
              eyebrow="About RideWe"
              title="Travel Made Simple with RideWe"
            />
            <Button asChild className="mt-2 w-fit" variant="outline">
              <Link to="/about">Read More About RideWe</Link>
            </Button>
          </div>
        </Container>
      </Section>

      <ServicesSection compact serviceIds={["tour-packages", "customized-tours", "vehicle-rental"]} />
      <VehiclesSection preview />

      <Section className="bg-surface" id="destinations-preview">
        <Container className="grid gap-6 lg:grid-cols-[1fr_auto] lg:items-center">
          <div>
            <SectionIntro
              description="Discover destinations across Tamil Nadu and South India with travel options that can be planned around your route, dates, group size, and vehicle preference."
              eyebrow="Tour Destinations"
              title="Explore South India with RideWe"
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
              description="Share your travel plans with us and discuss the suitable vehicle and travel option for your journey."
              eyebrow="Contact Us"
              title="Plan Your Journey with RideWe"
            />
            <div className="mt-2 flex flex-wrap gap-3">
              <PhoneButton
                ariaLabel={`Call ${primaryContact.name} at ${primaryContact.phone}`}
                className="h-10 min-h-10 rounded-md bg-gradient-to-r from-accent to-[#35D45B] px-4 py-2.5 text-sm text-white hover:brightness-95 hover:text-white"
                iconClassName="brightness-0 invert"
                style={{ color: "#fff" }}
                variant="primary"
              >
                Call Now
              </PhoneButton>
              <WhatsAppButton className="w-fit" variant="outline">
                WhatsApp RideWe
              </WhatsAppButton>
              <Button asChild className="w-fit" variant="outline">
                <Link to="/contact">Contact Us</Link>
              </Button>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}
