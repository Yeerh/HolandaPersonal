import { Flame, Shield, TimerReset } from "lucide-react";
import aboutPortrait from "../assets/holanda-about.jpg";
import { Button } from "../components/Button";
import { Reveal } from "../components/Reveal";
import { SectionHeading } from "../components/SectionHeading";

const stats = [
  { value: "+50", label: "alunos acompanhados", icon: Flame },
  { value: "+5", label: "anos de experiência", icon: TimerReset },
  { value: "100%", label: "atendimento orientado por resultado", icon: Shield },
] as const;

export function AboutSection() {
  return (
    <section className="py-20 md:py-24" id="sobre">
      <div className="section-shell">
        <div className="grid gap-8 xl:grid-cols-[0.92fr_1.08fr]">
          <Reveal className="surface-card overflow-hidden rounded-[2.2rem] p-3">
            <div className="relative h-full min-h-[500px] overflow-hidden rounded-[1.7rem]">
              <img
                alt="Retrato do Leandro Holanda"
                className="absolute inset-0 h-full w-full object-cover object-[44%_22%]"
                loading="lazy"
                src={aboutPortrait}
              />
              <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.18),rgba(0,0,0,0.78))]" />
              <div className="absolute inset-x-6 bottom-6 rounded-[1.6rem] border border-[#ff6a00]/20 bg-black/55 p-5 backdrop-blur-xl">
                <p className="font-heading text-3xl font-bold uppercase leading-none tracking-[-0.03em] text-white">
                  mais direção.
                  <span className="block text-[#ff6a00]">menos extremos.</span>
                </p>
              </div>
            </div>
          </Reveal>

          <div className="space-y-8">
            <Reveal>
              <SectionHeading
                description="Sou Leandro Holanda, personal trainer e nutricionista, e desenvolvi um acompanhamento completo para quem cansou de seguir treinos e dietas sem direção. Aqui, treino e nutrição são alinhados de forma estratégica à sua rotina, ao seu objetivo e ao que seu corpo realmente precisa para evoluir com constância e resultados reais."
                eyebrow="Sobre o método"
                title="Seu resultado começa quando treino e alimentação finalmente trabalham juntos."
              />
            </Reveal>

            <Reveal className="surface-card rounded-[2rem] p-7" delay={0.12}>
              <p className="border-l-2 border-[#ff6a00] pl-5 text-base leading-8 text-white/72">
                Mais do que acompanhar treinos ou montar dietas, o objetivo é organizar
                todo o processo para que você tenha direção, constância e resultados
                reais sem precisar viver de extremos.
              </p>

              <div className="mt-8 grid gap-4 md:grid-cols-3">
                {stats.map((stat) => {
                  const Icon = stat.icon;

                  return (
                    <div className="metric-card" key={stat.label}>
                      <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#ff6a00]/10 text-[#ff6a00]">
                        <Icon size={18} />
                      </div>
                      <p className="mt-5 font-heading text-4xl font-bold uppercase leading-none tracking-[-0.03em] text-white">
                        {stat.value}
                      </p>
                      <p className="mt-3 text-xs uppercase tracking-[0.2em] text-white/55">
                        {stat.label}
                      </p>
                    </div>
                  );
                })}
              </div>

              <div className="mt-8">
                <Button href="#planos">Ver acompanhamento</Button>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
