import * as React from "react";
import { useEffect, useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";

interface Section8Props {
  scrollProgress?: number;
}

// Section8: Testimonials — ~10% of scroll for adequate screen time
const SECTION8_START = 0.84;
const SECTION8_END = 0.94;
const FADE_IN_END = 0.88;
const FADE_OUT_START = 0.90;

function progressInRange(p: number, start: number, end: number): number {
  if (p <= start) return 0;
  if (p >= end) return 1;
  return (p - start) / (end - start);
}

const TESTIMONIALS = [
  {
    name: "Kai Mercer",
    company: "SomeCompany LLC.",
    quote: "They're the goat they coached me through everything at the end, the bot works perfect. Highly recommended.",
  },
  {
    name: "Leo Vance",
    company: "SomeCompany LLC.",
    quote: "Insanely fast and helpful. They handled everything from start to finish, and the final product turned out way better than I expected.",
  },
  {
    name: "Niko Raines",
    company: "SomeCompany LLC.",
    quote: "Top-notch work. From UI to backend! they handled it all like pros. If you're on the fence, just go for it.",
  },
] as const;

const Section8: React.FC<Section8Props> = ({ scrollProgress = 0 }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);
  const hasAnimatedRef = useRef(false);

  const inRange = scrollProgress >= SECTION8_START && scrollProgress <= SECTION8_END;
  const fadeIn = progressInRange(scrollProgress, SECTION8_START, FADE_IN_END);
  const fadeOut = FADE_OUT_START >= SECTION8_END ? 1 : 1 - progressInRange(scrollProgress, FADE_OUT_START, SECTION8_END);
  const opacity = Math.min(fadeIn, fadeOut);
  const displayOpacity = inRange ? Math.max(opacity, 0.4) : opacity;

  const willRender = scrollProgress >= SECTION8_START - 0.02 && scrollProgress <= SECTION8_END + 0.02;

  useEffect(() => {
    if (scrollProgress < SECTION8_START - 0.1) hasAnimatedRef.current = false;
  }, [scrollProgress]);

  useLayoutEffect(() => {
    if (!inRange || hasAnimatedRef.current) return;

    const cards = cardsRef.current.filter(Boolean) as HTMLDivElement[];
    if (cards.length === 0) return;

    hasAnimatedRef.current = true;

    gsap.context(() => {
      gsap.set(titleRef.current, { opacity: 0, y: 20 });
      gsap.set(cards, { opacity: 0, y: 24 });

      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      tl.to(titleRef.current, { opacity: 1, y: 0, duration: 0.5 })
        .to(
          cards,
          { opacity: 1, y: 0, duration: 0.5, stagger: 0.1, ease: "power3.out" },
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
        zIndex: 6,
      }}
    >
      <div className="mx-auto w-full max-w-5xl flex-1">
        {/* Header */}
        <header className="mb-10 text-center md:mb-14">
          <h2
            ref={titleRef}
            className="font-anybody text-3xl font-light leading-tight tracking-wide text-[var(--text-primary)] sm:text-4xl md:text-5xl"
          >
            Why businesses love
            <br />
            our web solutions
          </h2>
        </header>

        {/* Testimonial cards */}
        <div className="grid gap-6 sm:grid-cols-3">
          {TESTIMONIALS.map((t, i) => (
            <div
              key={t.name}
              ref={(el) => {
                cardsRef.current[i] = el;
              }}
              className="flex flex-col rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm transition-colors hover:border-white/15 hover:bg-white/8"
            >
              <p className="kite-one-regular flex-1 text-sm leading-relaxed text-[var(--text-secondary)] sm:text-base">
                &ldquo;{t.quote}&rdquo;
              </p>
              <div className="mt-6 border-t border-white/10 pt-4">
                <p className="font-anybody font-medium text-[var(--text-primary)]">
                  {t.name}
                </p>
                <p className="kite-one-regular mt-0.5 text-sm text-[var(--text-muted)]">
                  {t.company}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Section8;
