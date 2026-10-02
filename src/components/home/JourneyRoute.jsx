import { useId } from "react";
import { motion, useReducedMotion } from "motion/react";
import { routeStops } from "../../data/homepage.js";

const routePath =
  "M 28 98 C 155 78 230 78 340 98 S 520 116 620 96 S 830 78 972 98";
const routeSegments = [
  [{ x: 28, y: 98 }, { x: 155, y: 78 }, { x: 230, y: 78 }, { x: 340, y: 98 }],
  [{ x: 340, y: 98 }, { x: 450, y: 116 }, { x: 520, y: 116 }, { x: 620, y: 96 }],
  [{ x: 620, y: 96 }, { x: 720, y: 78 }, { x: 830, y: 78 }, { x: 972, y: 98 }],
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
const routeVehicle = `${import.meta.env.BASE_URL}images/vehicles/ciaz.png`;
const rideweLogo = `${import.meta.env.BASE_URL}brand/ridewe-logo-horizontal.png`;
const destinationImages = [
  `${import.meta.env.BASE_URL}images/home/madurai-meenakshi.webp`,
  `${import.meta.env.BASE_URL}images/destinations/kerala-coast.webp`,
  `${import.meta.env.BASE_URL}images/home/coorg-hills.webp`,
];

export function JourneyRoute({
  animated = true,
  className = "",
  dark = false,
  showLabels = true,
}) {
  const reduceMotion = useReducedMotion();
  const gradientId = `journey-gradient-${useId().replaceAll(":", "")}`;
  const shouldAnimate = animated && !reduceMotion;
  const routeColour = dark ? "rgba(255,255,255,0.28)" : "rgba(11,13,15,0.12)";
  const pointFill = dark ? "#0B0D0F" : "#FFFFFF";
  const pointStroke = dark ? "#7ae3d6" : "#00A9B5";
  const vehicleX = routePoints.map(({ x }) => x - 42);
  const vehicleY = routePoints.map(({ y }) => y - 25);

  return (
    <div className={className}>
      <svg
        aria-hidden="true"
        className="h-24 w-full overflow-visible sm:h-28"
        preserveAspectRatio="none"
        viewBox="0 0 1000 180"
      >
        <defs>
          <linearGradient id={gradientId} x1="0" x2="1">
            <stop offset="0%" stopColor="#00A9B5" />
            <stop offset="100%" stopColor="#35D45B" />
          </linearGradient>
          <clipPath id={`${gradientId}-madurai-clip`}>
            <circle cx="150" cy="38" r="36" />
          </clipPath>
          <clipPath id={`${gradientId}-kerala-clip`}>
            <circle cx="500" cy="38" r="36" />
          </clipPath>
          <clipPath id={`${gradientId}-karnataka-clip`}>
            <circle cx="850" cy="38" r="36" />
          </clipPath>
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

        <g clipPath={`url(#${gradientId}-madurai-clip)`}>
          <image
            href={destinationImages[0]}
            height="72"
            preserveAspectRatio="xMidYMid slice"
            width="72"
            x="114"
            y="2"
          />
        </g>
        <g clipPath={`url(#${gradientId}-kerala-clip)`}>
          <image
            href={destinationImages[1]}
            height="72"
            preserveAspectRatio="xMidYMid slice"
            width="72"
            x="464"
            y="2"
          />
        </g>
        <g clipPath={`url(#${gradientId}-karnataka-clip)`}>
          <image
            href={destinationImages[2]}
            height="72"
            preserveAspectRatio="xMidYMid slice"
            width="72"
            x="814"
            y="2"
          />
        </g>
        {[150, 500, 850].map((x, index) => (
          <g key={x}>
            <circle
              cx={x}
              cy="38"
              fill="none"
              r="37"
              stroke="#FFFFFF"
              strokeWidth="5"
            />
            <path
              d={`M ${x} 75 L ${x} ${[92, 108, 92][index]}`}
              fill="none"
              stroke="#00A9B5"
              strokeWidth="3"
            />
          </g>
        ))}
        {[150, 500, 850].map((x, index) => (
          <circle
            cx={x}
            cy={[98, 108, 98][index]}
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
          height="50"
          initial={
            shouldAnimate
              ? { x: vehicleX[0], y: vehicleY[0] }
              : false
          }
          transition={
            shouldAnimate
              ? {
                  duration: 24,
                  ease: "linear",
                  repeat: Number.POSITIVE_INFINITY,
                }
              : undefined
          }
          viewBox="0 0 84 50"
          width="84"
          x={shouldAnimate ? undefined : staticVehiclePosition.x - 42}
          y={shouldAnimate ? undefined : staticVehiclePosition.y - 25}
        >
          <image
            href={routeVehicle}
            height="50"
            preserveAspectRatio="xMidYMid meet"
            width="84"
          />
          <image
            href={rideweLogo}
            height="5"
            preserveAspectRatio="xMidYMid meet"
            width="17"
            x="20"
            y="27"
          />
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
