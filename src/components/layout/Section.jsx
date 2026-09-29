import { cn } from "../../lib/cn.js";

export function Section({
  as: Component = "section",
  className,
  ...props
}) {
  return (
    <Component
      className={cn("py-12 sm:py-16 lg:py-20", className)}
      {...props}
    />
  );
}
