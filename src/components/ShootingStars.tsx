import * as React from "react";

interface ShootingStarsProps extends React.SVGProps<SVGSVGElement> {
  scrollProgress?: number;
}

// Scoped at module load — only the two classes used by shooting stars
const SHOOTING_STARS_CSS = (
  "\n      .cls-29 { fill: url(#ss-linear-gradient-13); }\n      .cls-30 { fill: url(#ss-linear-gradient-12); }\n      .cls-29, .cls-30 { opacity: .73; }\n    "
).replace(/\.cls-/g, '#shooting-stars-svg .cls-');

// 7 varied paths: star flies from upper-right (sx,sy) → lower-left (ex,ey)
const STAR_PATHS = [
  { sx: 1600, sy: -300, ex: -600, ey:  700 },
  { sx: 1900, sy: -150, ex: -400, ey:  450 },
  { sx: 1500, sy: -500, ex: -300, ey:  600 },
  { sx: 2100, sy: -250, ex: -700, ey:  550 },
  { sx: 1700, sy: -100, ex: -500, ey:  380 },
  { sx: 1800, sy: -600, ex: -200, ey:  750 },
  { sx: 2000, sy: -380, ex: -450, ey:  500 },
] as const;

// 3 scroll events — 1 per scene, wider ranges = slower travel
// scene 1: 0.00–0.27  scene 2: 0.27–0.65  scene 3: 0.65–1.00
const EVENTS = [
  { s: 0.04, e: 0.22, p: 3 }, // scene 1 — one star
  { s: 0.32, e: 0.55, p: 5 }, // scene 2 — one star
  { s: 0.70, e: 0.92, p: 1 }, // scene 3 — one star
] as const;

// Compute the animated state for a star given the events it participates in
const evalStar = (scrollProgress: number, eventIndices: readonly number[]) => {
  for (const idx of eventIndices) {
    const ev = EVENTS[idx];
    if (scrollProgress >= ev.s && scrollProgress <= ev.e) {
      const t    = (scrollProgress - ev.s) / (ev.e - ev.s);
      const path = STAR_PATHS[ev.p];
      const x    = path.sx + (path.ex - path.sx) * t;
      const y    = path.sy + (path.ey - path.sy) * t;
      // fade in first 15%, hold, fade out last 15%
      let o = 1;
      if (t < 0.15)      o = t / 0.15;
      else if (t > 0.85) o = (1 - t) / 0.15;
      return { x, y, o };
    }
  }
  return { x: 0, y: 0, o: 0 };
};

const ShootingStars: React.FC<ShootingStarsProps> = React.memo(({ scrollProgress = 0, ...props }) => {
  // Single star — one event per scene (indices 0, 1, 2)
  const star = evalStar(scrollProgress, [0, 1, 2]);

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
      <path
        id="shooting-star"
        style={{
          opacity: star.o,
          transform: `translate(${star.x}px, ${star.y}px)`,
        }}
        className="cls-30"
        d="M504,167.58L829.46,19.18l-316.9,168.13c-4.76,2.52-10.73,1.11-13.69-3.38-.25-.37-.47-.77-.67-1.17-1.08-2.22-1.32-4.73-.79-7.12.78-3.57,3.27-6.54,6.6-8.06Z"
      />
    </svg>
  );
});

export default ShootingStars;
