import { useEffect } from "react";
import { packages } from "../data/packages.js";
import { Container } from "../components/layout/Container.jsx";
import { Section } from "../components/layout/Section.jsx";
import { PackageCard } from "../components/packages/PackageCard.jsx";

const heroImage = `${import.meta.env.BASE_URL}images/home/hero/ride-together-background.png`;

export function TourPackagesPage() {
  useEffect(() => {
    const previousTitle = document.title;
    document.title = "Tour Packages | RideWe Tours & Travels";
    return () => {
      document.title = previousTitle;
    };
  }, []);

  return (
    <>
      <section
        aria-labelledby="tour-packages-hero-title"
        className="relative isolate overflow-hidden bg-[#e9f4f5] bg-cover bg-center text-[#0b4775]"
        style={{ backgroundImage: `url("${heroImage}")` }}
      >
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 bg-gradient-to-r from-white/75 via-white/45 to-white/10"
        />
        <Container className="relative grid min-h-[330px] items-start py-10 sm:min-h-[370px] sm:py-12">
          <div className="max-w-[700px]">
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-accent-dark sm:text-sm">
              Tour Packages
            </p>
            <h1
              className="mt-3 text-4xl font-bold leading-tight tracking-[-0.04em] sm:text-5xl"
              id="tour-packages-hero-title"
            >
              Explore More. Travel Better. Choose a Journey That Fits You.
            </h1>
            <p className="mt-4 max-w-[620px] text-sm font-semibold leading-6 text-[#174c72] sm:text-base sm:leading-7">
              Explore popular travel package ideas for families, groups, couples,
              and travellers looking for comfortable journeys across South India.
            </p>
          </div>
        </Container>
      </section>

      <Section aria-labelledby="popular-tour-packages-title" className="bg-surface">
        <Container>
          <div className="mb-8 max-w-3xl sm:mb-10">
            <h2
              className="text-3xl font-bold leading-tight tracking-[-0.035em] text-brand sm:text-4xl"
              id="popular-tour-packages-title"
            >
              Popular Tour Packages
            </h2>
            <p className="mt-4 text-base leading-7 text-slate-600 sm:text-lg">
              Explore some popular journey ideas from Madurai and across South
              India. Share your preferred package or customise it around your
              travel plans.
            </p>
          </div>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {packages.map((packageItem) => (
              <PackageCard key={packageItem.id} packageItem={packageItem} />
            ))}
          </div>
          <p className="mt-8 text-sm leading-6 text-slate-600">
            These are sample exploration ideas, not fixed RideWe packages. Share
            your travel details with RideWe to discuss a suitable route, vehicle,
            customizations, and applicable tariff. No booking or payment is made
            on this page.
          </p>
        </Container>
      </Section>
    </>
  );
}
