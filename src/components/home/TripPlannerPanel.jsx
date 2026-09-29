import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { CalendarDays, CarFront, MapPin, Users } from "lucide-react";
import { vehicles } from "../../data/vehicles.js";
import { tripPlannerFormSchema } from "../../lib/schemas/trip-planner-form.js";
import { Button } from "../ui/button.jsx";

export function TripPlannerPanel() {
  const [whatsAppMessage, setWhatsAppMessage] = useState("");
  const {
    formState: { errors },
    handleSubmit,
    register,
  } = useForm({
    resolver: zodResolver(tripPlannerFormSchema),
    defaultValues: {
      origin: "Madurai",
      destination: "",
      travelDate: "",
      travellers: "",
      vehicle: "",
    },
  });

  function shareTripDetails({ destination, origin, travelDate, travellers, vehicle }) {
    const details = [
      "Hi RideWe, I would like to plan a trip.",
      `From: ${origin}`,
      `Destination: ${destination}`,
      travelDate ? `Travel date: ${travelDate}` : null,
      `Travellers: ${travellers}`,
      vehicle ? `Vehicle preference: ${vehicle}` : null,
    ]
      .filter(Boolean)
      .join("\n");
    setWhatsAppMessage(details);
  }

  function clearPreparedMessage() {
    setWhatsAppMessage("");
  }

  return (
    <div
      className="relative z-10 mt-4 rounded-2xl border border-slate-200 bg-white p-4 shadow-[0_18px_50px_-28px_rgba(23,38,54,0.4)] sm:mt-5 sm:p-5 lg:-ml-16 lg:mr-5"
      id="trip-planner"
    >
      <div className="mb-4 flex items-start justify-between gap-3">
        <div>
          <p className="text-sm font-bold text-brand">Start planning</p>
          <p className="mt-1 text-xs leading-5 text-slate-500">
            Share a few trip details with RideWe.
          </p>
        </div>
        <span
          aria-hidden="true"
          className="grid size-9 shrink-0 place-items-center rounded-xl bg-amber-50 text-amber-800"
        >
          <MapPin size={17} />
        </span>
      </div>

      <form
        className="grid gap-3 sm:grid-cols-2"
        noValidate
        onSubmit={handleSubmit(shareTripDetails)}
      >
        <label className="grid gap-1.5 text-xs font-semibold text-slate-600">
          From
          <input
            aria-invalid={Boolean(errors.origin)}
            aria-describedby={errors.origin ? "origin-error" : undefined}
            autoComplete="address-level2"
            className="min-h-11 rounded-lg border border-slate-200 bg-slate-50 px-3 text-sm font-medium text-brand outline-none transition focus:border-brand focus:ring-2 focus:ring-brand/15"
            {...register("origin", { onChange: clearPreparedMessage })}
          />
          {errors.origin ? (
            <span className="text-xs font-medium text-red-700" id="origin-error" role="alert">
              {errors.origin.message}
            </span>
          ) : null}
        </label>
        <label className="grid gap-1.5 text-xs font-semibold text-slate-600">
          Destination
          <input
            aria-invalid={Boolean(errors.destination)}
            aria-describedby={errors.destination ? "destination-error" : undefined}
            autoComplete="off"
            className="min-h-11 rounded-lg border border-slate-200 bg-slate-50 px-3 text-sm font-medium text-brand outline-none transition placeholder:font-normal placeholder:text-slate-400 focus:border-brand focus:ring-2 focus:ring-brand/15"
            placeholder="Where would you like to go?"
            {...register("destination", { onChange: clearPreparedMessage })}
          />
          {errors.destination ? (
            <span className="text-xs font-medium text-red-700" id="destination-error" role="alert">
              {errors.destination.message}
            </span>
          ) : null}
        </label>
        <label className="grid gap-1.5 text-xs font-semibold text-slate-600">
          Travel date
          <span className="relative">
            <CalendarDays
              aria-hidden="true"
              className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
              size={16}
            />
            <input
              className="min-h-11 w-full rounded-lg border border-slate-200 bg-slate-50 pl-9 pr-3 text-sm font-medium text-brand outline-none transition focus:border-brand focus:ring-2 focus:ring-brand/15"
              type="date"
              {...register("travelDate", { onChange: clearPreparedMessage })}
            />
          </span>
        </label>
        <label className="grid gap-1.5 text-xs font-semibold text-slate-600">
          Travellers
          <span className="relative">
            <Users
              aria-hidden="true"
              className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
              size={16}
            />
            <select
              aria-invalid={Boolean(errors.travellers)}
              aria-describedby={errors.travellers ? "travellers-error" : undefined}
              className="min-h-11 w-full appearance-none rounded-lg border border-slate-200 bg-slate-50 pl-9 pr-3 text-sm font-medium text-brand outline-none transition focus:border-brand focus:ring-2 focus:ring-brand/15"
              {...register("travellers", { onChange: clearPreparedMessage })}
            >
              <option value="">Select travellers</option>
              <option value="1">1 traveller</option>
              <option value="2">2 travellers</option>
              <option value="3">3 travellers</option>
              <option value="4">4 travellers</option>
              <option value="5 or more">5 or more</option>
            </select>
          </span>
          {errors.travellers ? (
            <span className="text-xs font-medium text-red-700" id="travellers-error" role="alert">
              {errors.travellers.message}
            </span>
          ) : null}
        </label>
        <label className="grid gap-1.5 text-xs font-semibold text-slate-600 sm:col-span-2">
          Vehicle preference
          <span className="relative">
            <CarFront
              aria-hidden="true"
              className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
              size={17}
            />
            <select
              className="min-h-11 w-full appearance-none rounded-lg border border-slate-200 bg-slate-50 pl-9 pr-3 text-sm font-medium text-brand outline-none transition focus:border-brand focus:ring-2 focus:ring-brand/15"
              {...register("vehicle", { onChange: clearPreparedMessage })}
            >
              <option value="">Choose a vehicle (optional)</option>
              {vehicles.map((vehicle) => (
                <option key={vehicle.id} value={vehicle.name}>
                  {vehicle.name}
                </option>
              ))}
            </select>
          </span>
        </label>
        <div className="sm:col-span-2">
          <Button className="w-full" type="submit">
            Plan My Trip
          </Button>
          {whatsAppMessage ? (
            <p className="mt-2 text-center text-xs text-slate-600" role="status">
              Your trip details are ready. Continue to WhatsApp to send them.
            </p>
          ) : (
            <p className="mt-2 text-center text-[11px] leading-4 text-slate-500">
              No booking is made here. Your details are shared with RideWe on WhatsApp.
            </p>
          )}
          {whatsAppMessage ? (
            <WhatsAppButton
              className="mt-3 w-full"
              message={whatsAppMessage}
              size="sm"
              variant="secondary"
            >
              Continue to WhatsApp
            </WhatsAppButton>
          ) : null}
        </div>
      </form>
    </div>
  );
}
