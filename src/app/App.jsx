import { lazy, Suspense } from "react";
import { HashRouter, Route, Routes } from "react-router-dom";
import { SiteLayout } from "../components/layout/SiteLayout.jsx";
import { NotFoundPage } from "../pages/NotFoundPage.jsx";

const HomePage = lazy(() =>
  import("../pages/HomePage.jsx").then(({ HomePage: page }) => ({
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
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </Suspense>
      </SiteLayout>
    </HashRouter>
  );
}
