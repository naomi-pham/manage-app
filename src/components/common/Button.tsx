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
        large: "py-2.5 px-7",
      },
      width: {
        fit: "w-fit",
        full: "w-full",
      },
    },
    compoundVariants: [{ intent: "primary", size: "medium" }],
    defaultVariants: {
      intent: "primary",
      size: "large",
      width: "fit",
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
  width,
  ...props
}) => (
  <button className={button({ intent, size, width, className })} {...props} />
);

export default Button;
