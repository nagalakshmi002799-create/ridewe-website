import { useRef, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { homepageNavigation } from "../../data/homepage.js";
import { primaryContact } from "../../utils/contact.js";
import { Button } from "../ui/button.jsx";
import { Container } from "./Container.jsx";
import { PhoneButton } from "./PhoneButton.jsx";
import { WhatsAppButton } from "./WhatsAppButton.jsx";

export function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuButtonRef = useRef(null);

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
          className="flex shrink-0 items-center rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2"
          onClick={() => setMenuOpen(false)}
          to="/"
        >
          <img
            alt=""
            className="hidden h-14 w-[172px] object-contain sm:block"
            height="136"
            src={`${import.meta.env.BASE_URL}brand/ridewe-logo-horizontal.png`}
            width="384"
          />
          <img
            alt=""
            className="size-12 object-contain sm:hidden"
            height="320"
            src={`${import.meta.env.BASE_URL}brand/ridewe-logo-square.png`}
            width="320"
          />
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
            <NavLink
              className={({ isActive }) =>
                `rounded-lg px-3 py-2.5 text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent lg:py-2 ${
                  isActive
                    ? "bg-brand-soft text-brand"
                    : "text-slate-700 hover:bg-brand-soft hover:text-brand"
                }`
              }
              end={item.to === "/"}
              key={item.id}
              onClick={() => setMenuOpen(false)}
              to={item.to}
            >
              {item.label}
            </NavLink>
          ))}
        </nav>

        <div className="ml-auto flex items-center gap-2 lg:ml-0">
          <PhoneButton
            className="dark-contact header-call-contact hidden sm:inline-flex"
            variant="darkContact"
          >
            Call
          </PhoneButton>
          <a
            aria-label={`Call ${primaryContact.name} at ${primaryContact.phone}`}
            className="dark-contact header-call-contact grid size-12 shrink-0 place-items-center rounded-xl border border-white/20 bg-[#0B0D0F] text-white transition-colors hover:border-accent hover:bg-brand-dark focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 sm:hidden"
            href={primaryContact.phoneHref}
          >
            <img
              alt=""
              aria-hidden="true"
              className="size-[17px]"
              src={`${import.meta.env.BASE_URL}brand/phone-handset.svg`}
            />
          </a>
          <WhatsAppButton
            className="px-3 sm:px-4"
            variant="lightContact"
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
