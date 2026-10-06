import {
  ArrowRight,
  BadgeDollarSign,
  CarFront,
  Clock3,
  Headset,
  Route,
  ShieldCheck,
  Users,
  UsersRound,
} from "lucide-react";
import {
  aboutRideWeAlt,
  aboutRideWeImagePath,
  travelApproachImagePath
} from "../data/about.js";
import { Container } from "../components/layout/Container.jsx";
import { Section } from "../components/layout/Section.jsx";
import { JourneyCta } from "../components/home/JourneyCta.jsx";

const imageUrl = (path) => `${import.meta.env.BASE_URL}images/${path}`;
const travelApproachAlt = "RideWe Travel Approach";

const travelHighlights = [
  {
    title: "10+ Years Experience",
    icon: Clock3,
  },
  {
    title: "5000+ Customers",
    icon: UsersRound,
  },
  {
    title: "Experienced & Friendly Drivers",
    icon: Users,
  },
  {
    title: "Trustworthy Service",
    icon: ShieldCheck,
  },
  {
    title: "Pricing That Matches Your Budget",
    icon: BadgeDollarSign,
  },
  {
    title: "Reliable Vehicles",
    icon: CarFront,
  },
  {
    title: "24/7 Support",
    icon: Headset,
  },
  {
    title: "Flexible Travel Options",
    icon: Route,
  },
];

const travelSteps = [
  "Share Your Plan",
  "Let’s Understand Your Needs",
  "Find the Right Ride",
  "Plan & Start the Journey",
];

const groupVehicleOptions = [
  "Ciaz",
  "Ertiga",
  "Innova",
  "Innova Crysta",
  "Tempo Traveller",
];

function Highlight({ icon: Icon, title }) {
  return (
    <li className="flex min-h-16 flex-col items-center justify-center gap-1 text-center">
      <span className="grid size-9 shrink-0 place-items-center rounded-full bg-white text-accent">
        <Icon aria-hidden="true" size={15} />
      </span>
      <h3 className="text-xs font-bold leading-4 text-brand">{title}</h3>
    </li>
  );
}

function JourneyStep({ index, title }) {
  const stepNumber = String(index + 1).padStart(2, "0");
  const isLast = index === travelSteps.length - 1;

  return (
    <li className="relative flex min-h-11 items-center gap-2.5">
      <span className="grid size-9 shrink-0 place-items-center rounded-full bg-gradient-to-br from-[#e4f8f6] to-[#e9f9eb] text-xs font-bold text-accent-dark ring-1 ring-[#bfe9df]">
        {stepNumber}
      </span>
      <h3 className="text-xs font-bold leading-4 text-brand">{title}</h3>
      {!isLast ? (
        <ArrowRight
          aria-hidden="true"
          className="ml-auto hidden size-3 shrink-0 text-accent/60 min-[480px]:block"
          size={12}
        />
      ) : null}
    </li>
  );
}

export function AboutPage() {
  return (
    <>
      <div className="overflow-hidden md:h-[clamp(18rem,28vw,26rem)]">
        <img
          alt={aboutRideWeAlt}
          className="block h-auto w-full md:h-full md:object-cover md:object-[center_48%]"
          fetchPriority="high"
          src={imageUrl(aboutRideWeImagePath)}
          width={1914}
          height={822}
        />
      </div>

      <Section
        className="py-7 sm:py-8 lg:py-10"
        style={{
          background:
            "linear-gradient(135deg, #E8FAFB 0%, #F2FCF5 50%, #EAFBEF 100%)",
        }}
      >
        <Container>
          <h1 className="text-xs font-bold uppercase tracking-[0.18em] text-accent-dark">
            About RideWe
          </h1>
          <div className="mt-4 space-y-4 text-base leading-7 text-slate-700 sm:text-[1.03rem]">
            <p className="text-2xl font-bold leading-tight tracking-[-0.035em] text-[#0b4775] sm:text-[1.75rem]">
              RideWe Tours &amp; Travels – Ride Together for Better Experiences.
            </p>
            <p>
              Every journey is better when you have the right ride. RideWe provides
              comfortable and reliable travel solutions for individuals, families,
              and groups, with suitable vehicles, sightseeing assistance, and flexible
              travel options tailored to your needs and budget.
            </p>
            <p>
              From local trips and airport transfers to sightseeing, temple tours,
              outstation journeys, and multi-day travel across cities and states, we
              make planning simple and stress-free. We take the time to understand
              your requirements and help you choose a travel option that works for
              your destination, group size, schedule, and preferences.
            </p>
            <p>
              Our vision is simple — to make comfortable and affordable travel
              accessible to everyone while turning every journey into a better
              experience.
            </p>
          </div>

          <div className="mt-7">
            <h2 className="text-xl font-bold tracking-tight text-brand">
              Why Travel with RideWe?
            </h2>
            <ul className="mt-4 grid grid-cols-1 gap-x-4 gap-y-2 sm:grid-cols-4">
              {travelHighlights.map((highlight) => (
                <Highlight {...highlight} key={highlight.title} />
              ))}
            </ul>
          </div>
        </Container>
      </Section>
{/* 
      <section className="bg-white">
  <div className="w-full overflow-hidden">
    <img
      alt={travelApproachAlt}
      className="block h-auto w-full"
      loading="lazy"
      src={imageUrl(travelApproachImagePath)}
      width={1536}
      height={526}
    />
  </div>
</section> */}
      

      <Section className="bg-white">
        <Container className="grid gap-8 lg:grid-cols-2">
          <div>
            <h2 className="text-2xl font-bold tracking-tight text-brand">
              Customer-Focused Service
            </h2>
            <h3 className="mt-2 text-lg font-semibold text-[#0b4775]">
              Travel Planning That Starts with Understanding You
            </h3>
            <p className="mt-4 text-base leading-7 text-slate-600">
              Every traveller has different needs, and we believe the right travel
              plan starts with understanding them. RideWe focuses on clear
              communication, transparent discussions, and practical travel planning
              so you can make an informed choice before confirming your trip.
            </p>
            <p className="mt-4 text-base leading-7 text-slate-600">
              From selecting a suitable vehicle to understanding the applicable
              tariff, route, timing, and travel requirements, we’re here to help you
              plan with confidence. For customized or route-specific journeys,
              simply share your requirements with us and we’ll discuss the suitable
              travel options and applicable fare.
            </p>
          </div>
          <div>
            <h2 className="text-2xl font-bold tracking-tight text-brand">
              Travel Destinations
            </h2>
            <h3 className="mt-2 text-lg font-semibold text-[#0b4775]">
              Explore More, Travel Further with RideWe
            </h3>
            <p className="mt-4 text-base leading-7 text-slate-600">
              From nearby getaways to journeys across cities and states, RideWe
              helps you plan travel to the destinations you want to explore. Whether
              it’s a family holiday, temple tour, sightseeing trip, hill-station
              escape, beach getaway, or a multi-day adventure, share your destination
              and travel requirements with us.
            </p>
            <p className="mt-4 text-base leading-7 text-slate-600">
              We’ll help you explore suitable travel options, routes, vehicles, and
              arrangements based on your journey.
            </p>
            <p className="mt-5 font-semibold leading-7 text-[#0b4775]">
              Your destination can be anywhere. Let RideWe help you plan the way
              there.
            </p>
          </div>
        </Container>
      </Section>
      <Section
        style={{
          background:
            "linear-gradient(135deg, #E8FAFB 0%, #F2FCF5 50%, #EAFBEF 100%)",
        }}
      >
        <Container>
          <div className="grid gap-10 lg:grid-cols-2">
            <div>
              <h2 className="text-3xl font-bold tracking-tight text-brand">
                Families &amp; Groups
              </h2>
              <h3 className="mt-2 text-lg font-semibold text-[#0b4775]">
                Travel Together, Travel Comfortably
              </h3>
              <p className="mt-4 text-base leading-7 text-slate-700">
                Whether it’s a family outing, a weekend with friends, or a larger
                group journey, RideWe helps you choose a vehicle that fits your group
                size, comfort needs, and travel plans.
              </p>
              <h4 className="mt-4 font-bold text-brand">Our vehicle options include:</h4>
              <ul className="mt-2 flex flex-wrap gap-2">
                {groupVehicleOptions.map((option) => (
                  <li
                    className="rounded-md border border-[#b9e9df] bg-[#e8f7f6] px-3 py-1 text-sm font-medium text-brand"
                    key={option}
                  >
                    {option}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h2 className="text-3xl font-bold tracking-tight text-brand">
                Local &amp; Outstation Travel
              </h2>
              <h3 className="mt-2 text-lg font-semibold text-[#0b4775]">
                From Nearby Trips to Long-Distance Journeys
              </h3>
              <p className="mt-4 text-base leading-7 text-slate-700">
                Whether you're travelling within the city or heading to another
                destination, RideWe offers flexible travel options designed around
                your plans.
              </p>
              <p className="mt-4 text-base leading-7 text-slate-700">
                Choose from local sightseeing, outstation trips, airport transfers,
                vehicle rental, temple tours, and customized travel arrangements.
                Share your destination and requirements with us, and we’ll help you
                plan a comfortable and convenient journey.
              </p>
            </div>
          </div>
          <div className="mt-6">
            <h4 className="font-bold text-brand">Need a different vehicle?</h4>
            <p className="mt-1 text-sm leading-6 text-slate-700">
              If the vehicle you’re looking for isn’t listed, feel free to enquire.
              We’ll help explore a suitable option based on your group and journey
              requirements.
            </p>
          </div>
        </Container>
      </Section>

      <JourneyCta />
    </>
  );
}
