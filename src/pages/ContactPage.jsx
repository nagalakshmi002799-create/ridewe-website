import { Link } from "react-router-dom";
import { Button } from "../components/ui/button.jsx";
import { Container } from "../components/layout/Container.jsx";
import { Section } from "../components/layout/Section.jsx";
import { WhatsAppButton } from "../components/layout/WhatsAppButton.jsx";
import { primaryContact, secondaryContacts } from "../utils/contact.js";

export function ContactPage() {
  return (
    <Section className="bg-surface" id="contact">
      <Container className="max-w-4xl">
        <p className="text-sm font-bold uppercase tracking-[0.16em] text-accent-dark">
          Contact Us
        </p>
        <h1 className="mt-3 text-4xl font-bold tracking-tight text-brand sm:text-5xl">
          Let&apos;s plan your next journey.
        </h1>

        <div className="mt-8 grid gap-5 md:grid-cols-2">
          <div className="rounded-2xl border border-slate-200 bg-white p-6">
            <h2 className="text-lg font-bold text-brand">Primary contact</h2>
            <p className="mt-4 text-sm leading-7 text-slate-600">
              <a className="font-semibold text-brand hover:underline" href={primaryContact.phoneHref}>
                {primaryContact.phone}
              </a>
            </p>
            <div className="mt-4 flex flex-wrap gap-3">
              <a
                className="inline-flex items-center rounded-md bg-brand px-4 py-2.5 text-sm font-semibold text-white hover:bg-brand-dark"
                href={primaryContact.phoneHref}
              >
                Call Now
              </a>
              <WhatsAppButton className="inline-flex" variant="outline">
                WhatsApp
              </WhatsAppButton>
            </div>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-6">
            <h2 className="text-lg font-bold text-brand">Additional contacts</h2>
            <ul className="mt-4 space-y-3 text-sm text-slate-600">
              {secondaryContacts.map((contact) => (
                <li key={contact.phone} className="flex flex-col gap-1">
                  <a className="font-semibold text-brand hover:underline" href={contact.phoneHref}>
                    {contact.phone}
                  </a>
                  <a className="text-xs text-slate-500 hover:underline" href={contact.whatsappHref} rel="noopener noreferrer" target="_blank">
                    WhatsApp {contact.phone}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-10 rounded-[1.75rem] border border-slate-200 bg-white p-6 sm:p-8">
          <h2 className="text-2xl font-bold tracking-tight text-brand">Share your travel plans</h2>
          <p className="mt-3 max-w-2xl text-base leading-7 text-slate-600">
            Tell RideWe where you would like to travel, the dates you have in mind,
            and the kind of vehicle or tour plan you need. RideWe can help guide the
            next step.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Button asChild>
              <Link to="/services">See our services</Link>
            </Button>
            <Button asChild variant="outline">
              <Link to="/vehicles-tariff">View vehicles &amp; tariff</Link>
            </Button>
          </div>
        </div>
      </Container>
    </Section>
  );
}
