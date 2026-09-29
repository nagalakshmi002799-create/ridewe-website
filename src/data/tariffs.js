import { tariffSchema } from "../lib/schemas/tariff.js";

// Populate only with RideWe-confirmed rates; no verified amounts were supplied.
export const tariffs = tariffSchema.array().parse([]);
