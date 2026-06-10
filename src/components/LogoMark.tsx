import logoAsset from "../assets/holanda-logo.svg";

interface LogoMarkProps {
  compact?: boolean;
  theme?: "light" | "dark";
}

export function LogoMark({ compact = false, theme = "light" }: LogoMarkProps) {
  const containerClassName = compact ? "flex items-center gap-2.5" : "flex items-center gap-3";
  const titleClassName =
    theme === "dark"
      ? `font-heading font-bold uppercase leading-none tracking-[0.06em] text-[#1a1a1a] ${
          compact ? "text-[0.96rem]" : "text-sm md:text-base"
        }`
      : `font-heading font-bold uppercase leading-none tracking-[0.06em] text-white ${
          compact ? "text-[0.96rem]" : "text-sm md:text-base"
        }`;
  const subtitleClassName =
    theme === "dark"
      ? `mt-1 font-medium uppercase tracking-[0.2em] text-[#1a1a1a]/58 ${
          compact ? "text-[10px]" : "text-[11px] md:text-xs"
        }`
      : `mt-1 font-medium uppercase tracking-[0.2em] text-white/60 ${
          compact ? "text-[10px]" : "text-[11px] md:text-xs"
        }`;

  return (
    <div className={containerClassName}>
      <img
        alt="Logo Holanda Personal Nutri"
        className={compact ? "h-10 w-10 rounded-full" : "h-14 w-14 rounded-full"}
        src={logoAsset}
      />
      <div className="min-w-0">
        <p className={titleClassName}>Holanda</p>
        <p className={subtitleClassName}>Personal Nutri</p>
      </div>
    </div>
  );
}
