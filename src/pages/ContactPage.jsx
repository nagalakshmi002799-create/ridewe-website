import { Users } from "lucide-react";
import { Container } from "../components/layout/Container.jsx";
import { PhoneButton } from "../components/layout/PhoneButton.jsx";
import { Section } from "../components/layout/Section.jsx";
import { WhatsAppButton } from "../components/layout/WhatsAppButton.jsx";
import { TripPlannerPanel } from "../components/home/TripPlannerPanel.jsx";
import { primaryContact, secondaryContacts } from "../utils/contact.js";

function IconContactLinks({ contact }) {
  return (
    <div className="flex gap-2">
      <a
        aria-label={`Call ${contact.phone}`}
        className="grid size-11 place-items-center rounded-full border border-slate-200 bg-white text-brand hover:border-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
        href={contact.phoneHref}
        title={`Call ${contact.phone}`}
      >
        <img
          alt=""
          aria-hidden="true"
          className="size-4"
          src={`${import.meta.env.BASE_URL}brand/phone-handset.svg`}
        />
      </a>
      <a
        aria-label={`WhatsApp ${contact.phone}`}
        className="grid size-11 place-items-center rounded-full border border-slate-200 bg-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#35D45B]"
        href={contact.whatsappHref}
        rel="noopener noreferrer"
        target="_blank"
        title={`WhatsApp ${contact.phone}`}
      >
        <img
          alt=""
          aria-hidden="true"
          className="size-5"
          src={`${import.meta.env.BASE_URL}brand/whatsapp.svg`}
        />
      </a>
    </div>
  );
}

export function ContactPage() {
  return (
    <>
      <Section className="bg-surface">
        <Container className="max-w-5xl">
          <p className="text-sm font-bold uppercase tracking-[0.16em] text-accent-dark">
            Contact Us
          </p>
          <h1 className="mt-3 text-4xl font-bold tracking-tight text-brand sm:text-5xl">
            Contact RideWe
          </h1>
          <h2 className="mt-4 text-xl font-semibold text-slate-700 sm:text-2xl">
            Let&apos;s Talk About Your Journey
          </h2>
          <p className="mt-4 max-w-3xl text-base leading-7 text-slate-600">
            Planning a local trip, sightseeing tour, outstation journey, airport
            transfer, family holiday, or customized South India trip? Share your
            travel plans with RideWe and discuss the suitable travel option directly
            with us.
          </p>
        </Container>
      </Section>

      <Section className="bg-white">
        <Container className="max-w-5xl">
          <h2 className="text-3xl font-bold tracking-tight text-brand">
            Contact Information
          </h2>
          <div className="mt-6 grid gap-5 md:grid-cols-2">
            <section className="rounded-2xl border border-slate-200 bg-surface p-6">
              <h3 className="text-lg font-bold text-brand">
                RideWe Tours &amp; Travels
              </h3>
              <a
                className="mt-3 inline-flex min-h-11 items-center font-semibold text-brand hover:underline"
                href={primaryContact.phoneHref}
              >
                {primaryContact.phone}
              </a>
            </section>
            <section className="rounded-2xl border border-slate-200 bg-surface p-6">
              <h3 className="text-lg font-bold text-brand">Other Contact Numbers</h3>
              <ul className="mt-3 grid gap-3">
                {secondaryContacts.map((contact) => (
                  <li
                    className="flex items-center justify-between gap-3"
                    key={contact.phone}
                  >
                    <a
                      className="font-semibold text-brand hover:underline"
                      href={contact.phoneHref}
                    >
                      {contact.phone}
                    </a>
                  </li>
                ))}
              </ul>
            </section>
          </div>
        </Container>
      </Section>

      <Section className="bg-surface">
        <Container className="max-w-5xl">
          <h2 className="text-3xl font-bold tracking-tight text-brand">
            Share Your Travel Plans
          </h2>
          <p className="mt-3 max-w-3xl text-base leading-7 text-slate-600">
            When contacting RideWe, you can share:
          </p>
          <ul className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {[
              ["From", "Your starting location"],
              ["Destination", "Where you want to travel"],
              ["Travel Date", "Your preferred date"],
              ["Travellers", "Number of passengers"],
              [
                "Vehicle Preference",
                "Ciaz, Ertiga, Innova, Innova Crysta, Tempo Traveller, or discuss an option with us.",
              ],
            ].map(([label, description]) => (
              <li
                className="rounded-xl border border-slate-200 bg-white p-4"
                key={label}
              >
                <h3 className="font-semibold text-brand">{label}</h3>
                <p className="mt-1 text-sm leading-6 text-slate-600">
                  {description}
                </p>
              </li>
            ))}
          </ul>
        </Container>
      </Section>

      <Section className="bg-white" id="start-planning">
        <Container className="grid max-w-5xl gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-accent-dark">
              Start Planning
            </p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-brand">
              Share your trip details
            </h2>
            <p className="mt-4 text-base leading-7 text-slate-600">
              Complete the trip planner and RideWe will open WhatsApp with your
              details ready to send.
            </p>
          </div>
          <TripPlannerPanel className="lg:ml-0 lg:mr-0" />
        </Container>
      </Section>

      <Section className="bg-surface">
        <Container className="max-w-5xl">
          <h2 className="text-3xl font-bold tracking-tight text-brand">
            Contact RideWe Directly
          </h2>
          <div className="mt-5 flex flex-wrap gap-3">
            <PhoneButton
              ariaLabel={`Call ${primaryContact.name} at ${primaryContact.phone}`}
              className="h-10 min-h-10 rounded-md bg-gradient-to-r from-accent to-[#35D45B] px-4 py-2.5 text-sm text-white hover:brightness-95 hover:text-white"
              iconClassName="brightness-0 invert"
              style={{ color: "#fff" }}
              variant="primary"
            >
              Call Now
            </PhoneButton>
            <WhatsAppButton variant="outline">WhatsApp RideWe</WhatsAppButton>
          </div>
          <div className="mt-6 rounded-2xl border border-slate-200 bg-white p-5">
            <h3 className="flex items-center gap-2 font-semibold text-brand">
              <Users aria-hidden="true" size={18} />
              Other contact options
            </h3>
            <ul className="mt-4 grid gap-4 sm:grid-cols-2">
              {secondaryContacts.map((contact) => (
                <li
                  className="flex items-center justify-between gap-3"
                  key={contact.phone}
                >
                  <span className="text-sm font-semibold text-slate-700">
                    {contact.phone}
                  </span>
                  <IconContactLinks contact={contact} />
                </li>
              ))}
            </ul>
          </div>
        </Container>
      </Section>
    </>
  );
}
