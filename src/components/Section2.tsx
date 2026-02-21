import * as React from "react";
import { useEffect, useLayoutEffect, useRef, useCallback } from "react";
import { gsap } from "gsap";
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore - GSAP Flip/flip.d.ts casing mismatch
import Flip from "gsap/Flip";

gsap.registerPlugin(Flip);

interface Section2Props {
  scrollProgress?: number;
}

/**
 * SECTION2 BIG PICTURE:
 * - Mount: scrollProgress 0.10→0.25 (avoids flicker at boundary)
 * - inRange: 0.12→0.25 (when entrance animation can fire)
 * - opacity: fadeIn 0.12→0.16, fadeOut 0.21→0.25
 * - displayOpacity: inRange ? max(opacity, 0.25) : opacity (min 25% when in range so GSAP is visible)
 */
// Scroll range: Section2 — ~13% of scroll for adequate screen time
const SECTION2_VISIBLE_START = 0.12;
const SECTION2_VISIBLE_END = 0.25;
const SECTION2_FADE_IN_END = 0.16;
const SECTION2_FADE_OUT_START = 0.21;

const FEATS = [
  {
    title: "Build Smarter,\nLaunch Faster",
    desc: "We craft high-performance web and mobile apps that are fast, scalable, and user-focused helping you go from idea to launch with confidence and speed.",
    tag: "Development",
    bullets: ["Web & Mobile", "Scalable", "User-focused"],
    icon: "rocket",
  },
  {
    title: "Tailored Systems,\nTotal Control",
    desc: "From custom dashboards to complex integrations, we build tech that fits your workflow — giving you full control without the technical hassle.",
    tag: "Custom",
    bullets: ["Dashboards", "Integrations", "Full control"],
    icon: "sliders",
  },
  {
    title: "Engineered to\nScale Securely",
    desc: "Our solutions are built on rock-solid architecture that scales effortlessly and keeps your data safe — so you can grow without limits.",
    tag: "Infrastructure",
    bullets: ["Rock-solid", "Scalable", "Secure"],
    icon: "shield",
  },
  {
    title: "Innovate\nBeyond Limits",
    desc: "Leverage the power of AI, automation, and Web3. We build intelligent, next-gen solutions that move your business into the future.",
    tag: "Future",
    bullets: ["AI & Automation", "Web3", "Next-gen"],
    icon: "sparkles",
  },
] as const;

const CardIcon: React.FC<{ name: string }> = ({ name }) => {
  const size = "h-10 w-10";
  switch (name) {
    case "rocket":
      return (
        <svg className={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
          <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z" />
          <path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z" />
          <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0" />
          <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5" />
        </svg>
      );
    case "sliders":
      return (
        <svg className={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
          <line x1="4" y1="21" x2="4" y2="14" />
          <line x1="4" y1="10" x2="4" y2="3" />
          <line x1="12" y1="21" x2="12" y2="12" />
          <line x1="12" y1="8" x2="12" y2="3" />
          <line x1="20" y1="21" x2="20" y2="16" />
          <line x1="20" y1="12" x2="20" y2="3" />
          <line x1="1" y1="14" x2="7" y2="14" />
          <line x1="9" y1="8" x2="15" y2="8" />
          <line x1="17" y1="16" x2="23" y2="16" />
        </svg>
      );
    case "shield":
      return (
        <svg className={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        </svg>
      );
    case "sparkles":
      return (
        <svg className={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
          <path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z" />
        </svg>
      );
    default:
      return null;
  }
};

function progressInRange(p: number, start: number, end: number): number {
  if (p <= start) return 0;
  if (p >= end) return 1;
  return (p - start) / (end - start);
}

const DUR = 0.5;
const DEBUG_SECTION2 = false; // Set true to log animation flow

// Debug: log with timestamp and phase
const dlog = (phase: string, data: Record<string, unknown>) => {
  if (!DEBUG_SECTION2) return;
  const t = (performance.now() / 1000).toFixed(2);
  console.log(`[Section2:${phase}] t=${t}s`, data);
};

const Section2: React.FC<Section2Props> = ({ scrollProgress = 0 }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const bodyRef = useRef<HTMLParagraphElement>(null);
  const cardsRef = useRef<(HTMLLIElement | null)[]>([]);
  const listRef = useRef<HTMLUListElement>(null);
  const hasAnimatedRef = useRef(false);
  const lastExpandedRef = useRef<number>(-1);
  const lastItemsRef = useRef<Element[]>([]);

  const inRange =
    scrollProgress >= SECTION2_VISIBLE_START &&
    scrollProgress <= SECTION2_VISIBLE_END;

  // Opacity: fade in 0.12→0.16, hold, fade out 0.21→0.25
  const fadeIn = progressInRange(
    scrollProgress,
    SECTION2_VISIBLE_START,
    SECTION2_FADE_IN_END
  );
  const fadeOut = 1 - progressInRange(
    scrollProgress,
    SECTION2_FADE_OUT_START,
    SECTION2_VISIBLE_END
  );
  const opacity = Math.min(fadeIn, fadeOut);
  // When in range, use min 0.25 opacity so the GSAP entrance animation is visible (otherwise parent opacity 0 hides it)
  const displayOpacity = inRange ? Math.max(opacity, 0.25) : opacity;

  const willRender = scrollProgress >= 0.10 && scrollProgress <= SECTION2_VISIBLE_END;
  // Only log RENDER when near section to reduce noise (0.08–0.5)
  if (DEBUG_SECTION2 && scrollProgress >= 0.08 && scrollProgress <= 0.5) {
    dlog("RENDER", {
      scrollProgress: scrollProgress.toFixed(4),
      inRange,
      fadeIn: fadeIn.toFixed(3),
      fadeOut: fadeOut.toFixed(3),
      opacity: opacity.toFixed(3),
      displayOpacity: displayOpacity.toFixed(3),
      willRender,
      hasAnimated: hasAnimatedRef.current,
    });
  }

  // Reset animation flag only when fully leaving section (scrollProgress < 0.10)
  useEffect(() => {
    if (scrollProgress < 0.10) {
      hasAnimatedRef.current = false;
      dlog("RESET", { scrollProgress, reason: "left section" });
    }
  }, [scrollProgress]);

  // Initial entrance animation — fire as soon as we reach section2 (inRange)
  useLayoutEffect(() => {
    dlog("EFFECT", {
      inRange,
      hasAnimated: hasAnimatedRef.current,
      scrollProgress: scrollProgress.toFixed(4),
      containerRef: !!containerRef.current,
      titleRef: !!titleRef.current,
      bodyRef: !!bodyRef.current,
      listRef: !!listRef.current,
    });

    if (!inRange) {
      dlog("EFFECT_SKIP", { reason: "!inRange" });
      return;
    }
    if (hasAnimatedRef.current) {
      dlog("EFFECT_SKIP", { reason: "already animated" });
      return;
    }

    // Query cards from container (container mounts first, so most reliable)
    const cardItems = containerRef.current
      ? Array.from(containerRef.current.querySelectorAll<HTMLElement>(".section2-list-item"))
      : listRef.current
        ? Array.from(listRef.current.querySelectorAll<HTMLElement>(".section2-list-item"))
        : [];

    dlog("EFFECT_TARGETS", {
      cardCount: cardItems.length,
      titleRef: !!titleRef.current,
      bodyRef: !!bodyRef.current,
      titleEl: titleRef.current?.tagName,
      bodyEl: bodyRef.current?.tagName,
    });

    if (cardItems.length === 0) {
      dlog("EFFECT_SKIP", { reason: "no card items" });
      return;
    }
    if (!titleRef.current || !bodyRef.current) {
      dlog("EFFECT_SKIP", { reason: "title or body ref null", title: !!titleRef.current, body: !!bodyRef.current });
      return;
    }

    hasAnimatedRef.current = true;
    // Log container visibility at animation start
    const containerOpacity = containerRef.current
      ? getComputedStyle(containerRef.current).opacity
      : "N/A";
    dlog("EFFECT_START", {
      cardCount: cardItems.length,
      containerComputedOpacity: containerOpacity,
      containerDisplayOpacity: displayOpacity.toFixed(3),
    });

    gsap.context(() => {
      // Set initial state immediately so cards are hidden before animation
      gsap.set(cardItems, (i: number) => ({
        x: i % 2 === 0 ? -120 : 120,
        opacity: 0,
      }));
      gsap.set(titleRef.current, { opacity: 0, y: 24 });
      gsap.set(bodyRef.current, { opacity: 0, y: 16 });

      const tl = gsap.timeline({
        defaults: { ease: "power3.out" },
        onStart: () => dlog("GSAP_START", {}),
        onComplete: () => {
          dlog("GSAP_COMPLETE", {});
          const firstCard = cardItems[0];
          if (firstCard && DEBUG_SECTION2) {
            const s = getComputedStyle(firstCard);
            dlog("GSAP_AFTER", {
              opacity: s.opacity,
              transform: s.transform,
            });
          }
        },
      });

      tl.to(titleRef.current, { opacity: 1, y: 0, duration: 0.5 })
        .to(bodyRef.current, { opacity: 1, y: 0, duration: 0.5 }, "-=0.3")
        .to(
          cardItems,
          {
            x: 0,
            opacity: 1,
            duration: 0.6,
            stagger: 0.1,
            ease: "power3.out",
          },
          "-=0.2"
        );
    });

    return () => {
      dlog("EFFECT_CLEANUP", { inRange });
    };
  }, [inRange]);

  const handleCardClick = useCallback(
    (i: number) => {
      const listItems = listRef.current
        ? Array.from(listRef.current.querySelectorAll(".section2-list-item"))
        : [];
      const item = listItems[i] as HTMLElement | undefined;
      if (!item) return;

      const itemTargets = Array.from(item.querySelectorAll("*"));
      const isSameAsLast = i === lastExpandedRef.current && listItems[lastExpandedRef.current];
      const targets = isSameAsLast
        ? [...listItems, ...itemTargets]
        : [...listItems, ...itemTargets, ...lastItemsRef.current];

      const state = Flip.getState(targets);

      if (!isSameAsLast && lastExpandedRef.current >= 0 && listItems[lastExpandedRef.current]) {
        (listItems[lastExpandedRef.current] as HTMLElement).classList.remove("expanded");
      }

      item.classList.toggle("expanded");

      Flip.from(state, {
        duration: DUR,
        ease: "power1.inOut",
        absolute: true,
        nested: true,
        onEnter: (elements: Element[]) =>
          gsap.fromTo(elements, { opacity: 0 }, { opacity: 1, duration: DUR / 2, delay: DUR / 2 }),
        onLeave: (elements: Element[]) => gsap.to(elements, { opacity: 0, duration: DUR / 2 }),
      });

      lastItemsRef.current = itemTargets;
      lastExpandedRef.current = item.classList.contains("expanded") ? i : -1;
    },
    []
  );

  // Keep mounted from 0.10→0.25 to avoid unmount/remount flicker
  if (!willRender) {
    dlog("MOUNT", { decision: "null", reason: scrollProgress < 0.10 ? "before 0.10" : "after 0.25" });
    return null;
  }

  dlog("MOUNT", { decision: "content", displayOpacity: displayOpacity.toFixed(3) });
  return (
    <div
      ref={containerRef}
      className="absolute inset-0 flex overflow-hidden px-6 py-16 sm:px-8 sm:py-20 md:px-12 md:py-24 lg:px-24 xl:px-28"
      style={{
        opacity: displayOpacity,
        pointerEvents: displayOpacity < 0.5 ? "none" : "auto",
        zIndex: 1, // Ensure Section2 overlays HeroSection (both in ContentLayer flex)
      }}
    >
      <div className="mx-auto flex w-full max-w-6xl flex-1 flex-col gap-8 md:max-w-7xl md:flex-row md:gap-12 lg:gap-16">
        {/* Left: fixed text */}
        <div className="flex flex-shrink-0 flex-col md:w-[45%] lg:w-[42%]">
          <h2
            ref={titleRef}
            className="font-anybody text-3xl font-light leading-tight tracking-wide text-[var(--text-primary)] sm:text-4xl md:text-5xl"
          >
            Technology built for
            <br />
            clarity and trust
          </h2>

          <p
            ref={bodyRef}
            className="kite-one-regular mt-6 flex-1 text-base leading-relaxed tracking-wide text-[var(--text-secondary)] sm:text-lg"
          >
            TechVirtue Infotech was started in 2024 by Tarun Bhati. After
            working across a range of industries and project types, Tarun had
            repeatedly seen the same issue. Businesses would hire developers
            who could write code, but were not on the same page about the
            project&apos;s purpose. He wanted to change this dynamic. TechVirtue
            started as a company that wanted to build solutions through clear
            communication and only build products that actually help clients.
            That philosophy is still at the heart of all of our services and all
            of our product decisions. We believe that good software is built
            when the business logic is known as clearly as the technology.
          </p>
        </div>

        {/* Right: card stack - landscape, expandable. overflow-visible so slide-in (x: ±120) isn't clipped */}
        <div className="relative min-h-[40vh] flex-1 overflow-visible md:min-h-0 md:flex-[1]">
          <div className="flex flex-col items-center gap-4 overflow-visible md:absolute md:inset-0 md:gap-6">
            <ul ref={listRef} className="flex w-full max-w-xl flex-col gap-4 md:max-w-2xl md:gap-6">
              {FEATS.map((feat, i) => (
                <li
                  key={feat.title}
                  ref={(el) => {
                    cardsRef.current[i] = el;
                  }}
                  role="button"
                  tabIndex={0}
                  onClick={() => handleCardClick(i)}
                  onKeyDown={(e) => e.key === "Enter" && handleCardClick(i)}
                  className="section2-list-item flex cursor-pointer flex-row items-center rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur-sm transition-colors hover:border-white/15 hover:bg-white/8 md:p-5"
                >
                  {/* Avatar */}
                  <div className="avatar flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-full bg-white/10 text-[var(--text-primary)] md:h-16 md:w-16">
                    <CardIcon name={feat.icon} />
                  </div>

                  {/* Description */}
                  <div className="description ml-4 flex flex-1 flex-col md:ml-6">
                    <div className="line font-anybody text-base font-medium leading-snug text-[var(--text-primary)] md:text-lg">
                      {feat.title.replace(/\n/g, " ")}
                    </div>
                    <div className="line kite-one-regular mt-1 line-clamp-2 text-sm text-[var(--text-secondary)]">
                      {feat.desc}
                    </div>
                    <div className="line kite-one-regular mt-1 text-xs uppercase tracking-widest text-[var(--text-muted)]">
                      {feat.tag}
                    </div>
                  </div>

                  {/* Additional content - visible when expanded */}
                  <div className="additional-content hidden w-full flex-col border-t border-white/5 pt-4">
                    <p className="kite-one-regular chunk text-sm leading-relaxed text-[var(--text-secondary)]">
                      {feat.desc}
                    </p>
                    <ul className="chunk mt-3 flex flex-wrap gap-x-3 gap-y-1">
                      {feat.bullets.map((b) => (
                        <li key={b} className="kite-one-regular flex items-center gap-1.5 text-xs text-[var(--text-muted)]">
                          <span className="h-1 w-1 rounded-full bg-white/40" />
                          {b}
                        </li>
                      ))}
                    </ul>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section2;
