import { useEffect } from "react";
import { DestinationsSection } from "../components/home/DestinationsSection.jsx";

export function ExploreDestinationsPage() {
  useEffect(() => {
    const previousTitle = document.title;
    document.title = "Explore Destinations | RideWe Tours & Travels";
    return () => {
      document.title = previousTitle;
    };
  }, []);

  return <DestinationsSection detailed />;
}
