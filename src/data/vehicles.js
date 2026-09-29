import { vehicleSchema } from "../lib/schemas/vehicle.js";
import { vehicleCategories } from "./vehicle-categories.js";

export { vehicleCategories };

export const vehicles = vehicleSchema.array().parse([
  { id: "sedan", category: "Sedan", name: "Sedan", active: true },
  { id: "ertiga", category: "Ertiga", name: "Ertiga", active: true },
  { id: "innova", category: "Innova", name: "Innova", active: true },
  {
    id: "innova-crysta",
    category: "Innova Crysta",
    name: "Innova Crysta",
    active: true,
  },
  {
    id: "tempo-traveller",
    category: "Tempo Traveller",
    name: "Tempo Traveller",
    active: true,
  },
]);
