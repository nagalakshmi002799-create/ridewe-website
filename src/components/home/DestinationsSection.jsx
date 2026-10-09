import { ArrowRight, Compass, MapPin } from "lucide-react";
import { Link } from "react-router-dom";
import { destinations } from "../../data/destinations.js";
import { Button } from "../ui/button.jsx";
import { Container } from "../layout/Container.jsx";
import { Section } from "../layout/Section.jsx";
import { WhatsAppButton } from "../layout/WhatsAppButton.jsx";
import { LoadingImage } from "../ui/LoadingImage.jsx";
import { SectionIntro } from "./SectionIntro.jsx";

function DestinationCard({ destination }) {
  return (
    <article className="overflow-hidden rounded-2xl border border-slate-200 bg-white">
      {destination.image ? (
        <LoadingImage
          alt={destination.name}
          className="aspect-[1.6/1] w-full"
          height="400"
          imageClassName="object-cover"
          loading="lazy"
          src={destination.image}
          width="640"
        />
      ) : (
        <div
          aria-hidden="true"
          className="grid aspect-[1.6/1] place-items-center bg-[#f0f7f5] text-slate-400"
        >
          <Compass size={42} strokeWidth={1.2} />
        </div>
      )}
      <div className="p-5">
        {destination.region ? (
          <p className="mb-2 flex items-center gap-1 text-xs font-semibold uppercase tracking-wider text-slate-500">
            <MapPin aria-hidden="true" size={13} />
            {destination.region}
          </p>
        ) : null}
        <h3 className="text-lg font-bold text-brand">{destination.name}</h3>
        <p className="mt-2 text-sm leading-6 text-slate-600">
          {destination.summary}
        </p>
      </div>
    </article>
  );
}

export function DestinationsSection({ detailed = false }) {
  const activeDestinations = destinations.filter(
    (destination) => destination.active,
  );

  return (
    <>
      <Section
        aria-labelledby="destinations-title"
        className="bg-surface"
        id="destinations"
      >
        <Container>
          {detailed ? (
            <h1 className="mb-2 text-4xl font-bold tracking-tight text-brand sm:text-5xl">
              Explore Destinations
            </h1>
          ) : null}
          <SectionIntro
            description={
              detailed
                ? "Plan your journey across Tamil Nadu and South India with travel options based on your destination, travel dates, group size, and preferred vehicle."
                : "From ancient temples and heritage cities to peaceful hill stations, scenic coastlines, and unforgettable getaways, explore the diverse beauty of Tamil Nadu and South India with RideWe."
            }
            eyebrow={detailed ? "Explore Destinations" : "Discover places"}
            titleId="destinations-title"
            title="Beyond the Destination, Discover the Journey with RideWe"
            titleLevel="h2"
          />
          <h2 className="mb-5 text-xl font-bold text-brand">
            Popular Destinations
          </h2>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {activeDestinations.map((destination) => (
              <DestinationCard destination={destination} key={destination.id} />
            ))}
          </div>
        </Container>
      </Section>

      {detailed ? (
        <>
          <Section className="bg-white">
            <Container>
              <div className="grid gap-6 rounded-[1.75rem] border border-slate-200 bg-surface p-6 sm:p-8 lg:grid-cols-[1fr_auto] lg:items-center">
                <div>
                  <h2 className="text-2xl font-bold text-brand">
                    Customized Destination Travel
                  </h2>
                  <p className="mt-3 text-base leading-7 text-slate-600">
                    Have a different destination in mind? Share your route, travel
                    date, travellers, and vehicle preference to discuss a suitable
                    travel arrangement with RideWe.
                  </p>
                  <p className="mt-3 font-semibold text-brand">
                    From → To → Travel Date → Travellers → Vehicle Preference
                  </p>
                </div>
                <Button asChild className="w-fit">
                  <Link to="/contact">
                    Plan My Trip <ArrowRight aria-hidden="true" size={16} />
                  </Link>
                </Button>
              </div>
            </Container>
          </Section>
          <Section className="bg-surface">
            <Container className="max-w-4xl">
              <h2 className="text-3xl font-bold tracking-tight text-brand">
                Tour Packages
              </h2>
              <p className="mt-4 text-base leading-7 text-slate-600">
                We can build detailed RideWe tour packages around confirmed
                destinations, routes, travel duration, vehicle options, and customer
                requirements.
              </p>
              <Button asChild className="mt-5 w-fit">
                <Link to="/tour-packages">
                  Explore Tour Packages <ArrowRight aria-hidden="true" size={16} />
                </Link>
              </Button>
            </Container>
          </Section>
        </>
      ) : (
        <Section className="bg-white">
          <Container className="flex flex-wrap items-center justify-between gap-5">
            <p className="max-w-3xl text-base leading-7 text-slate-600">
              Tell us where you would like to go and discuss a suitable travel plan
              with RideWe.
            </p>
            <WhatsAppButton className="shrink-0" variant="outline">
              Explore Destinations
              <ArrowRight aria-hidden="true" size={16} />
            </WhatsAppButton>
          </Container>
        </Section>
      )}
    </>
  );
}
