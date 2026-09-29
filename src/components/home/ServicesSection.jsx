import { homepageServices } from "../../data/homepage.js";
import { Container } from "../layout/Container.jsx";
import { Section } from "../layout/Section.jsx";
import { SectionIntro } from "./SectionIntro.jsx";
import { ServiceCard } from "./ServiceCard.jsx";

export function ServicesSection() {
  return (
    <Section aria-labelledby="services-title" className="bg-surface" id="tours">
      <Container>
        <SectionIntro
          description="From a day of sightseeing to a longer journey, tell us what you have in mind."
          eyebrow="Travel with RideWe"
          titleId="services-title"
          title="One place to begin your journey."
        />
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {homepageServices.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>
      </Container>
    </Section>
  );
}
