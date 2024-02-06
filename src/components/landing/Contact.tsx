import Button from "../common/Button";

const Contact = () => {
  return (
    <div className="bg-primary-brightRed/90 mt-44">
      <div className="container mx-auto flex flex-col text-center gap-y-10 md:flex-row md:text-left max-w-7xl min-h-[250px] items-center justify-between px-4 py-16">
        <h2 className="max-w-md text-4xl font-bold text-neutral-lightGray">
          Simplify how your team works today.
        </h2>
        <Button intent="secondary">Get started</Button>
      </div>
    </div>
  );
};

export default Contact;
