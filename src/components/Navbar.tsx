import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronRight, Menu, MessageCircle, X } from "lucide-react";
import { LogoMark } from "./LogoMark";
import { WHATSAPP_LINK } from "../contact";

const navItems = [
  { href: "#inicio", label: "Inicio" },
  { href: "#sobre", label: "Sobre" },
  { href: "#servicos", label: "Servicos" },
  { href: "#planos", label: "Planos" },
  { href: "#resultados", label: "Resultados" },
  { href: "#contato", label: "Contato" },
] as const;

const activeItemHref = "#inicio";

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
      <header className="fixed inset-x-0 top-0 z-50 pt-1.5 md:pt-3">
        <div className="section-shell">
          <div className="relative mx-auto flex min-h-[3.65rem] w-full max-w-[70rem] items-center justify-between gap-3 rounded-[1.35rem] border border-white/8 bg-[#2f2d2a]/72 px-3 py-1 shadow-[0_12px_34px_rgba(0,0,0,0.16)] backdrop-blur-md md:min-h-[4.25rem] md:gap-4 md:rounded-[1.65rem] md:px-5 md:py-1.5">
            <div className="pointer-events-none absolute inset-0 rounded-[inherit] bg-[linear-gradient(180deg,rgba(255,255,255,0.08),rgba(255,255,255,0.02))]" />
            <div className="pointer-events-none absolute inset-x-10 bottom-0 h-px bg-gradient-to-r from-transparent via-[#ff6a00]/30 to-transparent" />

            <a
              aria-label="Ir para o inicio"
              className="relative z-10 flex shrink-0 origin-left items-center scale-[0.9] md:scale-100"
              href="#inicio"
            >
              <LogoMark compact />
            </a>

            <nav
              aria-label="Principal"
              className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-8 lg:flex"
            >
              {navItems.map((item) => {
                const isActive = item.href === activeItemHref;

                return (
                  <a
                    key={item.href}
                    className={`relative pb-1 text-sm font-semibold leading-none tracking-[0.01em] transition ${
                      isActive ? "text-white" : "text-white/76 hover:text-[#ff6a00]"
                    }`}
                    href={item.href}
                  >
                    {item.label}
                    <span
                      className={`absolute -bottom-2 left-0 h-0.5 rounded-full bg-[#ff6a00] transition-all ${
                        isActive ? "w-full opacity-100" : "w-0 opacity-0"
                      }`}
                    />
                  </a>
                );
              })}
            </nav>

            <a
              className="relative z-10 hidden items-center gap-2 rounded-full bg-[#ff6a00] px-[1.125rem] py-2.5 text-[0.78rem] font-extrabold uppercase tracking-[0.14em] text-white shadow-[0_12px_28px_rgba(255,106,0,0.2)] transition duration-300 hover:-translate-y-0.5 hover:bg-[#f15f00] hover:shadow-[0_16px_34px_rgba(255,106,0,0.26)] lg:inline-flex"
              href={WHATSAPP_LINK}
              rel="noreferrer"
              target="_blank"
            >
              <MessageCircle size={16} />
              WhatsApp
            </a>

            <button
              aria-expanded={isOpen}
              aria-label={isOpen ? "Fechar menu" : "Abrir menu"}
              className="relative z-10 inline-flex items-center gap-1.5 rounded-[1rem] border border-white/10 bg-white/[0.05] px-3 py-2 text-[0.82rem] font-semibold text-white transition hover:border-[#ff6a00]/35 hover:text-[#ff6a00] md:gap-2 md:rounded-2xl md:px-4 md:py-2.5 md:text-sm lg:hidden"
              onClick={() => setIsOpen((open) => !open)}
              type="button"
            >
              <Menu size={17} />
              Menu
            </button>
          </div>
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
              className="fixed right-0 top-0 z-[60] flex h-dvh w-full max-w-sm flex-col border-l border-white/10 bg-[#2a2826] shadow-[-24px_0_80px_rgba(0,0,0,0.45)] lg:hidden"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="flex items-center justify-between border-b border-white/8 px-5 py-5">
                <LogoMark compact />
                <button
                  aria-label="Fechar menu"
                  className="inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.05] text-white transition hover:border-[#ff6a00]/35 hover:text-[#ff6a00]"
                  onClick={() => setIsOpen(false)}
                  type="button"
                >
                  <X size={18} />
                </button>
              </div>

              <div className="flex-1 overflow-y-auto px-5 py-5">
                <div className="rounded-[1.75rem] border border-white/8 bg-white/[0.03] p-3">
                  {navItems.map((item) => {
                    const isActive = item.href === activeItemHref;

                    return (
                      <a
                        key={item.href}
                        className={`flex items-center justify-between rounded-2xl px-4 py-4 text-base font-semibold transition ${
                          isActive
                            ? "bg-white/[0.04] text-white"
                            : "text-white/82 hover:bg-white/[0.04] hover:text-white"
                        }`}
                        href={item.href}
                        onClick={() => setIsOpen(false)}
                      >
                        {item.label}
                        <ChevronRight
                          className={isActive ? "text-[#ff6a00]" : "text-white/40"}
                          size={18}
                        />
                      </a>
                    );
                  })}
                </div>
              </div>

              <div className="space-y-3 border-t border-white/8 px-5 py-5">
                <p className="text-sm leading-6 text-white/58">
                  Atendimento direto no WhatsApp para alinhar treino, nutricao e objetivo.
                </p>
                <a
                  className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#ff6a00] px-5 py-3 text-sm font-extrabold uppercase tracking-[0.14em] text-white shadow-[0_12px_30px_rgba(255,106,0,0.22)] transition duration-300 hover:bg-[#f15f00]"
                  href={WHATSAPP_LINK}
                  onClick={() => setIsOpen(false)}
                  rel="noreferrer"
                  target="_blank"
                >
                  <MessageCircle size={16} />
                  Chamar no WhatsApp
                </a>
              </div>
            </motion.aside>
          </>
        ) : null}
      </AnimatePresence>
    </>
  );
}
