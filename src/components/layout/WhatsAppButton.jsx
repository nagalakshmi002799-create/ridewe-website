import { MessageCircle } from "lucide-react";
import { Button } from "../ui/button.jsx";
import { WHATSAPP_URL } from "../../utils/contact.js";

export function WhatsAppButton({
  children = "WhatsApp",
  message,
  ...props
}) {
  const href = message
    ? `${WHATSAPP_URL}?text=${encodeURIComponent(message)}`
    : WHATSAPP_URL;

  return (
    <Button asChild {...props}>
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
