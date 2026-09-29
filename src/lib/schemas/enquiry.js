import { z } from "zod";

export const enquiryServiceTypeSchema = z.enum([
  "package",
  "custom-tour",
  "rental",
  "sightseeing",
  "outstation",
  "airport-transfer",
  "other",
]);

export const customerEnquirySchema = z.object({
  id: z.string().optional(),
  name: z.string(),
  phone: z.string(),
  email: z.string().optional(),
  serviceType: enquiryServiceTypeSchema,
  travelDate: z.string().optional(),
  partySize: z.number().positive().optional(),
  message: z.string().optional(),
  source: z.string(),
  consentToContact: z.boolean(),
  createdAt: z.string().optional(),
});
