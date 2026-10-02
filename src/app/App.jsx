import { lazy, Suspense } from "react";
import { HashRouter, Route, Routes } from "react-router-dom";
import { SiteLayout } from "../components/layout/SiteLayout.jsx";
import { NotFoundPage } from "../pages/NotFoundPage.jsx";

const HomePage = lazy(() =>
  import("../pages/HomePage.jsx").then(({ HomePage: page }) => ({
    default: page,
  })),
);
const AboutPage = lazy(() =>
  import("../pages/AboutPage.jsx").then(({ AboutPage: page }) => ({
    default: page,
  })),
);
const ServicesPage = lazy(() =>
  import("../pages/ServicesPage.jsx").then(({ ServicesPage: page }) => ({
    default: page,
  })),
);
const VehiclesTariffPage = lazy(() =>
  import("../pages/VehiclesTariffPage.jsx").then(({ VehiclesTariffPage: page }) => ({
    default: page,
  })),
);
const TourDestinationsPage = lazy(() =>
  import("../pages/TourDestinationsPage.jsx").then(({ TourDestinationsPage: page }) => ({
    default: page,
  })),
);
const ContactPage = lazy(() =>
  import("../pages/ContactPage.jsx").then(({ ContactPage: page }) => ({
    default: page,
  })),
);

export function App() {
  return (
    <HashRouter>
      <SiteLayout>
        <Suspense
          fallback={
            <div
              className="grid min-h-[40vh] place-items-center text-sm text-slate-600"
              role="status"
            >
              Loading RideWe...
            </div>
          }
        >
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/vehicles-tariff" element={<VehiclesTariffPage />} />
            <Route path="/tour-destinations" element={<TourDestinationsPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </Suspense>
      </SiteLayout>
    </HashRouter>
  );
}
