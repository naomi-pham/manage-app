const PageTitle = ({ title, desc }: { title: string; desc?: string }) => {
  return (
    <div className="mx-auto mt-10 max-w-3xl space-y-6 px-6 text-center md:mt-16">
      <h1 className="text-4xl font-bold md:text-5xl">{title}</h1>
      {desc ? (
        <p className="text-xl leading-normal text-neutral-darkBlue/70 md:text-xl">
          {desc}
        </p>
      ) : null}
    </div>
  );
};

export default PageTitle;
