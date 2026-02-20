/**
 * Shared scoped CSS for Slide3 and CoverUpLayer (city scene / curtain with palm trees).
 * Both use the same .cls-* class definitions. Import and pass to scopeCss with your scope ID.
 */
export const SLIDE3_COVERUP_RAW_CSS = `
      .cls-1 {
        fill: #152d69;
      }

      .cls-2 {
        fill: #4874cb;
      }

      .cls-3 {
        fill: #68423e;
      }

      .cls-4 {
        fill: url(#linear-gradient-2);
      }

      .cls-5 {
        fill: #8090b3;
      }

      .cls-6 {
        fill: #0d1a44;
      }

      .cls-7 {
        fill: #00123f;
      }

      .cls-8 {
        mask: url(#mask-1);
      }

      .cls-9 {
        fill: #183577;
      }

      .cls-10 {
        fill: url(#linear-gradient-10);
      }

      .cls-11 {
        fill: #6d7fa8;
      }

      .cls-12 {
        fill: #304a83;
      }

      .cls-13 {
        fill: #143172;
      }

      .cls-14 {
        fill: #212f3e;
      }

      .cls-15 {
        fill: #040d2a;
      }

      .cls-16 {
        stroke-width: 11px;
      }

      .cls-16, .cls-17, .cls-18, .cls-19, .cls-20, .cls-21, .cls-22, .cls-23, .cls-24, .cls-25, .cls-26, .cls-27 {
        stroke-miterlimit: 10;
      }

      .cls-16, .cls-18, .cls-20, .cls-21, .cls-22, .cls-24, .cls-26, .cls-27 {
        fill: none;
      }

      .cls-16, .cls-20, .cls-21, .cls-24, .cls-27 {
        stroke: #00123f;
      }

      .cls-28 {
        fill: #1a2c41;
      }

      .cls-29 {
        fill: url(#linear-gradient-13);
      }

      .cls-29, .cls-30 {
        opacity: .73;
      }

      .cls-31 {
        fill: #2d3252;
      }

      .cls-32 {
        fill: #223e7a;
      }

      .cls-33 {
        mask: url(#mask);
      }

      .cls-17 {
        fill: #844c38;
        stroke: #734a44;
      }

      .cls-34 {
        fill: #7082a9;
      }

      .cls-35 {
        fill: #81735e;
      }

      .cls-36 {
        fill: #2b4680;
      }

      .cls-37 {
        fill: #354e86;
      }

      .cls-38 {
        fill: #2e4882;
      }

      .cls-39 {
        filter: url(#luminosity-noclip-2);
      }

      .cls-40 {
        fill: url(#linear-gradient-4);
      }

      .cls-18 {
        stroke: #604405;
      }

      .cls-30 {
        fill: url(#linear-gradient-12);
      }

      .cls-19 {
        fill: #e9c064;
        stroke: #5f451b;
      }

      .cls-41 {
        fill: #98947f;
      }

      .cls-42 {
        fill: #2b3439;
      }

      .cls-43 {
        mask: url(#mask-2);
      }

      .cls-44 {
        filter: url(#luminosity-noclip-3);
      }

      .cls-45 {
        fill: #5d7292;
      }

      .cls-46 {
        fill: url(#linear-gradient-3);
      }

      .cls-47 {
        fill: url(#linear-gradient-5);
      }

      .cls-48 {
        fill: #d5c2bf;
      }

      .cls-49 {
        fill: #1f3155;
      }

      .cls-50 {
        fill: #f9f9b7;
      }

      .cls-51 {
        opacity: .06;
      }

      .cls-51, .cls-52 {
        mix-blend-mode: screen;
      }

      .cls-53 {
        fill: #663c32;
      }

      .cls-54 {
        fill: #919173;
      }

      .cls-55, .cls-23 {
        fill: #fff8e5;
      }

      .cls-56 {
        isolation: isolate;
      }

      .cls-57 {
        fill: #7284aa;
      }

      .cls-20 {
        stroke-width: 16px;
      }

      .cls-58 {
        fill: #8a735a;
      }

      .cls-21 {
        stroke-width: 5px;
      }

      .cls-59 {
        fill: #d7c4be;
      }

      .cls-60 {
        fill: url(#linear-gradient-8);
      }

      .cls-61 {
        fill: #152a43;
      }

      .cls-62 {
        fill: #0d1c47;
      }

      .cls-63 {
        fill: #c9a99a;
      }

      .cls-22, .cls-23 {
        stroke: #7f5e33;
      }

      .cls-64 {
        fill: #192a43;
      }

      .cls-65 {
        fill: #857460;
      }

      .cls-66 {
        fill: #0d1b48;
      }

      .cls-67 {
        fill: #7f5e33;
      }

      .cls-68 {
        fill: #ac8e72;
      }

      .cls-69 {
        fill: #1d3a78;
      }

      .cls-70 {
        fill: #412c3b;
      }

      .cls-71 {
        fill: #20346f;
      }

      .cls-24 {
        stroke-width: 7px;
      }

      .cls-72 {
        fill: url(#linear-gradient-7);
      }

      .cls-73 {
        fill: #27427d;
      }

      .cls-74 {
        fill: #181d3a;
      }

      .cls-75 {
        fill: url(#linear-gradient-9);
      }

      .cls-76 {
        fill: #24407c;
      }

      .cls-77 {
        fill: #6b7da6;
      }

      .cls-78 {
        fill: url(#linear-gradient-11);
      }

      .cls-79 {
        fill: #e0d0c3;
      }

      .cls-80 {
        fill: #324c84;
      }

      .cls-81 {
        fill: #172a43;
      }

      .cls-82 {
        fill: url(#linear-gradient-6);
      }

      .cls-83 {
        fill: #faf3c9;
      }

      .cls-84 {
        fill: #0d224f;
      }

      .cls-85 {
        fill: #41414b;
      }

      .cls-86 {
        fill: #3b4066;
      }

      .cls-25 {
        fill: #debd87;
      }

      .cls-25, .cls-26 {
        stroke: #332704;
      }

      .cls-87 {
        fill: #6175a1;
      }

      .cls-88 {
        fill: #29447f;
      }

      .cls-89 {
        fill: #040b27;
      }

      .cls-90 {
        fill: #3f2d39;
      }

      .cls-91 {
        fill: #81735f;
      }

      .cls-92 {
        fill: #2c4a80;
      }

      .cls-93 {
        fill: #826f4f;
      }

      .cls-94 {
        fill: #bcac71;
      }

      .cls-95 {
        fill: url(#linear-gradient);
      }

      .cls-96 {
        fill: #4f2f34;
      }

      .cls-97 {
        fill: #8796b7;
      }

      .cls-98 {
        fill: #784a3a;
      }

      .cls-99 {
        fill: #215682;
      }

      .cls-27 {
        stroke-width: 13px;
      }

      .cls-100 {
        fill: #5f739f;
      }

      .cls-101 {
        fill: #6d4038;
      }

      .cls-52 {
        opacity: .46;
      }

      .cls-102 {
        fill: #1e2657;
      }

      .cls-103 {
        filter: url(#luminosity-noclip);
      }
`;
