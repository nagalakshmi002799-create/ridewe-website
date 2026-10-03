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
      <Container className="flex min-h-16 flex-wrap items-center justify-between gap-x-2 gap-y-3 py-3 xl:min-h-[76px] xl:flex-nowrap xl:gap-x-3 xl:py-2">
        <Link
          aria-label="RideWe Tours & Travels home"
          className="flex shrink-0 items-center rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2"
          onClick={() => setMenuOpen(false)}
          to="/"
        >
          <img
            alt=""
            className="hidden h-14 w-[172px] scale-[1.2] object-contain sm:block"
            height="136"
            src={`${import.meta.env.BASE_URL}brand/ridewe-logo-horizontal.png`}
            width="384"
          />
          <img
            alt=""
            className="h-10 w-[122px] scale-[1.24] object-contain sm:hidden"
            height="136"
            src={`${import.meta.env.BASE_URL}brand/ridewe-logo-horizontal.png`}
            width="384"
          />
        </Link>

        <nav
          aria-label="Main navigation"
          className={`${
            menuOpen ? "flex" : "hidden"
          } order-3 w-full flex-col gap-1 border-t border-slate-200 pt-3 xl:order-none xl:flex xl:w-auto xl:shrink-0 xl:flex-row xl:items-center xl:gap-0.5 xl:border-0 xl:pt-0`}
          id="primary-navigation"
          onKeyDown={handleMenuKeyDown}
        >
          {homepageNavigation.map((item) => (
            <NavLink
              className={({ isActive }) =>
                `group relative whitespace-nowrap rounded-lg px-3 py-2.5 text-[15px] font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent xl:px-2 xl:py-2 xl:text-[13px] ${
                  isActive
                    ? "text-brand"
                    : "text-slate-700 hover:text-brand"
                } before:absolute before:-bottom-1 before:left-2 before:right-2 before:h-0.5 before:rounded-full before:bg-gradient-to-r before:from-accent before:to-[#35D45B] before:transition-transform before:duration-200 before:content-[''] ${
                  isActive ? "before:scale-x-100" : "before:scale-x-0 group-hover:before:scale-x-100"
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
          <Button
            asChild
            className="hidden shrink-0 whitespace-nowrap bg-gradient-to-r from-accent to-[#35D45B] !text-white shadow-[0_12px_24px_-16px_rgba(0,160,166,0.7)] lg:inline-flex"
          >
            <a href="#trip-planner" onClick={(event) => {
              event.preventDefault();
              document.getElementById("trip-planner")?.scrollIntoView({
                behavior: "smooth",
                block: "start",
              });
            }}>
              Plan My Trip
            </a>
          </Button>
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
            className="xl:hidden"
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
