import { Instagram, MessageCircleMore } from "lucide-react";
import { LogoMark } from "../components/LogoMark";
import { INSTAGRAM_HANDLE, INSTAGRAM_LINK, WHATSAPP_DISPLAY, WHATSAPP_LINK } from "../contact";

export function Footer() {
  return (
    <footer className="border-t border-white/10 py-8" id="footer">
      <div className="section-shell flex flex-col gap-6 text-center md:flex-row md:items-center md:justify-between md:text-left">
        <LogoMark />

        <div className="flex flex-wrap items-center justify-center gap-3 md:justify-start">
          <a
            className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-3 text-xs font-bold uppercase tracking-[0.22em] text-white/75 transition hover:border-[#ff6a00]/30 hover:text-[#ff6a00]"
            href={INSTAGRAM_LINK}
            rel="noreferrer"
            target="_blank"
          >
            <Instagram size={16} />
            Instagram
          </a>
          <a
            className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-3 text-xs font-bold uppercase tracking-[0.18em] text-white/75 transition hover:border-[#ff6a00]/30 hover:text-[#ff6a00]"
            href={WHATSAPP_LINK}
            rel="noreferrer"
            target="_blank"
          >
            <MessageCircleMore size={16} />
            WhatsApp
          </a>
        </div>

        <div>
          <p className="text-xs uppercase tracking-[0.22em] text-white/45">
            © 2026 Holanda Personal Nutri. Todos os direitos reservados.
          </p>
          <p className="mt-2 text-sm text-white/48">{WHATSAPP_DISPLAY}</p>
          <p className="mt-1 text-sm text-white/48">{INSTAGRAM_HANDLE}</p>
        </div>
      </div>
    </footer>
  );
}
