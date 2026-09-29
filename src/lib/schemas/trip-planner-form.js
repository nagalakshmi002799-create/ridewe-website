import { z } from "zod";

export const tripPlannerFormSchema = z.object({
  origin: z.string().trim().min(1, "Enter your starting point."),
  destination: z.string().trim().min(2, "Enter a destination."),
  travelDate: z.string().optional(),
  travellers: z.string().min(1, "Choose the number of travellers."),
  vehicle: z.string().optional(),
});
