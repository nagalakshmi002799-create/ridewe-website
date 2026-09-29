import { z } from "zod";
import { vehicleCategorySchema } from "./vehicle.js";

export const tourPackageSchema = z.object({
  id: z.string(),
  slug: z.string(),
  title: z.string(),
  summary: z.string(),
  destinationIds: z.array(z.string()),
  duration: z
    .object({
      days: z.number().positive(),
      nights: z.number().nonnegative().optional(),
    })
    .optional(),
  itinerary: z.array(
    z.object({
      day: z.number().positive().optional(),
      title: z.string(),
      description: z.string(),
      destinationIds: z.array(z.string()).optional(),
    }),
  ),
  vehicleCategories: z.array(vehicleCategorySchema).optional(),
  inclusions: z.array(z.string()).optional(),
  exclusions: z.array(z.string()).optional(),
  active: z.boolean(),
});
