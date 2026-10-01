import { useState } from "react";
import { CarFront, Snowflake, Users } from "lucide-react";
import { cn } from "../../lib/cn.js";
import { WhatsAppButton } from "../layout/WhatsAppButton.jsx";

function formatVehicleRupees(amount) {
  return `₹${amount.toLocaleString("en-IN")}`;
}

export function VehicleCard({ vehicle, className }) {
  const [imageError, setImageError] = useState(false);

  return (
    <article
      className={cn(
        "flex h-full flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white",
        className,
      )}
    >
      <div className="relative aspect-[1.7/1] overflow-hidden bg-[#f0f7f5]">
        {vehicle.image && !imageError ? (
          <img
            alt={vehicle.imageAlt}
            className="size-full object-contain"
            loading="lazy"
            onError={() => setImageError(true)}
            src={vehicle.image}
          />
        ) : (
          <div
            aria-label={`${vehicle.imageAlt}; image unavailable`}
            className="grid size-full place-items-center bg-[radial-gradient(ellipse_at_50%_120%,rgba(0,169,181,0.16),transparent_68%)]"
            role="img"
          >
            <div className="flex flex-col items-center gap-2 text-center">
              <span className="grid size-16 place-items-center rounded-full border border-white bg-white/90 text-accent-dark shadow-sm">
                <CarFront aria-hidden="true" size={34} strokeWidth={1.4} />
              </span>
              <span className="text-xs font-semibold text-slate-600">
                Vehicle image unavailable
              </span>
            </div>
          </div>
        )}
        <span className="absolute bottom-0 inset-x-0 h-1 bg-gradient-to-r from-accent to-[#35D45B]" />
      </div>
      <div className="flex flex-1 flex-col p-3">
        <div className="flex items-center justify-between gap-2">
          <h3 className="text-base font-bold tracking-tight text-brand">
            {vehicle.displayName}
          </h3>
          <span className="inline-flex shrink-0 items-center gap-1 rounded-full border border-slate-200 bg-slate-50 px-2 py-0.5 text-[10px] font-semibold text-slate-600">
            <span
              aria-hidden="true"
              className="size-2 rounded-full border border-slate-300 bg-white"
            />
            {vehicle.color}
          </span>
        </div>
        <div className="mt-1.5 flex items-center gap-1 text-[11px] font-medium text-slate-600">
          <Snowflake aria-hidden="true" className="shrink-0 text-accent-dark" size={13} />
          <span>AC</span>
          <span aria-hidden="true">·</span>
          <Users aria-hidden="true" className="shrink-0 text-accent-dark" size={13} />
          <span>{vehicle.seating}</span>
        </div>

        <div className="mt-3 flex-1 space-y-2">
          <div className="rounded-lg bg-surface p-2">
            <p className="text-[10px] font-bold uppercase tracking-[0.08em] text-slate-500">
            {vehicle.belowThresholdLabel}
            </p>
            <dl className="mt-1.5 grid gap-1">
              <div className="flex items-baseline justify-between gap-1">
                <dt className="text-[11px] text-slate-600">Day rent</dt>
                <dd className="text-xs font-bold text-brand">
                  {formatVehicleRupees(vehicle.dayRent)}/day
                </dd>
              </div>
              <div className="flex items-baseline justify-between gap-1">
                <dt className="text-[11px] text-slate-600">Diesel</dt>
                <dd className="text-xs font-bold text-brand">
                  {formatVehicleRupees(vehicle.dieselPerKm)}/km
                </dd>
              </div>
            </dl>
          </div>
          {vehicle.aboveThresholdLabel ? (
            <div className="rounded-lg bg-surface p-2">
              <p className="text-[10px] font-bold uppercase tracking-[0.08em] text-slate-500">
                {vehicle.aboveThresholdLabel}
              </p>
              <dl className="mt-1.5 grid gap-1">
                <div className="flex items-baseline justify-between gap-1">
                  <dt className="text-[11px] text-slate-600">Per km</dt>
                  <dd className="text-xs font-bold text-brand">
                    {formatVehicleRupees(vehicle.perKm)}/km
                  </dd>
                </div>
                <div className="flex items-baseline justify-between gap-1">
                  <dt className="text-[11px] text-slate-600">Driver allowance</dt>
                  <dd className="text-xs font-bold text-brand">
                    {formatVehicleRupees(vehicle.driverAllowance)}/day
                  </dd>
                </div>
              </dl>
            </div>
          ) : null}
          <p className="px-1 pt-1 text-xs font-semibold text-brand">
            Hills charge {formatVehicleRupees(vehicle.hillsCharge)}
            {vehicle.hillsChargeExtra ? " extra" : ""}
          </p>
        </div>
        <WhatsAppButton
          ariaLabel={`Plan a trip with ${vehicle.displayName} on WhatsApp`}
          className="mt-3 w-full text-white hover:text-white"
          iconClassName="brightness-0 invert"
          iconSrc={`${import.meta.env.BASE_URL}brand/phone-handset.svg`}
          message={`Hi RideWe, I would like to plan a trip with the ${vehicle.displayName}. Please share details.`}
          size="sm"
          style={{ color: "#fff" }}
        >
          Plan My Trip
        </WhatsAppButton>
      </div>
    </article>
  );
}
