import { Clock3, MapPin, Route } from "lucide-react";
import { PhoneButton } from "../layout/PhoneButton.jsx";
import { WhatsAppButton } from "../layout/WhatsAppButton.jsx";
import { LoadingImage } from "../ui/LoadingImage.jsx";

function getPlanningMessage(packageItem) {
  return [
    "Hello RideWe Tours & Travels,",
    "",
    `I would like to explore the "${packageItem.title}" sample trip idea.`,
    `Suggested route: ${packageItem.route}`,
    `Suggested duration: ${packageItem.duration}`,
    "",
    "Please help me discuss the travel date, number of travellers, suitable vehicle, route customizations, and applicable tariff.",
    "",
    "I understand this is an exploration idea, not a fixed package or booking.",
  ].join("\n");
}

export function PackageCard({ packageItem }) {
  return (
    <article className="flex h-full flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white">
      <LoadingImage
        alt={packageItem.title}
        className="aspect-[3/2] w-full"
        height="400"
        imageClassName="object-cover"
        loading="lazy"
        src={packageItem.image}
        width="680"
      />
      <div className="flex flex-1 flex-col p-5">
        <div className="flex items-start justify-between gap-3">
          <h3 className="text-xl font-bold leading-snug text-brand">
            {packageItem.title}
          </h3>
          <span className="inline-flex shrink-0 items-center gap-1.5 rounded-full bg-brand-soft px-2.5 py-1 text-xs font-semibold text-brand">
            <Clock3 aria-hidden="true" size={14} />
            {packageItem.duration}
          </span>
        </div>
        <p className="mt-3 flex items-start gap-2 text-sm font-semibold leading-6 text-slate-700">
          <Route aria-hidden="true" className="mt-1 shrink-0 text-accent-dark" size={16} />
          <span>
            {packageItem.route}
            <span className="mt-0.5 flex items-center gap-1 text-xs font-medium text-slate-500">
              <MapPin aria-hidden="true" size={12} />
              {packageItem.region}
            </span>
          </span>
        </p>
        <p className="mt-2 text-sm leading-6 text-slate-600">
          {packageItem.description}
        </p>
        {packageItem.highlights?.length > 0 ? (
          <p className="mt-4 text-sm leading-6 text-slate-600">
            {packageItem.highlights.join(" · ")}
          </p>
        ) : null}
        <div className="mt-auto flex flex-wrap gap-2 pt-5">
          <WhatsAppButton
            className="flex-1 border-2 border-transparent"
            gradientText
            message={getPlanningMessage(packageItem)}
            style={{
              backgroundImage:
                 "linear-gradient(#FFFFFF, #FFFFFF), linear-gradient(90deg, #00A9B5, #35D45B)",
              backgroundOrigin: "border-box",
              backgroundClip: "padding-box, border-box",
            }}
            variant="outline"
          >
            Let’s Plan
          </WhatsAppButton>
          <PhoneButton
            className="dark-contact !border-0 !bg-gradient-to-r !from-[#00A9B5] !to-[#35D45B] !text-white hover:!brightness-105"
            variant="darkContact"
          >
            Call Now
          </PhoneButton>
        </div>
      </div>
    </article>
  );
}
