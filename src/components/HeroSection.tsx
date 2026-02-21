import * as React from "react";
import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";

interface HeroSectionProps {
  scrollProgress?: number;
}

const NAV_LINKS = [
  { label: "Home", active: true },
  { label: "about Us", active: false },
  { label: "Pricing", active: false },
  { label: "FAQs", active: false },
] as const;

const HERO_WORDS = {
  line1: ["Engineering", "the"],
  line2: ["Future", "of", "Digital"],
  line3: ["Innovation."],
} as const;

const HERO_FADE_START = 0.02;
const HERO_FADE_END = 0.12;

const HamburgerIcon: React.FC<{ open: boolean; onClick: () => void }> = ({ open, onClick }) => (
  <button
    type="button"
    onClick={onClick}
    aria-label={open ? "Close menu" : "Open menu"}
    aria-expanded={open}
    className="flex h-10 w-10 flex-col items-center justify-center gap-1.5 rounded-lg transition-colors hover:bg-white/10 sm:hidden"
  >
    <span
      className={`h-0.5 w-6 rounded-full bg-white transition-all duration-300 ${
        open ? "translate-y-2 rotate-45" : ""
      }`}
    />
    <span
      className={`h-0.5 w-6 rounded-full bg-white transition-all duration-300 ${
        open ? "opacity-0 scale-0" : ""
      }`}
    />
    <span
      className={`h-0.5 w-6 rounded-full bg-white transition-all duration-300 ${
        open ? "-translate-y-2 -rotate-45" : ""
      }`}
    />
  </button>
);

const HeroSection: React.FC<HeroSectionProps> = ({ scrollProgress = 0 }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navRef = useRef<HTMLElement>(null);
  const mobileMenuRef = useRef<HTMLDivElement>(null);
  const logoRef = useRef<HTMLAnchorElement>(null);
  const logoClipRef = useRef<HTMLSpanElement>(null);
  const navCapsuleRef = useRef<HTMLDivElement>(null);
  const ctaNavRef = useRef<HTMLAnchorElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const line1Ref = useRef<HTMLSpanElement>(null);
  const line2Ref = useRef<HTMLSpanElement>(null);
  const line3Ref = useRef<HTMLSpanElement>(null);
  const taglineRef = useRef<HTMLParagraphElement>(null);
  const taglineClipRef = useRef<HTMLSpanElement>(null);
  const buttonsRef = useRef<HTMLDivElement>(null);
  const btn1Ref = useRef<HTMLAnchorElement>(null);
  const btn2Ref = useRef<HTMLAnchorElement>(null);
  const initialDoneRef = useRef(false);

  // Unique entrance animations: clip-path reveals, directional staggers, asymmetric entrances
  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        onComplete: () => {
          initialDoneRef.current = true;
        },
      });

      // Logo: clip-path wipe from left + logo pops in with rotationY
      tl.fromTo(
        logoClipRef.current,
        { clipPath: "inset(0 0 0 100%)" },
        { clipPath: "inset(0 0 0 0)", duration: 0.7, ease: "power3.inOut" }
      )
        .fromTo(
          logoRef.current,
          { rotationY: -90, transformOrigin: "left center" },
          { rotationY: 0, duration: 0.6, ease: "power2.out" },
          "-=0.5"
        )
        // Nav links: staggered clip-path reveal from top (curtain drop)
        .fromTo(
          navCapsuleRef.current?.querySelectorAll("a") ?? [],
          {
            clipPath: "inset(0 0 100% 0)",
            opacity: 0,
          },
          {
            clipPath: "inset(0 0 0 0)",
            opacity: 1,
            duration: 0.5,
            stagger: 0.06,
            ease: "power2.out",
          },
          "-=0.3"
        )
        // CTA: clip-path reveal from right edge
        .fromTo(
          ctaNavRef.current,
          { clipPath: "inset(0 100% 0 0)", opacity: 0.3 },
          { clipPath: "inset(0 0 0 0)", opacity: 1, duration: 0.55, ease: "power2.out" },
          "-=0.4"
        )
        // Heading: line-by-line clip-path reveals (L→R, R→L, center expand)
        .fromTo(
          line1Ref.current,
          { clipPath: "inset(0 100% 0 0)" },
          { clipPath: "inset(0 0 0 0)", duration: 0.85, ease: "power3.inOut" },
          "-=0.2"
        )
        .fromTo(
          line2Ref.current,
          { clipPath: "inset(0 0 0 100%)" },
          { clipPath: "inset(0 0 0 0)", duration: 0.85, ease: "power3.inOut" },
          "-=0.6"
        )
        .fromTo(
          line3Ref.current,
          { clipPath: "inset(50% 50% 50% 50%)" },
          { clipPath: "inset(0 0 0 0)", duration: 0.7, ease: "power2.out" },
          "-=0.5"
        )
        // Tagline: clip-path wipe from bottom (typewriter-style)
        .fromTo(
          taglineClipRef.current,
          { clipPath: "inset(100% 0 0 0)" },
          { clipPath: "inset(0 0 0 0)", duration: 0.9, ease: "power2.inOut" },
          "-=0.4"
        )
        // Buttons: slide from opposite sides (magnetic entrance)
        .fromTo(
          btn1Ref.current,
          { x: -80, opacity: 0, skewX: -8 },
          { x: 0, opacity: 1, skewX: 0, duration: 0.55, ease: "power2.out" },
          "-=0.3"
        )
        .fromTo(
          btn2Ref.current,
          { x: 80, opacity: 0, skewX: 8 },
          { x: 0, opacity: 1, skewX: 0, duration: 0.55, ease: "power2.out" },
          "-=0.45"
        );
    });

    return () => ctx.revert();
  }, []);

  // Scroll: scale down, parallax, blur, slight perspective
  useEffect(() => {
    if (!initialDoneRef.current && scrollProgress < 0.005) return;

    const p = Math.max(0, (scrollProgress - HERO_FADE_START) / (HERO_FADE_END - HERO_FADE_START));
    const t = Math.min(1, p);
    const easeT = 1 - Math.pow(1 - t, 1.5);

    const opacity = 1 - easeT;
    const y = -easeT * 80;
    const scale = 1 - easeT * 0.15;
    const blur = easeT * 8;
    const rotateX = easeT * 12;

    gsap.set(navRef.current, { opacity, y, scale, transformOrigin: "top center" });
    gsap.set(headingRef.current, {
      opacity,
      y: y * 0.6,
      scale,
      filter: `blur(${blur * 0.5}px)`,
      transformOrigin: "center center",
    });
    gsap.set(taglineRef.current, {
      opacity,
      y: y * 0.4,
      scale: scale,
      filter: `blur(${blur}px)`,
    });
    gsap.set(buttonsRef.current, {
      opacity,
      y: y * 0.3,
      scale,
      rotateX: -rotateX * 0.5,
      transformOrigin: "center center",
    });
  }, [scrollProgress]);

  // Mobile menu: body scroll lock
  useEffect(() => {
    document.body.style.overflow = mobileMenuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  const closeMobileMenu = () => setMobileMenuOpen(false);

  return (
    <div className="flex h-full w-full flex-col">
      {/* Navigation */}
      <nav
        ref={navRef}
        className="flex w-full items-center justify-between px-6 py-6 text-base pt-[12] sm:px-6 sm:py-5 md:px-12 md:py-8 lg:px-24 lg:py-12"
      >
        {/* Logo - clip-path wrapper for wipe reveal */}
        <a
          ref={logoRef}
          href="#"
          className="flex items-center gap-2.5 text-[var(--text-primary)] transition-opacity hover:opacity-90"
        >
          <span
            ref={logoClipRef}
            className="inline-flex items-center gap-2.5 overflow-hidden"
            style={{ clipPath: "inset(0 0 0 0)" }}
          >
            <img
              src="/dapplogo.png"
              alt="dApp Studio"
              className="h-8 w-8 sm:h-10 sm:w-10 md:h-12 md:w-12 lg:h-14 lg:w-14"
            />
            <span className="font-anybody text-lg font-bold tracking-wide sm:text-xl md:text-2xl">
              dApp Studio
            </span>
          </span>
        </a>

        {/* Nav links - glassmorphism capsule (desktop) */}
        <div className="hidden sm:flex">
          <div
            ref={navCapsuleRef}
            className="flex items-center gap-4 rounded-full border border-white/15 bg-white/10 px-2 py-1.5 backdrop-blur-xl"
          >
            {NAV_LINKS.map(({ label }) => (
              <a
                key={label}
                href="#"
                style={{ fontFamily: "anybody", fontWeight: 400 }}
                className="rounded-full px-4 py-2.5 text-lg tracking-wider transition-colors hover:bg-white/10"
              >
                {label}
              </a>
            ))}
          </div>
        </div>

        {/* Right side: hamburger (mobile) + Get in touch (desktop) */}
        <div className="flex items-center gap-3 sm:gap-0">
          <HamburgerIcon
            open={mobileMenuOpen}
            onClick={() => setMobileMenuOpen((o) => !o)}
          />
          <a
            ref={ctaNavRef}
            href="#"
            className="hidden rounded-full border-none bg-white px-5 py-2.5 text-sm font-medium text-[var(--btn-dark-text)] shadow-lg transition-all hover:bg-white/95 sm:inline-flex md:px-7 md:py-3 md:text-base"
          >
            Get in touch
          </a>
        </div>
      </nav>

      {/* Mobile menu overlay - slides in from right */}
      <div
        ref={mobileMenuRef}
        aria-hidden={!mobileMenuOpen}
        className={`fixed inset-0 z-[200] flex flex-col bg-black/70 backdrop-blur-xl pt-[env(safe-area-inset-top)] transition-all duration-300 ease-out sm:hidden ${
          mobileMenuOpen
            ? "translate-x-0 opacity-100"
            : "translate-x-full opacity-0 pointer-events-none"
        }`}
      >
        {/* Close button */}
        <button
          type="button"
          onClick={closeMobileMenu}
          aria-label="Close menu"
          className="absolute right-6 top-8 flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20"
        >
          <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
        <div className="flex flex-1 flex-col items-center justify-center gap-8 px-8 py-20">
          {NAV_LINKS.map(({ label }) => (
            <a
              key={label}
              href="#"
              onClick={closeMobileMenu}
              style={{ fontFamily: "anybody", fontWeight: 400 }}
              className="text-2xl tracking-wider text-white transition-opacity hover:opacity-80"
            >
              {label}
            </a>
          ))}
          <a
            href="#"
            onClick={closeMobileMenu}
            className="font-anybody mt-4 rounded-full border-none bg-white px-10 py-4 text-lg font-medium text-[var(--btn-dark-text)] shadow-lg"
          >
            Get in touch
          </a>
        </div>
      </div>

      {/* Hero content */}
      <div className="flex flex-1 flex-col items-center justify-center px-4 pb-16 text-center sm:px-6 sm:pb-20 md:px-10">
        <h1
          ref={headingRef}
          style={{ fontWeight: 300 }}
          className="font-anybody max-w-5xl leading-[1.15] tracking-wide text-[var(--text-primary)] text-[clamp(1.75rem,9vw,3rem)] sm:text-[clamp(2.5rem,5vw,4rem)] md:text-[clamp(3.5rem,6vw,5rem)] lg:text-[60px] xl:text-[72px]"
        >
          <span ref={line1Ref} className="block overflow-hidden" style={{ clipPath: "inset(0 0 0 0)" }}>
            {HERO_WORDS.line1.map((w) => (
              <span key={w} className="hero-word inline-block pr-[0.25em]">
                {w}
              </span>
            ))}
          </span>
          <span ref={line2Ref} className="block overflow-hidden" style={{ clipPath: "inset(0 0 0 0)" }}>
            {HERO_WORDS.line2.map((w) => (
              <span key={w} className="hero-word inline-block pr-[0.25em]">
                {w}
              </span>
            ))}
          </span>
          <span ref={line3Ref} className="block overflow-hidden" style={{ clipPath: "inset(0 0 0 0)" }}>
            {HERO_WORDS.line3.map((w) => (
              <span key={w} className="hero-word inline-block">
                {w}
              </span>
            ))}
          </span>
        </h1>

        <p
          ref={taglineRef}
          style={{ fontWeight: 400 }}
          className="kite-one-regular mt-4 max-w-2xl text-sm leading-relaxed tracking-wide text-[#fff] sm:mt-6 sm:text-base md:text-lg"
        >
          <span
            ref={taglineClipRef}
            className="inline-block overflow-hidden"
            style={{ clipPath: "inset(0 0 0 0)" }}
          >
            We build advanced, secure, and scalable solutions
            <br className="hidden sm:block" />
            for forward-thinking companies.
          </span>
        </p>

        <div
          ref={buttonsRef}
          className="mt-8 flex w-full max-w-sm flex-col gap-3 sm:mt-10 sm:max-w-none sm:flex-row justify-center sm:gap-5"
        >
          <a
            ref={btn1Ref}
            href="#"
            style={{ fontWeight: 400 }}
            className="font-anybody inline-flex min-h-[48px] items-center justify-center rounded-full border-none bg-[var(--btn-light-bg)] px-6 py-3.5 text-sm font-thin tracking-wide text-black shadow-lg transition-all hover:brightness-105 hover:shadow-xl sm:min-h-0 sm:px-7 sm:text-base"
          >
            View Services
          </a>
          <a
            ref={btn2Ref}
            href="#"
            style={{ fontWeight: 400 }}
            className="font-anybody inline-flex min-h-[48px] items-center justify-center gap-2 rounded-full border border-white/25 bg-transparent px-6 py-3.5 text-sm font-thin tracking-wide text-[var(--text-primary)] backdrop-blur-sm transition-colors hover:border-white/40 sm:min-h-0 sm:px-7 sm:text-base"
          >
            Get In Touch
            <span className="h-2 w-2 rounded-full bg-white" aria-hidden />
          </a>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
