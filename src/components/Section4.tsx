import * as React from "react";
import { useEffect, useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";

interface Section4Props {
  scrollProgress?: number;
}

// Section4: What we do — ~14% of scroll for adequate screen time
const SECTION4_START = 0.36;
const SECTION4_END = 0.50;
const FADE_IN_END = 0.40;
const FADE_OUT_START = 0.46;

function progressInRange(p: number, start: number, end: number): number {
  if (p <= start) return 0;
  if (p >= end) return 1;
  return (p - start) / (end - start);
}

const SERVICES = [
  {
    title: "Brand Identity",
    desc: "Comprehensive brand development including logo design, color palettes, typography systems, and visual guidelines that ensure brand consistency across all touchpoints.",
    icon: "palette",
  },
  {
    title: "Illustration",
    desc: "Custom illustrations and graphics tailored to your brand's personality. From icons to full-page illustrations that bring your vision to life.",
    icon: "brush",
  },
  {
    title: "UI/UX Design",
    desc: "User-centered design solutions that combine aesthetics with functionality. We create intuitive interfaces that delight users and drive engagement.",
    icon: "layout",
  },
  {
    title: "Frontend Design",
    desc: "Pixel-perfect frontend development with modern technologies. Responsive, accessible, and performant web experiences that look great everywhere.",
    icon: "code",
  },
  {
    title: "Android/iOS App",
    desc: "Native and cross-platform mobile app development. From concept to deployment, we build apps that users love to use every day.",
    icon: "smartphone",
  },
  {
    title: "Software Development",
    desc: "End-to-end software solutions tailored to your business needs. Scalable, secure, and maintainable systems built with best practices.",
    icon: "cog",
  },
] as const;

const ServiceIcon: React.FC<{ name: string }> = ({ name }) => {
  const size = "h-8 w-8";
  switch (name) {
    case "palette":
      return (
        <svg className={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
          <circle cx="13.5" cy="6.5" r="0.5" fill="currentColor" />
          <circle cx="17.5" cy="10.5" r="0.5" fill="currentColor" />
          <circle cx="8.5" cy="7.5" r="0.5" fill="currentColor" />
          <circle cx="6.5" cy="12.5" r="0.5" fill="currentColor" />
          <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.648 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.555C21.965 6.012 17.461 2 12 2z" />
        </svg>
      );
    case "brush":
      return (
        <svg className={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
          <path d="m9.06 11.9 8.07-8.06a2.85 2.85 0 1 1 4.03 4.03l-8.06 8.08" />
          <path d="M7.07 14.94c-1.66 0-3 1.35-3 3.02 0 1.33-2.5 1.52-2 2.02 1.08 1.1 2.49 2.02 4 2.02 2.2 0 4-1.8 4-4.04a3.01 3.01 0 0 0-3-3.02z" />
        </svg>
      );
    case "layout":
      return (
        <svg className={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
          <rect width="7" height="9" x="3" y="3" rx="1" />
          <rect width="7" height="5" x="14" y="3" rx="1" />
          <rect width="7" height="5" x="14" y="14" rx="1" />
          <rect width="7" height="9" x="3" y="12" rx="1" />
        </svg>
      );
    case "code":
      return (
        <svg className={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
          <polyline points="16 18 22 12 16 6" />
          <polyline points="8 6 2 12 8 18" />
        </svg>
      );
    case "smartphone":
      return (
        <svg className={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
          <rect width="14" height="20" x="5" y="2" rx="2" ry="2" />
          <line x1="12" x2="12.01" y1="18" y2="18" />
        </svg>
      );
    case "cog":
      return (
        <svg className={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
          <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z" />
          <circle cx="12" cy="12" r="3" />
        </svg>
      );
    default:
      return null;
  }
};

const Section4: React.FC<Section4Props> = ({ scrollProgress = 0 }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const descRef = useRef<HTMLParagraphElement>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);
  const hasAnimatedRef = useRef(false);

  const inRange = scrollProgress >= SECTION4_START && scrollProgress <= SECTION4_END;
  const fadeIn = progressInRange(scrollProgress, SECTION4_START, FADE_IN_END);
  const fadeOut = 1 - progressInRange(scrollProgress, FADE_OUT_START, SECTION4_END);
  const opacity = Math.min(fadeIn, fadeOut);
  const displayOpacity = inRange ? Math.max(opacity, 0.4) : opacity;

  const willRender = scrollProgress >= SECTION4_START - 0.02 && scrollProgress <= SECTION4_END + 0.02;

  useEffect(() => {
    if (scrollProgress < SECTION4_START - 0.1) hasAnimatedRef.current = false;
  }, [scrollProgress]);

  useLayoutEffect(() => {
    if (!inRange || hasAnimatedRef.current) return;

    const cards = cardsRef.current.filter(Boolean) as HTMLDivElement[];
    if (cards.length === 0) return;

    hasAnimatedRef.current = true;

    gsap.context(() => {
      gsap.set(titleRef.current, { opacity: 0, y: 20 });
      gsap.set(subtitleRef.current, { opacity: 0, y: 16 });
      gsap.set(descRef.current, { opacity: 0, y: 16 });
      gsap.set(cards, { opacity: 0, y: 24 });

      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      tl.to(titleRef.current, { opacity: 1, y: 0, duration: 0.5 })
        .to(subtitleRef.current, { opacity: 1, y: 0, duration: 0.4 }, "-=0.3")
        .to(descRef.current, { opacity: 1, y: 0, duration: 0.4 }, "-=0.2")
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
        zIndex: 2,
      }}
    >
      <div className="mx-auto w-full max-w-5xl flex-1">
        {/* Header */}
        <header className="mb-10 text-center md:mb-14">
          <h2
            ref={titleRef}
            className="font-anybody text-3xl font-light tracking-wide text-[var(--text-primary)] sm:text-4xl md:text-5xl"
          >
            What we do
          </h2>
          <p
            ref={subtitleRef}
            className="font-anybody mt-4 text-xl font-light leading-snug text-[var(--text-primary)] sm:text-2xl"
          >
            We design meaningful not just quick impressions
          </p>
          <p
            ref={descRef}
            className="kite-one-regular mx-auto mt-4 max-w-2xl text-base leading-relaxed text-[var(--text-secondary)] sm:text-lg"
          >
            Quality-driven design at every level. Our integrated approach helps brands go to market faster with confidence.
          </p>
        </header>

        {/* Service cards grid */}
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((svc, i) => (
            <div
              key={svc.title}
              ref={(el) => {
                cardsRef.current[i] = el;
              }}
              className="flex flex-col gap-3 rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-sm transition-colors hover:border-white/15 hover:bg-white/8"
            >
              <div className="flex items-center gap-3">
                <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-white/10 text-[var(--text-primary)]">
                  <ServiceIcon name={svc.icon} />
                </div>
                <h3 className="font-anybody text-lg font-medium text-[var(--text-primary)]">
                  {svc.title}
                </h3>
              </div>
              <p className="kite-one-regular text-sm leading-relaxed text-[var(--text-secondary)]">
                {svc.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Section4;
