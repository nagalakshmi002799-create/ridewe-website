import { WHATSAPP_URL } from "./contact.js";

export function buildTripPlannerMessage({
  destination,
  origin,
  travelDate,
  travellers,
  vehicle,
}) {
  return [
    "Hello RideWe Tours & Travels,",
    "",
    "I would like to plan a trip.",
    "",
    `From: ${origin}`,
    `Destination: ${destination}`,
    ...(travelDate?.trim() ? [`Travel date: ${travelDate}`] : []),
    `Travellers: ${travellers}`,
    ...(vehicle?.trim() ? [`Vehicle preference: ${vehicle}`] : []),
    "",
    "Please help me with the trip details and fare.",
    "",
    "Thank you.",
  ].join("\n");
}

export function buildTripPlannerWhatsAppUrl(message) {
  const url = new URL(WHATSAPP_URL);
  url.searchParams.set("text", message);
  return url.toString();
}
