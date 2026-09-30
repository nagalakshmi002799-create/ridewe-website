import { useId } from "react";
import { motion, useReducedMotion } from "motion/react";
import { routeStops } from "../../data/homepage.js";

export function JourneyRoute({
  animated = true,
  className = "",
  dark = false,
  showLabels = true,
}) {
  const reduceMotion = useReducedMotion();
  const gradientId = `journey-gradient-${useId().replaceAll(":", "")}`;
  const shouldAnimate = animated && !reduceMotion;

  return (
    <div className={className}>
      <svg
        aria-hidden="true"
        className="h-16 w-full overflow-visible sm:h-[4.5rem]"
        preserveAspectRatio="none"
        viewBox="0 0 1000 120"
      >
        <defs>
          <linearGradient id={gradientId} x1="0" x2="1">
            <stop offset="0%" stopColor="#00A9B5" />
            <stop offset="100%" stopColor="#35D45B" />
          </linearGradient>
        </defs>
        <motion.path
          d="M 24 64 C 170 12 220 16 340 48 S 490 102 610 60 S 825 12 976 64"
          fill="none"
          initial={shouldAnimate ? { pathLength: 0 } : false}
          pathLength="1"
          stroke={`url(#${gradientId})`}
          strokeLinecap="round"
          strokeWidth="4"
          transition={{ duration: 1.15, ease: "easeInOut" }}
          viewport={{ once: true, amount: 0.5 }}
          whileInView={shouldAnimate ? { pathLength: 1 } : undefined}
        />
        {[24, 340, 610, 976].map((x, index) => (
          <circle
            cx={x}
            cy={[64, 48, 60, 64][index]}
            fill="white"
            key={x}
            r="8"
            stroke="#00A9B5"
            strokeWidth="4"
          />
        ))}
        <motion.svg
          height="20"
          initial={shouldAnimate ? { x: 8, y: 54 } : false}
          transition={{ duration: 1.65, ease: "easeInOut" }}
          viewBox="0 0 32 20"
          viewport={{ once: true, amount: 0.5 }}
          whileInView={
            shouldAnimate
              ? {
                  x: [8, 324, 594, 960],
                  y: [54, 38, 50, 54],
                }
              : undefined
          }
          width="32"
          x={shouldAnimate ? undefined : 960}
          y={shouldAnimate ? undefined : 54}
        >
          <path
            d="M3 12 6 5h14l6 7h3v5H2v-4z"
            fill={dark ? "#FFFFFF" : "#0B0D0F"}
            stroke="white"
            strokeLinejoin="round"
            strokeWidth="1.5"
          />
          <circle cx="8" cy="16" fill="#00A9B5" r="2.5" />
          <circle cx="22" cy="16" fill="#00A9B5" r="2.5" />
        </motion.svg>
      </svg>
      {showLabels ? (
        <ol className="grid grid-cols-4 gap-1">
          {routeStops.map((stop, index) => (
            <li
              className={`text-center text-[11px] font-semibold sm:text-sm ${
                index === 0
                  ? "text-left text-brand"
                  : index === routeStops.length - 1
                    ? "text-right text-slate-600"
                    : "text-slate-600"
              }`}
              key={stop}
            >
              {stop}
            </li>
          ))}
        </ol>
      ) : null}
    </div>
  );
}
