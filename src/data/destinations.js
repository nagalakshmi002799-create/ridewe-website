import { destinationSchema } from "../lib/schemas/destination.js";

// Add destinations only after their business details are verified.
export const destinations = destinationSchema.array().parse([]);
