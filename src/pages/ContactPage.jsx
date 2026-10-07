import { Container } from "../components/layout/Container.jsx";
import { PhoneButton } from "../components/layout/PhoneButton.jsx";
import { WhatsAppButton } from "../components/layout/WhatsAppButton.jsx";
import { TripPlannerPanel } from "../components/home/TripPlannerPanel.jsx";
import { primaryContact, secondaryContacts } from "../utils/contact.js";

const imageUrl = (path) => `${import.meta.env.BASE_URL}${path}`;

function IconContactLinks({ contact }) {
  return (
    <div className="flex shrink-0 gap-2">
      <a
        aria-label={`Call ${contact.phone}`}
        className="grid size-10 place-items-center rounded-full border border-slate-200 bg-white transition hover:border-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
        href={contact.phoneHref}
        title={`Call ${contact.phone}`}
      >
        <img
          alt=""
          aria-hidden="true"
          className="size-4"
          src={imageUrl("brand/phone-handset.svg")}
        />
      </a>
      <a
        aria-label={`WhatsApp ${contact.phone}`}
        className="grid size-10 place-items-center rounded-full border border-slate-200 bg-white transition hover:border-[#25D366] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#35D45B]"
        href={contact.whatsappHref}
        rel="noopener noreferrer"
        target="_blank"
        title={`WhatsApp ${contact.phone}`}
      >
        <img
          alt=""
          aria-hidden="true"
          className="size-5"
          src={imageUrl("brand/whatsapp.svg")}
        />
      </a>
    </div>
  );
}

export function ContactPage() {
  const orderedSecondaryContacts = [...secondaryContacts].reverse();

  return (
    <>
      <section className="relative isolate overflow-hidden bg-[#dff5fb]">
        <div
          aria-hidden="true"
          className="absolute inset-0 -z-10 bg-cover bg-center"
          style={{
            backgroundImage: `url("${imageUrl("images/home/route-to-imagine/route-background.png")}")`,
          }}
        />
        <Container className="relative py-6 sm:py-8 lg:py-10">
          <div className="w-full py-2 lg:w-3/5">
            <p className="text-sm font-bold uppercase tracking-[0.16em] text-accent-dark">
              Contact RideWe
            </p>
            <h1 className="mt-2 text-3xl font-bold tracking-tight text-brand sm:text-4xl">
              Let&apos;s Talk About Your Journey
            </h1>
            <p className="mt-4 text-base font-medium leading-7 text-slate-700">
              Planning a local trip, sightseeing tour, outstation journey, airport
              transfer, family holiday, temple tour, or customized getaway? Share
              your travel plans with RideWe and let’s discuss the right travel
              option for your journey.
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              <PhoneButton
                ariaLabel={`Call ${primaryContact.name} at ${primaryContact.phone}`}
                className="h-12 min-h-12 rounded-xl bg-gradient-to-r from-accent to-[#35D45B] px-5 text-white hover:brightness-105 hover:text-white"
                iconClassName="brightness-0 invert"
                variant="primary"
              >
                Call Now
              </PhoneButton>
              <span className="inline-flex rounded-xl bg-gradient-to-r from-accent to-[#35D45B] p-px">
                <WhatsAppButton
                  ariaLabel={`Contact ${primaryContact.name} on WhatsApp`}
                  className="h-[46px] min-h-[46px] rounded-xl border-0 bg-white px-5 text-accent-dark hover:bg-white hover:text-accent-dark"
                  gradientIcon
                  gradientText
                  variant="outline"
                >
                  WhatsApp RideWe
                </WhatsAppButton>
              </span>
            </div>

            <div className="mt-6 w-fit rounded-lg border border-slate-200/80 bg-white/90 p-3 shadow-sm">
              <h2 className="text-sm font-bold text-brand">Additional Contact</h2>
              <ul className="mt-2 flex flex-col gap-2 sm:flex-row sm:flex-nowrap sm:gap-4">
                {orderedSecondaryContacts.map((contact) => (
                  <li
                    className="flex min-h-10 flex-none flex-nowrap items-center gap-2"
                    key={contact.phone}
                  >
                    <span className="inline-flex min-w-0 flex-nowrap items-center gap-2 whitespace-nowrap text-sm font-semibold text-slate-700 sm:text-base">
                      <img
                        alt=""
                        aria-hidden="true"
                        className="size-4 shrink-0"
                        src={imageUrl("brand/phone-handset.svg")}
                      />
                      <span>{contact.phone}</span>
                    </span>
                    <IconContactLinks contact={contact} />
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Container>
      </section>

      <section className="bg-white py-10 sm:py-14 lg:py-16" id="start-planning">
        <Container className="grid max-w-7xl items-start gap-6 sm:gap-8 lg:grid-cols-2 lg:gap-12">
          <div className="lg:pt-5">
            <p className="text-sm font-bold uppercase tracking-[0.16em] text-accent-dark">
              Start Planning
            </p>
            <h2 className="mt-2 text-3xl font-bold tracking-tight text-brand sm:text-4xl">
              Share Your Trip Details
            </h2>
            <div className="mt-4 space-y-4 text-base leading-7 text-slate-600">
              <p>
                Planning a trip? Start by sharing a few details about your journey
                with RideWe. Tell us your starting point, destination, travel date,
                number of travellers, preferred vehicle, and any specific
                requirements you may have.
              </p>
              <p>
                Once you complete the trip planner, RideWe will prepare your
                enquiry with the details you provided and open WhatsApp so you
                can review and send it to us. Our team can then discuss the
                suitable vehicle, route, travel options, and applicable tariff
                based on your requirements.
              </p>
              <p>
                Whether it’s a local ride, airport transfer, sightseeing trip,
                family holiday, temple tour, hill-station getaway, or a
                customized multi-day journey, tell us what you have in mind and
                let’s plan it together.
              </p>
            </div>
            <p className="mt-5 font-semibold text-brand">
              Simple to share. Easy to discuss. Planned around your journey.
            </p>
          </div>
          <TripPlannerPanel className="w-full lg:ml-0 lg:mr-0" />
        </Container>
      </section>

      <section aria-hidden="true" className="w-full overflow-hidden">
        <img
          src={imageUrl("images/home/travel-plan.png")}
          alt=""
          className="block h-auto w-full"
        />
      </section>
    </>
  );
}
