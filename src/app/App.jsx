import { Component, lazy, Suspense, useEffect, useState } from "react";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import { SiteLayout } from "../components/layout/SiteLayout.jsx";
import { PageTransitionLoader } from "../components/navigation/PageTransitionLoader.jsx";
import { NotFoundPage } from "../pages/NotFoundPage.jsx";

const loadHomePage = () =>
  import("../pages/HomePage.jsx").then(({ HomePage: page }) => ({
    default: page,
  }));
const loadAboutPage = () =>
  import("../pages/AboutPage.jsx").then(({ AboutPage: page }) => ({
    default: page,
  }));
const loadServicesPage = () =>
  import("../pages/ServicesPage.jsx").then(({ ServicesPage: page }) => ({
    default: page,
  }));
const loadVehiclesTariffPage = () =>
  import("../pages/VehiclesTariffPage.jsx").then(({ VehiclesTariffPage: page }) => ({
    default: page,
  }));
const loadTourDestinationsPage = () =>
  import("../pages/TourDestinationsPage.jsx").then(({ TourDestinationsPage: page }) => ({
    default: page,
  }));
const loadContactPage = () =>
  import("../pages/ContactPage.jsx").then(({ ContactPage: page }) => ({
    default: page,
  }));

const HomePage = lazy(loadHomePage);
const AboutPage = lazy(loadAboutPage);
const ServicesPage = lazy(loadServicesPage);
const VehiclesTariffPage = lazy(loadVehiclesTariffPage);
const TourDestinationsPage = lazy(loadTourDestinationsPage);
const ContactPage = lazy(loadContactPage);

const routeLoaders = {
  "/": loadHomePage,
  "/about": loadAboutPage,
  "/services": loadServicesPage,
  "/vehicles-tariff": loadVehiclesTariffPage,
  "/tour-destinations": loadTourDestinationsPage,
  "/contact": loadContactPage,
};

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

class RouteErrorBoundary extends Component {
  state = { hasError: false };

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  render() {
    if (this.state.hasError) {
      return (
        <p className="p-6 text-center text-slate-700" role="alert">
          This page couldn&apos;t be loaded. Please refresh and try again.
        </p>
      );
    }

    return this.props.children;
  }
}

function AppRoutes() {
  const location = useLocation();
  const [initialReady, setInitialReady] = useState(false);
  const [renderedLocation, setRenderedLocation] = useState(location);

  useEffect(() => {
    if (location.pathname === renderedLocation.pathname) return undefined;

    const loadRoute = routeLoaders[location.pathname];
    if (loadRoute) {
      loadRoute().catch((error) => {
        console.error(`Failed to preload route "${location.pathname}".`, error);
      });
    }

    const timeoutId = window.setTimeout(() => {
      setRenderedLocation(location);
    }, 1000);

    return () => window.clearTimeout(timeoutId);
  }, [location, renderedLocation.pathname]);

  useEffect(() => {
    if (initialReady) {
      document.getElementById("initial-loading-screen")?.remove();
    }
  }, [initialReady]);
  const isRouteChanging = location.pathname !== renderedLocation.pathname;

  return (
    <SiteLayout>
      {initialReady && isRouteChanging ? (
        <PageTransitionLoader />
      ) : (
        <Suspense fallback={null}>
          <InitialRouteReadiness
            isHome={renderedLocation.pathname === "/"}
            onReady={setInitialReady}
          />
          <RouteErrorBoundary key={renderedLocation.pathname}>
            <Routes location={renderedLocation}>
              <Route path="/" element={<HomePage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/services" element={<ServicesPage />} />
              <Route path="/vehicles-tariff" element={<VehiclesTariffPage />} />
              <Route path="/tour-destinations" element={<TourDestinationsPage />} />
              <Route path="/contact" element={<ContactPage />} />
              <Route path="*" element={<NotFoundPage />} />
            </Routes>
          </RouteErrorBoundary>
        </Suspense>
      )}
    </SiteLayout>
  );
}

export function App() {
  return (
    <BrowserRouter basename={import.meta.env.BASE_URL}>
      <AppRoutes />
    </BrowserRouter>
  );
}
