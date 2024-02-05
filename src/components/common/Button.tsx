"use client";

import { cva, type VariantProps } from "class-variance-authority";
import React from "react";

const button = cva(["rounded-full font-semibold transition-all duration-200"], {
  variants: {
    intent: {
      primary:
        "bg-primary-brightRed text-white hover:shadow-lg hover:shadow-primary-brightRed/40 hover:text-neutral-paleRed hover:bg-primary-brightRed/90",
      secondary:
        "bg-white text-primary-brightRed hover:bg-neutral-lightGray hover:shadow-lg hover:shadow-white/20 hover:text-primary-brightRed/60",
    },
    size: {
      small: "text-sm py-1 px-2",
      medium: "text-sm py-3 px-6",
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
