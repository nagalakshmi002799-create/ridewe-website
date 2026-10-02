import { ArrowUpRight, MapPin } from "lucide-react";
import { Link } from "react-router-dom";
import { homepageNavigation } from "../../data/homepage.js";
import { primaryContact, secondaryContacts } from "../../utils/contact.js";
import { scrollToTop } from "../../utils/scroll-to-top.js";
import { Container } from "./Container.jsx";
import { PhoneButton } from "./PhoneButton.jsx";
import { WhatsAppButton } from "./WhatsAppButton.jsx";
import { JourneyRoute } from "../home/JourneyRoute.jsx";

export function SiteFooter() {
  return (
    <footer className="relative isolate mt-auto overflow-hidden bg-brand-dark text-white">
      <JourneyRoute
        animated={false}
        className="pointer-events-none absolute bottom-3 right-0 hidden w-[48%] max-w-2xl opacity-15 lg:block"
        dark
        showLabels={false}
      />
      <Container className="relative grid gap-10 py-12 sm:grid-cols-2 lg:grid-cols-[1.3fr_1fr_1fr] lg:py-14">
        <div>
          <Link
            className="inline-flex w-fit items-center rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-brand-dark"
            to="/"
          >
            <img
              alt="RideWe Tours & Travels"
              className="w-[220px] object-contain"
              height="78"
              src={`${import.meta.env.BASE_URL}brand/ridewe-logo-horizontal.png`}
              width="220"
            />
          </Link>
          <p className="mt-4 max-w-sm text-sm leading-6 text-white/70">
            Ride Together for Better Experiences.
          </p>
          <p className="mt-3 max-w-sm text-sm leading-6 text-white/70">
            Travel services for tours, sightseeing, vehicle rental, outstation
            journeys, airport transfers, family and group travel, and customized
            trips across South India.
          </p>
          <p className="mt-2 text-sm text-white/70">
            Madurai, Tamil Nadu, India
          </p>
        </div>

        <div>
          <h2 className="text-sm font-semibold text-white">Explore</h2>
          <nav aria-label="Footer navigation" className="mt-3 grid gap-2">
            {homepageNavigation.map((item) => (
              <Link
                className="w-fit rounded-sm text-sm text-white/70 transition-colors hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
                key={item.id}
                to={item.to}
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>

        <div>
          <h2 className="text-sm font-semibold text-white">Get in touch</h2>
          <div className="mt-3 grid gap-4 text-sm text-white/70">
            <p className="flex items-center gap-2">
              <MapPin aria-hidden="true" className="shrink-0 text-accent" size={16} />
              Madurai, Tamil Nadu, India
            </p>
            {[primaryContact, ...secondaryContacts].map((contact, index) => (
              <div key={contact.phone}>
                <p className="text-xs font-semibold text-white/55">
                  {index === 0 ? "Primary contact" : `Additional contact ${index}`}
                </p>
                {index === 0 ? (
                  <>
                    <a
                      className="mt-1 inline-flex min-h-11 items-center gap-2 rounded-sm text-sm font-semibold text-white hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
                      href={contact.phoneHref}
                      style={{ color: "#fff" }}
                    >
                      <img
                        alt=""
                        aria-hidden="true"
                        className="size-4"
                        src={`${import.meta.env.BASE_URL}brand/phone-handset.svg`}
                      />
                      {contact.phone}
                    </a>
                    <div className="mt-1 flex gap-2">
                      <PhoneButton
                        className="dark-contact header-call-contact flex-1 px-3"
                        contact={contact}
                        variant="darkContact"
                      >
                        Call
                      </PhoneButton>
                      <WhatsAppButton
                        className="flex-1 px-3"
                        contact={contact}
                        variant="lightContact"
                      >
                        WhatsApp
                      </WhatsAppButton>
                    </div>
                  </>
                ) : (
                  <div className="mt-1 flex min-h-12 items-center justify-between gap-2">
                    <a
                      className="inline-flex min-w-0 items-center gap-1.5 rounded-sm text-sm font-medium text-white hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
                      href={contact.phoneHref}
                    >
                      <img
                        alt=""
                        aria-hidden="true"
                        className="size-3.5 shrink-0"
                        src={`${import.meta.env.BASE_URL}brand/phone-handset.svg`}
                      />
                      {contact.phone}
                    </a>
                    <div className="flex shrink-0 items-center gap-1">
                      <a
                        aria-label={`Call ${contact.phone}`}
                        className="group grid size-12 place-items-center rounded-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-brand-dark"
                        href={contact.phoneHref}
                        title={`Call ${contact.phone}`}
                      >
                        <span className="grid size-10 place-items-center rounded-full border border-white/25 bg-white/5 transition-colors group-hover:border-accent group-hover:bg-white/10">
                          <img
                            alt=""
                            aria-hidden="true"
                            className="size-[18px]"
                            src={`${import.meta.env.BASE_URL}brand/phone-handset.svg`}
                          />
                        </span>
                      </a>
                      <a
                        aria-label={`WhatsApp ${contact.phone}`}
                        className="group grid size-12 place-items-center rounded-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#35D45B] focus-visible:ring-offset-2 focus-visible:ring-offset-brand-dark"
                        href={contact.whatsappHref}
                        rel="noopener noreferrer"
                        target="_blank"
                        title={`WhatsApp ${contact.phone}`}
                      >
                        <span className="grid size-10 place-items-center rounded-full border border-white/25 bg-white/5 transition-colors group-hover:border-[#35D45B] group-hover:bg-white/10">
                          <img
                            alt=""
                            aria-hidden="true"
                            className="size-5"
                            src={`${import.meta.env.BASE_URL}brand/whatsapp.svg`}
                          />
                        </span>
                      </a>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </Container>

      <div className="border-t border-white/10">
        <Container className="flex flex-col gap-2 py-4 text-xs text-white/55 sm:flex-row sm:items-center sm:justify-between">
          <p>© RideWe Tours &amp; Travels. All rights reserved.</p>
          <button
            aria-label="Back to top"
            className="inline-flex w-fit items-center gap-1 rounded-sm hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
            onClick={() => scrollToTop({ smooth: true })}
            type="button"
          >
            Back to top <ArrowUpRight aria-hidden="true" size={14} />
          </button>
        </Container>
      </div>
    </footer>
  );
}
