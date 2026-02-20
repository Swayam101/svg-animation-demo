import * as React from "react";

interface ShootingStarsProps extends React.SVGProps<SVGSVGElement> {
  scrollProgress?: number;
}

// Scoped at module load — only the two classes used by shooting stars
const SHOOTING_STARS_CSS = (
  "\n      .cls-29 { fill: url(#ss-linear-gradient-13); }\n      .cls-30 { fill: url(#ss-linear-gradient-12); }\n      .cls-29, .cls-30 { opacity: .73; }\n    "
).replace(/\.cls-/g, '#shooting-stars-svg .cls-');

// 7 varied paths: short diagonal, upper-right → lower-left.
const STAR_PATHS = [
  { sx: 1320, sy: -50, ex: 720, ey:  120 },
  { sx: 1370, sy: -30, ex: 770, ey:  100 },
  { sx: 1270, sy: -80, ex: 670, ey:  130 },
  { sx: 1400, sy: -45, ex: 700, ey:  115 },
  { sx: 1340, sy: -25, ex: 740, ey:  95 },
  { sx: 1300, sy: -65, ex: 700, ey:  125 },
  { sx: 1380, sy: -55, ex: 680, ey:  110 },
] as const;

// 3 scroll events — 1 per scene, aligned with sequential timeline
// scene 1: desert 0.00–0.22  scene 2: construction 0.22–0.55  scene 3: metro 0.65–0.92
const EVENTS = [
  { s: 0.04, e: 0.18, p: 3 }, // scene 1 — desert
  { s: 0.25, e: 0.35, p: 5 }, // scene 2 — construction
  { s: 0.68, e: 0.90, p: 1 }, // scene 3 — metro
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
