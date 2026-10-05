import { Container } from "../components/layout/Container.jsx";
import { Section } from "../components/layout/Section.jsx";
import { VehiclesSection } from "../components/home/VehiclesSection.jsx";
import { TariffPreview } from "../components/home/TariffPreview.jsx";
import { JourneyCta } from "../components/home/JourneyCta.jsx";

export function VehiclesTariffPage() {
  return (
    <>
      <Section className="bg-surface pb-0">
        <Container>
          <p className="text-sm font-bold uppercase tracking-[0.16em] text-accent-dark">
            Vehicles &amp; Tariff
          </p>
          <h1 className="mt-3 text-4xl font-bold tracking-tight text-brand sm:text-5xl">
            Vehicles &amp; Tariff
          </h1>
          <p className="mt-3 max-w-3xl text-base leading-7 text-slate-600">
            Select a vehicle according to your number of travellers and journey
            requirements. All current vehicle information and indicative tariffs are
            shown below.
          </p>
        </Container>
      </Section>
      <VehiclesSection
        description=""
        title="Choose Your Vehicle"
      />
      <TariffPreview detailed />
      <JourneyCta />
    </>
  );
}
