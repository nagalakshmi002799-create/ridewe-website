import {
  Camera,
  CarFront,
  Map,
  Plane,
  Route,
  Signpost,
} from "lucide-react";
import { motion, useReducedMotion } from "motion/react";

const serviceIcons = {
  Map,
  Route,
  CarFront,
  Camera,
  Plane,
  Signpost,
};

export function ServiceCard({ service }) {
  const reduceMotion = useReducedMotion();
  const Icon = serviceIcons[service.icon];

  return (
    <motion.article
      className="group rounded-2xl border border-slate-200 bg-white p-5 shadow-[0_8px_24px_-22px_rgba(23,38,54,0.35)] transition-colors hover:border-amber-300 sm:p-6"
      whileHover={reduceMotion ? undefined : { y: -3 }}
      transition={{ duration: 0.18 }}
    >
      <span className="grid size-11 place-items-center rounded-xl bg-amber-50 text-amber-800 transition-colors group-hover:bg-accent group-hover:text-brand">
        <Icon aria-hidden="true" size={20} strokeWidth={1.8} />
      </span>
      <h3 className="mt-5 text-lg font-bold tracking-tight text-brand">
        {service.title}
      </h3>
      <p className="mt-2 text-sm leading-6 text-slate-600">
        {service.description}
      </p>
    </motion.article>
  );
}
