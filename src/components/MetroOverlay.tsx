import * as React from "react";

interface MetroOverlayProps extends React.SVGProps<SVGSVGElement> {
  scrollProgress?: number;
}

// viewBox matches MetroOverlay design; preserveAspectRatio xMidYMid slice fills viewport like other layers
const VIEW_BOX = "0 0 1563.37 1203.3";

// Scoped CSS: .cls-* scoped to #metro-overlay-svg, url() refs use metro- prefixed IDs
const METRO_SCOPED_CSS = (
  "\n      .cls-1 {\n        fill: #111e53;\n      }\n\n      .cls-2 {\n        fill: #68423e;\n      }\n\n      .cls-3, .cls-4, .cls-5 {\n        stroke-miterlimit: 10;\n      }\n\n      .cls-3, .cls-5 {\n        fill: #f7faf1;\n        stroke: #f7ebdb;\n      }\n\n      .cls-6 {\n        fill: #152151;\n      }\n\n      .cls-7 {\n        fill: url(#metro-linear-gradient-2);\n      }\n\n      .cls-8 {\n        filter: url(#metro-outer-glow-4);\n      }\n\n      .cls-8, .cls-9, .cls-10, .cls-11, .cls-12, .cls-13, .cls-14, .cls-15, .cls-16, .cls-17, .cls-18 {\n        fill: #f5d6c4;\n      }\n\n      .cls-19 {\n        fill: #141c4b;\n      }\n\n      .cls-9 {\n        filter: url(#metro-outer-glow-9);\n      }\n\n      .cls-20 {\n        fill: url(#metro-linear-gradient-10);\n      }\n\n      .cls-21 {\n        fill: url(#metro-linear-gradient-12);\n      }\n\n      .cls-22 {\n        opacity: .84;\n      }\n\n      .cls-22, .cls-23 {\n        mix-blend-mode: screen;\n      }\n\n      .cls-10 {\n        filter: url(#metro-outer-glow-1);\n      }\n\n      .cls-11 {\n        filter: url(#metro-outer-glow-3);\n      }\n\n      .cls-24 {\n        mask: url(#metro-mask);\n      }\n\n      .cls-4 {\n        fill: #844c38;\n        stroke: #734a44;\n      }\n\n      .cls-25 {\n        fill: url(#metro-linear-gradient-4);\n      }\n\n      .cls-26 {\n        fill: #111f50;\n      }\n\n      .cls-12 {\n        filter: url(#metro-outer-glow-10);\n      }\n\n      .cls-27 {\n        fill: #161d25;\n      }\n\n      .cls-28 {\n        fill: url(#metro-linear-gradient-3);\n      }\n\n      .cls-13 {\n        filter: url(#metro-outer-glow-6);\n      }\n\n      .cls-5 {\n        filter: url(#metro-outer-glow-11);\n      }\n\n      .cls-29 {\n        fill: url(#metro-linear-gradient-5);\n      }\n\n      .cls-30 {\n        isolation: isolate;\n      }\n\n      .cls-31 {\n        fill: url(#metro-linear-gradient-8);\n      }\n\n      .cls-32 {\n        fill: #0d1c47;\n      }\n\n      .cls-33 {\n        fill: #412c3b;\n      }\n\n      .cls-34 {\n        fill: #162d57;\n      }\n\n      .cls-35 {\n        fill: url(#metro-linear-gradient-7);\n      }\n\n      .cls-36 {\n        fill: url(#metro-linear-gradient-9);\n      }\n\n      .cls-37 {\n        fill: #f3afa6;\n      }\n\n      .cls-38 {\n        fill: url(#metro-linear-gradient-11);\n      }\n\n      .cls-39 {\n        fill: url(#metro-linear-gradient-6);\n      }\n\n      .cls-40 {\n        fill: #faf3c9;\n      }\n\n      .cls-14 {\n        filter: url(#metro-outer-glow-5);\n      }\n\n      .cls-15 {\n        filter: url(#metro-outer-glow-8);\n      }\n\n      .cls-41 {\n        fill: #3f2d39;\n      }\n\n      .cls-17 {\n        filter: url(#metro-outer-glow-7);\n      }\n\n      .cls-42 {\n        fill: #2c4a80;\n      }\n\n      .cls-43 {\n        filter: url(#metro-luminosity-invert);\n      }\n\n      .cls-44 {\n        fill: url(#metro-linear-gradient);\n      }\n\n      .cls-45 {\n        fill: #4f2f34;\n      }\n\n      .cls-46 {\n        fill: #784a3a;\n      }\n\n      .cls-18 {\n        filter: url(#metro-outer-glow-2);\n      }\n\n      .cls-47 {\n        fill: #6d4038;\n      }\n\n      .cls-23 {\n        fill: #fffef8;\n        opacity: .75;\n      }\n\n      @keyframes metro-rotating-spin {\n        0%, 100% { transform: rotate(-4deg); }\n        50% { transform: rotate(4deg); }\n      }\n      #metro-overlay-svg .metro-rotating-part {\n        transform-origin: 895.99px 813.96px;\n        animation: metro-rotating-spin 2s ease-in-out infinite;\n      }\n    "
).replace(/\.cls-/g, "#metro-overlay-svg .cls-");

// From animated-metro.svg: train travels translate -500 → 2000 (left to right). We drive this by scroll.
const METRO_TRAVEL_START = -500;
const METRO_TRAVEL_END = 2000;
const METRO_TRAVEL_RANGE = METRO_TRAVEL_END - METRO_TRAVEL_START;

// Metro runs through most of section 4. Mountain (0.91→0.96) overlays during its rise/exit.
const METRO_SHOW_AT = 0.65;
const TRAVEL_START = 0.65;
const TRAVEL_END = 0.98; // train travels 0.65→0.98 (~33% of scroll)

const easeOut = (t: number) => (t <= 0 ? 0 : t >= 1 ? 1 : 1 - (1 - t) * (1 - t));

const MetroOverlay: React.FC<MetroOverlayProps> = React.memo(({ scrollProgress = 0, ...props }) => {
  let opacity: number;
  if (scrollProgress < METRO_SHOW_AT) opacity = 0;
  else if (scrollProgress < TRAVEL_END) opacity = 1;
  else if (scrollProgress >= 1) opacity = 0;
  else opacity = 1 - easeOut((scrollProgress - TRAVEL_END) / (1 - TRAVEL_END));

  // Train travels left→right only AFTER mountain is gone (0.92→1.0 = 8% scroll)
  const metroTranslateX =
    scrollProgress < TRAVEL_START
      ? METRO_TRAVEL_START
      : METRO_TRAVEL_START +
        Math.min(1, (scrollProgress - TRAVEL_START) / (TRAVEL_END - TRAVEL_START)) * METRO_TRAVEL_RANGE;

  return (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    id="metro-overlay-svg"
    viewBox={VIEW_BOX}
    preserveAspectRatio="xMidYMid slice"
    style={{
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      opacity,
      transition: "opacity 0.2s ease-out",
      willChange: "opacity",
      pointerEvents: "none",
    }}
    {...props}
  >
    <defs>
      <style>{METRO_SCOPED_CSS}</style>
      {/* Placeholder gradients MetroOverlay references but didn't define — avoids pulling from other SVGs */}
      <linearGradient id="metro-linear-gradient" x1="0" y1="0" x2="1" y2="1" gradientUnits="objectBoundingBox"><stop offset="0" stopColor="#152151" /><stop offset="1" stopColor="#111e53" /></linearGradient>
      <linearGradient id="metro-linear-gradient-2" x1="0" y1="0" x2="1" y2="1" gradientUnits="objectBoundingBox"><stop offset="0" stopColor="#152151" /><stop offset="1" stopColor="#111e53" /></linearGradient>
      <linearGradient id="metro-linear-gradient-3" x1="0" y1="0" x2="1" y2="1" gradientUnits="objectBoundingBox"><stop offset="0" stopColor="#162d57" /><stop offset="1" stopColor="#111f50" /></linearGradient>
      <linearGradient id="metro-linear-gradient-4" x1="0" y1="0" x2="1" y2="1" gradientUnits="objectBoundingBox"><stop offset="0" stopColor="#152151" /><stop offset="1" stopColor="#141c4b" /></linearGradient>
      <linearGradient id="metro-linear-gradient-5" x1="0" y1="0" x2="1" y2="1" gradientUnits="objectBoundingBox"><stop offset="0" stopColor="#161d25" /><stop offset="1" stopColor="#111f50" /></linearGradient>
      <linearGradient id="metro-linear-gradient-6" x1="0" y1="0" x2="1" y2="1" gradientUnits="objectBoundingBox"><stop offset="0" stopColor="#412c3b" /><stop offset="1" stopColor="#3f2d39" /></linearGradient>
      <linearGradient id="metro-linear-gradient-7" x1="0" y1="0" x2="1" y2="1" gradientUnits="objectBoundingBox"><stop offset="0" stopColor="#162d57" /><stop offset="1" stopColor="#152151" /></linearGradient>
      <linearGradient id="metro-linear-gradient-12" x1="0" y1="0" x2="1" y2="1" gradientUnits="objectBoundingBox"><stop offset="0" stopColor="#783254" /><stop offset="1" stopColor="#b4437b" /></linearGradient>
      <filter
        id="metro-luminosity-invert"
        x={872.75}
        y={253.12}
        width={263}
        height={262}
        colorInterpolationFilters="sRGB"
        filterUnits="userSpaceOnUse"
      >
        <feColorMatrix
          result="cm"
          values="-1 0 0 0 1 0 -1 0 0 1 0 0 -1 0 1 0 0 0 1 0"
        />
      </filter>
      <mask
        id="metro-mask"
        x={872.75}
        y={253.12}
        width={263}
        height={262}
        maskUnits="userSpaceOnUse"
      >
        <g className="cls-43">
          <image
            width={263}
            height={262}
            transform="translate(872.75 253.12)"
            href="data:image/png;base64,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"
          />
        </g>
      </mask>
      <linearGradient
        id="metro-linear-gradient-8"
        x1={0}
        y1={954.52}
        x2={1420.27}
        y2={954.52}
        gradientUnits="userSpaceOnUse"
      >
        <stop offset={0} stopColor="#585e8e" />
        <stop offset={0.53} stopColor="#d1beba" />
        <stop offset={1} stopColor="#4f67a3" />
      </linearGradient>
      <linearGradient
        id="metro-linear-gradient-9"
        x1={148.43}
        y1={932.75}
        x2={1332.51}
        y2={932.75}
        gradientUnits="userSpaceOnUse"
      >
        <stop offset={0} stopColor="#72a8ee" />
        <stop offset={1} stopColor="#8495dd" />
      </linearGradient>
      <linearGradient
        id="metro-linear-gradient-10"
        x1={503.12}
        y1={914.74}
        x2={503.12}
        y2={787.35}
        gradientUnits="userSpaceOnUse"
      >
        <stop offset={0} stopColor="#783254" />
        <stop offset={0.1} stopColor="#7f3559" />
        <stop offset={0.26} stopColor="#953e68" />
        <stop offset={0.27} stopColor="#963f69" />
        <stop offset={0.52} stopColor="#80385e" />
        <stop offset={0.67} stopColor="#953f6c" />
        <stop offset={0.76} stopColor="#a54477" />
        <stop offset={0.77} stopColor="#a74377" />
        <stop offset={0.87} stopColor="#b0437a" />
        <stop offset={1} stopColor="#b4437b" />
      </linearGradient>
      <filter
        id="metro-outer-glow-1"
        x={419.03}
        y={810.76}
        width={45.12}
        height={61.2}
        filterUnits="userSpaceOnUse"
      >
        <feOffset dx={0} dy={0} />
        <feGaussianBlur result="blur" stdDeviation={5} />
        <feFlood floodColor="#ffe" floodOpacity={0.54} />
        <feComposite in2="blur" operator="in" />
        <feComposite in="SourceGraphic" />
      </filter>
      <filter
        id="metro-outer-glow-2"
        x={230.87}
        y={810.52}
        width={44.88}
        height={61.2}
        filterUnits="userSpaceOnUse"
      >
        <feOffset dx={0} dy={0} />
        <feGaussianBlur result="blur-2" stdDeviation={5} />
        <feFlood floodColor="#ffe" floodOpacity={0.54} />
        <feComposite in2="blur-2" operator="in" />
        <feComposite in="SourceGraphic" />
      </filter>
      <filter
        id="metro-outer-glow-3"
        x={257.03}
        y={810.52}
        width={44.88}
        height={61.2}
        filterUnits="userSpaceOnUse"
      >
        <feOffset dx={0} dy={0} />
        <feGaussianBlur result="blur-3" stdDeviation={5} />
        <feFlood floodColor="#ffe" floodOpacity={0.54} />
        <feComposite in2="blur-3" operator="in" />
        <feComposite in="SourceGraphic" />
      </filter>
      <filter
        id="metro-outer-glow-4"
        x={453.59}
        y={810.76}
        width={45.12}
        height={61.2}
        filterUnits="userSpaceOnUse"
      >
        <feOffset dx={0} dy={0} />
        <feGaussianBlur result="blur-4" stdDeviation={5} />
        <feFlood floodColor="#ffe" floodOpacity={0.54} />
        <feComposite in2="blur-4" operator="in" />
        <feComposite in="SourceGraphic" />
      </filter>
      <filter
        id="metro-outer-glow-5"
        x={488.15}
        y={810.76}
        width={44.88}
        height={61.2}
        filterUnits="userSpaceOnUse"
      >
        <feOffset dx={0} dy={0} />
        <feGaussianBlur result="blur-5" stdDeviation={5} />
        <feFlood floodColor="#ffe" floodOpacity={0.54} />
        <feComposite in2="blur-5" operator="in" />
        <feComposite in="SourceGraphic" />
      </filter>
      <filter
        id="metro-outer-glow-6"
        x={522.71}
        y={810.76}
        width={44.88}
        height={61.2}
        filterUnits="userSpaceOnUse"
      >
        <feOffset dx={0} dy={0} />
        <feGaussianBlur result="blur-6" stdDeviation={5} />
        <feFlood floodColor="#ffe" floodOpacity={0.54} />
        <feComposite in2="blur-6" operator="in" />
        <feComposite in="SourceGraphic" />
      </filter>
      <filter
        id="metro-outer-glow-7"
        x={557.27}
        y={810.76}
        width={44.88}
        height={61.2}
        filterUnits="userSpaceOnUse"
      >
        <feOffset dx={0} dy={0} />
        <feGaussianBlur result="blur-7" stdDeviation={5} />
        <feFlood floodColor="#ffe" floodOpacity={0.54} />
        <feComposite in2="blur-7" operator="in" />
        <feComposite in="SourceGraphic" />
      </filter>
      <filter
        id="metro-outer-glow-8"
        x={591.83}
        y={810.76}
        width={44.88}
        height={61.2}
        filterUnits="userSpaceOnUse"
      >
        <feOffset dx={0} dy={0} />
        <feGaussianBlur result="blur-8" stdDeviation={5} />
        <feFlood floodColor="#ffe" floodOpacity={0.54} />
        <feComposite in2="blur-8" operator="in" />
        <feComposite in="SourceGraphic" />
      </filter>
      <filter
        id="metro-outer-glow-9"
        x={626.39}
        y={810.76}
        width={44.88}
        height={61.2}
        filterUnits="userSpaceOnUse"
      >
        <feOffset dx={0} dy={0} />
        <feGaussianBlur result="blur-9" stdDeviation={5} />
        <feFlood floodColor="#ffe" floodOpacity={0.54} />
        <feComposite in2="blur-9" operator="in" />
        <feComposite in="SourceGraphic" />
      </filter>
      <filter
        id="metro-outer-glow-10"
        x={660.95}
        y={810.76}
        width={44.88}
        height={61.2}
        filterUnits="userSpaceOnUse"
      >
        <feOffset dx={0} dy={0} />
        <feGaussianBlur result="blur-10" stdDeviation={5} />
        <feFlood floodColor="#ffe" floodOpacity={0.54} />
        <feComposite in2="blur-10" operator="in" />
        <feComposite in="SourceGraphic" />
      </filter>
      <filter
        id="metro-outer-glow-11"
        x={882.95}
        y={795.16}
        width={56.64}
        height={52.56}
        filterUnits="userSpaceOnUse"
      >
        <feOffset dx={0} dy={0} />
        <feGaussianBlur result="blur-11" stdDeviation={5} />
        <feFlood floodColor="#ffe" floodOpacity={0.54} />
        <feComposite in2="blur-11" operator="in" />
        <feComposite in="SourceGraphic" />
      </filter>
      <linearGradient
        id="metro-linear-gradient-11"
        x1={911.98}
        y1={818.59}
        x2={999.93}
        y2={818.59}
        gradientUnits="userSpaceOnUse"
      >
        <stop offset={0} stopColor="#fef9f3" />
        <stop offset={0.42} stopColor="#fef9f3" stopOpacity={0.57} />
        <stop offset={1} stopColor="#fff9f3" stopOpacity={0} />
      </linearGradient>
    </defs>
    <g
      className="cls-30"
      style={{}}
      transform="matrix(1.06658, 0, 0, 1.17436, -29.751026, -213.375977)"
    >
      <g id="Layer_2" data-name="Layer 2">
        <g id="Layer_1-2" data-name="Layer 1">
          <g>
            <g>
              <g>
                <g className="cls-24" />
              </g>
            </g>
            <g>
              <path
                className="cls-2"
                d="M24.85,727.59c11.15-2.31,28.08-4.63,48.26-2.49,14.5,1.54,20.83,4.34,49.49,12.72,48.77,14.25,46.36,10.79,65.26,18.23,28.87,11.36,22.31,14.64,55.63,28.4,18.64,7.7,34.13,12.23,52.12,26.71,10.27,8.26,16.78,13.5,16.64,19.92-.39,18.23-54.05,30.83-84.53,38.15-46.01,11.06-113.67,28.01-201.92,52.57-.32-64.74-.64-129.48-.95-194.22Z"
              />
            </g>
            <g>
              <g>
                <path
                  className="cls-31"
                  d="M0,955.55l44.39-1.06,44.39-.77,88.77-1.53,88.77-1.07c29.59-.35,59.18-.5,88.77-.76l44.38-.35,44.38-.19,88.77-.35h177.53s177.53.8,177.53.8l88.77.73,44.38.39,44.38.54,44.38.54c14.79.18,29.59.35,44.38.61l88.76,1.46,88.76,1.91,44.38.97,44.38,1.25v.9s-710.14-1.11-710.14-1.11L0,956.45v-.9Z"
                />
                <polygon
                  className="cls-36"
                  points="148.44 933.43 185.44 932.61 222.44 932.02 296.45 930.84 444.47 929.5 481.47 929.17 518.47 929.03 592.48 928.77 740.49 928.78 888.5 929.44 962.5 930.02 999.5 930.33 1036.5 930.82 1184.51 932.8 1258.51 934.3 1295.51 935.05 1332.51 936.03 1332.51 936.73 740.47 935.78 148.43 934.13 148.44 933.43"
                />
                <path d="M13.31,944.38c514.74-14.11,1034.43-12.86,1549.08,3.39-381.82,2.27-1167.37.55-1549.08-3.39h0Z" />
              </g>
              <g transform={`translate(${metroTranslateX}, 0)`}>
                <g>
                  <ellipse
                    className="cls-1"
                    cx={440.35}
                    cy={926.92}
                    rx={13.87}
                    ry={13.02}
                  />
                  <ellipse
                    className="cls-1"
                    cx={470.55}
                    cy={927.67}
                    rx={13.87}
                    ry={13.02}
                  />
                  <ellipse
                    className="cls-1"
                    cx={270.12}
                    cy={926.54}
                    rx={13.87}
                    ry={13.02}
                  />
                  <ellipse
                    className="cls-1"
                    cx={238.98}
                    cy={926.54}
                    rx={13.87}
                    ry={13.02}
                  />
                  <ellipse
                    className="cls-1"
                    cx={787.61}
                    cy={928.24}
                    rx={13.87}
                    ry={13.02}
                  />
                  <ellipse
                    className="cls-1"
                    cx={822.15}
                    cy={926.54}
                    rx={13.87}
                    ry={13.02}
                  />
                  <ellipse
                    className="cls-1"
                    cx={867.21}
                    cy={929.37}
                    rx={17.6}
                    ry={13.02}
                  />
                  <ellipse
                    className="cls-1"
                    cx={196.28}
                    cy={928.52}
                    rx={17.6}
                    ry={13.02}
                  />
                </g>
                <polygon
                  className="cls-26"
                  points="32.7 910.21 49.68 925.5 958.69 928.33 956.14 900.31 32.7 910.21"
                />
                <path
                  className="cls-20"
                  d="M975.3,908.65c.01.37.06,1.46-.64,2.28-.51.6-1.28.99-2.15.99l-923.82,2.82c-10.08,0-18.26-13.27-18.26-23.35v-85.78c0-10.08,8.18-18.26,18.26-18.26h805.54c15.07,1.08,54.27,5.99,86.48,35.82,0,0,26.57,24.61,34.12,56.19,2.04,8.52.2,21.99.47,29.29Z"
                />
                <path
                  className="cls-19"
                  d="M301.79,821.04h31.12c3.05,0,5.53,2.48,5.53,5.53v88.17h-42.18v-88.17c0-3.05,2.48-5.53,5.53-5.53Z"
                />
                <path
                  className="cls-19"
                  d="M372.94,821.04h31.12c3.05,0,5.53,2.48,5.53,5.53v88.17h-42.18v-88.17c0-3.05,2.48-5.53,5.53-5.53Z"
                />
                <path
                  className="cls-19"
                  d="M726.24,821.04h31.12c3.05,0,5.53,2.48,5.53,5.53v88.17h-42.18v-88.17c0-3.05,2.48-5.53,5.53-5.53Z"
                />
                <g>
                  <rect
                    className="cls-37"
                    x={433}
                    y={825.05}
                    width={17.17}
                    height={32.56}
                  />
                  <rect
                    className="cls-16"
                    x={434.22}
                    y={825.85}
                    width={14.73}
                    height={30.95}
                  />
                  <rect
                    className="cls-16"
                    x={434.22}
                    y={825.85}
                    width={14.73}
                    height={30.95}
                  />
                  <rect
                    className="cls-10"
                    x={434.22}
                    y={825.85}
                    width={14.73}
                    height={30.95}
                  />
                </g>
                <g>
                  <rect
                    className="cls-37"
                    x={244.65}
                    y={824.86}
                    width={17.17}
                    height={32.56}
                  />
                  <rect
                    className="cls-16"
                    x={245.87}
                    y={825.66}
                    width={14.73}
                    height={30.95}
                  />
                  <rect
                    className="cls-16"
                    x={245.87}
                    y={825.66}
                    width={14.73}
                    height={30.95}
                  />
                  <rect
                    className="cls-18"
                    x={245.87}
                    y={825.66}
                    width={14.73}
                    height={30.95}
                  />
                </g>
                <g>
                  <rect
                    className="cls-37"
                    x={270.88}
                    y={824.86}
                    width={17.17}
                    height={32.56}
                  />
                  <rect
                    className="cls-16"
                    x={272.1}
                    y={825.66}
                    width={14.73}
                    height={30.95}
                  />
                  <rect
                    className="cls-16"
                    x={272.1}
                    y={825.66}
                    width={14.73}
                    height={30.95}
                  />
                  <rect
                    className="cls-11"
                    x={272.1}
                    y={825.66}
                    width={14.73}
                    height={30.95}
                  />
                </g>
                <g>
                  <rect
                    className="cls-37"
                    x={467.53}
                    y={825.05}
                    width={17.17}
                    height={32.56}
                  />
                  <rect
                    className="cls-16"
                    x={468.75}
                    y={825.85}
                    width={14.73}
                    height={30.95}
                  />
                  <rect
                    className="cls-16"
                    x={468.75}
                    y={825.85}
                    width={14.73}
                    height={30.95}
                  />
                  <rect
                    className="cls-8"
                    x={468.75}
                    y={825.85}
                    width={14.73}
                    height={30.95}
                  />
                </g>
                <g>
                  <rect
                    className="cls-37"
                    x={502.07}
                    y={825.05}
                    width={17.17}
                    height={32.56}
                  />
                  <rect
                    className="cls-16"
                    x={503.29}
                    y={825.85}
                    width={14.73}
                    height={30.95}
                  />
                  <rect
                    className="cls-16"
                    x={503.29}
                    y={825.85}
                    width={14.73}
                    height={30.95}
                  />
                  <rect
                    className="cls-14"
                    x={503.29}
                    y={825.85}
                    width={14.73}
                    height={30.95}
                  />
                </g>
                <g>
                  <rect
                    className="cls-37"
                    x={536.61}
                    y={825.05}
                    width={17.17}
                    height={32.56}
                  />
                  <rect
                    className="cls-16"
                    x={537.83}
                    y={825.85}
                    width={14.73}
                    height={30.95}
                  />
                  <rect
                    className="cls-16"
                    x={537.83}
                    y={825.85}
                    width={14.73}
                    height={30.95}
                  />
                  <rect
                    className="cls-13"
                    x={537.83}
                    y={825.85}
                    width={14.73}
                    height={30.95}
                  />
                </g>
                <g>
                  <rect
                    className="cls-37"
                    x={571.15}
                    y={825.05}
                    width={17.17}
                    height={32.56}
                  />
                  <rect
                    className="cls-16"
                    x={572.37}
                    y={825.85}
                    width={14.73}
                    height={30.95}
                  />
                  <rect
                    className="cls-16"
                    x={572.37}
                    y={825.85}
                    width={14.73}
                    height={30.95}
                  />
                  <rect
                    className="cls-17"
                    x={572.37}
                    y={825.85}
                    width={14.73}
                    height={30.95}
                  />
                </g>
                <g>
                  <rect
                    className="cls-37"
                    x={605.68}
                    y={825.05}
                    width={17.17}
                    height={32.56}
                  />
                  <rect
                    className="cls-16"
                    x={606.9}
                    y={825.85}
                    width={14.73}
                    height={30.95}
                  />
                  <rect
                    className="cls-16"
                    x={606.9}
                    y={825.85}
                    width={14.73}
                    height={30.95}
                  />
                  <rect
                    className="cls-15"
                    x={606.9}
                    y={825.85}
                    width={14.73}
                    height={30.95}
                  />
                </g>
                <g>
                  <rect
                    className="cls-37"
                    x={640.22}
                    y={825.05}
                    width={17.17}
                    height={32.56}
                  />
                  <rect
                    className="cls-16"
                    x={641.44}
                    y={825.85}
                    width={14.73}
                    height={30.95}
                  />
                  <rect
                    className="cls-16"
                    x={641.44}
                    y={825.85}
                    width={14.73}
                    height={30.95}
                  />
                  <rect
                    className="cls-9"
                    x={641.44}
                    y={825.85}
                    width={14.73}
                    height={30.95}
                  />
                </g>
                <g>
                  <rect
                    className="cls-37"
                    x={674.76}
                    y={825.05}
                    width={17.17}
                    height={32.56}
                  />
                  <rect
                    className="cls-16"
                    x={675.98}
                    y={825.85}
                    width={14.73}
                    height={30.95}
                  />
                  <rect
                    className="cls-16"
                    x={675.98}
                    y={825.85}
                    width={14.73}
                    height={30.95}
                  />
                  <rect
                    className="cls-12"
                    x={675.98}
                    y={825.85}
                    width={14.73}
                    height={30.95}
                  />
                </g>
                <path
                  className="cls-6"
                  d="M937.46,862.51c-40.68-.16-72.44-.43-93,0-4.58.1-14.32.34-21.02-6.16-7.2-6.98-7.1-18.07-6.65-23.5,30.55.21,61.1.42,91.65.64.04,0,.08,0,.12,0,7.61-.09,14.66,3.97,18.42,10.58,3.49,6.14,6.98,12.29,10.47,18.44Z"
                />
                <rect
                  className="cls-6"
                  x={826.2}
                  y={807.64}
                  width={15.95}
                  height={15.95}
                />
                <rect
                  className="cls-6"
                  x={849.61}
                  y={807.64}
                  width={15.95}
                  height={15.95}
                />
                <g className="metro-rotating-part">
                  <circle className="cls-6" cx={895.99} cy={813.96} r={7.79} />
                  <g>
                    <path
                      className="cls-3"
                      d="M923.85,822.01c-.04.89-.23,4.43-2.95,7.2-3.16,3.22-7.48,3.12-9.72,3.07-1.88-.04-5.36-.12-8.49-2.69-.7-.57-3.83-3.14-4.18-7.57-.05-.6-.25-3.97,2.01-6.96,3.18-4.21,8.64-4.24,10.66-4.25,2.11-.01,7.09-.04,10.29,3.77,2.34,2.79,2.44,6.12,2.38,7.43Z"
                    />
                    <path
                      className="cls-5"
                      d="M923.99,821.87c-.04.89-.23,4.43-2.95,7.2-3.16,3.22-7.48,3.12-9.72,3.07-1.88-.04-5.36-.12-8.49-2.69-.7-.57-3.83-3.14-4.18-7.57-.05-.6-.25-3.97,2.01-6.96,3.18-4.21,8.64-4.24,10.66-4.25,2.11-.01,7.09-.04,10.29,3.77,2.34,2.79,2.44,6.12,2.38,7.43Z"
                    />
                  </g>
                  <polygon
                    className="cls-38"
                    points="915.76 814.43 997.1 794.05 999.93 843.12 911.98 828.78 915.76 814.43"
                  />
                </g>
              </g>
            </g>
            <g />
            <g />
            <g>
              <g />
            </g>
            <g />
            <g />
            <g />
          </g>
        </g>
      </g>
    </g>
  </svg>
  );
});
export default MetroOverlay;
