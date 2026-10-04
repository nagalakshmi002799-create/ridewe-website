import {
  ArrowRight,
  BadgeDollarSign,
  CarFront,
  Clock3,
  ShieldCheck,
  UsersRound,
} from "lucide-react";
import { Link } from "react-router-dom";
import { destinations } from "../data/destinations.js";
import { homepageServicePreview } from "../data/homepage.js";
import { HeroSection } from "../components/home/HeroSection.jsx";
import { RouteSection } from "../components/home/RouteSection.jsx";
import { SectionIntro } from "../components/home/SectionIntro.jsx";
import { ServicesSection } from "../components/home/ServicesSection.jsx";
import { VehiclesSection } from "../components/home/VehiclesSection.jsx";
import { Container } from "../components/layout/Container.jsx";
import { PhoneButton } from "../components/layout/PhoneButton.jsx";
import { WhatsAppButton } from "../components/layout/WhatsAppButton.jsx";
import { Button } from "../components/ui/button.jsx";
import { LoadingImage } from "../components/ui/LoadingImage.jsx";
import {
  aboutHighlights,
  aboutRideWeAlt,
  aboutRideWeImagePath,
  aboutRideWeSquareImagePath,
} from "../data/about.js";
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
    <article className="overflow-hidden rounded-xl border border-[#deebec] bg-white shadow-[0_10px_30px_-25px_rgba(0,52,94,0.45)] lg:flex lg:h-full lg:flex-col">
      <div className="relative aspect-[1.7/1] overflow-hidden bg-gradient-to-br from-[#c8eef2] via-[#e5f6f2] to-[#b9dcce] lg:aspect-auto lg:flex-1">
        {image ? (
          <LoadingImage
            alt={`Travel scenery in ${destination.name}`}
            className="absolute inset-0 size-full"
            imageClassName="object-cover"
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

      <section aria-labelledby="about-preview-title" className="bg-white py-7 sm:py-8 lg:py-10" id="about-preview">
        <Container className="grid items-center gap-6 md:grid-cols-2 lg:gap-10">
          <div className="w-full">
            <picture>
              <source
                media="(min-width: 768px)"
                srcSet={imageUrl(aboutRideWeSquareImagePath)}
                width={1254}
                height={1254}
              />
              <img
                alt={aboutRideWeAlt}
                className="block h-auto w-full"
                loading="lazy"
                src={imageUrl(aboutRideWeImagePath)}
                width={1914}
                height={822}
              />
            </picture>
          </div>

          <div className="lg:pl-1">
            <h2
              className="mb-3 text-xs font-bold uppercase tracking-[0.18em] text-accent-dark"
              id="about-preview-title"
            >
              About RideWe
            </h2>

            <div className="mt-5 space-y-4 text-base leading-7 text-slate-700 sm:text-[1.03rem]">
              <p className="text-2xl font-bold leading-tight tracking-[-0.035em] text-[#0b4775] sm:text-[1.75rem]">
                RideWe Tours &amp; Travels – Ride Together for Better Experiences.
              </p>
              <p>
                Every journey is better when you have the right ride. RideWe offers
                comfortable and reliable travel solutions for individuals, families,
                and groups, with suitable vehicles, sightseeing assistance, and
                customized options to match your needs and budget. From exploring your
                local destinations to travelling across cities and states, we make
                planning simple and stress-free. Our vision is simple — to make
                comfortable and affordable travel accessible to everyone, while turning
                every journey into a better experience.
              </p>
            </div>

            <div className="mt-6 flex flex-wrap gap-x-3 gap-y-2.5">
              {aboutHighlights.map(({ icon, label }) => {
                const Icon = {
                  Clock3,
                  UsersRound,
                  ShieldCheck,
                  BadgeDollarSign,
                  CarFront,
                }[icon];

                return (
                  <div
                    className="inline-flex items-center gap-2 rounded-full border border-[#dfece9] bg-[#f5f8f7] px-3 py-2 text-sm font-medium text-[#0b0d0f]"
                    key={label}
                  >
                    {Icon ? <Icon aria-hidden="true" className="size-4 text-[#00a9b5]" /> : null}
                    <span>{label}</span>
                  </div>
                );
              })}
            </div>

            <Button asChild className="mt-7 h-11 rounded-full bg-gradient-to-r from-[#00a9c5] to-[#35d45b] px-5 text-sm !text-white hover:brightness-105">
              <Link to="/about">
                Read More About RideWe <span aria-hidden="true">→</span>
              </Link>
            </Button>
          </div>
        </Container>
      </section>

      <ServicesSection
        compact
        services={homepageServicePreview}
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
        <Container className="grid gap-5 lg:grid-cols-[0.78fr_2.22fr] lg:items-stretch">
          <div>
            <SectionIntro
              compact
              description="Travel through the vibrant culture, timeless heritage, natural beauty, and scenic landscapes of Tamil Nadu and South India. Whether it’s a temple trail, a relaxing hill-station escape, a coastal getaway, or a family adventure, RideWe helps you discover more along the way."
              eyebrow="Tour destinations"
              title="Beyond the Destination, Discover the Journey with RideWe"
              titleId="destinations-preview-title"
            />
            <Button asChild className="h-9 rounded-full bg-gradient-to-r from-[#00a9c5] to-[#31c66a] px-5 text-sm !text-white hover:brightness-105">
              <Link to="/tour-destinations">
                Explore Destinations <ArrowRight aria-hidden="true" size={15} />
              </Link>
            </Button>
          </div>
          <div className="grid grid-cols-1 gap-3 min-[480px]:grid-cols-3 lg:h-full">
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
