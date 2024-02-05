import { type Config } from "tailwindcss";
import { fontFamily } from "tailwindcss/defaultTheme";

export default {
  content: ["./src/**/*.tsx"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-sans)", ...fontFamily.sans],
      },
      colors: {
        primary: {
          brightRed: "#ef4444",
          darkBlue: "#0d2857",
        },
        neutral: {
          grayishBlue: "#4a7b99",
          darkBlue: "#050c21",
          paleRed: "#fce8e8",
          lightGray: "#fafafa",
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
