import { useRef, useState } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { useReducedMotion } from "motion/react";
import { Link } from "react-router-dom";
import { vehicles } from "../../data/vehicles.js";
import { Button } from "../ui/button.jsx";
import { Container } from "../layout/Container.jsx";
import { Section } from "../layout/Section.jsx";
import { WhatsAppButton } from "../layout/WhatsAppButton.jsx";
import { SectionIntro } from "./SectionIntro.jsx";
import { VehicleCard } from "./VehicleCard.jsx";

function VehiclePreviewRail({ vehicles: previewVehicles }) {
  const railRef = useRef(null);
  const reduceMotion = useReducedMotion();
  const [atStart, setAtStart] = useState(true);
  const [atEnd, setAtEnd] = useState(previewVehicles.length <= 1);

  function updatePosition() {
    const rail = railRef.current;
    if (!rail) return;

    setAtStart(rail.scrollLeft <= 1);
    setAtEnd(rail.scrollLeft + rail.clientWidth >= rail.scrollWidth - 1);
  }

  function scrollPage(direction) {
    const rail = railRef.current;
    if (!rail) return;

    rail.scrollBy({
      left: rail.clientWidth * direction,
      behavior: reduceMotion ? "auto" : "smooth",
    });
  }

  return (
    <div>
      <div className="mb-3 flex justify-end gap-2">
        {!atStart ? (
          <Button
            aria-label="Previous vehicles"
            className="shrink-0"
            onClick={() => scrollPage(-1)}
            size="icon"
            variant="outline"
          >
            <ArrowLeft aria-hidden="true" size={18} />
          </Button>
        ) : null}
        <Button
          aria-label="Show more vehicles"
          className="shrink-0"
          disabled={atEnd}
          onClick={() => scrollPage(1)}
          size="icon"
          variant="outline"
        >
          <ArrowRight aria-hidden="true" size={18} />
        </Button>
      </div>
      <div
        aria-label="Vehicle preview"
        className="flex snap-x snap-mandatory gap-4 overflow-x-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        onScroll={updatePosition}
        ref={railRef}
        role="region"
      >
        {previewVehicles.map((vehicle) => (
          <div
            className="w-full shrink-0 snap-start sm:basis-[calc((100%-1rem)/2)] lg:basis-[calc((100%-2rem)/3)]"
            key={vehicle.id}
          >
            <VehicleCard vehicle={vehicle} />
          </div>
        ))}
      </div>
    </div>
  );
}

export function VehiclesSection({ preview = false }) {
  const activeVehicles = vehicles.filter((vehicle) => vehicle.active);

  return (
    <Section aria-labelledby="vehicles-title" className="bg-white" id={preview ? undefined : "vehicles"}>
      <Container>
        <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
          <SectionIntro
            description="Explore our white, air-conditioned vehicles and choose the seating that suits your group."
            eyebrow="Travel options"
            titleId="vehicles-title"
            title={preview ? "A few vehicle options to start with." : "Find the right ride for your plans."}
          />
          {preview ? (
            <Button asChild className="mb-8 w-fit sm:mb-10" variant="outline">
              <Link to="/vehicles-tariff">View All Vehicles &amp; Tariff</Link>
            </Button>
          ) : (
            <WhatsAppButton className="mb-8 w-fit sm:mb-10" variant="outline">
              Ask about vehicles
            </WhatsAppButton>
          )}
        </div>
        {preview ? (
          <VehiclePreviewRail vehicles={activeVehicles} />
        ) : (
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 xl:gap-3">
            {activeVehicles.map((vehicle) => (
              <VehicleCard key={vehicle.id} vehicle={vehicle} />
            ))}
          </div>
        )}
        <p className="mt-5 text-xs leading-5 text-slate-500">
          Vehicle tariffs shown are current and indicative, not a guaranteed final fare. Please confirm details with RideWe when enquiring.
        </p>
      </Container>
    </Section>
  );
}
