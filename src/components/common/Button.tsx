"use client";

import { cva, type VariantProps } from "class-variance-authority";
import React from "react";

const button = cva(["rounded-full font-semibold transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-primary-brightRed/80"], {
  variants: {
    intent: {
      primary:
        "bg-red-500 text-white shadow-lg shadow-red-500/40 hover:text-neutral-paleRed  hover:bg-red-400 hover:shadow-none",
      secondary:
        "bg-white text-primary-brightRed hover:bg-neutral-lightGray hover:shadow-lg hover:shadow-white/20 hover:text-primary-brightRed/60",
    },
    size: {
      small: "text-sm py-1 px-2",
      medium: "text-sm py-3.5 px-8",
    },
  },
  compoundVariants: [{ intent: "primary", size: "medium" }],
  defaultVariants: {
    intent: "primary",
    size: "medium",
  },
});

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof button> {}

const Button: React.FC<ButtonProps> = ({
  className,
  intent,
  size,
  ...props
}) => <button className={button({ intent, size, className })} {...props} />;

export default Button;
