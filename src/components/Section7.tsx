import * as React from "react";
import { useEffect, useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";

interface Section7Props {
  scrollProgress?: number;
}

// Section7: Pricing — ~14% of scroll for adequate screen time
const SECTION7_START = 0.72;
const SECTION7_END = 0.86;
const FADE_IN_END = 0.76;
const FADE_OUT_START = 0.82;

function progressInRange(p: number, start: number, end: number): number {
  if (p <= start) return 0;
  if (p >= end) return 1;
  return (p - start) / (end - start);
}

const FEATURES = [
  "Clean, modern frontend with responsive design",
  "Basic backend and functionality",
  "Support post delivery",
  "Mobile-friendly performance",
  "Revision cycles",
];

const PLANS = [
  {
    name: "Starter",
    price: "$1,500",
    desc: "Best suited for business websites, SaaS platforms, Web3 utilities with backend logic",
    popular: false,
  },
  {
    name: "Professional",
    price: "$4,500",
    desc: "Best suited for business websites, SaaS platforms, Web3 utilities with backend logic",
    popular: true,
  },
  {
    name: "Enterprise",
    price: "$10,000",
    desc: "Best suited for business websites, SaaS platforms, Web3 utilities with backend logic",
    popular: false,
  },
] as const;

const Section7: React.FC<Section7Props> = ({ scrollProgress = 0 }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);
  const hasAnimatedRef = useRef(false);

  const inRange = scrollProgress >= SECTION7_START && scrollProgress <= SECTION7_END;
  const fadeIn = progressInRange(scrollProgress, SECTION7_START, FADE_IN_END);
  const fadeOut = FADE_OUT_START >= SECTION7_END ? 1 : 1 - progressInRange(scrollProgress, FADE_OUT_START, SECTION7_END);
  const opacity = Math.min(fadeIn, fadeOut);
  const displayOpacity = inRange ? Math.max(opacity, 0.4) : opacity;

  const willRender = scrollProgress >= SECTION7_START - 0.02 && scrollProgress <= SECTION7_END + 0.02;

  useEffect(() => {
    if (scrollProgress < SECTION7_START - 0.1) hasAnimatedRef.current = false;
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
        zIndex: 5,
      }}
    >
      <div className="mx-auto w-full max-w-5xl flex-1">
        {/* Header */}
        <header className="mb-10 text-center md:mb-14">
          <h2
            ref={titleRef}
            className="font-anybody text-3xl font-light tracking-wide text-[var(--text-primary)] sm:text-4xl md:text-5xl"
          >
            What it Costs to Build it Right
          </h2>
          <p
            ref={subtitleRef}
            className="kite-one-regular mx-auto mt-4 max-w-2xl text-base leading-relaxed text-[var(--text-secondary)] sm:text-lg"
          >
            No fluff. Just quality development, clear deliverables, and pricing that reflects real work.
          </p>
        </header>

        {/* Pricing cards */}
        <div className="grid gap-6 sm:grid-cols-3">
          {PLANS.map((plan, i) => (
            <div
              key={plan.name}
              ref={(el) => {
                cardsRef.current[i] = el;
              }}
              className={`relative flex flex-col rounded-2xl border p-6 backdrop-blur-sm transition-colors ${
                plan.popular
                  ? "border-white/25 bg-white/10 hover:border-white/35 hover:bg-white/12"
                  : "border-white/10 bg-white/5 hover:border-white/15 hover:bg-white/8"
              }`}
            >
              {plan.popular && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-white/20 px-3 py-0.5 font-anybody text-xs font-medium uppercase tracking-wider text-[var(--text-primary)]">
                  Popular
                </span>
              )}
              <h3 className="font-anybody text-xl font-medium text-[var(--text-primary)]">
                {plan.name}
              </h3>
              <p className="kite-one-regular mt-2 text-sm text-[var(--text-secondary)]">
                {plan.desc}
              </p>
              <div className="mt-6 font-anybody text-3xl font-light text-[var(--text-primary)]">
                {plan.price}
              </div>
              <ul className="kite-one-regular mt-6 flex flex-col gap-3 border-t border-white/10 pt-6">
                {FEATURES.map((feature) => (
                  <li
                    key={feature}
                    className="flex items-center gap-2 text-sm text-[var(--text-secondary)]"
                  >
                    <span className="h-1.5 w-1.5 flex-shrink-0 rounded-full bg-white/40" />
                    {feature}
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

export default Section7;
