import { Button } from "../ui/button.jsx";
import { primaryContact } from "../../utils/contact.js";

export function PhoneButton({
  children,
  contact = primaryContact,
  ...props
}) {
  return (
    <Button asChild variant="secondary" {...props}>
      <a
        aria-label={`Call ${contact.name} at ${contact.phone}`}
        href={contact.phoneHref}
      >
        <img
          alt=""
          aria-hidden="true"
          className="size-4"
          src={`${import.meta.env.BASE_URL}brand/phone-handset.svg`}
        />
        {children ?? contact.phone}
      </a>
    </Button>
  );
}
