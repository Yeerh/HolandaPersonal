import { MessageCircle } from "lucide-react";
import { WHATSAPP_LINK } from "../contact";

export function FloatingWhatsApp() {
  return (
    <a
      aria-label="Falar no WhatsApp"
      className="fixed bottom-[max(1rem,env(safe-area-inset-bottom))] right-4 z-40 inline-flex items-center gap-2 rounded-full border border-[#ff6a00]/22 bg-[#111111]/92 px-3 py-2.5 text-sm font-bold text-white shadow-[0_16px_32px_rgba(17,17,17,0.2)] transition duration-300 hover:-translate-y-0.5 hover:border-[#ff6a00]/40 hover:bg-[#181818] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#ff6a00]/60 focus-visible:ring-offset-2 focus-visible:ring-offset-[#f7f3ee] md:bottom-10 md:right-10 md:gap-3 md:px-4 md:py-3"
      href={WHATSAPP_LINK}
      rel="noreferrer"
      target="_blank"
    >
      <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#ff6a00] text-white md:h-11 md:w-11">
        <MessageCircle size={20} />
      </span>
      <span className="hidden pr-1 sm:block">WhatsApp</span>
      <span className="h-2 w-2 rounded-full bg-[#25D366]/90 md:h-2.5 md:w-2.5" />
    </a>
  );
}
