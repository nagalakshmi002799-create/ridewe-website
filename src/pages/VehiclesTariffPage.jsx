import {
  BadgeCheck,
  BadgeIndianRupee,
  MapPinned,
  ReceiptText,
  Route,
} from "lucide-react";
import { Container } from "../components/layout/Container.jsx";
import { Section } from "../components/layout/Section.jsx";
import { VehiclesSection } from "../components/home/VehiclesSection.jsx";
import { JourneyCta } from "../components/home/JourneyCta.jsx";

const tariffNotes = [
  {
    title: "Indicative Tariffs",
    description:
      "Tariffs displayed on the website are indicative and may vary depending on the route, vehicle, distance, duration, and applicable travel conditions.",
    Icon: BadgeIndianRupee,
  },
  {
    title: "Additional Charges",
    description:
      "Where applicable, additional charges may include tolls, parking, permits, taxes, hill charges, and other route-related expenses.",
    Icon: ReceiptText,
  },
  {
    title: "KM Calculation",
    description:
      "Distance and kilometre charges are calculated according to the applicable journey calculation used by RideWe.",
    Icon: Route,
  },
  {
    title: "Route-Specific Pricing",
    description:
      "The applicable fare may differ based on the selected route, pickup and drop locations, trip type, and travel requirements.",
    Icon: MapPinned,
  },
  {
    title: "Final Fare Confirmation",
    description:
      "Please confirm the applicable fare and travel conditions with RideWe before your journey.",
    Icon: BadgeCheck,
  },
];

export function VehiclesTariffPage() {
  return (
    <>
      <section
        aria-labelledby="vehicles-tariff-hero-title"
        className="relative isolate min-h-[390px] overflow-hidden bg-[#d9eff5] text-brand sm:min-h-[420px] lg:aspect-[2149/732] lg:min-h-[390px]"
      >
        <picture aria-hidden="true" className="absolute inset-0 -z-20">
          <source
            media="(max-width: 639px)"
            srcSet={`${import.meta.env.BASE_URL}images/vehicles/vt-mobile-bg.png`}
          />
          <img
            alt=""
            className="size-full object-cover object-[60%_center] sm:object-center"
            fetchPriority="high"
            src={`${import.meta.env.BASE_URL}images/vehicles/vt-desktop-bg.png`}
          />
        </picture>
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-b from-white/70 via-white/35 to-transparent sm:bg-gradient-to-r sm:from-white/75 sm:via-white/35 sm:to-transparent"
        />
        <Container className="relative grid min-h-[390px] items-start py-7 sm:min-h-[420px] sm:py-9 md:grid-cols-2 md:items-center lg:min-h-[390px] lg:py-10">
          <div className="max-w-[590px]">
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-accent-dark sm:text-sm">
              Vehicles &amp; Tariff
            </p>
            <h1
              className="mt-3 text-[2.25rem] font-bold leading-[1.05] tracking-[-0.045em] text-[#0b4775] sm:text-5xl"
              id="vehicles-tariff-hero-title"
            >
              The Right Ride for Your Journey
            </h1>
            <p className="mt-4 max-w-[570px] text-sm font-semibold leading-6 text-[#174c72] sm:text-base sm:leading-7">
              <span className="hidden sm:inline">
                Whether you&apos;re travelling solo, with family, or as a group,
                choose from our range of comfortable vehicles based on your travel
                needs. Browse the available vehicles and indicative tariffs below,
                or contact RideWe if you need a vehicle that isn&apos;t listed.
              </span>
              <span className="sm:hidden">
                Choose a comfortable vehicle based on your group size and travel
                needs.
              </span>
            </p>
            <p className="mt-4 hidden max-w-[540px] text-sm font-semibold leading-6 text-[#0b4775] sm:block">
              Your journey may be different. Your vehicle can be too.
            </p>
          </div>
        </Container>
      </section>
      <VehiclesSection
        description=""
        title="Choose Your Vehicle"
      />
      <Section
        aria-labelledby="tariff-title"
        className="ridewe-loading-background"
        id="tariff"
      >
        <Container>
          <div className="max-w-4xl">
            <p className="mb-3 text-xs font-bold uppercase tracking-[0.18em] text-accent-dark">
              Tariff
            </p>
            <h2
              className="text-3xl font-bold leading-tight tracking-[-0.035em] text-brand sm:text-4xl"
              id="tariff-title"
            >
              Clear Tariff Information for Better Travel Planning
            </h2>
            <p className="mt-4 text-base leading-7 text-slate-600">
              Review the available tariff information to get an idea of the
              applicable travel charges. Since every journey can differ based on
              the destination, route, distance, duration, vehicle, and travel
              conditions, the final fare may vary for each trip.
            </p>
            <p className="mt-3 text-base leading-7 text-slate-600">
              For an accurate quote, share your travel details with RideWe and
              confirm the applicable fare before your journey.
            </p>
          </div>

          <h3 className="mt-8 text-xl font-bold text-brand sm:mt-10">
            Tariff Notes
          </h3>
          <div className="mt-4 grid grid-cols-1 items-stretch gap-3 sm:gap-4 md:grid-cols-5">
            {tariffNotes.map(({ title, description, Icon }) => (
              <article
                className="flex min-w-0 flex-col rounded-2xl border border-[#d7ece4] bg-white/85 p-4 shadow-[0_10px_28px_-24px_rgba(11,71,117,0.45)] sm:p-5"
                key={title}
              >
                <span className="grid size-10 shrink-0 place-items-center rounded-xl bg-[#e8f7f6] text-accent-dark">
                  <Icon aria-hidden="true" size={20} />
                </span>
                <h4 className="mt-4 text-sm font-bold leading-5 text-brand sm:text-base">
                  {title}
                </h4>
                <p className="mt-2 text-xs leading-5 text-slate-600 sm:text-sm sm:leading-6">
                  {description}
                </p>
              </article>
            ))}
          </div>
          <p className="mt-6 text-sm font-medium leading-6 text-[#174c72] sm:text-base">
            Planning a trip? Share your route and travel details with us for a
            more accurate fare discussion.
          </p>
        </Container>
      </Section>
      <JourneyCta />
    </>
  );
}
