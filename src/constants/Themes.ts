import { Dimensions } from "react-native";

const { width, height } = Dimensions.get("window");

const calculateFontSize = (baseFontSize: number) => {
  const scaleFactor = width / 320; // You can adjust this base width as needed
  return Math.round(baseFontSize * scaleFactor);
};

const TYPOGRAPHY = {
  h1: {
    fontFamily: "Inter-Bold",
    fontSize: calculateFontSize(32),
  },
  h2: {
    fontFamily: "Inter-Bold",
    fontSize: calculateFontSize(28),
  },
  h3: {
    fontFamily: "Inter-Medium",
    fontSize: calculateFontSize(24),
  },
  h4: {
    fontFamily: "Inter-Medium",
    fontSize: calculateFontSize(20),
  },
  h5: {
    fontFamily: "Inter-Regular",
    fontSize: calculateFontSize(16),
  },
  h6: {
    fontFamily: "Inter-Regular",
    fontSize: calculateFontSize(14),
  },
};

const COLORS = {
  primary: "#F4633C",
  primaryDarker: "#E84426",
  primaryLight: "#FEC6BB",

  darkGrey: "#262336",
  grey: "#2D2B3D",
  lightGrey: "#45415F",

  black: "#1b1a28",
  grey100: "#28283b",
  grey80: "#545670",
  grey50: "#9e9e9e",
  grey20: "#c7c7dc",

  white: "#ffffff",
  gray100: "#fdfdfd",
  gray80: "#ebebee",
  gray50: "#f3f3f4",
  gray20: "#e5e4ec",

  red100: "#e53333",
  red80: "#ff3a3a",
  red50: "#ff5b5b",
  red20: "#ff7f7f",
  red10: "#ffe2e2",

  green100: "#04a55e",
  green80: "#05c270",
  green50: "#37d989",
  green20: "#57eb9f",
  green10: "#e3fff1",

  blue100: "#004fc4",
  blue80: "#0264f7",
  blue50: "#5a8df0",
  blue20: "#9cbffa",
  blue10: "#e5f0ff",

  yellow100: "#e5b000",
  yellow80: "#ffcc01",
  yellow50: "#fedd47",
  yellow20: "#feee73",
  yellow10: "#fffce5",

  orange100: "#e57900",
  orange80: "#ff8002",
  orange50: "#feac40",
  orange20: "#fccc74",
  orange: "#fff3e8",

  teal100: "#00b4c9",
  teal80: "#02cfde",
  teal50: "#74dfe7",
  teal20: "#a8f0f2",
  teal10: "#e6ffff",

  purple100: "#4c0099",
  purple80: "#6501cc",
  purple50: "#ac5dd9",
  purple20: "#dda5e9",
  purple10: "#ffe5ff",
};

const THEMES = {
  TYPOGRAPHY,
  COLORS,
};

export default THEMES;
