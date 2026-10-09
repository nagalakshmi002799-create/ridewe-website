import { useCallback, useEffect, useLayoutEffect, useRef } from "react";
import { ArrowRight } from "lucide-react";
import { Button } from "../components/ui/button.jsx";
import { Container } from "../components/layout/Container.jsx";
import { LoadingImage } from "../components/ui/LoadingImage.jsx";
import {
  destinationGalleries,
  exploreByState,
} from "../data/explore-destinations.js";

const imageBase = `${import.meta.env.BASE_URL}images`;

function scrollToGallery(galleryId) {
  const gallery = document.getElementById(galleryId);
  if (!gallery) return;

  const headerHeight = document.querySelector("header")?.getBoundingClientRect()
    .height ?? 0;
  const top = window.scrollY + gallery.getBoundingClientRect().top - headerHeight - 16;
  const behavior = window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ? "auto"
    : "smooth";

  window.scrollTo({ top: Math.max(0, top), behavior });
}

function useInfiniteCarousel() {
  const viewportRef = useRef(null);
  const firstSetRef = useRef(null);
  const loopWidthRef = useRef(0);
  const dragRef = useRef(null);

  useLayoutEffect(() => {
    const viewport = viewportRef.current;
    const firstSet = firstSetRef.current;
    if (!viewport || !firstSet) return undefined;

    const positionAtMiddleSet = () => {
      loopWidthRef.current = firstSet.offsetWidth;
      viewport.scrollLeft = loopWidthRef.current;
    };

    positionAtMiddleSet();
    const observer = new ResizeObserver(positionAtMiddleSet);
    observer.observe(firstSet);

    return () => observer.disconnect();
  }, []);

  const handleScroll = useCallback(() => {
    const viewport = viewportRef.current;
    const loopWidth = loopWidthRef.current;
    if (!viewport || !loopWidth) return;

    if (viewport.scrollLeft < loopWidth) {
      viewport.scrollLeft += loopWidth;
    } else if (viewport.scrollLeft >= loopWidth * 2) {
      viewport.scrollLeft -= loopWidth;
    }
  }, []);

  function handlePointerDown(event) {
    if (event.pointerType !== "mouse" || event.button !== 0) return;

    dragRef.current = {
      pointerId: event.pointerId,
      lastX: event.clientX,
    };
    event.currentTarget.setPointerCapture(event.pointerId);
  }

  function handlePointerMove(event) {
    const drag = dragRef.current;
    if (drag?.pointerId !== event.pointerId) return;

    event.currentTarget.scrollLeft -= event.clientX - drag.lastX;
    drag.lastX = event.clientX;
  }

  function endPointerDrag(event) {
    if (dragRef.current?.pointerId === event.pointerId) {
      dragRef.current = null;
    }
  }

  return {
    endPointerDrag,
    firstSetRef,
    handlePointerDown,
    handlePointerMove,
    handleScroll,
    viewportRef,
  };
}

function DestinationGallery({ gallery }) {
  const {
    endPointerDrag,
    firstSetRef,
    handlePointerDown,
    handlePointerMove,
    handleScroll,
    viewportRef,
  } = useInfiniteCarousel();

  return (
    <div
      aria-label={`${gallery.name} destinations`}
      className="overflow-x-auto overscroll-x-contain pb-4 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      onPointerCancel={endPointerDrag}
      onPointerDown={handlePointerDown}
      onPointerMove={handlePointerMove}
      onPointerUp={endPointerDrag}
      onScroll={handleScroll}
      ref={viewportRef}
      role="region"
      style={{ touchAction: "pan-x" }}
      tabIndex={0}
    >
      <div className="flex w-max">
        {[0, 1, 2].map((copy) => (
          <div
            aria-hidden={copy !== 1}
            className="flex shrink-0 gap-4 pr-4"
            key={`${gallery.id}-${copy}`}
            ref={copy === 0 ? firstSetRef : undefined}
          >
            {gallery.destinations.map((destination) => (
              <figure
                className="relative aspect-[3/4] w-[72vw] max-w-[250px] shrink-0 overflow-hidden rounded-[20px] bg-slate-200"
                key={`${gallery.id}-${copy}-${destination.filename}`}
                onDragStart={(event) => event.preventDefault()}
              >
                <img
                  alt={copy === 1 ? destination.name : ""}
                  className="size-full select-none object-cover"
                  draggable="false"
                  loading="lazy"
                  src={`${imageBase}/destinations/${gallery.directory}/${destination.filename}`}
                />
                <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#062d43]/95 via-[#062d43]/55 to-transparent px-4 pb-4 pt-12 text-white">
                  <span className="block text-lg font-bold leading-tight drop-shadow-sm">
                    {destination.name}
                  </span>
                  <span className="mt-1 block text-sm font-medium leading-5 text-white drop-shadow-sm">
                    {destination.caption}
                  </span>
                </figcaption>
              </figure>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

function ExploreByStateCarousel() {
  const {
    endPointerDrag,
    firstSetRef,
    handlePointerDown,
    handlePointerMove,
    handleScroll,
    viewportRef,
  } = useInfiniteCarousel();

  return (
    <div
      aria-label="Explore destinations by state"
      className="-mx-4 mt-6 overflow-x-auto overscroll-x-contain px-4 pb-4 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8"
      onPointerCancel={endPointerDrag}
      onPointerDown={handlePointerDown}
      onPointerMove={handlePointerMove}
      onPointerUp={endPointerDrag}
      onScroll={handleScroll}
      ref={viewportRef}
      role="region"
      style={{ touchAction: "pan-x" }}
      tabIndex={0}
    >
      <div className="flex w-max items-stretch">
        {[0, 1, 2].map((copy) => (
          <div
            aria-hidden={copy !== 1}
            className="flex shrink-0 items-stretch gap-5 pr-5"
            key={`explore-state-${copy}`}
            ref={copy === 0 ? firstSetRef : undefined}
            role="list"
          >
            {exploreByState.map((destination) => (
              <article
                className="flex w-[min(82vw,340px)] shrink-0 flex-col overflow-hidden rounded-xl border border-[#deebec] bg-white text-center shadow-[0_10px_30px_-25px_rgba(0,52,94,0.45)]"
                key={`${copy}-${destination.id}`}
                role="listitem"
              >
                <div className="relative aspect-[1523/1033] w-full shrink-0 overflow-hidden bg-gradient-to-br from-[#c8eef2] via-[#e5f6f2] to-[#b9dcce]">
                  <LoadingImage
                    alt={`Travel scenery in ${destination.name}`}
                    className="absolute inset-0 size-full"
                    imageClassName="object-contain"
                    loading="lazy"
                    src={`${imageBase}/home/destination/${destination.image}`}
                  />
                  <p className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#063f5f]/85 to-transparent px-3 pb-2 pt-7 text-center text-sm font-bold text-white">
                    {destination.name}
                  </p>
                </div>
                <div className="flex flex-1 flex-col items-center p-5">
                  <h3 className="bg-gradient-to-r from-[#00a9c5] to-[#31c66a] bg-clip-text text-lg font-bold leading-snug text-transparent">
                    {destination.title}
                  </h3>
                  <p className="mt-2 flex-1 text-sm leading-6 text-slate-600">
                    {destination.description}
                  </p>
                  <Button
                    className="mt-5 h-10 w-fit rounded-full bg-gradient-to-r from-[#00a9c5] to-[#31c66a] px-5 text-sm !text-white hover:brightness-105"
                    onClick={() => scrollToGallery(destination.id)}
                    tabIndex={copy === 1 ? 0 : -1}
                    type="button"
                  >
                    Explore
                    <ArrowRight aria-hidden="true" size={16} />
                  </Button>
                </div>
              </article>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

export function ExploreDestinationsPage() {
  useEffect(() => {
    const previousTitle = document.title;
    document.title = "Explore Destinations | RideWe Tours & Travels";
    return () => {
      document.title = previousTitle;
    };
  }, []);

  return (
    <>
      <section
        aria-labelledby="explore-hero-title"
        className="relative isolate min-h-[440px] overflow-hidden bg-[#e9f4f5] text-[#0b4775] sm:min-h-[clamp(370px,52vh,480px)]"
      >
        <picture
          aria-hidden="true"
          className="pointer-events-none absolute inset-0"
        >
          <source
            media="(max-width: 639px)"
            srcSet={`${imageBase}/destinations/destination-mobile-bg.png`}
          />
          <img
            alt=""
            className="size-full object-cover object-[65%_56%] sm:object-[50%_56%] lg:object-[54%_56%]"
            src={`${imageBase}/destinations/destination-bg.png`}
          />
        </picture>
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 bg-gradient-to-r from-white/60 via-white/5 to-white/2"
        />
        <Container className="relative z-10 flex min-h-[440px] items-start py-10 sm:min-h-[clamp(370px,52vh,480px)] sm:py-12">
          <div className="max-w-[590px]">
            <p className="mb-3 text-xs font-bold uppercase tracking-[0.18em] text-[#007a83]">
              Explore Destinations
            </p>
            <h1
              className="text-[2rem] font-bold leading-[1.08] tracking-[-0.045em] text-[#0b4775] sm:text-5xl lg:text-[3.1rem]"
              id="explore-hero-title"
            >
              Every Destination Has a Story. Let’s Make It Yours.
            </h1>
            <p className="mt-5 max-w-[600px] text-sm font-medium leading-6 text-[#174c72] sm:text-base sm:leading-7">
              <span className="sm:hidden">
                Discover breathtaking destinations, timeless heritage, and
                unforgettable escapes with flexible travel options tailored to
                your journey.
              </span>
              <span className="hidden sm:inline">
                From breathtaking landscapes and timeless heritage to peaceful
                getaways and unforgettable adventures, discover places that
                inspire you to travel. With flexible travel options tailored to
                your plans, RideWe makes every mile part of the experience.
              </span>
            </p>
          </div>
        </Container>
      </section>

      <section
        aria-labelledby="explore-state-title"
        className="bg-white py-6 sm:py-8 lg:py-10"
      >
        <Container>
          <h2
            className="text-3xl font-bold tracking-tight text-[#0b4775] sm:text-4xl"
            id="explore-state-title"
          >
            Explore by State
          </h2>
          <p className="mt-4 text-base leading-7 text-slate-600 sm:text-lg">
            Each state has a unique story. Explore the best destinations in Tamil Nadu,
            Kerala, Karnataka, Andhra Pradesh, Telangana and North India.
          </p>
          <ExploreByStateCarousel />
        </Container>
      </section>

      <section
        aria-labelledby="popular-destinations-title"
        className="ridewe-loading-background py-6 sm:py-8 lg:py-10"
      >
        <Container>
          <h2
            className="mb-4 text-3xl font-bold tracking-tight text-[#0b4775] sm:mb-5 sm:text-4xl"
            id="popular-destinations-title"
          >
            Popular Destinations
          </h2>
          <div className="space-y-4 sm:space-y-5">
            {destinationGalleries.map((gallery) => (
              <section
                aria-labelledby={`${gallery.id}-gallery-title`}
                className="scroll-mt-24"
                id={gallery.id}
                key={gallery.id}
              >
                <h3
                  className="mb-2 text-xl font-bold text-[#0b4775] sm:text-2xl"
                  id={`${gallery.id}-gallery-title`}
                >
                  {gallery.name}
                </h3>
                <DestinationGallery gallery={gallery} />
              </section>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
