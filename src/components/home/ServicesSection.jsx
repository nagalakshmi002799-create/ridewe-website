import { Link } from "react-router-dom";
import { homepageServices } from "../../data/homepage.js";
import { Button } from "../ui/button.jsx";
import { Container } from "../layout/Container.jsx";
import { Section } from "../layout/Section.jsx";
import { SectionIntro } from "./SectionIntro.jsx";
import { ServiceCard } from "./ServiceCard.jsx";

export function ServicesSection({
  compact = false,
  serviceIds = null,
  services: serviceItems = null,
}) {
  const selectedServices =
    serviceItems ??
    (serviceIds
      ? homepageServices.filter((service) => serviceIds.includes(service.id))
      : homepageServices);

  const services = selectedServices;

  return (
    <Section
      aria-labelledby="services-title"
      className={compact ? "bg-[#eff9fa] py-6 sm:py-7 lg:py-8" : "bg-surface"}
      id={compact ? undefined : "services"}
    >
      <Container>
        <SectionIntro
          description={
            compact
              ? "From quick local rides to memorable outstation adventures, RideWe makes every journey simple, comfortable, and well planned. Whether you need a reliable cab, airport transfer, sightseeing trip, temple tour, family getaway, or a customized travel experience, we help you travel with confidence from start to finish."
              : "RideWe Tours & Travels provides travel and transportation services for local, outstation, family, group, and customized journeys."
          }
          eyebrow={compact ? "Travel with RideWe" : "Our Services"}
          titleId="services-title"
          title={
            compact
              ? "Journeys Made Simple, Experiences Made Memorable"
              : "Our Services"
          }
          titleLevel={compact ? "h2" : "h1"}
          compact={compact}
          titleAction={
            compact ? (
              <Button
                asChild
                className="h-9 min-h-9 shrink-0 rounded-full border-0 bg-gradient-to-r from-[#00a9c5] to-[#31c66a] px-5 text-sm !text-white hover:brightness-105"
                size="sm"
              >
                <Link to="/services">View All Services</Link>
              </Button>
            ) : null
          }
        />
        {!compact ? (
          <h2 className="mb-8 -mt-4 text-xl font-semibold text-slate-700 sm:text-2xl">
            Travel Solutions Designed Around Your Journey
          </h2>
        ) : null}
        <div className={`grid gap-3 ${compact ? "grid-cols-2 sm:grid-cols-4 lg:grid-cols-7" : "sm:grid-cols-2 lg:grid-cols-3"}`}>
          {services.map((service) => (
            <ServiceCard compact={compact} key={service.id} service={service} />
          ))}
        </div>
      </Container>
    </Section>
  );
}
