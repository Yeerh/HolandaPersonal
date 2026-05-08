import { ArrowRight } from "lucide-react";
import heroPortrait from "../assets/hero-holanda.png";
import { Button } from "../components/Button";
import { ParticlesBackground } from "../components/ParticlesBackground";
import { Reveal } from "../components/Reveal";

export function HeroSection() {
  return (
    <section
      className="relative isolate overflow-hidden pb-16 pt-32 md:pb-24 md:pt-36"
      id="inicio"
    >
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-cover bg-center opacity-16"
        style={{
          backgroundImage:
            "linear-gradient(180deg, rgba(3,3,3,0.55), rgba(3,3,3,0.92)), url('https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&w=1800&q=80')",
        }}
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[radial-gradient(circle_at_50%_16%,rgba(255,106,0,0.2),transparent_24%),radial-gradient(circle_at_50%_48%,rgba(255,106,0,0.16),transparent_28%),linear-gradient(180deg,rgba(0,0,0,0.08),rgba(0,0,0,0.88))]"
      />
      <div
        aria-hidden="true"
        className="absolute left-1/2 top-44 h-72 w-72 -translate-x-1/2 rounded-full bg-[#ff6a00]/18 blur-[140px] md:h-[24rem] md:w-[24rem]"
      />
      <ParticlesBackground />

      <div className="section-shell">
        <div className="absolute inset-x-0 top-14 hidden overflow-hidden xl:block">
          <p className="font-heading text-center text-[5.6rem] font-bold uppercase leading-none tracking-[0.06em] text-white/[0.05]">
            HOLANDA PERSONAL NUTRI
          </p>
        </div>

        <div className="relative mx-auto flex max-w-5xl flex-col items-center text-center">
          <div className="relative flex min-h-[34rem] w-full items-center justify-center sm:min-h-[38rem] md:min-h-[42rem]">
            <Reveal
              className="pointer-events-none absolute left-1/2 top-[16%] z-10 w-full max-w-[12rem] -translate-x-1/2 -translate-y-1/2 sm:top-[19%] sm:max-w-[14rem] md:top-[22%] md:max-w-[17rem] xl:max-w-[19rem]"
              delay={0.05}
            >
              <span
                aria-hidden="true"
                className="absolute inset-x-4 top-6 h-[12%] rounded-full bg-[radial-gradient(circle_at_50%_28%,rgba(255,255,255,0.12),transparent_48%),linear-gradient(180deg,rgba(255,106,0,0.16),rgba(255,106,0,0))] blur-[8px]"
              />
              <span
                aria-hidden="true"
                className="absolute inset-x-8 bottom-2 h-10 rounded-full bg-[#ff6a00]/30 blur-[42px]"
              />
              <img
                alt="Leandro Holanda"
                className="relative z-10 h-auto w-full drop-shadow-[0_25px_70px_rgba(0,0,0,0.55)]"
                loading="eager"
                src={heroPortrait}
              />
            </Reveal>

            <Reveal className="relative z-20 mt-44 max-w-4xl md:mt-[15rem]">
              <h1 className="mt-6 font-hero text-[clamp(2.8rem,6.5vw,5.5rem)] font-bold leading-[0.92] tracking-[-0.05em] text-white">
                <span className="block">Seu resultado</span>
                <span className="my-3 inline-flex w-fit max-w-full items-center justify-center rounded-[1.45rem] bg-[#ff6a00] px-5 py-2 text-center text-[clamp(1.75rem,5.4vw,4.3rem)] leading-[0.94] tracking-[-0.04em] text-white shadow-[0_0_40px_rgba(255,106,0,0.28)] sm:px-8">
                  não depende só do treino.
                </span>
                <span className="block">Nem só da alimentação.</span>
              </h1>
              <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-white/72 md:text-xl">
                Treino e nutrição alinhados aos seus objetivos em um acompanhamento
                completo, pensado para gerar resultados reais na sua rotina.
              </p>
              <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
                <Button className="group gap-2" href="#planos">
                  Começar minha transformação
                  <ArrowRight
                    className="transition duration-300 group-hover:translate-x-1"
                    size={16}
                  />
                </Button>
                <Button href="#sobre" variant="secondary">
                  Conheça o método
                </Button>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
