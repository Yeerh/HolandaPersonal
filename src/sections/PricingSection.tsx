import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import { Button } from "../components/Button";
import { Reveal } from "../components/Reveal";
import { SectionHeading } from "../components/SectionHeading";

const plans = [
  {
    name: "Básico",
    price: "R$149,90",
    featured: false,
    summary: "Para quem quer sair do zero com direção clara e rotina organizada.",
    benefits: [
      "Avaliação inicial",
      "Treino mensal personalizado",
      "Checklist alimentar",
      "Suporte semanal",
    ],
  },
  {
    name: "Premium",
    price: "R$249,90",
    featured: true,
    summary: "Para quem quer integrar treino e nutrição com mais proximidade e ajuste.",
    benefits: [
      "Treino com atualizações mais frequentes",
      "Estratégia nutricional individual",
      "Acompanhamento contínuo",
      "Ajustes de meta e progresso",
    ],
  },
  {
    name: "VIP",
    price: "R$399,90",
    featured: false,
    summary: "Para quem busca leitura completa do processo e acompanhamento intensivo.",
    benefits: [
      "Consultoria 1:1 de alta proximidade",
      "Treino e nutrição com leitura completa",
      "Contato prioritário",
      "Monitoramento intensivo de resultados",
    ],
  },
] as const;

export function PricingSection() {
  return (
    <section className="py-20 md:py-24" id="planos">
      <div className="section-shell">
        <Reveal>
          <SectionHeading
            align="center"
            description="Todos os planos seguem a mesma lógica: treino, orientação alimentar e ajustes alinhados ao seu objetivo, mudando apenas o nível de proximidade."
            eyebrow="Níveis de acompanhamento"
            title="Escolha a intensidade do suporte, não um pacote desconectado."
          />
        </Reveal>

        <div className="mt-12 grid gap-5 xl:grid-cols-3">
          {plans.map((plan, index) => (
            <Reveal delay={0.1 * index} key={plan.name}>
              <motion.article
                className={`surface-card relative flex h-full flex-col rounded-[2rem] p-8 ${
                  plan.featured
                    ? "border-[#ff6a00]/40 bg-[linear-gradient(180deg,rgba(255,106,0,0.14),rgba(255,255,255,0.03))] shadow-[0_0_80px_rgba(255,106,0,0.18)]"
                    : ""
                }`}
                transition={{ type: "spring", stiffness: 270, damping: 18 }}
                whileHover={{ y: -8, scale: 1.01 }}
              >
                {plan.featured ? (
                  <div className="absolute right-6 top-6 rounded-full border border-[#ff6a00]/30 bg-[#ff6a00]/10 px-4 py-2 text-[10px] font-bold uppercase tracking-[0.28em] text-[#ff6a00]">
                    Mais procurado
                  </div>
                ) : null}

                <p className="text-xs font-bold uppercase tracking-[0.3em] text-white/50">{plan.name}</p>
                <h3 className="mt-5 font-heading text-[clamp(3.2rem,5vw,4.6rem)] font-bold uppercase leading-none tracking-[-0.04em] text-white">
                  {plan.price}
                </h3>
                <p className="mt-4 max-w-sm text-sm leading-7 text-white/65">{plan.summary}</p>

                <div className="mt-8 flex-1 space-y-4">
                  {plan.benefits.map((benefit) => (
                    <div className="flex items-start gap-3" key={benefit}>
                      <CheckCircle2 className="mt-0.5 shrink-0 text-[#ff6a00]" size={18} />
                      <p className="text-sm leading-7 text-white/72">{benefit}</p>
                    </div>
                  ))}
                </div>

                <div className="mt-8">
                  <Button
                    className="w-full"
                    href="#contato"
                    variant={plan.featured ? "primary" : "secondary"}
                  >
                    Começar meu plano
                  </Button>
                </div>
              </motion.article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
