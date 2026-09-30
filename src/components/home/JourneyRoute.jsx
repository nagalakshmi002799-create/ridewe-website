import { useId } from "react";
import { motion, useReducedMotion } from "motion/react";
import { routeStops } from "../../data/homepage.js";

const routePath =
  "M 28 78 C 155 18 230 12 340 44 S 520 104 620 66 S 830 20 972 74";
const routeSegments = [
  [{ x: 28, y: 78 }, { x: 155, y: 18 }, { x: 230, y: 12 }, { x: 340, y: 44 }],
  [{ x: 340, y: 44 }, { x: 450, y: 76 }, { x: 520, y: 104 }, { x: 620, y: 66 }],
  [{ x: 620, y: 66 }, { x: 720, y: 28 }, { x: 830, y: 20 }, { x: 972, y: 74 }],
];

function getRoutePoint([start, control1, control2, end], progress) {
  const inverse = 1 - progress;
  return {
    x:
      inverse ** 3 * start.x +
      3 * inverse ** 2 * progress * control1.x +
      3 * inverse * progress ** 2 * control2.x +
      progress ** 3 * end.x,
    y:
      inverse ** 3 * start.y +
      3 * inverse ** 2 * progress * control1.y +
      3 * inverse * progress ** 2 * control2.y +
      progress ** 3 * end.y,
  };
}

const routePoints = routeSegments.flatMap((segment) =>
  Array.from({ length: 16 }, (_, step) =>
    getRoutePoint(segment, step / 16),
  ),
);
routePoints.push(routeSegments[routeSegments.length - 1][3]);
const staticVehiclePosition = routePoints[Math.floor(routePoints.length / 2)];

export function JourneyRoute({
  animated = true,
  className = "",
  dark = false,
  showLabels = true,
}) {
  const reduceMotion = useReducedMotion();
  const gradientId = `journey-gradient-${useId().replaceAll(":", "")}`;
  const shouldAnimate = animated && !reduceMotion;
  const vehicleColour = dark ? "#FFFFFF" : "#0B0D0F";
  const routeColour = dark ? "rgba(255,255,255,0.28)" : "rgba(11,13,15,0.12)";
  const pointFill = dark ? "#0B0D0F" : "#FFFFFF";
  const pointStroke = dark ? "#7ae3d6" : "#00A9B5";
  const vehicleX = routePoints.map(({ x }) => x - 16);
  const vehicleY = routePoints.map(({ y }) => y - 10);

  return (
    <div className={className}>
      <svg
        aria-hidden="true"
        className="h-20 w-full overflow-visible sm:h-[5.25rem]"
        preserveAspectRatio="none"
        viewBox="0 0 1000 140"
      >
        <defs>
          <linearGradient id={gradientId} x1="0" x2="1">
            <stop offset="0%" stopColor="#00A9B5" />
            <stop offset="100%" stopColor="#35D45B" />
          </linearGradient>
        </defs>

        <path
          d="M 0 108 C 140 80, 220 82, 300 96 S 520 118, 620 94 S 820 74, 1000 98 L 1000 140 L 0 140 Z"
          fill={dark ? "rgba(9, 15, 17, 0.88)" : "rgba(0,169,181,0.08)"}
        />

        <path
          d={routePath}
          fill="none"
          stroke={routeColour}
          strokeLinecap="round"
          strokeWidth="6"
        />

        <motion.path
          d={routePath}
          fill="none"
          initial={shouldAnimate ? { pathLength: 0 } : false}
          pathLength="1"
          stroke={`url(#${gradientId})`}
          strokeLinecap="round"
          strokeWidth="4"
          transition={{ duration: 1.3, ease: "easeInOut" }}
          viewport={{ once: true, amount: 0.6 }}
          whileInView={shouldAnimate ? { pathLength: 1 } : undefined}
        />

        {[28, 340, 620, 972].map((x, index) => (
          <circle
            cx={x}
            cy={[78, 44, 66, 74][index]}
            fill={pointFill}
            key={x}
            r="8.5"
            stroke={pointStroke}
            strokeWidth="4"
          />
        ))}

        <motion.svg
          animate={
            shouldAnimate
              ? { x: vehicleX, y: vehicleY }
              : undefined
          }
          height="20"
          initial={
            shouldAnimate
              ? { x: vehicleX[0], y: vehicleY[0] }
              : false
          }
          transition={
            shouldAnimate
              ? {
                  duration: 12,
                  ease: "linear",
                  repeat: Number.POSITIVE_INFINITY,
                }
              : undefined
          }
          viewBox="0 0 32 20"
          width="32"
          x={shouldAnimate ? undefined : staticVehiclePosition.x - 16}
          y={shouldAnimate ? undefined : staticVehiclePosition.y - 10}
        >
          <path
            d="M3 12 6 5h14l6 7h3v5H2v-4z"
            fill={vehicleColour}
            stroke={dark ? "#DDE6E4" : "#FFFFFF"}
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
                  ? dark
                    ? "text-left text-white"
                    : "text-left text-brand"
                  : index === routeStops.length - 1
                    ? dark
                      ? "text-right text-white/70"
                      : "text-right text-slate-600"
                    : dark
                      ? "text-white/70"
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
