import * as React from "react";
import { useEffect, useLayoutEffect, useRef, useMemo } from "react";
import { gsap } from "gsap";

interface Section3Props {
  scrollProgress?: number;
}

// Section3: Technologies we use — ~14% of scroll for adequate screen time
const SECTION3_START = 0.24;
const SECTION3_END = 0.38;
const FADE_IN_END = 0.28;
const FADE_OUT_START = 0.34;

function progressInRange(p: number, start: number, end: number): number {
  if (p <= start) return 0;
  if (p >= end) return 1;
  return (p - start) / (end - start);
}

// Tech items: Crypto, MERN, AI, Automation — use Simple Icons CDN for real brand logos
// https://cdn.simpleicons.org/{slug} — serves colored SVGs
const TECH_NAMES = [
  "Ethereum", "Solidity", "Web3.js", "Remix",
  "MongoDB", "Express", "React", "Node.js",
  "Anthropic", "LangChain", "n8n", "GitHub Actions",
] as const;
const TECH_SLUGS = [
  "ethereum", "solidity", "web3dotjs", "remix",
  "mongodb", "express", "react", "nodedotjs",
  "anthropic", "langchain", "n8n", "githubactions",
] as const;

// Circular layout: 12 items evenly spaced around center; radius 68% for wider gaps
const CIRCLE_RADIUS = 0.68;
const TECH_POSITIONS = TECH_NAMES.map((_, i) => {
  const angle = (i / 12) * 2 * Math.PI - Math.PI / 2; // start from top
  return {
    left: `${50 + CIRCLE_RADIUS * 50 * Math.cos(angle)}%`,
    top: `${50 + CIRCLE_RADIUS * 50 * Math.sin(angle)}%`,
  };
});

const TECH_ITEMS_BASE = TECH_NAMES.map((name, i) => ({
  name,
  slug: TECH_SLUGS[i],
  ...TECH_POSITIONS[i],
}));

// Icon size: 48px for better visibility (responsive via Tailwind)
const ICON_SIZE = 48;

const TechLogo: React.FC<{ slug: string }> = ({ slug }) => (
  <img
    src={`https://cdn.simpleicons.org/${slug}?viewbox=auto&size=${ICON_SIZE}`}
    alt=""
    width={ICON_SIZE}
    height={ICON_SIZE}
    className="flex-shrink-0"
    loading="lazy"
    decoding="async"
  />
);

const Section3: React.FC<Section3Props> = ({ scrollProgress = 0 }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const circlesRef = useRef<(HTMLDivElement | null)[]>([]);
  const hasAnimatedRef = useRef(false);
  const floatTweensRef = useRef<gsap.core.Tween[]>([]);

  const inRange = scrollProgress >= SECTION3_START && scrollProgress <= SECTION3_END;
  const fadeIn = progressInRange(scrollProgress, SECTION3_START, FADE_IN_END);
  const fadeOut = 1 - progressInRange(scrollProgress, FADE_OUT_START, SECTION3_END);
  const opacity = Math.min(fadeIn, fadeOut);
  const displayOpacity = inRange ? Math.max(opacity, 0.4) : opacity;

  const willRender = scrollProgress >= SECTION3_START - 0.02 && scrollProgress <= SECTION3_END + 0.02;

  // Scroll-driven rotation: full 360° as user scrolls through the section
  const rotationProgress = Math.max(
    0,
    Math.min(1, (scrollProgress - SECTION3_START) / (SECTION3_END - SECTION3_START))
  );
  const rotationDeg = rotationProgress * 360;

  // Random float params per item — different x/y durations create organic Lissajous-like motion
  const floatParams = useMemo(
    () =>
      TECH_ITEMS_BASE.map(() => ({
        xAmp: (Math.random() - 0.5) * 24,
        yAmp: (Math.random() - 0.5) * 24,
        xDur: 2.5 + Math.random() * 3,
        yDur: 3 + Math.random() * 2.5,
        delay: Math.random() * 1.5,
      })),
    []
  );

  // Reset animation only when fully scrolled past section (avoids re-trigger on boundary wobble)
  useEffect(() => {
    if (scrollProgress < SECTION3_START - 0.1) hasAnimatedRef.current = false;
  }, [scrollProgress]);

  useLayoutEffect(() => {
    if (!inRange || hasAnimatedRef.current) return;

    const circles = circlesRef.current.filter(Boolean) as HTMLDivElement[];
    if (circles.length === 0) return;

    hasAnimatedRef.current = true;

    gsap.context(() => {
      // Entry: scale from 0, pop in with stagger (set before first paint to avoid flash)
      gsap.set(circles, { scale: 0, opacity: 0, xPercent: -50, yPercent: -50 });
      gsap.set(titleRef.current, { opacity: 0, y: 24 });

      const tl = gsap.timeline({ defaults: { ease: "back.out(1.2)" } });

      // Title and circles appear together (no stagger)
      tl.to(titleRef.current, { opacity: 1, y: 0, duration: 0.5 })
        .to(
          circles,
          {
            scale: 1,
            opacity: 1,
            duration: 0.5,
            ease: "back.out(1.4)",
          },
          "<"
        )
        .add(() => {
          // Start random float — separate x/y tweens with different durations = organic drift
          floatTweensRef.current = circles.flatMap((el, i) => {
            const p = floatParams[i];
            const tx = gsap.to(el, {
              x: `+=${p.xAmp}`,
              duration: p.xDur,
              delay: p.delay,
              ease: "sine.inOut",
              yoyo: true,
              repeat: -1,
            });
            const ty = gsap.to(el, {
              y: `+=${p.yAmp}`,
              duration: p.yDur,
              delay: p.delay * 1.3,
              ease: "sine.inOut",
              yoyo: true,
              repeat: -1,
            });
            return [tx, ty];
          });
        });
    });

    return () => {
      floatTweensRef.current.forEach((t) => t.kill());
      floatTweensRef.current = [];
      // Don't revert — avoids undoing animation when scroll fluctuates at boundary
    };
  }, [inRange, floatParams]);

  // Exit: scroll-driven scale down (when fading out)
  const exitScale = scrollProgress > FADE_OUT_START ? 1 - (1 - opacity) * 0.5 : 1;

  if (!willRender) return null;

  return (
    <div
      ref={containerRef}
      className="absolute inset-0 flex flex-col items-center justify-center overflow-visible px-6 py-16"
      style={{
        opacity: displayOpacity,
        transform: `scale(${exitScale})`,
        pointerEvents: displayOpacity < 0.5 ? "none" : "auto",
        zIndex: 2,
      }}
    >
      <h2
        ref={titleRef}
        className="font-anybody mb-8 text-center text-3xl font-light tracking-wide text-[var(--text-primary)] sm:text-4xl md:text-5xl"
      >
        Technologies we use
      </h2>

      <div className="relative h-[60vh] w-full max-w-6xl flex-1 overflow-visible md:h-[55vh]">
        {/* Square wrapper = perfect circle (not elliptical) */}
        <div
          className="absolute inset-0 flex items-center justify-center"
          style={{ transform: "translateY(-8%)" }}
        >
          <div
            className="relative aspect-square w-[min(55vh,85%)]"
            style={{
              transform: `rotate(${rotationDeg}deg)`,
              transformOrigin: "center center",
            }}
          >
            {TECH_ITEMS_BASE.map((tech, i) => (
              <div
                key={tech.name}
                ref={(el) => {
                  circlesRef.current[i] = el;
                }}
                className="tech-circle absolute flex flex-col items-center justify-center gap-1.5 rounded-full border border-white/20 bg-white/5 p-2 backdrop-blur-md transition-all duration-300 hover:scale-110 hover:border-white/35 hover:bg-white/10"
                style={{
                  left: tech.left,
                  top: tech.top,
                  width: "7rem",
                  height: "7rem",
                  opacity: 0,
                  transform: "translate(-50%, -50%) scale(0)",
                }}
              >
                {/* Counter-rotate so icons/text stay upright while path rotates */}
                <div
                  className="flex flex-col items-center justify-center gap-1.5"
                  style={{ transform: `rotate(${-rotationDeg}deg)` }}
                >
                  <div className="text-[var(--text-primary)]">
                    <TechLogo slug={tech.slug} />
                  </div>
                  <span className="kite-one-regular text-center text-sm font-medium tracking-wide text-[var(--text-secondary)] sm:text-base">
                    {tech.name}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section3;
