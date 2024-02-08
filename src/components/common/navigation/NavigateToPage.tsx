"use client";

import { useRouter } from "next/navigation";
import React from "react";
import Button from "../Button";

const NavigateToPage = ({
  url,
  title,
  intent,
}: {
  url: string;
  title: string;
  intent?: "primary" | "secondary" | null | undefined;
}) => {
  const navigation = useRouter();

  return (
    <Button onClick={() => navigation.push(url)} intent={intent ?? "primary"}>
      {title}
    </Button>
  );
};

export default NavigateToPage;
