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
import { JourneyCta } from "../components/home/JourneyCta.jsx";
import { Container } from "../components/layout/Container.jsx";
import { Button } from "../components/ui/button.jsx";
import { LoadingImage } from "../components/ui/LoadingImage.jsx";
import {
  aboutHighlights,
  aboutRideWeAlt,
  aboutRideWeImagePath,
  aboutRideWeSquareImagePath,
} from "../data/about.js";

const imageUrl = (path) => `${import.meta.env.BASE_URL}images/${path}`;

const destinationImages = {
  madurai: "home/destination/destination-tamilnadu.png",
  kodaikanal: "home/destination/destination-kerala.png",
  munnar: "home/destination/destination-karnataka.png",
};

const destinationNames = {
  madurai: "Tamil Nadu",
  kodaikanal: "Kerala",
  munnar: "Karnataka",
};

const destinationCaptions = {
  madurai: {
    title: "Where Heritage Comes Alive",
    description:
      "Explore ancient temples, vibrant traditions, scenic landscapes, and timeless experiences.",
  },
  kodaikanal: {
    title: "Where Nature Meets Serenity",
    description:
      "Cruise through peaceful backwaters, misty hills, lush greenery, and refreshing escapes.",
  },
  munnar: {
    title: "Where History Meets Adventure",
    description:
      "Discover magnificent heritage, scenic mountains, cultural treasures, and unforgettable journeys.",
  },
};

function DestinationPreviewCard({ destination }) {
  const image = destinationImages[destination.id];
  const caption = destinationCaptions[destination.id];

  return (
    <article className="flex h-full flex-col overflow-hidden rounded-xl border border-[#deebec] bg-white shadow-[0_10px_30px_-25px_rgba(0,52,94,0.45)]">
      <div className="relative aspect-[1523/1032] overflow-hidden bg-gradient-to-br from-[#c8eef2] via-[#e5f6f2] to-[#b9dcce]">
        {image ? (
          <LoadingImage
            alt={`Travel scenery in ${destination.name}`}
            className="absolute inset-0 size-full"
            imageClassName="object-contain"
            loading="lazy"
            src={imageUrl(image)}
          />
        ) : null}
        <p className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#063f5f]/85 to-transparent px-3 pb-2 pt-7 text-sm font-bold text-white">
          {destination.name}
        </p>
      </div>
      <div className="flex min-h-[136px] flex-1 flex-col items-center justify-center gap-2 px-4 py-2 text-center min-[480px]:min-h-[220px] md:min-h-[184px] lg:min-h-[144px]">
        <h3 className="bg-gradient-to-r from-[#00a9c5] to-[#31c66a] bg-clip-text text-base font-semibold leading-snug text-transparent">
          {caption.title}
        </h3>
        <p className="text-sm leading-5 text-slate-600">
          {caption.description}
        </p>
      </div>
    </article>
  );
}

export function HomePage() {
  const previewDestinations = ["madurai", "kodaikanal", "munnar"]
    .map((id) => destinations.find((destination) => destination.id === id))
    .map((destination) =>
      destination
        ? { ...destination, name: destinationNames[destination.id] }
        : destination,
    )
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
        className="ridewe-loading-background py-6 sm:py-7 lg:py-8"
        id="destinations-preview"
      >
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
              <Link to="/explore-destinations">
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

      <JourneyCta />
    </>
  );
}
