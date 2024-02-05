import Button from "@/components/common/Button";
import React from "react";

const SignUpForm = () => {
  return (
    <form className="flex items-center gap-2">
      <input
        type="text"
        className="max-w-[200px] rounded-full bg-white px-4 py-2 text-primary-brightRed focus:outline-none focus:ring-1 focus:ring-primary-brightRed text-sm focus:ring-offset-1"
        placeholder="Enter your email"
      />
      <Button>Go</Button>
    </form>
  );
};

export default SignUpForm;
