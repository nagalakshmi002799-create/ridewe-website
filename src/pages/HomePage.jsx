import { ArrowRight, Landmark, Mountain, Waves } from "lucide-react";
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

const destinationIcons = {
  madurai: Landmark,
  kodaikanal: Mountain,
  munnar: Waves,
};

function HeritageIllustration() {
  return (
    <svg
      aria-label="Illustration of Madurai heritage architecture, including a temple tower, palace and church"
      className="h-full w-full"
      role="img"
      viewBox="0 0 620 260"
    >
      <defs>
        <linearGradient id="heritage-sky" x1="0" x2="1" y1="0" y2="1">
          <stop offset="0%" stopColor="#d8f1ef" />
          <stop offset="100%" stopColor="#fff5df" />
        </linearGradient>
        <linearGradient id="heritage-tower" x1="0" x2="0" y1="0" y2="1">
          <stop offset="0%" stopColor="#e8a94c" />
          <stop offset="100%" stopColor="#d77f45" />
        </linearGradient>
      </defs>
      <path d="M0 0h620v260H0z" fill="url(#heritage-sky)" />
      <path d="M0 209c99-28 176-22 258 7 113-36 224-33 362 2v42H0z" fill="#78a579" />
      <path d="M0 231c94-24 167-15 242 11 115-26 254-21 378 1v17H0z" fill="#477b63" />
      <g fill="#34745f">
        <path d="M39 193c11-33 7-61-7-84 23 16 34 44 25 82z" />
        <path d="M52 173c-1-30 14-53 42-68-17 24-24 45-27 73z" />
        <path d="M563 193c11-35 6-63-9-88 25 19 34 46 24 85z" />
        <path d="M578 171c1-31 18-54 43-67-16 22-24 45-27 74z" />
      </g>
      <g stroke="#bf7544" strokeWidth="2">
        <path d="M75 203V93l45-57 45 57v110z" fill="url(#heritage-tower)" />
        <path d="M82 105h76M80 128h80M78 152h84M76 177h88" fill="none" />
        <path d="M90 103v18m28-18v18m28-18v18M87 129v20m31-20v20m30-20v20M84 154v21m34-21v21m34-21v21" fill="none" />
        <path d="M94 202v-18a10 10 0 0 1 20 0v18m24 0v-18a10 10 0 0 1 20 0v18" fill="#f8dfb4" />
      </g>
      <g fill="#f1c77e" stroke="#bc8852" strokeWidth="2">
        <path d="M227 202v-72l38-37 38 37v72z" />
        <path d="M216 132h98M231 120l34-37 34 37" />
        <path d="M244 202v-31a21 21 0 0 1 42 0v31z" fill="#fff2d8" />
        <path d="M252 201v-25a13 13 0 0 1 26 0v25" fill="none" />
      </g>
      <g fill="#fbf7e9" stroke="#688b83" strokeWidth="2">
        <path d="M408 202v-91h55v91z" />
        <path d="M404 112h64l-32-29z" />
        <path d="M425 111V70l10-17 10 17v41" />
        <path d="M427 197v-27a9 9 0 0 1 18 0v27z" fill="#b5d8d2" />
        <path d="M435 45v-25m-10 12h20" fill="none" />
      </g>
      <g fill="#fff6d8" opacity=".76">
        <circle cx="200" cy="54" r="18" />
        <circle cx="200" cy="54" r="27" opacity=".38" />
      </g>
    </svg>
  );
}

function DestinationPreviewCard({ destination }) {
  const Icon = destinationIcons[destination.id] ?? Landmark;

  return (
    <article className="overflow-hidden rounded-xl border border-[#deebec] bg-white shadow-[0_10px_30px_-25px_rgba(0,52,94,0.45)]">
      <div className="relative grid aspect-[1.7/1] place-items-center overflow-hidden bg-gradient-to-br from-[#c8eef2] via-[#e5f6f2] to-[#b9dcce]">
        <span aria-hidden="true" className="absolute -bottom-10 left-1/2 size-36 -translate-x-1/2 rounded-full border-[14px] border-white/30" />
        <span className="relative grid size-14 place-items-center rounded-full border border-white/80 bg-white/75 text-[#00a58f] shadow-sm">
          <Icon aria-hidden="true" size={30} strokeWidth={1.6} />
        </span>
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
          <div className="h-[145px] overflow-hidden rounded-2xl sm:h-[180px] lg:h-[170px]">
            <HeritageIllustration />
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

      <section aria-labelledby="destinations-preview-title" className="bg-[#f0f9fa] py-6 sm:py-7 lg:py-8" id="destinations-preview">
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
          className="absolute inset-0 -z-20 bg-cover bg-[center_10%] opacity-60"
          style={{
            backgroundImage: `url("${import.meta.env.BASE_URL}images/hero-south-india.svg")`,
          }}
        />
        <div aria-hidden="true" className="absolute inset-0 -z-10 bg-gradient-to-r from-[#07385c]/95 via-[#075276]/80 to-[#07385c]/35" />
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
          <img
            alt="RideWe white Ciaz vehicle"
            className="hidden max-h-[190px] w-full object-contain object-right drop-shadow-[0_15px_20px_rgba(0,0,0,0.2)] lg:block"
            height="940"
            loading="lazy"
            src={`${import.meta.env.BASE_URL}images/vehicles/ciaz.png`}
            width="1672"
          />
        </Container>
      </section>
    </>
  );
}
