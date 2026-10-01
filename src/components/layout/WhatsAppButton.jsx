import { Button } from "../ui/button.jsx";
import { primaryContact } from "../../utils/contact.js";
import { cn } from "../../lib/cn.js";

export function WhatsAppButton({
  children = "WhatsApp",
  className,
  contact = primaryContact,
  message,
  variant,
  ...props
}) {
  const href = message
    ? `${contact.whatsappHref}?text=${encodeURIComponent(message)}`
    : contact.whatsappHref;

  return (
    <Button
      asChild
      className={cn(
        variant === "whatsapp" && "whatsapp-cta",
        variant === "darkContact" && "dark-contact",
        variant === "lightContact" && "light-contact",
        className,
      )}
      variant={variant}
      {...props}
    >
      <a
        aria-label={`Contact ${contact.name} at ${contact.phone} on WhatsApp`}
        href={href}
        rel="noopener noreferrer"
        target="_blank"
      >
        <img
          alt=""
          aria-hidden="true"
          className="size-4 shrink-0"
          src={`${import.meta.env.BASE_URL}brand/whatsapp.svg`}
        />
        {children}
      </a>
    </Button>
  );
}
