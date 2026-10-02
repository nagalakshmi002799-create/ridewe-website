import { Link } from "react-router-dom";
import { Button } from "../components/ui/button.jsx";
import { Container } from "../components/layout/Container.jsx";
import { Section } from "../components/layout/Section.jsx";
import { primaryContact } from "../utils/contact.js";

export function AboutPage() {
  return (
    <Section className="bg-surface" id="about">
      <Container className="max-w-4xl">
        <p className="text-sm font-bold uppercase tracking-[0.16em] text-accent-dark">
          About RideWe
        </p>
        <h1 className="mt-3 text-4xl font-bold tracking-tight text-brand sm:text-5xl">
          Ride Together for Better Experiences.
        </h1>
        <div className="mt-6 space-y-5 text-base leading-8 text-slate-600">
          <p>
            RideWe Tours &amp; Travels helps travellers plan comfortable, well-paced
            journeys across Madurai and South India.
          </p>
          <p>
            Whether you are planning a day of sightseeing, a family trip, or travel
            beyond the city, RideWe can help you work through the route, vehicle and
            trip details before you begin.
          </p>
        </div>

        <div className="mt-10 grid gap-5 md:grid-cols-3">
          <div className="rounded-2xl border border-slate-200 bg-white p-5">
            <h2 className="text-lg font-bold text-brand">Flexible planning</h2>
            <p className="mt-2 text-sm leading-6 text-slate-600">
              Share your route, dates and preferences and RideWe can help outline the
              best-fit travel plan.
            </p>
          </div>
          <div className="rounded-2xl border border-slate-200 bg-white p-5">
            <h2 className="text-lg font-bold text-brand">Vehicle choices</h2>
            <p className="mt-2 text-sm leading-6 text-slate-600">
              Explore the available vehicle categories and pick the seating and comfort
              level that suits your group.
            </p>
          </div>
          <div className="rounded-2xl border border-slate-200 bg-white p-5">
            <h2 className="text-lg font-bold text-brand">Direct enquiry</h2>
            <p className="mt-2 text-sm leading-6 text-slate-600">
              Reach out by phone or WhatsApp to discuss your trip details with RideWe.
            </p>
          </div>
        </div>

        <div className="mt-10 rounded-[1.75rem] border border-slate-200 bg-white p-6 sm:p-8">
          <h2 className="text-2xl font-bold tracking-tight text-brand">Talk to RideWe</h2>
          <div className="mt-5 space-y-3 text-sm leading-7 text-slate-600">
            <p>
              <span className="font-semibold text-brand">Phone:</span>{" "}
              <a className="hover:underline" href={primaryContact.phoneHref}>
                {primaryContact.phone}
              </a>
            </p>
            <p>
              <span className="font-semibold text-brand">WhatsApp:</span>{" "}
              <a
                className="hover:underline"
                href={primaryContact.whatsappHref}
                rel="noopener noreferrer"
                target="_blank"
              >
                {primaryContact.phone}
              </a>
            </p>
          </div>
          <div className="mt-6">
            <Button asChild>
              <Link to="/contact">Go to Contact Us</Link>
            </Button>
          </div>
        </div>
      </Container>
    </Section>
  );
}
