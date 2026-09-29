import { z } from "zod";
import { vehicleCategorySchema } from "./vehicle.js";

export const tariffServiceTypeSchema = z.enum([
  "local",
  "sightseeing",
  "outstation",
  "airport-transfer",
]);

export const tariffSchema = z.object({
  id: z.string(),
  vehicleCategory: vehicleCategorySchema,
  serviceType: tariffServiceTypeSchema,
  currency: z.literal("INR"),
  rates: z.object({
    perDay: z.number().nonnegative().optional(),
    perKm: z.number().nonnegative().optional(),
    driverBattaPerDay: z.number().nonnegative().optional(),
    extraHour: z.number().nonnegative().optional(),
    extraKm: z.number().nonnegative().optional(),
    fixed: z.number().nonnegative().optional(),
  }),
  effectiveFrom: z.string().optional(),
  effectiveTo: z.string().optional(),
  notes: z.string().optional(),
  active: z.boolean(),
});
