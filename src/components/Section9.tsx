import * as React from "react";
import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { gsap } from "gsap";

interface Section9Props {
  scrollProgress?: number;
}

// Section9: FAQ + Footer — ~8% of scroll (final section)
const SECTION9_START = 0.92;
const SECTION9_END = 1;
const FADE_IN_END = 0.95;
const FADE_OUT_START = 0.98;

function progressInRange(p: number, start: number, end: number): number {
  if (p <= start) return 0;
  if (p >= end) return 1;
  return (p - start) / (end - start);
}

const FAQ_ITEMS = [
  {
    q: "What technologies do you use?",
    a: "Our team works with modern frameworks and languages like React, Angular, Node.js, Express, MongoDB, MySQL, and more tailored to your project's needs.",
  },
  {
    q: "Is my data and project information secure?",
    a: "Yes, we follow strict data privacy, version control and security protocols to ensure your information is protected at every stage.",
  },
  {
    q: "Can you redesign or upgrade my existing website?",
    a: "Yes, we can improve, redesign or rebuild your existing platform to be faster, more responsive and aligned with modern standards.",
  },
  {
    q: "Do you offer post-launch support?",
    a: "Yes, we provide maintenance, bug fixes, performance optimization, and feature updates as part of our post-launch support packages.",
  },
  {
    q: "How involved will I need to be during the project?",
    a: "We encourage regular collaboration but handle the technical heavy lifting. You will be involved in key decisions, feedback and approvals.",
  },
] as const;

const Section9: React.FC<Section9Props> = ({ scrollProgress = 0 }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const faqRef = useRef<HTMLDivElement>(null);
  const footerRef = useRef<HTMLDivElement>(null);
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);
  const hasAnimatedRef = useRef(false);

  const inRange = scrollProgress >= SECTION9_START && scrollProgress <= SECTION9_END;
  const fadeIn = progressInRange(scrollProgress, SECTION9_START, FADE_IN_END);
  const fadeOut = FADE_OUT_START >= SECTION9_END ? 1 : 1 - progressInRange(scrollProgress, FADE_OUT_START, SECTION9_END);
  const opacity = Math.min(fadeIn, fadeOut);
  const displayOpacity = inRange ? Math.max(opacity, 0.4) : opacity;

  const willRender = scrollProgress >= SECTION9_START - 0.02 && scrollProgress <= SECTION9_END + 0.02;

  useEffect(() => {
    if (scrollProgress < SECTION9_START - 0.1) hasAnimatedRef.current = false;
  }, [scrollProgress]);

  useLayoutEffect(() => {
    if (!inRange || hasAnimatedRef.current) return;

    hasAnimatedRef.current = true;

    gsap.context(() => {
      gsap.set(titleRef.current, { opacity: 0, y: 20 });
      gsap.set(subtitleRef.current, { opacity: 0, y: 16 });
      gsap.set(faqRef.current, { opacity: 0, y: 24 });
      gsap.set(footerRef.current, { opacity: 0, y: 16 });

      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      tl.to(titleRef.current, { opacity: 1, y: 0, duration: 0.5 })
        .to(subtitleRef.current, { opacity: 1, y: 0, duration: 0.4 }, "-=0.3")
        .to(faqRef.current, { opacity: 1, y: 0, duration: 0.5 }, "-=0.2")
        .to(footerRef.current, { opacity: 1, y: 0, duration: 0.4 }, "-=0.2");
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
        zIndex: 7,
      }}
    >
      <div className="mx-auto flex w-full max-w-6xl flex-1 flex-col">
        {/* Header */}
        <header className="mb-10 text-center md:mb-14">
          <h2
            ref={titleRef}
            className="font-anybody text-3xl font-light tracking-wide text-[var(--text-primary)] sm:text-4xl md:text-5xl"
          >
            Still Got Questions?
          </h2>
          <p
            ref={subtitleRef}
            className="kite-one-regular mx-auto mt-4 max-w-xl text-base leading-relaxed text-[var(--text-secondary)] sm:text-lg"
          >
            No worries. We&apos;ve answered the most common stuff below. If it&apos;s not here, just reach out.
          </p>
        </header>

        {/* FAQ accordion */}
        <div ref={faqRef} className="mx-auto flex w-full max-w-3xl flex-col gap-3">
          {FAQ_ITEMS.map((item, i) => (
            <div
              key={item.q}
              className="overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm transition-colors hover:border-white/15 hover:bg-white/8"
            >
              <button
                type="button"
                onClick={() => setExpandedIndex(expandedIndex === i ? null : i)}
                className="flex w-full items-center justify-between px-5 py-4 text-left"
              >
                <span className="font-anybody text-base font-medium text-[var(--text-primary)] sm:text-lg">
                  {item.q}
                </span>
                <span
                  className={`ml-4 flex-shrink-0 text-[var(--text-primary)] transition-transform duration-200 ${
                    expandedIndex === i ? "rotate-180" : ""
                  }`}
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="6 9 12 15 18 9" />
                  </svg>
                </span>
              </button>
              <div
                className={`grid transition-all duration-200 ease-out ${
                  expandedIndex === i ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                }`}
              >
                <div className="overflow-hidden">
                  <p className="kite-one-regular border-t border-white/10 px-5 py-4 text-sm leading-relaxed text-[var(--text-secondary)]">
                    {item.a}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Footer */}
        <footer
          ref={footerRef}
          className="mt-16 grid gap-8 border-t border-white/10 pt-12 sm:grid-cols-2 lg:grid-cols-3"
        >
          {/* Brand */}
          <div className="flex flex-col gap-2">
            <p className="font-anybody text-2xl font-light tracking-wide text-[var(--text-primary)]">
              dApp Studio
            </p>
            <p className="kite-one-regular text-sm text-[var(--text-secondary)]">
              Your Gateway to Web Innovation
            </p>
            <p className="kite-one-regular mt-2 text-xs text-[var(--text-muted)]">
              © 2025 dApp Studio. All Rights Reserved
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <p className="font-anybody mb-3 text-sm font-medium uppercase tracking-wider text-[var(--text-primary)]">
              Quick Links
            </p>
            <nav className="flex flex-col gap-2">
              {["Home", "About", "Pricing", "Testimonials", "FAQs", "Contact us"].map((link) => (
                <a
                  key={link}
                  href="#"
                  className="kite-one-regular text-sm text-[var(--text-secondary)] transition-colors hover:text-[var(--text-primary)]"
                >
                  {link}
                </a>
              ))}
            </nav>
          </div>

          {/* Contact */}
          <div>
            <p className="font-anybody mb-3 text-sm font-medium uppercase tracking-wider text-[var(--text-primary)]">
              Get in touch
            </p>
            <div className="flex flex-col gap-2">
              <a
                href="tel:+18919891191"
                className="kite-one-regular text-sm text-[var(--text-secondary)] transition-colors hover:text-[var(--text-primary)]"
              >
                +1 891 989-11-91
              </a>
              <a
                href="mailto:help@logoipsum.com"
                className="kite-one-regular text-sm text-[var(--text-secondary)] transition-colors hover:text-[var(--text-primary)]"
              >
                help@logoipsum.com
              </a>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Section9;
