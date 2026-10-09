import { Clock3, MapPin, Route } from "lucide-react";
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
        className="aspect-[1.7/1] w-full"
        height="400"
        imageClassName="object-cover"
        loading="lazy"
        src={packageItem.image}
        width="680"
      />
      <div className="flex flex-1 flex-col p-5">
        <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-xs font-semibold uppercase tracking-wider text-slate-500">
          <span className="inline-flex items-center gap-1.5">
            <MapPin aria-hidden="true" size={14} />
            {packageItem.region}
          </span>
          <span className="inline-flex items-center gap-1.5">
            <Clock3 aria-hidden="true" size={14} />
            {packageItem.duration}
          </span>
        </div>
        <h3 className="mt-3 text-xl font-bold leading-snug text-brand">
          {packageItem.title}
        </h3>
        <p className="mt-3 flex items-start gap-2 text-sm leading-6 text-slate-600">
          <Route aria-hidden="true" className="mt-1 shrink-0 text-accent-dark" size={16} />
          <span>{packageItem.route}</span>
        </p>
        <ul className="mt-4 grid gap-1.5 text-sm leading-6 text-slate-600">
          {packageItem.highlights.map((highlight) => (
            <li className="flex gap-2" key={highlight}>
              <span aria-hidden="true" className="text-accent-dark">•</span>
              {highlight}
            </li>
          ))}
        </ul>
        <WhatsAppButton
          className="mt-5 w-fit"
          message={getPlanningMessage(packageItem)}
          variant="outline"
        >
          {packageItem.cta}
        </WhatsAppButton>
      </div>
    </article>
  );
}
