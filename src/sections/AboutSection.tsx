import { Flame, Shield, TimerReset } from "lucide-react";
import aboutPortrait from "../assets/holanda-about.jpg";
import { Button } from "../components/Button";
import { Reveal } from "../components/Reveal";
import { SectionHeading } from "../components/SectionHeading";

const stats = [
  { value: "+50", label: "alunos formados", icon: Flame },
  { value: "+5", label: "anos de experiência", icon: TimerReset },
  { value: "100%", label: "foco em resultados", icon: Shield },
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
                  mais disciplina.
                  <span className="block text-[#ff6a00]">menos tentativa aleatória.</span>
                </p>
              </div>
            </div>
          </Reveal>

          <div className="space-y-8">
            <Reveal>
              <SectionHeading
                description="Holanda Personal Nutri nasce da união entre orientação física, leitura nutricional e acompanhamento próximo. O trabalho não se limita ao treino do dia: ele organiza o processo inteiro para que seu corpo responda com consistência."
                eyebrow="Sobre o Holanda"
                title="Autoridade aplicada na prática, com método, presença e cobrança de resultado."
              />
            </Reveal>

            <Reveal className="surface-card rounded-[2rem] p-7" delay={0.12}>
              <p className="border-l-2 border-[#ff6a00] pl-5 text-base leading-8 text-white/72">
                Cada aluno segue um planejamento estruturado de acordo com sua rotina,
                seus objetivos e sua real capacidade de execução. A proposta é otimizar
                a adesão ao processo, eliminar desperdícios e gerar uma evolução
                consistente, perceptível tanto na estética quanto na performance.
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
                <Button href="#planos">Ver planos</Button>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
