interface SectionHeadingProps {
  eyebrow: string;
  title: string;
  description: string;
  align?: "left" | "center";
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
}: SectionHeadingProps) {
  const alignmentClassName =
    align === "center" ? "mx-auto max-w-3xl text-center" : "max-w-2xl";

  return (
    <div className={alignmentClassName}>
      <p className="mb-4 text-sm font-extrabold uppercase tracking-[0.3em] text-[#ff6a00]">
        {eyebrow}
      </p>
      <h2 className="font-heading text-4xl font-bold uppercase leading-[0.95] tracking-[-0.03em] text-white text-balance md:text-5xl">
        {title}
      </h2>
      <p className="mt-5 text-base leading-8 text-white/72 text-pretty">{description}</p>
    </div>
  );
}
