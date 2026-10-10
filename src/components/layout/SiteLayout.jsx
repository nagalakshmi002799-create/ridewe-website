import { SiteFooter } from "./SiteFooter.jsx";
import { SiteHeader } from "./SiteHeader.jsx";
import { FloatingSocialActions } from "./FloatingSocialActions.jsx";
import { ScrollToTop } from "../navigation/ScrollToTop.jsx";

export function SiteLayout({ children }) {
  return (
    <div className="flex min-h-screen flex-col bg-surface">
      <ScrollToTop />
      <a
        className="sr-only z-50 rounded-md bg-white p-3 text-brand focus:not-sr-only focus:absolute focus:left-4 focus:top-4"
        href="#main-content"
      >
        Skip to content
      </a>
      <SiteHeader />
      <main className="flex-1" id="main-content">
        {children}
      </main>
      <SiteFooter />
      <FloatingSocialActions />
    </div>
  );
}
