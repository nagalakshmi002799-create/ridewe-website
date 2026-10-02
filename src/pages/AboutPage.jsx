import { ArrowRight, CalendarDays, CarFront, MapPin, Users } from "lucide-react";
import { Link } from "react-router-dom";
import { vehicles } from "../data/vehicles.js";
import { Button } from "../components/ui/button.jsx";
import { Container } from "../components/layout/Container.jsx";
import { Section } from "../components/layout/Section.jsx";
import { WhatsAppButton } from "../components/layout/WhatsAppButton.jsx";

const travelSteps = [
  { label: "Share your travel plan", icon: MapPin },
  { label: "Discuss the requirement", icon: CalendarDays },
  { label: "Choose the suitable vehicle", icon: CarFront },
  { label: "Plan the journey", icon: Users },
];

export function AboutPage() {
  return (
    <>
      <Section className="bg-surface">
        <Container className="max-w-5xl">
          <p className="text-sm font-bold uppercase tracking-[0.16em] text-accent-dark">
            About Us
          </p>
          <h1 className="mt-3 text-4xl font-bold tracking-tight text-brand sm:text-5xl">
            About RideWe Tours &amp; Travels
          </h1>
          <p className="mt-4 text-xl font-semibold text-slate-700">
            Ride Together for Better Experiences.
          </p>
          <div className="mt-7 max-w-4xl space-y-5 text-base leading-8 text-slate-600">
            <p>
              RideWe Tours &amp; Travels is a travel service based in Madurai, Tamil
              Nadu, providing transportation and travel solutions for local and
              outstation journeys.
            </p>
            <p>
              Our services are designed for individuals, families, and groups looking
              for convenient travel arrangements, sightseeing support, vehicle rental,
              airport transfers, and customized travel plans.
            </p>
            <p>
              We aim to make the journey easier from the planning stage itself by
              understanding your route, travel dates, number of travellers, and vehicle
              preference.
            </p>
          </div>
        </Container>
      </Section>

      <Section className="bg-white">
        <Container>
          <h2 className="text-3xl font-bold tracking-tight text-brand sm:text-4xl">
            Our Travel Approach
          </h2>
          <p className="mt-4 max-w-3xl text-base leading-7 text-slate-600">
            Every journey is different. A family holiday, a temple trip, a group tour,
            airport transfer, and an outstation journey can have different requirements.
            RideWe focuses on understanding those requirements and helping customers
            choose a suitable travel option.
          </p>
          <ol className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {travelSteps.map(({ label, icon: Icon }, index) => (
              <li
                className="rounded-2xl border border-slate-200 bg-surface p-5"
                key={label}
              >
                <span className="grid size-11 place-items-center rounded-xl bg-brand-soft text-accent-dark">
                  <Icon aria-hidden="true" size={20} />
                </span>
                <p className="mt-4 text-xs font-bold uppercase tracking-wider text-accent-dark">
                  Step {index + 1}
                </p>
                <h3 className="mt-1 font-semibold text-brand">{label}</h3>
              </li>
            ))}
          </ol>
        </Container>
      </Section>

      <Section className="bg-surface">
        <Container className="grid gap-10 lg:grid-cols-2">
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-brand">
              Families and Groups
            </h2>
            <p className="mt-4 text-base leading-7 text-slate-600">
              Whether you are travelling with family, friends, or a larger group,
              RideWe provides different vehicle options based on the size and needs of
              your travel group.
            </p>
            <ul className="mt-5 flex flex-wrap gap-2">
              {vehicles.map((vehicle) => (
                <li
                  className="rounded-full border border-slate-200 bg-white px-3 py-1.5 text-sm font-semibold text-brand"
                  key={vehicle.id}
                >
                  {vehicle.displayName}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-brand">
              Local &amp; Outstation Travel
            </h2>
            <p className="mt-4 text-base leading-7 text-slate-600">
              RideWe supports both local travel and longer journeys. Services can
              include local sightseeing, outstation travel, airport transfers, vehicle
              rental, and customized travel arrangements.
            </p>
          </div>
        </Container>
      </Section>

      <Section className="bg-white">
        <Container className="grid gap-8 lg:grid-cols-2">
          <div>
            <h2 className="text-2xl font-bold tracking-tight text-brand">
              Customer-Focused Service
            </h2>
            <p className="mt-4 text-base leading-7 text-slate-600">
              Our approach is centered around clear communication and practical travel
              planning. We aim to help customers understand the available vehicle and
              tariff options before confirming their travel arrangements. For
              route-specific requirements, the applicable fare and travel conditions
              can be discussed directly with RideWe.
            </p>
          </div>
          <div>
            <h2 className="text-2xl font-bold tracking-tight text-brand">
              South India Travel
            </h2>
            <p className="mt-4 text-base leading-7 text-slate-600">
              RideWe is based in Madurai and supports travel planning across
              destinations in Tamil Nadu and South India. Whether the journey is a
              short local trip or a multi-day route, customers can share their travel
              requirements and discuss a suitable travel plan.
            </p>
          </div>
        </Container>
      </Section>

      <Section className="bg-brand-dark text-white">
        <Container className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
          <div className="max-w-2xl">
            <h2 className="text-3xl font-bold tracking-tight">Plan Your Journey</h2>
            <p className="mt-3 leading-7 text-white/75">
              Have a destination in mind? Tell us your route, travel date, number of
              travellers, and preferred vehicle. Our team can discuss the available
              travel option with you.
            </p>
          </div>
          <div className="flex shrink-0 flex-wrap gap-3">
            <Button asChild>
              <Link to="/contact">
                Plan My Trip <ArrowRight aria-hidden="true" size={16} />
              </Link>
            </Button>
            <WhatsAppButton variant="whatsapp">WhatsApp RideWe</WhatsAppButton>
          </div>
        </Container>
      </Section>
    </>
  );
}
