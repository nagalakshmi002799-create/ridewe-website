import {
  BadgeDollarSign,
  CalendarDays,
  CarFront,
  Clock3,
  MapPin,
  ShieldCheck,
  Users,
  UsersRound,
} from "lucide-react";
import { Link } from "react-router-dom";
import { vehicles } from "../data/vehicles.js";
import {
  aboutHighlights,
  aboutRideWeAlt,
  aboutRideWeImagePath,
  aboutRideWeSquareImagePath,
} from "../data/about.js";
import { Button } from "../components/ui/button.jsx";
import { Container } from "../components/layout/Container.jsx";
import { Section } from "../components/layout/Section.jsx";
import { JourneyCta } from "../components/home/JourneyCta.jsx";

const travelSteps = [
  { label: "Share your travel plan", icon: MapPin },
  { label: "Discuss the requirement", icon: CalendarDays },
  { label: "Choose the suitable vehicle", icon: CarFront },
  { label: "Plan the journey", icon: Users },
];

const imageUrl = (path) => `${import.meta.env.BASE_URL}images/${path}`;

export function AboutPage() {
  const highlightIconMap = {
    "10+ Years Experience": Clock3,
    "5000+ Customers": UsersRound,
    "Experienced & Friendly Drivers": Users,
    "Trustworthy Service": ShieldCheck,
    "Pricing That Matches Your Budget": BadgeDollarSign,
    "Reliable Vehicles": CarFront,
  };

  return (
    <>
      <Section className="bg-surface py-7 sm:py-8 lg:py-10">
        <Container className="grid items-center gap-6 md:grid-cols-2 lg:gap-10">
          <div className="w-full">
            <picture>
              <source
                media="(min-width: 768px)"
                srcSet={imageUrl(aboutRideWeSquareImagePath)}
                width={1254}
                height={1254}
              />
              <img
                alt={aboutRideWeAlt}
                className="block h-auto w-full"
                loading="lazy"
                src={imageUrl(aboutRideWeImagePath)}
                width={1914}
                height={822}
              />
            </picture>
          </div>

          <div className="lg:pl-1">
            <h1 className="mb-3 text-xs font-bold uppercase tracking-[0.18em] text-accent-dark">
              About RideWe
            </h1>

            <div className="mt-5 space-y-4 text-base leading-7 text-slate-700 sm:text-[1.03rem]">
              <p className="text-2xl font-bold leading-tight tracking-[-0.035em] text-[#0b4775] sm:text-[1.75rem]">
                RideWe Tours &amp; Travels – Ride Together for Better Experiences.
              </p>
              <p>
                Every journey is better when you have the right ride. RideWe offers
                comfortable and reliable travel solutions for individuals, families,
                and groups, with suitable vehicles, sightseeing assistance, and
                customized options to match your needs and budget. From exploring your
                local destinations to travelling across cities and states, we make
                planning simple and stress-free. Our vision is simple — to make
                comfortable and affordable travel accessible to everyone, while turning
                every journey into a better experience.
              </p>
            </div>

            <div className="mt-6 flex flex-wrap gap-x-3 gap-y-2.5">
              {aboutHighlights.map(({ label }) => {
                const Icon = highlightIconMap[label];

                return (
                  <div
                    className="inline-flex items-center gap-2 rounded-full border border-[#dfece9] bg-[#f5f8f7] px-3 py-2 text-sm font-medium text-[#0b0d0f]"
                    key={label}
                  >
                    {Icon ? <Icon aria-hidden="true" className="size-4 text-[#00a9b5]" /> : null}
                    <span>{label}</span>
                  </div>
                );
              })}
            </div>

            <Button asChild className="mt-7 h-11 rounded-full bg-gradient-to-r from-[#00a9c5] to-[#35d45b] px-5 text-sm !text-white hover:brightness-105">
              <Link to="/about">
                Read More About RideWe <span aria-hidden="true">→</span>
              </Link>
            </Button>
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

      <JourneyCta />
    </>
  );
}
