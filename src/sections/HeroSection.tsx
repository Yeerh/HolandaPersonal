import heroBackground from "../assets/holanda-section.png";
import heroBackgroundMobile from "../assets/holanda-section-mobile.png";
import { WHATSAPP_LINK } from "../contact";
import { Reveal } from "../components/Reveal";

export function HeroSection() {
  return (
    <section
      className="relative isolate overflow-hidden bg-white pb-10 pt-[4.75rem] text-[#111111] md:pb-16 md:pt-[5.25rem] lg:pb-8"
      id="inicio"
    >
      <div
        aria-hidden="true"
        className="absolute inset-0 hidden lg:block bg-no-repeat"
        style={{
          backgroundImage: `url(${heroBackground})`,
          backgroundPosition: "right 1.5rem bottom 0.15rem",
          backgroundSize: "auto calc(100% - 0.35rem)",
        }}
      />

      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,106,0,0.08),transparent_24%),linear-gradient(90deg,rgba(255,255,255,0.99)_0%,rgba(255,255,255,0.97)_27%,rgba(255,255,255,0.86)_39%,rgba(255,255,255,0.48)_51%,rgba(255,255,255,0.12)_64%,rgba(255,255,255,0)_78%)]"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-no-repeat lg:hidden"
        style={{
          backgroundImage: `url(${heroBackgroundMobile})`,
          backgroundPosition: "center top",
          backgroundSize: "cover",
        }}
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 lg:hidden bg-[linear-gradient(180deg,rgba(255,255,255,0.14)_0%,rgba(255,255,255,0.12)_28%,rgba(255,255,255,0.52)_58%,rgba(255,255,255,0.82)_78%,rgba(255,255,255,0.96)_100%)]"
      />
      <div
        aria-hidden="true"
        className="absolute left-[7%] top-24 h-36 w-36 rounded-full bg-[#ff6a00]/8 blur-[96px]"
      />
      <div
        aria-hidden="true"
        className="absolute inset-x-0 top-0 h-20 bg-gradient-to-b from-white/72 to-transparent"
      />
      <div
        aria-hidden="true"
        className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-white via-white/22 to-transparent"
      />
      <div
        aria-hidden="true"
        className="absolute inset-x-0 bottom-0 h-8 bg-[linear-gradient(180deg,rgba(255,255,255,0),rgba(5,5,5,0.62))]"
      />

      <div className="section-shell relative">
        <div className="grid items-center gap-4 lg:grid-cols-[minmax(0,39rem)_minmax(0,1fr)] lg:gap-2 xl:gap-4">
          <Reveal className="relative z-10 max-w-[39rem] pt-[13.5rem] pb-2 md:py-8 lg:py-10">
            <div className="hidden items-center gap-3 rounded-full border border-[#ff6a00]/14 bg-white/88 px-4 py-2 shadow-[0_12px_28px_rgba(255,106,0,0.08)] backdrop-blur-sm lg:inline-flex">
              <span aria-hidden="true" className="h-2.5 w-2.5 rounded-full bg-[#ff6a00]" />
              <p className="text-[0.94rem] font-black uppercase tracking-[0.24em] text-[#ff6a00] md:text-[1.02rem]">
                Leandro Holanda
              </p>
            </div>

            <div className="text-center lg:hidden">
              <p className="text-[0.82rem] font-black uppercase tracking-[0.28em] text-[#ff6a00]">
                LEANDRO HOLANDA
              </p>
              <h1 className="mx-auto mt-3 max-w-[12ch] font-hero text-[clamp(2.3rem,9.8vw,3.15rem)] font-bold leading-[0.94] tracking-[-0.05em] text-[#111111]">
                Personal e Nutri<span className="text-[#ff6a00]">.</span>
              </h1>
              <p className="mx-auto mt-3 max-w-[20rem] text-[0.95rem] leading-6 text-[#111111]/66">
                Treinos e acompanhamento para voce evoluir com estrategia.
              </p>
            </div>

            <h1 className="mt-5 hidden font-hero text-[clamp(3rem,6vw,5.45rem)] font-bold uppercase leading-[0.88] tracking-[-0.07em] text-[#111111] lg:block">
              <span className="block">PERSONAL</span>
              <span className="mt-1 block">
                NUTRICIONISTA<span className="text-[#ff6a00]">.</span>
              </span>
            </h1>

            <p className="mt-6 hidden max-w-[33rem] text-base leading-8 text-[#111111]/68 sm:text-lg md:text-[1.18rem] md:leading-[2.05rem] lg:block">
              Treinamento personalizado para transformar seu corpo, sua mente e sua
              rotina com acompanhamento pensado para gerar resultado de verdade.
            </p>

            <div className="mt-5 flex flex-col gap-3 sm:mt-9 sm:flex-row sm:items-center sm:gap-5 lg:justify-start">
              <a
                className="inline-flex min-h-12 w-full items-center justify-center rounded-[1.2rem] bg-[#ff6a00] px-6 py-3 text-[0.8rem] font-extrabold uppercase tracking-[0.12em] text-white transition duration-300 hover:-translate-y-0.5 hover:bg-[#f15f00] sm:min-h-14 sm:w-auto sm:rounded-2xl sm:px-8 sm:py-4 sm:text-sm sm:tracking-[0.1em]"
                href={WHATSAPP_LINK}
                rel="noreferrer"
                target="_blank"
              >
                COMECE AGORA
              </a>

              <a
                className="inline-flex min-h-12 w-full items-center justify-center rounded-[1.2rem] border border-[#111111]/12 bg-white/84 px-6 py-3 text-[0.8rem] font-extrabold uppercase tracking-[0.12em] text-[#111111] transition duration-300 hover:-translate-y-0.5 hover:border-[#ff6a00]/40 hover:text-[#ff6a00] sm:min-h-14 sm:w-auto sm:rounded-2xl sm:px-8 sm:py-4 sm:text-sm sm:tracking-[0.1em]"
                href="#planos"
              >
                VER PLANOS
              </a>
            </div>

          </Reveal>

          <div aria-hidden="true" className="hidden lg:block" />
        </div>
      </div>
    </section>
  );
}
