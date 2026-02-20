import * as React from "react";
import { scopeCss } from "../utils/scopedCss";
import { PLANE, progressInRange } from "../constants/timeline";
import { easeOut } from "../utils/easing";

interface PlaneOverlayProps extends React.SVGProps<SVGSVGElement> {
  scrollProgress?: number;
}

// Match other layers: viewBox, preserveAspectRatio, sizing
const VIEW_BOX = "0 0 1542.68 1024.85";
const SCOPE_ID = "plane-overlay-svg";
const PLANE_SCOPED_CSS = scopeCss(
  "\n      .cls-1 { stroke: #040719; }\n      .cls-1, .cls-2, .cls-3, .cls-4, .cls-5, .cls-6, .cls-7, .cls-8, .cls-9 { stroke-miterlimit: 10; }\n      .cls-1, .cls-2, .cls-4, .cls-5, .cls-7, .cls-8, .cls-9 { fill: none; }\n      .cls-1, .cls-2, .cls-7 { stroke-width: 3px; }\n      .cls-88 { fill: #040c30; }\n      .cls-80 { isolation: isolate; }\n    ",
  SCOPE_ID
);

const PlaneOverlay: React.FC<PlaneOverlayProps> = React.memo(
  ({ scrollProgress = 0, ...props }) => {
    const { START, END } = PLANE;

    const rawProgress = progressInRange(scrollProgress, START, END);
    const p = easeOut(rawProgress);

    // Slanting path: start bottom-left, fly up-right and disappear
    const translateX = 0 + p * 650;
    const translateY = 250 - p * 950; // 250 → -700 (up)
    const opacity = scrollProgress >= START && scrollProgress <= END ? 1 : 0;

    if (opacity === 0) return null;

    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        id={SCOPE_ID}
        viewBox={VIEW_BOX}
        preserveAspectRatio="xMidYMid slice"
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          pointerEvents: "none",
        }}
        {...props}
      >
        <defs>
          <style>{PLANE_SCOPED_CSS}</style>
        </defs>
        <g
          className="cls-80"
          style={{
            transform: `translate(${translateX}px, ${translateY}px)`,
            transformOrigin: "0 0",
          }}
        >
          <g transform="matrix(1, 0, 0.001619, 1.212011, -6.704061, -267.857544)">
            <g transform="matrix(1.009368, 0, 0, 1.021955, 0.000094, -27.832071)">
              <g id="Layer_1-2" data-name="Layer 1">
                <path
                  className="cls-88"
                  d="M695.88,540.07l6.13-2.38,65.7,3.4-7.49-27.57,11.23-.34,24.85,25.87c13.89-3.19,25.83-7.05,35.57-10.72,8.71-3.28,15.02-5.66,23.32-10.04,12.46-6.58,16.73-10.53,31.66-18.04.67-.34,7.86-3.88,17.7-5.45,6.35-1.01,10.24-1.47,14,.72,3.73,2.18,4.8,5.58,8.74,5.87,2.49.18,3.49-1.06,5.74-.25,1.75.63,3.75,2.32,4.19,4.89.56,3.3-1.86,5.61-2.04,5.79-1.38,2.23-3.65,5.29-7.19,8.08-5.83,4.6-11.88,5.93-14.94,6.38,1.66.8,3.06,1.07,4.09,1.15,1.09.09,1.79-.03,2.04.38.43.71-.88,2.34-1.66,3.06-2.99,2.78-8.42,1.57-10.43,1.02-5.45,2.33-10.89,4.65-16.34,6.98-1.49,3.56-1.21,4.8-.68,5.28.92.83,2.77-.48,6.13-.64,2.27-.11,4.15.36,5.36.77.35-1.51,1.22-4.05,3.49-5.57,4.79-3.21,13.04,0,15.02,5.19,1.08,2.83.06,5.61-.04,5.87-1.03,2.7-3.21,4-4.43,4.72-4.55,2.71-9.49,1.77-11.06,1.4-1.16.98-2.96,2.29-5.4,3.32-2.86,1.2-7.06,2.96-10.26.94-2.93-1.85-3.33-5.81-3.4-6.81l-34.55,1.02v2.72c3.61-1.23,7.4-.59,9.79,1.75,1.57,1.54,2.1,3.39,2.3,4.38-.16.64-1.35,5.14-5.87,7.36-5.16,2.54-10.06-.15-10.47-.38-1.09-.15-1.71-.59-2.04-.89-1.58-1.45-1.68-4.57,0-7.62l-18.04-.68c-5.45,1.77-11.63,3.4-18.47,4.6-15.49,2.71-29.11,2.27-39.57,1.02-.38-.25-.99-.64-1.79-1.02-4.15-1.98-8.22-1.4-9.32-1.28-3.14.35-8.74-.15-19.53-4.09,14.64-.77,29.28-1.53,43.91-2.3-1.54-.7-3.83-1.71-6.64-2.81-12.92-5.06-23.36-6.83-31.66-8.17-14.31-2.32-30.22-4.69-47.66-6.89Z"
                />
              </g>
            </g>
          </g>
        </g>
      </svg>
    );
  }
);

PlaneOverlay.displayName = "PlaneOverlay";
export default PlaneOverlay;
