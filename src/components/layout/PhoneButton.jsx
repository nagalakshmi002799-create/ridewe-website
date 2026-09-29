import { Phone } from "lucide-react";
import { Button } from "../ui/button.jsx";
import { PHONE_NUMBER, PHONE_TEL } from "../../utils/contact.js";

export function PhoneButton({
  children = PHONE_NUMBER,
  ...props
}) {
  return (
    <Button asChild variant="secondary" {...props}>
      <a aria-label={`Call RideWe at ${PHONE_NUMBER}`} href={PHONE_TEL}>
        <Phone aria-hidden="true" size={16} />
        {children}
      </a>
    </Button>
  );
}
