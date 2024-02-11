const SectionTitle = ({
  subtitle,
  title,
}: {
  subtitle?: string;
  title: string;
}) => {
  return (
    <div className="space-y-3">
      {subtitle ? (
        <p className="text-sm font-medium uppercase tracking-wider text-primary-brightRed">
          {subtitle}
        </p>
      ) : null}
      <h2 className="text-3xl font-bold leading-tight md:text-4xl">
        {title}
      </h2>
    </div>
  );
};

export default SectionTitle;
