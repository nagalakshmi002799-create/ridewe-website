export const homepageNavigation = [
  { id: "home", label: "Home", to: "/" },
  { id: "about", label: "About Us", to: "/about" },
  { id: "services", label: "Our Services", to: "/services" },
  { id: "vehicles-tariff", label: "Vehicles & Tariff", to: "/vehicles-tariff" },
  { id: "tour-destinations", label: "Tour Destinations", to: "/tour-destinations" },
  { id: "contact", label: "Contact Us", to: "/contact" },
];

export const homepageServices = [
  {
    id: "tour-packages",
    title: "Tour Packages",
    description:
      "Travel with a planned route and itinerary for your trip. RideWe can help arrange suitable transportation and travel planning based on your destination, dates, and group size.",
    previewDescription: "Discuss a planned route and trip itinerary with RideWe.",
    icon: "Map",
    action: "Plan a Tour",
    to: "/contact",
  },
  {
    id: "customized-tours",
    title: "Customized Tour Packages",
    description:
      "Have your own destinations and travel dates? Discuss a customized travel plan based on your preferred route, duration, travellers, and vehicle requirement.",
    previewDescription: "Share your destinations and dates for a customized trip.",
    icon: "Route",
    action: "Customize My Trip",
    to: "/contact",
  },
  {
    id: "vehicle-rental",
    title: "Tourist Vehicle Rental",
    description:
      "Choose from RideWe's available vehicle categories according to your travel group.",
    previewDescription: "Choose a vehicle category to suit your travel group.",
    icon: "CarFront",
    action: "View Vehicles & Tariff",
    to: "/vehicles-tariff",
    vehicleList: true,
  },
  {
    id: "sightseeing-tours",
    title: "Sightseeing",
    description:
      "Explore destinations comfortably with vehicle options suitable for local sightseeing. Plan around the places you want to visit, your available time, and the size of your travel group.",
    icon: "Camera",
    action: "Plan Sightseeing",
    to: "/contact",
  },
  {
    id: "outstation-travel",
    title: "Outstation Travel",
    description:
      "Planning a journey outside your city? RideWe provides vehicle options for outstation travel, with tariffs based on applicable distance and vehicle category.",
    icon: "Signpost",
    action: "Plan Outstation Trip",
    to: "/contact",
  },
  {
    id: "taxi-cab-services",
    title: "Taxi & Cab Services",
    description:
      "For point-to-point and travel requirements, discuss the suitable vehicle and journey details with RideWe.",
    icon: "CarFront",
    action: "Contact RideWe",
    to: "/contact",
  },
  {
    id: "airport-transfers",
    title: "Airport Transfers",
    description:
      "Travel to or from the airport with a vehicle suitable for your passengers and luggage. Share your airport, date, time, and passenger details to discuss your requirement.",
    icon: "Plane",
    action: "Plan Airport Transfer",
    to: "/contact",
  },
  {
    id: "family-group-travel",
    title: "Family & Group Travel",
    description:
      "RideWe offers multiple vehicle categories so families and larger groups can select an option that suits their group size.",
    icon: "Users",
    action: "Choose a Vehicle",
    to: "/vehicles-tariff",
  },
  {
    id: "south-india-travel",
    title: "South India Travel",
    description:
      "Share your destinations and travel dates with RideWe to discuss the route, vehicle, and travel arrangement for your Tamil Nadu or South India trip.",
    icon: "MapPinned",
    action: "Plan South India Trip",
    to: "/contact",
  },
];

const servicesById = Object.fromEntries(
  homepageServices.map((service) => [service.id, service]),
);

export const homepageServicePreview = [
  { ...servicesById["taxi-cab-services"], title: "Reliable Cab", icon: "Car" },
  {
    ...servicesById["airport-transfers"],
    title: "Airport Transfer",
    icon: "Plane",
  },
  { ...servicesById["tour-packages"], icon: "Luggage" },
  { ...servicesById["sightseeing-tours"] },
  {
    ...servicesById["customized-tours"],
    title: "Customized Tour Package",
    icon: "MapPinSearch",
  },
  {
    ...servicesById["family-group-travel"],
    title: "Group Tour",
    icon: "Users",
  },
  {
    ...servicesById["tour-packages"],
    id: "temple-tour",
    title: "Temple Tour",
    icon: "Landmark",
  },
];

export const routeStops = ["Madurai", "Kerala", "Karnataka"];

export const rideweBenefits = [
  {
    title: "Flexible travel planning",
    description:
      "Share your route and preferences to discuss a plan that fits your trip.",
    icon: "SlidersHorizontal",
  },
  {
    title: "Comfortable travel options",
    description:
      "Explore the listed vehicle categories and ask which option suits your journey.",
    icon: "Armchair",
  },
  {
    title: "Customized journeys",
    description:
      "Make your destination and travel dates part of the conversation.",
    icon: "MapPinned",
  },
  {
    title: "Direct enquiry",
    description:
      "Contact RideWe by phone or WhatsApp to discuss your travel requirements.",
    icon: "MessageCircle",
  },
];
