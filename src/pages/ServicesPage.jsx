import { ServiceCard } from "../components/home/ServiceCard.jsx";
import { Container } from "../components/layout/Container.jsx";
import { PhoneButton } from "../components/layout/PhoneButton.jsx";
import { WhatsAppButton } from "../components/layout/WhatsAppButton.jsx";

const homeImages = `${import.meta.env.BASE_URL}images/packages`;

const servicePageServices = [
  {
    id: "local-cab-travel",
    image: `${import.meta.env.BASE_URL}images/packages/local-trip.png`,
    title: "Local Cab Services",
    description:
      "Comfortable rides for everyday city travel, local visits, shopping, meetings, and personal journeys.",
  },
  {
    id: "airport-transfers",
    image: `${import.meta.env.BASE_URL}images/packages/airport-transfer.png`,
    title: "Airport Transfers",
    description:
      "Reliable airport pickup and drop services designed for a smooth, comfortable, and timely journey.",
  },
  {
    id: "tour-packages",
    image: `${import.meta.env.BASE_URL}images/packages/tour-packages.png`,
    title: "Tour Packages",
    description:
      "Explore memorable destinations with thoughtfully planned travel options for individuals, families, and groups.",
  },
  {
    id: "customized-travel-plans",
    image: `${import.meta.env.BASE_URL}images/packages/customize-trip.png`,
    title: "Customized Travel Plans",
    description:
      "Have your own travel idea? Share your destination, dates, and preferences, and plan a journey around your needs.",
  },
  {
    id: "sightseeing-tours",
    image: `${import.meta.env.BASE_URL}images/packages/sightseeing.png`,
    title: "Sightseeing Tours",
    description:
      "Discover local attractions and must-visit places with flexible sightseeing options built around your schedule.",
  },
  {
    id: "hill-station-trips",
    image: `${import.meta.env.BASE_URL}images/packages/hills-station.png`,
    title: "Hill Station Trips",
    description:
      "Escape to beautiful hill destinations with comfortable travel, scenic routes, and flexible trip planning..",
  },
  {
    id: "outstation-trips",
    image: `${import.meta.env.BASE_URL}images/packages/outstation-trip.png`,
    title: "Outstation Trips",
    description:
      "Travel beyond your city with dependable vehicles and practical travel arrangements for short or long-distance journeys.",
  },
  {
    id: "round-trips",
    image: `${import.meta.env.BASE_URL}images/packages/round-trip.png`,
    title: "Round Trips",
    description:
      "Plan your onward and return journey together with a comfortable travel option suited to your route and schedule.",
  },
  {
    id: "family-group-tour",
    image: `${import.meta.env.BASE_URL}images/packages/fam-group-trip.png`,
    title: "Family & Group Tour",
    description:
      "Travel together with spacious vehicle options designed to make family outings and group journeys more comfortable.",
  },
  {
    id: "temple-pilgrimage-tours",
    image: `${import.meta.env.BASE_URL}images/packages/temple-tour.png`,
    title: "Temple & Pilgrimage Tours",
    description:
      "Visit temples and spiritual destinations with flexible travel arrangements designed around your journey and time.",
  },
  {
    id: "multi-day-trip",
    image: `${import.meta.env.BASE_URL}images/packages/multi-days-trip.png`,
    title: "Multi-Day Trip",
    description:
      "Make longer journeys easier with comfortable vehicles and travel plans designed for multiple destinations and days.",
  },
  {
    id: "south-india-tour",
    image: `${import.meta.env.BASE_URL}images/packages/south-india-trip.png`,
    title: "South India Tour",
    description:
      "Explore the diverse destinations of South India with flexible travel options for sightseeing, holidays, temple tours, and getaways.",
  },
];

export function ServicesPage() {
  return (
    <>
      <section
        aria-labelledby="services-page-title"
        className="relative isolate min-h-[calc(100svh-73px-10.49vw)] overflow-hidden bg-[#e9f4f5] bg-cover bg-no-repeat bg-[position:65%_56%] text-[#0b4775] sm:min-h-[calc(100svh-81px-10.49vw)] sm:bg-[position:50%_56%] lg:bg-[position:54%_56%] xl:min-h-[calc(100svh-77px-10.49vw)]"
        style={{
          backgroundImage: `url("${homeImages}/service-bg.png")`,
        }}
      >
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 bg-gradient-to-r from-white/60 via-white/5 to-white/2"
        />
        <Container className="relative z-10 grid items-center gap-7 py-9 sm:py-12 lg:min-h-[410px] lg:py-6">
          <div className="relative z-10 max-w-[590px] md:-translate-y-6">
            <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#0b4775]">
              Our Services
            </p>
            <h1
              className="mt-3 max-w-xl text-[1.96rem] font-bold leading-[1.04] tracking-[-0.045em] text-[#0b4775] sm:text-[2.4rem] lg:text-[2.48rem]"
              id="services-page-title"
            >
              More Ways to Travel. More Ways to Explore. Travel Your Way with RideWe.
            </h1>
            <p className="mt-4 max-w-[620px] text-sm font-semibold leading-6 text-[#174c72] sm:text-base sm:leading-7">
              From local rides to memorable getaways, discover comfortable, reliable, and flexible travel solutions tailored to your journey with RideWe.
            </p>
          </div>
        </Container>
      </section>

      <section className="bg-white py-8 sm:py-10 lg:py-12">
        <Container className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
          <h2 className="max-w-xl text-xl font-semibold text-slate-700 sm:text-2xl lg:text-[2rem]">
            Travel Solutions Designed Around Your Journey
          </h2>

          <div className="flex w-fit items-center gap-3 rounded-2xl border border-slate-200 bg-white p-2.5 shadow-[0_14px_34px_-28px_rgba(15,23,42,0.45)]">
            <span className="whitespace-nowrap text-sm font-medium text-slate-700">
              Discuss Your Trip
            </span>
            <PhoneButton
              ariaLabel="Call RideWe"
              className="size-11 min-h-11 rounded-full border-0 bg-gradient-to-br from-[#00a9c5] to-[#31c66a] p-0 text-white shadow-[0_4px_12px_-6px_rgba(0,122,131,0.45)] transition-all duration-200 hover:brightness-105 hover:shadow-[0_6px_16px_-6px_rgba(0,122,131,0.55)] focus-visible:ring-2 focus-visible:ring-[#00a9b5] focus-visible:ring-offset-2"
              iconClassName="size-5 brightness-0 invert"
              variant="secondary"
              size="icon"
            >
              {""}
            </PhoneButton>
            <WhatsAppButton
              ariaLabel="WhatsApp RideWe"
              className="size-11 min-h-11 rounded-full border-0 bg-gradient-to-br from-[#00a9c5] to-[#31c66a] p-0 shadow-[0_4px_12px_-6px_rgba(0,122,131,0.45)] transition-all duration-200 hover:brightness-105 hover:shadow-[0_6px_16px_-6px_rgba(0,122,131,0.55)] focus-visible:ring-2 focus-visible:ring-[#00a9b5] focus-visible:ring-offset-2"
              iconClassName="size-5 brightness-0 invert"
              variant="outline"
              size="icon"
            >
              {""}
            </WhatsAppButton>
          </div>
        </Container>
      </section>

      <section className="bg-white pb-8 sm:pb-10 lg:pb-12">
        <Container>
          <div className="grid gap-5 sm:grid-cols-2 md:grid-cols-3">
            {servicePageServices.map((service) => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-white">
        <img
          alt="RideWe Travel Approach"
          className="block h-auto w-full"
          src={`${import.meta.env.BASE_URL}images/home/about/travel-approach.png`}
        />
      </section>
    </>
  );
}
