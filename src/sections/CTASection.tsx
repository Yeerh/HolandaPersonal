import { MessageCircle, PhoneCall } from "lucide-react";
import { Button } from "../components/Button";
import { ParticlesBackground } from "../components/ParticlesBackground";
import { Reveal } from "../components/Reveal";
import { WHATSAPP_DISPLAY, WHATSAPP_LINK } from "../contact";

export function CTASection() {
  return (
    <section className="pb-20 pt-6 md:pb-24" id="contato">
      <div className="section-shell">
        <Reveal className="surface-card relative overflow-hidden rounded-[2.4rem] border border-[#ff6a00]/25 px-6 py-14 text-center shadow-[0_0_90px_rgba(255,106,0,0.14)] md:px-12">
          <div
            aria-hidden="true"
            className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,106,0,0.24),transparent_42%),linear-gradient(135deg,rgba(255,255,255,0.03),rgba(255,106,0,0.04),rgba(0,0,0,0.52))]"
          />
          <ParticlesBackground />
          <div className="relative mx-auto max-w-4xl">
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full border border-[#ff6a00]/30 bg-[#ff6a00]/10 text-[#ff6a00]">
              <PhoneCall size={24} />
            </div>
            <h2 className="mt-8 font-heading text-5xl font-bold uppercase leading-[0.92] tracking-[-0.04em] text-white md:text-7xl">
              Seu treino não precisa
              <span className="block text-[#ff6a00]">andar separado da sua alimentação.</span>
            </h2>
            <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-white/70">
              Me chama no WhatsApp e vamos entender seu momento, seu objetivo e a sua
              rotina para indicar o acompanhamento ideal com treino, nutrição e estratégia
              no mesmo processo.
            </p>

            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button
                className="gap-2"
                href={WHATSAPP_LINK}
                rel="noreferrer"
                target="_blank"
              >
                <MessageCircle size={16} />
                Começar minha transformação
              </Button>
              <a
                className="inline-flex items-center justify-center rounded-full border border-white/12 bg-white/5 px-5 py-3 text-sm font-semibold tracking-[0.01em] text-white/80 transition hover:border-[#ff6a00]/30 hover:text-white"
                href={WHATSAPP_LINK}
                rel="noreferrer"
                target="_blank"
              >
                {WHATSAPP_DISPLAY}
              </a>
            </div>

            <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-white/52">
              Mensagem automática: "Olá, Holanda. Vi seu site e quero entender como
              funciona seu acompanhamento completo de treino e nutrição."
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
