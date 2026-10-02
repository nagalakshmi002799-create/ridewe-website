import { destinationSchema } from "../lib/schemas/destination.js";

export const destinations = destinationSchema.array().parse([
  {
    id: "madurai",
    slug: "madurai",
    name: "Madurai",
    region: "Tamil Nadu",
    summary: "Temple visits, local sightseeing, and nearby travel.",
    highlights: [],
    active: true,
  },
  {
    id: "rameswaram",
    slug: "rameswaram",
    name: "Rameswaram",
    region: "Tamil Nadu",
    summary:
      "A popular pilgrimage and coastal destination for family and group travel.",
    highlights: [],
    active: true,
  },
  {
    id: "kanyakumari",
    slug: "kanyakumari",
    name: "Kanyakumari",
    region: "Tamil Nadu",
    summary:
      "A southern destination suitable for sightseeing and multi-day journeys.",
    highlights: [],
    active: true,
  },
  {
    id: "kodaikanal",
    slug: "kodaikanal",
    name: "Kodaikanal",
    region: "Tamil Nadu",
    summary: "A hill-station destination for leisure and family travel.",
    highlights: [],
    active: true,
  },
  {
    id: "ooty",
    slug: "ooty",
    name: "Ooty",
    region: "Tamil Nadu",
    summary: "A popular hill destination for holidays and sightseeing.",
    highlights: [],
    active: true,
  },
  {
    id: "munnar",
    slug: "munnar",
    name: "Munnar",
    summary: "A South India travel destination suitable for multi-day trips.",
    highlights: [],
    active: true,
  },
]);
