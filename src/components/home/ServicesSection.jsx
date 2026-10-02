import { Link } from "react-router-dom";
import { homepageServices } from "../../data/homepage.js";
import { Button } from "../ui/button.jsx";
import { Container } from "../layout/Container.jsx";
import { Section } from "../layout/Section.jsx";
import { SectionIntro } from "./SectionIntro.jsx";
import { ServiceCard } from "./ServiceCard.jsx";

export function ServicesSection({ compact = false, serviceIds = null }) {
  const selectedServices = serviceIds
    ? homepageServices.filter((service) => serviceIds.includes(service.id))
    : homepageServices;

  const services = compact ? selectedServices.slice(0, 3) : selectedServices;

  return (
    <Section aria-labelledby="services-title" className="bg-surface" id={compact ? undefined : "services"}>
      <Container>
        <SectionIntro
          description="From a day of sightseeing to a longer journey, tell us what you have in mind."
          eyebrow="Travel with RideWe"
          titleId="services-title"
          title={compact ? "A few ways RideWe can help." : "One place to begin your journey."}
        />
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>
        {compact ? (
          <div className="mt-8">
            <Button asChild className="w-fit" variant="outline">
              <Link to="/services">View All Services</Link>
            </Button>
          </div>
        ) : null}
      </Container>
    </Section>
  );
}
