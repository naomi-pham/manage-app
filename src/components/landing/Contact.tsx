import Button from "../common/Button";

const Contact = () => {
  return (
    <div className="bg-primary-brightRed/90 mt-44">
      <div className="container mx-auto flex max-w-7xl items-center justify-between px-4 py-16">
        <h2 className="max-w-md text-4xl font-bold text-neutral-lightGray">
          Simplify how your team works today.
        </h2>
        <Button intent="secondary">Get started</Button>
      </div>
    </div>
  );
};

export default Contact;
