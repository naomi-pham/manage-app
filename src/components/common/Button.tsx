"use client";

import { cva, type VariantProps } from "class-variance-authority";
import React from "react";

const button = cva(
  [
    "rounded-lg font-semibold transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-primary-brightRed/80",
  ],
  {
    variants: {
      intent: {
        primary:
          "bg-primary-brightRed text-white hover:bg-primary-brightRed/80",
        secondary:
          "bg-white text-primary-brightRed hover:text-primary-brightRed hover:bg-neutral-100 ",
      },
      size: {
        small: "text-sm py-1 px-2",
        medium: "text-sm py-2.5 px-6",
        large: "text-sm py-3 px-8",

      },
      shadow: {
        primary:
          "shadow-primary-brightRed/40 hover:text-neutral-paleRed hover:shadow-none",
        secondary:
          "hover:shadow-white/20 hover:text-primary-brightRed/60",
        none: "shadow-none",
      },
    },
    compoundVariants: [{ intent: "primary", size: "medium" }],
    defaultVariants: {
      intent: "primary",
      size: "large",
      shadow: "primary",
    },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof button> {}

const Button: React.FC<ButtonProps> = ({
  className,
  intent,
  size,
  shadow,
  ...props
}) => (
  <button className={button({ intent, size, shadow, className })} {...props} />
);

export default Button;
