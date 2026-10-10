import { socialActions } from "../../data/social-actions.js";
import { SocialActionLink } from "./SocialActionLink.jsx";

export function FloatingSocialActions() {
  return (
    <div
      aria-label="RideWe quick actions"
      className="fixed z-30 flex gap-1.5 rounded-full border border-slate-200 bg-white/95 p-1.5 shadow-lg backdrop-blur-sm sm:flex-col"
      role="group"
      style={{
        bottom: "calc(env(safe-area-inset-bottom, 0px) + 0.75rem)",
        left: "calc(env(safe-area-inset-left, 0px) + 0.75rem)",
      }}
    >
      {socialActions.map((action) => (
        <SocialActionLink
          action={action}
          className="grid size-11 shrink-0 place-items-center rounded-full bg-gradient-to-r from-accent to-[#35D45B] shadow-sm transition hover:brightness-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 active:scale-95"
          key={action.id}
        />
      ))}
    </div>
  );
}
