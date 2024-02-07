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
          brightRed: "#F3603C",
          darkBlue: "#0d2857",
        },
        neutral: {
          grayishBlue: "#4a7b99",
          brightRed: "#f47657",
          darkBlue: "#192733",
          paleRed: "#fce8e8",
          lightGray: "#fafafa",
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
