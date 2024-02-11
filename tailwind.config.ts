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
          grayishBlue: "#eaf0f6",
          brightRed: "#FEF4EA",
          darkBlue: "#192733",
          paleRed: "#fef4ea",
          lightGray: "#fafafa",
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
