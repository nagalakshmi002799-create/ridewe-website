import { Slot } from "@radix-ui/react-slot";
import { cva } from "class-variance-authority";
import { forwardRef } from "react";
import { cn } from "../../lib/cn.js";

const buttonVariants = cva(
  "inline-flex min-h-11 cursor-pointer items-center justify-center gap-2 rounded-xl px-5 py-2.5 text-sm font-semibold transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        primary:
          "bg-gradient-to-r from-accent to-[#35D45B] text-brand hover:brightness-95",
        secondary:
          "border border-accent/30 bg-white text-brand hover:border-accent/60 hover:bg-brand-soft",
        outline:
          "border border-slate-300 bg-transparent text-brand hover:border-accent/50 hover:bg-brand-soft",
        ghost: "text-slate-700 hover:bg-slate-100",
      },
      size: {
        default: "min-h-11",
        sm: "min-h-9 rounded-lg px-3 text-xs",
        lg: "min-h-12 px-6 text-base",
        icon: "size-11 p-0",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "default",
    },
  },
);

export const Button = forwardRef(
  ({ asChild = false, className, size, variant, ...props }, ref) => {
    const Component = asChild ? Slot : "button";

    return (
      <Component
        className={cn(buttonVariants({ className, size, variant }))}
        ref={ref}
        {...props}
      />
    );
  },
);

Button.displayName = "Button";
