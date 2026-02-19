import * as React from "react";

interface Slide4Props extends React.HTMLAttributes<HTMLDivElement> {
  scrollProgress?: number;
}

// Synced with metro: both 0.94→0.96. WINDOW = 1/39 so last building completes exactly at cityProgress=1.
const TOTAL_ELEMENTS = 39;
const WINDOW = 1 / TOTAL_ELEMENTS; // ~0.0256; all 39 elements fit in 0–1, last completes at 0.96
const SLIDE_DIST = 400; // SVG units to slide up from

function easeOut(t: number): number {
  return 1 - Math.pow(1 - t, 3);
}

// id -> data-anim number (from city-scroll.html)
const ID_TO_ANIM: Record<string, number> = {
  "lamp-post-1": 1,
  "lamp-post-2": 2,
  "lamp-post-3": 3,
  "lamp-post-4": 4,
  "shrub-1": 5,
  "shrub-2": 6,
  "building-1": 7,
  "billboard-1": 8,
  "building-2": 9,
  "building-3": 10,
  "building-4": 11,
  "building-5": 12,
  "billboard-2": 13,
  "lamp-post-5": 14,
  "shrub-3": 15,
  "lamp-post-6": 16,
  "building-6": 17,
  "building-7": 18,
  "building-8": 19,
  "lamp-post-7": 20,
  "billboard-3": 21,
  "shrub-4": 22,
  "building-9": 23,
  "building-10": 24,
  "building-11": 25,
  "building-12": 26,
  "building-16": 27,
  "building-17": 28,
  "lamp-post-8": 29,
  "lamp-post-9": 30,
  "lamp-post-10": 31,
  "shrub-5": 32,
  "building-13": 33,
  "building-14": 34,
  "building-15": 35,
  "billboard-4": 36,
  "billboard-5": 37,
  "lamp-post-11": 38,
  "lamp-post-12": 39,
};

// Synced with metro: both 0.94→0.96. Train and last building finish together.
const CITY_START = 0.94;
const CITY_END = 0.96;

const Slide4: React.FC<Slide4Props> = React.memo(({ scrollProgress = 0, ...props }) => {
  const objectRef = React.useRef<HTMLObjectElement>(null);
  const [svgReady, setSvgReady] = React.useState(false);

  // City progress 0–1 over the metro section scroll range
  const cityProgress =
    scrollProgress < CITY_START ? 0 : Math.min(1, (scrollProgress - CITY_START) / (CITY_END - CITY_START));

  // Apply animations to SVG elements when document is ready and scroll changes
  React.useEffect(() => {
    const doc = objectRef.current?.contentDocument;
    if (!doc) return;

    Object.entries(ID_TO_ANIM).forEach(([id, n]) => {
      const el = doc.getElementById(id) as SVGGElement | null;
      if (!el) return;

      const triggerAt = (n - 1) / TOTAL_ELEMENTS;
      const raw = (cityProgress - triggerAt) / WINDOW;
      const t = easeOut(Math.max(0, Math.min(1, raw)));

      el.style.transform = `translateY(${SLIDE_DIST * (1 - t)}px)`;
      el.style.opacity = t > 0.01 ? "1" : "0";
    });
  }, [cityProgress, svgReady]);

  const handleLoad = React.useCallback(() => {
    setSvgReady(true);
  }, []);

  // Hidden until metro section; no need to render before
  if (scrollProgress < CITY_START - 0.02) return null;

  return (
    <div
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        opacity: scrollProgress >= CITY_START ? 1 : 0,
        transition: "opacity 0.2s ease-out",
        pointerEvents: "none",
      }}
      {...props}
    >
      <object
        ref={objectRef}
        data="/SLIDE5.svg"
        type="image/svg+xml"
        onLoad={handleLoad}
        style={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
          objectPosition: "center",
        }}
        aria-hidden
      />
    </div>
  );
});

Slide4.displayName = "Slide4";

export default Slide4;
