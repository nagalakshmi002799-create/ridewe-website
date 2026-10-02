import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { destinations } from "../data/destinations.js";
import { HeroSection } from "../components/home/HeroSection.jsx";
import { RouteSection } from "../components/home/RouteSection.jsx";
import { SectionIntro } from "../components/home/SectionIntro.jsx";
import { ServicesSection } from "../components/home/ServicesSection.jsx";
import { VehiclesSection } from "../components/home/VehiclesSection.jsx";
import { Container } from "../components/layout/Container.jsx";
import { PhoneButton } from "../components/layout/PhoneButton.jsx";
import { WhatsAppButton } from "../components/layout/WhatsAppButton.jsx";
import { Button } from "../components/ui/button.jsx";
import { primaryContact } from "../utils/contact.js";

const imageUrl = (path) => `${import.meta.env.BASE_URL}images/${path}`;
const rideweLogo = `${import.meta.env.BASE_URL}brand/ridewe-logo-horizontal.png`;

const destinationImages = {
  madurai: "home/madurai-meenakshi.webp",
  kodaikanal: "destinations/kodaikanal.webp",
  munnar: "home/munnar-mountains.webp",
};

function DestinationPreviewCard({ destination }) {
  const image = destinationImages[destination.id];

  return (
    <article className="overflow-hidden rounded-xl border border-[#deebec] bg-white shadow-[0_10px_30px_-25px_rgba(0,52,94,0.45)]">
      <div className="relative aspect-[1.7/1] overflow-hidden bg-gradient-to-br from-[#c8eef2] via-[#e5f6f2] to-[#b9dcce]">
        {image ? (
          <img
            alt={`Travel scenery in ${destination.name}`}
            className="absolute inset-0 size-full object-cover"
            loading="lazy"
            src={imageUrl(image)}
          />
        ) : null}
        <p className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#063f5f]/85 to-transparent px-3 pb-2 pt-7 text-sm font-bold text-white">
          {destination.name}
        </p>
      </div>
    </article>
  );
}

export function HomePage() {
  const previewDestinations = ["madurai", "kodaikanal", "munnar"]
    .map((id) => destinations.find((destination) => destination.id === id))
    .filter(Boolean);

  return (
    <>
      <HeroSection />
      <RouteSection />

      <section aria-labelledby="about-preview-title" className="bg-white py-6 sm:py-7 lg:py-8" id="about-preview">
        <Container className="grid items-center gap-5 lg:grid-cols-[1.08fr_0.92fr] lg:gap-10">
          <div
            aria-label="Madurai heritage, including Meenakshi Amman Temple, Thirumalai Nayakkar Mahal and St Mary's Cathedral"
            className="grid h-[145px] grid-cols-[1.2fr_0.8fr] grid-rows-2 gap-1.5 overflow-hidden rounded-2xl bg-[#e8f7f4] sm:h-[180px] lg:h-[170px]"
            role="group"
          >
            <img
              alt="Meenakshi Amman Temple in Madurai"
              className="row-span-2 size-full min-h-0 object-cover object-[center_27%]"
              loading="lazy"
              src={imageUrl("home/madurai-meenakshi.webp")}
            />
            <img
              alt="Thirumalai Nayakkar Mahal in Madurai"
              className="size-full min-h-0 object-cover object-[center_38%]"
              loading="lazy"
              src={imageUrl("home/madurai-mahal.webp")}
            />
            <img
              alt="St Mary's Cathedral in Madurai"
              className="size-full min-h-0 object-cover object-[center_25%]"
              loading="lazy"
              src={imageUrl("home/madurai-cathedral.webp")}
            />
          </div>
          <div className="border-l-0 border-[#dce9e9] lg:border-l lg:pl-8">
            <SectionIntro
              compact
              description="RideWe Tours & Travels helps individuals, families, and groups plan and travel comfortably with suitable vehicles, sightseeing support, and customized travel options. From local sightseeing to outstation journeys, we focus on making travel planning simple and helping you choose the right option for your trip."
              eyebrow="About RideWe"
              title="Travel Made Simple with RideWe"
              titleId="about-preview-title"
            />
            <Button asChild className="h-9 rounded-full bg-gradient-to-r from-[#00a9c5] to-[#31c66a] px-5 text-sm !text-white hover:brightness-105">
              <Link to="/about">
                Read More About RideWe <ArrowRight aria-hidden="true" size={15} />
              </Link>
            </Button>
          </div>
        </Container>
      </section>

      <ServicesSection
        compact
        serviceIds={[
          "tour-packages",
          "customized-tours",
          "sightseeing-tours",
          "vehicle-rental",
          "outstation-travel",
          "airport-transfers",
          "family-group-travel",
        ]}
      />

      <VehiclesSection preview />

      <section
        aria-labelledby="destinations-preview-title"
        className="relative isolate overflow-hidden bg-[#f0f9fa] py-6 sm:py-7 lg:py-8"
        id="destinations-preview"
      >
        <div
          aria-hidden="true"
          className="absolute inset-0 -z-20 bg-cover bg-[center_56%] opacity-60"
          style={{ backgroundImage: `url("${imageUrl("home/coorg-hills.webp")}")` }}
        />
        <div
          aria-hidden="true"
          className="absolute inset-0 -z-10 bg-gradient-to-r from-[#edf9fb]/72 via-[#ebf8f4]/65 to-white/68"
        />
        <Container className="grid gap-5 lg:grid-cols-[0.78fr_2.22fr] lg:items-center">
          <div>
            <SectionIntro
              compact
              description="Discover breathtaking destinations across Tamil Nadu and South India."
              eyebrow="Tour destinations"
              title="Explore South India with RideWe"
              titleId="destinations-preview-title"
            />
            <Button asChild className="h-9 rounded-full bg-gradient-to-r from-[#00a9c5] to-[#31c66a] px-5 text-sm !text-white hover:brightness-105">
              <Link to="/tour-destinations">
                Explore Destinations <ArrowRight aria-hidden="true" size={15} />
              </Link>
            </Button>
          </div>
          <div className="grid grid-cols-1 gap-3 min-[480px]:grid-cols-3">
            {previewDestinations.map((destination) => (
              <DestinationPreviewCard destination={destination} key={destination.id} />
            ))}
          </div>
        </Container>
      </section>

      <section
        aria-labelledby="contact-preview-title"
        className="relative isolate overflow-hidden bg-[#0b4775] py-7 text-white sm:py-8"
        id="contact-preview"
      >
        <div
          aria-hidden="true"
          className="absolute inset-0 -z-20 bg-cover bg-[center_68%]"
          style={{
            backgroundImage: `url("${imageUrl("home/munnar-road.webp")}")`,
          }}
        />
        <div
          aria-hidden="true"
          className="absolute inset-0 -z-10 bg-gradient-to-r from-[#07385c]/90 via-[#075276]/70 to-[#07385c]/30"
        />
        <Container className="relative grid items-center gap-5 lg:grid-cols-[1fr_0.7fr]">
          <div className="max-w-2xl">
            <p className="text-[11px] font-bold uppercase tracking-[0.16em] text-[#5de1ce]">
              Let&apos;s plan the journey
            </p>
            <h2 className="mt-1.5 text-2xl font-bold tracking-tight sm:text-3xl" id="contact-preview-title">
              Plan Your Journey with RideWe
            </h2>
            <p className="mt-2 max-w-xl text-sm leading-5 text-white/90">
              Get in touch with us for customized travel plans and the best travel experience across South India.
            </p>
            <div className="mt-4 flex flex-wrap gap-2.5">
              <PhoneButton
                ariaLabel={`Call ${primaryContact.name} at ${primaryContact.phone}`}
                className="h-9 min-h-9 rounded-full bg-gradient-to-r from-[#00a9c5] to-[#31c66a] px-5 text-sm text-white hover:brightness-105 hover:text-white"
                iconClassName="brightness-0 invert"
                style={{ color: "#fff" }}
                variant="primary"
              >
                Call Now
              </PhoneButton>
              <WhatsAppButton className="h-9 rounded-full border-0 bg-white px-5 text-sm hover:bg-[#f1fffc]">
                <span className="!text-[#007a83]">WhatsApp RideWe</span>
              </WhatsAppButton>
              <Button asChild className="h-9 rounded-full border-0 bg-white px-5 text-sm !text-[#007a83] hover:bg-[#f1fffc]" variant="outline">
                <Link to="/contact">Contact Us</Link>
              </Button>
            </div>
          </div>
          <div className="relative hidden max-h-[190px] w-full lg:block">
            <img
              alt="RideWe-branded white Ciaz vehicle"
              className="block max-h-[190px] w-full object-contain object-right drop-shadow-[0_15px_20px_rgba(0,0,0,0.2)]"
              height="940"
              loading="lazy"
              src={`${import.meta.env.BASE_URL}images/vehicles/ciaz.png`}
              width="1672"
            />
            <img
              alt=""
              aria-hidden="true"
              className="pointer-events-none absolute bottom-[37%] right-[55%] w-[12%] object-contain"
              src={rideweLogo}
            />
          </div>
        </Container>
      </section>
    </>
  );
}
