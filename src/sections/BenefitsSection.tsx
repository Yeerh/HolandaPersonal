import { motion } from "framer-motion";
import { Dumbbell, HeartPulse, Salad, Trophy } from "lucide-react";
import { Reveal } from "../components/Reveal";
import { SectionHeading } from "../components/SectionHeading";

const benefits = [
  {
    icon: Dumbbell,
    title: "Treino personalizado",
    description:
      "Protocolos construídos para o seu nível, rotina e meta estética ou de performance.",
  },
  {
    icon: Salad,
    title: "Nutrição estratégica",
    description:
      "Ajustes inteligentes de alimentação para acelerar definição, ganho de massa e consistência.",
  },
  {
    icon: HeartPulse,
    title: "Acompanhamento contínuo",
    description:
      "Correção de rota, suporte próximo e leitura real da sua evolução sem perder intensidade.",
  },
  {
    icon: Trophy,
    title: "Resultados comprovados",
    description:
      "Método lapidado em dezenas de transformações com foco em entrega prática e mensurável.",
  },
] as const;

export function BenefitsSection() {
  return (
    <section className="py-20 md:py-24" id="servicos">
      <div className="section-shell">
        <Reveal>
          <SectionHeading
            description="Treino, nutrição e acompanhamento deixam de competir entre si e passam a operar como um único sistema de evolução."
            eyebrow="Benefícios"
            title="Uma estrutura pensada para gerar adesão, intensidade e constância."
          />
        </Reveal>

        <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;

            return (
              <Reveal delay={0.08 * index} key={benefit.title}>
                <motion.article
                  className="surface-card group flex h-full flex-col rounded-[2rem] p-7"
                  transition={{ type: "spring", stiffness: 280, damping: 20 }}
                  whileHover={{ y: -6, scale: 1.01 }}
                >
                  <div className="absolute inset-x-7 top-0 h-px bg-gradient-to-r from-transparent via-[#ff6a00] to-transparent opacity-70" />
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-[#ff6a00]/20 bg-[#ff6a00]/10 text-[#ff6a00] transition duration-300 group-hover:scale-105 group-hover:shadow-[0_0_30px_rgba(255,106,0,0.22)]">
                    <Icon size={24} />
                  </div>
                  <h3 className="mt-6 font-heading text-[2rem] font-bold uppercase leading-[0.95] tracking-[-0.03em] text-white">
                    {benefit.title}
                  </h3>
                  <p className="mt-4 text-base leading-7 text-white/68">{benefit.description}</p>
                </motion.article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
