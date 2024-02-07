"use client";

import { useRouter } from "next/navigation";
import React from "react";
import Button from "./Button";

const NavigateToPage = ({
  url,
  title,
  ...rest
}: {
  url: string;
  title: string;
}) => {
  const navigation = useRouter();

  return (
    <Button onClick={() => navigation.push(url)} {...rest}>
      {title}
    </Button>
  );
};

export default NavigateToPage;
