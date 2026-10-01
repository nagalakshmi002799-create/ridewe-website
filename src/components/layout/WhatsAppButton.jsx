import { Button } from "../ui/button.jsx";
import { primaryContact } from "../../utils/contact.js";
import { cn } from "../../lib/cn.js";

export function WhatsAppButton({
  children = "WhatsApp",
  className,
  contact = primaryContact,
  ariaLabel,
  iconSrc = `${import.meta.env.BASE_URL}brand/whatsapp.svg`,
  iconClassName,
  gradientIcon = false,
  gradientText = false,
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
        aria-label={
          ariaLabel ?? `Contact ${contact.name} at ${contact.phone} on WhatsApp`
        }
        href={href}
        rel="noopener noreferrer"
        target="_blank"
      >
        {gradientIcon ? (
          <span
            aria-hidden="true"
            className="size-4 shrink-0 bg-gradient-to-r from-accent to-[#35D45B]"
            style={{
              maskImage: `url("${iconSrc}")`,
              maskPosition: "center",
              maskRepeat: "no-repeat",
              maskSize: "contain",
              WebkitMaskImage: `url("${iconSrc}")`,
              WebkitMaskPosition: "center",
              WebkitMaskRepeat: "no-repeat",
              WebkitMaskSize: "contain",
            }}
          />
        ) : (
          <img
            alt=""
            aria-hidden="true"
            className={cn("size-4 shrink-0", iconClassName)}
            src={iconSrc}
          />
        )}
        {gradientText ? (
          <span className="bg-gradient-to-r from-accent to-[#35D45B] bg-clip-text text-transparent">
            {children}
          </span>
        ) : (
          children
        )}
      </a>
    </Button>
  );
}
