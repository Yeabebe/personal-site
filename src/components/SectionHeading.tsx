export default function SectionHeading({
  index,
  title,
  subtitle,
}: {
  index: string;
  title: string;
  subtitle?: string;
}) {
  return (
    <div className="mb-12">
      <p className="mono-tag text-green text-sm mb-2">{index}</p>
      <h2 className="text-3xl sm:text-4xl font-bold text-foreground">
        {title}
      </h2>
      {subtitle && (
        <p className="text-muted mt-3 max-w-xl text-sm sm:text-base">
          {subtitle}
        </p>
      )}
    </div>
  );
}
