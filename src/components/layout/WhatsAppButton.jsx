import { MessageCircle } from "lucide-react";
import { Button } from "../ui/button.jsx";
import { WHATSAPP_URL } from "../../utils/contact.js";
import { cn } from "../../lib/cn.js";

export function WhatsAppButton({
  children = "WhatsApp",
  className,
  message,
  variant,
  ...props
}) {
  const href = message
    ? `${WHATSAPP_URL}?text=${encodeURIComponent(message)}`
    : WHATSAPP_URL;

  return (
    <Button
      asChild
      className={cn(variant === "whatsapp" && "whatsapp-cta", className)}
      variant={variant}
      {...props}
    >
      <a
        aria-label="Contact RideWe on WhatsApp"
        href={href}
        rel="noopener noreferrer"
        target="_blank"
      >
        <MessageCircle aria-hidden="true" size={16} />
        {children}
      </a>
    </Button>
  );
}
