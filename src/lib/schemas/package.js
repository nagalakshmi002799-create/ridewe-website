import { z } from "zod";

export const tourPackageSchema = z.object({
  id: z.string(),
  title: z.string(),
  region: z.string(),
  duration: z.string(),
  route: z.string(),
  highlights: z.array(z.string()),
  image: z.string(),
  cta: z.string(),
});
