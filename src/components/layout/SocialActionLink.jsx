export function SocialActionLink({
  action,
  className,
  iconClassName = "size-5 brightness-0 invert",
}) {
  return (
    <a
      aria-label={action.label}
      className={className}
      href={action.href}
      rel={action.external ? "noopener noreferrer" : undefined}
      target={action.external ? "_blank" : undefined}
      title={action.label}
    >
      <img
        alt=""
        aria-hidden="true"
        className={iconClassName}
        src={`${import.meta.env.BASE_URL}brand/${action.icon}`}
      />
    </a>
  );
}
