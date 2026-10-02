import {
  Camera,
  CarFront,
  MapPinned,
  Map,
  Plane,
  Route,
  Signpost,
  Users,
} from "lucide-react";
import { motion, useReducedMotion } from "motion/react";
import { Link } from "react-router-dom";
import { vehicles } from "../../data/vehicles.js";
import { Button } from "../ui/button.jsx";

const serviceIcons = {
  Map,
  Route,
  CarFront,
  Camera,
  Plane,
  Signpost,
  Users,
  MapPinned,
};

export function ServiceCard({ service, compact = false }) {
  const reduceMotion = useReducedMotion();
  const Icon = serviceIcons[service.icon];

  return (
    <motion.article
      className={`group relative overflow-hidden border border-slate-100 bg-white shadow-[0_10px_30px_-24px_rgba(11,13,15,0.35)] transition-all duration-200 hover:-translate-y-1 hover:border-[#00A9B5]/40 hover:shadow-[0_18px_40px_-28px_rgba(0,169,181,0.42)] ${
        compact
          ? "flex min-h-[72px] flex-col items-center justify-center rounded-xl px-2 py-2 text-center"
          : "rounded-[1.5rem] p-5 sm:p-6"
      }`}
      whileHover={reduceMotion ? undefined : { y: -3 }}
      transition={{ duration: 0.18 }}
    >
      <span className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-[#00A9B5] to-[#35D45B]" />
      <span className={`grid place-items-center bg-[#e8f7f6] text-[#00ae91] transition-colors group-hover:bg-[#dffaf6] group-hover:text-[#0B0D0F] ${compact ? "size-8 rounded-lg" : "size-12 rounded-2xl"}`}>
        <Icon aria-hidden="true" size={compact ? 21 : 20} strokeWidth={1.8} />
      </span>
      <h3 className={`${compact ? "mt-1.5 text-[11px] leading-[1.2] sm:text-xs" : "mt-5 text-lg"} font-bold tracking-tight text-brand`}>
        {compact && service.id === "vehicle-rental" ? "Vehicle Rental" : service.title}
      </h3>
      <p className={`${compact ? "sr-only" : "mt-2 text-sm leading-6"} text-slate-600`}>
        {compact ? service.previewDescription ?? service.description : service.description}
      </p>
      {!compact && service.vehicleList ? (
        <p className="mt-3 text-xs font-semibold leading-5 text-slate-600">
          {vehicles.map((vehicle) => vehicle.displayName).join(" · ")}
        </p>
      ) : null}
      {!compact && service.action ? (
        <Button asChild className="mt-5" size="sm" variant="outline">
          <Link to={service.to}>{service.action}</Link>
        </Button>
      ) : null}
    </motion.article>
  );
}
