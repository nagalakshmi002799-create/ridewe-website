import {
  Armchair,
  MapPinned,
  MessageCircle,
  SlidersHorizontal,
} from "lucide-react";
import { rideweBenefits } from "../../data/homepage.js";
import { Container } from "../layout/Container.jsx";
import { Section } from "../layout/Section.jsx";
import { SectionIntro } from "./SectionIntro.jsx";

const benefitIcons = {
  SlidersHorizontal,
  Armchair,
  MapPinned,
  MessageCircle,
};

export function BenefitsSection() {
  return (
    <Section
      aria-labelledby="benefits-title"
      className="bg-white"
      id="why-ridewe"
    >
      <Container>
        <SectionIntro
          description="A clear way to talk through the details that matter to your journey."
          eyebrow="Made for your plans"
          titleId="benefits-title"
          title="A little more room to make it yours."
        />
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {rideweBenefits.map((benefit) => {
            const Icon = benefitIcons[benefit.icon];

            return (
              <article
                className="rounded-2xl border border-slate-200 bg-surface p-5 sm:p-6"
                key={benefit.title}
              >
                <span className="grid size-10 place-items-center rounded-xl bg-brand text-accent">
                  <Icon aria-hidden="true" size={19} strokeWidth={1.8} />
                </span>
                <h3 className="mt-5 font-bold text-brand">{benefit.title}</h3>
                <p className="mt-2 text-sm leading-6 text-slate-600">
                  {benefit.description}
                </p>
              </article>
            );
          })}
        </div>
      </Container>
    </Section>
  );
}
