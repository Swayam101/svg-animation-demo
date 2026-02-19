import * as React from "react";

interface Slide3Props extends React.SVGProps<SVGSVGElement> {
  scrollProgress?: number;
}

// Computed once at module load — never re-runs on scroll
const SLIDE3_SCOPED_CSS = (
  "\n      .cls-1 {\n        fill: #152d69;\n      }\n\n      .cls-2 {\n        fill: #4874cb;\n      }\n\n      .cls-3 {\n        fill: #68423e;\n      }\n\n      .cls-4 {\n        fill: url(#linear-gradient-2);\n      }\n\n      .cls-5 {\n        fill: #8090b3;\n      }\n\n      .cls-6 {\n        fill: #0d1a44;\n      }\n\n      .cls-7 {\n        fill: #00123f;\n      }\n\n      .cls-8 {\n        mask: url(#mask-1);\n      }\n\n      .cls-9 {\n        fill: #183577;\n      }\n\n      .cls-10 {\n        fill: url(#linear-gradient-10);\n      }\n\n      .cls-11 {\n        fill: #6d7fa8;\n      }\n\n      .cls-12 {\n        fill: #304a83;\n      }\n\n      .cls-13 {\n        fill: #143172;\n      }\n\n      .cls-14 {\n        fill: #212f3e;\n      }\n\n      .cls-15 {\n        fill: #040d2a;\n      }\n\n      .cls-16 {\n        stroke-width: 11px;\n      }\n\n      .cls-16, .cls-17, .cls-18, .cls-19, .cls-20, .cls-21, .cls-22, .cls-23, .cls-24, .cls-25, .cls-26, .cls-27 {\n        stroke-miterlimit: 10;\n      }\n\n      .cls-16, .cls-18, .cls-20, .cls-21, .cls-22, .cls-24, .cls-26, .cls-27 {\n        fill: none;\n      }\n\n      .cls-16, .cls-20, .cls-21, .cls-24, .cls-27 {\n        stroke: #00123f;\n      }\n\n      .cls-28 {\n        fill: #1a2c41;\n      }\n\n      .cls-29 {\n        fill: url(#linear-gradient-13);\n      }\n\n      .cls-29, .cls-30 {\n        opacity: .73;\n      }\n\n      .cls-31 {\n        fill: #2d3252;\n      }\n\n      .cls-32 {\n        fill: #223e7a;\n      }\n\n      .cls-33 {\n        mask: url(#mask);\n      }\n\n      .cls-17 {\n        fill: #844c38;\n        stroke: #734a44;\n      }\n\n      .cls-34 {\n        fill: #7082a9;\n      }\n\n      .cls-35 {\n        fill: #81735e;\n      }\n\n      .cls-36 {\n        fill: #2b4680;\n      }\n\n      .cls-37 {\n        fill: #354e86;\n      }\n\n      .cls-38 {\n        fill: #2e4882;\n      }\n\n      .cls-39 {\n        filter: url(#luminosity-noclip-2);\n      }\n\n      .cls-40 {\n        fill: url(#linear-gradient-4);\n      }\n\n      .cls-18 {\n        stroke: #604405;\n      }\n\n      .cls-30 {\n        fill: url(#linear-gradient-12);\n      }\n\n      .cls-19 {\n        fill: #e9c064;\n        stroke: #5f451b;\n      }\n\n      .cls-41 {\n        fill: #98947f;\n      }\n\n      .cls-42 {\n        fill: #2b3439;\n      }\n\n      .cls-43 {\n        mask: url(#mask-2);\n      }\n\n      .cls-44 {\n        filter: url(#luminosity-noclip-3);\n      }\n\n      .cls-45 {\n        fill: #5d7292;\n      }\n\n      .cls-46 {\n        fill: url(#linear-gradient-3);\n      }\n\n      .cls-47 {\n        fill: url(#linear-gradient-5);\n      }\n\n      .cls-48 {\n        fill: #d5c2bf;\n      }\n\n      .cls-49 {\n        fill: #1f3155;\n      }\n\n      .cls-50 {\n        fill: #f9f9b7;\n      }\n\n      .cls-51 {\n        opacity: .06;\n      }\n\n      .cls-51, .cls-52 {\n        mix-blend-mode: screen;\n      }\n\n      .cls-53 {\n        fill: #663c32;\n      }\n\n      .cls-54 {\n        fill: #919173;\n      }\n\n      .cls-55, .cls-23 {\n        fill: #fff8e5;\n      }\n\n      .cls-56 {\n        isolation: isolate;\n      }\n\n      .cls-57 {\n        fill: #7284aa;\n      }\n\n      .cls-20 {\n        stroke-width: 16px;\n      }\n\n      .cls-58 {\n        fill: #8a735a;\n      }\n\n      .cls-21 {\n        stroke-width: 5px;\n      }\n\n      .cls-59 {\n        fill: #d7c4be;\n      }\n\n      .cls-60 {\n        fill: url(#linear-gradient-8);\n      }\n\n      .cls-61 {\n        fill: #152a43;\n      }\n\n      .cls-62 {\n        fill: #0d1c47;\n      }\n\n      .cls-63 {\n        fill: #c9a99a;\n      }\n\n      .cls-22, .cls-23 {\n        stroke: #7f5e33;\n      }\n\n      .cls-64 {\n        fill: #192a43;\n      }\n\n      .cls-65 {\n        fill: #857460;\n      }\n\n      .cls-66 {\n        fill: #0d1b48;\n      }\n\n      .cls-67 {\n        fill: #7f5e33;\n      }\n\n      .cls-68 {\n        fill: #ac8e72;\n      }\n\n      .cls-69 {\n        fill: #1d3a78;\n      }\n\n      .cls-70 {\n        fill: #412c3b;\n      }\n\n      .cls-71 {\n        fill: #20346f;\n      }\n\n      .cls-24 {\n        stroke-width: 7px;\n      }\n\n      .cls-72 {\n        fill: url(#linear-gradient-7);\n      }\n\n      .cls-73 {\n        fill: #27427d;\n      }\n\n      .cls-74 {\n        fill: #181d3a;\n      }\n\n      .cls-75 {\n        fill: url(#linear-gradient-9);\n      }\n\n      .cls-76 {\n        fill: #24407c;\n      }\n\n      .cls-77 {\n        fill: #6b7da6;\n      }\n\n      .cls-78 {\n        fill: url(#linear-gradient-11);\n      }\n\n      .cls-79 {\n        fill: #e0d0c3;\n      }\n\n      .cls-80 {\n        fill: #324c84;\n      }\n\n      .cls-81 {\n        fill: #172a43;\n      }\n\n      .cls-82 {\n        fill: url(#linear-gradient-6);\n      }\n\n      .cls-83 {\n        fill: #faf3c9;\n      }\n\n      .cls-84 {\n        fill: #0d224f;\n      }\n\n      .cls-85 {\n        fill: #41414b;\n      }\n\n      .cls-86 {\n        fill: #3b4066;\n      }\n\n      .cls-25 {\n        fill: #debd87;\n      }\n\n      .cls-25, .cls-26 {\n        stroke: #332704;\n      }\n\n      .cls-87 {\n        fill: #6175a1;\n      }\n\n      .cls-88 {\n        fill: #29447f;\n      }\n\n      .cls-89 {\n        fill: #040b27;\n      }\n\n      .cls-90 {\n        fill: #3f2d39;\n      }\n\n      .cls-91 {\n        fill: #81735f;\n      }\n\n      .cls-92 {\n        fill: #2c4a80;\n      }\n\n      .cls-93 {\n        fill: #826f4f;\n      }\n\n      .cls-94 {\n        fill: #bcac71;\n      }\n\n      .cls-95 {\n        fill: url(#linear-gradient);\n      }\n\n      .cls-96 {\n        fill: #4f2f34;\n      }\n\n      .cls-97 {\n        fill: #8796b7;\n      }\n\n      .cls-98 {\n        fill: #784a3a;\n      }\n\n      .cls-99 {\n        fill: #215682;\n      }\n\n      .cls-27 {\n        stroke-width: 13px;\n      }\n\n      .cls-100 {\n        fill: #5f739f;\n      }\n\n      .cls-101 {\n        fill: #6d4038;\n      }\n\n      .cls-52 {\n        opacity: .46;\n      }\n\n      .cls-102 {\n        fill: #1e2657;\n      }\n\n      .cls-103 {\n        filter: url(#luminosity-noclip);\n      }\n    "
).replace(/\.cls-/g, '#slide3-svg .cls-');

const Slide3: React.FC<Slide3Props> = React.memo(({ scrollProgress = 0, ...props }) => {

  // Mount as soon as Phase 2 curtain starts rising (0.65) so it's ready underneath
  if (scrollProgress < 0.65) return null;

  // Entry animations run during curtain HOLD (0.70 → 0.84).
  // Exit synced with MountainCoverUp: starts when mountain is up (0.94), ends just before mountain exits (0.96).
  const EXIT_START = 0.94;
  const EXIT_END = 0.95; // ends before mountain exit completes at 0.96

  // Helper: translateY from `from` px down to 0 (entry), then 0 to `from` (exit)
  const growUp = (s: number, e: number, from: number) => {
    if (scrollProgress < s) return from;
    if (scrollProgress <= e) return from * (1 - (scrollProgress - s) / (e - s));
    if (scrollProgress < EXIT_START) return 0;
    if (scrollProgress <= EXIT_END) return from * (scrollProgress - EXIT_START) / (EXIT_END - EXIT_START);
    return from;
  };
  // Helper: fade in (entry), fade out (exit)
  const fadeIn = (s: number, e: number) => {
    if (scrollProgress < s) return 0;
    if (scrollProgress <= e) return (scrollProgress - s) / (e - s);
    if (scrollProgress < EXIT_START) return 1;
    if (scrollProgress <= EXIT_END) return 1 - (scrollProgress - EXIT_START) / (EXIT_END - EXIT_START);
    return 0;
  };

  // Wave 1 — bottom ground
  const bottomGroundY = growUp(0.70, 0.76, 500);

  // Wave 2 — houses
  const leftHouseY   = growUp(0.71, 0.77, 700);
  const middleHouseY = growUp(0.72, 0.78, 750);
  const rightHouseY  = growUp(0.73, 0.79, 700);

  // Wave 3 — construction structures
  const buildingY  = growUp(0.71, 0.77, 800);
  const rebarY     = growUp(0.72, 0.78, 700);
  const workerY    = growUp(0.73, 0.79, 700);

  // Wave 4 — box groups (staggered 0.01 apart)
  const box1Y = growUp(0.72, 0.78, 700);
  const box2Y = growUp(0.73, 0.79, 700);
  const box3Y = growUp(0.74, 0.80, 700);
  const box4Y = growUp(0.75, 0.81, 700);
  const box5Y = growUp(0.73, 0.79, 650);
  const box6Y = growUp(0.74, 0.80, 650);
  const box7Y = growUp(0.75, 0.81, 650);

  // Wave 5 — lanterns (translate + fade)
  const lantern1Y = growUp(0.74, 0.80, 500);
  const lantern1O = fadeIn(0.74, 0.80);
  const lantern2Y = growUp(0.75, 0.81, 500);
  const lantern2O = fadeIn(0.75, 0.81);
  const lantern3Y = growUp(0.76, 0.82, 500);
  const lantern3O = fadeIn(0.76, 0.82);

  // Wave 6 — computer table
  const computerTableY = growUp(0.75, 0.81, 600);

  return (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 1542.68 1024.85"
    preserveAspectRatio="xMidYMid slice"
    style={{
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
    }}
    id="slide3-svg"
    {...props}
  >
    <defs>
      <style>{SLIDE3_SCOPED_CSS}</style>
      <linearGradient
        id="linear-gradient"
        x1={789.35}
        y1={379.97}
        x2={789.35}
        y2={73.07}
        gradientUnits="userSpaceOnUse"
      >
        <stop offset={0} stopColor="#3961c0" />
        <stop offset={1} stopColor="#22417f" />
      </linearGradient>
      <linearGradient
        id="linear-gradient-3"
        x1={771.34}
        y1={445.3}
        x2={771.34}
        y2={101.2}
        gradientUnits="userSpaceOnUse"
      >
        <stop offset={0} stopColor="#5081c9" />
        <stop offset={1} stopColor="#2c50ae" />
      </linearGradient>
      <linearGradient
        id="linear-gradient-5"
        x1={745.69}
        y1={491.77}
        x2={745.69}
        y2={265.41}
        gradientTransform="translate(1517.03) rotate(-180) scale(1 -1)"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset={0} stopColor="#162d57" />
        <stop offset={1} stopColor="#416cc8" />
      </linearGradient>
      <linearGradient
        id="linear-gradient-6"
        x1={750.79}
        y1={488.29}
        x2={750.79}
        y2={400.87}
        gradientTransform="translate(1522.13) rotate(-180) scale(1 -1)"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset={0} stopColor="#244393" />
        <stop offset={1} stopColor="#416cc8" />
      </linearGradient>
      <linearGradient
        id="linear-gradient-7"
        x1={771.34}
        y1={499.53}
        x2={771.34}
        y2={742.27}
        gradientUnits="userSpaceOnUse"
      >
        <stop offset={0.2} stopColor="#162d57" />
        <stop offset={0.31} stopColor="#1b3465" />
        <stop offset={0.51} stopColor="#29498a" />
        <stop offset={0.8} stopColor="#406ac5" />
        <stop offset={0.81} stopColor="#416cc8" />
      </linearGradient>
      <linearGradient
        id="linear-gradient-9"
        x1={599.17}
        y1={573.99}
        x2={599.17}
        y2={500.71}
        gradientUnits="userSpaceOnUse"
      >
        <stop offset={0} stopColor="#fff" />
        <stop offset={0.12} stopColor="#fff" stopOpacity={0.77} />
        <stop offset={0.24} stopColor="#fff" stopOpacity={0.57} />
        <stop offset={0.37} stopColor="#fff" stopOpacity={0.4} />
        <stop offset={0.5} stopColor="#fff" stopOpacity={0.25} />
        <stop offset={0.62} stopColor="#fff" stopOpacity={0.14} />
        <stop offset={0.75} stopColor="#fff" stopOpacity={0.06} />
        <stop offset={0.88} stopColor="#fff" stopOpacity={0.02} />
        <stop offset={1} stopColor="#fff" stopOpacity={0} />
      </linearGradient>
      <linearGradient
        id="linear-gradient-10"
        x1={370.03}
        y1={540.73}
        x2={370.03}
        y2={435.13}
        href="#linear-gradient-9"
      />
      <linearGradient
        id="linear-gradient-11"
        x1={201.86}
        y1={554.84}
        x2={201.86}
        y2={458.84}
        href="#linear-gradient-9"
      />
      <filter
        id="luminosity-noclip"
        x={463.34}
        y={442.52}
        width={132}
        height={130}
        colorInterpolationFilters="sRGB"
        filterUnits="userSpaceOnUse"
      >
        <feFlood floodColor="#fff" result="bg" />
        <feBlend in="SourceGraphic" in2="bg" />
      </filter>
      <mask
        id="mask"
        x={463.34}
        y={442.52}
        width={132}
        height={130}
        maskUnits="userSpaceOnUse"
      >
        <g className="cls-103">
          <image
            width={132}
            height={130}
            transform="translate(463.34 442.52)"
            href="data:image/png;base64,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"
          />
        </g>
      </mask>
      <filter
        id="luminosity-noclip-2"
        x={661.34}
        y={496.52}
        width={123}
        height={122}
        colorInterpolationFilters="sRGB"
        filterUnits="userSpaceOnUse"
      >
        <feFlood floodColor="#fff" result="bg" />
        <feBlend in="SourceGraphic" in2="bg" />
      </filter>
      <mask
        id="mask-1"
        x={661.34}
        y={496.52}
        width={123}
        height={122}
        maskUnits="userSpaceOnUse"
      >
        <g className="cls-39">
          <image
            width={123}
            height={122}
            transform="translate(661.34 496.52)"
            href="data:image/png;base64,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"
          />
        </g>
      </mask>
      <filter
        id="luminosity-noclip-3"
        x={46.34}
        y={430.52}
        width={147}
        height={139}
        colorInterpolationFilters="sRGB"
        filterUnits="userSpaceOnUse"
      >
        <feFlood floodColor="#fff" result="bg" />
        <feBlend in="SourceGraphic" in2="bg" />
      </filter>
      <mask
        id="mask-2"
        x={46.34}
        y={430.52}
        width={147}
        height={139}
        maskUnits="userSpaceOnUse"
      >
        <g className="cls-44">
          <image
            width={147}
            height={139}
            transform="translate(46.34 430.52)"
            href="data:image/png;base64,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"
          />
        </g>
      </mask>
      <linearGradient
        id="linear-gradient-12"
        x1={663.3}
        y1={188.56}
        x2={663.3}
        y2={19.18}
        gradientUnits="userSpaceOnUse"
      >
        <stop offset={0} stopColor="#faf3c9" />
        <stop offset={0.05} stopColor="#faf3cd" stopOpacity={0.92} />
        <stop offset={0.2} stopColor="#fbf6da" stopOpacity={0.68} />
        <stop offset={0.35} stopColor="#fcf9e5" stopOpacity={0.47} />
        <stop offset={0.49} stopColor="#fdfbee" stopOpacity={0.3} />
        <stop offset={0.63} stopColor="#fefcf5" stopOpacity={0.17} />
        <stop offset={0.77} stopColor="#fefefa" stopOpacity={0.08} />
        <stop offset={0.89} stopColor="#fefefd" stopOpacity={0.02} />
        <stop offset={1} stopColor="#fff" stopOpacity={0} />
      </linearGradient>
      <linearGradient
        id="linear-gradient-13"
        x1={963.7}
        y1={232.98}
        x2={963.7}
        y2={136.07}
        href="#linear-gradient-12"
      />

      {/* ── Smoke wave filters (one per chimney, desynchronised) ── */}
      <filter id="smoke-wave-right" x="-30%" y="-30%" width="160%" height="160%">
        <feTurbulence type="fractalNoise" baseFrequency="0.01 0.03" numOctaves={1} result="turb-r" seed={1}>
          <animate attributeName="baseFrequency" values="0.01 0.03;0.01 0.05;0.01 0.03" dur="4s" repeatCount="indefinite" calcMode="spline" keySplines="0.45 0 0.55 1;0.45 0 0.55 1" />
          <animate attributeName="seed" values="1;80" dur="4s" repeatCount="indefinite" calcMode="discrete" />
        </feTurbulence>
        <feDisplacementMap in="SourceGraphic" in2="turb-r" scale={8} xChannelSelector="R" yChannelSelector="G">
          <animate attributeName="scale" values="8;13;8" dur="3s" repeatCount="indefinite" calcMode="spline" keySplines="0.45 0 0.55 1;0.45 0 0.55 1" />
        </feDisplacementMap>
      </filter>

      <filter id="smoke-wave-middle" x="-30%" y="-30%" width="160%" height="160%">
        <feTurbulence type="fractalNoise" baseFrequency="0.01 0.03" numOctaves={1} result="turb-m" seed={5}>
          <animate attributeName="baseFrequency" values="0.01 0.03;0.01 0.05;0.01 0.03" dur="3.5s" begin="1.3s" repeatCount="indefinite" calcMode="spline" keySplines="0.45 0 0.55 1;0.45 0 0.55 1" />
          <animate attributeName="seed" values="5;85" dur="3.5s" begin="1.3s" repeatCount="indefinite" calcMode="discrete" />
        </feTurbulence>
        <feDisplacementMap in="SourceGraphic" in2="turb-m" scale={8} xChannelSelector="R" yChannelSelector="G">
          <animate attributeName="scale" values="8;13;8" dur="2.5s" begin="1s" repeatCount="indefinite" calcMode="spline" keySplines="0.45 0 0.55 1;0.45 0 0.55 1" />
        </feDisplacementMap>
      </filter>

      <filter id="smoke-wave-left" x="-30%" y="-30%" width="160%" height="160%">
        <feTurbulence type="fractalNoise" baseFrequency="0.01 0.03" numOctaves={1} result="turb-l" seed={10}>
          <animate attributeName="baseFrequency" values="0.01 0.03;0.01 0.05;0.01 0.03" dur="4.5s" begin="0.7s" repeatCount="indefinite" calcMode="spline" keySplines="0.45 0 0.55 1;0.45 0 0.55 1" />
          <animate attributeName="seed" values="10;90" dur="4.5s" begin="0.7s" repeatCount="indefinite" calcMode="discrete" />
        </feTurbulence>
        <feDisplacementMap in="SourceGraphic" in2="turb-l" scale={8} xChannelSelector="R" yChannelSelector="G">
          <animate attributeName="scale" values="8;13;8" dur="3.5s" begin="0.5s" repeatCount="indefinite" calcMode="spline" keySplines="0.45 0 0.55 1;0.45 0 0.55 1" />
        </feDisplacementMap>
      </filter>
    </defs>
    <g
      className="cls-56"
      style={{}}
      transform="matrix(0.8, 0, 0, 0.8, 200, 100)"
    >
      <g id="Layer_2" data-name="Layer 2">
        <g id="Layer_1-2" data-name="Layer 1">
          <g>
            <path
            id="bottom-ground"
              style={{ transform: `translateY(${bottomGroundY}px)`, transition: 'transform 0.1s ease-out' }}
              className="cls-62"
              d="M5.07,943.93c2.28-13.91,6.3-18.26,10.38-18.64,5.89-.55,12.84,7.05,16.68,5.89,2.66-.8-.03-4.64,4.09-6.91,2.62-1.45,7.14-1.78,10.55-.81,4.73,1.34,5.58,4.69,5.79,5.49,1.22,4.76-4.45,8.89-3.93,9.09.73.27,8.07-9.2,14.48-8.68,3.92.31,7.4,4.34,6.47,7.52-1.02,3.46-7.17,5.64-6.81,5.89.44.31,7.71-4.11,11.57-3.05,2.52.69,2.82,3.5,2.72,5.59,6.86,3.05,17.65,7.06,32.17,9.6,21.87,3.83,40.6,2.29,50.21,1.07,1.83-.29,7.96-1.13,13.62.81,7.12,2.44,10.64,8.29,7.83,14.22,2.58-.84,31.4-10.03,44.77-3.15,1.1.57,2.14,1.27,3.06,2.13,34.73-5.5,79.3-10.05,130.98-9.14,18.77.33,36.28,1.34,52.34,2.74.29-1.29,1.07-3.27,3.57-4.88,5.89-3.77,14.62-1.16,20.94-4.88,3.69-2.17,1.73-3.65,6.64-7.01.47-.32,4.53-3.05,9.7-4.27,8.28-1.94,18.98.1,27.57,4.72.36-.13,6.6-2.28,13.02-.3,4.56,1.41,7.36,4.33,7.15,7.47,7.77.06,14.11-.92,19.32-2.54,8.05-2.5,10.08-5.47,15.66-5.28,5.61.19,5.69,3.26,14.3,5.08,6.82,1.44,10.12.23,13.62,2.03,3.41,1.76,3.89,4.79,3.74,7.11,3.17-.93,7.84-1.94,13.28-1.63,5.06.29,7.61,1.53,11.91,2.44,8.85,1.86,16.71.51,20.77.1,23.7-2.41,93.5,9.15,163.91,5.49,37.29-1.94,31.78-5.92,79.66-9.14,39.99-2.7,73.41-1.92,96-.76.73-3.33,2.72-4.62,4.34-5.18,3.25-1.13,6.61.08,8.43-1.22,1.79-1.28-.51-3.14,1.53-4.57,1-.71,2.4-.85,4.6-1.07,5.37-.54,9.92.68,11.23,1.07,3.26.95,3.01,1.52,4.85,1.68,3.68.31,5.3-1.91,10.21-3.2,3.51-.92,9.8-1.66,13.79.15,3.85,1.75,4.95,5.59,2.81,9.45,3.83-3.71,10.18-8.42,19.91-10.06,9.28-1.56,12.96,1.13,26.04,1.22,1.8.01,21.84,0,38.81-7.31,11.42-4.93,10.35-8.37,21.7-11.58,3.12-.88,7.78-1.92,23.23-2.74,17.41-.93,30.71-.65,32.68-.61,31.09.59,32.92-7.56,72-9.75,23.97-1.35,35.77,1.02,57.45-2.59,2.92-.49,9.7-1.69,19.91-3.2,11.88-1.75,21.74-2.93,28.34-3.66-.44-2.45.11-3.26.85-3.45,1.47-.38,3.75,1.64,5.28,1.22,1.54-.43.36-2.81,1.87-3.25,1.64-.47,4.44,1.91,5.62,1.52,1.61-.53-2.21-5.48-.34-6.2,1.47-.57,4.58,2.2,7.66,1.63,2.97-.55,3.11-3.69,5.45-3.76,1.25-.04,2.26.82,2.72,1.22,3.65,3.12,1.15,7.62,1.87,7.72.82.12,3.16-5.77,5.28-5.69,2.1.08,2.69,5.98,4.77,5.99,1.42.01,2.03-2.72,3.74-2.74,1.66-.02,1.92,2.53,4.26,3.35,4.18,1.48,12.93-3.3,16.34-4.88,12.82-5.92,29.63-3.25,53.62-1.83,15.45.91,37.26,1.51,64.85,0-.51,43.28-1.02,86.56-1.53,129.84l-1532.82-.73c.3-26.73.6-53.46.9-80.19Z"
            />
            <g id="right-house" style={{ transform: `translateY(${rightHouseY}px)`, transition: 'transform 0.1s ease-out' }}>
              <g>
                <animateTransform attributeName="transform" type="translate" additive="sum" values="0,0;0,-8;0,0" dur="5s" repeatCount="indefinite" calcMode="spline" keySplines="0.45 0 0.55 1;0.45 0 0.55 1" />
                <g>
                  <animateTransform attributeName="transform" type="translate" additive="sum" values="0,0;6,0;0,0" dur="6s" repeatCount="indefinite" calcMode="spline" keySplines="0.45 0 0.55 1;0.45 0 0.55 1" />
              <path
                    id="right-house-smoke"
                className="cls-75"
                    filter="url(#smoke-wave-right)"
                d="M560.24,500.71c21.58,6.74,26.69,12.39,26.7,16.57,0,4.78-6.65,7.45-5.65,10.98,1.76,6.21,23.88,3.16,25.21,8.58.96,3.92-10.08,7.67-9.35,12.73.94,6.57,20.73,8.58,20.4,11.76-.18,1.74-6.18,1.66-6.63,3.83-.5,2.42,6.22,5.91,12.99,8.84,2.91-1.46,6.45-3.67,6.24-5.98-.17-1.77-2.42-2.14-2.6-3.9-.32-3.17,7.2-4.48,7.54-8.58.19-2.28-1.92-4.2-2.73-4.94-3.79-3.45-8.48-2.05-9.06-3.61-1.06-2.83,14.41-7.57,14.81-13.84.31-4.87-9.51-10.11-38.2-19.98-16.48-5.67-30.23-9.79-39.66-12.47Z"
              />
                </g>
              </g>
              <line
                className="cls-19"
                x1={674.06}
                y1={649.09}
                x2={690.56}
                y2={649.22}
              />
              <rect
                className="cls-66"
                x={616.96}
                y={573.6}
                width={14.81}
                height={24.17}
              />
              <polygon
                className="cls-89"
                points="709.08 688.24 618.12 695.25 617.6 686.16 709.08 679.66 709.08 688.24"
              />
              <polygon
                className="cls-89"
                points="526.91 694.44 527.5 625.45 567.26 588.61 609.84 626.13 611.69 628.56 611.69 696.13 526.91 694.44"
              />
              <polyline
                className="cls-71"
                points="611.96 627.26 616.38 627.53 617.86 696.39 611.69 696.12 611.96 627.26"
              />
              <rect
                className="cls-74"
                x={655.54}
                y={628.95}
                width={16.18}
                height={54.57}
              />
              <polygon
                className="cls-86"
                points="708.36 680.8 668.21 683.33 668.21 628.56 708.56 628.56 708.36 680.8"
              />
              <polygon
                className="cls-31"
                points="657.3 684.78 617.15 687.42 616.11 629.34 657.69 628.95 657.3 684.78"
              />
              <path
                className="cls-84"
                d="M519.7,623.89l48.07-41.84,107.32,2.08,39.5,38.46v5.72l-102.65,1.04-44.7-40.73-39.76,36.84c-1.61,1.75-3.99,2.23-5.72,1.3-1.55-.84-1.99-2.5-2.08-2.86Z"
              />
              <polygon
                className="cls-9"
                points="611.69 623.11 714.6 622.59 675.1 584.13 567.78 582.05 611.69 623.11"
              />
              <g>
                <polygon
                  className="cls-19"
                  points="584.41 662.67 556.15 662.67 556.15 635.58 569.79 635.58 584.41 635.58 584.41 662.67"
                />
                <polyline
                  className="cls-18"
                  points="556.54 648.83 584.34 649.03 584.21 635.78 569.86 635.78 570.24 662.87"
                />
              </g>
              <polygon
                className="cls-19"
                points="649.21 665.11 627.67 665.11 627.67 636.56 637.81 636.56 649.21 636.56 649.21 665.11"
              />
              <rect
                className="cls-19"
                x={673.87}
                y={634.61}
                width={16.57}
                height={28.55}
              />
              <polyline
                className="cls-19"
                points="628.06 650.78 648.98 650.91 648.92 636.69 638.33 636.69 638.46 665.01 627.67 665.11"
              />
              <line
                className="cls-19"
                x1={682.64}
                y1={634.54}
                x2={682.51}
                y2={663}
              />
            </g>
            <g id="middle-house" style={{ transform: `translateY(${middleHouseY}px)`, transition: 'transform 0.1s ease-out' }}>
              <g>
                <animateTransform attributeName="transform" type="translate" additive="sum" values="0,0;0,-8;0,0" dur="4.5s" begin="2s" repeatCount="indefinite" calcMode="spline" keySplines="0.45 0 0.55 1;0.45 0 0.55 1" />
                <g>
                  <animateTransform attributeName="transform" type="translate" additive="sum" values="0,0;6,0;0,0" dur="5.5s" begin="1s" repeatCount="indefinite" calcMode="spline" keySplines="0.45 0 0.55 1;0.45 0 0.55 1" />
              <path
                    id="middle-house-smoke"
                className="cls-10"
                    filter="url(#smoke-wave-middle)"
                d="M313.93,435.13c31.1,9.71,38.46,17.85,38.48,23.87.01,6.88-9.59,10.74-8.14,15.82,2.54,8.94,34.41,4.55,36.32,12.36,1.39,5.64-14.52,11.05-13.48,18.35,1.35,9.47,29.87,12.36,29.4,16.94-.26,2.51-8.9,2.39-9.55,5.52-.72,3.48,8.97,8.52,18.72,12.73,4.19-2.11,9.3-5.29,8.99-8.61-.24-2.55-3.49-3.08-3.74-5.62-.46-4.56,10.37-6.46,10.86-12.36.27-3.28-2.77-6.06-3.93-7.11-5.46-4.97-12.23-2.96-13.06-5.2-1.52-4.08,20.77-10.9,21.34-19.94.44-7.01-13.7-14.56-55.05-28.79-23.75-8.17-43.57-14.1-57.15-17.97Z"
              />
                </g>
              </g>
              <line
                className="cls-19"
                x1={477.94}
                y1={648.95}
                x2={501.72}
                y2={649.14}
              />
              <rect
                className="cls-66"
                x={395.65}
                y={540.17}
                width={21.34}
                height={34.83}
              />
              <polygon
                className="cls-89"
                points="528.4 705.36 397.34 715.47 396.59 702.36 528.4 693 528.4 705.36"
              />
              <polygon
                className="cls-89"
                points="265.9 714.3 266.74 614.88 324.04 561.8 385.4 615.86 388.07 619.37 388.07 716.73 265.9 714.3"
              />
              <polyline
                className="cls-71"
                points="388.46 617.5 394.83 617.89 396.95 717.11 388.07 716.72 388.46 617.5"
              />
              <rect
                className="cls-74"
                x={451.26}
                y={619.93}
                width={23.31}
                height={78.64}
              />
              <polygon
                className="cls-86"
                points="527.37 694.64 469.52 698.29 469.52 619.37 527.65 619.37 527.37 694.64"
              />
              <polygon
                className="cls-31"
                points="453.79 700.38 395.93 704.19 394.44 620.48 454.35 619.93 453.79 700.38"
              />
              <path
                className="cls-84"
                d="M255.51,612.63l69.28-60.29,154.66,3,56.92,55.42v8.24l-147.92,1.5-64.41-58.7-57.29,53.08c-2.32,2.52-5.76,3.21-8.24,1.87-2.23-1.2-2.87-3.61-3-4.12Z"
              />
              <polygon
                className="cls-9"
                points="388.07 611.51 536.36 610.76 479.44 555.34 324.79 552.34 388.07 611.51"
              />
              <g>
                <polygon
                  className="cls-19"
                  points="348.75 668.52 308.03 668.52 308.03 629.48 327.69 629.48 348.75 629.48 348.75 668.52"
                />
                <polyline
                  className="cls-18"
                  points="308.59 648.58 348.66 648.86 348.47 629.76 327.78 629.76 328.34 668.8"
                />
              </g>
              <polygon
                className="cls-19"
                points="442.13 672.03 411.1 672.03 411.1 630.89 425.71 630.89 442.13 630.89 442.13 672.03"
              />
              <rect
                className="cls-19"
                x={477.66}
                y={628.08}
                width={23.87}
                height={41.14}
              />
              <polyline
                className="cls-19"
                points="411.66 651.39 441.81 651.58 441.71 631.07 426.45 631.07 426.64 671.89 411.1 672.03"
              />
              <line
                className="cls-19"
                x1={490.3}
                y1={627.98}
                x2={490.11}
                y2={668.99}
              />
            </g>
            <g id="left-house" style={{ transform: `translateY(${leftHouseY}px)`, transition: 'transform 0.1s ease-out' }}>
              <g>
                <animateTransform attributeName="transform" type="translate" additive="sum" values="0,0;0,-8;0,0" dur="5.5s" begin="0.5s" repeatCount="indefinite" calcMode="spline" keySplines="0.45 0 0.55 1;0.45 0 0.55 1" />
                <g>
                  <animateTransform attributeName="transform" type="translate" additive="sum" values="0,0;6,0;0,0" dur="6.5s" begin="1.8s" repeatCount="indefinite" calcMode="spline" keySplines="0.45 0 0.55 1;0.45 0 0.55 1" />
              <path
                    id="left-house-smoke"
                className="cls-78"
                    filter="url(#smoke-wave-left)"
                d="M150.85,458.84c28.27,8.83,34.97,16.23,34.98,21.7.01,6.26-8.72,9.76-7.4,14.38,2.31,8.13,31.28,4.14,33.02,11.23,1.26,5.13-13.2,10.05-12.26,16.68,1.23,8.61,27.16,11.23,26.72,15.4-.24,2.28-8.09,2.18-8.68,5.02-.66,3.17,8.15,7.75,17.02,11.57,3.81-1.92,8.46-4.81,8.17-7.83-.22-2.32-3.17-2.8-3.4-5.11-.42-4.15,9.43-5.87,9.87-11.23.25-2.99-2.52-5.5-3.57-6.47-4.96-4.52-11.11-2.69-11.87-4.72-1.38-3.71,18.88-9.91,19.4-18.13.4-6.38-12.45-13.24-50.04-26.17-21.59-7.43-39.61-12.82-51.96-16.34Z"
              />
                </g>
              </g>
              <line
                className="cls-19"
                x1={299.96}
                y1={653.22}
                x2={321.58}
                y2={653.39}
              />
              <rect
                className="cls-66"
                x={225.15}
                y={554.33}
                width={19.4}
                height={31.66}
              />
              <polygon
                className="cls-89"
                points="345.83 704.5 226.68 713.69 226 701.78 345.83 693.27 345.83 704.5"
              />
              <polygon
                className="cls-89"
                points="107.19 712.63 107.96 622.24 160.05 573.99 215.83 623.14 218.26 626.33 218.26 714.84 107.19 712.63"
              />
              <polyline
                className="cls-71"
                points="218.61 624.63 224.4 624.98 226.33 715.18 218.26 714.83 218.61 624.63"
              />
              <rect
                className="cls-74"
                x={275.71}
                y={626.84}
                width={21.19}
                height={71.49}
              />
              <polygon
                className="cls-86"
                points="344.9 694.75 292.3 698.07 292.3 626.33 345.15 626.33 344.9 694.75"
              />
              <polygon
                className="cls-31"
                points="278 699.97 225.41 703.44 224.05 627.34 278.51 626.84 278 699.97"
              />
              <path
                className="cls-84"
                d="M97.75,620.2l62.98-54.81,140.6,2.72,51.74,50.38v7.49l-134.47,1.36-58.55-53.36-52.09,48.26c-2.11,2.29-5.23,2.92-7.49,1.7-2.02-1.09-2.61-3.28-2.72-3.74Z"
              />
              <polygon
                className="cls-9"
                points="218.26 619.18 353.07 618.5 301.32 568.12 160.73 565.39 218.26 619.18"
              />
              <g>
                <polygon
                  className="cls-19"
                  points="182.51 671.01 145.49 671.01 145.49 635.52 163.36 635.52 182.51 635.52 182.51 671.01"
                />
                <polyline
                  className="cls-18"
                  points="146 652.88 182.43 653.14 182.26 635.78 163.45 635.78 163.96 671.27"
                />
              </g>
              <polygon
                className="cls-19"
                points="267.41 674.2 239.19 674.2 239.19 636.8 252.47 636.8 267.41 636.8 267.41 674.2"
              />
              <rect
                className="cls-19"
                x={299.71}
                y={634.24}
                width={21.7}
                height={37.4}
              />
              <polyline
                className="cls-19"
                points="239.71 655.44 267.11 655.61 267.02 636.97 253.15 636.97 253.32 674.07 239.19 674.2"
              />
              <line
                className="cls-19"
                x1={311.19}
                y1={634.16}
                x2={311.02}
                y2={671.44}
              />
            </g>
            <g id="lantern-1" style={{ transform: `translateY(${lantern1Y}px)`, opacity: lantern1O, transition: 'transform 0.1s ease-out, opacity 0.1s ease-out' }}>
              <rect
                className="cls-102"
                x={527.62}
                y={519.39}
                width={3.76}
                height={198.88}
              />
              <g>
                <path
                  className="cls-67"
                  d="M522.55,517.07l-.13,3.56c1.67.5,4.08,1.04,7,1.06,2.64.02,4.84-.37,6.44-.78-.06-1.24-.11-2.48-.17-3.72l-13.14-.12Z"
                />
                <g>
                  <g>
                    <image
                      className="cls-52"
                      width={159}
                      height={154}
                      transform="translate(450.31 431.49)"
                      href="data:image/png;base64,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"
                    />
                    <path
                      className="cls-55"
                      d="M518.51,501.44l3.2,15.72,15.68.32,3.58-15.79c-2.98-.71-6.85-1.35-11.39-1.39-4.39-.04-8.15.5-11.07,1.13Z"
                    />
                  </g>
                  <g className="cls-33">
                    <g className="cls-51">
                      <path
                        className="cls-50"
                        d="M592.31,496.99c0-2.42-.45-4.25-1-6.5-2.69-10.99-7.37-19.87-16-28.5-8.09-8.09-17.43-11.54-28-15.5h-5v-1h-26v1h-5c-12.04,4.52-23.74,9.07-32,19.5-3.01,3.8-6.47,9.42-8,14-1.52,4.56-3.3,9.11-4,14-1.28,8.98-1.33,18.99,0,28,.33,2.23,1.28,4.85,2,7,.72,2.15,1.06,4.94,2,7,2.2,4.83,5.34,9.86,9,14,4.12,4.66,8.69,8.95,14,12,4.49,2.59,9.39,4.2,14,6.5h5v1h6v1h21v-1h6v-1h4c5.54-2.77,11.4-4.18,16.5-7.75,5.47-3.83,11.02-8.21,14.5-13.75,5.58-8.88,10.18-17.66,11-28.5.34-4.53,1-9.01,1-14,0-2.9-1-4.63-1-7.5Z"
                      />
                      <path
                        className="cls-50"
                        d="M518.51,501.44l3.2,15.72,15.68.32,3.58-15.79c-2.98-.71-6.85-1.35-11.39-1.39-4.39-.04-8.15.5-11.07,1.13Z"
                      />
                    </g>
                  </g>
                </g>
                <path
                  className="cls-23"
                  d="M518.51,501.44l3.2,15.72,15.68.32,3.58-15.79c-2.98-.71-6.85-1.35-11.39-1.39-4.39-.04-8.15.5-11.07,1.13Z"
                />
                <line
                  className="cls-22"
                  x1={524.34}
                  y1={500.15}
                  x2={525.68}
                  y2={517.03}
                />
                <line
                  className="cls-22"
                  x1={532.34}
                  y1={500.28}
                  x2={531.76}
                  y2={517.16}
                />
              </g>
            </g>
            <g id="lantern-2" style={{ transform: `translateY(${lantern2Y}px)`, opacity: lantern2O, transition: 'transform 0.1s ease-out, opacity 0.1s ease-out' }}>
              <rect
                className="cls-102"
                x={721.45}
                y={565.5}
                width={3.24}
                height={131.32}
              />
              <g>
                <path
                  className="cls-67"
                  d="M717.06,563.97l-.11,2.35c1.44.33,3.52.68,6.04.7,2.28.02,4.18-.24,5.57-.51-.05-.82-.1-1.64-.15-2.46l-11.35-.08Z"
                />
                <g>
                  <g>
                    <image
                      className="cls-52"
                      width={156}
                      height={148}
                      transform="translate(645.31 484.49)"
                      href="data:image/png;base64,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"
                    />
                    <path
                      className="cls-55"
                      d="M713.58,553.64l2.76,10.38,13.54.21,3.1-10.43c-2.57-.47-5.92-.89-9.84-.92-3.79-.02-7.04.33-9.56.75Z"
                    />
                  </g>
                  <g className="cls-8">
                    <g className="cls-51">
                      <path
                        className="cls-50"
                        d="M780.81,544.49c-1.72-10.33-6.51-18.61-13-27-6.6-8.53-17.29-11.4-26.5-16h-5v-1h-8v-1h-11v1h-7v1h-5c-5.14,2.57-10.6,3.96-15.5,7-5.55,3.45-10.47,7.96-14.5,13-5.9,7.37-9.63,17.25-11,26.5-1.28,8.66.2,18.68,1.5,26.5.86,5.17,3.38,8.88,5.5,13.5,2.02,4.4,5.42,10.15,9.5,13.5,8.06,6.63,16.7,10.32,26.5,14h6v1h19v-1h6c11.14-4.18,22.95-8.21,30.5-18,11.75-15.24,15.26-33.43,12-53Z"
                      />
                      <path
                        className="cls-50"
                        d="M713.58,553.64l2.76,10.38,13.54.21,3.1-10.43c-2.57-.47-5.92-.89-9.84-.92-3.79-.02-7.04.33-9.56.75Z"
                      />
                    </g>
                  </g>
                </g>
                <path
                  className="cls-23"
                  d="M713.58,553.64l2.76,10.38,13.54.21,3.1-10.43c-2.57-.47-5.92-.89-9.84-.92-3.79-.02-7.04.33-9.56.75Z"
                />
                <line
                  className="cls-22"
                  x1={718.61}
                  y1={552.8}
                  x2={719.77}
                  y2={563.94}
                />
                <line
                  className="cls-22"
                  x1={725.52}
                  y1={552.88}
                  x2={725.02}
                  y2={564.03}
                />
              </g>
            </g>
            <g id="building-construction" xmlns="http://www.w3.org/2000/svg" style={{ transform: `translateY(${buildingY}px)`, transition: 'transform 0.1s ease-out' }}>
              <path
                className="cls-6"
                d="M1369.23,507.86v289.03h-160.34v-2.05h-253.27c.59-67.74,1.19-135.49,1.78-203.23h65.11v-85.79h178.21v-92.93h142.98v94.97h25.53Z"
              />
              <rect
                className="cls-1"
                x={1111.36}
                y={596.18}
                width={85.79}
                height={76.09}
              />
              <rect
                className="cls-1"
                x={1111.36}
                y={688.7}
                width={85.79}
                height={76.09}
              />
              <rect
                className="cls-1"
                x={960.22}
                y={596.18}
                width={85.79}
                height={76.09}
              />
    <rect className="cls-1" x={960.22} y={688.7} width={85.79} height={76.09} />
              <rect
                className="cls-1"
                x={1212.47}
                y={688.7}
                width={85.79}
                height={76.09}
              />
              <rect
                className="cls-1"
                x={1210.17}
                y={596.18}
                width={85.79}
                height={76.09}
              />
              <rect
                className="cls-1"
                x={1210.94}
                y={512.65}
                width={85.79}
                height={76.09}
              />
              <rect
                className="cls-1"
                x={1205.58}
                y={425.9}
                width={85.79}
                height={76.09}
              />
              <rect
                className="cls-1"
                x={1050.85}
                y={596.18}
                width={45.96}
                height={76.09}
              />
              <rect
                className="cls-1"
                x={1054.94}
                y={688.7}
                width={45.96}
                height={76.09}
              />
              <rect
                className="cls-1"
                x={1053.15}
                y={512.65}
                width={45.96}
                height={76.09}
              />
              <rect
                className="cls-1"
                x={1307.45}
                y={596.18}
                width={45.96}
                height={76.09}
              />
              <rect
                className="cls-1"
                x={1308.47}
                y={688.7}
                width={45.96}
                height={76.09}
              />
              <rect
                className="cls-1"
                x={1302.85}
                y={512.65}
                width={26.81}
                height={76.09}
              />
              <rect
                className="cls-1"
                x={1303.62}
                y={425.9}
                width={26.81}
                height={76.09}
              />
              <rect
                className="cls-1"
                x={1115.96}
                y={512.65}
                width={85.79}
                height={76.09}
              />
              <g>
                <rect
                  className="cls-25"
                  x={1115.71}
                  y={613.05}
                  width={23.23}
                  height={34.98}
                />
                <line
                  className="cls-26"
                  x1={1126.94}
                  y1={613.44}
                  x2={1126.81}
                  y2={648.16}
                />
                <line
                  className="cls-26"
                  x1={1115.83}
                  y1={630.92}
                  x2={1138.68}
                  y2={631.18}
                />
              </g>
              <g>
                <rect
                  className="cls-25"
                  x={1164.73}
                  y={612.71}
                  width={23.23}
                  height={34.98}
                />
                <line
                  className="cls-26"
                  x1={1175.96}
                  y1={613.09}
                  x2={1175.83}
                  y2={647.82}
                />
                <line
                  className="cls-26"
                  x1={1164.85}
                  y1={630.58}
                  x2={1187.71}
                  y2={630.84}
                />
              </g>
              <g>
                <rect
                  className="cls-25"
                  x={1231.45}
                  y={613.39}
                  width={28.51}
                  height={33.28}
                />
                <line
                  className="cls-26"
                  x1={1245.24}
                  y1={613.76}
                  x2={1245.08}
                  y2={646.8}
                />
                <line
                  className="cls-26"
                  x1={1231.61}
                  y1={630.4}
                  x2={1259.65}
                  y2={630.64}
                />
              </g>
              <g>
                <rect
                  className="cls-25"
                  x={1230.68}
                  y={526.07}
                  width={28.51}
                  height={33.28}
                />
                <line
                  className="cls-26"
                  x1={1244.47}
                  y1={526.44}
                  x2={1244.31}
                  y2={559.48}
                />
                <line
                  className="cls-26"
                  x1={1230.84}
                  y1={543.08}
                  x2={1258.88}
                  y2={543.32}
                />
              </g>
              <g>
                <rect
                  className="cls-25"
                  x={1164.05}
                  y={528.37}
                  width={28.51}
                  height={33.28}
                />
                <line
                  className="cls-26"
                  x1={1177.83}
                  y1={528.74}
                  x2={1177.67}
                  y2={561.78}
                />
                <line
                  className="cls-26"
                  x1={1164.2}
                  y1={545.38}
                  x2={1192.24}
                  y2={545.62}
                />
              </g>
              <rect
                className="cls-2"
                x={1052.13}
                y={526.75}
                width={12.77}
                height={22.47}
              />
              <rect
                className="cls-2"
                x={1066.94}
                y={526.75}
                width={12.77}
                height={22.47}
              />
              <rect
                className="cls-2"
                x={1067.45}
                y={612.03}
                width={12.77}
                height={22.47}
              />
              <rect
                className="cls-2"
                x={1050.09}
                y={612.03}
                width={12.77}
                height={22.47}
              />
            </g>
            <g id="lantern-3" style={{ transform: `translateY(${lantern3Y}px)`, opacity: lantern3O, transition: 'transform 0.1s ease-out, opacity 0.1s ease-out' }}>
              <rect
                className="cls-102"
                x={117.05}
                y={513.35}
                width={6.27}
                height={228.4}
              />
              <g>
                <path
                  className="cls-67"
                  d="M108.57,510.7l-.21,4.09c2.79.58,6.81,1.19,11.69,1.22,4.41.03,8.09-.42,10.76-.89-.09-1.42-.19-2.85-.29-4.27l-21.96-.14Z"
                />
                <g>
                  <g>
                    <image
                      className="cls-52"
                      width={175}
                      height={157}
                      transform="translate(33.31 422.49)"
                      href="data:image/png;base64,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"
                    />
                    <path
                      className="cls-55"
                      d="M101.83,492.74l5.35,18.06,26.2.37,5.99-18.13c-4.97-.82-11.44-1.56-19.03-1.6-7.33-.04-13.61.58-18.5,1.3Z"
                    />
                  </g>
                  <g className="cls-43">
                    <g className="cls-51">
                      <path
                        className="cls-50"
                        d="M189.31,483.99c-1.66-11.1-6.22-22.22-14.5-30.5-8.96-8.96-18.73-13.59-30.5-18h-4v-1h-6v-1h-28v1h-6v1h-5c-5.72,2.86-11.95,4.42-17.5,7.75-6.6,3.96-11.77,9.04-16.5,14.75-3.28,3.95-6.4,10.2-8,15-.88,2.65-1.11,5.34-2,8-.8,2.41-.57,4.3-1,7-.13.81-.84,1.85-1,3-.07.47,0,1.02,0,1.5v11c0,5.3.42,10.77,2,15.5,3.89,11.66,7.99,20.99,17.5,30.5,8.54,8.54,19.38,11.83,30.5,16h5v1h10v1h11v-1h10v-1h5c5.89-2.21,11.86-3.93,17.5-6.75,6.92-3.46,12.02-8.27,17.5-13.75,2.4-2.4,3.89-4.82,5.5-7.5.75-1.25,1.77-2.68,2.5-4,.62-1.13.49-2.38,1-3.5.66-1.45,1.49-2.48,2-4,.44-1.33.54-2.63,1-4,.75-2.26,1.23-4.68,2-7,.9-2.69.58-5.03,1-8,.38-2.67,1-4.56,1-7.5,0-5.17-1.27-10.6-2-15.5Z"
                      />
                      <path
                        className="cls-50"
                        d="M101.83,492.74l5.35,18.06,26.2.37,5.99-18.13c-4.97-.82-11.44-1.56-19.03-1.6-7.33-.04-13.61.58-18.5,1.3Z"
                      />
                    </g>
                  </g>
                </g>
                <path
                  className="cls-23"
                  d="M101.83,492.74l5.35,18.06,26.2.37,5.99-18.13c-4.97-.82-11.44-1.56-19.03-1.6-7.33-.04-13.61.58-18.5,1.3Z"
                />
                <line
                  className="cls-22"
                  x1={111.56}
                  y1={491.27}
                  x2={113.81}
                  y2={510.65}
                />
                <line
                  className="cls-22"
                  x1={124.93}
                  y1={491.41}
                  x2={123.97}
                  y2={510.8}
                />
              </g>
            </g>
            <g id="construction-worker-slide-3" style={{ transform: `translateY(${workerY}px)`, transition: 'transform 0.1s ease-out' }}>
              <path
                className="cls-63"
                d="M976.9,427.44s1.19-8.34,6.64-9.19l4.77.68c.08,1.69-.02,4.03-.85,6.64-.35,1.1-.77,2.07-1.19,2.89-3.12-.34-6.24-.68-9.36-1.02Z"
              />
              <path
                className="cls-7"
                d="M935.53,428.8c-.17-.92-1.28-.94-2.13-2.51-1.06-1.96-.64-4.32.05-6.24.02-.07.04-.13.04-.2.21-2.84.41-5.69.62-8.53.03-.41.37-.74.78-.76l15.54-.63c.35-.01.67.19.79.52l2.85,7.29c.42,1.09,2.7,7.26-.51,12.94-.98,1.73-2.22,2.97-3.28,3.81-.09.07-.16.16-.22.27-.19.38-.48,1.15-.34,2.13.13.86.53,1.48.83,1.84.16.18.38.29.62.3.7.02,1.64.09,2.72.34,4.32.97,5.17,3.04,7.32,3.06,2.62.03,3.96-3.1,8.51-8.85,2.51-3.17,4.79-5.61,6.35-7.2.18-.19.44-.27.7-.23,3.08.47,6.16.94,9.23,1.4.51.08.82.61.64,1.1-3.59,9.57-7.19,17.26-10.11,22.97-2.35,4.59-4.28,7.94-8.17,9.53-4.29,1.76-8.73.46-11.25-.58-.5-.21-1.06.14-1.11.68l-2.17,22.96c-.01.12-.05.23-.1.33l-.72,1.26c-.13.23-.14.51-.03.76l9.3,19.46c.98,2.06,1.44,4.33,1.33,6.61l-1.86,38.37c-.01.24-.12.46-.31.6-.25.2-.5.39-.75.59-.5.39-.4,1.19.19,1.41.7.26,1.52.72,2.21,1.51.49.56.79,1.14.98,1.62.15.38,0,.81-.37,1.01-1.44.79-3.68,1.77-6.57,2.13-2.71.34-4.98.02-6.49-.33-.27-.06-.48-.25-.57-.51-.24-.67-.5-1.68-.43-2.91.07-1.28.47-2.3.85-3.01.24-.44.01-.99-.46-1.15-.51-.17-1.03-.34-1.54-.51-.33-.11-.55-.41-.56-.76-.12-6.19-.08-12.67.18-19.43.15-3.91.37-7.73.65-11.44.02-.3-.12-.57-.37-.73-.99-.65-2.02-1.46-3-2.47-5.01-5.11-5.55-11.8-5.62-14.38-.17,15.74-.34,31.49-.51,47.23,0,.36,0,2.12-1.36,3.57-1.15,1.22-2.55,1.47-2.98,1.53.58-.13,2.06-.37,3.66.34,2.14.95,2.98,2.96,3.27,3.92.09.3,0,.63-.23.84-.12.11-.24.22-.36.33-.14.12-.31.2-.49.21l-16.64,1.19c-.5.04-.91-.38-.87-.87,1.33-15.63,1.55-33.78-.68-53.78-.86-7.75-2.02-15.09-3.36-21.98-.07-.38-.41-.66-.8-.66h0c-.55,0-.94-.54-.77-1.07,3.7-11.73,3.96-20.95,3.49-27.27-.54-7.28-2.12-11.6.77-16.09,4.14-6.44,14.15-8.07,13.62-10.89Z"
              />
              <path
                className="cls-94"
                d="M931.02,429.99s-8.64,4.91-10.47,13.79c-1.26,6.13.89,11.04,1.7,12.68,1.13.06,2.27.11,3.4.17-.61-1.09-3.03-5.71-1.7-11.66,1.34-5.99,5.54-9.15,6.55-9.87,5.65.4,11.29.79,16.94,1.19-1.76,1.62-6.95,6.81-8.34,15.32-1.01,6.19.48,11.17,1.36,13.53,1.56.57,3.12,1.13,4.68,1.7-1.17-2.47-2.7-6.6-2.68-11.83.04-10.49,6.3-17.56,8.04-19.4-1.4-1.35-3.76-3.27-7.15-4.6-5.41-2.11-10.24-1.45-12.34-1.02Z"
              />
              <path
                className="cls-94"
                d="M932.26,416.58c-.09-.51-1.06-6.67,3.53-11.11,3.34-3.22,8.32-4.26,12.81-2.68.46.12,4.79,1.28,6.51,5.57,1.02,2.55.6,4.88.24,6.1-.11.36.15.73.53.75.94.05,1.88.09,2.82.14.56.52.79,1.25.58,1.86-.14.41-.44.66-.6.77-8.95.35-17.89.71-26.84,1.06-.57.02-1.02-.46-.96-1.03.05-.47.1-.93.14-1.4.41-.01.82-.03,1.23-.04Z"
              />
            </g>
            <g id="rebar-structure-slide-3" style={{ transform: `translateY(${rebarY}px)`, transition: 'transform 0.1s ease-out' }}>
              <line
                className="cls-21"
                x1={869.83}
                y1={473.65}
                x2={1035.79}
                y2={472.12}
              />
              <g>
                <line
                  className="cls-24"
                  x1={926}
                  y1={461.65}
                  x2={930.09}
                  y2={789.48}
                />
                <line
                  className="cls-24"
                  x1={869.83}
                  y1={461.65}
                  x2={873.92}
                  y2={789.48}
                />
                <line
                  className="cls-24"
                  x1={966.85}
                  y1={461.65}
                  x2={970.94}
                  y2={789.48}
                />
                <line
                  className="cls-24"
                  x1={1005.66}
                  y1={461.65}
                  x2={1009.75}
                  y2={789.48}
                />
                <line
                  className="cls-20"
                  x1={889.24}
                  y1={368.71}
                  x2={893.32}
                  y2={789.48}
                />
                <line
                  className="cls-27"
                  x1={1018.94}
                  y1={457.82}
                  x2={1023.02}
                  y2={785.65}
                />
                <line
                  className="cls-24"
                  x1={867.79}
                  y1={461.65}
                  x2={871.88}
                  y2={789.48}
                />
                <line
                  className="cls-21"
                  x1={861.05}
                  y1={470.07}
                  x2={1027}
                  y2={468.54}
                />
                <line
                  className="cls-21"
                  x1={861.05}
                  y1={522.16}
                  x2={1027}
                  y2={520.63}
                />
                <line
                  className="cls-21"
                  x1={861.05}
                  y1={653.9}
                  x2={1027}
                  y2={652.37}
                />
                <line
                  className="cls-21"
                  x1={861.05}
                  y1={705.99}
                  x2={1027}
                  y2={704.46}
                />
                <line
                  className="cls-21"
                  x1={815}
                  y1={725.9}
                  x2={1027}
                  y2={724.37}
                />
                <line
                  className="cls-21"
                  x1={815}
                  y1={777.99}
                  x2={1027}
                  y2={776.46}
                />
                <line
                  className="cls-21"
                  x1={861.05}
                  y1={560.46}
                  x2={1027}
                  y2={558.92}
                />
                <line
                  className="cls-16"
                  x1={861.05}
                  y1={612.54}
                  x2={1027}
                  y2={611.01}
                />
                <line
                  className="cls-21"
                  x1={859.62}
                  y1={472.12}
                  x2={894.85}
                  y2={471.69}
                />
              </g>
            </g>
            <g id="box-group-1-slide-3" style={{ transform: `translateY(${box1Y}px)`, transition: 'transform 0.1s ease-out' }}>
              <g>
                <g>
                  <g>
                    <polygon
                      className="cls-80"
                      points="977.62 837.92 956.63 833.73 956.63 822.85 977.65 826.74 977.62 837.92"
                    />
                    <polygon
                      className="cls-12"
                      points="1012.83 818.33 995.63 815.98 995.66 811.05 1012.83 813.18 1012.83 818.33"
                    />
                    <polygon
                      className="cls-11"
                      points="977.62 837.92 972.86 837.01 972.86 825.65 977.62 826.68 977.62 837.92"
                    />
                    <polygon
                      className="cls-11"
                      points="972.49 836.99 960.54 834.57 960.54 823.53 972.49 825.7 972.49 836.99"
                    />
                    <polygon
                      className="cls-38"
                      points="979.93 836.3 977.6 837.88 977.6 826.7 979.93 825.12 979.93 836.3"
                    />
                    <polygon
                      className="cls-5"
                      points="956.59 822.85 981.05 813.92 983.05 814.9 963.77 822.27 979.96 825.1 977.62 826.68 956.59 822.85"
                    />
                    <polygon
                      className="cls-48"
                      points="983.05 814.85 983.14 820.43 990.04 817.99 987.91 817.12 983.22 818.63 983.21 814.85 983.05 814.85"
                    />
                    <polygon
                      className="cls-77"
                      points="990.04 817.99 987.95 817.13 988.03 812.09 990.04 812.62 990.04 817.99"
                    />
                    <polygon
                      className="cls-69"
                      points="995.62 815.8 990.04 817.97 990.04 812.6 995.66 810.85 995.62 815.8"
                    />
                    <polygon
                      className="cls-88"
                      points="992.09 817.17 990.04 817.99 990.04 812.62 992.09 811.98 992.09 817.17"
                    />
                    <polygon
                      className="cls-73"
                      points="1014.44 817.39 1012.83 818.32 1012.83 813.16 1014.44 812.36 1014.44 817.39"
                    />
                    <polygon
                      className="cls-97"
                      points="1020.95 819.5 1012.81 818.32 1014.44 817.38 1020.95 818.29 1020.95 819.5"
                    />
                    <polygon
                      className="cls-37"
                      points="1034.13 821.48 1020.95 819.35 1020.95 813.68 1043.11 816.74 1034.13 821.48"
                    />
                    <polygon
                      className="cls-87"
                      points="1028.71 820.68 1020.94 819.68 1020.94 813.66 1028.71 814.73 1028.71 820.68"
                    />
                    <path
                      className="cls-87"
                      d="M1036.59,820.19l-2.46,1.3c-1.7-.29-3.4-.58-5.1-.87v-5.82l7.7,1.06-.14,4.33Z"
                    />
                    <polygon
                      className="cls-36"
                      points="1015.44 845.54 988.15 840.01 988.27 828.02 1015.44 833.23 1015.44 845.54"
                    />
                    <polygon
                      className="cls-34"
                      points="994.9 841.38 988.15 840.01 988.15 828.02 994.9 829.29 994.9 841.38"
                    />
                    <polygon
                      className="cls-34"
                      points="1007.73 843.98 995.28 841.38 995.28 829.36 1007.73 831.75 1007.73 843.98"
                    />
                    <polygon
                      className="cls-34"
                      points="1015.44 845.54 1008.17 843.98 1008.17 831.84 1015.44 833.23 1015.44 845.54"
                    />
                    <polygon
                      className="cls-13"
                      points="1048.56 826.39 1015.44 845.54 1015.44 833.23 1048.56 816.47 1048.56 826.39"
                    />
                    <polygon
                      className="cls-32"
                      points="1019.73 843.06 1015.44 845.54 1015.44 833.23 1019.73 831.06 1019.73 843.06"
                    />
                    <polygon
                      className="cls-32"
                      points="1026.33 839.27 1020.04 842.88 1020.04 830.9 1026.33 827.71 1026.33 839.27"
                    />
                    <polygon
                      className="cls-76"
                      points="1032.55 835.65 1026.56 839.11 1026.56 827.59 1032.55 824.55 1032.55 835.65"
                    />
                    <polygon
                      className="cls-76"
                      points="1038.65 832.1 1032.89 835.47 1032.88 824.4 1038.63 821.47 1038.65 832.1"
                    />
                    <polygon
                      className="cls-76"
                      points="1044.27 828.87 1038.96 831.83 1038.96 821.3 1044.27 818.6 1044.27 828.87"
                    />
                    <polygon
                      className="cls-76"
                      points="1048.56 826.47 1044.55 828.7 1044.55 818.47 1048.56 816.47 1048.56 826.47"
                    />
                    <polygon
                      className="cls-87"
                      points="1037.08 815.9 1037.08 819.92 1043.11 816.74 1037.08 815.9"
                    />
                    <polygon
                      className="cls-48"
                      points="1020.95 813.66 1023.57 813.1 1048.4 816.47 1015.44 833.23 988.15 828.02 992.09 826.32 1014.72 831.01 1043.11 816.74 1020.95 813.66"
                    />
                    <polygon
                      className="cls-88"
                      points="995.63 815.8 992.33 817.05 992.33 811.91 995.66 810.87 995.63 815.8"
                    />
                    <polygon
                      className="cls-100"
                      points="1000.93 816.54 995.61 815.81 995.66 810.89 1001 811.55 1000.93 816.54"
                    />
                    <polygon
                      className="cls-100"
                      points="1009.58 817.86 1001.23 816.57 1001.23 811.56 1009.58 812.6 1009.58 817.86"
                    />
                    <polygon
                      className="cls-100"
                      points="1012.79 818.33 1009.85 817.89 1009.85 812.81 1012.79 813.18 1012.79 818.33"
                    />
                    <polygon
                      className="cls-12"
                      points="1027.08 824.79 995.63 820.03 995.63 815.8 1033.78 821.43 1027.08 824.79"
                    />
                    <polygon
                      className="cls-100"
                      points="997.43 820.3 995.63 820.03 995.63 815.8 997.43 816.05 997.43 820.3"
                    />
                    <polygon
                      className="cls-100"
                      points="1004.14 821.32 997.64 820.3 997.64 816.1 1004.18 817.05 1004.14 821.32"
                    />
                    <polygon
                      className="cls-100"
                      points="1010.94 822.35 1004.39 821.32 1004.39 817.09 1010.97 818.03 1010.94 822.35"
                    />
                    <polygon
                      className="cls-100"
                      points="1017.86 823.4 1011.24 822.38 1011.24 818.1 1017.79 819.07 1017.86 823.4"
                    />
                    <polygon
                      className="cls-100"
                      points="1024.92 824.47 1018.27 823.4 1018.27 819.14 1024.92 820.12 1024.92 824.47"
                    />
                    <path
                      className="cls-100"
                      d="M1032.13,822.22l-5.01,2.58c-.64-.08-1.28-.16-1.92-.24v-4.38l6.95.99-.02,1.06Z"
                    />
                    <path
                      className="cls-69"
                      d="M995.62,815.8c-1.37.56-3.44,1.38-5.97,2.32-2.13.79-3.69,1.33-4.39,1.57-2.49.86-6.26,2.2-11.77,4.28,2.15.38,4.29.75,6.44,1.13l.02,1.73,15.67-6.89v-4.13Z"
                    />
                    <polygon
                      className="cls-73"
                      points="987.5 823.51 981.63 826.14 981.58 820.99 987.5 818.89 987.5 823.51"
                    />
                    <polygon
                      className="cls-73"
                      points="993.69 820.79 987.69 823.44 987.69 818.89 993.58 816.59 993.69 820.79"
                    />
                    <polygon
                      className="cls-73"
                      points="995.63 820.03 993.85 820.68 993.85 816.53 995.63 815.8 995.63 820.03"
                    />
                    <path
                      className="cls-73"
                      d="M981.33,826.23c-.46.2-.91.4-1.37.6,0-.53-.02-1.18-.02-1.71-1.95-.39-4.47-.76-6.42-1.15l7.77-2.88.05,5.13Z"
                    />
                    <polygon
                      className="cls-73"
                      points="983.14 820.45 973.51 823.93 973.47 818.48 983.03 814.9 983.14 820.45"
                    />
                    <polygon
                      className="cls-73"
                      points="979.52 821.57 973.07 823.95 973.07 818.61 979.52 816.21 979.52 821.57"
                    />
                    <polygon
                      className="cls-73"
                      points="983.14 820.45 980.45 821.4 980.45 815.91 983.05 814.9 983.14 820.45"
                    />
                    <polygon
                      className="cls-73"
                      points="973.19 823.92 963.77 822.27 963.77 822.27 973.15 818.61 973.19 823.92"
                    />
                    <polygon
                      className="cls-57"
                      points="960.17 834.58 956.59 833.82 956.59 822.85 960.17 823.46 960.17 834.58"
                    />
                    <polygon
                      className="cls-80"
                      points="972.49 825.74 974.66 824.44 972.86 825.81 972.49 825.74"
                    />
                    <polygon
                      className="cls-80"
                      points="960.17 823.5 962.34 822.2 960.54 823.57 960.17 823.5"
                    />
                  </g>
                  <polygon
                    className="cls-5"
                    points="981.05 813.92 983.05 814.9 989.99 812.61 988.03 812.09 981.05 813.92"
                  />
                  <polygon
                    className="cls-88"
                    points="983.14 820.42 990.04 817.97 990.04 812.61 983.05 814.88 983.14 820.42"
                  />
                  <polygon
                    className="cls-48"
                    points="1014.44 812.36 1023.61 813.02 1020.98 813.58 1012.82 813.16 1014.44 812.36"
                  />
                  <polygon
                    className="cls-100"
                    points="1012.82 818.44 1020.95 819.68 1020.95 813.65 1012.82 813.14 1012.82 818.44"
                  />
                  <polygon
                    className="cls-59"
                    points="988.03 812.09 990.05 812.62 995.68 810.88 1012.79 813.18 1014.44 812.36 995.67 809.61 988.03 812.09"
                  />
                </g>
                <g>
                  <g>
                    <polygon
                      className="cls-80"
                      points="977.62 828.68 956.63 824.49 956.63 813.61 977.65 817.5 977.62 828.68"
                    />
                    <polygon
                      className="cls-12"
                      points="1012.83 809.09 995.63 806.74 995.66 801.81 1012.83 803.94 1012.83 809.09"
                    />
                    <polygon
                      className="cls-11"
                      points="977.62 828.68 972.86 827.77 972.86 816.42 977.62 817.44 977.62 828.68"
                    />
                    <polygon
                      className="cls-11"
                      points="972.49 827.76 960.54 825.33 960.54 814.29 972.49 816.46 972.49 827.76"
                    />
                    <polygon
                      className="cls-38"
                      points="979.93 827.06 977.6 828.64 977.6 817.46 979.93 815.89 979.93 827.06"
                    />
                    <polygon
                      className="cls-5"
                      points="956.59 813.61 981.05 804.68 983.05 805.66 963.77 813.03 979.96 815.86 977.62 817.44 956.59 813.61"
                    />
                    <polygon
                      className="cls-48"
                      points="983.05 805.61 983.14 811.19 990.04 808.75 987.91 807.88 983.22 809.4 983.21 805.61 983.05 805.61"
                    />
                    <polygon
                      className="cls-77"
                      points="990.04 808.75 987.95 807.9 988.03 802.85 990.04 803.38 990.04 808.75"
                    />
                    <polygon
                      className="cls-69"
                      points="995.62 806.57 990.04 808.73 990.04 803.36 995.66 801.61 995.62 806.57"
                    />
                    <polygon
                      className="cls-88"
                      points="992.09 807.93 990.04 808.75 990.04 803.38 992.09 802.75 992.09 807.93"
                    />
                    <polygon
                      className="cls-73"
                      points="1014.44 808.16 1012.83 809.08 1012.83 803.93 1014.44 803.12 1014.44 808.16"
                    />
                    <polygon
                      className="cls-97"
                      points="1020.95 810.26 1012.81 809.08 1014.44 808.14 1020.95 809.06 1020.95 810.26"
                    />
                    <polygon
                      className="cls-37"
                      points="1034.13 812.25 1020.95 810.11 1020.95 804.44 1043.11 807.5 1034.13 812.25"
                    />
                    <polygon
                      className="cls-87"
                      points="1028.71 811.44 1020.94 810.45 1020.94 804.42 1028.71 805.49 1028.71 811.44"
                    />
                    <path
                      className="cls-87"
                      d="M1036.59,810.95l-2.46,1.3c-1.7-.29-3.4-.58-5.1-.87v-5.82l7.7,1.06-.14,4.33Z"
                    />
                    <polygon
                      className="cls-36"
                      points="1015.44 836.31 988.15 830.78 988.27 818.78 1015.44 823.99 1015.44 836.31"
                    />
                    <polygon
                      className="cls-34"
                      points="994.9 832.14 988.15 830.78 988.15 818.78 994.9 820.05 994.9 832.14"
                    />
                    <polygon
                      className="cls-34"
                      points="1007.73 834.74 995.28 832.14 995.28 820.12 1007.73 822.51 1007.73 834.74"
                    />
                    <polygon
                      className="cls-34"
                      points="1015.44 836.31 1008.17 834.74 1008.17 822.6 1015.44 823.99 1015.44 836.31"
                    />
                    <polygon
                      className="cls-13"
                      points="1048.56 817.15 1015.44 836.31 1015.44 823.99 1048.56 807.23 1048.56 817.15"
                    />
                    <polygon
                      className="cls-32"
                      points="1019.73 833.82 1015.44 836.31 1015.44 823.99 1019.73 821.82 1019.73 833.82"
                    />
                    <polygon
                      className="cls-32"
                      points="1026.33 830.04 1020.04 833.64 1020.04 821.66 1026.33 818.47 1026.33 830.04"
                    />
                    <polygon
                      className="cls-76"
                      points="1032.55 826.41 1026.56 829.87 1026.56 818.35 1032.55 815.32 1032.55 826.41"
                    />
                    <polygon
                      className="cls-76"
                      points="1038.65 822.86 1032.89 826.23 1032.88 815.17 1038.63 812.23 1038.65 822.86"
                    />
                    <polygon
                      className="cls-76"
                      points="1044.27 819.63 1038.96 822.6 1038.96 812.07 1044.27 809.36 1044.27 819.63"
                    />
                    <polygon
                      className="cls-76"
                      points="1048.56 817.23 1044.55 819.47 1044.55 809.23 1048.56 807.23 1048.56 817.23"
                    />
                    <polygon
                      className="cls-87"
                      points="1037.08 806.67 1037.08 810.69 1043.11 807.5 1037.08 806.67"
                    />
                    <polygon
                      className="cls-48"
                      points="1020.95 804.42 1023.57 803.86 1048.4 807.23 1015.44 823.99 988.15 818.78 992.09 817.08 1014.72 821.77 1043.11 807.5 1020.95 804.42"
                    />
                    <polygon
                      className="cls-88"
                      points="995.63 806.57 992.33 807.82 992.33 802.67 995.66 801.64 995.63 806.57"
                    />
                    <polygon
                      className="cls-100"
                      points="1000.93 807.3 995.61 806.57 995.66 801.65 1001 802.31 1000.93 807.3"
                    />
                    <polygon
                      className="cls-100"
                      points="1009.58 808.62 1001.23 807.33 1001.23 802.33 1009.58 803.36 1009.58 808.62"
                    />
                    <polygon
                      className="cls-100"
                      points="1012.79 809.09 1009.85 808.65 1009.85 803.58 1012.79 803.94 1012.79 809.09"
                    />
                    <polygon
                      className="cls-12"
                      points="1027.08 815.56 995.63 810.79 995.63 806.57 1033.78 812.19 1027.08 815.56"
                    />
                    <polygon
                      className="cls-100"
                      points="997.43 811.06 995.63 810.79 995.63 806.57 997.43 806.81 997.43 811.06"
                    />
                    <polygon
                      className="cls-100"
                      points="1004.14 812.08 997.64 811.06 997.64 806.86 1004.18 807.82 1004.14 812.08"
                    />
                    <polygon
                      className="cls-100"
                      points="1010.94 813.11 1004.39 812.08 1004.39 807.86 1010.97 808.79 1010.94 813.11"
                    />
                    <polygon
                      className="cls-100"
                      points="1017.86 814.16 1011.24 813.14 1011.24 808.87 1017.79 809.83 1017.86 814.16"
                    />
                    <polygon
                      className="cls-100"
                      points="1024.92 815.23 1018.27 814.16 1018.27 809.9 1024.92 810.88 1024.92 815.23"
                    />
                    <path
                      className="cls-100"
                      d="M1032.13,812.98l-5.01,2.58c-.64-.08-1.28-.16-1.92-.24v-4.38l6.95.99-.02,1.06Z"
                    />
                    <path
                      className="cls-69"
                      d="M995.62,806.57c-1.37.56-3.44,1.38-5.97,2.32-2.13.79-3.69,1.33-4.39,1.57-2.49.86-6.26,2.2-11.77,4.28,2.15.38,4.29.75,6.44,1.13l.02,1.73,15.67-6.89v-4.13Z"
                    />
                    <polygon
                      className="cls-73"
                      points="987.5 814.28 981.63 816.9 981.58 811.75 987.5 809.65 987.5 814.28"
                    />
                    <polygon
                      className="cls-73"
                      points="993.69 811.55 987.69 814.2 987.69 809.65 993.58 807.36 993.69 811.55"
                    />
                    <polygon
                      className="cls-73"
                      points="995.63 810.79 993.85 811.45 993.85 807.29 995.63 806.57 995.63 810.79"
                    />
                    <path
                      className="cls-73"
                      d="M981.33,816.99c-.46.2-.91.4-1.37.6,0-.53-.02-1.18-.02-1.71-1.95-.39-4.47-.76-6.42-1.15l7.77-2.88.05,5.13Z"
                    />
                    <polygon
                      className="cls-73"
                      points="983.14 811.21 973.51 814.7 973.47 809.25 983.03 805.66 983.14 811.21"
                    />
                    <polygon
                      className="cls-73"
                      points="979.52 812.33 973.07 814.71 973.07 809.37 979.52 806.98 979.52 812.33"
                    />
                    <polygon
                      className="cls-73"
                      points="983.14 811.21 980.45 812.17 980.45 806.67 983.05 805.66 983.14 811.21"
                    />
                    <polygon
                      className="cls-73"
                      points="973.19 814.68 963.77 813.03 963.77 813.03 973.15 809.37 973.19 814.68"
                    />
                    <polygon
                      className="cls-57"
                      points="960.17 825.34 956.59 824.58 956.59 813.61 960.17 814.22 960.17 825.34"
                    />
                    <polygon
                      className="cls-80"
                      points="972.49 816.5 974.66 815.2 972.86 816.57 972.49 816.5"
                    />
                    <polygon
                      className="cls-80"
                      points="960.17 814.26 962.34 812.96 960.54 814.33 960.17 814.26"
                    />
                  </g>
                  <polygon
                    className="cls-5"
                    points="981.05 804.68 983.05 805.66 989.99 803.37 988.03 802.85 981.05 804.68"
                  />
                  <polygon
                    className="cls-88"
                    points="983.14 811.18 990.04 808.73 990.04 803.37 983.05 805.64 983.14 811.18"
                  />
                  <polygon
                    className="cls-48"
                    points="1014.44 803.12 1023.61 803.78 1020.98 804.34 1012.82 803.93 1014.44 803.12"
                  />
                  <polygon
                    className="cls-100"
                    points="1012.82 809.2 1020.95 810.45 1020.95 804.41 1012.82 803.9 1012.82 809.2"
                  />
                  <polygon
                    className="cls-59"
                    points="988.03 802.85 990.05 803.38 995.68 801.64 1012.79 803.94 1014.44 803.12 995.67 800.37 988.03 802.85"
                  />
                </g>
                <g>
                  <polygon
                    className="cls-80"
                    points="977.62 819.25 956.63 815.16 956.63 804.52 977.65 808.32 977.62 819.25"
                  />
                  <polygon
                    className="cls-12"
                    points="1012.83 799.94 995.63 797.64 995.66 792.82 1012.83 794.9 1012.83 799.94"
                  />
                  <polygon
                    className="cls-11"
                    points="977.62 819.25 972.86 818.36 972.86 807.26 977.62 808.27 977.62 819.25"
                  />
                  <polygon
                    className="cls-11"
                    points="972.49 818.35 960.54 815.97 960.54 805.19 972.49 807.31 972.49 818.35"
                  />
                  <polygon
                    className="cls-38"
                    points="979.93 817.66 977.6 819.21 977.6 808.29 979.93 806.74 979.93 817.66"
                  />
                  <polygon
                    className="cls-5"
                    points="956.59 804.52 981.05 795.79 983.05 796.75 963.77 803.96 979.96 806.72 977.62 808.27 956.59 804.52"
                  />
                  <polygon
                    className="cls-48"
                    points="983.05 796.7 983.14 802.16 990.04 799.77 987.91 798.92 983.22 800.4 983.21 796.7 983.05 796.7"
                  />
                  <polygon
                    className="cls-77"
                    points="990.04 799.77 987.95 798.94 988.03 794.01 990.04 794.53 990.04 799.77"
                  />
                  <polygon
                    className="cls-69"
                    points="995.62 797.64 990.04 799.75 990.04 794.51 995.66 792.8 995.62 797.64"
                  />
                  <polygon
                    className="cls-88"
                    points="992.09 798.97 990.04 799.77 990.04 794.53 992.09 793.9 992.09 798.97"
                  />
                  <polygon
                    className="cls-73"
                    points="1014.44 799.03 1012.83 799.94 1012.83 794.9 1014.44 794.11 1014.44 799.03"
                  />
                  <polygon
                    className="cls-97"
                    points="1020.95 801.1 1012.83 799.94 1014.44 799.03 1020.95 799.93 1020.95 801.1"
                  />
                  <polygon
                    className="cls-37"
                    points="1034.13 803.19 1020.95 801.1 1020.95 795.56 1043.11 798.55 1034.13 803.19"
                  />
                  <polygon
                    className="cls-87"
                    points="1028.72 802.34 1020.95 801.1 1020.95 795.56 1028.72 796.61 1028.72 802.34"
                  />
                  <path
                    className="cls-87"
                    d="M1036.59,801.92l-2.46,1.27c-1.7-.28-3.4-.57-5.1-.85v-5.69l7.7,1.04-.14,4.23Z"
                  />
                  <polygon
                    className="cls-36"
                    points="1015.44 826.7 988.15 821.3 988.27 809.57 1015.44 814.67 1015.44 826.7"
                  />
                  <polygon
                    className="cls-34"
                    points="994.9 822.63 988.15 821.3 988.15 809.57 994.9 810.81 994.9 822.63"
                  />
                  <polygon
                    className="cls-34"
                    points="1007.73 825.17 995.28 822.63 995.28 810.88 1007.73 813.22 1007.73 825.17"
                  />
                  <polygon
                    className="cls-34"
                    points="1015.44 826.7 1008.17 825.17 1008.17 813.3 1015.44 814.67 1015.44 826.7"
                  />
                  <polygon
                    className="cls-13"
                    points="1048.56 807.98 1015.44 826.7 1015.44 814.67 1048.56 798.29 1048.56 807.98"
                  />
                  <polygon
                    className="cls-32"
                    points="1019.73 824.28 1015.44 826.7 1015.44 814.67 1019.73 812.54 1019.73 824.28"
                  />
                  <polygon
                    className="cls-32"
                    points="1026.33 820.57 1020.04 824.1 1020.04 812.39 1026.33 809.27 1026.33 820.57"
                  />
                  <polygon
                    className="cls-76"
                    points="1032.55 817.03 1026.56 820.42 1026.56 809.16 1032.55 806.19 1032.55 817.03"
                  />
                  <polygon
                    className="cls-76"
                    points="1038.65 813.56 1032.89 816.86 1032.88 806.04 1038.63 803.17 1038.65 813.56"
                  />
                  <polygon
                    className="cls-76"
                    points="1044.27 810.4 1038.96 813.3 1038.96 803.01 1044.27 800.37 1044.27 810.4"
                  />
                  <polygon
                    className="cls-76"
                    points="1048.56 808.06 1044.55 810.24 1044.55 800.24 1048.56 798.29 1048.56 808.06"
                  />
                  <polygon
                    className="cls-87"
                    points="1037.08 797.74 1037.08 801.66 1043.11 798.55 1037.08 797.74"
                  />
                  <polygon
                    className="cls-48"
                    points="1020.95 795.56 1023.57 794.99 1048.4 798.29 1015.44 814.67 988.15 809.57 992.09 807.91 1014.72 812.49 1043.11 798.55 1020.95 795.56"
                  />
                  <polygon
                    className="cls-88"
                    points="995.63 797.64 992.33 798.86 992.33 793.83 995.66 792.82 995.63 797.64"
                  />
                  <polygon
                    className="cls-100"
                    points="1000.95 798.35 995.63 797.64 995.68 792.83 1001.03 793.47 1000.95 798.35"
                  />
                  <polygon
                    className="cls-100"
                    points="1009.58 799.5 1001.23 798.38 1001.23 793.49 1009.58 794.51 1009.58 799.5"
                  />
                  <polygon
                    className="cls-100"
                    points="1012.83 799.94 1009.89 799.5 1009.89 794.54 1012.83 794.9 1012.83 799.94"
                  />
                  <polygon
                    className="cls-12"
                    points="1027.08 806.42 995.63 801.77 995.63 797.64 1033.78 803.13 1027.08 806.42"
                  />
                  <polygon
                    className="cls-100"
                    points="997.43 802.03 995.63 801.77 995.63 797.64 997.43 797.88 997.43 802.03"
                  />
                  <polygon
                    className="cls-100"
                    points="1004.14 803.03 997.64 802.03 997.64 797.92 1004.18 798.86 1004.14 803.03"
                  />
                  <polygon
                    className="cls-100"
                    points="1010.94 804.03 1004.39 803.03 1004.39 798.9 1010.97 799.81 1010.94 804.03"
                  />
                  <polygon
                    className="cls-100"
                    points="1017.86 805.06 1011.24 804.07 1011.24 799.88 1017.79 800.83 1017.86 805.06"
                  />
                  <polygon
                    className="cls-100"
                    points="1024.92 806.1 1018.27 805.06 1018.27 800.9 1024.92 801.86 1024.92 806.1"
                  />
                  <path
                    className="cls-100"
                    d="M1032.13,803.91l-5.01,2.52c-.64-.08-1.28-.16-1.92-.23v-4.28l6.95.96-.02,1.03Z"
                  />
                  <path
                    className="cls-69"
                    d="M995.62,797.64c-1.37.55-3.44,1.35-5.97,2.27-2.13.77-3.69,1.3-4.39,1.53-2.49.84-6.26,2.15-11.77,4.18,2.15.37,4.29.73,6.44,1.1l.02,1.69,15.67-6.73v-4.04Z"
                  />
                  <polygon
                    className="cls-73"
                    points="987.5 805.17 981.63 807.74 981.58 802.7 987.5 800.65 987.5 805.17"
                  />
                  <polygon
                    className="cls-73"
                    points="993.69 802.51 987.69 805.09 987.69 800.65 993.58 798.41 993.69 802.51"
                  />
                  <polygon
                    className="cls-73"
                    points="995.63 801.77 993.85 802.41 993.85 798.35 995.63 797.64 995.63 801.77"
                  />
                  <path
                    className="cls-73"
                    d="M981.33,807.82c-.46.2-.91.39-1.37.59,0-.51-.02-1.15-.02-1.67-1.95-.38-4.47-.74-6.42-1.12l7.77-2.81.05,5.01Z"
                  />
                  <polygon
                    className="cls-73"
                    points="983.14 802.17 973.51 805.58 973.47 800.26 983.03 796.75 983.14 802.17"
                  />
                  <polygon
                    className="cls-73"
                    points="979.52 803.27 973.07 805.6 973.07 800.38 979.52 798.04 979.52 803.27"
                  />
                  <polygon
                    className="cls-73"
                    points="983.14 802.17 980.45 803.11 980.45 797.74 983.05 796.75 983.14 802.17"
                  />
                  <polygon
                    className="cls-73"
                    points="973.19 805.57 963.77 803.96 963.77 803.96 973.15 800.38 973.19 805.57"
                  />
                  <polygon
                    className="cls-57"
                    points="960.17 815.99 956.59 815.24 956.59 804.52 960.17 805.12 960.17 815.99"
                  />
                  <polygon
                    className="cls-80"
                    points="972.49 807.35 974.66 806.07 972.86 807.41 972.49 807.35"
                  />
                  <polygon
                    className="cls-80"
                    points="960.17 805.16 962.34 803.88 960.54 805.22 960.17 805.16"
                  />
                </g>
              </g>
              <g>
                <g>
                  <g>
                    <polygon
                      className="cls-80"
                      points="987.44 810.58 971.8 806.32 971.8 795.22 987.47 799.19 987.44 810.58"
                    />
                    <polygon
                      className="cls-12"
                      points="1013.68 790.62 1000.86 788.22 1000.89 783.19 1013.68 785.37 1013.68 790.62"
                    />
                    <polygon
                      className="cls-11"
                      points="987.44 810.58 983.89 809.65 983.89 798.08 987.44 799.13 987.44 810.58"
                    />
                    <polygon
                      className="cls-11"
                      points="983.62 809.64 974.71 807.17 974.71 795.92 983.62 798.13 983.62 809.64"
                    />
                    <polygon
                      className="cls-38"
                      points="989.17 808.93 987.42 810.54 987.42 799.15 989.17 797.54 989.17 808.93"
                    />
                    <polygon
                      className="cls-5"
                      points="971.77 795.22 990 786.12 991.49 787.12 977.12 794.63 989.18 797.52 987.44 799.13 971.77 795.22"
                    />
                    <polygon
                      className="cls-48"
                      points="991.49 787.07 991.56 792.76 996.7 790.27 995.11 789.38 991.62 790.93 991.61 787.07 991.49 787.07"
                    />
                    <polygon
                      className="cls-77"
                      points="996.7 790.27 995.14 789.4 995.2 784.26 996.7 784.8 996.7 790.27"
                    />
                    <polygon
                      className="cls-69"
                      points="1000.86 788.04 996.7 790.25 996.7 784.78 1000.89 782.99 1000.86 788.04"
                    />
                    <polygon
                      className="cls-88"
                      points="998.23 789.43 996.7 790.27 996.7 784.8 998.23 784.15 998.23 789.43"
                    />
                    <polygon
                      className="cls-73"
                      points="1014.88 789.66 1013.68 790.6 1013.68 785.35 1014.88 784.53 1014.88 789.66"
                    />
                    <polygon
                      className="cls-97"
                      points="1019.74 791.81 1013.67 790.6 1014.88 789.65 1019.74 790.58 1019.74 791.81"
                    />
                    <polygon
                      className="cls-37"
                      points="1029.56 793.83 1019.74 791.66 1019.74 785.88 1036.25 788.99 1029.56 793.83"
                    />
                    <polygon
                      className="cls-87"
                      points="1025.52 793.01 1019.73 792 1019.73 785.86 1025.52 786.95 1025.52 793.01"
                    />
                    <path
                      className="cls-87"
                      d="M1031.39,792.51l-1.83,1.32c-1.27-.3-2.53-.59-3.8-.89v-5.93l5.74,1.08-.11,4.41Z"
                    />
                    <polygon
                      className="cls-36"
                      points="1015.62 818.36 995.29 812.72 995.38 800.49 1015.62 805.81 1015.62 818.36"
                    />
                    <polygon
                      className="cls-34"
                      points="1000.32 814.11 995.29 812.72 995.29 800.49 1000.32 801.79 1000.32 814.11"
                    />
                    <polygon
                      className="cls-34"
                      points="1009.88 816.76 1000.6 814.11 1000.6 801.86 1009.88 804.3 1009.88 816.76"
                    />
                    <polygon
                      className="cls-34"
                      points="1015.62 818.36 1010.21 816.76 1010.21 804.38 1015.62 805.81 1015.62 818.36"
                    />
                    <polygon
                      className="cls-13"
                      points="1040.31 798.83 1015.62 818.36 1015.62 805.81 1040.31 788.72 1040.31 798.83"
                    />
                    <polygon
                      className="cls-32"
                      points="1018.82 815.83 1015.62 818.36 1015.62 805.81 1018.82 803.59 1018.82 815.83"
                    />
                    <polygon
                      className="cls-32"
                      points="1023.74 811.97 1019.06 815.64 1019.06 803.43 1023.74 800.18 1023.74 811.97"
                    />
                    <polygon
                      className="cls-76"
                      points="1028.38 808.27 1023.91 811.8 1023.91 800.06 1028.38 796.96 1028.38 808.27"
                    />
                    <polygon
                      className="cls-76"
                      points="1032.92 804.65 1028.63 808.09 1028.62 796.81 1032.91 793.82 1032.92 804.65"
                    />
                    <polygon
                      className="cls-76"
                      points="1037.11 801.36 1033.16 804.38 1033.16 793.65 1037.11 790.89 1037.11 801.36"
                    />
                    <polygon
                      className="cls-76"
                      points="1040.31 798.91 1037.32 801.19 1037.32 790.76 1040.31 788.72 1040.31 798.91"
                    />
                    <polygon
                      className="cls-87"
                      points="1031.76 788.14 1031.76 792.24 1036.25 788.99 1031.76 788.14"
                    />
                    <polygon
                      className="cls-48"
                      points="1019.73 785.86 1021.68 785.29 1040.19 788.72 1015.62 805.81 995.29 800.49 998.23 798.76 1015.09 803.54 1036.25 788.99 1019.73 785.86"
                    />
                    <polygon
                      className="cls-88"
                      points="1000.86 788.04 998.41 789.32 998.41 784.07 1000.89 783.02 1000.86 788.04"
                    />
                    <polygon
                      className="cls-100"
                      points="1004.81 788.79 1000.85 788.05 1000.89 783.03 1004.87 783.7 1004.81 788.79"
                    />
                    <polygon
                      className="cls-100"
                      points="1011.26 790.14 1005.04 788.82 1005.04 783.72 1011.26 784.78 1011.26 790.14"
                    />
                    <polygon
                      className="cls-100"
                      points="1013.65 790.62 1011.46 790.16 1011.46 784.99 1013.65 785.37 1013.65 790.62"
                    />
                    <polygon
                      className="cls-12"
                      points="1024.3 797.21 1000.86 792.35 1000.86 788.04 1029.29 793.77 1024.3 797.21"
                    />
                    <polygon
                      className="cls-100"
                      points="1002.21 792.62 1000.86 792.35 1000.86 788.04 1002.21 788.29 1002.21 792.62"
                    />
                    <polygon
                      className="cls-100"
                      points="1007.2 793.66 1002.36 792.62 1002.36 788.34 1007.23 789.32 1007.2 793.66"
                    />
                    <polygon
                      className="cls-100"
                      points="1012.28 794.72 1007.4 793.66 1007.4 789.36 1012.29 790.31 1012.28 794.72"
                    />
                    <polygon
                      className="cls-100"
                      points="1017.43 795.78 1012.49 794.75 1012.49 790.39 1017.38 791.37 1017.43 795.78"
                    />
                    <polygon
                      className="cls-100"
                      points="1022.69 796.87 1017.74 795.78 1017.74 791.44 1022.69 792.44 1022.69 796.87"
                    />
                    <path
                      className="cls-100"
                      d="M1028.06,794.58c-1.24.88-2.49,1.75-3.73,2.63-.48-.08-.96-.16-1.43-.24v-4.47l5.18,1.01-.02,1.08Z"
                    />
                    <path
                      className="cls-69"
                      d="M1000.86,788.04c-1.02.57-2.56,1.41-4.45,2.37-1.58.8-2.75,1.35-3.27,1.6-1.85.88-4.66,2.24-8.77,4.36,1.6.38,3.2.77,4.8,1.15l.02,1.76,11.68-7.02v-4.21Z"
                    />
                    <polygon
                      className="cls-73"
                      points="994.8 795.9 990.43 798.58 990.39 793.33 994.8 791.19 994.8 795.9"
                    />
                    <polygon
                      className="cls-73"
                      points="999.42 793.12 994.95 795.82 994.95 791.19 999.34 788.85 999.42 793.12"
                    />
                    <polygon
                      className="cls-73"
                      points="1000.86 792.35 999.53 793.02 999.53 788.78 1000.86 788.04 1000.86 792.35"
                    />
                    <path
                      className="cls-73"
                      d="M990.2,798.66c-.34.2-.68.41-1.02.61,0-.54-.02-1.2-.02-1.74-1.45-.4-3.33-.77-4.79-1.17l5.79-2.93.04,5.23Z"
                    />
                    <polygon
                      className="cls-73"
                      points="991.56 792.77 984.38 796.33 984.35 790.77 991.48 787.12 991.56 792.77"
                    />
                    <polygon
                      className="cls-73"
                      points="988.86 793.92 984.05 796.35 984.05 790.9 988.86 788.46 988.86 793.92"
                    />
                    <polygon
                      className="cls-73"
                      points="991.56 792.77 989.55 793.75 989.55 788.15 991.49 787.12 991.56 792.77"
                    />
                    <polygon
                      className="cls-73"
                      points="984.14 796.31 977.12 794.63 977.12 794.63 984.11 790.9 984.14 796.31"
                    />
                    <polygon
                      className="cls-57"
                      points="974.44 807.18 971.77 806.4 971.77 795.22 974.44 795.85 974.44 807.18"
                    />
                    <polygon
                      className="cls-80"
                      points="983.62 798.17 985.23 796.84 983.89 798.24 983.62 798.17"
                    />
                    <polygon
                      className="cls-80"
                      points="974.44 795.89 976.05 794.56 974.71 795.96 974.44 795.89"
                    />
                  </g>
                  <polygon
                    className="cls-5"
                    points="990 786.12 991.49 787.12 996.66 784.79 995.2 784.26 990 786.12"
                  />
                  <polygon
                    className="cls-88"
                    points="991.56 792.74 996.7 790.25 996.7 784.78 991.49 787.1 991.56 792.74"
                  />
                  <polygon
                    className="cls-48"
                    points="1014.88 784.53 1021.71 785.2 1019.76 785.78 1013.68 785.35 1014.88 784.53"
                  />
                  <polygon
                    className="cls-100"
                    points="1013.68 790.73 1019.73 792 1019.73 785.85 1013.68 785.33 1013.68 790.73"
                  />
                  <polygon
                    className="cls-59"
                    points="995.2 784.26 996.71 784.8 1000.9 783.02 1013.65 785.37 1014.88 784.53 1000.9 781.73 995.2 784.26"
                  />
                </g>
                <g>
                  <g>
                    <polygon
                      className="cls-80"
                      points="987.44 801.17 971.8 796.9 971.8 785.8 987.47 789.77 987.44 801.17"
                    />
                    <polygon
                      className="cls-12"
                      points="1013.68 781.2 1000.86 778.8 1000.89 773.78 1013.68 775.95 1013.68 781.2"
                    />
                    <polygon
                      className="cls-11"
                      points="987.44 801.17 983.89 800.24 983.89 788.67 987.44 789.71 987.44 801.17"
                    />
                    <polygon
                      className="cls-11"
                      points="983.62 800.23 974.71 797.75 974.71 786.5 983.62 788.72 983.62 800.23"
                    />
                    <polygon
                      className="cls-38"
                      points="989.17 799.51 987.42 801.12 987.42 789.73 989.17 788.12 989.17 799.51"
                    />
                    <polygon
                      className="cls-5"
                      points="971.77 785.8 990 776.7 991.49 777.7 977.12 785.22 989.18 788.1 987.44 789.71 971.77 785.8"
                    />
                    <polygon
                      className="cls-48"
                      points="991.49 777.65 991.56 783.34 996.7 780.85 995.11 779.96 991.62 781.51 991.61 777.65 991.49 777.65"
                    />
                    <polygon
                      className="cls-77"
                      points="996.7 780.85 995.14 779.98 995.2 774.84 996.7 775.38 996.7 780.85"
                    />
                    <polygon
                      className="cls-69"
                      points="1000.86 778.62 996.7 780.83 996.7 775.36 1000.89 773.58 1000.86 778.62"
                    />
                    <polygon
                      className="cls-88"
                      points="998.23 780.02 996.7 780.85 996.7 775.38 998.23 774.73 998.23 780.02"
                    />
                    <polygon
                      className="cls-73"
                      points="1014.88 780.25 1013.68 781.19 1013.68 775.93 1014.88 775.11 1014.88 780.25"
                    />
                    <polygon
                      className="cls-97"
                      points="1019.74 782.39 1013.67 781.19 1014.88 780.23 1019.74 781.16 1019.74 782.39"
                    />
                    <polygon
                      className="cls-37"
                      points="1029.56 784.42 1019.74 782.24 1019.74 776.46 1036.25 779.58 1029.56 784.42"
                    />
                    <polygon
                      className="cls-87"
                      points="1025.52 783.6 1019.73 782.58 1019.73 776.44 1025.52 777.53 1025.52 783.6"
                    />
                    <path
                      className="cls-87"
                      d="M1031.39,783.09l-1.83,1.32c-1.27-.3-2.53-.59-3.8-.89v-5.93l5.74,1.08-.11,4.41Z"
                    />
                    <polygon
                      className="cls-36"
                      points="1015.62 808.94 995.29 803.3 995.38 791.07 1015.62 796.39 1015.62 808.94"
                    />
                    <polygon
                      className="cls-34"
                      points="1000.32 804.7 995.29 803.3 995.29 791.07 1000.32 792.37 1000.32 804.7"
                    />
                    <polygon
                      className="cls-34"
                      points="1009.88 807.35 1000.6 804.7 1000.6 792.44 1009.88 794.88 1009.88 807.35"
                    />
                    <polygon
                      className="cls-34"
                      points="1015.62 808.94 1010.21 807.35 1010.21 794.97 1015.62 796.39 1015.62 808.94"
                    />
                    <polygon
                      className="cls-13"
                      points="1040.31 789.41 1015.62 808.94 1015.62 796.39 1040.31 779.3 1040.31 789.41"
                    />
                    <polygon
                      className="cls-32"
                      points="1018.82 806.41 1015.62 808.94 1015.62 796.39 1018.82 794.17 1018.82 806.41"
                    />
                    <polygon
                      className="cls-32"
                      points="1023.74 802.55 1019.06 806.23 1019.06 794.01 1023.74 790.76 1023.74 802.55"
                    />
                    <polygon
                      className="cls-76"
                      points="1028.38 798.85 1023.91 802.38 1023.91 790.64 1028.38 787.55 1028.38 798.85"
                    />
                    <polygon
                      className="cls-76"
                      points="1032.92 795.23 1028.63 798.67 1028.62 787.39 1032.91 784.4 1032.92 795.23"
                    />
                    <polygon
                      className="cls-76"
                      points="1037.11 791.94 1033.16 794.97 1033.16 784.23 1037.11 781.48 1037.11 791.94"
                    />
                    <polygon
                      className="cls-76"
                      points="1040.31 789.5 1037.32 791.78 1037.32 781.34 1040.31 779.3 1040.31 789.5"
                    />
                    <polygon
                      className="cls-87"
                      points="1031.76 778.73 1031.76 782.83 1036.25 779.58 1031.76 778.73"
                    />
                    <polygon
                      className="cls-48"
                      points="1019.73 776.44 1021.68 775.87 1040.19 779.3 1015.62 796.39 995.29 791.07 998.23 789.34 1015.09 794.12 1036.25 779.58 1019.73 776.44"
                    />
                    <polygon
                      className="cls-88"
                      points="1000.86 778.62 998.41 779.9 998.41 774.66 1000.89 773.6 1000.86 778.62"
                    />
                    <polygon
                      className="cls-100"
                      points="1004.81 779.37 1000.85 778.63 1000.89 773.61 1004.87 774.28 1004.81 779.37"
                    />
                    <polygon
                      className="cls-100"
                      points="1011.26 780.72 1005.04 779.41 1005.04 774.3 1011.26 775.36 1011.26 780.72"
                    />
                    <polygon
                      className="cls-100"
                      points="1013.65 781.2 1011.46 780.75 1011.46 775.58 1013.65 775.95 1013.65 781.2"
                    />
                    <polygon
                      className="cls-12"
                      points="1024.3 787.79 1000.86 782.94 1000.86 778.62 1029.29 784.36 1024.3 787.79"
                    />
                    <polygon
                      className="cls-100"
                      points="1002.21 783.21 1000.86 782.94 1000.86 778.62 1002.21 778.88 1002.21 783.21"
                    />
                    <polygon
                      className="cls-100"
                      points="1007.2 784.25 1002.36 783.21 1002.36 778.93 1007.23 779.9 1007.2 784.25"
                    />
                    <polygon
                      className="cls-100"
                      points="1012.28 785.3 1007.4 784.25 1007.4 779.94 1012.29 780.9 1012.28 785.3"
                    />
                    <polygon
                      className="cls-100"
                      points="1017.43 786.37 1012.49 785.33 1012.49 780.97 1017.38 781.96 1017.43 786.37"
                    />
                    <polygon
                      className="cls-100"
                      points="1022.69 787.46 1017.74 786.37 1017.74 782.03 1022.69 783.03 1022.69 787.46"
                    />
                    <path
                      className="cls-100"
                      d="M1028.06,785.16l-3.73,2.63c-.48-.08-.96-.16-1.43-.24v-4.47l5.18,1.01-.02,1.08Z"
                    />
                    <path
                      className="cls-69"
                      d="M1000.86,778.62c-1.02.57-2.56,1.41-4.45,2.37-1.58.8-2.75,1.35-3.27,1.6-1.85.88-4.66,2.24-8.77,4.36,1.6.38,3.2.77,4.8,1.15l.02,1.76,11.68-7.02v-4.21Z"
                    />
                    <polygon
                      className="cls-73"
                      points="994.8 786.49 990.43 789.16 990.39 783.91 994.8 781.77 994.8 786.49"
                    />
                    <polygon
                      className="cls-73"
                      points="999.42 783.7 994.95 786.4 994.95 781.77 999.34 779.43 999.42 783.7"
                    />
                    <polygon
                      className="cls-73"
                      points="1000.86 782.94 999.53 783.6 999.53 779.37 1000.86 778.62 1000.86 782.94"
                    />
                    <path
                      className="cls-73"
                      d="M990.2,789.25c-.34.2-.68.41-1.02.61,0-.54-.02-1.2-.02-1.74-1.45-.4-3.33-.77-4.79-1.17l5.79-2.93.04,5.23Z"
                    />
                    <polygon
                      className="cls-73"
                      points="991.56 783.36 984.38 786.91 984.35 781.36 991.48 777.7 991.56 783.36"
                    />
                    <polygon
                      className="cls-73"
                      points="988.86 784.5 984.05 786.93 984.05 781.49 988.86 779.04 988.86 784.5"
                    />
                    <polygon
                      className="cls-73"
                      points="991.56 783.36 989.55 784.33 989.55 778.73 991.49 777.7 991.56 783.36"
                    />
                    <polygon
                      className="cls-73"
                      points="984.14 786.9 977.12 785.22 977.12 785.22 984.11 781.49 984.14 786.9"
                    />
                    <polygon
                      className="cls-57"
                      points="974.44 797.77 971.77 796.99 971.77 785.8 974.44 786.43 974.44 797.77"
                    />
                    <polygon
                      className="cls-80"
                      points="983.62 788.75 985.23 787.43 983.89 788.82 983.62 788.75"
                    />
                    <polygon
                      className="cls-80"
                      points="974.44 786.47 976.05 785.14 974.71 786.54 974.44 786.47"
                    />
                  </g>
                  <polygon
                    className="cls-5"
                    points="990 776.7 991.49 777.7 996.66 775.37 995.2 774.84 990 776.7"
                  />
                  <polygon
                    className="cls-88"
                    points="991.56 783.33 996.7 780.83 996.7 775.37 991.49 777.68 991.56 783.33"
                  />
                  <polygon
                    className="cls-48"
                    points="1014.88 775.11 1021.71 775.79 1019.76 776.36 1013.68 775.93 1014.88 775.11"
                  />
                  <polygon
                    className="cls-100"
                    points="1013.68 781.31 1019.73 782.58 1019.73 776.43 1013.68 775.91 1013.68 781.31"
                  />
                  <polygon
                    className="cls-59"
                    points="995.2 774.84 996.71 775.38 1000.9 773.61 1013.65 775.95 1014.88 775.11 1000.9 772.31 995.2 774.84"
                  />
                </g>
                <g>
                  <polygon
                    className="cls-80"
                    points="987.44 791.55 971.8 787.38 971.8 776.54 987.47 780.41 987.44 791.55"
                  />
                  <polygon
                    className="cls-12"
                    points="1013.68 771.87 1000.86 769.52 1000.89 764.61 1013.68 766.73 1013.68 771.87"
                  />
                  <polygon
                    className="cls-11"
                    points="987.44 791.55 983.89 790.64 983.89 779.34 987.44 780.36 987.44 791.55"
                  />
                  <polygon
                    className="cls-11"
                    points="983.62 790.63 974.71 788.21 974.71 777.22 983.62 779.38 983.62 790.63"
                  />
                  <polygon
                    className="cls-38"
                    points="989.17 789.94 987.42 791.51 987.42 780.38 989.17 778.81 989.17 789.94"
                  />
                  <polygon
                    className="cls-5"
                    points="971.77 776.54 990 767.64 991.49 768.62 977.12 775.96 989.18 778.78 987.44 780.36 971.77 776.54"
                  />
                  <polygon
                    className="cls-48"
                    points="991.49 768.57 991.56 774.13 996.7 771.7 995.11 770.83 991.62 772.34 991.61 768.57 991.49 768.57"
                  />
                  <polygon
                    className="cls-77"
                    points="996.7 771.7 995.14 770.85 995.2 765.83 996.7 766.35 996.7 771.7"
                  />
                  <polygon
                    className="cls-69"
                    points="1000.86 769.52 996.7 771.68 996.7 766.33 1000.89 764.59 1000.86 769.52"
                  />
                  <polygon
                    className="cls-88"
                    points="998.23 770.88 996.7 771.7 996.7 766.35 998.23 765.72 998.23 770.88"
                  />
                  <polygon
                    className="cls-73"
                    points="1014.88 770.95 1013.68 771.87 1013.68 766.73 1014.88 765.93 1014.88 770.95"
                  />
                  <polygon
                    className="cls-97"
                    points="1019.74 773.05 1013.68 771.87 1014.88 770.95 1019.74 771.86 1019.74 773.05"
                  />
                  <polygon
                    className="cls-37"
                    points="1029.56 775.18 1019.74 773.05 1019.74 767.41 1036.25 770.45 1029.56 775.18"
                  />
                  <polygon
                    className="cls-87"
                    points="1025.52 774.32 1019.74 773.05 1019.74 767.41 1025.52 768.48 1025.52 774.32"
                  />
                  <path
                    className="cls-87"
                    d="M1031.39,773.89l-1.83,1.29c-1.27-.29-2.53-.58-3.8-.87v-5.8l5.74,1.06-.11,4.31Z"
                  />
                  <polygon
                    className="cls-36"
                    points="1015.62 799.15 995.29 793.64 995.38 781.69 1015.62 786.88 1015.62 799.15"
                  />
                  <polygon
                    className="cls-34"
                    points="1000.32 795 995.29 793.64 995.29 781.69 1000.32 782.95 1000.32 795"
                  />
                  <polygon
                    className="cls-34"
                    points="1009.88 797.59 1000.6 795 1000.6 783.03 1009.88 785.41 1009.88 797.59"
                  />
                  <polygon
                    className="cls-34"
                    points="1015.62 799.15 1010.21 797.59 1010.21 785.49 1015.62 786.88 1015.62 799.15"
                  />
                  <polygon
                    className="cls-13"
                    points="1040.31 780.07 1015.62 799.15 1015.62 786.88 1040.31 770.19 1040.31 780.07"
                  />
                  <polygon
                    className="cls-32"
                    points="1018.82 796.68 1015.62 799.15 1015.62 786.88 1018.82 784.72 1018.82 796.68"
                  />
                  <polygon
                    className="cls-32"
                    points="1023.74 792.9 1019.06 796.5 1019.06 784.56 1023.74 781.38 1023.74 792.9"
                  />
                  <polygon
                    className="cls-76"
                    points="1028.38 789.29 1023.91 792.74 1023.91 781.27 1028.38 778.24 1028.38 789.29"
                  />
                  <polygon
                    className="cls-76"
                    points="1032.92 785.75 1028.63 789.12 1028.62 778.09 1032.91 775.17 1032.92 785.75"
                  />
                  <polygon
                    className="cls-76"
                    points="1037.11 782.54 1033.16 785.49 1033.16 775 1037.11 772.31 1037.11 782.54"
                  />
                  <polygon
                    className="cls-76"
                    points="1040.31 780.15 1037.32 782.37 1037.32 772.18 1040.31 770.19 1040.31 780.15"
                  />
                  <polygon
                    className="cls-87"
                    points="1031.76 769.62 1031.76 773.63 1036.25 770.45 1031.76 769.62"
                  />
                  <polygon
                    className="cls-48"
                    points="1019.74 767.41 1021.68 766.83 1040.19 770.19 1015.62 786.88 995.29 781.69 998.23 780 1015.09 784.67 1036.25 770.45 1019.74 767.41"
                  />
                  <polygon
                    className="cls-88"
                    points="1000.86 769.52 998.41 770.77 998.41 765.64 1000.89 764.61 1000.86 769.52"
                  />
                  <polygon
                    className="cls-100"
                    points="1004.83 770.25 1000.86 769.52 1000.9 764.62 1004.88 765.27 1004.83 770.25"
                  />
                  <polygon
                    className="cls-100"
                    points="1011.26 771.42 1005.04 770.29 1005.04 765.3 1011.26 766.33 1011.26 771.42"
                  />
                  <polygon
                    className="cls-100"
                    points="1013.68 771.87 1011.49 771.42 1011.49 766.37 1013.68 766.73 1013.68 771.87"
                  />
                  <polygon
                    className="cls-12"
                    points="1024.3 778.48 1000.86 773.74 1000.86 769.52 1029.29 775.13 1024.3 778.48"
                  />
                  <polygon
                    className="cls-100"
                    points="1002.21 774 1000.86 773.74 1000.86 769.52 1002.21 769.77 1002.21 774"
                  />
                  <polygon
                    className="cls-100"
                    points="1007.2 775.02 1002.36 774 1002.36 769.82 1007.23 770.77 1007.2 775.02"
                  />
                  <polygon
                    className="cls-100"
                    points="1012.28 776.05 1007.4 775.02 1007.4 770.81 1012.29 771.74 1012.28 776.05"
                  />
                  <polygon
                    className="cls-100"
                    points="1017.43 777.09 1012.49 776.08 1012.49 771.81 1017.38 772.78 1017.43 777.09"
                  />
                  <polygon
                    className="cls-100"
                    points="1022.69 778.15 1017.74 777.09 1017.74 772.85 1022.69 773.82 1022.69 778.15"
                  />
                  <path
                    className="cls-100"
                    d="M1028.06,775.91l-3.73,2.57c-.48-.08-.96-.16-1.43-.24v-4.36l5.18.98-.02,1.05Z"
                  />
                  <path
                    className="cls-69"
                    d="M1000.86,769.52c-1.02.56-2.56,1.38-4.45,2.31-1.58.78-2.75,1.32-3.27,1.56-1.85.86-4.66,2.19-8.77,4.26,1.6.37,3.2.75,4.8,1.12l.02,1.72,11.68-6.86v-4.12Z"
                  />
                  <polygon
                    className="cls-73"
                    points="994.8 777.2 990.43 779.82 990.39 774.69 994.8 772.6 994.8 777.2"
                  />
                  <polygon
                    className="cls-73"
                    points="999.42 774.49 994.95 777.13 994.95 772.6 999.34 770.31 999.42 774.49"
                  />
                  <polygon
                    className="cls-73"
                    points="1000.86 773.74 999.53 774.39 999.53 770.25 1000.86 769.52 1000.86 773.74"
                  />
                  <path
                    className="cls-73"
                    d="M990.2,779.9c-.34.2-.68.4-1.02.6,0-.52-.02-1.17-.02-1.7-1.45-.39-3.33-.75-4.79-1.14l5.79-2.87.04,5.11Z"
                  />
                  <polygon
                    className="cls-73"
                    points="991.56 774.15 984.38 777.62 984.35 772.19 991.48 768.62 991.56 774.15"
                  />
                  <polygon
                    className="cls-73"
                    points="988.86 775.27 984.05 777.64 984.05 772.32 988.86 769.93 988.86 775.27"
                  />
                  <polygon
                    className="cls-73"
                    points="991.56 774.15 989.55 775.1 989.55 769.62 991.49 768.62 991.56 774.15"
                  />
                  <polygon
                    className="cls-73"
                    points="984.14 777.61 977.12 775.96 977.12 775.96 984.11 772.32 984.14 777.61"
                  />
                  <polygon
                    className="cls-57"
                    points="974.44 788.23 971.77 787.47 971.77 776.54 974.44 777.15 974.44 788.23"
                  />
                  <polygon
                    className="cls-80"
                    points="983.62 779.42 985.23 778.12 983.89 779.49 983.62 779.42"
                  />
                  <polygon
                    className="cls-80"
                    points="974.44 777.19 976.05 775.89 974.71 777.26 974.44 777.19"
                  />
                </g>
              </g>
            </g>
            <g id="box-group-2-slide-3" style={{ transform: `translateY(${box2Y}px)`, transition: 'transform 0.1s ease-out' }}>
              <g>
                <g>
                  <polygon
                    className="cls-80"
                    points="1151.23 822.6 1130.25 818.41 1130.25 807.53 1151.27 811.42 1151.23 822.6"
                  />
                  <polygon
                    className="cls-12"
                    points="1186.44 803.01 1169.25 800.66 1169.28 795.73 1186.44 797.86 1186.44 803.01"
                  />
                  <polygon
                    className="cls-11"
                    points="1151.23 822.6 1146.47 821.69 1146.47 810.34 1151.23 811.36 1151.23 822.6"
                  />
                  <polygon
                    className="cls-11"
                    points="1146.11 821.67 1134.16 819.25 1134.16 808.21 1146.11 810.38 1146.11 821.67"
                  />
                  <polygon
                    className="cls-38"
                    points="1153.55 820.98 1151.21 822.56 1151.21 811.38 1153.55 809.8 1153.55 820.98"
                  />
                  <polygon
                    className="cls-5"
                    points="1130.21 807.53 1154.67 798.6 1156.67 799.58 1137.39 806.95 1153.57 809.78 1151.23 811.36 1130.21 807.53"
                  />
                  <polygon
                    className="cls-48"
                    points="1156.67 799.53 1156.76 805.11 1163.66 802.67 1161.53 801.8 1156.84 803.31 1156.82 799.53 1156.67 799.53"
                  />
                  <polygon
                    className="cls-77"
                    points="1163.66 802.67 1161.57 801.81 1161.64 796.77 1163.66 797.3 1163.66 802.67"
                  />
                  <polygon
                    className="cls-69"
                    points="1169.24 800.48 1163.66 802.65 1163.66 797.28 1169.28 795.53 1169.24 800.48"
                  />
                  <polygon
                    className="cls-88"
                    points="1165.71 801.85 1163.66 802.67 1163.66 797.3 1165.71 796.67 1165.71 801.85"
                  />
                  <polygon
                    className="cls-73"
                    points="1188.06 802.07 1186.44 803 1186.44 797.84 1188.06 797.04 1188.06 802.07"
                  />
                  <polygon
                    className="cls-97"
                    points="1194.57 804.18 1186.43 803 1188.06 802.06 1194.57 802.98 1194.57 804.18"
                  />
                  <polygon
                    className="cls-37"
                    points="1207.75 806.17 1194.57 804.03 1194.57 798.36 1216.73 801.42 1207.75 806.17"
                  />
                  <polygon
                    className="cls-87"
                    points="1202.33 805.36 1194.56 804.36 1194.56 798.34 1202.33 799.41 1202.33 805.36"
                  />
                  <path
                    className="cls-87"
                    d="M1210.2,804.87l-2.46,1.3c-1.7-.29-3.4-.58-5.1-.87v-5.82l7.7,1.06-.14,4.33Z"
                  />
                  <polygon
                    className="cls-36"
                    points="1189.05 830.22 1161.76 824.69 1161.89 812.7 1189.05 817.91 1189.05 830.22"
                  />
                  <polygon
                    className="cls-34"
                    points="1168.51 826.06 1161.76 824.69 1161.76 812.7 1168.51 813.97 1168.51 826.06"
                  />
                  <polygon
                    className="cls-34"
                    points="1181.34 828.66 1168.89 826.06 1168.89 814.04 1181.34 816.43 1181.34 828.66"
                  />
                  <polygon
                    className="cls-34"
                    points="1189.05 830.23 1181.79 828.66 1181.79 816.52 1189.05 817.91 1189.05 830.23"
                  />
                  <polygon
                    className="cls-13"
                    points="1222.17 811.07 1189.05 830.23 1189.05 817.91 1222.17 801.15 1222.17 811.07"
                  />
                  <polygon
                    className="cls-32"
                    points="1193.35 827.74 1189.05 830.23 1189.05 817.91 1193.35 815.74 1193.35 827.74"
                  />
                  <polygon
                    className="cls-32"
                    points="1199.95 823.95 1193.66 827.56 1193.66 815.58 1199.95 812.39 1199.95 823.95"
                  />
                  <polygon
                    className="cls-76"
                    points="1206.17 820.33 1200.18 823.79 1200.18 812.27 1206.17 809.24 1206.17 820.33"
                  />
                  <polygon
                    className="cls-76"
                    points="1212.27 816.78 1206.51 820.15 1206.49 809.08 1212.25 806.15 1212.27 816.78"
                  />
                  <polygon
                    className="cls-76"
                    points="1217.89 813.55 1212.58 816.51 1212.58 805.98 1217.89 803.28 1217.89 813.55"
                  />
                  <polygon
                    className="cls-76"
                    points="1222.17 811.15 1218.17 813.39 1218.17 803.15 1222.17 801.15 1222.17 811.15"
                  />
                  <polygon
                    className="cls-87"
                    points="1210.7 800.59 1210.7 804.61 1216.73 801.42 1210.7 800.59"
                  />
                  <polygon
                    className="cls-48"
                    points="1194.56 798.34 1197.19 797.78 1222.02 801.15 1189.05 817.91 1161.76 812.7 1165.71 811 1188.34 815.69 1216.73 801.42 1194.56 798.34"
                  />
                  <polygon
                    className="cls-88"
                    points="1169.25 800.48 1165.95 801.73 1165.95 796.59 1169.28 795.55 1169.25 800.48"
                  />
                  <polygon
                    className="cls-100"
                    points="1174.55 801.22 1169.23 800.49 1169.28 795.57 1174.62 796.23 1174.55 801.22"
                  />
                  <polygon
                    className="cls-100"
                    points="1183.2 802.54 1174.85 801.25 1174.85 796.25 1183.2 797.28 1183.2 802.54"
                  />
                  <polygon
                    className="cls-100"
                    points="1186.4 803.01 1183.47 802.57 1183.47 797.49 1186.4 797.86 1186.4 803.01"
                  />
                  <polygon
                    className="cls-12"
                    points="1200.7 809.48 1169.25 804.71 1169.25 800.48 1207.4 806.11 1200.7 809.48"
                  />
                  <polygon
                    className="cls-100"
                    points="1171.05 804.98 1169.25 804.71 1169.25 800.48 1171.05 800.73 1171.05 804.98"
                  />
                  <polygon
                    className="cls-100"
                    points="1177.75 806 1171.26 804.98 1171.26 800.78 1177.79 801.73 1177.75 806"
                  />
                  <polygon
                    className="cls-100"
                    points="1184.56 807.03 1178.01 806 1178.01 801.78 1184.58 802.71 1184.56 807.03"
                  />
                  <polygon
                    className="cls-100"
                    points="1191.47 808.08 1184.85 807.06 1184.85 802.78 1191.41 803.75 1191.47 808.08"
                  />
                  <polygon
                    className="cls-100"
                    points="1198.54 809.15 1191.89 808.08 1191.89 803.82 1198.54 804.8 1198.54 809.15"
                  />
                  <path
                    className="cls-100"
                    d="M1205.74,806.9l-5.01,2.58c-.64-.08-1.28-.16-1.92-.24v-4.38l6.95.99-.02,1.06Z"
                  />
                  <path
                    className="cls-69"
                    d="M1169.24,800.48c-1.37.56-3.44,1.38-5.97,2.32-2.13.79-3.69,1.33-4.39,1.57-2.49.86-6.26,2.2-11.77,4.28,2.15.38,4.29.75,6.44,1.13l.02,1.73,15.67-6.89v-4.13Z"
                  />
                  <polygon
                    className="cls-73"
                    points="1161.12 808.2 1155.25 810.82 1155.19 805.67 1161.12 803.57 1161.12 808.2"
                  />
                  <polygon
                    className="cls-73"
                    points="1167.31 805.47 1161.31 808.12 1161.31 803.57 1167.2 801.27 1167.31 805.47"
                  />
                  <polygon
                    className="cls-73"
                    points="1169.25 804.71 1167.46 805.37 1167.46 801.21 1169.25 800.48 1169.25 804.71"
                  />
                  <path
                    className="cls-73"
                    d="M1154.94,810.91c-.46.2-.91.4-1.37.6,0-.53-.02-1.18-.02-1.71-1.95-.39-4.47-.76-6.42-1.15l7.77-2.88.05,5.13Z"
                  />
                  <polygon
                    className="cls-73"
                    points="1156.76 805.13 1147.12 808.61 1147.08 803.17 1156.65 799.58 1156.76 805.13"
                  />
                  <polygon
                    className="cls-73"
                    points="1153.14 806.25 1146.69 808.63 1146.69 803.29 1153.14 800.9 1153.14 806.25"
                  />
                  <polygon
                    className="cls-73"
                    points="1156.76 805.13 1154.06 806.09 1154.06 800.59 1156.67 799.58 1156.76 805.13"
                  />
                  <polygon
                    className="cls-73"
                    points="1146.81 808.6 1137.39 806.95 1137.39 806.95 1146.76 803.29 1146.81 808.6"
                  />
                  <polygon
                    className="cls-57"
                    points="1133.79 819.26 1130.21 818.5 1130.21 807.53 1133.79 808.14 1133.79 819.26"
                  />
                  <polygon
                    className="cls-80"
                    points="1146.11 810.42 1148.27 809.12 1146.47 810.49 1146.11 810.42"
                  />
                  <polygon
                    className="cls-80"
                    points="1133.79 808.18 1135.96 806.88 1134.16 808.25 1133.79 808.18"
                  />
                </g>
                <polygon
                  className="cls-5"
                  points="1154.67 798.6 1156.67 799.58 1163.61 797.29 1161.64 796.77 1154.67 798.6"
                />
                <polygon
                  className="cls-88"
                  points="1156.76 805.1 1163.66 802.65 1163.66 797.29 1156.67 799.56 1156.76 805.1"
                />
                <polygon
                  className="cls-48"
                  points="1188.05 797.04 1197.22 797.7 1194.6 798.26 1186.44 797.84 1188.05 797.04"
                />
                <polygon
                  className="cls-100"
                  points="1186.44 803.12 1194.56 804.36 1194.56 798.33 1186.44 797.82 1186.44 803.12"
                />
                <polygon
                  className="cls-59"
                  points="1161.64 796.77 1163.67 797.3 1169.3 795.56 1186.4 797.86 1188.06 797.04 1169.29 794.29 1161.64 796.77"
                />
              </g>
              <g>
                <g>
                  <polygon
                    className="cls-80"
                    points="1151.23 813.36 1130.25 809.18 1130.25 798.29 1151.27 802.18 1151.23 813.36"
                  />
                  <polygon
                    className="cls-12"
                    points="1186.44 793.77 1169.25 791.42 1169.28 786.49 1186.44 788.62 1186.44 793.77"
                  />
                  <polygon
                    className="cls-11"
                    points="1151.23 813.36 1146.47 812.45 1146.47 801.1 1151.23 802.12 1151.23 813.36"
                  />
                  <polygon
                    className="cls-11"
                    points="1146.11 812.44 1134.16 810.01 1134.16 798.97 1146.11 801.15 1146.11 812.44"
                  />
                  <polygon
                    className="cls-38"
                    points="1153.55 811.74 1151.21 813.32 1151.21 802.15 1153.55 800.57 1153.55 811.74"
                  />
                  <polygon
                    className="cls-5"
                    points="1130.21 798.29 1154.67 789.36 1156.67 790.34 1137.39 797.71 1153.57 800.54 1151.23 802.12 1130.21 798.29"
                  />
                  <polygon
                    className="cls-48"
                    points="1156.67 790.29 1156.76 795.87 1163.66 793.43 1161.53 792.56 1156.84 794.08 1156.82 790.29 1156.67 790.29"
                  />
                  <polygon
                    className="cls-77"
                    points="1163.66 793.43 1161.57 792.58 1161.64 787.54 1163.66 788.07 1163.66 793.43"
                  />
                  <polygon
                    className="cls-69"
                    points="1169.24 791.25 1163.66 793.41 1163.66 788.04 1169.28 786.3 1169.24 791.25"
                  />
                  <polygon
                    className="cls-88"
                    points="1165.71 792.61 1163.66 793.43 1163.66 788.07 1165.71 787.43 1165.71 792.61"
                  />
                  <polygon
                    className="cls-73"
                    points="1188.06 792.84 1186.44 793.76 1186.44 788.61 1188.06 787.8 1188.06 792.84"
                  />
                  <polygon
                    className="cls-97"
                    points="1194.57 794.94 1186.43 793.76 1188.06 792.83 1194.57 793.74 1194.57 794.94"
                  />
                  <polygon
                    className="cls-37"
                    points="1207.75 796.93 1194.57 794.79 1194.57 789.13 1216.73 792.18 1207.75 796.93"
                  />
                  <polygon
                    className="cls-87"
                    points="1202.33 796.12 1194.56 795.13 1194.56 789.1 1202.33 790.18 1202.33 796.12"
                  />
                  <path
                    className="cls-87"
                    d="M1210.2,795.63l-2.46,1.3c-1.7-.29-3.4-.58-5.1-.87v-5.82l7.7,1.06-.14,4.33Z"
                  />
                  <polygon
                    className="cls-36"
                    points="1189.05 820.99 1161.76 815.46 1161.89 803.46 1189.05 808.67 1189.05 820.99"
                  />
                  <polygon
                    className="cls-34"
                    points="1168.51 816.82 1161.76 815.46 1161.76 803.46 1168.51 804.73 1168.51 816.82"
                  />
                  <polygon
                    className="cls-34"
                    points="1181.34 819.42 1168.89 816.82 1168.89 804.8 1181.34 807.19 1181.34 819.42"
                  />
                  <polygon
                    className="cls-34"
                    points="1189.05 820.99 1181.79 819.42 1181.79 807.28 1189.05 808.67 1189.05 820.99"
                  />
                  <polygon
                    className="cls-13"
                    points="1222.17 801.83 1189.05 820.99 1189.05 808.67 1222.17 791.91 1222.17 801.83"
                  />
                  <polygon
                    className="cls-32"
                    points="1193.35 818.51 1189.05 820.99 1189.05 808.67 1193.35 806.5 1193.35 818.51"
                  />
                  <polygon
                    className="cls-32"
                    points="1199.95 814.72 1193.66 818.33 1193.66 806.34 1199.95 803.15 1199.95 814.72"
                  />
                  <polygon
                    className="cls-76"
                    points="1206.17 811.09 1200.18 814.56 1200.18 803.04 1206.17 800 1206.17 811.09"
                  />
                  <polygon
                    className="cls-76"
                    points="1212.27 807.54 1206.51 810.91 1206.49 799.85 1212.25 796.91 1212.27 807.54"
                  />
                  <polygon
                    className="cls-76"
                    points="1217.89 804.31 1212.58 807.28 1212.58 796.75 1217.89 794.04 1217.89 804.31"
                  />
                  <polygon
                    className="cls-76"
                    points="1222.17 801.91 1218.17 804.15 1218.17 793.91 1222.17 791.91 1222.17 801.91"
                  />
                  <polygon
                    className="cls-87"
                    points="1210.7 791.35 1210.7 795.37 1216.73 792.18 1210.7 791.35"
                  />
                  <polygon
                    className="cls-48"
                    points="1194.56 789.1 1197.19 788.54 1222.02 791.91 1189.05 808.67 1161.76 803.46 1165.71 801.76 1188.34 806.45 1216.73 792.18 1194.56 789.1"
                  />
                  <polygon
                    className="cls-88"
                    points="1169.25 791.25 1165.95 792.5 1165.95 787.35 1169.28 786.32 1169.25 791.25"
                  />
                  <polygon
                    className="cls-100"
                    points="1174.55 791.98 1169.23 791.25 1169.28 786.33 1174.62 786.99 1174.55 791.98"
                  />
                  <polygon
                    className="cls-100"
                    points="1183.2 793.3 1174.85 792.01 1174.85 787.01 1183.2 788.04 1183.2 793.3"
                  />
                  <polygon
                    className="cls-100"
                    points="1186.4 793.77 1183.47 793.33 1183.47 788.26 1186.4 788.62 1186.4 793.77"
                  />
                  <polygon
                    className="cls-12"
                    points="1200.7 800.24 1169.25 795.48 1169.25 791.25 1207.4 796.87 1200.7 800.24"
                  />
                  <polygon
                    className="cls-100"
                    points="1171.05 795.74 1169.25 795.48 1169.25 791.25 1171.05 791.49 1171.05 795.74"
                  />
                  <polygon
                    className="cls-100"
                    points="1177.75 796.76 1171.26 795.74 1171.26 791.54 1177.79 792.5 1177.75 796.76"
                  />
                  <polygon
                    className="cls-100"
                    points="1184.56 797.79 1178.01 796.76 1178.01 792.54 1184.58 793.47 1184.56 797.79"
                  />
                  <polygon
                    className="cls-100"
                    points="1191.47 798.84 1184.85 797.83 1184.85 793.55 1191.41 794.51 1191.47 798.84"
                  />
                  <polygon
                    className="cls-100"
                    points="1198.54 799.91 1191.89 798.84 1191.89 794.58 1198.54 795.56 1198.54 799.91"
                  />
                  <path
                    className="cls-100"
                    d="M1205.74,797.66c-1.67.86-3.34,1.72-5.01,2.58-.64-.08-1.28-.16-1.92-.24v-4.38l6.95.99-.02,1.06Z"
                  />
                  <path
                    className="cls-69"
                    d="M1169.24,791.25c-1.37.56-3.44,1.38-5.97,2.32-2.13.79-3.69,1.33-4.39,1.57-2.49.86-6.26,2.2-11.77,4.28,2.15.38,4.29.75,6.44,1.13l.02,1.73,15.67-6.89v-4.13Z"
                  />
                  <polygon
                    className="cls-73"
                    points="1161.12 798.96 1155.25 801.58 1155.19 796.43 1161.12 794.33 1161.12 798.96"
                  />
                  <polygon
                    className="cls-73"
                    points="1167.31 796.23 1161.31 798.88 1161.31 794.33 1167.2 792.04 1167.31 796.23"
                  />
                  <polygon
                    className="cls-73"
                    points="1169.25 795.48 1167.46 796.13 1167.46 791.97 1169.25 791.25 1169.25 795.48"
                  />
                  <path
                    className="cls-73"
                    d="M1154.94,801.67c-.46.2-.91.4-1.37.6,0-.53-.02-1.18-.02-1.71-1.95-.39-4.47-.76-6.42-1.15l7.77-2.88.05,5.13Z"
                  />
                  <polygon
                    className="cls-73"
                    points="1156.76 795.89 1147.12 799.38 1147.08 793.93 1156.65 790.34 1156.76 795.89"
                  />
                  <polygon
                    className="cls-73"
                    points="1153.14 797.01 1146.69 799.39 1146.69 794.05 1153.14 791.66 1153.14 797.01"
                  />
                  <polygon
                    className="cls-73"
                    points="1156.76 795.89 1154.06 796.85 1154.06 791.35 1156.67 790.34 1156.76 795.89"
                  />
                  <polygon
                    className="cls-73"
                    points="1146.81 799.36 1137.39 797.71 1137.39 797.71 1146.76 794.05 1146.81 799.36"
                  />
                  <polygon
                    className="cls-57"
                    points="1133.79 810.02 1130.21 809.26 1130.21 798.29 1133.79 798.9 1133.79 810.02"
                  />
                  <polygon
                    className="cls-80"
                    points="1146.11 801.18 1148.27 799.88 1146.47 801.25 1146.11 801.18"
                  />
                  <polygon
                    className="cls-80"
                    points="1133.79 798.94 1135.96 797.64 1134.16 799.01 1133.79 798.94"
                  />
                </g>
                <polygon
                  className="cls-5"
                  points="1154.67 789.36 1156.67 790.34 1163.61 788.05 1161.64 787.54 1154.67 789.36"
                />
                <polygon
                  className="cls-88"
                  points="1156.76 795.86 1163.66 793.41 1163.66 788.05 1156.67 790.32 1156.76 795.86"
                />
                <polygon
                  className="cls-48"
                  points="1188.05 787.8 1197.22 788.46 1194.6 789.03 1186.44 788.61 1188.05 787.8"
                />
                <polygon
                  className="cls-100"
                  points="1186.44 793.88 1194.56 795.13 1194.56 789.09 1186.44 788.59 1186.44 793.88"
                />
                <polygon
                  className="cls-59"
                  points="1161.64 787.54 1163.67 788.06 1169.3 786.33 1186.4 788.62 1188.06 787.8 1169.29 785.05 1161.64 787.54"
                />
              </g>
              <g>
                <polygon
                  className="cls-80"
                  points="1151.23 803.93 1130.25 799.84 1130.25 789.2 1151.27 793 1151.23 803.93"
                />
                <polygon
                  className="cls-12"
                  points="1186.44 784.62 1169.25 782.32 1169.28 777.5 1186.44 779.58 1186.44 784.62"
                />
                <polygon
                  className="cls-11"
                  points="1151.23 803.93 1146.47 803.04 1146.47 791.94 1151.23 792.95 1151.23 803.93"
                />
                <polygon
                  className="cls-11"
                  points="1146.11 803.03 1134.16 800.65 1134.16 789.87 1146.11 791.99 1146.11 803.03"
                />
                <polygon
                  className="cls-38"
                  points="1153.55 802.34 1151.21 803.89 1151.21 792.97 1153.55 791.42 1153.55 802.34"
                />
                <polygon
                  className="cls-5"
                  points="1130.21 789.2 1154.67 780.47 1156.67 781.43 1137.39 788.64 1153.57 791.4 1151.23 792.95 1130.21 789.2"
                />
                <polygon
                  className="cls-48"
                  points="1156.67 781.38 1156.76 786.84 1163.66 784.45 1161.53 783.6 1156.84 785.08 1156.82 781.38 1156.67 781.38"
                />
                <polygon
                  className="cls-77"
                  points="1163.66 784.45 1161.57 783.62 1161.64 778.69 1163.66 779.21 1163.66 784.45"
                />
                <polygon
                  className="cls-69"
                  points="1169.24 782.32 1163.66 784.43 1163.66 779.19 1169.28 777.48 1169.24 782.32"
                />
                <polygon
                  className="cls-88"
                  points="1165.71 783.65 1163.66 784.45 1163.66 779.21 1165.71 778.58 1165.71 783.65"
                />
                <polygon
                  className="cls-73"
                  points="1188.06 783.71 1186.44 784.62 1186.44 779.58 1188.06 778.79 1188.06 783.71"
                />
                <polygon
                  className="cls-97"
                  points="1194.57 785.78 1186.44 784.62 1188.06 783.71 1194.57 784.61 1194.57 785.78"
                />
                <polygon
                  className="cls-37"
                  points="1207.75 787.87 1194.57 785.78 1194.57 780.24 1216.73 783.23 1207.75 787.87"
                />
                <polygon
                  className="cls-87"
                  points="1202.34 787.02 1194.57 785.78 1194.57 780.24 1202.34 781.29 1202.34 787.02"
                />
                <path
                  className="cls-87"
                  d="M1210.2,786.6c-.82.42-1.64.85-2.46,1.27-1.7-.28-3.4-.57-5.1-.85v-5.69l7.7,1.04-.14,4.23Z"
                />
                <polygon
                  className="cls-36"
                  points="1189.05 811.38 1161.76 805.98 1161.89 794.25 1189.05 799.35 1189.05 811.38"
                />
                <polygon
                  className="cls-34"
                  points="1168.51 807.31 1161.76 805.98 1161.76 794.25 1168.51 795.49 1168.51 807.31"
                />
                <polygon
                  className="cls-34"
                  points="1181.34 809.86 1168.89 807.31 1168.89 795.57 1181.34 797.9 1181.34 809.86"
                />
                <polygon
                  className="cls-34"
                  points="1189.05 811.38 1181.79 809.86 1181.79 797.98 1189.05 799.35 1189.05 811.38"
                />
                <polygon
                  className="cls-13"
                  points="1222.17 792.66 1189.05 811.38 1189.05 799.35 1222.17 782.97 1222.17 792.66"
                />
                <polygon
                  className="cls-32"
                  points="1193.35 808.96 1189.05 811.38 1189.05 799.35 1193.35 797.22 1193.35 808.96"
                />
                <polygon
                  className="cls-32"
                  points="1199.95 805.25 1193.66 808.78 1193.66 797.07 1199.95 793.95 1199.95 805.25"
                />
                <polygon
                  className="cls-76"
                  points="1206.17 801.71 1200.18 805.1 1200.18 793.84 1206.17 790.87 1206.17 801.71"
                />
                <polygon
                  className="cls-76"
                  points="1212.27 798.24 1206.51 801.54 1206.49 790.72 1212.25 787.85 1212.27 798.24"
                />
                <polygon
                  className="cls-76"
                  points="1217.89 795.08 1212.58 797.98 1212.58 787.69 1217.89 785.05 1217.89 795.08"
                />
                <polygon
                  className="cls-76"
                  points="1222.17 792.74 1218.17 794.93 1218.17 784.92 1222.17 782.97 1222.17 792.74"
                />
                <polygon
                  className="cls-87"
                  points="1210.7 782.42 1210.7 786.34 1216.73 783.23 1210.7 782.42"
                />
                <polygon
                  className="cls-48"
                  points="1194.57 780.24 1197.19 779.67 1222.02 782.97 1189.05 799.35 1161.76 794.25 1165.71 792.59 1188.34 797.18 1216.73 783.23 1194.57 780.24"
                />
                <polygon
                  className="cls-88"
                  points="1169.25 782.32 1165.95 783.54 1165.95 778.51 1169.28 777.5 1169.25 782.32"
                />
                <polygon
                  className="cls-100"
                  points="1174.57 783.03 1169.25 782.32 1169.3 777.51 1174.64 778.15 1174.57 783.03"
                />
                <polygon
                  className="cls-100"
                  points="1183.2 784.18 1174.85 783.07 1174.85 778.17 1183.2 779.19 1183.2 784.18"
                />
                <polygon
                  className="cls-100"
                  points="1186.44 784.62 1183.51 784.18 1183.51 779.23 1186.44 779.58 1186.44 784.62"
                />
                <polygon
                  className="cls-12"
                  points="1200.7 791.1 1169.25 786.45 1169.25 782.32 1207.4 787.81 1200.7 791.1"
                />
                <polygon
                  className="cls-100"
                  points="1171.05 786.71 1169.25 786.45 1169.25 782.32 1171.05 782.56 1171.05 786.71"
                />
                <polygon
                  className="cls-100"
                  points="1177.75 787.71 1171.26 786.71 1171.26 782.61 1177.79 783.54 1177.75 787.71"
                />
                <polygon
                  className="cls-100"
                  points="1184.56 788.72 1178.01 787.71 1178.01 783.58 1184.58 784.49 1184.56 788.72"
                />
                <polygon
                  className="cls-100"
                  points="1191.47 789.74 1184.85 788.75 1184.85 784.57 1191.41 785.51 1191.47 789.74"
                />
                <polygon
                  className="cls-100"
                  points="1198.54 790.78 1191.89 789.74 1191.89 785.58 1198.54 786.54 1198.54 790.78"
                />
                <path
                  className="cls-100"
                  d="M1205.74,788.59c-1.67.84-3.34,1.68-5.01,2.52-.64-.08-1.28-.16-1.92-.23v-4.28l6.95.96-.02,1.03Z"
                />
                <path
                  className="cls-69"
                  d="M1169.24,782.32c-1.37.55-3.44,1.35-5.97,2.27-2.13.77-3.69,1.3-4.39,1.53-2.49.84-6.26,2.15-11.77,4.18,2.15.37,4.29.73,6.44,1.1l.02,1.69,15.67-6.73v-4.04Z"
                />
                <polygon
                  className="cls-73"
                  points="1161.12 789.85 1155.25 792.42 1155.19 787.38 1161.12 785.33 1161.12 789.85"
                />
                <polygon
                  className="cls-73"
                  points="1167.31 787.19 1161.31 789.78 1161.31 785.33 1167.2 783.09 1167.31 787.19"
                />
                <polygon
                  className="cls-73"
                  points="1169.25 786.45 1167.46 787.09 1167.46 783.03 1169.25 782.32 1169.25 786.45"
                />
                <path
                  className="cls-73"
                  d="M1154.94,792.5c-.46.2-.91.39-1.37.59,0-.51-.02-1.15-.02-1.67-1.95-.38-4.47-.74-6.42-1.12l7.77-2.81.05,5.01Z"
                />
                <polygon
                  className="cls-73"
                  points="1156.76 786.85 1147.12 790.26 1147.08 784.94 1156.65 781.43 1156.76 786.85"
                />
                <polygon
                  className="cls-73"
                  points="1153.14 787.95 1146.69 790.28 1146.69 785.06 1153.14 782.72 1153.14 787.95"
                />
                <polygon
                  className="cls-73"
                  points="1156.76 786.85 1154.06 787.79 1154.06 782.42 1156.67 781.43 1156.76 786.85"
                />
                <polygon
                  className="cls-73"
                  points="1146.81 790.25 1137.39 788.64 1137.39 788.64 1146.76 785.06 1146.81 790.25"
                />
                <polygon
                  className="cls-57"
                  points="1133.79 800.67 1130.21 799.92 1130.21 789.2 1133.79 789.8 1133.79 800.67"
                />
                <polygon
                  className="cls-80"
                  points="1146.11 792.03 1148.27 790.75 1146.47 792.09 1146.11 792.03"
                />
                <polygon
                  className="cls-80"
                  points="1133.79 789.84 1135.96 788.57 1134.16 789.91 1133.79 789.84"
                />
              </g>
            </g>
            <g id="box-group-3-slide-3" style={{ transform: `translateY(${box3Y}px)`, transition: 'transform 0.1s ease-out' }}>
              <g>
                <g>
                  <polygon
                    className="cls-80"
                    points="1161.06 795.26 1145.42 791 1145.42 779.9 1161.08 783.87 1161.06 795.26"
                  />
                  <polygon
                    className="cls-12"
                    points="1187.3 775.3 1174.48 772.9 1174.5 767.87 1187.3 770.05 1187.3 775.3"
                  />
                  <polygon
                    className="cls-11"
                    points="1161.06 795.26 1157.51 794.34 1157.51 782.76 1161.06 783.81 1161.06 795.26"
                  />
                  <polygon
                    className="cls-11"
                    points="1157.24 794.32 1148.33 791.85 1148.33 780.6 1157.24 782.81 1157.24 794.32"
                  />
                  <polygon
                    className="cls-38"
                    points="1162.78 793.61 1161.04 795.22 1161.04 783.83 1162.78 782.22 1162.78 793.61"
                  />
                  <polygon
                    className="cls-5"
                    points="1145.39 779.9 1163.62 770.8 1165.11 771.8 1150.74 779.31 1162.8 782.2 1161.06 783.81 1145.39 779.9"
                  />
                  <polygon
                    className="cls-48"
                    points="1165.11 771.75 1165.18 777.44 1170.32 774.95 1168.73 774.06 1165.23 775.61 1165.22 771.75 1165.11 771.75"
                  />
                  <polygon
                    className="cls-77"
                    points="1170.32 774.95 1168.76 774.08 1168.81 768.94 1170.32 769.48 1170.32 774.95"
                  />
                  <polygon
                    className="cls-69"
                    points="1174.47 772.72 1170.32 774.93 1170.32 769.46 1174.5 767.67 1174.47 772.72"
                  />
                  <polygon
                    className="cls-88"
                    points="1171.84 774.12 1170.32 774.95 1170.32 769.48 1171.84 768.83 1171.84 774.12"
                  />
                  <polygon
                    className="cls-73"
                    points="1188.5 774.34 1187.3 775.28 1187.3 770.03 1188.5 769.21 1188.5 774.34"
                  />
                  <polygon
                    className="cls-97"
                    points="1193.35 776.49 1187.28 775.28 1188.5 774.33 1193.35 775.26 1193.35 776.49"
                  />
                  <polygon
                    className="cls-37"
                    points="1203.17 778.51 1193.35 776.34 1193.35 770.56 1209.87 773.67 1203.17 778.51"
                  />
                  <polygon
                    className="cls-87"
                    points="1199.13 777.69 1193.35 776.68 1193.35 770.54 1199.13 771.63 1199.13 777.69"
                  />
                  <path
                    className="cls-87"
                    d="M1205,777.19l-1.83,1.32c-1.27-.3-2.53-.59-3.8-.89v-5.93l5.74,1.08-.11,4.41Z"
                  />
                  <polygon
                    className="cls-36"
                    points="1189.24 803.04 1168.9 797.4 1169 785.17 1189.24 790.49 1189.24 803.04"
                  />
                  <polygon
                    className="cls-34"
                    points="1173.93 798.79 1168.9 797.4 1168.9 785.17 1173.93 786.47 1173.93 798.79"
                  />
                  <polygon
                    className="cls-34"
                    points="1183.5 801.45 1174.22 798.79 1174.22 786.54 1183.5 788.98 1183.5 801.45"
                  />
                  <polygon
                    className="cls-34"
                    points="1189.24 803.04 1183.83 801.45 1183.83 789.06 1189.24 790.49 1189.24 803.04"
                  />
                  <polygon
                    className="cls-13"
                    points="1213.92 783.51 1189.24 803.04 1189.24 790.49 1213.92 773.4 1213.92 783.51"
                  />
                  <polygon
                    className="cls-32"
                    points="1192.44 800.51 1189.24 803.04 1189.24 790.49 1192.44 788.27 1192.44 800.51"
                  />
                  <polygon
                    className="cls-32"
                    points="1197.36 796.65 1192.67 800.33 1192.67 788.11 1197.36 784.86 1197.36 796.65"
                  />
                  <polygon
                    className="cls-76"
                    points="1202 792.95 1197.53 796.48 1197.53 784.74 1202 781.64 1202 792.95"
                  />
                  <polygon
                    className="cls-76"
                    points="1206.54 789.33 1202.25 792.77 1202.24 781.49 1206.53 778.5 1206.54 789.33"
                  />
                  <polygon
                    className="cls-76"
                    points="1210.73 786.04 1206.78 789.06 1206.78 778.33 1210.73 775.57 1210.73 786.04"
                  />
                  <polygon
                    className="cls-76"
                    points="1213.92 783.59 1210.94 785.87 1210.94 775.44 1213.92 773.4 1213.92 783.59"
                  />
                  <polygon
                    className="cls-87"
                    points="1205.37 772.83 1205.37 776.92 1209.87 773.67 1205.37 772.83"
                  />
                  <polygon
                    className="cls-48"
                    points="1193.35 770.54 1195.3 769.97 1213.81 773.4 1189.24 790.49 1168.9 785.17 1171.84 783.44 1188.71 788.22 1209.87 773.67 1193.35 770.54"
                  />
                  <polygon
                    className="cls-88"
                    points="1174.48 772.72 1172.02 774 1172.02 768.75 1174.5 767.7 1174.48 772.72"
                  />
                  <polygon
                    className="cls-100"
                    points="1178.43 773.47 1174.47 772.73 1174.5 767.71 1178.49 768.38 1178.43 773.47"
                  />
                  <polygon
                    className="cls-100"
                    points="1184.88 774.82 1178.66 773.5 1178.66 768.4 1184.88 769.46 1184.88 774.82"
                  />
                  <polygon
                    className="cls-100"
                    points="1187.27 775.3 1185.08 774.85 1185.08 769.68 1187.27 770.05 1187.27 775.3"
                  />
                  <polygon
                    className="cls-12"
                    points="1197.92 781.89 1174.48 777.03 1174.48 772.72 1202.91 778.46 1197.92 781.89"
                  />
                  <polygon
                    className="cls-100"
                    points="1175.82 777.3 1174.48 777.03 1174.48 772.72 1175.82 772.97 1175.82 777.3"
                  />
                  <polygon
                    className="cls-100"
                    points="1180.82 778.35 1175.98 777.3 1175.98 773.02 1180.85 774 1180.82 778.35"
                  />
                  <polygon
                    className="cls-100"
                    points="1185.89 779.4 1181.01 778.35 1181.01 774.04 1185.91 774.99 1185.89 779.4"
                  />
                  <polygon
                    className="cls-100"
                    points="1191.04 780.46 1186.11 779.43 1186.11 775.07 1191 776.05 1191.04 780.46"
                  />
                  <polygon
                    className="cls-100"
                    points="1196.31 781.55 1191.36 780.46 1191.36 776.12 1196.31 777.12 1196.31 781.55"
                  />
                  <path
                    className="cls-100"
                    d="M1201.68,779.26l-3.73,2.63c-.48-.08-.96-.16-1.43-.24v-4.47l5.18,1.01-.02,1.08Z"
                  />
                  <path
                    className="cls-69"
                    d="M1174.48,772.72c-1.02.57-2.56,1.41-4.45,2.37-1.58.8-2.75,1.35-3.27,1.6-1.85.88-4.66,2.24-8.77,4.36,1.6.38,3.2.77,4.8,1.15l.02,1.76,11.68-7.02v-4.21Z"
                  />
                  <polygon
                    className="cls-73"
                    points="1168.42 780.58 1164.05 783.26 1164.01 778.01 1168.42 775.87 1168.42 780.58"
                  />
                  <polygon
                    className="cls-73"
                    points="1173.04 777.8 1168.57 780.5 1168.57 775.87 1172.96 773.53 1173.04 777.8"
                  />
                  <polygon
                    className="cls-73"
                    points="1174.48 777.03 1173.15 777.7 1173.15 773.46 1174.48 772.72 1174.48 777.03"
                  />
                  <path
                    className="cls-73"
                    d="M1163.82,783.35c-.34.2-.68.41-1.02.61,0-.54-.02-1.2-.02-1.74-1.45-.4-3.33-.77-4.79-1.17l5.79-2.93.04,5.23Z"
                  />
                  <polygon
                    className="cls-73"
                    points="1165.18 777.45 1157.99 781.01 1157.96 775.46 1165.09 771.8 1165.18 777.45"
                  />
                  <polygon
                    className="cls-73"
                    points="1162.47 778.6 1157.67 781.03 1157.67 775.58 1162.47 773.14 1162.47 778.6"
                  />
                  <polygon
                    className="cls-73"
                    points="1165.18 777.45 1163.17 778.43 1163.17 772.83 1165.11 771.8 1165.18 777.45"
                  />
                  <polygon
                    className="cls-73"
                    points="1157.76 780.99 1150.74 779.31 1150.74 779.31 1157.72 775.58 1157.76 780.99"
                  />
                  <polygon
                    className="cls-57"
                    points="1148.06 791.86 1145.39 791.09 1145.39 779.9 1148.06 780.53 1148.06 791.86"
                  />
                  <polygon
                    className="cls-80"
                    points="1157.24 782.85 1158.85 781.52 1157.51 782.92 1157.24 782.85"
                  />
                  <polygon
                    className="cls-80"
                    points="1148.06 780.57 1149.67 779.24 1148.33 780.64 1148.06 780.57"
                  />
                </g>
                <polygon
                  className="cls-5"
                  points="1163.62 770.8 1165.1 771.8 1170.28 769.47 1168.81 768.94 1163.62 770.8"
                />
                <polygon
                  className="cls-88"
                  points="1165.18 777.42 1170.32 774.93 1170.32 769.46 1165.11 771.78 1165.18 777.42"
                />
                <polygon
                  className="cls-48"
                  points="1188.5 769.21 1195.33 769.88 1193.38 770.46 1187.29 770.03 1188.5 769.21"
                />
                <polygon
                  className="cls-100"
                  points="1187.29 775.41 1193.35 776.68 1193.35 770.53 1187.29 770.01 1187.29 775.41"
                />
                <polygon
                  className="cls-59"
                  points="1168.81 768.94 1170.32 769.48 1174.52 767.71 1187.27 770.05 1188.5 769.21 1174.51 766.41 1168.81 768.94"
                />
              </g>
              <g>
                <g>
                  <polygon
                    className="cls-80"
                    points="1161.06 785.85 1145.42 781.58 1145.42 770.48 1161.08 774.45 1161.06 785.85"
                  />
                  <polygon
                    className="cls-12"
                    points="1187.3 765.88 1174.48 763.48 1174.5 758.46 1187.3 760.63 1187.3 765.88"
                  />
                  <polygon
                    className="cls-11"
                    points="1161.06 785.85 1157.51 784.92 1157.51 773.35 1161.06 774.39 1161.06 785.85"
                  />
                  <polygon
                    className="cls-11"
                    points="1157.24 784.91 1148.33 782.43 1148.33 771.18 1157.24 773.4 1157.24 784.91"
                  />
                  <polygon
                    className="cls-38"
                    points="1162.78 784.2 1161.04 785.81 1161.04 774.42 1162.78 772.81 1162.78 784.2"
                  />
                  <polygon
                    className="cls-5"
                    points="1145.39 770.48 1163.62 761.38 1165.11 762.38 1150.74 769.9 1162.8 772.78 1161.06 774.39 1145.39 770.48"
                  />
                  <polygon
                    className="cls-48"
                    points="1165.11 762.33 1165.18 768.02 1170.32 765.53 1168.73 764.65 1165.23 766.19 1165.22 762.33 1165.11 762.33"
                  />
                  <polygon
                    className="cls-77"
                    points="1170.32 765.53 1168.76 764.66 1168.81 759.52 1170.32 760.06 1170.32 765.53"
                  />
                  <polygon
                    className="cls-69"
                    points="1174.47 763.31 1170.32 765.51 1170.32 760.04 1174.5 758.26 1174.47 763.31"
                  />
                  <polygon
                    className="cls-88"
                    points="1171.84 764.7 1170.32 765.53 1170.32 760.06 1171.84 759.41 1171.84 764.7"
                  />
                  <polygon
                    className="cls-73"
                    points="1188.5 764.93 1187.3 765.87 1187.3 760.61 1188.5 759.79 1188.5 764.93"
                  />
                  <polygon
                    className="cls-97"
                    points="1193.35 767.07 1187.28 765.87 1188.5 764.92 1193.35 765.85 1193.35 767.07"
                  />
                  <polygon
                    className="cls-37"
                    points="1203.17 769.1 1193.35 766.92 1193.35 761.14 1209.87 764.26 1203.17 769.1"
                  />
                  <polygon
                    className="cls-87"
                    points="1199.13 768.28 1193.35 767.26 1193.35 761.12 1199.13 762.21 1199.13 768.28"
                  />
                  <path
                    className="cls-87"
                    d="M1205,767.77l-1.83,1.32c-1.27-.3-2.53-.59-3.8-.89v-5.93l5.74,1.08-.11,4.41Z"
                  />
                  <polygon
                    className="cls-36"
                    points="1189.24 793.62 1168.9 787.98 1169 775.75 1189.24 781.07 1189.24 793.62"
                  />
                  <polygon
                    className="cls-34"
                    points="1173.93 789.38 1168.9 787.98 1168.9 775.75 1173.93 777.05 1173.93 789.38"
                  />
                  <polygon
                    className="cls-34"
                    points="1183.5 792.03 1174.22 789.38 1174.22 777.12 1183.5 779.56 1183.5 792.03"
                  />
                  <polygon
                    className="cls-34"
                    points="1189.24 793.62 1183.83 792.03 1183.83 779.65 1189.24 781.07 1189.24 793.62"
                  />
                  <polygon
                    className="cls-13"
                    points="1213.92 774.1 1189.24 793.62 1189.24 781.07 1213.92 763.98 1213.92 774.1"
                  />
                  <polygon
                    className="cls-32"
                    points="1192.44 791.09 1189.24 793.62 1189.24 781.07 1192.44 778.85 1192.44 791.09"
                  />
                  <polygon
                    className="cls-32"
                    points="1197.36 787.23 1192.67 790.91 1192.67 778.69 1197.36 775.44 1197.36 787.23"
                  />
                  <polygon
                    className="cls-76"
                    points="1202 783.53 1197.53 787.07 1197.53 775.32 1202 772.23 1202 783.53"
                  />
                  <polygon
                    className="cls-76"
                    points="1206.54 779.91 1202.25 783.35 1202.24 772.07 1206.53 769.08 1206.54 779.91"
                  />
                  <polygon
                    className="cls-76"
                    points="1210.73 776.62 1206.78 779.65 1206.78 768.91 1210.73 766.16 1210.73 776.62"
                  />
                  <polygon
                    className="cls-76"
                    points="1213.92 774.18 1210.94 776.46 1210.94 766.02 1213.92 763.98 1213.92 774.18"
                  />
                  <polygon
                    className="cls-87"
                    points="1205.37 763.41 1205.37 767.51 1209.87 764.26 1205.37 763.41"
                  />
                  <polygon
                    className="cls-48"
                    points="1193.35 761.12 1195.3 760.55 1213.81 763.98 1189.24 781.07 1168.9 775.75 1171.84 774.03 1188.71 778.8 1209.87 764.26 1193.35 761.12"
                  />
                  <polygon
                    className="cls-88"
                    points="1174.48 763.31 1172.02 764.58 1172.02 759.34 1174.5 758.28 1174.48 763.31"
                  />
                  <polygon
                    className="cls-100"
                    points="1178.43 764.05 1174.47 763.31 1174.5 758.3 1178.49 758.97 1178.43 764.05"
                  />
                  <polygon
                    className="cls-100"
                    points="1184.88 765.4 1178.66 764.09 1178.66 758.98 1184.88 760.04 1184.88 765.4"
                  />
                  <polygon
                    className="cls-100"
                    points="1187.27 765.88 1185.08 765.43 1185.08 760.26 1187.27 760.63 1187.27 765.88"
                  />
                  <polygon
                    className="cls-12"
                    points="1197.92 772.47 1174.48 767.62 1174.48 763.31 1202.91 769.04 1197.92 772.47"
                  />
                  <polygon
                    className="cls-100"
                    points="1175.82 767.89 1174.48 767.62 1174.48 763.31 1175.82 763.56 1175.82 767.89"
                  />
                  <polygon
                    className="cls-100"
                    points="1180.82 768.93 1175.98 767.89 1175.98 763.61 1180.85 764.58 1180.82 768.93"
                  />
                  <polygon
                    className="cls-100"
                    points="1185.89 769.98 1181.01 768.93 1181.01 764.62 1185.91 765.58 1185.89 769.98"
                  />
                  <polygon
                    className="cls-100"
                    points="1191.04 771.05 1186.11 770.01 1186.11 765.65 1191 766.64 1191.04 771.05"
                  />
                  <polygon
                    className="cls-100"
                    points="1196.31 772.14 1191.36 771.05 1191.36 766.71 1196.31 767.71 1196.31 772.14"
                  />
                  <path
                    className="cls-100"
                    d="M1201.68,769.85c-1.24.88-2.49,1.75-3.73,2.63-.48-.08-.96-.16-1.43-.24v-4.47l5.18,1.01-.02,1.08Z"
                  />
                  <path
                    className="cls-69"
                    d="M1174.48,763.31c-1.02.57-2.56,1.41-4.45,2.37-1.58.8-2.75,1.35-3.27,1.6-1.85.88-4.66,2.24-8.77,4.36,1.6.38,3.2.77,4.8,1.15l.02,1.76,11.68-7.02v-4.21Z"
                  />
                  <polygon
                    className="cls-73"
                    points="1168.42 771.17 1164.05 773.84 1164.01 768.59 1168.42 766.45 1168.42 771.17"
                  />
                  <polygon
                    className="cls-73"
                    points="1173.04 768.39 1168.57 771.09 1168.57 766.45 1172.96 764.11 1173.04 768.39"
                  />
                  <polygon
                    className="cls-73"
                    points="1174.48 767.62 1173.15 768.28 1173.15 764.05 1174.48 763.31 1174.48 767.62"
                  />
                  <path
                    className="cls-73"
                    d="M1163.82,773.93c-.34.2-.68.41-1.02.61,0-.54-.02-1.2-.02-1.74-1.45-.4-3.33-.77-4.79-1.17l5.79-2.93.04,5.23Z"
                  />
                  <polygon
                    className="cls-73"
                    points="1165.18 768.04 1157.99 771.59 1157.96 766.04 1165.09 762.38 1165.18 768.04"
                  />
                  <polygon
                    className="cls-73"
                    points="1162.47 769.18 1157.67 771.61 1157.67 766.17 1162.47 763.72 1162.47 769.18"
                  />
                  <polygon
                    className="cls-73"
                    points="1165.18 768.04 1163.17 769.02 1163.17 763.41 1165.11 762.38 1165.18 768.04"
                  />
                  <polygon
                    className="cls-73"
                    points="1157.76 771.58 1150.74 769.9 1150.74 769.9 1157.72 766.17 1157.76 771.58"
                  />
                  <polygon
                    className="cls-57"
                    points="1148.06 782.45 1145.39 781.67 1145.39 770.48 1148.06 771.11 1148.06 782.45"
                  />
                  <polygon
                    className="cls-80"
                    points="1157.24 773.43 1158.85 772.11 1157.51 773.5 1157.24 773.43"
                  />
                  <polygon
                    className="cls-80"
                    points="1148.06 771.15 1149.67 769.82 1148.33 771.22 1148.06 771.15"
                  />
                </g>
                <polygon
                  className="cls-5"
                  points="1163.62 761.38 1165.1 762.38 1170.28 760.05 1168.81 759.52 1163.62 761.38"
                />
                <polygon
                  className="cls-88"
                  points="1165.18 768.01 1170.32 765.52 1170.32 760.05 1165.11 762.36 1165.18 768.01"
                />
                <polygon
                  className="cls-48"
                  points="1188.5 759.79 1195.33 760.47 1193.38 761.04 1187.29 760.61 1188.5 759.79"
                />
                <polygon
                  className="cls-100"
                  points="1187.29 765.99 1193.35 767.26 1193.35 761.11 1187.29 760.59 1187.29 765.99"
                />
                <polygon
                  className="cls-59"
                  points="1168.81 759.52 1170.32 760.06 1174.52 758.29 1187.27 760.63 1188.5 759.79 1174.51 756.99 1168.81 759.52"
                />
              </g>
              <g>
                <polygon
                  className="cls-80"
                  points="1161.06 776.23 1145.42 772.06 1145.42 761.22 1161.08 765.09 1161.06 776.23"
                />
                <polygon
                  className="cls-12"
                  points="1187.3 756.55 1174.48 754.2 1174.5 749.29 1187.3 751.41 1187.3 756.55"
                />
                <polygon
                  className="cls-11"
                  points="1161.06 776.23 1157.51 775.33 1157.51 764.02 1161.06 765.04 1161.06 776.23"
                />
                <polygon
                  className="cls-11"
                  points="1157.24 775.31 1148.33 772.9 1148.33 761.9 1157.24 764.06 1157.24 775.31"
                />
                <polygon
                  className="cls-38"
                  points="1162.78 774.62 1161.04 776.19 1161.04 765.06 1162.78 763.49 1162.78 774.62"
                />
                <polygon
                  className="cls-5"
                  points="1145.39 761.22 1163.62 752.32 1165.11 753.3 1150.74 760.65 1162.8 763.47 1161.06 765.04 1145.39 761.22"
                />
                <polygon
                  className="cls-48"
                  points="1165.11 753.25 1165.18 758.81 1170.32 756.38 1168.73 755.51 1165.23 757.02 1165.22 753.25 1165.11 753.25"
                />
                <polygon
                  className="cls-77"
                  points="1170.32 756.38 1168.76 755.53 1168.81 750.51 1170.32 751.03 1170.32 756.38"
                />
                <polygon
                  className="cls-69"
                  points="1174.47 754.2 1170.32 756.36 1170.32 751.01 1174.5 749.27 1174.47 754.2"
                />
                <polygon
                  className="cls-88"
                  points="1171.84 755.56 1170.32 756.38 1170.32 751.03 1171.84 750.4 1171.84 755.56"
                />
                <polygon
                  className="cls-73"
                  points="1188.5 755.63 1187.3 756.55 1187.3 751.41 1188.5 750.61 1188.5 755.63"
                />
                <polygon
                  className="cls-97"
                  points="1193.35 757.74 1187.3 756.55 1188.5 755.63 1193.35 756.54 1193.35 757.74"
                />
                <polygon
                  className="cls-37"
                  points="1203.17 759.86 1193.35 757.74 1193.35 752.09 1209.87 755.13 1203.17 759.86"
                />
                <polygon
                  className="cls-87"
                  points="1199.14 759 1193.35 757.74 1193.35 752.09 1199.14 753.16 1199.14 759"
                />
                <path
                  className="cls-87"
                  d="M1205,758.57l-1.83,1.29c-1.27-.29-2.53-.58-3.8-.87v-5.8l5.74,1.06-.11,4.31Z"
                />
                <polygon
                  className="cls-36"
                  points="1189.24 783.83 1168.9 778.32 1169 766.37 1189.24 771.56 1189.24 783.83"
                />
                <polygon
                  className="cls-34"
                  points="1173.93 779.68 1168.9 778.32 1168.9 766.37 1173.93 767.64 1173.93 779.68"
                />
                <polygon
                  className="cls-34"
                  points="1183.5 782.27 1174.22 779.68 1174.22 767.71 1183.5 770.09 1183.5 782.27"
                />
                <polygon
                  className="cls-34"
                  points="1189.24 783.83 1183.83 782.27 1183.83 770.17 1189.24 771.56 1189.24 783.83"
                />
                <polygon
                  className="cls-13"
                  points="1213.92 764.75 1189.24 783.83 1189.24 771.56 1213.92 754.87 1213.92 764.75"
                />
                <polygon
                  className="cls-32"
                  points="1192.44 781.36 1189.24 783.83 1189.24 771.56 1192.44 769.4 1192.44 781.36"
                />
                <polygon
                  className="cls-32"
                  points="1197.36 777.58 1192.67 781.18 1192.67 769.24 1197.36 766.06 1197.36 777.58"
                />
                <polygon
                  className="cls-76"
                  points="1202 773.97 1197.53 777.42 1197.53 765.95 1202 762.92 1202 773.97"
                />
                <polygon
                  className="cls-76"
                  points="1206.54 770.43 1202.25 773.8 1202.24 762.77 1206.53 759.85 1206.54 770.43"
                />
                <polygon
                  className="cls-76"
                  points="1210.73 767.22 1206.78 770.17 1206.78 759.68 1210.73 756.99 1210.73 767.22"
                />
                <polygon
                  className="cls-76"
                  points="1213.92 764.83 1210.94 767.06 1210.94 756.86 1213.92 754.87 1213.92 764.83"
                />
                <polygon
                  className="cls-87"
                  points="1205.37 754.3 1205.37 758.31 1209.87 755.13 1205.37 754.3"
                />
                <polygon
                  className="cls-48"
                  points="1193.35 752.09 1195.3 751.51 1213.81 754.87 1189.24 771.56 1168.9 766.37 1171.84 764.68 1188.71 769.35 1209.87 755.13 1193.35 752.09"
                />
                <polygon
                  className="cls-88"
                  points="1174.48 754.2 1172.02 755.45 1172.02 750.32 1174.5 749.29 1174.48 754.2"
                />
                <polygon
                  className="cls-100"
                  points="1178.45 754.93 1174.48 754.2 1174.52 749.3 1178.5 749.95 1178.45 754.93"
                />
                <polygon
                  className="cls-100"
                  points="1184.88 756.1 1178.66 754.97 1178.66 749.98 1184.88 751.01 1184.88 756.1"
                />
                <polygon
                  className="cls-100"
                  points="1187.3 756.55 1185.11 756.1 1185.11 751.05 1187.3 751.41 1187.3 756.55"
                />
                <polygon
                  className="cls-12"
                  points="1197.92 763.16 1174.48 758.42 1174.48 754.2 1202.91 759.81 1197.92 763.16"
                />
                <polygon
                  className="cls-100"
                  points="1175.82 758.68 1174.48 758.42 1174.48 754.2 1175.82 754.45 1175.82 758.68"
                />
                <polygon
                  className="cls-100"
                  points="1180.82 759.7 1175.98 758.68 1175.98 754.5 1180.85 755.45 1180.82 759.7"
                />
                <polygon
                  className="cls-100"
                  points="1185.89 760.73 1181.01 759.7 1181.01 755.49 1185.91 756.42 1185.89 760.73"
                />
                <polygon
                  className="cls-100"
                  points="1191.04 761.77 1186.11 760.76 1186.11 756.49 1191 757.46 1191.04 761.77"
                />
                <polygon
                  className="cls-100"
                  points="1196.31 762.83 1191.36 761.77 1191.36 757.53 1196.31 758.5 1196.31 762.83"
                />
                <path
                  className="cls-100"
                  d="M1201.68,760.59l-3.73,2.57c-.48-.08-.96-.16-1.43-.24v-4.36l5.18.98-.02,1.05Z"
                />
                <path
                  className="cls-69"
                  d="M1174.48,754.2c-1.02.56-2.56,1.38-4.45,2.31-1.58.78-2.75,1.32-3.27,1.56-1.85.86-4.66,2.19-8.77,4.26,1.6.37,3.2.75,4.8,1.12l.02,1.72,11.68-6.86v-4.12Z"
                />
                <polygon
                  className="cls-73"
                  points="1168.42 761.89 1164.05 764.5 1164.01 759.37 1168.42 757.28 1168.42 761.89"
                />
                <polygon
                  className="cls-73"
                  points="1173.04 759.17 1168.57 761.81 1168.57 757.28 1172.96 754.99 1173.04 759.17"
                />
                <polygon
                  className="cls-73"
                  points="1174.48 758.42 1173.15 759.07 1173.15 754.93 1174.48 754.2 1174.48 758.42"
                />
                <path
                  className="cls-73"
                  d="M1163.82,764.59c-.34.2-.68.4-1.02.6,0-.52-.02-1.17-.02-1.7-1.45-.39-3.33-.75-4.79-1.14l5.79-2.87.04,5.11Z"
                />
                <polygon
                  className="cls-73"
                  points="1165.18 758.83 1157.99 762.3 1157.96 756.87 1165.09 753.3 1165.18 758.83"
                />
                <polygon
                  className="cls-73"
                  points="1162.47 759.95 1157.67 762.32 1157.67 757 1162.47 754.61 1162.47 759.95"
                />
                <polygon
                  className="cls-73"
                  points="1165.18 758.83 1163.17 759.78 1163.17 754.31 1165.11 753.3 1165.18 758.83"
                />
                <polygon
                  className="cls-73"
                  points="1157.76 762.29 1150.74 760.65 1150.74 760.65 1157.72 757 1157.76 762.29"
                />
                <polygon
                  className="cls-57"
                  points="1148.06 772.91 1145.39 772.15 1145.39 761.22 1148.06 761.83 1148.06 772.91"
                />
                <polygon
                  className="cls-80"
                  points="1157.24 764.1 1158.85 762.8 1157.51 764.17 1157.24 764.1"
                />
                <polygon
                  className="cls-80"
                  points="1148.06 761.87 1149.67 760.57 1148.33 761.94 1148.06 761.87"
                />
              </g>
            </g>
            <g id="box-group-4-slide-3" style={{ transform: `translateY(${box4Y}px)`, transition: 'transform 0.1s ease-out' }}>
              <g>
                <polygon
                  className="cls-64"
                  points="797.79 846.63 733.45 838.12 733.73 792.29 798.73 800.33 797.79 846.63"
                />
                <polygon
                  className="cls-68"
                  points="798.7 800.38 733.71 792.31 795.97 786.08 863.55 792.31 798.7 800.38"
                />
                <polygon
                  className="cls-65"
                  points="797.58 846.64 862.6 836.43 863.55 792.3 798.56 800.34 797.58 846.64"
                />
         
   
        
                <g>
                  <path
                    className="cls-42"
                    d="M815.38,789.67c.06.02.03-.19.04-.23-.1.05-.03.29-.04.23Z"
                  />
                  <polygon
                    className="cls-42"
                    points="814.35 790.19 814.37 790.11 814.22 790.32 814.35 790.19"
                  />
                  <path
                    className="cls-42"
                    d="M813.36,790.24c.11.35.36-.07.54.04l.03.08.07-.29c-.21.06-.48.26-.64.17Z"
                  />
                  <path
                    className="cls-42"
                    d="M812.8,789.49c.04.14-.11.12.12.04-.01-.01-.02-.02-.02-.03-.02,0-.05,0-.1,0Z"
                  />
                  <path
                    className="cls-42"
                    d="M812.9,789.49c.1-.01-.07-.11,0,0h0Z"
                  />
                  <path
                    className="cls-42"
                    d="M812.42,789.6l.13-.13c-.03-.08-.16-.09-.11-.16-.14.07-.1.15-.02.29Z"
                  />
                  <path
                    className="cls-42"
                    d="M812.31,789.86l.07-.06s-.03-.04-.07.06Z"
                  />
                  <path
                    className="cls-42"
                    d="M812.52,789.69l-.15.12c.02.06.03.17.07-.04,0,.11.02,0,.08-.07Z"
                  />
                  <path
                    className="cls-42"
                    d="M812.61,789.74c.08.07.18.12.05.25.26-.06.21-.31-.05-.25Z"
                  />
                  <path
                    className="cls-42"
                    d="M813.33,790.61l.11.1.08-.12c-.04.06-.2-.09-.19.02Z"
                  />
                  <path
                    className="cls-42"
                    d="M811.56,789.45c0,.08.06.2.07.3l.1-.09c-.05-.05-.16-.09-.17-.2Z"
                  />
                  <path
                    className="cls-42"
                    d="M811.63,789.75l-.15.14c.14,0,.16-.05.15-.14Z"
                  />
                  <polygon
                    className="cls-42"
                    points="812.3 790.26 812.54 789.97 812.25 790.27 812.3 790.26"
                  />
                  <polygon
                    className="cls-42"
                    points="810.98 789.47 811.06 789.29 810.92 789.56 810.98 789.47"
                  />
                  <path
                    className="cls-42"
                    d="M810.6,789.52c.06-.15-.1-.24-.04-.33-.1.03-.19.16-.26.28.08-.07.17-.06.3.06Z"
                  />
                  <path
                    className="cls-42"
                    d="M810.18,789.63s.08-.1.13-.17c-.04.04-.09.09-.13.17Z"
                  />
                  <path
                    className="cls-42"
                    d="M811.23,789.86s-.04-.16-.13-.21l.07.21s.04,0,.06,0Z"
                  />
                  <path
                    className="cls-42"
                    d="M811.17,789.87h0c-.06,0-.11-.01-.13-.01.02,0,.06,0,.13.01Z"
                  />
                  <path
                    className="cls-42"
                    d="M811.24,789.86s0,0-.02,0c0,.02.01.03.02,0Z"
                  />
                  <path
                    className="cls-42"
                    d="M811.9,790.09c-.08.12-.26.26-.07.43.06-.15-.05-.25.07-.43Z"
                  />
                  <path
                    className="cls-42"
                    d="M811.33,790.12l.16.04c0-.06-.04-.14,0-.2l-.17.16Z"
                  />
                  <polygon
                    className="cls-42"
                    points="811.25 790.2 811.33 790.12 811.27 790.11 811.25 790.2"
                  />
                  <path
                    className="cls-42"
                    d="M810.46,789.82c-.07.1-.14.11-.23.13.09.04.19.06.28.05,0-.07.04-.19-.05-.18Z"
                  />
                  <path
                    className="cls-42"
                    d="M810.81,789.86s-.01,0-.01.01c.01.02.02.02.01-.01Z"
                  />
                  <path
                    className="cls-42"
                    d="M809.39,789.98s.01.03.02.04c0-.01,0-.02,0-.04h-.02Z"
                  />
                  <path
                    className="cls-42"
                    d="M810.54,790.03c.07.04.11-.02.15-.08-.05.02-.1.04-.16.04,0,.03,0,.05.02.04Z"
                  />
                  <path
                    className="cls-42"
                    d="M809.95,789.74s.08.08.13.11c-.04-.07-.12-.17-.13-.11Z"
                  />
                  <path
                    className="cls-42"
                    d="M810.77,789.82s0,0,0-.01c-.02-.04-.02-.02,0,.01Z"
                  />
                  <path
                    className="cls-42"
                    d="M810.77,789.82s-.06.09-.09.14c.04-.02.08-.04.11-.08,0-.01-.02-.04-.03-.06Z"
                  />
                  <path
                    className="cls-42"
                    d="M809.2,791.36c0-.2.18-.39.34-.19.15-.16.02-.8-.14-1.16,0,.09,0,.17-.15.29.06.11.36.24.24.42-.21.11-.18-.06-.28-.16.1.24-.25.37-.19.73l.18-.14c0,.06-.06.15,0,.2Z"
                  />
                  <path
                    className="cls-42"
                    d="M809.71,790.03l.06-.03c-.08-.03-.13-.11-.24-.26-.1.1-.12.18-.13.24h.32s-.02.04-.02.04Z"
                  />
                  <path
                    className="cls-42"
                    d="M810.07,789.98c-.04.22-.19.32-.09.55.19-.02.13-.19.24-.29-.31.07.08-.12-.15-.24.06-.04.11-.05.16-.06-.06-.02-.11-.05-.16-.09,0,0,0,0,0,.01h0s0,0,0,0c.01.03.02.04,0,.03,0,0,0,0,0,0,0,.03,0,.06-.01.08-.09-.04-.02-.05.01-.08,0-.01,0-.02,0-.03,0,0,0,0,0,0l-.3.13c.07.03.15.02.29-.01Z"
                  />
                  <path
                    className="cls-42"
                    d="M811.68,790.99s-.01-.03-.01-.05c-.02.03-.03.05.01.05Z"
                  />
                  <path
                    className="cls-42"
                    d="M811.54,790.87s.04-.12.11-.1c.07.06,0,.1.01.17.04-.06.15-.16,0-.26l-.02.03c-.13-.07-.3-.33-.28-.36.05.19.08.33.18.51Z"
                  />
                  <path
                    className="cls-42"
                    d="M810.8,790.48l-.25.12.14.18v-.11c.14.04.1-.1.11-.19Z"
                  />
                  <polygon
                    className="cls-42"
                    points="809.36 789.88 809.38 789.65 809.25 789.98 809.36 789.88"
                  />
                  <polygon
                    className="cls-42"
                    points="809.02 789.92 809.03 789.72 808.94 789.84 809.02 789.92"
                  />
                  <path
                    className="cls-42"
                    d="M790.2,793.27l-.07.06s.06-.04.07-.06Z"
                  />
                  <path
                    className="cls-42"
                    d="M790.75,793.26v-.1c-.01.05-.02.09,0,.1Z"
                  />
                  <path
                    className="cls-42"
                    d="M800.78,790.33c-.12-.18-.26-.46-.23-.24l.04.21c.08-.04.14-.02.19.02Z"
                  />
                  <path
                    className="cls-42"
                    d="M795.2,791.89s.02.04.04.06c.02-.08.05-.15.06-.21-.03.05-.06.09-.1.15Z"
                  />
                  <path
                    className="cls-42"
                    d="M795.16,792.79l-.15-.13s.08.09.15.13Z"
                  />
                  <path
                    className="cls-42"
                    d="M787.21,793.64l-.08.22c.14,0,.07-.12.08-.22Z"
                  />
                  <path
                    className="cls-42"
                    d="M805.59,790.16c-.1-.08-.18-.11-.24-.12.12.12.22.3.24.12Z"
                  />
                  <path
                    className="cls-42"
                    d="M790.31,790.96s-.06.09-.06.13c.05-.04.07-.08.06-.13Z"
                  />
                  <path
                    className="cls-42"
                    d="M805.07,790.06s.03.03.05.05c.07-.04.14-.07.22-.06-.09-.09-.19-.14-.28.01Z"
                  />
                  <path
                    className="cls-42"
                    d="M776.32,793.98s-.02-.01-.03-.02c0,.03.01.03.03.02Z"
                  />
                  <path
                    className="cls-42"
                    d="M773.05,791.94s.08-.02.13-.02c-.02-.01-.06-.01-.13.02Z"
                  />
                  <path
                    className="cls-42"
                    d="M807.67,789.89c.07-.02.01-.02,0,0h0Z"
                  />
                  <path
                    className="cls-42"
                    d="M808.06,790.73s-.02.06-.02.11c0-.05.01-.09.02-.11Z"
                  />
                  <path
                    className="cls-42"
                    d="M804.43,791.44s0,0,0,0c.02.04.02.03,0,0Z"
                  />
                  <path
                    className="cls-42"
                    d="M807.78,789.98s-.06-.05-.09-.06c.02.02.04.04.09.06Z"
                  />
                  <path
                    className="cls-42"
                    d="M807.76,789.88s.04.01.06.02c0-.04,0-.06-.06-.02Z"
                  />
                  <path
                    className="cls-42"
                    d="M807.57,789.91s.08,0,.12.02c-.01-.01-.02-.03-.02-.03-.02,0-.05.01-.1.02Z"
                  />
                  <path
                    className="cls-42"
                    d="M782.13,793.12s-.01-.01-.02-.02c-.07.09-.04.08.02.02Z"
                  />
                  <polygon
                    className="cls-42"
                    points="799.04 792.67 799.05 792.66 799.03 792.65 799.04 792.67"
                  />
                  <path
                    className="cls-42"
                    d="M798.79,792.84c.1-.27.16-.24.24-.19l-.11-.62-.13.81Z"
                  />
                  <path
                    className="cls-42"
                    d="M788.89,793.39l.19.19c-.2.33-.36.23-.18.49,0-.68.69-.1.69-.78l.13.14s-.04.04-.07.03c.25.31.15-.5.45-.42.11.05.18.14.12.23l.22-.18c.07.01.06.13-.01.12l.35-.07v.02c.04-.11.15-.28.2-.35.09.09-.04.07-.01.16l.19-.17c.09.17-.07.35-.2.33.21.67.15-.18.56.2l-.18.09c.14.38.27.23.49.46-.06-.12-.44-.58-.24-.76.06.05.14.07.25-.07.01.24.12.18.26.16v.32c.15-.1.13-.26.21-.41.17.02.22.27.26.48.27.04-.2-.39.11-.46.23.11.38-.03.64-.23.16.1-.02.2.04.29l.13-.26s.03.08.02.12c.11-.1,0-.32.17-.42.03-.35.4.5.61.09.06.09-.02.2,0,.32.3-.28.26-.2.5-.57l.23.2c-.17-.23.02-.53.19-.77-.06-.11-.12-.21-.15-.26l.28-.18c.04.05.01.16-.03.3.02-.03.04-.05.05-.08.11.11.06.3,0,.48-.04-.06-.08-.13-.11-.19-.06.2-.12.42-.09.6.02-.04.05-.07.09-.09-.02.05-.03.1-.02.13.01.03.04-.04.08-.12l.08.35v-.14s.39.21.39.21c.25-.37.46-.91.88-1.08-.09.27,0,.43,0,.74-.13-.32-.32.15-.55.1.12.03.1.18.07.23l.38-.32c0,.25.09.19.2.29-.1-.5.28-.35.43-.51.02.17-.01.34-.21.31.23.37.25-.6.48-.29-.05,0-.07-.02-.09.07.1-.15.38-.05.32.1h-.05c.32.05.96-.04.99-.46,0,.06-.02.51-.03.6l.5-1.46c-.03.37.2,1.23-.05,1.45.08.05.17.1.33-.03-.05-.05-.15-.52-.08-.56.21.4.14.21.4.55-.08-.07-.02-.65.1-.64-.01.09.04.56,0,.63l.28-.58c-.07.1,0,.48.08.63-.04-.11.26,0,.34-.06l-.13-.12c.35.07.3-.81.64-.79-.04.12-.07.72.11.78.07-.29.28-1.4.57-1.64l.07.16.22-.2c-.12.44-.48,1.37-.68,1.73.13.12.04.19.24.17.07.15-.09.24-.15.25l.45.08c-.04-.33.33-.35.29-.63l-.47.37c-.04-.33.23-.97.55-.92.09.13-.03.6-.02.71.04-.12.29-.24.32-.15l-.13.19c.18.12.27-.46.49-.15.07.02.24.42.24.22-.14-.38-.22-1.56-.15-1.85.03.02.4.35.49.53.13.29-.15.72-.03.98,0-.09.06-.21.09-.25.08.07-.02.29.15.24.01-.34.34.01.07-.29.16-.11.18.06.37.04-.07-.22.14-.76.29-.86,0,.09.04.2.06.25.34.01.52.16.83.15.03.08.19.17.13.32.04-.06.08-.18.17-.19.2.29-.21.06-.05.4,0-.2.24-.29.37-.42-.06-.3-.32-.04-.45.09-.02-.42.2-.87.51-1.08.25-.12.12.27.17.21.49.05.38-.76.8-.47.17.26.03.53.08.73-.21.11-.33-.16-.47-.14l.18.12c-.06.09-.2.17-.28.09.15.23.82,0,1.21.21.06-.09.17-.19.11-.3l-.12.04c-.12-.21.21-.31.05-.4.15-.16.32-.41.55-.3l.06.3c0-.09-.15-.18-.21-.08.09-.14.36.4.45,0l-.17-.2c.15-.16.33-.5.54-.41-.1-.3-.04.04-.2-.31.14.43-.51,0-.29.46-.16-.4-.26-.16-.46-.5.01.1.08.19-.09.15,0,.03-.02.07-.03.09,0,0,0,0-.01,0,0,0,0,0,0,.01,0,.02,0,.02,0,0,.04.04.08.09.09.15-.07.24-.34.24-.42.37-.1-.04.04-.12-.02-.22l-.13.19c-.02-.22-.28-.36-.05-.5h-.21c-.13-.12-.3-.16-.4-.06-.1-.04-.24.26-.16.08l-.32.15v-.06c-.33-.01-.66.4-1.05.02-.11.06-.22.14-.4.08l-.04-.19c-.14.07-.43-.17-.48.03-.18-.52-.69-.08-.94-.16v.25c-.17,0-.33.07-.53.19l.02.22c-.17.19-.47-.14-.76-.1.02-.09.09-.07.14-.02-.37-.49-.71.4-1.04.05-.07.09-.13.06-.19,0,0,0,.01,0,.02-.01,0,0-.02,0-.03,0-.04-.04-.07-.08-.11-.11.04.05.07.1.1.12-.06,0-.15.04-.24.1l-.05-.24s-.01,0-.02,0c-.09-.08-.06.12,0,.3-.04.04-.08.09-.11.15-.09-.38-.23.14-.34-.27-.05.2-.44.17-.47.6,0-.06-.03-.08.01-.09-.1-.04-.2-.09-.29.04l-.06-.3-.2.42c-.14-.18-.2-.29-.08-.53-.3.38-.25.15-.5.52v-.2c-.09.01-.23.28-.3.12-.23-.37-1.06,0-1.63-.33.13.58-.27-.25-.27.2-.04-.14-.12-.21-.04-.33-.27.15-.43-.2-.61.19-.04-.14.05-.2.02-.29-.02.03-.08.12-.12.04-.03-.08.04-.12.08-.18-.29.04-.29.46-.3.86-.15-.18-.23-.15-.32.11-.06-.13-.15-.26.03-.32-.1-.01-.62-.16-.62.16-.04-.08-.14-.02-.17.02-.23,0-.25-.04-.47,0l.06.05c-.07.39-.18.09-.36.15v-.04c-.42-.26-.17.14-.58-.16l.03.24c-.01.52-.37-.29-.6-.08l.09.13c-.12.18-.39-.68-.52-.74-.03-.04.04-.07.08-.11-.35-.29-.03.32-.28.4-.05-.17.04-.43-.13-.46-.09-.13-.46.57-.71.26.06.13.11.26,0,.36-.18.06-.51-.47-.65-.05-.02-.03-.03-.07-.04-.1-.13.11-.43.2-.51.42-.17-.82-.83.44-.86-.32l-.42.06v-.08c-.26-.04-.35.15-.43.34-.06-.05-.02-.12-.02-.16-.4-.14-.44-.1-.75.29l-.05-.25c-.08.15-.58-.36-.95-.05,0-.03,0-.08.04-.11-.42.31-1.07-.64-1.18.27l-.27.24c.37.05-.04.39.12.54-.14.06-.39-.25-.21-.31l.03.04c.04-.47-.47-.14-.47-.47-.72.06-1.44-.17-2.12-.16l.1.36h-.24c-.07-.09-.1-.29.07-.28-.1-.2-.28.19-.28.27-.34-.13.11-.43,0-.44l-.14.03.03.04c-.1.15-.11.31-.31.31-.13-.07-.08-.22-.13-.23,0-.03-.02-.04-.08,0l-.3-.02.13.28c-.13.15-.28,0-.13.32-.23-.49-1.12-.13-1.25-.28-.18.22-.36.22-.59.21.06.06.11.38-.09.35.04-.67-.37-.27-.55-.75.16.31-.55.11-.31.55-.17-.05-.02-.25-.15-.4-.38.28-.86-.13-1.34-.02,0,.09.08.22-.01.35l-.27-.43c-.09.05-.06.51-.25.21.03.07.07.18,0,.21-.96-.38-1.9.44-2.9-.32.14.16.05.18-.05.2.07.04,0,.22.03.34l-.42-.31c-.06.33-.43.04-.45.36l.12-.06c-.15.38.27.82.27,1.3.17-.43.53.6.81-.02.07.09-.05.16,0,.27.07-.21.16-.26.34-.17l-.02.05c.49-.07.71.12,1.27.23l-.05-.23c.12.03.15.1.21.16.12-.37-.34,0-.23-.41.18.47.84-.03.97.51.18,0-.07-.27.12-.28l.06.15.04-.19c.12.03.19.21.2.33-.03-.01-.08.04-.11.05.16.17.44-.08.49-.03l-.18-.08c.49-.16,1.11,0,1.58-.32l-.04-.11c.36-.22.3.11.7,0v.03c.06-.11.17-.18.28-.17-.1.14.2.24.08.4.39-.24.19-.18.43-.61l.07.18c.08-.17.09-.26.29-.32-.16.17.14.28-.03.49.44.39.61-.44.83.14.17-.52-.38-.27-.28-.38-.1-.16.14-.39.28-.35.14,0,.26.65.6.62-.03,0-.03.04-.07.04.13.12.24-.19.41.02.07-.31.2,0,.21-.39l-.31.11c.17-.11.32-.58.62-.37-.02.08-.1.19-.16.25.09.11.16-.08.25.03,0,.4-.38.1-.55.41.1.16.35-.3.27.13.11-.55.34.05.55-.37v.24s.1-.15.17-.15l-.11.31c.17-.27.37.21.54.06-.37.03-.1-.28-.26-.45.45-.34.3.61.81.47-.07.04-.27-.13-.17-.24.1.04.24.13.3.25.34-.07-.06-.24.07-.39.13.28.16-.13.31-.23v.24c.41.14.09-.51.45-.34l-.13.34.18-.1-.02.28c.19-.21.25-.16.45-.1-.05-.17,0-.44.18-.45.12.14-.06.23.19.19-.05.15-.1.35-.22.13,0,.08-.05.15-.06.23.14.16.32.02.41.02-.03,0-.08-.02-.1-.05l.34-.35c.06.09.02.16-.02.24.07-.03.12-.14.22-.17-.02.2,0,.4-.15.5l.33-.23c.03.08.19.23.14.3.19.11.44-.4.7-.26.01-.04.04-.08.09-.11.24.03.46.26.72-.02l.17.34c.21-.09-.23-.43.12-.58.25-.12.11.29.2.39.12-.18.32-.55.57-.28-.07.07-.14.02-.21.05ZM791.57,793.11c-.05.05-.15.21-.19.07.05-.28.1-.15.19-.07ZM795.62,792.34c-.03.08-.1.04-.17-.04.05-.02.1-.02.17.04ZM806.9,790.12s0,0,0,.01c-.12-.09-.08-.05,0-.01ZM807.14,790.22s.02-.07,0-.1c-.01.06-.07.07-.13.05.02.06.05.1.12.05ZM781.29,791.54l.05.06c-.1.07-.08.01-.05-.06Z"
                  />
                  <path
                    className="cls-42"
                    d="M795.17,792.69s-.02-.08-.03-.13c-.02.04-.02.09.03.13Z"
                  />
                  <path
                    className="cls-42"
                    d="M787.23,793.6s0,0,0,0c0,.01,0,.03,0,.04v-.04Z"
                  />
                  <path
                    className="cls-42"
                    d="M803.51,792.44c-.05-.03-.08-.07-.1-.12,0,.06.02.11.1.12Z"
                  />
                  <path
                    className="cls-42"
                    d="M808.4,789.75l-.15.07c.07-.02.1.04.14.07,0-.06-.04-.14,0-.14Z"
                  />
                  <path
                    className="cls-42"
                    d="M809.81,791.17s.05,0,.07-.04v-.11c-.11.01-.17.11-.07.15Z"
                  />
                  <path
                    className="cls-42"
                    d="M808.58,790.54c.02.2.12.13.22.09,0,0-.01,0-.02,0,.02-.28-.09-.19-.2-.09Z"
                  />
                  <path
                    className="cls-42"
                    d="M808.83,790.62s.07-.02.1,0c0-.11-.04-.02-.1,0Z"
                  />
                  <path
                    className="cls-42"
                    d="M807.44,790.07c.05.05.02-.26.05-.18.04-.26-.33.33-.05.18Z"
                  />
                  <polygon
                    className="cls-42"
                    points="808.7 791.2 808.65 790.95 808.6 791.16 808.7 791.2"
                  />
                  <path
                    className="cls-42"
                    d="M807.84,791.06l.18.06s.02-.07.04-.09c-.11,0-.23-.05-.22.03Z"
                  />
                  <path
                    className="cls-42"
                    d="M808.06,791.03c.06,0,.11,0,.14-.05-.03,0-.09.02-.14.05Z"
                  />
                  <polygon
                    className="cls-42"
                    points="808.47 791.29 808.42 791.24 808.29 791.23 808.47 791.29"
                  />
                  <path
                    className="cls-42"
                    d="M805.98,791.1l-.19.08c-.02.09.04.14.11.1.04-.06.11-.1.08-.18Z"
                  />
                  <path
                    className="cls-42"
                    d="M806.58,791.76c-.05-.05-.06-.11-.09-.19v.31s.09-.12.09-.12Z"
                  />
                  <path
                    className="cls-42"
                    d="M806.04,791.86c-.01.09-.26.26-.02.23.02-.09.2-.17.02-.23Z"
                  />
                  <polygon
                    className="cls-42"
                    points="803.18 791.6 803.23 791.59 803.2 791.08 803.18 791.6"
                  />
                  <path
                    className="cls-42"
                    d="M800.74,792.93c.23.11.04-.32.25-.17.05-.12-.17-.12-.12-.22-.13.13-.2.07-.13.4Z"
                  />
                  <path
                    className="cls-42"
                    d="M800.86,792.54s.04-.05.07-.08c-.04.03-.05.06-.07.08Z"
                  />
                  <polygon
                    className="cls-42"
                    points="772.51 791.69 772.36 791.59 772.46 791.76 772.51 791.69"
                  />
                  <path
                    className="cls-42"
                    d="M772.25,792.08l-.05-.32-.07.3s.09-.05.12.03Z"
                  />
                  <path
                    className="cls-42"
                    d="M792,793.75v-.08c-.02-.08-.05-.09-.12-.1l.12.18Z"
                  />
                  <polygon
                    className="cls-42"
                    points="790.04 793.6 790.07 793.6 789.99 793.31 790.04 793.6"
                  />
                  <path
                    className="cls-42"
                    d="M788.42,794.05c.07,0,.14-.06.21-.05-.14.06-.25-.31-.21.05Z"
                  />
                </g>
                <g>
                  <path
                    className="cls-42"
                    d="M830.24,791.73c.07.01.03-.19.03-.23-.1.05-.03.29-.03.23Z"
                  />
                  <polygon
                    className="cls-42"
                    points="829.21 792.28 829.23 792.2 829.08 792.42 829.21 792.28"
                  />
                  <path
                    className="cls-42"
                    d="M828.22,792.36c.12.35.36-.09.54.03l.04.08.06-.29c-.21.06-.48.27-.64.19Z"
                  />
                  <path
                    className="cls-42"
                    d="M827.63,791.63c.04.14-.11.13.13.03-.01-.01-.02-.02-.03-.03-.02,0-.05,0-.1,0Z"
                  />
                  <path
                    className="cls-42"
                    d="M827.73,791.63c.1-.02-.08-.11,0,0h0Z"
                  />
                  <path
                    className="cls-42"
                    d="M827.25,791.75l.13-.13c-.04-.08-.16-.09-.12-.15-.14.08-.1.16,0,.29Z"
                  />
                  <path
                    className="cls-42"
                    d="M827.14,792.02l.07-.06s-.04-.04-.07.06Z"
                  />
                  <path
                    className="cls-42"
                    d="M827.35,791.84l-.14.12c.02.06.04.17.07-.05,0,.11.02,0,.08-.08Z"
                  />
                  <path
                    className="cls-42"
                    d="M827.44,791.88c.08.07.19.11.06.25.26-.07.2-.32-.06-.25Z"
                  />
                  <path
                    className="cls-42"
                    d="M828.2,792.73l.11.1.08-.13c-.04.06-.21-.08-.19.03Z"
                  />
                  <path
                    className="cls-42"
                    d="M826.38,791.63c0,.08.06.2.08.29l.1-.1c-.06-.05-.16-.09-.18-.2Z"
                  />
                  <path
                    className="cls-42"
                    d="M826.46,791.92l-.14.14c.14,0,.16-.06.14-.14Z"
                  />
                  <polygon
                    className="cls-42"
                    points="827.15 792.41 827.38 792.12 827.1 792.42 827.15 792.41"
                  />
                  <polygon
                    className="cls-42"
                    points="825.79 791.66 825.87 791.48 825.73 791.76 825.79 791.66"
                  />
                  <path
                    className="cls-42"
                    d="M825.41,791.72c.05-.15-.11-.24-.05-.33-.1.03-.18.17-.25.28.08-.07.17-.06.3.05Z"
                  />
                  <path
                    className="cls-42"
                    d="M824.99,791.85s.08-.1.12-.17c-.04.04-.08.09-.12.17Z"
                  />
                  <path
                    className="cls-42"
                    d="M826.05,792.05s-.05-.16-.14-.21l.08.21s.04,0,.06,0Z"
                  />
                  <path
                    className="cls-42"
                    d="M825.99,792.05h0c-.07,0-.11,0-.13,0,.02,0,.06,0,.13,0Z"
                  />
                  <path
                    className="cls-42"
                    d="M826.07,792.05s0,0-.02,0c0,.02.01.03.02,0Z"
                  />
                  <path
                    className="cls-42"
                    d="M826.73,792.25c-.08.13-.26.27-.06.44.05-.15-.06-.25.06-.44Z"
                  />
                  <path
                    className="cls-42"
                    d="M826.16,792.31l.17.04c0-.06-.04-.14,0-.2l-.16.16Z"
                  />
                  <polygon
                    className="cls-42"
                    points="826.09 792.38 826.16 792.31 826.1 792.29 826.09 792.38"
                  />
                  <path
                    className="cls-42"
                    d="M825.28,792.03c-.06.1-.14.11-.22.13.1.03.19.05.28.04,0-.07.04-.19-.06-.18Z"
                  />
                  <path
                    className="cls-42"
                    d="M825.63,792.06s-.01,0-.01.01c.01.02.02.02.01-.01Z"
                  />
                  <path
                    className="cls-42"
                    d="M824.2,792.23s.01.03.02.04c0-.01,0-.02,0-.04h-.02Z"
                  />
                  <path
                    className="cls-42"
                    d="M825.36,792.24c.07.04.11-.02.15-.09-.05.03-.1.04-.16.05,0,.03,0,.05.02.04Z"
                  />
                  <path
                    className="cls-42"
                    d="M824.76,791.97s.08.08.13.11c-.04-.06-.12-.16-.13-.11Z"
                  />
                  <path
                    className="cls-42"
                    d="M825.59,792.02s0,0,0-.01c-.03-.04-.02-.02,0,.01Z"
                  />
                  <path
                    className="cls-42"
                    d="M825.59,792.02s-.06.09-.08.14c.04-.02.08-.05.11-.08,0-.01-.02-.04-.03-.06Z"
                  />
                  <path
                    className="cls-42"
                    d="M824.05,793.61c0-.2.17-.4.34-.2.14-.16,0-.8-.17-1.15,0,.09,0,.17-.14.3.06.1.37.22.25.41-.2.12-.18-.06-.29-.15.11.24-.24.38-.17.74l.18-.14c0,.06-.05.15,0,.2Z"
                  />
                  <path
                    className="cls-42"
                    d="M824.53,792.26l.06-.03c-.08-.03-.14-.1-.25-.25-.1.11-.12.18-.12.25h.33s-.02.03-.02.03Z"
                  />
                  <path
                    className="cls-42"
                    d="M824.89,792.21c-.03.22-.19.32-.07.55.19-.03.12-.19.23-.29-.31.08.08-.13-.15-.23.06-.04.11-.06.16-.07-.06-.02-.11-.05-.17-.09,0,0,0,0,0,.01h0s0,0,0,0c.02.03.02.04,0,.03,0,0,0,0,0,0,0,.03,0,.06,0,.08-.09-.04-.02-.05,0-.08,0-.01,0-.02,0-.03,0,0,0,0,0,0l-.3.14c.07.02.15.01.3-.02Z"
                  />
                  <path
                    className="cls-42"
                    d="M826.54,793.16s-.01-.03-.01-.05c-.02.03-.02.05.01.05Z"
                  />
                  <path
                    className="cls-42"
                    d="M826.4,793.04s.03-.12.11-.1c.07.06,0,.1.02.17.04-.06.14-.17,0-.26l-.02.03c-.13-.06-.31-.32-.29-.35.05.19.09.33.19.51Z"
                  />
                  <path
                    className="cls-42"
                    d="M825.64,792.68l-.25.13.15.18-.02-.11c.15.03.11-.1.12-.19Z"
                  />
                  <polygon
                    className="cls-42"
                    points="824.17 792.12 824.18 791.89 824.06 792.22 824.17 792.12"
                  />
                  <polygon
                    className="cls-42"
                    points="823.83 792.17 823.83 791.98 823.75 792.1 823.83 792.17"
                  />
                  <path
                    className="cls-42"
                    d="M804.93,796.11l-.07.06s.06-.04.07-.06Z"
                  />
                  <path
                    className="cls-42"
                    d="M805.49,796.08v-.1c-.02.06-.02.1,0,.1Z"
                  />
                  <path
                    className="cls-42"
                    d="M815.52,792.84c-.13-.18-.27-.45-.24-.23l.05.21c.07-.04.14-.03.19.02Z"
                  />
                  <path
                    className="cls-42"
                    d="M809.94,794.58s.02.04.04.06c.02-.08.04-.15.06-.21-.03.05-.06.1-.1.15Z"
                  />
                  <path
                    className="cls-42"
                    d="M809.93,795.48l-.16-.13s.09.09.16.13Z"
                  />
                  <path
                    className="cls-42"
                    d="M801.93,796.57l-.07.23c.14-.01.07-.12.07-.23Z"
                  />
                  <path
                    className="cls-42"
                    d="M820.37,792.52c-.1-.08-.18-.11-.25-.11.13.12.23.29.25.11Z"
                  />
                  <path
                    className="cls-42"
                    d="M804.97,793.79s-.06.09-.06.14c.05-.04.07-.08.06-.14Z"
                  />
                  <path
                    className="cls-42"
                    d="M819.84,792.43s.04.03.05.05c.07-.04.14-.08.22-.07-.09-.09-.2-.14-.28.02Z"
                  />
                  <path
                    className="cls-42"
                    d="M790.95,797.24s-.02-.01-.03-.02c0,.03.01.03.03.02Z"
                  />
                  <path
                    className="cls-42"
                    d="M787.58,795.31s.08-.02.13-.03c-.02-.01-.06,0-.13.03Z"
                  />
                  <path
                    className="cls-42"
                    d="M822.46,792.19c.07-.02,0-.02,0,0h0Z"
                  />
                  <path
                    className="cls-42"
                    d="M822.88,793.01s-.02.06-.02.11c0-.05,0-.09.02-.11Z"
                  />
                  <path
                    className="cls-42"
                    d="M819.23,793.83s0,0,0,0c.02.04.02.03,0,0Z"
                  />
                  <path
                    className="cls-42"
                    d="M822.58,792.28s-.06-.04-.1-.06c.02.02.05.03.1.06Z"
                  />
                  <path
                    className="cls-42"
                    d="M822.55,792.17s.05.01.06.02c0-.04,0-.06-.06-.02Z"
                  />
                  <path
                    className="cls-42"
                    d="M822.36,792.2s.08,0,.12.01c-.02-.01-.02-.03-.02-.03-.02,0-.05.01-.1.02Z"
                  />
                  <path
                    className="cls-42"
                    d="M796.78,796.21s-.01-.01-.02-.02c-.07.1-.03.08.02.02Z"
                  />
                  <polygon
                    className="cls-42"
                    points="813.83 795.23 813.84 795.22 813.83 795.21 813.83 795.23"
                  />
                  <path
                    className="cls-42"
                    d="M813.59,795.41c.09-.28.15-.25.24-.2l-.13-.62-.11.82Z"
                  />
                  <path
                    className="cls-42"
                    d="M803.61,796.27l.2.18c-.19.34-.36.24-.17.5-.03-.68.7-.12.67-.8l.13.13s-.04.04-.07.03c.26.31.13-.5.44-.43.11.04.19.14.12.22l.22-.19c.07,0,.06.13,0,.12l.35-.08v.02c.04-.11.14-.28.19-.36.1.09-.04.08-.01.16l.18-.18c.09.17-.06.35-.19.34.24.66.15-.18.58.18l-.18.1c.15.37.28.22.51.45-.06-.12-.47-.57-.27-.76.06.05.14.06.25-.08.02.24.13.17.27.15l.02.32c.14-.1.12-.27.2-.42.17.02.23.26.28.47.27.03-.22-.38.1-.47.23.1.38-.04.64-.25.17.1-.01.2.05.28l.12-.27s.03.08.03.12c.11-.11-.02-.32.16-.42.02-.36.42.48.62.07.06.09-.01.2.01.32.29-.29.25-.21.48-.58l.24.19c-.18-.23,0-.53.17-.77-.07-.11-.12-.21-.16-.25l.28-.19s.02.16-.02.3c.02-.03.03-.06.05-.08.11.11.07.3.01.48-.04-.06-.08-.12-.12-.19-.06.2-.11.42-.08.6.02-.04.05-.07.09-.09-.01.05-.02.1-.01.13.01.03.04-.04.08-.13l.09.35v-.14s.4.19.4.19c.24-.38.44-.92.85-1.1-.09.27.01.43.03.74-.14-.32-.32.16-.55.12.12.03.1.17.08.23l.37-.33c.01.25.1.18.21.28-.12-.49.27-.36.42-.52.02.17,0,.34-.2.32.25.36.23-.61.47-.31-.05,0-.08-.02-.09.07.1-.16.38-.06.33.09h-.05c.32.04.97-.06.98-.49,0,.05,0,.51-.01.6l.46-1.47c-.02.37.24,1.22-.01,1.45.08.05.18.1.33-.04-.06-.05-.17-.52-.1-.56.23.39.15.21.42.53-.08-.07-.04-.65.08-.64-.01.09.05.56.01.63l.26-.58c-.07.11.02.48.1.63-.04-.11.26-.01.34-.07l-.14-.12c.35.06.28-.81.62-.81-.03.12-.05.72.13.78.06-.29.25-1.41.53-1.65l.07.16.22-.21c-.11.44-.45,1.38-.64,1.75.14.12.05.19.24.16.08.15-.09.24-.14.26l.46.06c-.05-.33.32-.36.28-.64l-.46.39c-.05-.33.21-.97.53-.94.09.13-.01.6,0,.71.03-.12.29-.24.32-.16l-.12.19c.19.11.25-.47.49-.16.08.02.25.41.25.22-.15-.37-.27-1.55-.21-1.85.03.02.41.34.51.52.14.29-.13.73,0,.98,0-.09.06-.21.08-.25.08.07,0,.29.15.23,0-.34.34,0,.06-.29.16-.11.18.06.37.03-.08-.21.12-.76.27-.87,0,.09.04.2.06.25.34,0,.53.14.85.12.04.08.19.17.14.32.04-.06.07-.18.17-.2.21.28-.21.06-.04.4,0-.2.23-.29.36-.43-.07-.3-.32-.03-.45.1-.03-.42.17-.88.49-1.1.25-.12.13.26.17.2.5.04.36-.77.79-.49.18.26.05.53.1.72-.2.12-.34-.14-.48-.12l.19.11c-.06.09-.2.17-.28.1.15.23.83-.02,1.23.17.06-.09.17-.2.11-.3l-.12.05c-.13-.21.2-.32.04-.41.15-.16.31-.42.54-.31l.07.3c-.01-.09-.16-.17-.22-.07.08-.14.38.39.45-.02l-.17-.2c.15-.17.32-.51.53-.43-.11-.29-.04.04-.21-.3.16.43-.51.02-.28.47-.18-.4-.27-.15-.48-.49.01.1.08.19-.09.15,0,.03-.02.07-.03.09,0,0,0,0-.01,0,0,0,0,0,.01.01,0,.02,0,.02,0,0,.04.04.08.09.1.15-.07.24-.33.25-.41.38-.1-.04.03-.12-.03-.22l-.12.19c-.03-.22-.29-.35-.07-.5h-.21c-.13-.11-.31-.15-.41-.04-.1-.04-.23.27-.16.09l-.32.16v-.06c-.34,0-.65.42-1.06.05-.11.07-.21.14-.4.09l-.05-.19c-.14.08-.44-.16-.48.05-.19-.51-.69-.06-.95-.13v.25c-.16,0-.32.08-.52.2l.03.22c-.17.2-.48-.12-.77-.08.01-.09.09-.07.14-.02-.39-.48-.7.42-1.04.08-.07.09-.13.06-.19.01,0,0,.01,0,.02-.01,0,0-.02,0-.03,0-.04-.04-.08-.08-.12-.11.04.05.07.09.1.11-.06,0-.15.04-.23.11l-.06-.24s-.01,0-.02,0c-.09-.08-.06.12,0,.3-.04.04-.08.09-.11.15-.1-.38-.22.15-.35-.26-.04.21-.44.19-.45.61,0-.06-.04-.08.01-.09-.1-.04-.21-.08-.29.05l-.07-.3-.19.43c-.15-.18-.21-.28-.1-.52-.29.39-.25.16-.49.54v-.2c-.1.02-.23.29-.3.13-.25-.36-1.07.03-1.66-.27.15.57-.28-.24-.27.21-.04-.13-.13-.21-.05-.33-.27.16-.44-.19-.61.21-.04-.14.04-.21,0-.29-.02.03-.08.13-.12.05-.04-.08.03-.12.07-.18-.29.05-.28.47-.27.87-.16-.18-.23-.14-.32.12-.06-.13-.16-.26.02-.32-.1-.01-.63-.14-.62.18-.04-.08-.14-.01-.17.03-.23,0-.25-.03-.47.02l.07.05c-.06.39-.18.1-.35.16v-.04c-.43-.25-.17.15-.6-.14l.04.24c0,.52-.38-.28-.6-.06l.1.13c-.12.19-.41-.67-.55-.73-.03-.04.04-.08.08-.11-.36-.28-.02.32-.27.41-.06-.17.03-.43-.15-.45-.1-.13-.45.59-.71.28.06.13.12.25.01.36-.18.06-.52-.45-.65-.03-.03-.03-.04-.07-.04-.1-.13.12-.43.21-.5.44-.19-.82-.82.47-.88-.29l-.42.07v-.08c-.27-.03-.35.16-.43.35-.07-.05-.03-.12-.02-.16-.41-.12-.44-.09-.74.32l-.05-.24c-.08.15-.6-.34-.96-.02,0-.03,0-.08.03-.11-.41.32-1.1-.6-1.18.31l-.27.24c.38.04-.02.39.14.53-.14.06-.4-.24-.22-.3l.03.04c.03-.47-.47-.13-.49-.45-.73.08-1.46-.12-2.15-.09l.11.36h-.24c-.07-.08-.11-.28.07-.28-.11-.2-.27.2-.27.27-.35-.12.1-.44,0-.44l-.14.04.03.04c-.1.16-.1.32-.31.31-.14-.06-.08-.22-.14-.23,0-.03-.02-.04-.08,0h-.3s.14.27.14.27c-.12.15-.28,0-.12.32-.24-.49-1.14-.09-1.27-.24-.17.22-.36.23-.59.23.06.06.12.38-.08.35.02-.67-.38-.26-.58-.73.17.31-.55.12-.3.56-.17-.04-.03-.25-.17-.4-.37.29-.88-.1-1.35.02,0,.09.09.22,0,.35l-.29-.42c-.09.05-.05.51-.25.22.03.07.08.18.01.21-.98-.35-1.91.5-2.93-.23.14.16.06.18-.04.2.07.04.02.22.04.33l-.43-.3c-.05.34-.43.06-.45.37l.12-.07c-.14.39.3.81.31,1.29.16-.44.55.59.81-.04.08.09-.05.16,0,.27.06-.21.16-.26.34-.18l-.02.05c.49-.09.72.1,1.29.19l-.06-.23c.12.02.15.09.21.15.11-.37-.34,0-.24-.4.2.47.85-.06,1,.48.18-.01-.08-.27.11-.28l.06.14.03-.19c.12.02.2.2.21.33-.03-.01-.08.04-.11.05.17.16.44-.09.5-.04l-.18-.08c.49-.18,1.12-.03,1.59-.37l-.05-.11c.36-.24.31.1.71-.03v.03c.06-.12.16-.18.28-.18-.09.14.21.24.09.39.39-.25.19-.19.42-.62l.08.18c.08-.17.08-.26.28-.33-.15.17.15.27-.02.5.46.37.6-.46.85.12.16-.53-.39-.26-.29-.37-.11-.16.13-.4.27-.35.14,0,.28.64.63.6-.03,0-.03.04-.07.04.14.12.24-.2.41,0,.06-.32.21,0,.2-.39l-.31.12c.17-.12.3-.59.61-.39-.02.08-.1.19-.15.26.1.11.16-.09.26.02,0,.4-.38.12-.54.43.11.16.34-.31.28.12.1-.55.34.04.54-.39v.24s.1-.16.17-.16l-.1.32c.17-.28.38.2.55.04-.38.04-.11-.28-.28-.44.44-.35.32.6.83.44-.07.04-.28-.12-.17-.24.1.04.24.12.31.24.34-.08-.07-.24.06-.4.14.28.16-.13.31-.23l.02.24c.41.12.07-.51.44-.35l-.12.34.18-.1-.02.28c.19-.22.25-.17.46-.11-.06-.17,0-.44.17-.46.13.13-.05.23.2.18-.04.15-.09.35-.22.14,0,.08-.04.15-.05.23.14.15.33.01.41,0-.04,0-.08-.02-.1-.05l.33-.36c.06.09.02.16-.01.24.07-.03.11-.15.22-.18-.01.2,0,.4-.13.5l.33-.24c.03.08.19.22.15.3.2.1.44-.42.7-.28.01-.04.03-.08.08-.11.24.03.47.25.73-.04l.19.34c.21-.1-.25-.42.11-.59.25-.13.12.29.22.38.11-.19.31-.56.57-.3-.07.07-.14.03-.21.06ZM806.3,795.9c-.05.05-.14.22-.19.08.04-.28.09-.15.19-.08ZM810.37,795.01c-.03.08-.1.05-.17-.04.05-.02.1-.02.17.04ZM821.69,792.44s0,0,0,.01c-.12-.08-.08-.05,0-.01ZM821.94,792.53s.02-.07,0-.1c-.01.06-.07.07-.13.06.02.06.06.1.13.04ZM795.89,794.65l.05.06c-.1.08-.08.01-.05-.06Z"
                  />
                  <path
                    className="cls-42"
                    d="M809.93,795.37s-.03-.08-.03-.13c-.02.04-.01.09.03.13Z"
                  />
                  <path
                    className="cls-42"
                    d="M801.94,796.53s0,0,0,0c0,.01,0,.03,0,.04v-.04Z"
                  />
                  <path
                    className="cls-42"
                    d="M818.34,794.86c-.05-.03-.08-.07-.11-.12,0,.06.03.11.11.12Z"
                  />
                  <path
                    className="cls-42"
                    d="M823.2,792.02l-.15.07c.07-.02.11.03.15.07,0-.06-.04-.13,0-.14Z"
                  />
                  <path
                    className="cls-42"
                    d="M824.66,793.4s.05,0,.07-.04v-.11c-.11.01-.17.11-.07.15Z"
                  />
                  <path
                    className="cls-42"
                    d="M823.4,792.81c.03.2.12.13.23.08,0,0-.01,0-.02,0,.01-.29-.1-.18-.21-.08Z"
                  />
                  <path
                    className="cls-42"
                    d="M823.65,792.88s.07-.02.1-.01c0-.11-.04-.02-.1.01Z"
                  />
                  <path
                    className="cls-42"
                    d="M822.24,792.37c.06.05.01-.26.05-.18.04-.26-.32.34-.05.18Z"
                  />
                  <polygon
                    className="cls-42"
                    points="823.54 793.47 823.48 793.22 823.44 793.43 823.54 793.47"
                  />
                  <path
                    className="cls-42"
                    d="M822.67,793.35l.18.06s.01-.07.04-.09c-.11,0-.23-.04-.22.03Z"
                  />
                  <path
                    className="cls-42"
                    d="M822.89,793.32c.06,0,.11,0,.14-.05-.03,0-.09.02-.14.05Z"
                  />
                  <polygon
                    className="cls-42"
                    points="823.31 793.56 823.25 793.51 823.13 793.5 823.31 793.56"
                  />
                  <path
                    className="cls-42"
                    d="M820.79,793.45l-.18.09c-.01.09.04.14.11.1.04-.06.11-.1.07-.18Z"
                  />
                  <path
                    className="cls-42"
                    d="M821.42,794.09c-.06-.05-.06-.1-.1-.18l.02.31.08-.13Z"
                  />
                  <path
                    className="cls-42"
                    d="M820.87,794.2c-.01.09-.26.27-.02.23.01-.09.2-.17.02-.23Z"
                  />
                  <polygon
                    className="cls-42"
                    points="817.98 794.03 818.03 794.02 817.98 793.52 817.98 794.03"
                  />
                  <path
                    className="cls-42"
                    d="M815.55,795.44c.23.1.03-.32.24-.18.04-.12-.18-.11-.13-.22-.13.14-.2.07-.11.4Z"
                  />
                  <path
                    className="cls-42"
                    d="M815.67,795.04s.04-.05.06-.08c-.04.03-.05.06-.06.08Z"
                  />
                  <polygon
                    className="cls-42"
                    points="787.03 795.08 786.88 794.98 786.98 795.15 787.03 795.08"
                  />
                  <path
                    className="cls-42"
                    d="M786.78,795.48l-.06-.32-.06.3s.09-.05.12.02Z"
                  />
                  <path
                    className="cls-42"
                    d="M806.76,796.53v-.08c-.02-.08-.06-.09-.13-.09l.13.17Z"
                  />
                  <polygon
                    className="cls-42"
                    points="804.78 796.44 804.81 796.44 804.72 796.15 804.78 796.44"
                  />
                  <path
                    className="cls-42"
                    d="M803.16,796.94c.07,0,.14-.06.21-.06-.14.06-.26-.31-.21.06Z"
                  />
                </g>
              </g>
              <g>
                <polygon
                  className="cls-64"
                  points="790.79 796.35 835.63 790.42 835.43 758.48 790.14 764.08 790.79 796.35"
                />
                <polygon
                  className="cls-68"
                  points="790.16 764.12 835.45 758.49 792.06 754.15 744.96 758.49 790.16 764.12"
                />
                <polygon
                  className="cls-65"
                  points="790.94 796.36 745.62 789.24 744.96 758.48 790.25 764.09 790.94 796.36"
                />
             
              </g>
            </g>
            <g id="box-group-5-slide-3" style={{ transform: `translateY(${box5Y}px)`, transition: 'transform 0.1s ease-out' }}>
              <polygon
                className="cls-64"
                points="1074 806.68 1009.65 798.17 1009.94 752.34 1074.93 760.38 1074 806.68"
              />
              <polygon
                className="cls-68"
                points="1074.9 760.43 1009.91 752.36 1072.17 746.13 1139.75 752.36 1074.9 760.43"
              />
              <polygon
                className="cls-65"
                points="1073.78 806.69 1138.81 796.48 1139.75 752.35 1074.76 760.39 1073.78 806.69"
              />
   
            </g>
            <g id="box-group-6-slide-3" style={{ transform: `translateY(${box6Y}px)`, transition: 'transform 0.1s ease-out' }}>
              <polygon
                className="cls-64"
                points="1085.94 758.56 1130.78 752.63 1130.58 720.69 1085.28 726.29 1085.94 758.56"
              />
              <polygon
                className="cls-68"
                points="1085.3 726.33 1130.6 720.7 1087.21 716.36 1040.11 720.7 1085.3 726.33"
              />
              <polygon
                className="cls-65"
                points="1086.08 758.57 1040.77 751.45 1040.11 720.7 1085.4 726.3 1086.08 758.57"
              />

            </g>
            <g id="box-group-7-slide-3" style={{ transform: `translateY(${box7Y}px)`, transition: 'transform 0.1s ease-out' }}>
              <g>
                <polygon
                  className="cls-91"
                  points="1102 824.73 1054.45 817.39 1057.99 783.49 1105.79 788.48 1102 824.73"
                />
                <polygon
                  className="cls-81"
                  points="1131.73 819.44 1102 824.73 1105.79 788.48 1134.96 788.5 1131.73 819.44"
                />
                <rect
                  className="cls-58"
                  x={1053.71}
                  y={777.4}
                  width={52.66}
                  height={8.37}
                  transform="translate(87.08 -108.02) rotate(5.97)"
                />
                <polygon
                  className="cls-14"
                  points="1135.85 788.59 1105.79 788.48 1106.66 780.15 1136.63 781.07 1135.85 788.59"
                />
                <polygon
                  className="cls-41"
                  points="1106.66 780.15 1054.29 774.68 1089.89 774.14 1135.75 780.98 1106.66 780.15"
                />
                <rect
                  className="cls-81"
                  x={1069.69}
                  y={791.12}
                  width={17.22}
                  height={6.31}
                  rx={1.91}
                  ry={1.91}
                  transform="translate(88.39 -107.77) rotate(5.97)"
                />
              </g>
              <rect
                className="cls-14"
                x={1081.41}
                y={762.39}
                width={0.88}
                height={48.05}
                transform="translate(187.24 1780.67) rotate(-84.03)"
              />
              <polygon
                className="cls-91"
                points="1105.79 788.48 1134.96 788.5 1134.87 789.36 1105.69 789.35 1105.79 788.48"
              />
            </g>
            <g id="computer-table-stuff" style={{ transform: `translateY(${computerTableY}px)`, transition: 'transform 0.1s ease-out' }}>
              <path
                className="cls-65"
                d="M1176.65,772.7h12.27v65.76h9.12v-65.76l27.69,2.08,1.16,53.06h8.29v-51.4l127.93,8.18v64.09h8.62v-63.26c3.44-.23,6.89-.46,10.33-.69,6.21-.9,12.42-1.8,18.62-2.71v56.39l8.4,1.39v-61.32l-.19-11.46-27,7.02-205.25-11.38v9.99Z"
              />
              <path
                className="cls-79"
                d="M1217.77,753.83c16.66-1.84,27.39-.86,49.85,0,43.02,1.64,35.76-.73,58.58.97,32.78,2.45,45.45,7.17,82.23,7.89,7.32.14,13.33.08,17.24.01-14.59,3.79-29.18,7.58-43.77,11.38-68.29-3.79-136.57-7.58-204.86-11.38,9.23-3.04,23.31-6.96,40.73-8.88Z"
              />
              <polygon
                className="cls-49"
                points="1198.04 838.45 1202.02 836.58 1202.53 773.03 1198.04 772.7 1198.04 838.45"
              />
              <polygon
                className="cls-49"
                points="1240.07 776.75 1240.07 827.42 1234.93 827.82 1234.93 776.42 1240.07 776.75"
              />
              <polygon
                className="cls-49"
                points="1371.73 848.72 1376.37 847.33 1376.37 785.15 1371.73 785.46 1371.73 848.72"
              />
              <polygon
                className="cls-49"
                points="1409.09 839.84 1414.06 837.41 1414.06 776.44 1425.67 774.08 1425.67 762.71 1381.9 774.08 1382.06 784.77 1409.09 778.52 1409.09 839.84"
              />
             <g id="laptop">
              
              <polygon
                className="cls-15"
                points="1322.47 754.85 1321.97 757.04 1317.03 757.38 1322.47 754.85"
              />
              <path
                className="cls-15"
                d="M1240.56,760.47l-.5,2.18,6.83-1.74c-.62-.35-1.5-.74-2.59-.9-1.63-.24-2.96.15-3.74.46Z"
              />
              <polygon
                className="cls-15"
                points="1240.07 762.65 1256.86 757.04 1321.97 757.04 1309.78 765.05 1240.07 762.65"
              />
              <polygon
                className="cls-99"
                points="1240.56 760.47 1257.36 754.85 1322.47 754.85 1310.27 762.86 1240.56 760.47"
              />
              <path
                className="cls-15"
                d="M1322.47,754.85h-65.11l4.78-52.29c.19-2.09,1.59-3.66,3.26-3.68l57.02-.59c1.94-.02,3.48,2.05,3.33,4.48l-3.28,52.08Z"
              />
              <path
                id="laptop-screen"
                className="cls-99"
                d="M1315.04,750.79l-48.86-.52c-1.62-.02-2.89-1.76-2.76-3.8l2.77-41.55c.12-1.83,1.35-3.23,2.81-3.21l48.94.52c1.63.02,2.9,1.77,2.76,3.8l-2.84,41.55c-.12,1.82-1.35,3.22-2.81,3.21Z"
              />

              {/* ── Laptop screen content ── */}
              <g id="laptop-screen-content">
                {/* Globe icon */}
                <g fill="none" stroke="#8cc8e8" strokeWidth={0.6}>
                  {/* Outer circle */}
                  <circle cx={1291} cy={717} r={6} />
                  {/* Equator */}
                  <ellipse cx={1291} cy={717} rx={6} ry={1.5} />
                  {/* Upper latitude */}
                  <ellipse cx={1291} cy={713.8} rx={4.4} ry={1.0} />
                  {/* Lower latitude */}
                  <ellipse cx={1291} cy={720.2} rx={4.4} ry={1.0} />
                  {/* Central meridian */}
                  <ellipse cx={1291} cy={717} rx={2} ry={6} />
                </g>

                {/* Divider */}
                <line x1={1277} y1={726} x2={1305} y2={726} stroke="#4a7aaa" strokeWidth={0.5} />

                {/* "dapp" – bold, white */}
                <text
                  x={1291}
                  y={733.5}
                  textAnchor="middle"
                  fill="#e8f4ff"
                  fontSize={6.5}
                  fontFamily="Arial, sans-serif"
                  fontWeight="bold"
                  letterSpacing={0.8}
                >dapp</text>

                {/* "studio" – lighter, accent blue */}
                <text
                  x={1291}
                  y={741}
                  textAnchor="middle"
                  fill="#8cc8e8"
                  fontSize={4}
                  fontFamily="Arial, sans-serif"
                  letterSpacing={2}
                >studio</text>
              </g>
             </g>
              <g>
                <g>
                  <polygon
                    className="cls-35"
                    points="1375.1 771.69 1330.38 769.36 1330.38 735.61 1375.1 735.61 1375.1 771.69"
                  />
                  <polygon
                    className="cls-85"
                    points="1402.11 763.43 1375.1 771.69 1375.1 735.61 1402.11 732.63 1402.11 763.43"
                  />
                  <rect
                    className="cls-93"
                    x={1326.1}
                    y={727.32}
                    width={49.01}
                    height={8.29}
                  />
                  <polygon
                    className="cls-28"
                    points="1402.94 732.63 1375.1 735.61 1375.1 727.32 1402.94 725.14 1402.94 732.63"
                  />
                  <polygon
                    className="cls-54"
                    points="1375.1 727.32 1326.1 727.32 1359.01 723.12 1402.11 725.14 1375.1 727.32"
                  />
                  <rect
                    className="cls-61"
                    x={1342.21}
                    y={741.02}
                    width={16.03}
                    height={6.24}
                    rx={1.64}
                    ry={1.64}
                  />
                </g>
                <rect
                  className="cls-28"
                  x={1330.38}
                  y={735.61}
                  width={44.72}
                  height={0.87}
                />
                <polygon
                  className="cls-35"
                  points="1375.1 735.61 1402.11 732.63 1402.11 733.49 1375.1 736.48 1375.1 735.61"
                />
              </g>
            </g>
          </g>
        </g>
      </g>
    </g>
  </svg>
);
});

export default Slide3;