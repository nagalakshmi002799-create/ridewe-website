import { useRef, useState } from "react";
import { Link } from "react-router-dom";
import { Menu, Phone, X } from "lucide-react";
import { homepageNavigation } from "../../data/homepage.js";
import { PHONE_NUMBER, PHONE_TEL } from "../../utils/contact.js";
import { scrollToSection } from "../../utils/scroll-to-section.js";
import { Button } from "../ui/button.jsx";
import { Container } from "./Container.jsx";
import { WhatsAppButton } from "./WhatsAppButton.jsx";

export function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuButtonRef = useRef(null);

  function navigateToSection(event, sectionId) {
    setMenuOpen(false);
    if (window.innerWidth < 1024) {
      menuButtonRef.current?.focus();
    }
    scrollToSection(event, sectionId);
  }

  function handleMenuKeyDown(event) {
    if (event.key === "Escape") {
      setMenuOpen(false);
      menuButtonRef.current?.focus();
    }
  }

  return (
    <header className="sticky top-0 z-40 border-b border-slate-200/80 bg-white/95 backdrop-blur-sm">
      <Container className="flex min-h-16 flex-wrap items-center justify-between gap-x-2 gap-y-3 py-3 lg:min-h-[76px] lg:flex-nowrap lg:gap-x-5">
        <Link
          aria-label="RideWe Tours & Travels home"
          className="flex min-w-0 items-center gap-2.5 rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2"
          onClick={() => setMenuOpen(false)}
          to="/"
        >
          <span
            aria-hidden="true"
            className="grid size-10 shrink-0 place-items-center rounded-xl bg-brand text-accent"
          >
            <span className="text-lg font-black tracking-tighter">RW</span>
          </span>
          <span className="min-w-0">
            <span className="block truncate text-lg font-bold leading-tight tracking-tight text-brand sm:text-xl">
              RideWe
            </span>
            <span className="block text-[11px] font-medium tracking-wide text-slate-500">
              TOURS &amp; TRAVELS
            </span>
          </span>
        </Link>

        <nav
          aria-label="Main navigation"
          className={`${
            menuOpen ? "flex" : "hidden"
          } order-3 w-full flex-col gap-1 border-t border-slate-200 pt-3 lg:order-none lg:flex lg:w-auto lg:flex-row lg:items-center lg:gap-1 lg:border-0 lg:pt-0`}
          id="primary-navigation"
          onKeyDown={handleMenuKeyDown}
        >
          {homepageNavigation.map((item) => (
            <a
              className="rounded-lg px-3 py-2.5 text-sm font-medium text-slate-700 transition-colors hover:bg-slate-100 hover:text-brand focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent lg:py-2"
              href={`#${item.id}`}
              key={item.id}
              onClick={(event) => navigateToSection(event, item.id)}
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="ml-auto flex items-center gap-2 lg:ml-0">
          <a
            aria-label={`Call RideWe at ${PHONE_NUMBER}`}
            className="grid size-11 shrink-0 place-items-center rounded-xl border border-slate-200 bg-white text-brand transition-colors hover:bg-slate-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2"
            href={PHONE_TEL}
          >
            <Phone aria-hidden="true" size={17} />
          </a>
          <WhatsAppButton
            className="min-h-10 px-3 sm:px-4"
            size="sm"
            variant="primary"
          >
            <span className="hidden sm:inline">WhatsApp</span>
            <span className="sm:hidden max-[380px]:hidden">Chat</span>
          </WhatsAppButton>
          <Button
            aria-controls="primary-navigation"
            aria-expanded={menuOpen}
            aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
            className="lg:hidden"
            onClick={() => setMenuOpen((open) => !open)}
            ref={menuButtonRef}
            size="icon"
            variant="ghost"
          >
            {menuOpen ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
          </Button>
        </div>
      </Container>
    </header>
  );
}
