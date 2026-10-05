import { Link } from "react-router-dom";
import { Container } from "../layout/Container.jsx";
import { PhoneButton } from "../layout/PhoneButton.jsx";
import { WhatsAppButton } from "../layout/WhatsAppButton.jsx";
import { Button } from "../ui/button.jsx";
import { primaryContact } from "../../utils/contact.js";

const imageUrl = (path) => `${import.meta.env.BASE_URL}images/${path}`;

export function JourneyCta() {
  return (
    <section
      aria-labelledby="contact-preview-title"
      className="relative isolate overflow-hidden bg-[#0b4775] py-7 text-white sm:py-8"
      id="contact-preview"
    >
      <div
        aria-hidden="true"
        className="home-contact-preview-background absolute inset-0 -z-20"
        style={{
          "--home-contact-desktop-background": `url("${imageUrl("home/home-footer-top.png")}")`,
          "--home-contact-mobile-background": `url("${imageUrl("home/home-mobile-footer-top.png")}")`,
        }}
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-gradient-to-r from-[#07385c]/90 via-[#075276]/70 to-[#07385c]/30"
      />
      <Container className="relative grid items-center gap-5 lg:grid-cols-[1fr_0.7fr]">
        <div className="max-w-2xl">
          <p className="text-[11px] font-bold uppercase tracking-[0.16em] text-[#5de1ce]">
            Let&apos;s Plan the Journey
          </p>
          <h2
            className="mt-1.5 text-2xl font-bold tracking-tight sm:text-3xl"
            id="contact-preview-title"
          >
            Your Journey Starts with a Conversation
          </h2>
          <p className="mt-2 max-w-xl text-sm leading-5 text-white/90">
            Have a destination in mind? Let’s make the journey special. Whether
            you&apos;re planning a family holiday, temple tour, sightseeing trip,
            airport transfer, or outstation getaway, RideWe helps you plan travel
            around your needs, preferences, and schedule. Tell us where you want
            to go, and we’ll help create a travel experience that’s comfortable,
            flexible, and memorable.
          </p>
          <div className="mt-4 flex flex-wrap gap-2.5">
            <PhoneButton
              ariaLabel={`Call ${primaryContact.name} at ${primaryContact.phone}`}
              className="h-9 min-h-9 rounded-full bg-gradient-to-r from-[#00a9c5] to-[#31c66a] px-5 text-sm text-white hover:brightness-105 hover:text-white"
              iconClassName="brightness-0 invert"
              style={{ color: "#fff" }}
              variant="primary"
            >
              Call Now
            </PhoneButton>
            <WhatsAppButton className="h-9 rounded-full border-0 bg-white px-5 text-sm hover:bg-[#f1fffc]">
              <span className="!text-[#007a83]">WhatsApp RideWe</span>
            </WhatsAppButton>
            <Button
              asChild
              className="h-9 rounded-full border-0 bg-white px-5 text-sm !text-[#007a83] hover:bg-[#f1fffc]"
              variant="outline"
            >
              <Link to="/contact">Contact Us</Link>
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
