import * as React from "react";
import { useEffect, useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";

interface Section5Props {
  scrollProgress?: number;
}

// Section5: Our process — ~14% of scroll for adequate screen time
const SECTION5_START = 0.48;
const SECTION5_END = 0.62;
const FADE_IN_END = 0.52;
const FADE_OUT_START = 0.58;

function progressInRange(p: number, start: number, end: number): number {
  if (p <= start) return 0;
  if (p >= end) return 1;
  return (p - start) / (end - start);
}

const PHASES = [
  {
    title: "Discover",
    items: [
      "Strategic Insight",
      "User Research",
      "Goal Alignment",
      "Competitive Analysis",
      "Product Vision",
    ],
    icon: "search",
  },
  {
    title: "Design",
    items: [
      "Wireframe Flow",
      "Visual Identity",
      "UX Mapping",
      "UI Prototypes",
      "Interaction Design",
    ],
    icon: "pencil",
  },
  {
    title: "Develop",
    items: [
      "Technical Architecture",
      "Front-End Development",
      "Back-End Integration",
      "Quality Assurance & Testing",
      "Performance Optimization",
    ],
    icon: "code",
  },
  {
    title: "Evolve",
    items: [
      "User Feedback Analysis",
      "Continuous Improvement",
      "Feature Enhancements",
      "Usage Analytics",
      "Maintenance & Support",
    ],
    icon: "trend",
  },
] as const;

const PhaseIcon: React.FC<{ name: string }> = ({ name }) => {
  const size = "h-7 w-7";
  switch (name) {
    case "search":
      return (
        <svg className={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
          <circle cx="11" cy="11" r="8" />
          <path d="m21 21-4.3-4.3" />
        </svg>
      );
    case "pencil":
      return (
        <svg className={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
          <path d="M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z" />
          <path d="m15 5 4 4" />
        </svg>
      );
    case "code":
      return (
        <svg className={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
          <polyline points="16 18 22 12 16 6" />
          <polyline points="8 6 2 12 8 18" />
        </svg>
      );
    case "trend":
      return (
        <svg className={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
          <polyline points="22 7 13.5 15.5 8.5 10.5 2 17" />
          <polyline points="16 7 22 7 22 13" />
        </svg>
      );
    default:
      return null;
  }
};

const Section5: React.FC<Section5Props> = ({ scrollProgress = 0 }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const descRef = useRef<HTMLParagraphElement>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);
  const hasAnimatedRef = useRef(false);

  const inRange = scrollProgress >= SECTION5_START && scrollProgress <= SECTION5_END;
  const fadeIn = progressInRange(scrollProgress, SECTION5_START, FADE_IN_END);
  const fadeOut = 1 - progressInRange(scrollProgress, FADE_OUT_START, SECTION5_END);
  const opacity = Math.min(fadeIn, fadeOut);
  const displayOpacity = inRange ? Math.max(opacity, 0.4) : opacity;

  const willRender = scrollProgress >= SECTION5_START - 0.02 && scrollProgress <= SECTION5_END + 0.02;

  useEffect(() => {
    if (scrollProgress < SECTION5_START - 0.1) hasAnimatedRef.current = false;
  }, [scrollProgress]);

  useLayoutEffect(() => {
    if (!inRange || hasAnimatedRef.current) return;

    const cards = cardsRef.current.filter(Boolean) as HTMLDivElement[];
    if (cards.length === 0) return;

    hasAnimatedRef.current = true;

    gsap.context(() => {
      gsap.set(titleRef.current, { opacity: 0, y: 20 });
      gsap.set(descRef.current, { opacity: 0, y: 16 });
      gsap.set(cards, { opacity: 0, y: 24 });

      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      tl.to(titleRef.current, { opacity: 1, y: 0, duration: 0.5 })
        .to(descRef.current, { opacity: 1, y: 0, duration: 0.4 }, "-=0.3")
        .to(
          cards,
          { opacity: 1, y: 0, duration: 0.5, stagger: 0.08, ease: "power3.out" },
          "-=0.2"
        );
    });
  }, [inRange]);

  if (!willRender) return null;

  return (
    <div
      ref={containerRef}
      className="absolute inset-0 flex flex-col overflow-y-auto overflow-x-hidden px-6 py-12 sm:px-8 sm:py-16 md:px-12 md:py-20"
      style={{
        opacity: displayOpacity,
        pointerEvents: displayOpacity < 0.5 ? "none" : "auto",
        zIndex: 3,
      }}
    >
      <div className="mx-auto w-full max-w-6xl flex-1">
        {/* Header */}
        <header className="mb-10 text-center md:mb-14">
          <h2
            ref={titleRef}
            className="font-anybody text-3xl font-light leading-tight tracking-wide text-[var(--text-primary)] sm:text-4xl md:text-5xl"
          >
            Our simple, Smart
            <br />
            and Scalable process
          </h2>
          <p
            ref={descRef}
            className="kite-one-regular mx-auto mt-4 max-w-2xl text-base leading-relaxed text-[var(--text-secondary)] sm:text-lg"
          >
            We separate our work into focused phases to ensure clarity, quality, and speed. From the initial idea to the final product, every step is calculated.
          </p>
        </header>

        {/* Phase cards - 4 columns on desktop, 2x2 on tablet, 1 col on mobile */}
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {PHASES.map((phase, i) => (
            <div
              key={phase.title}
              ref={(el) => {
                cardsRef.current[i] = el;
              }}
              className="flex flex-col rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-sm transition-colors hover:border-white/15 hover:bg-white/8"
            >
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl bg-white/10 text-[var(--text-primary)]">
                  <PhaseIcon name={phase.icon} />
                </div>
                <h3 className="font-anybody text-lg font-medium text-[var(--text-primary)]">
                  {phase.title}
                </h3>
              </div>
              <ul className="kite-one-regular mt-4 flex flex-col gap-2">
                {phase.items.map((item) => (
                  <li
                    key={item}
                    className="flex items-center gap-2 text-sm text-[var(--text-secondary)]"
                  >
                    <span className="h-1.5 w-1.5 flex-shrink-0 rounded-full bg-white/40" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Section5;
