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
    <div className="relative min-w-0">
      <div className="pointer-events-none absolute inset-x-0 top-[40%] z-10 flex justify-between px-2">
        {!atStart ? (
          <Button
            aria-label="Previous vehicles"
            className="pointer-events-auto size-9 min-h-9 rounded-full border-white bg-white/95 p-0 shadow-md"
            onClick={() => scrollPage(-1)}
            size="icon"
            variant="outline"
          >
            <ArrowLeft aria-hidden="true" size={18} />
          </Button>
        ) : <span />}
        {!atEnd ? (
          <Button
            aria-label="Show more vehicles"
            className="pointer-events-auto size-9 min-h-9 rounded-full border-white bg-white/95 p-0 shadow-md"
            onClick={() => scrollPage(1)}
            size="icon"
            variant="outline"
          >
            <ArrowRight aria-hidden="true" size={18} />
          </Button>
        ) : null}
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
            <VehicleCard preview vehicle={vehicle} />
          </div>
        ))}
      </div>
    </div>
  );
}

export function VehiclesSection({
  preview = false,
  title,
  description,
}) {
  const activeVehicles = vehicles.filter((vehicle) => vehicle.active);

  return (
    <Section
      aria-labelledby="vehicles-title"
      className={preview ? "bg-[#f1f9fa] py-6 sm:py-7 lg:py-8" : "bg-white"}
      id={preview ? undefined : "vehicles"}
    >
      <Container className={preview ? "grid min-w-0 gap-5 lg:grid-cols-[0.78fr_2.22fr] lg:items-center" : ""}>
        <div className={preview ? "min-w-0" : "flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between"}>
          <SectionIntro
            description={
              description ??
              (preview
                ? "Select from our range of comfortable, air-conditioned vehicles for individual, family, and group travel."
                : "Explore our white, air-conditioned vehicles and choose the seating that suits your group.")
            }
            eyebrow={preview ? "Vehicles & Tariff" : "Travel options"}
            titleId="vehicles-title"
            title={
              title ??
              (preview
                ? "Choose the Right Vehicle for Your Journey"
                : "Find the right ride for your plans.")
            }
            titleLevel={preview || title ? "h2" : "h1"}
            compact={preview}
          />
          {preview ? (
            <Button asChild className="h-9 rounded-full bg-gradient-to-r from-[#00a9c5] to-[#31c66a] px-5 text-sm !text-white hover:brightness-105">
              <Link to="/vehicles-tariff">View All Vehicles &amp; Tariff</Link>
            </Button>
          ) : !preview ? (
            <WhatsAppButton className="mb-8 w-fit sm:mb-10" variant="outline">
              Ask about vehicles
            </WhatsAppButton>
          ) : null}
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
        {!preview ? <p className="mt-5 text-xs leading-5 text-slate-500">
          Vehicle tariffs shown are current and indicative, not a guaranteed final fare. Please confirm details with RideWe when enquiring.
        </p> : null}
      </Container>
    </Section>
  );
}
