import { z } from "zod";

export const destinationSchema = z.object({
  id: z.string(),
  slug: z.string(),
  name: z.string(),
  region: z.string().optional(),
  summary: z.string(),
  highlights: z.array(z.string()),
  image: z.string().optional(),
  active: z.boolean(),
});
