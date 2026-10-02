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
    <Section
      aria-labelledby="services-title"
      className="bg-surface"
      id={compact ? undefined : "services"}
    >
      <Container>
        <SectionIntro
          description={
            compact
              ? "RideWe provides practical travel solutions for local trips, sightseeing, outstation journeys, family and group travel, vehicle rental, airport transfers, and customized tour planning."
              : "RideWe Tours & Travels provides travel and transportation services for local, outstation, family, group, and customized journeys."
          }
          eyebrow={compact ? "Travel with RideWe" : "Our Services"}
          titleId="services-title"
          title={
            compact
              ? "Travel Services for Every Journey"
              : "Our Services"
          }
          titleLevel={compact ? "h2" : "h1"}
        />
        {!compact ? (
          <h2 className="mb-8 -mt-4 text-xl font-semibold text-slate-700 sm:text-2xl">
            Travel Solutions Designed Around Your Journey
          </h2>
        ) : null}
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {(compact ? services.slice(0, 3) : services).map((service) => (
            <ServiceCard compact={compact} key={service.id} service={service} />
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
