import { motion } from "framer-motion";
import { Dumbbell, HeartPulse, Salad, Trophy } from "lucide-react";
import { Reveal } from "../components/Reveal";
import { SectionHeading } from "../components/SectionHeading";

const benefits = [
  {
    icon: Dumbbell,
    title: "Treino personalizado",
    description:
      "Treinos alinhados à sua rotina, objetivo e nível atual para gerar evolução sem excesso ou desgaste desnecessário.",
  },
  {
    icon: Salad,
    title: "Nutrição estratégica",
    description:
      "Uma alimentação simples pensada para acelerar seus resultados sem depender de dietas extremas ou restrições impossíveis.",
  },
  {
    icon: HeartPulse,
    title: "Acompanhamento contínuo",
    description:
      "Ajustes constantes, suporte próximo e direcionamento para manter sua evolução sem perder constância através do WhatsApp e app.",
  },
  {
    icon: Trophy,
    title: "Resultados reais",
    description:
      "Um método construído para gerar resultados, respeitando sua rotina e o seu processo.",
  },
] as const;

export function BenefitsSection() {
  return (
    <section className="py-20 md:py-24" id="servicos">
      <div className="section-shell">
        <Reveal>
          <SectionHeading
            description="Seu corpo evolui melhor quando treino, alimentação e acompanhamento trabalham na mesma direção e estratégia."
            eyebrow="O que você recebe"
            title="Um método pensado para gerar resultado sem fazer você desistir no meio do caminho."
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
