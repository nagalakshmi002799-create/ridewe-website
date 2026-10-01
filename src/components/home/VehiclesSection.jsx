import { vehicles } from "../../data/vehicles.js";
import { Container } from "../layout/Container.jsx";
import { Section } from "../layout/Section.jsx";
import { WhatsAppButton } from "../layout/WhatsAppButton.jsx";
import { SectionIntro } from "./SectionIntro.jsx";
import { VehicleCard } from "./VehicleCard.jsx";

export function VehiclesSection() {
  return (
    <Section aria-labelledby="vehicles-title" className="bg-white" id="vehicles">
      <Container>
        <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
          <SectionIntro
            description="Explore our white, air-conditioned vehicles and choose the seating that suits your group."
            eyebrow="Travel options"
            titleId="vehicles-title"
            title="Find the right ride for your plans."
          />
          <WhatsAppButton className="mb-8 w-fit sm:mb-10" variant="outline">
            Ask about vehicles
          </WhatsAppButton>
        </div>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 xl:gap-3">
          {vehicles
            .filter((vehicle) => vehicle.active)
            .map((vehicle) => (
              <VehicleCard key={vehicle.id} vehicle={vehicle} />
            ))}
        </div>
        <p className="mt-5 text-xs leading-5 text-slate-500">
          Vehicle tariffs shown are current and indicative, not a guaranteed final fare. Please confirm details with RideWe when enquiring.
        </p>
      </Container>
    </Section>
  );
}
