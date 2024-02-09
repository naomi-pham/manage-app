import Button from "@/components/common/Button";
import React from "react";

const SignUpForm = () => {
  return (
    <form className="flex w-full flex-wrap gap-y-4 items-center gap-x-2">
      <input
        type="text"
        className="flex-1 rounded-lg bg-white px-6 py-2.5 text-sm text-primary-brightRed focus:outline-none focus:ring-1 focus:ring-primary-brightRed focus:ring-offset-1 md:max-w-[250px]"
        placeholder="Updates in your inbox..."
      />
      <Button size="medium">Submit</Button>
    </form>
  );
};

export default SignUpForm;
