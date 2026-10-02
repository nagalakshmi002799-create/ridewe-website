import { Button } from "../ui/button.jsx";
import { primaryContact } from "../../utils/contact.js";
import { cn } from "../../lib/cn.js";

export function PhoneButton({
  children,
  contact = primaryContact,
  ariaLabel,
  iconClassName,
  ...props
}) {
  return (
    <Button asChild variant="secondary" {...props}>
      <a
        aria-label={ariaLabel ?? `Call ${contact.name} at ${contact.phone}`}
        href={contact.phoneHref}
      >
        <img
          alt=""
          aria-hidden="true"
          className={cn("size-4", iconClassName)}
          src={`${import.meta.env.BASE_URL}brand/phone-handset.svg`}
        />
        {children ?? contact.phone}
      </a>
    </Button>
  );
}
