import { ArrowRight, BadgeIndianRupee } from "lucide-react";
import { tariffs } from "../../data/tariffs.js";
import { formatRupees } from "../../utils/currency.js";
import { Container } from "../layout/Container.jsx";
import { Section } from "../layout/Section.jsx";
import { WhatsAppButton } from "../layout/WhatsAppButton.jsx";
import { SectionIntro } from "./SectionIntro.jsx";

const rateLabels = {
  perDay: "Per day",
  perKm: "Per kilometre",
  driverBattaPerDay: "Driver batta / day",
  extraHour: "Extra hour",
  extraKm: "Extra kilometre",
  fixed: "Fixed tariff",
};

const serviceLabels = {
  local: "Local",
  sightseeing: "Sightseeing",
  outstation: "Outstation",
  "airport-transfer": "Airport transfer",
};

export function TariffPreview() {
  const activeTariffs = tariffs.filter((tariff) => tariff.active);

  return (
    <Section aria-labelledby="tariff-title" className="bg-surface" id="tariff">
      <Container>
        <div className="grid items-start gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
          <div>
            <SectionIntro
              description="Tariffs vary by vehicle and journey details. Contact RideWe for current pricing."
              eyebrow="Clear from the start"
              titleId="tariff-title"
              title="Tariff information"
            />
            <WhatsAppButton variant="outline">
              Ask for current tariffs
              <ArrowRight aria-hidden="true" size={16} />
            </WhatsAppButton>
          </div>

          {activeTariffs.length ? (
            <div className="grid gap-3">
              {activeTariffs.map((tariff) => (
                <article
                  className="rounded-2xl border border-slate-200 bg-white p-5"
                  key={tariff.id}
                >
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <h3 className="font-bold text-brand">
                      {tariff.vehicleCategory}
                    </h3>
                    <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-600">
                      {serviceLabels[tariff.serviceType] ?? tariff.serviceType}
                    </span>
                  </div>
                  <dl className="mt-4 grid gap-3 sm:grid-cols-2">
                    {Object.entries(tariff.rates)
                      .filter(([, amount]) => typeof amount === "number")
                      .map(([key, amount]) => (
                        <div
                          className="flex items-center justify-between gap-2 border-t border-slate-100 pt-3"
                          key={key}
                        >
                          <dt className="text-sm text-slate-600">
                            {rateLabels[key] ?? key}
                          </dt>
                          <dd className="font-semibold text-brand">
                            {formatRupees(amount)}
                          </dd>
                        </div>
                      ))}
                  </dl>
                  {tariff.notes ? (
                    <p className="mt-3 text-xs leading-5 text-slate-500">
                      {tariff.notes}
                    </p>
                  ) : null}
                </article>
              ))}
            </div>
          ) : (
            <div className="rounded-2xl border border-slate-200 bg-white p-6 sm:p-8">
              <span className="grid size-11 place-items-center rounded-xl bg-brand-soft text-accent-dark">
                <BadgeIndianRupee aria-hidden="true" size={21} />
              </span>
              <h3 className="mt-5 text-lg font-bold text-brand">
                Ask us for current tariff information.
              </h3>
              <p className="mt-2 max-w-lg text-sm leading-6 text-slate-600">
                Share your route, dates and vehicle preference. RideWe can discuss
                the applicable tariff with you directly.
              </p>
              <WhatsAppButton
                className="mt-5"
                message="Hi RideWe, please share current tariff information for my trip."
                size="sm"
              >
                Enquire on WhatsApp
              </WhatsAppButton>
            </div>
          )}
        </div>
      </Container>
    </Section>
  );
}
