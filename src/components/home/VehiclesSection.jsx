import { Link } from "react-router-dom";
import { vehicles } from "../../data/vehicles.js";
import { Button } from "../ui/button.jsx";
import { Container } from "../layout/Container.jsx";
import { Section } from "../layout/Section.jsx";
import { WhatsAppButton } from "../layout/WhatsAppButton.jsx";
import { SectionIntro } from "./SectionIntro.jsx";
import { VehicleCard } from "./VehicleCard.jsx";

export function VehiclesSection({
  preview = false,
  title,
  description,
}) {
  const activeVehicles = vehicles.filter((vehicle) => vehicle.active);
  const previewVehicleIds = ["sedan", "ertiga", "innova", "tempo-traveller"];
  const displayedVehicles = preview
    ? previewVehicleIds
        .map((id) => activeVehicles.find((vehicle) => vehicle.id === id))
        .filter(Boolean)
    : activeVehicles;

  return (
    <Section
      aria-labelledby="vehicles-title"
      className={preview ? "ridewe-loading-background py-6 sm:py-7 lg:py-8" : "bg-white"}
      id={preview ? undefined : "vehicles"}
    >
      <Container className={preview ? "grid min-w-0 gap-5" : ""}>
        <div className={preview ? "min-w-0" : "flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between"}>
          <SectionIntro
            description={
              description ??
              (preview
                ? "Choose from our comfortable, air-conditioned vehicles for solo trips, family outings, group travel, and long-distance journeys. Can’t find the vehicle you’re looking for? No problem. Tell us your travel requirements, preferred vehicle, or group size, and we’ll do our best to arrange the right option for you."
                : "Explore our white, air-conditioned vehicles and choose the seating that suits your group.")
            }
            eyebrow={preview ? "Vehicles & Tariff" : "Travel options"}
            titleId="vehicles-title"
            title={
              title ??
              (preview
                ? "Find Your Ride Or Tell Us What You Need."
                : "Find the right ride for your plans.")
            }
            titleLevel={preview || title ? "h2" : "h1"}
            compact={preview}
            titleAction={
              preview ? (
                <Button
                  asChild
                  className="h-9 shrink-0 whitespace-nowrap rounded-full bg-gradient-to-r from-[#00a9c5] to-[#31c66a] px-5 text-sm !text-white hover:brightness-105"
                >
                  <Link to="/vehicles-tariff">View All Vehicles &amp; Tariff</Link>
                </Button>
              ) : null
            }
          />
          {!preview ? (
            <WhatsAppButton className="mb-8 w-fit sm:mb-10" variant="outline">
              Ask about vehicles
            </WhatsAppButton>
          ) : null}
        </div>
        {preview ? (
          <div className="grid min-w-0 grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4 lg:gap-3">
            {displayedVehicles.map((vehicle) => (
              <div
                className={
                  ["ertiga", "tempo-traveller"].includes(vehicle.id)
                    ? "hidden sm:block"
                    : undefined
                }
                key={vehicle.id}
              >
                <VehicleCard preview vehicle={vehicle} />
              </div>
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 xl:gap-3">
            {displayedVehicles.map((vehicle) => (
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
