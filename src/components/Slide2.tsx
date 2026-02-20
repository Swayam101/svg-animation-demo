import * as React from "react";
import { SLIDE2 } from "../constants/timeline";
import { easeOut } from "../utils/easing";

interface Slide2Props extends React.SVGProps<SVGSVGElement> {
  scrollProgress?: number;
}

const EXIT_TRANSLATE_Y = 400;

const Slide2: React.FC<Slide2Props> = React.memo(({ scrollProgress = 0, ...props }) => {
  const { EXIT, EXIT_START, EXIT_END, FADE_ENTRY_START, FADE_ENTRY_END } = SLIDE2;

  const slide2Fade = (entryStart = FADE_ENTRY_START, entryEnd = FADE_ENTRY_END) => {
    if (scrollProgress < entryStart) return 0;
    if (scrollProgress < entryEnd) return easeOut((scrollProgress - entryStart) / (entryEnd - entryStart));
    if (scrollProgress < EXIT_START) return 1;
    if (scrollProgress < EXIT_END) return 1 - easeOut((scrollProgress - EXIT_START) / (EXIT_END - EXIT_START));
    return 0;
  };

  const getGroundEntryOpacity     = () => slide2Fade();
  const getLanternEntryOpacity    = () => slide2Fade();
  const getGroundShovelledOpacity = () => slide2Fade();

  const getExitTranslateY = () => {
    if (scrollProgress < EXIT_START) return 0;
    if (scrollProgress >= EXIT_END) return EXIT_TRANSLATE_Y;
    return EXIT_TRANSLATE_Y * easeOut((scrollProgress - EXIT_START) / (EXIT_END - EXIT_START));
  };

  const getLanternEntryScale = () => {
    const minScale = 0.5;
    if (scrollProgress < FADE_ENTRY_START) return minScale;
    if (scrollProgress <= FADE_ENTRY_END) return minScale + (1 - minScale) * easeOut((scrollProgress - FADE_ENTRY_START) / (FADE_ENTRY_END - FADE_ENTRY_START));
    if (scrollProgress < EXIT) return 1;
    return minScale;
  };

  return (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="6.485 89.874 1530.515 1024.136"
    {...props}
  >
    <defs>
      <style>
        {
          "\n      .s2-cls-1 {\n        fill: #f4a038;\n      }\n\n      .s2-cls-2 {\n        fill: #37325b;\n      }\n\n      .s2-cls-3 {\n        fill: none;\n        stroke: #06102b;\n        stroke-linecap: round;\n        stroke-width: 2px;\n      }\n\n      .s2-cls-3, .s2-cls-4 {\n        stroke-miterlimit: 10;\n      }\n\n      .s2-cls-5 {\n        fill: #8d513f;\n      }\n\n      .s2-cls-6 {\n        fill: #081639;\n      }\n\n      .s2-cls-7 {\n        fill: #68423e;\n      }\n\n      .s2-cls-8 {\n        fill: url(#s2-linear-gradient-2);\n      }\n\n      .s2-cls-9 {\n        fill: #0e1834;\n      }\n\n      .s2-cls-10 {\n        fill: url(#s2-linear-gradient-10);\n      }\n\n      .s2-cls-11 {\n        fill: url(#s2-linear-gradient-12);\n      }\n\n      .s2-cls-12 {\n        opacity: .84;\n      }\n\n      .s2-cls-12, .s2-cls-13 {\n        mix-blend-mode: screen;\n      }\n\n      .s2-cls-4 {\n        fill: #844c38;\n        stroke: #734a44;\n      }\n\n      .s2-cls-14 {\n        fill: #081537;\n      }\n\n      .s2-cls-15 {\n        fill: url(#s2-linear-gradient-4);\n      }\n\n      .s2-cls-16 {\n        fill: url(#s2-radial-gradient);\n      }\n\n      .s2-cls-17 {\n        fill: url(#s2-linear-gradient-3);\n      }\n\n      .s2-cls-18 {\n        fill: #fbc251;\n      }\n\n      .s2-cls-19 {\n        fill: url(#s2-linear-gradient-5);\n      }\n\n      .s2-cls-20 {\n        fill: #663c32;\n      }\n\n      .s2-cls-21 {\n        isolation: isolate;\n      }\n\n      .s2-cls-22 {\n        fill: #ed9730;\n      }\n\n      .s2-cls-23 {\n        fill: url(#s2-linear-gradient-8);\n      }\n\n      .s2-cls-24 {\n        fill: #0d1c47;\n      }\n\n      .s2-cls-25 {\n        fill: url(#s2-radial-gradient-2);\n      }\n\n      .s2-cls-26 {\n        fill: #f19c34;\n      }\n\n      .s2-cls-27 {\n        fill: #412c3b;\n      }\n\n      .s2-cls-28 {\n        fill: #07153a;\n      }\n\n      .s2-cls-29 {\n        fill: #162d57;\n      }\n\n      .s2-cls-30 {\n        fill: url(#s2-linear-gradient-7);\n      }\n\n      .s2-cls-31 {\n        fill: url(#s2-linear-gradient-9);\n      }\n\n      .s2-cls-32 {\n        fill: url(#s2-linear-gradient-11);\n      }\n\n      .s2-cls-33 {\n        fill: #f8be4b;\n      }\n\n      .s2-cls-34 {\n        fill: url(#s2-linear-gradient-6);\n      }\n\n      .s2-cls-35 {\n        fill: #091337;\n      }\n\n      .s2-cls-36 {\n        fill: #faf3c9;\n      }\n\n      .s2-cls-13 {\n        opacity: .65;\n      }\n\n      .s2-cls-37 {\n        fill: #eaa552;\n      }\n\n      .s2-cls-38 {\n        fill: #3f2d39;\n      }\n\n      .s2-cls-39 {\n        fill: #85513f;\n      }\n\n      .s2-cls-40 {\n        fill: #2c4a80;\n      }\n\n      .s2-cls-41 {\n        fill: url(#s2-linear-gradient);\n      }\n\n      .s2-cls-42 {\n        fill: #4f2f34;\n      }\n\n      .s2-cls-43 {\n        fill: #784a3a;\n      }\n\n      .s2-cls-44 {\n        fill: #6d4038;\n      }\n\n      .s2-cls-45 {\n        fill: #674f4b;\n      }\n\n      @keyframes s2-digging {\n        0%, 100% { transform: translate(-445px, -654px) rotate(-6deg); }\n        50% { transform: translate(-445px, -654px) rotate(6deg); }\n      }\n      @keyframes s2-digging-inv {\n        0%, 100% { transform: translate(-912px, -650px) rotate(6deg); }\n        50% { transform: translate(-912px, -650px) rotate(-6deg); }\n      }\n      .s2-shovel-group,\n      .s2-shovel-group-inv {\n        transform-box: fill-box;\n      }\n      .s2-shovel-group {\n        animation: s2-digging 1.5s ease-in-out infinite alternate;\n      }\n      .s2-shovel-group-inv {\n        animation: s2-digging-inv 1.5s ease-in-out infinite alternate;\n      }\n    "
        }
      </style>
      <radialGradient
        id="s2-radial-gradient"
        cx={1913.25}
        cy={1351.03}
        r={12.29}
        gradientTransform="translate(-3123.03 -1619.84) scale(2.23 1.71)"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset={0} stopColor="#fcf0b3" />
        <stop offset={1} stopColor="#f0ad41" />
      </radialGradient>
      <linearGradient
        id="s2-linear-gradient-8"
        x1={1147.59}
        y1={738}
        x2={1147.59}
        y2={710.02}
        gradientUnits="userSpaceOnUse"
      >
        <stop offset={0} stopColor="#512b1a" />
        <stop offset={1} stopColor="#b66428" />
      </linearGradient>
      <linearGradient
        id="s2-linear-gradient-9"
        x1={1131.97}
        y1={659.6}
        x2={1159.89}
        y2={659.6}
        href="#s2-linear-gradient-8"
      />
      <radialGradient
        id="s2-radial-gradient-2"
        cx={1644.44}
        cy={1207.69}
        gradientTransform="translate(-2649.38 -885.08) scale(2.02 1.4)"
        href="#s2-radial-gradient"
      />
      <linearGradient
        id="s2-linear-gradient-10"
        x1={681.44}
        y1={846.15}
        x2={681.44}
        y2={823.22}
        href="#s2-linear-gradient-8"
      />
      <linearGradient
        id="s2-linear-gradient-11"
        x1={667.27}
        y1={781.9}
        x2={692.6}
        y2={781.9}
        href="#s2-linear-gradient-8"
      />
    </defs>
    <g
      className="s2-cls-21"
      style={{}}
      transform="matrix(0.9, 0, 0, 0.9, 20, 180)"
    >
      <g style={{ transform: `translateY(${getExitTranslateY()}px)` }}>
      <g id="Layer_2" data-name="Layer 2">
        <g id="Layer_1-2" data-name="Layer 1">
          <g>
           
            <g id="small-tent" style={{ opacity: getGroundEntryOpacity() }}>
              <g>
                <path
                  className="s2-cls-5"
                  d="M573.22,653.68c12.76-11.69,27.93-27.86,41.61-48.97,10.36-15.98,17.4-31,22.27-43.73,4.96,1.88,12.39,4.35,21.71,6.11,13.1,2.47,23.17,2.27,39.22,1.85,10.39-.27,20.7-.54,34.46-2.71,12.91-2.04,23.59-4.93,31.52-7.46,7.29,14.1,16.68,29.94,28.79,46.63,12.24,16.88,24.77,31.17,36.35,43.02,2.04,1.46,5.36,4.23,7.77,8.6,3.29,5.94,3.03,11.42,2.75,13.83-41.19,2.17-82.39,4.35-123.58,6.52l-9.53-6.41c-32.76-5.97-68.43-10.61-106.75-12.95-9.02-.55-17.9-.96-26.62-1.23v-3.08Z"
                />
                <path
                  className="s2-cls-33"
                  d="M709.57,672.9c10.05-15.94,23.1-39.4,32.74-59.06,7.48-15.27,13.82-29.93,19.19-43.79-.16,34.76-.33,69.53-.49,104.29-16.18,1.13-29.08,1.65-45.26,2.78-3.26-2.24-2.16-1.4-6.18-4.22Z"
                />
                <path
                  className="s2-cls-18"
                  d="M766.33,565.79l6.93,106.21,57.16-.93,6.51-14.06c-.79-1.2-2.02-2.98-3.68-5.03-4.24-5.23-8.12-8.34-10.45-10.37-3.21-2.81-6.32-6.73-12.56-14.57-7.44-9.36-23.56-31.46-43.92-61.24Z"
                />
                <path
                  className="s2-cls-26"
                  d="M715.68,665.39c14.99-5.5,28.14-9.97,43.18-15.5.95-.35,1.99.27,1.98,1.17-.08,6.78-.15,13.55-.23,20.33-.02,1.33-1.16,2.45-2.67,2.58-13.63,1.23-26.78,1.98-40.78,3-1.48.11-1.95-.21-7.59-4.06-.32-.22,5.74-7.38,6.11-7.51Z"
                />
                <path
                  className="s2-cls-22"
                  d="M771.12,639.07c-.09,1.73-.5,15.1,11.89,24.79,12.25,9.58,27.05,7.79,29.04,7.51-12.92.21-25.85.42-38.77.63l-2.15-32.93Z"
                />
                <path
                  className="s2-cls-1"
                  d="M798.56,630.86c3.55,6.5,8.4,14.02,15.02,21.83,4.51,5.32,9.07,9.87,13.34,13.69-.31-1.67-.54-3.62-.56-5.8-.02-2.16.16-4.11.43-5.79.09-.56.04-1.13-.24-1.64-.14-.26-.34-.51-.68-.67-3.17-1.51-6.62-3.4-10.16-5.77-8.01-5.37-13.52-11.22-17.16-15.85Z"
                />
                <path
                  className="s2-cls-37"
                  d="M632.62,653.93c11.36-1.22,25.43-3.99,40.35-10.11,21.59-8.86,35.01-20.64,38.1-23.44,6.94-6.25,26.12-26.34,19.61-19.74h0c-5.19,8.2-17.05,24.35-39.5,37.01-24.3,13.69-47.86,15.87-58.56,16.28Z"
                />
                <path
                  className="s2-cls-39"
                  d="M636.54,631.72l-1.69,21.22c10.41-1.38,23.43-4.1,37.48-9.65,29.21-11.53,47.77-30.94,56.91-41.42-11.98,13.42-24.66,23.78-33.18,28.9-13.48,8.1-35.78,21.51-49.72,14.27-5.89-3.06-8.52-8.88-9.81-13.32Z"
                />
              </g>
              <polygon
                className="s2-cls-9"
                points="564.73 662.55 564.73 657.12 569.49 645.03 570.54 645.03 574.32 657.24 574.32 662.55 564.73 662.55"
              />
              <polygon
                className="s2-cls-9"
                points="704.88 682.28 704.88 676.22 710.21 662.7 711.38 662.7 715.61 676.35 715.61 682.28 704.88 682.28"
              />
            </g>
            <g id="rebar-structure" style={{ opacity: getGroundEntryOpacity() }}>
              <line
                className="s2-cls-3"
                x1={605.8}
                y1={595.89}
                x2={608.1}
                y2={773.59}
              />
              <line
                className="s2-cls-3"
                x1={614.99}
                y1={595.89}
                x2={617.29}
                y2={773.59}
              />
              <line
                className="s2-cls-3"
                x1={625.88}
                y1={595.89}
                x2={628.18}
                y2={773.59}
              />
              <line
                className="s2-cls-3"
                x1={596.61}
                y1={595.89}
                x2={598.9}
                y2={773.59}
              />
              <line
                className="s2-cls-3"
                x1={595.93}
                y1={602.51}
                x2={626.39}
                y2={602.34}
              />
              <line
                className="s2-cls-3"
                x1={595.93}
                y1={622.93}
                x2={626.39}
                y2={622.76}
              />
              <line
                className="s2-cls-3"
                x1={595.93}
                y1={643.36}
                x2={626.39}
                y2={643.19}
              />
              <line
                className="s2-cls-3"
                x1={595.93}
                y1={663.78}
                x2={626.39}
                y2={663.61}
              />
              <line
                className="s2-cls-3"
                x1={595.93}
                y1={684.21}
                x2={626.39}
                y2={684.04}
              />
              <line
                className="s2-cls-3"
                x1={595.93}
                y1={704.63}
                x2={626.39}
                y2={704.46}
              />
              <line
                className="s2-cls-3"
                x1={595.93}
                y1={725.06}
                x2={626.39}
                y2={724.89}
              />
              <line
                className="s2-cls-3"
                x1={595.93}
                y1={745.49}
                x2={626.39}
                y2={745.32}
              />
            </g>
            <g id="person-rebar-structure-1" style={{ opacity: getGroundEntryOpacity() }}>
              <g>
                <line
                  className="s2-cls-3"
                  x1={321.63}
                  y1={563.72}
                  x2={323.93}
                  y2={741.42}
                />
                <line
                  className="s2-cls-3"
                  x1={330.82}
                  y1={563.72}
                  x2={333.12}
                  y2={741.42}
                />
                <line
                  className="s2-cls-3"
                  x1={341.71}
                  y1={563.72}
                  x2={344.01}
                  y2={741.42}
                />
                <line
                  className="s2-cls-3"
                  x1={312.44}
                  y1={563.72}
                  x2={314.73}
                  y2={741.42}
                />
                <line
                  className="s2-cls-3"
                  x1={311.75}
                  y1={570.34}
                  x2={342.22}
                  y2={570.17}
                />
                <line
                  className="s2-cls-3"
                  x1={311.75}
                  y1={590.76}
                  x2={342.22}
                  y2={590.59}
                />
                <line
                  className="s2-cls-3"
                  x1={311.75}
                  y1={611.19}
                  x2={342.22}
                  y2={611.02}
                />
                <line
                  className="s2-cls-3"
                  x1={311.75}
                  y1={631.61}
                  x2={342.22}
                  y2={631.44}
                />
                <line
                  className="s2-cls-3"
                  x1={311.75}
                  y1={652.04}
                  x2={342.22}
                  y2={651.87}
                />
                <line
                  className="s2-cls-3"
                  x1={311.75}
                  y1={672.46}
                  x2={342.22}
                  y2={672.29}
                />
                <line
                  className="s2-cls-3"
                  x1={311.75}
                  y1={692.89}
                  x2={342.22}
                  y2={692.72}
                />
                <line
                  className="s2-cls-3"
                  x1={311.75}
                  y1={713.32}
                  x2={342.22}
                  y2={713.15}
                />
              </g>
              <g>
                <line
                  className="s2-cls-3"
                  x1={352.27}
                  y1={563.72}
                  x2={354.56}
                  y2={741.42}
                />
                <line
                  className="s2-cls-3"
                  x1={361.46}
                  y1={563.72}
                  x2={363.75}
                  y2={741.42}
                />
                <line
                  className="s2-cls-3"
                  x1={372.35}
                  y1={563.72}
                  x2={374.65}
                  y2={741.42}
                />
                <line
                  className="s2-cls-3"
                  x1={343.07}
                  y1={563.72}
                  x2={345.37}
                  y2={741.42}
                />
                <line
                  className="s2-cls-3"
                  x1={342.39}
                  y1={570.34}
                  x2={372.86}
                  y2={570.17}
                />
                <line
                  className="s2-cls-3"
                  x1={342.39}
                  y1={590.76}
                  x2={372.86}
                  y2={590.59}
                />
                <line
                  className="s2-cls-3"
                  x1={342.39}
                  y1={611.19}
                  x2={372.86}
                  y2={611.02}
                />
                <line
                  className="s2-cls-3"
                  x1={342.39}
                  y1={631.61}
                  x2={372.86}
                  y2={631.44}
                />
                <line
                  className="s2-cls-3"
                  x1={342.39}
                  y1={652.04}
                  x2={372.86}
                  y2={651.87}
                />
                <line
                  className="s2-cls-3"
                  x1={342.39}
                  y1={672.46}
                  x2={372.86}
                  y2={672.29}
                />
                <line
                  className="s2-cls-3"
                  x1={342.39}
                  y1={692.89}
                  x2={372.86}
                  y2={692.72}
                />
                <line
                  className="s2-cls-3"
                  x1={342.39}
                  y1={713.32}
                  x2={372.86}
                  y2={713.15}
                />
              </g>
            </g>
            <g id="person-shovel-1" style={{ opacity: getGroundEntryOpacity() }}>
              <path
                className="s2-cls-35"
                d="M405.8,619.78c.56-5.38,7.13-10.04,20.26-19.15,3.68-2.55,6.99-4.71,9.73-6.43,2.18-1.37,4.68-2.13,7.26-2.21l14.64-.46c1.84-.06,3.53-1.01,4.54-2.55,1.07-.93,2.21-2.06,3.33-3.41,2.92-3.54,4.45-7.16,5.28-9.79.4-.81,3.94-7.69,11.23-8.85,8.05-1.28,16.33,5.1,17.36,12.94.79,5.96-2.91,10.58-3.74,11.57l-6.13,3.74c-2.26-.12-3.3.49-3.83,1.11-1.2,1.39-.16,3.2-1.45,4.34-1.16,1.03-2.79.23-3.49,1.36-.48.79-.04,1.71-.6,2.04-.44.26-.89-.22-1.53-.09-.48.1-1.06.55-1.55,2.02-.57.56-1.32,1.47-1.53,2.72-.18,1.03,0,2.11.54,3.07,1.43,2.51,2.1,5.38,1.92,8.27-1.93,4.73-4.22,11.93-4.83,20.94-.62,9.24.79,16.84,2.11,21.84-.02.3-.02.68.05,1.12.06.37.16.73.29,1.08l4.69,11.87c-1.45,4.23-5.1,6.94-8.43,6.72-4.41-.29-8.74-5.73-7.23-12.17-2.04-6.13-4.09-12.26-6.13-18.38l-3.4,5.45,15.39,46.5c.4,1.22.63,2.49.67,3.78,1.89,10.91,3.12,23.67,2.66,37.89-.16,5.01-.52,9.78-1.02,14.3,1.85,1.04,4.13,2.13,6.81,3.06,3.35,1.16,6.39,1.75,8.85,2.04.42.99.45,1.77.34,2.38-.59,3.31-6.06,5.8-13.62,6.13-4.12-.39-8.24-.78-12.36-1.17-3.38-.32-6.15-2.81-6.82-6.13-1.97-10.87-2.85-19.82-3.29-26.06-.82-11.7-.37-17.87-3.06-26.89-2.21-7.41-5.43-13.05-7.83-16.68-2.38,21.33-4.77,42.67-7.15,64,1.73,3.06,4.12,5.79,7.49,7.15,2.76,1.11,5.19.91,5.45,2.04.31,1.36-2.8,3.25-4.77,4.09-2.73,1.16-5.27,1.16-6.81,1.02-4.92-.33-9.85-.66-14.77-.98-3.17-.21-5.63-2.86-5.6-6.04l.95-104c.01-1.25-.59-2.43-1.61-3.16-1.89-1.35-2.76-3.73-2.18-5.98l4.82-18.73c-4.04-2.81-12.71-9.65-11.92-17.28Z"
              />
              {/* Shovel: translate(pivot) → rotate → translate(-pivot) so rotation is around hand grip (445,654) like GSAP svgOrigin */}
              <g transform="translate(445, 654)">
                <g className="s2-shovel-group" transform="translate(-445, -654)">
                  <polygon
                    className="s2-cls-2"
                    points="551.5 750.76 444.61 655.1 445.29 652.38 557.29 745.66 551.5 750.76"
                  />
                  <path
                    className="s2-cls-28"
                    d="M570.39,764.04l-26.89-1.87c-2.34-12.87,1.42-24.65,10.94-27.79.31-.1.62-.19.92-.28,8.67-2.32,16.96,4.95,16.27,13.9l-1.23,16.03Z"
                  />
                </g>
              </g>
              <path
                className="s2-cls-45"
                d="M437.58,650.04c.21-2.65,2.33-4.55,4.21-4.98,1.24-.28,3.08-.09,3.08-.01,0,0,0,0-.02.01,2.13,1.49,4.26,2.99,6.39,4.48,1.38.97,2.14,2.62,1.91,4.3,0,.01,0,.02,0,.03-.11.77-.24,1.5-.38,2.17-2.06-.22-4.2-.45-4.19-.5,0,0,.08,0,.11,0,.63,0,2.34.62,2.74,2.17,0,0,0,.02,0,.03.23.91-.74,1.68-1.61,1.33-3.19-1.26-6.38-2.52-9.56-3.78-1.8-1.15-2.85-3.17-2.68-5.23Z"
              />
            </g>
        
            <g id="ground-shovelled-1" style={{
              opacity: getGroundShovelledOpacity(),
            }}>
              <path
                className="s2-cls-6"
                d="M493.97,780.38c12.77-5.48,20.19-10.53,24.68-14.3,1.12-.94,3.56-3.06,7.4-4.85,3.94-1.84,7.96-2.68,14.72-2.98,3.46-.15,12.26-.37,31.74,2.72,1.09.17,2.12.34,3.09.5,6.3,1.06,10.49,7.45,8.45,13.51-.09.27-.19.54-.3.8-2.81,6.57-11.44,8.63-16.6,6.64-5.37-2.07-6.84-8.49-8.94-7.91-2.2.6-.04,7.52-3.32,10.72-4.33,4.23-14.57-1.43-25.79-4.34-8.11-2.1-19.78-3.55-35.15-.51Z"
              />
              <path
                className="s2-cls-6"
                d="M548.27,773.23c17-14.02,30.03-16.06,38.81-15.32,8.25.7,12.84,3.87,27.06,9.19,14.51,5.42,26.74,8.49,34.72,10.21-12.11,4.58-35.52,11.45-64.34,7.15-15.12-2.26-27.39-6.94-36.26-11.23Z"
              />
            </g>
            <g id="ground-shovelled-2" style={{
              opacity: getGroundShovelledOpacity(),
            }}>
              <path
                className="s2-cls-6"
                d="M806.82,729.91c7.65-3.28,12.09-6.31,14.78-8.56.67-.56,2.13-1.83,4.43-2.9,2.36-1.1,4.76-1.6,8.82-1.78,2.07-.09,7.34-.22,19.01,1.63.65.1,1.27.2,1.85.3,3.77.63,6.28,4.46,5.06,8.09-.05.16-.12.32-.18.48-1.68,3.93-6.85,5.17-9.94,3.97-3.21-1.24-4.09-5.08-5.35-4.74-1.32.36-.02,4.5-1.99,6.42-2.59,2.53-8.72-.86-15.44-2.6-4.86-1.26-11.84-2.13-21.05-.31Z"
              />
              <path
                className="s2-cls-6"
                d="M839.33,725.63c10.18-8.4,17.98-9.62,23.24-9.17,4.94.42,7.69,2.32,16.2,5.5,8.69,3.25,16.01,5.08,20.79,6.12-7.25,2.74-21.27,6.86-38.52,4.28-9.06-1.35-16.4-4.16-21.71-6.73Z"
              />
            </g>
            <g style={{ opacity: getGroundEntryOpacity() }}>
            <path
                id="sitting-person"
                className="s2-cls-14"
              d="M678.06,620.48c.25.79.93,1.38,1.74,1.53,1.91.36,3.33.98,4.26,1.47,2,1.06,2.32,1.83,2.43,2.17.14.45.13.91.05,1.32-.24,1.22.38,2.45,1.46,3.07l.1.06c.45.26.83.64,1.11,1.08l1.45,2.34c.79,1.28,2.49,1.65,3.75.82l1.67-1.12c1.53-1.02,3.56.14,3.47,1.97l-1.62,32.05c-.02.36-.12.7-.3,1.01-8.35,11.3-11.69,19.53-13.17,25.06-.5,1.86-1.62,6.53-5.11,11.49-2.53,3.61-5.37,6.02-7.36,7.49-.06.02-.73.29-.9,1.02-.12.53.08,1.09.51,1.45-.17,3.44.21,4.24.6,4.34.73.19,1.56-2.16,4.25-4.51,1.16-1.01,2.25-1.66,2.98-2.04.32,1.12.58,2.68.26,4.43-.55,2.99-2.51,5-2.12,5.36.14.13.6.04,1.94-.95,1.23-.72,4.51-2.89,6.22-7.13.96-2.38,1.07-4.52,1.02-5.87,1.45-1.66,2.9-3.37,4.34-5.11,10.3-12.45,18.71-25.08,25.62-37.36.06-.24.32-1.18,1.19-1.7,1.01-.6,2.42-.41,3.46.53l4.54,2.57c1.31.74,1.52,2.54.43,3.57-2.09-.03-8.52.16-14.47,4.73-8.14,6.26-8.88,15.73-8.97,17.22-.14.13-.56.55-.67,1.26-.08.47,0,.96.22,1.41,1.21,3.79,2.78,7.93,4.83,12.28,3.62,7.69,7.74,13.96,11.5,18.86.06.11.48.96.08,1.91-.25.59-.75,1.07-1.43,1.27l-11.08,3.2c-.95.28-1.61,1.15-1.61,2.14v.59c0,1.2.96,2.19,2.16,2.23l26.37.85c1.53.05,2.66-1.43,2.2-2.89-.1-1.3-.31-3.23-.77-5.52-1.32-6.53-3.74-11.08-4.6-12.77-2.13-4.2-4.76-10.75-6.81-20.93-.04-.11-.31-1.06.3-1.93.37-.54.98-.91,1.71-.95l7.89-.44c.91-.05,1.76.46,2.15,1.28-.55.28-1.25.74-1.66,1.53-1.45,2.79,2.04,7.11,4.94,11.06,2.62,3.59,6.09,8.7,9.79,15.41.08.18.27.63.19,1.22-.05.41-.22.8-.49,1.14l-5.38,6.57c-1.18,1.44-.17,3.62,1.69,3.64l16.11.24c1.3.02,2.35-1.08,2.26-2.38,0-5.43-.55-12.25-2.48-19.88-1.13-4.46-2.53-8.39-3.96-11.76-.35-.63-.37-1.39-.06-2.04,2.54-.21,7.83-1.05,12.1-5.09,6.42-6.09,7.87-16.93,3.27-26.91.08-.16.34-.76.15-1.52-.13-.49-.42-.94-.86-1.26-2.52-6.25-10.63-23.97-30.31-35.67-13.46-8-26.34-9.64-33.23-10-.08-.06-.17-.14-.27-.24-.08-.09-.15-.19-.21-.29l-6.15-10.68c-.09-.16-.2-.31-.33-.45-4.32-4.58-11.22-5.6-16.49-2.52-5.32,3.11-7.77,9.7-5.87,15.68Z"
            />
            </g>
            <g id="big-tent-woody" style={{ opacity: getGroundEntryOpacity() }}>
              <g>
                <path
                  className="s2-cls-5"
                  d="M890.36,657.65c24.32-25.31,53.22-60.31,79.29-105.99,19.74-34.59,33.17-67.09,42.45-94.64,9.46,4.08,23.61,9.41,41.38,13.22,24.97,5.35,44.16,4.91,74.75,4,19.8-.58,39.45-1.16,65.68-5.87,24.6-4.42,44.95-10.67,60.07-16.15,13.9,30.52,31.79,64.8,54.86,100.92,23.33,36.53,47.2,67.47,69.28,93.11,3.9,3.17,10.21,9.16,14.82,18.62,6.26,12.85,5.78,24.71,5.25,29.94-78.5,4.71-157.01,9.41-235.51,14.12l-18.15-13.88c-62.43-12.93-130.42-22.96-203.44-28.03-17.19-1.19-34.11-2.07-50.73-2.67v-6.67Z"
                />
                <path
                  className="s2-cls-33"
                  d="M1150.21,699.25c19.15-34.5,44.02-85.28,62.39-127.83,14.26-33.04,26.33-64.78,36.58-94.78-.31,75.24-.62,150.49-.93,225.73-30.84,2.45-55.42,3.56-86.26,6.01-6.22-4.86-4.11-3.03-11.77-9.13Z"
                />
                <path
                  className="s2-cls-18"
                  d="M1258.39,467.43l13.22,229.87,108.93-2,12.41-30.44c-1.51-2.61-3.85-6.45-7.02-10.89-8.07-11.32-15.48-18.04-19.91-22.45-6.11-6.08-12.05-14.56-23.93-31.54-14.18-20.26-44.9-68.1-83.7-132.55Z"
                />
                <path
                  className="s2-cls-26"
                  d="M1161.86,682.99c28.58-11.91,53.62-21.58,82.29-33.55,1.8-.75,3.8.58,3.78,2.53-.15,14.66-.29,29.33-.44,43.99-.03,2.88-2.22,5.3-5.08,5.59-25.97,2.66-51.03,4.29-77.72,6.5-2.81.23-3.73-.46-14.47-8.8-.6-.47,10.94-15.97,11.65-16.26Z"
                />
                <path
                  className="s2-cls-22"
                  d="M1267.5,626.04c-.17,3.75-.96,32.67,22.65,53.65,23.34,20.73,51.55,16.85,55.34,16.26-24.63.45-49.26.91-73.89,1.36l-4.1-71.27Z"
                />
                <path
                  className="s2-cls-1"
                  d="M1319.8,608.27c6.77,14.06,16.01,30.34,28.63,47.25,8.6,11.52,17.28,21.35,25.43,29.63-.59-3.61-1.03-7.84-1.08-12.56-.05-4.68.31-8.89.82-12.54.17-1.21.07-2.45-.45-3.55-.27-.56-.66-1.1-1.3-1.45-6.04-3.27-12.61-7.36-19.36-12.49-15.27-11.62-25.77-24.27-32.7-34.31Z"
                />
                <path
                  className="s2-cls-37"
                  d="M1003.56,658.19c21.65-2.63,48.46-8.64,76.89-21.89,41.14-19.18,66.71-44.68,72.62-50.73,13.22-13.54,49.77-57.01,37.38-42.72h0c-9.89,17.75-32.5,52.71-75.29,80.09-46.31,29.64-91.2,34.35-111.6,35.24Z"
                />
                <path
                  className="s2-cls-39"
                  d="M1011.03,610.13l-3.22,45.92c19.83-2.98,44.66-8.88,71.43-20.88,55.68-24.96,91.04-66.97,108.46-89.65-22.82,29.05-46.99,51.48-63.22,62.56-25.69,17.54-68.18,46.56-94.76,30.88-11.22-6.62-16.25-19.22-18.69-28.83Z"
                />
              </g>
              <polygon
                className="s2-cls-9"
                points="874.17 676.84 874.17 665.1 883.25 638.93 885.25 638.93 892.46 665.36 892.46 676.84 874.17 676.84"
              />
            </g>
            <g id="person-shovel-3" style={{ opacity: getGroundEntryOpacity() }}>
              <path
                className="s2-cls-35"
                d="M936.27,629.52c-.38-3.65-4.85-6.82-13.77-13.02-2.5-1.74-4.75-3.2-6.61-4.37-1.48-.93-3.18-1.45-4.93-1.5l-9.95-.32c-1.25-.04-2.4-.69-3.09-1.74-.73-.63-1.51-1.4-2.27-2.32-1.99-2.41-3.02-4.86-3.59-6.65-.27-.55-2.68-5.23-7.64-6.02-5.47-.87-11.1,3.47-11.8,8.79-.53,4.05,1.98,7.19,2.55,7.87l4.17,2.55c1.54-.08,2.24.33,2.6.75.81.94.11,2.18.98,2.95.79.7,1.9.15,2.37.93.33.53.02,1.16.4,1.39.3.18.6-.15,1.04-.06.32.07.72.37,1.05,1.37.39.38.9,1,1.04,1.85.12.7,0,1.44-.37,2.09-.97,1.71-1.43,3.66-1.3,5.62,1.31,3.22,2.87,8.11,3.28,14.23.42,6.28-.53,11.45-1.44,14.85.01.2.01.46-.04.76-.04.25-.11.5-.2.73l-3.19,8.07c.98,2.88,3.47,4.72,5.73,4.57,3-.19,5.94-3.9,4.92-8.27,1.39-4.17,2.78-8.33,4.17-12.5l2.31,3.7-10.46,31.61c-.27.83-.43,1.7-.46,2.57-1.29,7.41-2.12,16.09-1.81,25.76.11,3.4.35,6.65.69,9.72-1.26.71-2.8,1.45-4.63,2.08-2.28.79-4.34,1.19-6.02,1.39-.29.67-.31,1.21-.23,1.62.4,2.25,4.12,3.94,9.26,4.17,2.8-.26,5.6-.53,8.4-.79,2.3-.22,4.18-1.91,4.64-4.17,1.34-7.39,1.94-13.48,2.23-17.72.56-7.95.25-12.15,2.08-18.28,1.5-5.04,3.69-8.87,5.32-11.34,1.62,14.5,3.24,29,4.86,43.5-1.17,2.08-2.8,3.93-5.09,4.86-1.88.76-3.53.62-3.7,1.39-.21.92,1.9,2.21,3.24,2.78,1.85.79,3.58.79,4.63.69,3.35-.22,6.69-.45,10.04-.67,2.16-.14,3.83-1.95,3.81-4.11l-.65-70.69c0-.85.4-1.65,1.09-2.15,1.29-.92,1.87-2.53,1.48-4.06l-3.28-12.73c2.74-1.91,8.64-6.56,8.1-11.74Z"
              />
              {/* Shovel: translate(pivot) → rotate → translate(-pivot) so rotation is around hand grip (912,650) like GSAP svgOrigin */}
              <g transform="translate(912, 650)">
                <g className="s2-shovel-group-inv" transform="translate(-912, -650)">
                  <polygon
                    className="s2-cls-2"
                    points="837.23 718.55 909.89 653.53 909.43 651.68 833.3 715.08 837.23 718.55"
                  />
                  <path
                    className="s2-cls-28"
                    d="M824.39,727.58l18.28-1.27c1.59-8.75-.97-16.75-7.43-18.89-.21-.07-.42-.13-.63-.19-5.89-1.58-11.53,3.37-11.06,9.45l.84,10.9Z"
                  />
                </g>
              </g>
              <path
                className="s2-cls-45"
                d="M914.66,650.09c-.14-1.8-1.59-3.09-2.86-3.38-.84-.19-2.09-.06-2.09,0,0,0,0,0,.01,0-1.45,1.02-2.89,2.03-4.34,3.05-.94.66-1.46,1.78-1.3,2.92,0,0,0,.01,0,.02.07.52.16,1.02.26,1.48,1.4-.15,2.85-.31,2.85-.34,0,0-.05,0-.07,0-.43,0-1.59.42-1.87,1.48,0,0,0,.01,0,.02-.16.62.5,1.14,1.1.9,2.17-.86,4.33-1.71,6.5-2.57,1.23-.78,1.93-2.15,1.82-3.56Z"
              />
            </g>
        
            <g>
              <g>
                <path
                  className="s2-cls-16"
                  d="M1131.05,677.03l-1.19,38.18c-.04,1.32,1.34,2.41,3.06,2.41h5.01c1.69,0,8.77,3.17,8.77,1.88l-.44-7.92c0-.64.37-.07,1.21-.07l2.26,2.97c.84,0-.39-1.33-.39-.68l1.91,1.48c0,1.3,1.37,2.35,3.06,2.35h5.72c1.74,0,3.13-1.11,3.06-2.44l-1.87-38.17c-.06-1.16-5.71-10.96-7.22-10.96l-17.85.87c-1.53,0-5.06,8.95-5.1,10.12Z"
                />
                <g className="s2-cls-12">
                  <image
                    className="s2-cls-13"
                    width={281}
                    height={365}
                    transform="translate(1112.94 648.91) scale(.24)"
                    href="data:image/png;base64,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"
                  />
                  <image
                    width={439}
                    height={525}
                    transform="translate(1093.86 629.83) scale(.24)"
                    href="data:image/png;base64,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nEXFGclZTtU8Z8wjMBdiQWkh6YiMBcmjnHUUbJopAcxAFGge+CkCpcBzAC/B/J0yvw3gr5roW1TFD+fT6tVv8eD8i7/8pfzd168XbHsOyVsfFuxtfr79sjnY7OeK3TO7P/sM/LQNOjw6Jh78I/Ht/wq8dz/w1XECinRSNCF3WdWTVOdJiTSdF5rU5KyuOIvgLELzLC0CWlCxqKUjEnMKcxEzCBOQ7QNpVJNYKuMU4AuFvkeF74tC368iv0xn+fRkUi8/eDQrD+kVaWaH8zU2+7nqj46oT/F0/VxnfPYJ8fjHjMUx8dE/Vvj2f8WD0/txXB2nAkXiOynNz1VEUlFV9aRQnlR1miLyNIKzyJxnaZ4C8yzNEZyFOM3AhELKBCXlUKwY+ZzAKamX1ax4Ved8MV1ML5c8q5aT9zKO/ZgWs7vmis1+cbYevvnZU24quRPi21/HV6cv4oN3H8QP9cuUfpykeKdIESguy+kk1XkSqqYxSdO6wozI0xoxZWhCqmDFBIoQpYRKlVY1eBFJZ5F0VlT12SrSxUVxsvrtX1Di//2iBt7+k7/Nfk4cbPaLdmXILT4ivj2Or08fxCT/kPqdTy6rehKBIurJJEIFAwVUpQpMqEUkSnXKyqgK1Kt6ostJiWV1VF0uJ0er37x8twRQf/b8mT71/Vxmd8rBZtbaDjkQnz4Fnv1x516x46+aJsuElALn6QIp3ZtNYnl+mY7uT7lsb4RWHZoj16fI9bxIZVWxerhYlH/6l6r+6j9e1J945A2zN8LBZrZH141+t/NJr8lyfd/cRXD6gJxU5Pm9JtiOzqSyUD27yO/HP9T47iQ/v3ecv33+KH8Ch5rZm+JgMzvATjX3+Ak/f37MT36P9r65JZsbooE/f3Ox/v+rD3+zEE7/VfhxLnz9QM8eP9JzNz+avVEONrMb2go5YH1T9LPHe26I7m5Y7m5W9nBSZm+Ug83sDmzdEN2PLG79cJiZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZ/cz8/57xcZ2ViJrxAAAAAElFTkSuQmCC"
                  />
                </g>
              </g>
              <g>
                <path
                  className="s2-cls-23"
                  d="M1119.34,735.76v-9.08c0-1.3,1.37-2.35,3.06-2.35h2.14c1.69,0,3.06-1.05,3.06-2.35v-2.19c0-1.3,1.37-2.35,3.06-2.35h8.97c1.69,0,3.06-1.05,3.06-2.35l-.16-3.92c0-.64.68-1.17,1.52-1.17h7.93c.84,0,.91,1.34.91,1.99l.18,3.13c0,1.31.23,2.19,1.93,2.18l5.77-.05c1.71-.02,3.1,1.04,3.1,2.35v2.85c0,1.31,1.4,2.37,3.11,2.35l5.74-.07c1.71-.02,3.11,1.04,3.11,2.35v8.2c0,1.31-1.39,2.37-3.1,2.35l-50.44.37c-1.63.01-2.96-1-2.96-2.25Z"
                />
                <image
                  width={538}
                  height={419}
                  transform="translate(1083.06 673.75) scale(.24)"
                  href="data:image/png;base64,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"
                />
              </g>
              <g id="lantern-1" style={{
                transform: `scale(${getLanternEntryScale()})`,
                opacity: getLanternEntryOpacity(),
                transformOrigin: '1145px 650px',
                transition: 'transform 0.3s ease-out'
              }}>
                <path
                  className="s2-cls-31"
                  d="M1131.97,674.38v-8.24c0-1.13.92-2.15,2.3-2.55l3.37-.97c1.39-.4,2.3-1.41,2.3-2.55v-11.66c0-2.41,2.55-4.37,5.7-4.37h0c3.15,0,5.7,1.96,5.7,4.37v11.57c0,1.28,1.17,2.39,2.8,2.66l2.95.49c1.63.27,2.8,1.38,2.8,2.66v8.29c0,.43-.45.78-1.01.78l-25.88.3c-.57,0-1.04-.35-1.04-.78Z"
                />
                <image
                  width={418}
                  height={432}
                  transform="translate(1095.78 607.75) scale(.24)"
                  href="data:image/png;base64,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"
                />
              </g>
            </g>
        
          </g>
        </g>
      </g>
      </g>
    </g>
  </svg>
);
});

export default Slide2;
