import Button from "@/components/common/Button";
import React from "react";

const SignUpForm = () => {
  return (
    <form className="flex w-full items-center gap-3">
      <input
        type="text"
        className="md:max-w-[250px] flex-1 rounded-full bg-white px-6 py-3 text-primary-brightRed focus:outline-none focus:ring-1 focus:ring-primary-brightRed text-sm focus:ring-offset-1"
        placeholder="Updates in your inbox..."
      />
      <Button>Go</Button>
    </form>
  );
};

export default SignUpForm;
