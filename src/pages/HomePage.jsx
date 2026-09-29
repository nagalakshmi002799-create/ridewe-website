import { BenefitsSection } from "../components/home/BenefitsSection.jsx";
import { DestinationsSection } from "../components/home/DestinationsSection.jsx";
import { HeroSection } from "../components/home/HeroSection.jsx";
import { RouteSection } from "../components/home/RouteSection.jsx";
import { ServicesSection } from "../components/home/ServicesSection.jsx";
import { TariffPreview } from "../components/home/TariffPreview.jsx";
import { TripPlanningCta } from "../components/home/TripPlanningCta.jsx";
import { VehiclesSection } from "../components/home/VehiclesSection.jsx";

export function HomePage() {
  return (
    <>
      <HeroSection />
      <RouteSection />
      <ServicesSection />
      <VehiclesSection />
      <DestinationsSection />
      <BenefitsSection />
      <TariffPreview />
      <TripPlanningCta />
    </>
  );
}
