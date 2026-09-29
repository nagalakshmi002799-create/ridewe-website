import { z } from "zod";
import { tripSchema } from "./trip.js";

export const aiTripPlannerRequestSchema = z.object({
  origin: z.string(),
  destinations: z.array(z.string()),
  startDate: z.string().optional(),
  endDate: z.string().optional(),
  partySize: z.number().positive().optional(),
  preferences: z.array(z.string()).optional(),
});

export const aiTripPlannerResponseSchema = z.object({
  summary: z.string(),
  itinerary: z.array(
    z.object({
      day: z.number().positive(),
      title: z.string(),
      suggestedStops: z.array(z.string()),
      notes: z.string().optional(),
    }),
  ),
  suggestedTrip: tripSchema.optional(),
  isGeneratedSuggestion: z.literal(true),
});
