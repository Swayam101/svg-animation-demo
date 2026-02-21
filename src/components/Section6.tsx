import * as React from "react";
import { useEffect, useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";

interface Section6Props {
  scrollProgress?: number;
}

// Section6: Key benefits — ~14% of scroll for adequate screen time
const SECTION6_START = 0.60;
const SECTION6_END = 0.74;
const FADE_IN_END = 0.64;
const FADE_OUT_START = 0.70;

function progressInRange(p: number, start: number, end: number): number {
  if (p <= start) return 0;
  if (p >= end) return 1;
  return (p - start) / (end - start);
}

const BENEFITS = [
  {
    title: "Increased Productivity",
    desc: "We build tools, dashboards, and automated systems that streamline your daily operations, helping you and your team work faster and smarter.",
    icon: "zap",
  },
  {
    title: "Better Customer Experience",
    desc: "From sleek UIs to smooth performance, we craft user-first products that boost engagement, reduce bounce rates, and leave a lasting impression.",
    icon: "heart",
  },
  {
    title: "24/7 Availability",
    desc: "We ensure your platforms are reliable, secure, and up 24/7 with proactive monitoring, fast fixes, and ongoing support when you need it most.",
    icon: "shield",
  },
  {
    title: "Cost Reduction",
    desc: "Our development approach focuses on clean, efficient code, minimizing overhead, reducing technical debt, and keeping maintenance costs low.",
    icon: "trend",
  },
  {
    title: "Scalability & Growth",
    desc: "We build systems that grow with you, whether you're launching an MVP or scaling to 1M+ users, we ensure performance and structure never hold you back.",
    icon: "chart",
  },
] as const;

const BenefitIcon: React.FC<{ name: string }> = ({ name }) => {
  const size = "h-8 w-8";
  switch (name) {
    case "zap":
      return (
        <svg className={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
          <path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z" />
        </svg>
      );
    case "heart":
      return (
        <svg className={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
          <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
        </svg>
      );
    case "shield":
      return (
        <svg className={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        </svg>
      );
    case "trend":
      return (
        <svg className={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
          <polyline points="22 7 13.5 15.5 8.5 10.5 2 17" />
          <polyline points="16 7 22 7 22 13" />
        </svg>
      );
    case "chart":
      return (
        <svg className={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
          <path d="M3 3v18h18" />
          <path d="m19 9-5 5-4-4-3 3" />
        </svg>
      );
    default:
      return null;
  }
};

const Section6: React.FC<Section6Props> = ({ scrollProgress = 0 }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);
  const hasAnimatedRef = useRef(false);

  const inRange = scrollProgress >= SECTION6_START && scrollProgress <= SECTION6_END;
  const fadeIn = progressInRange(scrollProgress, SECTION6_START, FADE_IN_END);
  const fadeOut = 1 - progressInRange(scrollProgress, FADE_OUT_START, SECTION6_END);
  const opacity = Math.min(fadeIn, fadeOut);
  const displayOpacity = inRange ? Math.max(opacity, 0.4) : opacity;

  const willRender = scrollProgress >= SECTION6_START - 0.02 && scrollProgress <= SECTION6_END + 0.02;

  useEffect(() => {
    if (scrollProgress < SECTION6_START - 0.1) hasAnimatedRef.current = false;
  }, [scrollProgress]);

  useLayoutEffect(() => {
    if (!inRange || hasAnimatedRef.current) return;

    const cards = cardsRef.current.filter(Boolean) as HTMLDivElement[];
    if (cards.length === 0) return;

    hasAnimatedRef.current = true;

    gsap.context(() => {
      gsap.set(titleRef.current, { opacity: 0, y: 20 });
      gsap.set(subtitleRef.current, { opacity: 0, y: 16 });
      gsap.set(cards, { opacity: 0, y: 24 });

      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      tl.to(titleRef.current, { opacity: 1, y: 0, duration: 0.5 })
        .to(subtitleRef.current, { opacity: 1, y: 0, duration: 0.4 }, "-=0.3")
        .to(
          cards,
          { opacity: 1, y: 0, duration: 0.5, stagger: 0.06, ease: "power3.out" },
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
        zIndex: 4,
      }}
    >
      <div className="mx-auto w-full max-w-6xl flex-1">
        {/* Header */}
        <header className="mb-10 text-center md:mb-14">
          <h2
            ref={titleRef}
            className="font-anybody text-3xl font-light leading-tight tracking-wide text-[var(--text-primary)] sm:text-4xl md:text-5xl"
          >
            The key benefits of partnering
            <br />
            with us for your business growth
          </h2>
          <p
            ref={subtitleRef}
            className="kite-one-regular mx-auto mt-4 max-w-2xl text-base leading-relaxed text-[var(--text-secondary)] sm:text-lg"
          >
            Why Brands Choose Us — Custom development that actually delivers. From clean UI to scalable Web3 infrastructure, we turn ideas into high-performing products.
          </p>
        </header>

        {/* Benefit cards grid */}
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {BENEFITS.slice(0, 4).map((benefit, i) => (
            <div
              key={benefit.title}
              ref={(el) => {
                cardsRef.current[i] = el;
              }}
              className="flex flex-col gap-3 rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-sm transition-colors hover:border-white/15 hover:bg-white/8"
            >
              <div className="flex items-center gap-3">
                <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-white/10 text-[var(--text-primary)]">
                  <BenefitIcon name={benefit.icon} />
                </div>
                <h3 className="font-anybody text-lg font-medium text-[var(--text-primary)]">
                  {benefit.title}
                </h3>
              </div>
              <p className="kite-one-regular text-sm leading-relaxed text-[var(--text-secondary)]">
                {benefit.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Scalability & Growth - featured full-width card */}
        <div
          ref={(el) => {
            cardsRef.current[4] = el;
          }}
          className="mt-6 flex flex-col gap-3 rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm transition-colors hover:border-white/15 hover:bg-white/8 md:flex-row md:items-center md:gap-6"
        >
          <div className="flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-xl bg-white/10 text-[var(--text-primary)]">
            <BenefitIcon name="chart" />
          </div>
          <div className="flex-1">
            <h3 className="font-anybody text-xl font-medium text-[var(--text-primary)]">
              Scalability & Growth
            </h3>
            <p className="kite-one-regular mt-2 text-sm leading-relaxed text-[var(--text-secondary)] sm:text-base">
              We build systems that grow with you, whether you&apos;re launching an MVP or scaling to 1M+ users, we ensure performance and structure never hold you back.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section6;
