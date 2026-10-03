import { lazy, Suspense, useEffect, useState } from "react";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import { SiteLayout } from "../components/layout/SiteLayout.jsx";
import { LoadingScreen } from "../components/ui/LoadingScreen.jsx";
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

const criticalHomeImages = [
  `${import.meta.env.BASE_URL}images/home/hero/ride-together-background.png`,
  `${import.meta.env.BASE_URL}images/home/route-to-imagine/route-background.png`,
  `${import.meta.env.BASE_URL}images/home/route-to-imagine/route-static.png`,
];

function waitForImage(url) {
  return new Promise((resolve) => {
    const image = new window.Image();
    const finish = () => {
      if (!image.naturalWidth || typeof image.decode !== "function") {
        resolve();
        return;
      }

      image.decode().then(resolve, resolve);
    };

    image.addEventListener("load", finish, { once: true });
    image.addEventListener("error", resolve, { once: true });
    image.src = url;

    if (image.complete) finish();
  });
}

function InitialRouteReadiness({ isHome, onReady }) {
  useEffect(() => {
    let active = true;
    let timeoutId;
    const finish = () => {
      if (!active) return;
      window.clearTimeout(timeoutId);
      onReady(true);
    };
    const images = isHome ? criticalHomeImages.map(waitForImage) : [];

    timeoutId = window.setTimeout(finish, 5000);
    Promise.all(images).then(finish);

    return () => {
      active = false;
      window.clearTimeout(timeoutId);
    };
  }, [isHome, onReady]);

  return null;
}

function DelayedRouteFallback() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const timeoutId = window.setTimeout(() => setVisible(true), 160);
    return () => window.clearTimeout(timeoutId);
  }, []);

  return visible ? <LoadingScreen /> : null;
}

function AppRoutes() {
  const location = useLocation();
  const [initialReady, setInitialReady] = useState(false);

  useEffect(() => {
    if (initialReady) {
      document.getElementById("initial-loading-screen")?.remove();
    }
  }, [initialReady]);

  return (
    <>
      <SiteLayout>
        <Suspense
          fallback={initialReady ? <DelayedRouteFallback /> : null}
        >
          <InitialRouteReadiness
            isHome={location.pathname === "/"}
            onReady={setInitialReady}
          />
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
    </>
  );
}

export function App() {
  return (
    <BrowserRouter basename={import.meta.env.BASE_URL}>
      <AppRoutes />
    </BrowserRouter>
  );
}
