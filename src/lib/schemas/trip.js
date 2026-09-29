import { z } from "zod";
import { vehicleCategorySchema } from "./vehicle.js";

export const tripStopSchema = z.object({
  destinationId: z.string().optional(),
  label: z.string(),
  date: z.string().optional(),
  durationMinutes: z.number().nonnegative().optional(),
});

export const tripSchema = z.object({
  startDate: z.string().optional(),
  endDate: z.string().optional(),
  origin: z.string(),
  stops: z.array(tripStopSchema),
  serviceType: z
    .enum(["sightseeing", "outstation", "airport-transfer"])
    .optional(),
  vehicleCategory: vehicleCategorySchema.optional(),
  partySize: z.number().positive().optional(),
  notes: z.string().optional(),
});
