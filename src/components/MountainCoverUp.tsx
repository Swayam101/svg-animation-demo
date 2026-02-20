import * as React from "react";
import { bounceOut } from "../utils/easing";
import { MOUNTAIN } from "../constants/timeline";

interface MountainCoverUpProps extends React.SVGProps<SVGSVGElement> {
  scrollProgress?: number;
}

const MOUNTAIN_PATH =
  "M5658 6117 c-9 -13 -35 -29 -58 -37 -78 -26 -183 -111 -365 -294 -122 -124 -227 -218 -325 -293 -80 -62 -171 -135 -203 -163 -116 -105 -535 -577 -952 -1075 -251 -300 -344 -407 -661 -761 l-243 -271 -58 9 c-32 4 -91 12 -132 18 l-73 10 -123 -66 c-113 -61 -129 -73 -206 -159 -96 -106 -80 -102 -249 -64 -109 25 -163 51 -282 132 -124 84 -176 100 -249 76 -96 -33 -174 -103 -759 -689 -322 -322 -613 -610 -647 -640 -72 -64 -88 -103 -55 -131 12 -9 225 -130 474 -270 l453 -253 112 -109 112 -110 228 7 c125 4 291 14 368 22 77 8 199 21 270 29 169 19 323 19 405 0 69 -16 181 -52 770 -247 l365 -121 535 11 535 10 325 41 c179 22 342 42 363 45 25 3 71 -7 140 -29 56 -18 176 -56 267 -85 91 -28 176 -55 190 -60 14 -5 99 -32 190 -60 185 -58 501 -162 725 -240 l150 -52 130 11 c72 7 180 19 240 27 350 47 448 57 770 74 393 21 461 34 805 149 207 70 371 133 777 300 122 50 300 118 395 150 95 32 239 82 320 109 80 28 191 63 245 78 54 15 193 54 308 86 l210 60 375 -8 c746 -17 1149 -7 1207 32 59 38 12 79 -326 280 -205 121 -272 177 -445 374 -122 137 -344 405 -516 620 -74 94 -212 245 -350 385 -124 127 -262 275 -306 330 -99 125 -286 328 -348 378 l-47 39 -82 -11 c-105 -14 -200 -40 -324 -90 -130 -51 -195 -69 -280 -77 -133 -12 -218 39 -430 261 l-128 133 -128 36 -128 37 -57 -34 c-68 -41 -136 -63 -218 -72 l-62 -7 -233 149 c-129 82 -290 179 -359 215 -288 151 -475 270 -760 483 -420 314 -519 402 -1000 886 -388 390 -519 509 -559 509 -9 0 -23 -11 -33 -23z";

const MountainCoverUp: React.FC<MountainCoverUpProps> = React.memo(
  ({ scrollProgress = 0, ...props }) => {
    const { REST_Y, CURTAIN_ENTRANCE_START, CURTAIN_ENTRANCE_END, EXIT_START, EXIT_END, M2_ENTRANCE_START, M2_ENTRANCE_END, M3_ENTRANCE_START, M3_ENTRANCE_END, CONTAINER_VISIBLE_AT } = MOUNTAIN;

    const getCurtainY = (): string => {
      if (scrollProgress < CURTAIN_ENTRANCE_START) return `${REST_Y}%`;
      if (scrollProgress <= CURTAIN_ENTRANCE_END) {
        const p = bounceOut((scrollProgress - CURTAIN_ENTRANCE_START) / (CURTAIN_ENTRANCE_END - CURTAIN_ENTRANCE_START));
        return `${REST_Y - REST_Y * p}%`;
      }
      if (scrollProgress < EXIT_START) return "0%";
      if (scrollProgress <= EXIT_END) {
        const exitP = bounceOut((scrollProgress - EXIT_START) / (EXIT_END - EXIT_START));
        return `${REST_Y * exitP}%`;
      }
      return `${REST_Y}%`;
    };

    const getM2Progress = (): number => {
      if (scrollProgress < M2_ENTRANCE_START) return 0;
      if (scrollProgress > M2_ENTRANCE_END) return 1;
      return (scrollProgress - M2_ENTRANCE_START) / (M2_ENTRANCE_END - M2_ENTRANCE_START);
    };
    const getM2ExitProgress = (): number => {
      if (scrollProgress < EXIT_START) return 0;
      if (scrollProgress >= EXIT_END) return 1;
      return (scrollProgress - EXIT_START) / (EXIT_END - EXIT_START);
    };
    const m2In = bounceOut(getM2Progress());
    const m2Exit = bounceOut(getM2ExitProgress());
    const m2TranslateX = scrollProgress < EXIT_START
      ? `calc(-80vw * ${1 - m2In})` // entrance: off-screen left → 0
      : `calc(-80vw * ${m2Exit})`;   // exit: 0 → off-screen left (reverse)

    const getM3Progress = (): number => {
      if (scrollProgress < M3_ENTRANCE_START) return 0;
      if (scrollProgress > M3_ENTRANCE_END) return 1;
      return (scrollProgress - M3_ENTRANCE_START) / (M3_ENTRANCE_END - M3_ENTRANCE_START);
    };
    const getM3ExitProgress = (): number => {
      if (scrollProgress < EXIT_START) return 0;
      if (scrollProgress >= EXIT_END) return 1;
      return (scrollProgress - EXIT_START) / (EXIT_END - EXIT_START);
    };
    const m3In = bounceOut(getM3Progress());
    const m3Exit = bounceOut(getM3ExitProgress());
    const m3TranslateX = scrollProgress < EXIT_START
      ? `calc(80vw * ${1 - m3In})`  // entrance: off-screen right → 0
      : `calc(80vw * ${m3Exit})`;   // exit: 0 → off-screen right (reverse)

    const getContainerOpacity = (): number => {
      if (scrollProgress < CONTAINER_VISIBLE_AT) return 0;
      if (scrollProgress <= EXIT_END) return 1;
      return 0;
    };
    const containerOpacity = getContainerOpacity();

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
          opacity: containerOpacity,
          transform: `translateY(${getCurtainY()})`,
          willChange: "transform",
          pointerEvents: "none",
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
                {/* Mountain 1 — curtain, rises from bottom (darkest) */}
                <g
                  transform="matrix(0.067196, 0, 0, -0.088752, -23.079844, 819.832703)"
                  fill="#000000"
                  stroke="none"
                >
                  <path d={MOUNTAIN_PATH} style={{ fill: "rgb(13, 28, 70)" }} />
                </g>
                {/* Mountain 2 — enters from LEFT with bounce (lighter) */}
                <g
                  style={{
                    transform: `translateX(${m2TranslateX})`,
                    willChange: "transform",
                  }}
                >
                  <g
                    transform="matrix(-0.068528, 0, 0, -0.091785, -8462.500977, -2218.077881)"
                    fill="#000000"
                    stroke="none"
                    style={{ transformOrigin: "9280.58px 2813.33px" }}
                  >
                    <path d={MOUNTAIN_PATH} style={{ fill: "rgb(22, 45, 95)" }} />
                  </g>
                </g>
                {/* Mountain 3 — enters from RIGHT with bounce (lightest) */}
                <g
                  style={{
                    transform: `translateX(${m3TranslateX})`,
                    willChange: "transform",
                  }}
                >
                  <g
                    transform="matrix(-0.068528, 0, 0, -0.091785, -8822.466797, -2244.523682)"
                    fill="#000000"
                    stroke="none"
                    style={{ transformOrigin: "9280.58px 2813.33px" }}
                  >
                    <path d={MOUNTAIN_PATH} style={{ fill: "rgb(35, 65, 125)" }} />
                  </g>
                </g>
              </g>
            </g>
          </g>
        </g>
      </svg>
    );
  }
);

export default MountainCoverUp;
