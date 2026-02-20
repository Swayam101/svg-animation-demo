import * as React from "react";

interface MountainCoverUpProps extends React.SVGProps<SVGSVGElement> {
  scrollProgress?: number;
}

const MOUNTAIN_PATH =
  "M5658 6117 c-9 -13 -35 -29 -58 -37 -78 -26 -183 -111 -365 -294 -122 -124 -227 -218 -325 -293 -80 -62 -171 -135 -203 -163 -116 -105 -535 -577 -952 -1075 -251 -300 -344 -407 -661 -761 l-243 -271 -58 9 c-32 4 -91 12 -132 18 l-73 10 -123 -66 c-113 -61 -129 -73 -206 -159 -96 -106 -80 -102 -249 -64 -109 25 -163 51 -282 132 -124 84 -176 100 -249 76 -96 -33 -174 -103 -759 -689 -322 -322 -613 -610 -647 -640 -72 -64 -88 -103 -55 -131 12 -9 225 -130 474 -270 l453 -253 112 -109 112 -110 228 7 c125 4 291 14 368 22 77 8 199 21 270 29 169 19 323 19 405 0 69 -16 181 -52 770 -247 l365 -121 535 11 535 10 325 41 c179 22 342 42 363 45 25 3 71 -7 140 -29 56 -18 176 -56 267 -85 91 -28 176 -55 190 -60 14 -5 99 -32 190 -60 185 -58 501 -162 725 -240 l150 -52 130 11 c72 7 180 19 240 27 350 47 448 57 770 74 393 21 461 34 805 149 207 70 371 133 777 300 122 50 300 118 395 150 95 32 239 82 320 109 80 28 191 63 245 78 54 15 193 54 308 86 l210 60 375 -8 c746 -17 1149 -7 1207 32 59 38 12 79 -326 280 -205 121 -272 177 -445 374 -122 137 -344 405 -516 620 -74 94 -212 245 -350 385 -124 127 -262 275 -306 330 -99 125 -286 328 -348 378 l-47 39 -82 -11 c-105 -14 -200 -40 -324 -90 -130 -51 -195 -69 -280 -77 -133 -12 -218 39 -430 261 l-128 133 -128 36 -128 37 -57 -34 c-68 -41 -136 -63 -218 -72 l-62 -7 -233 149 c-129 82 -290 179 -359 215 -288 151 -475 270 -760 483 -420 314 -519 402 -1000 886 -388 390 -519 509 -559 509 -9 0 -23 -11 -33 -23z";

const easeOut = (t: number): number => {
  if (t <= 0) return 0;
  if (t >= 1) return 1;
  return 1 - (1 - t) * (1 - t);
};

// Synced with Slide3 exit: rises during Slide3 exit (0.62→0.65), goes down after exit done
const REST_Y = 100;
const ENTRANCE_START = 0.50; // when Slide3 starts exiting
const ENTRANCE_END = 0.65;   // when Slide3 exit done, mountain fully up
const EXIT_START = 0.70;     // mountain starts going down
const EXIT_END = 0.76;       // mountain down, reveals Slide4/Metro

// 4 layers: back (light, small) → front (dark, large). xTranslate in vw to cover full screen.
const LAYERS = [
  { color: "rgb(45, 85, 155)", scale: 0.85, xTranslate: "-28vw" },
  { color: "rgb(35, 65, 125)", scale: 0.92, xTranslate: "-9vw" },
  { color: "rgb(22, 45, 95)", scale: 0.98, xTranslate: "9vw" },
  { color: "rgb(13, 28, 70)", scale: 1.06, xTranslate: "28vw" },
] as const;

const MountainCoverUp: React.FC<MountainCoverUpProps> = React.memo(
  ({ scrollProgress = 0, ...props }) => {
    // Don't render until needed — avoids mount flicker when entering
    if (scrollProgress < ENTRANCE_START - 0.02) return null;

    const getCurtainY = (): string => {
      if (scrollProgress < ENTRANCE_START) return `${REST_Y}%`;
      if (scrollProgress < EXIT_START) {
        const p = (scrollProgress - ENTRANCE_START) / (ENTRANCE_END - ENTRANCE_START);
        const t = easeOut(p);
        return `${REST_Y - REST_Y * t}%`;
      }
      if (scrollProgress <= EXIT_END) {
        const p = (scrollProgress - EXIT_START) / (EXIT_END - EXIT_START);
        const t = easeOut(p);
        return `${REST_Y * t}%`;
      }
      return `${REST_Y}%`;
    };

    const curtainY = getCurtainY();

    const getContainerOpacity = (): number => {
      if (scrollProgress < ENTRANCE_START - 0.01) return 0;
      if (scrollProgress <= EXIT_END) return 1;
      return 0;
    };

    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        id="mountain-coverup-svg"
        viewBox="0 0 1542.68 1024.85"
        preserveAspectRatio="xMidYMid slice"
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          opacity: getContainerOpacity(),
          pointerEvents: "none",
          isolation: "isolate",
          contain: "paint",
          transform: "translateZ(0)",
          backfaceVisibility: "hidden",
        }}
        {...props}
      >
        <defs>
          <path id="arc" d="M97 90 Q100 80 103 90" fill="none" stroke="#ffffff" strokeWidth={1} strokeLinecap="round" />
        </defs>
        <g transform="matrix(1.006948, 0, 0, 1, -4.840931, 200)">
          <g id="Layer_2" data-name="Layer 2">
            <g id="Layer_1-2" data-name="Layer 1">
              <g transform="matrix(1.72511, 0, 0, 1.503416, -443.178894, -140.138931)">
                {LAYERS.map((layer, i) => (
                  <g
                    key={i}
                    style={{
                      transform: `translate3d(${layer.xTranslate}, ${curtainY}, 0) scale(${layer.scale})`,
                      transformOrigin: "center bottom",
                    }}
                  >
                    <g
                      transform="matrix(0.067196, 0, 0, -0.088752, -23.079844, 819.832703)"
                      fill="#000000"
                      stroke="none"
                    >
                      <path d={MOUNTAIN_PATH} style={{ fill: layer.color }} />
                    </g>
                  </g>
                ))}
              </g>
            </g>
          </g>
        </g>
      </svg>
    );
  }
);

export default MountainCoverUp;
