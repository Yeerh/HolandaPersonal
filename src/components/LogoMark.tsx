import logoAsset from "../assets/holanda-logo.svg";

interface LogoMarkProps {
  compact?: boolean;
}

export function LogoMark({ compact = false }: LogoMarkProps) {
  return (
    <div className="flex items-center gap-3">
      <img
        alt="Logo Holanda Personal Nutri"
        className={compact ? "h-11 w-11 rounded-full" : "h-14 w-14 rounded-full"}
        src={logoAsset}
      />
      <div className="min-w-0">
        <p className="font-heading text-sm font-bold uppercase leading-none tracking-[0.06em] text-white md:text-base">
          Leandro Holanda
        </p>
        <p className="mt-1 text-[11px] font-medium uppercase tracking-[0.2em] text-white/60 md:text-xs">
          Personal Nutri
        </p>
      </div>
    </div>
  );
}
