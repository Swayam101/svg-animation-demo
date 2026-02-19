import * as React from "react";

interface CloudsLayerProps extends React.SVGProps<SVGSVGElement> {
  scrollProgress?: number;
}

// viewBox from clouds.svg; same structure as MountainCoverUp, CoverUpLayer
const VIEW_BOX = "0 0 1542.68 1129.15";

// Only the classes used by cloud paths — scoped to avoid conflicts
const CLOUDS_SCOPED_CSS = (
  "\n      .cls-51 { fill: #fffffb; }\n      .cls-60 { fill: #e1f2fa; }\n      .cls-96 { fill: #e0f1fb; }\n      .cls-163 { fill: #fbfffe; }\n      .cls-89 { isolation: isolate; }\n      @keyframes clouds-fluff {\n        0%, 100% { transform: scale(1) translateY(0); }\n        50% { transform: scale(1.03) translateY(-2px); }\n      }\n      .cloud-fluff { animation: clouds-fluff 4s ease-in-out infinite; transform-origin: center; }\n    "
).replace(/\.cls-/g, "#clouds-svg .cls-");

// Scroll-driven: each cloud moves based on scrollProgress. dir: -1 left, 1 right. phase offsets so they don't wrap in sync.
const CLOUD_CONFIG = [
  { dir: -1, speed: 1.0, phase: 0 },
  { dir: 1, speed: 0.75, phase: 0.25 },
  { dir: -1, speed: 1.3, phase: 0.5 },
  { dir: 1, speed: 0.6, phase: 0.75 },
] as const;

const BASE_DISTANCE = 3500; // total travel over full scroll — lower = less frequent wrapping
const VIEW_WIDTH = 1542.68; // viewBox width — clouds wrap and reappear from opposite side

const CloudsLayer: React.FC<CloudsLayerProps> = React.memo(
  ({ scrollProgress = 0, ...props }) => {
    const cloudTranslates = CLOUD_CONFIG.map((c) => {
      const raw = (scrollProgress + c.phase) * BASE_DISTANCE * c.speed;
      const wrapped = ((raw % VIEW_WIDTH) + VIEW_WIDTH) % VIEW_WIDTH;
      const t = wrapped / VIEW_WIDTH; // 0..1
      // Left: enter from right (+VIEW_WIDTH), exit left (-VIEW_WIDTH)
      // Right: enter from left (-VIEW_WIDTH), exit right (+VIEW_WIDTH) — full traverse
      return c.dir === -1 ? VIEW_WIDTH * (1 - 2 * t) : VIEW_WIDTH * (2 * t - 1);
    });

    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        id="clouds-svg"
        viewBox={VIEW_BOX}
        preserveAspectRatio="xMidYMid slice"
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          pointerEvents: "none",
          transition: "none",
        }}
        {...props}
      >
        <defs>
          <style>{CLOUDS_SCOPED_CSS}</style>
        </defs>
        <g className="cls-89" transform="matrix(1.009585, 0, 0, 1.082279, -6.919415, 0)">
          <g id="Layer_2" data-name="Layer 2">
            <g id="Layer_1-2" data-name="Layer 1">
              <g>
                {/* Cloud 1 — large, bottom-left, goes LEFT */}
                <g transform={`translate(${cloudTranslates[0]}, 0)`}>
                  <g className="cloud-fluff" style={{ animationDelay: "0s" }}>
                  <path
                    className="cls-163"
                    d="M8.53,203.86l213.96.51c-1.45-2.09-5.65-7.57-13.45-10.55-7.58-2.9-14.19-1.75-16.68-1.19-.13-2.83-.93-12.11-8.17-19.4-8.14-8.19-21.16-10.58-33.19-6.13-8.71-18.92-29.18-28.52-47.15-23.49-14.37,4.02-25.33,16.88-27.91,32.68-.85-.41-12.69-5.9-23.66.85-7.76,4.78-10.05,12.58-10.55,14.47-3.13-.63-8.59-1.29-14.98.34-10.24,2.61-16.2,9.39-18.21,11.91Z"
                  />
                  <path
                    className="cls-96"
                    d="M49.38,203.61c1.14-1.3,5.69-6.17,13.11-6.89,4.09-.4,7.38.63,9.19,1.36.15-.71,1.4-6.34,6.98-9.19,5.5-2.82,10.72-.64,11.4-.34,2.42-13.33,13.88-22.21,25.19-21.28,8.35.69,15.85,6.66,19.4,15.15.48-.25,9.04-4.41,17.36.68,8.32,5.09,8.51,14.61,8.51,15.15.41-.29,5.92-4.01,11.91-1.53,3.85,1.59,6.78,6.16,7.28,7.15-3.91.06-91.19-.57-130.34-.26Z"
                  />
                  </g>
                </g>
                {/* Cloud 2 — large, bottom-right, goes RIGHT */}
                <g transform={`translate(${cloudTranslates[1]}, 0)`}>
                  <g className="cloud-fluff" style={{ animationDelay: "0.5s" }}>
                  <path
                    className="cls-163"
                    d="M1053.3,203.18l213.96.51c-1.45-2.09-5.65-7.57-13.45-10.55-7.58-2.9-14.19-1.75-16.68-1.19-.13-2.83-.93-12.11-8.17-19.4-8.14-8.19-21.16-10.58-33.19-6.13-8.71-18.92-29.18-28.52-47.15-23.49-14.37,4.02-25.33,16.88-27.91,32.68-.85-.41-12.69-5.9-23.66.85-7.76,4.78-10.05,12.58-10.55,14.47-3.13-.63-8.59-1.29-14.98.34-10.24,2.61-16.2,9.39-18.21,11.91Z"
                  />
                  <path
                    className="cls-96"
                    d="M1094.15,202.93c1.14-1.3,5.69-6.17,13.11-6.89,4.09-.4,7.38.63,9.19,1.36.15-.71,1.4-6.34,6.98-9.19,5.5-2.82,10.72-.64,11.4-.34,2.42-13.33,13.88-22.21,25.19-21.28,8.35.69,15.85,6.66,19.4,15.15.48-.25,9.04-4.41,17.36.68,8.32,5.09,8.51,14.61,8.51,15.15.41-.29,5.92-4.01,11.91-1.53,3.85,1.59,6.78,6.16,7.28,7.15-3.91.06-91.19-.57-130.34-.26Z"
                  />
                  </g>
                </g>
                {/* Cloud 3 — small, top-right, goes LEFT */}
                <g transform={`translate(${cloudTranslates[2]}, 0)`}>
                  <g className="cloud-fluff" style={{ animationDelay: "1s" }}>
                  <path
                    className="cls-51"
                    d="M1396.88,159.73l139.57-.34c-2.1-2-6.29-5.46-12.6-7.49-5.97-1.93-11.11-1.7-13.96-1.36.1-.81.7-6.57-3.4-10.72-3.9-3.95-10.44-4.81-16-1.87-.66-11.08-7.32-20.55-16.51-23.66-12.24-4.14-27.76,3.41-32.85,18.55-6.19-2.67-13.21-1.41-17.53,3.06-4.96,5.13-4.04,12.07-3.92,12.94-2.15-.36-5.91-.67-10.21.68-7.72,2.43-11.58,8.49-12.6,10.21Z"
                  />
                  <path
                    className="cls-60"
                    d="M1437.9,159.22l60.77-.15c-.92-.87-2.74-2.38-5.48-3.26-2.6-.84-4.84-.74-6.08-.59.04-.35.3-2.86-1.48-4.67-1.7-1.72-4.55-2.09-6.97-.82-.29-4.82-3.19-8.95-7.19-10.3-5.33-1.8-12.08,1.48-14.3,8.08-2.69-1.16-5.75-.61-7.63,1.33-2.16,2.24-1.76,5.26-1.7,5.63-.93-.16-2.57-.29-4.45.3-3.36,1.06-5.04,3.69-5.48,4.45Z"
                  />
                  </g>
                </g>
                {/* Cloud 4 — small, mid-left, goes RIGHT */}
                <g transform={`translate(${cloudTranslates[3]}, 0)`}>
                  <g className="cloud-fluff" style={{ animationDelay: "1.5s" }}>
                  <path
                    className="cls-51"
                    d="M518.58,331.31l139.57-.34c-2.1-2-6.29-5.46-12.6-7.49-5.97-1.93-11.11-1.7-13.96-1.36.1-.81.7-6.57-3.4-10.72-3.9-3.95-10.44-4.81-16-1.87-.66-11.08-7.32-20.55-16.51-23.66-12.24-4.14-27.76,3.41-32.85,18.55-6.19-2.67-13.21-1.41-17.53,3.06-4.96,5.13-4.04,12.07-3.92,12.94-2.15-.36-5.91-.67-10.21.68-7.72,2.43-11.58,8.49-12.6,10.21Z"
                  />
                  <path
                    className="cls-60"
                    d="M559.6,330.8l60.77-.15c-.92-.87-2.74-2.38-5.48-3.26-2.6-.84-4.84-.74-6.08-.59.04-.35.3-2.86-1.48-4.67-1.7-1.72-4.55-2.09-6.97-.82-.29-4.82-3.19-8.95-7.19-10.3-5.33-1.8-12.08,1.48-14.3,8.08-2.69-1.16-5.75-.61-7.63,1.33-2.16,2.24-1.76,5.26-1.7,5.63-.93-.16-2.57-.29-4.45.3-3.36,1.06-5.04,3.69-5.48,4.45Z"
                  />
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

export default CloudsLayer;
