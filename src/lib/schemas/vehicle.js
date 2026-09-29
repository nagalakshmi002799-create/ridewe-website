import { z } from "zod";
import { vehicleCategories } from "../../data/vehicle-categories.js";

export const vehicleCategorySchema = z.enum(vehicleCategories);

export const vehicleSchema = z.object({
  id: z.string(),
  category: vehicleCategorySchema,
  name: z.string(),
  description: z.string().optional(),
  passengerCapacity: z.number().positive().optional(),
  image: z.string().optional(),
  active: z.boolean(),
});
