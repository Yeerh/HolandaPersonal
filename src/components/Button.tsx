import type { ComponentPropsWithoutRef } from "react";

interface ButtonProps extends ComponentPropsWithoutRef<"a"> {
  variant?: "primary" | "secondary";
}

export function Button({
  children,
  className = "",
  href = "#contato",
  variant = "primary",
  ...props
}: ButtonProps) {
  const baseClassName =
    "inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-extrabold uppercase tracking-[0.18em] transition duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#ff6a00]/70 focus-visible:ring-offset-2 focus-visible:ring-offset-black";
  const variantClassName =
    variant === "primary"
      ? "bg-[#ff6a00] text-black shadow-[0_0_40px_rgba(255,106,0,0.35)] hover:-translate-y-0.5 hover:scale-[1.02] hover:shadow-[0_0_60px_rgba(255,106,0,0.48)]"
      : "border border-white/15 bg-white/5 text-white hover:-translate-y-0.5 hover:border-[#ff6a00]/60 hover:bg-white/8";

  return (
    <a className={`${baseClassName} ${variantClassName} ${className}`.trim()} href={href} {...props}>
      {children}
    </a>
  );
}
