import { MessageCircle } from "lucide-react";
import { WHATSAPP_LINK } from "../contact";

export function FloatingWhatsApp() {
  return (
    <a
      aria-label="Falar no WhatsApp"
      className="fixed bottom-5 right-5 z-40 inline-flex items-center gap-3 rounded-full border border-[#ff6a00]/30 bg-[#25D366] px-4 py-3 text-sm font-bold text-black shadow-[0_0_40px_rgba(37,211,102,0.35)] transition duration-300 hover:-translate-y-0.5 hover:scale-[1.02] hover:shadow-[0_0_56px_rgba(37,211,102,0.45)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#25D366] focus-visible:ring-offset-2 focus-visible:ring-offset-black"
      href={WHATSAPP_LINK}
      rel="noreferrer"
      target="_blank"
    >
      <span className="flex h-11 w-11 items-center justify-center rounded-full bg-black/12 text-black">
        <MessageCircle size={22} />
      </span>
      <span className="hidden pr-1 sm:block">WhatsApp</span>
    </a>
  );
}
