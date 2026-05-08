import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronRight, Menu, MessageCircle, X } from "lucide-react";
import { Button } from "./Button";
import { LogoMark } from "./LogoMark";
import { WHATSAPP_LINK } from "../contact";

const navItems = [
  { href: "#inicio", label: "Início" },
  { href: "#sobre", label: "Sobre" },
  { href: "#servicos", label: "Serviços" },
  { href: "#planos", label: "Planos" },
  { href: "#resultados", label: "Resultados" },
  { href: "#contato", label: "Contato" },
] as const;

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-50 border-b border-white/8 bg-black/74 backdrop-blur-2xl">
        <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-[#ff6a00]/60 to-transparent" />
        <div className="section-shell flex min-h-20 items-center justify-between gap-4 py-3">
          <a aria-label="Ir para o início" href="#inicio">
            <LogoMark compact />
          </a>

          <nav aria-label="Principal" className="hidden items-center gap-8 lg:flex">
            {navItems.map((item) => (
              <a
                key={item.href}
                className="text-sm font-semibold tracking-[0.01em] text-white/72 transition hover:text-white"
                href={item.href}
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="hidden lg:block">
            <Button
              className="gap-2 px-5 py-2.5"
              href={WHATSAPP_LINK}
              rel="noreferrer"
              target="_blank"
            >
              <MessageCircle size={16} />
              WhatsApp
            </Button>
          </div>

          <button
            aria-expanded={isOpen}
            aria-label={isOpen ? "Fechar menu" : "Abrir menu"}
            className="inline-flex items-center gap-2 rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm font-semibold text-white transition hover:border-[#ff6a00]/35 hover:text-[#ff6a00] lg:hidden"
            onClick={() => setIsOpen((open) => !open)}
            type="button"
          >
            <Menu size={18} />
            Menu
          </button>
        </div>
      </header>

      <AnimatePresence>
        {isOpen ? (
          <>
            <motion.button
              aria-label="Fechar menu"
              className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm lg:hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              transition={{ duration: 0.2 }}
              type="button"
            />

            <motion.aside
              aria-label="Menu mobile"
              className="fixed right-0 top-0 z-[60] flex h-dvh w-full max-w-sm flex-col border-l border-white/10 bg-[#090909] shadow-[-24px_0_80px_rgba(0,0,0,0.55)] lg:hidden"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="flex items-center justify-between border-b border-white/8 px-5 py-5">
                <LogoMark compact />
                <button
                  aria-label="Fechar menu"
                  className="inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-white transition hover:border-[#ff6a00]/35 hover:text-[#ff6a00]"
                  onClick={() => setIsOpen(false)}
                  type="button"
                >
                  <X size={18} />
                </button>
              </div>

              <div className="flex-1 overflow-y-auto px-5 py-5">
                <div className="rounded-[1.75rem] border border-white/8 bg-white/[0.02] p-3">
                  {navItems.map((item) => (
                    <a
                      key={item.href}
                      className="flex items-center justify-between rounded-2xl px-4 py-4 text-base font-semibold text-white/82 transition hover:bg-white/[0.04] hover:text-white"
                      href={item.href}
                      onClick={() => setIsOpen(false)}
                    >
                      {item.label}
                      <ChevronRight className="text-[#ff6a00]" size={18} />
                    </a>
                  ))}
                </div>
              </div>

              <div className="space-y-3 border-t border-white/8 px-5 py-5">
                <p className="text-sm leading-6 text-white/58">
                  Atendimento direto no WhatsApp para alinhar treino, nutrição e objetivo.
                </p>
                <Button
                  className="w-full gap-2"
                  href={WHATSAPP_LINK}
                  onClick={() => setIsOpen(false)}
                  rel="noreferrer"
                  target="_blank"
                >
                  <MessageCircle size={16} />
                  Chamar no WhatsApp
                </Button>
              </div>
            </motion.aside>
          </>
        ) : null}
      </AnimatePresence>
    </>
  );
}
