import { tourPackageSchema } from "../lib/schemas/package.js";

// Add packages only after their itineraries and terms are verified.
export const packages = tourPackageSchema.array().parse([]);
