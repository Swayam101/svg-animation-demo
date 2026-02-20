import * as React from "react";
import { scopeCss } from "../utils/scopedCss";
import { SHOOTING_STARS } from "../constants/timeline";
import { easeOut } from "../utils/easing";

interface ShootingStarsProps extends React.SVGProps<SVGSVGElement> {
  scrollProgress?: number;
}

const SCOPE_ID = "shooting-stars-svg";
const SHOOTING_STARS_CSS = scopeCss(
  "\n      .cls-29 { fill: url(#ss-linear-gradient-13); }\n      .cls-30 { fill: url(#ss-linear-gradient-12); }\n      .cls-29, .cls-30 { opacity: .73; }\n    ",
  SCOPE_ID
);

// Centered, high in sky: avoid right palm tree (x < 1100). Moon x~800. Stay high (y 80–260).
const STAR_PATHS = [
  { sx: 1000, sy: 90, ex: 420, ey: 240 },
  { sx: 950, sy: 80, ex: 400, ey: 220 },
  { sx: 1050, sy: 95, ex: 450, ey: 250 },
  { sx: 980, sy: 85, ex: 430, ey: 230 },
  { sx: 1020, sy: 92, ex: 410, ey: 245 },
  { sx: 960, sy: 88, ex: 440, ey: 235 },
  { sx: 990, sy: 86, ex: 425, ey: 238 },
] as const;

const BASE_EVENTS = [
  { s: SHOOTING_STARS.SCENE1_START, e: SHOOTING_STARS.SCENE1_END },
  { s: SHOOTING_STARS.SCENE2_START, e: SHOOTING_STARS.SCENE2_END },
  { s: SHOOTING_STARS.SCENE3_START, e: SHOOTING_STARS.SCENE3_END },
] as const;

type EventConfig = { s: number; e: number; p: number; pathEndT: number; fadeInEnd: number };

// Randomize events once on mount — different path, timing, speed per star
const useRandomizedEvents = (): EventConfig[] =>
  React.useMemo(() => {
    const rand = (min: number, max: number) => min + Math.random() * (max - min);
    const randInt = (min: number, max: number) => Math.floor(rand(min, max + 1));
    return BASE_EVENTS.map((base) => ({
      s: base.s + rand(-0.02, 0.02),
      e: base.e + rand(-0.02, 0.02),
      p: randInt(0, STAR_PATHS.length - 1),
      pathEndT: rand(0.38, 0.58),
      fadeInEnd: rand(0.08, 0.16),
    }));
  }, []);

const evalStarForEvent = (
  scrollProgress: number,
  ev: EventConfig
): { x: number; y: number; o: number } => {
  if (scrollProgress < ev.s || scrollProgress > ev.e) {
    return { x: 0, y: 0, o: 0 };
  }
  const t = (scrollProgress - ev.s) / (ev.e - ev.s);
  const path = STAR_PATHS[ev.p];
  const rawPathT = Math.min(1, t / ev.pathEndT);
  const pathT = easeOut(rawPathT);
  const x = path.sx + (path.ex - path.sx) * pathT;
  const y = path.sy + (path.ey - path.sy) * pathT;
  let o = 1;
  if (t < ev.fadeInEnd) o = t / ev.fadeInEnd;
  else if (t > 0.65) o = (1 - t) / 0.35;
  return { x, y, o };
};

const STAR_PATH_D =
  "M504,167.58L829.46,19.18l-316.9,168.13c-4.76,2.52-10.73,1.11-13.69-3.38-.25-.37-.47-.77-.67-1.17-1.08-2.22-1.32-4.73-.79-7.12.78-3.57,3.27-6.54,6.6-8.06Z";

const ShootingStars: React.FC<ShootingStarsProps> = React.memo(({ scrollProgress = 0, ...props }) => {
  const events = useRandomizedEvents();
  const stars = React.useMemo(
    () => [0, 1, 2].map((idx) => evalStarForEvent(scrollProgress, events[idx])),
    [scrollProgress, events]
  );

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      id="shooting-stars-svg"
      viewBox="0 0 1542.68 1024.85"
      preserveAspectRatio="xMidYMid slice"
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        pointerEvents: 'none',
      }}
      {...props}
    >
      <defs>
        <style>{SHOOTING_STARS_CSS}</style>
        <linearGradient
          id="ss-linear-gradient-12"
          x1={663.3}
          y1={188.56}
          x2={663.3}
          y2={19.18}
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0}    stopColor="#faf3c9" />
          <stop offset={0.05} stopColor="#faf3cd" stopOpacity={0.92} />
          <stop offset={0.2}  stopColor="#fbf6da" stopOpacity={0.68} />
          <stop offset={0.35} stopColor="#fcf9e5" stopOpacity={0.47} />
          <stop offset={0.49} stopColor="#fdfbee" stopOpacity={0.3}  />
          <stop offset={0.63} stopColor="#fefcf5" stopOpacity={0.17} />
          <stop offset={0.77} stopColor="#fefefa" stopOpacity={0.08} />
          <stop offset={0.89} stopColor="#fefefd" stopOpacity={0.02} />
          <stop offset={1}    stopColor="#fff"    stopOpacity={0}    />
        </linearGradient>
        <linearGradient
          id="ss-linear-gradient-13"
          x1={963.7}
          y1={232.98}
          x2={963.7}
          y2={136.07}
          href="#ss-linear-gradient-12"
        />
      </defs>
      {stars.map((star, i) => (
        <path
          key={i}
          id={`shooting-star-${i}`}
          style={{
            opacity: star.o,
            transform: `translate(${star.x}px, ${star.y}px)`,
          }}
          className="cls-30"
          d={STAR_PATH_D}
        />
      ))}
    </svg>
  );
});

export default ShootingStars;
