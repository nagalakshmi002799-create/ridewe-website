import { ArrowRight, Compass, MapPin } from "lucide-react";
import { destinations } from "../../data/destinations.js";
import { Container } from "../layout/Container.jsx";
import { Section } from "../layout/Section.jsx";
import { WhatsAppButton } from "../layout/WhatsAppButton.jsx";
import { SectionIntro } from "./SectionIntro.jsx";

function DestinationCard({ destination }) {
  return (
    <article className="overflow-hidden rounded-2xl border border-slate-200 bg-white">
      {destination.image ? (
        <img
          alt={destination.name}
          className="aspect-[1.6/1] w-full object-cover"
          height="400"
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

export function DestinationsSection() {
  const activeDestinations = destinations.filter(
    (destination) => destination.active,
  );

  return (
    <Section
      aria-labelledby="destinations-title"
      className="bg-surface"
      id="destinations"
    >
      <Container>
        <SectionIntro
          description="Tell us where you would like to go. Destination details will appear here as RideWe confirms them."
          eyebrow="Discover places"
          titleId="destinations-title"
          title="Where would you like to travel?"
        />
        {activeDestinations.length ? (
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {activeDestinations.map((destination) => (
              <DestinationCard
                destination={destination}
                key={destination.id}
              />
            ))}
          </div>
        ) : (
          <div className="flex flex-col gap-5 rounded-2xl border border-dashed border-slate-300 bg-white p-6 sm:flex-row sm:items-center sm:justify-between sm:p-8">
            <div className="flex items-start gap-4">
              <span className="grid size-11 shrink-0 place-items-center rounded-xl bg-brand-soft text-accent-dark">
                <Compass aria-hidden="true" size={21} />
              </span>
              <div>
                <h3 className="font-semibold text-brand">
                  Destination details are being prepared.
                </h3>
                <p className="mt-1 max-w-xl text-sm leading-6 text-slate-600">
                  Contact RideWe to discuss the places you have in mind.
                </p>
              </div>
            </div>
            <WhatsAppButton className="shrink-0" variant="outline">
              Share a destination
              <ArrowRight aria-hidden="true" size={16} />
            </WhatsAppButton>
          </div>
        )}
      </Container>
    </Section>
  );
}
