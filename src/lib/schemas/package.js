import { z } from "zod";

export const tourPackageSchema = z.object({
  id: z.string(),
  title: z.string(),
  region: z.string(),
  duration: z.string(),
  route: z.string(),
  description: z.string(),
  highlights: z.array(z.string()).optional(),
  image: z.string(),
  cta: z.string(),
});
