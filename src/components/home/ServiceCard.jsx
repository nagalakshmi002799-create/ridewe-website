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
      className="group relative overflow-hidden rounded-[1.5rem] border border-slate-200 bg-white p-5 shadow-[0_10px_30px_-24px_rgba(11,13,15,0.35)] transition-all duration-200 hover:-translate-y-1 hover:border-[#00A9B5]/40 hover:shadow-[0_18px_40px_-28px_rgba(0,169,181,0.42)] sm:p-6"
      whileHover={reduceMotion ? undefined : { y: -3 }}
      transition={{ duration: 0.18 }}
    >
      <span className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-[#00A9B5] to-[#35D45B]" />
      <span className="grid size-12 place-items-center rounded-2xl bg-[#e8f7f6] text-[#007a83] transition-colors group-hover:bg-[#dffaf6] group-hover:text-[#0B0D0F]">
        <Icon aria-hidden="true" size={20} strokeWidth={1.8} />
      </span>
      <h3 className="mt-5 text-lg font-bold tracking-tight text-brand">
        {service.title}
      </h3>
      <p className="mt-2 text-sm leading-6 text-slate-600">
        {compact ? service.previewDescription ?? service.description : service.description}
      </p>
      {service.vehicleList ? (
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
