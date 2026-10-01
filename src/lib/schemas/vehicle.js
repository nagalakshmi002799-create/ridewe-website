import { z } from "zod";
import { vehicleCategories } from "../../data/vehicle-categories.js";

export const vehicleCategorySchema = z.enum(vehicleCategories);

export const vehicleSchema = z.object({
  id: z.string(),
  category: vehicleCategorySchema,
  name: z.string(),
  displayName: z.string(),
  model: z.string().optional(),
  description: z.string().optional(),
  color: z.string(),
  ac: z.boolean(),
  seating: z.string(),
  belowThreshold: z.number().positive(),
  belowThresholdLabel: z.string(),
  dayRent: z.number().positive(),
  dieselPerKm: z.number().positive(),
  aboveThreshold: z.number().positive().optional(),
  aboveThresholdLabel: z.string().optional(),
  perKm: z.number().positive().optional(),
  driverAllowance: z.number().positive().optional(),
  hillsCharge: z.number().positive(),
  hillsChargeExtra: z.boolean().optional(),
  image: z.string().nullable(),
  imageAlt: z.string(),
  active: z.boolean(),
});
