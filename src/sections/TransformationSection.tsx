import { motion } from "framer-motion";
import { Camera, Target, Timer, Trophy } from "lucide-react";
import { Reveal } from "../components/Reveal";
import { SectionHeading } from "../components/SectionHeading";

const transformations = [
  {
    name: "Projeto Cutting",
    result: "-12 kg em 4 meses",
    resultClassName: "max-w-[9ch]",
    time: "16 semanas",
    outcome:
      "Mais do que perder peso, o foco foi construir uma rotina que deixou de ser tentativa e virou constância.",
    progress: "Perda de gordura com rotina sustentável",
    beforeMetric: "97 kg",
    afterMetric: "85 kg",
    beforeImage:
      "https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=900&q=80",
    afterImage:
      "https://images.unsplash.com/photo-1599058917212-d750089bc07e?auto=format&fit=crop&w=900&q=80",
    beforeAlt: "Fase inicial de treino de cutting",
    afterAlt: "Resultado final de cutting com físico mais definido",
  },
  {
    name: "Projeto Massa Magra",
    result: "+7 kg de massa magra",
    resultClassName: "max-w-[10ch]",
    time: "6 meses",
    outcome:
      "Mais do que ganhar massa, o processo trouxe mais confiança, presença física e consistência na alimentação.",
    progress: "Hipertrofia com alimentação alinhada",
    beforeMetric: "68 kg",
    afterMetric: "75 kg",
    beforeImage:
      "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&w=900&q=80",
    afterImage:
      "https://images.unsplash.com/photo-1605296867304-46d5465a13f1?auto=format&fit=crop&w=900&q=80",
    beforeAlt: "Fase inicial de ganho de massa",
    afterAlt: "Resultado final de ganho de massa com mais volume muscular",
  },
  {
    name: "Projeto Performance",
    result: "Definição e condicionamento",
    resultClassName: "max-w-[11ch] text-[clamp(2rem,4vw,3.1rem)]",
    time: "12 semanas",
    outcome:
      "Mais do que definir o corpo, a meta foi transformar uma rotina irregular em disciplina que dá para sustentar.",
    progress: "Condicionamento com rotina organizada",
    beforeMetric: "Rotina irregular",
    afterMetric: "Rotina estruturada",
    beforeImage:
      "https://images.unsplash.com/photo-1540497077202-7c8a3999166f?auto=format&fit=crop&w=900&q=80",
    afterImage:
      "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&w=900&q=80",
    beforeAlt: "Fase inicial de condicionamento",
    afterAlt: "Resultado final com melhor condicionamento físico",
  },
] as const;

export function TransformationSection() {
  return (
    <section className="py-20 md:py-24" id="resultados">
      <div className="section-shell">
        <Reveal>
          <SectionHeading
            align="center"
            description="Os resultados abaixo mostram o que acontece quando treino, alimentação e acompanhamento finalmente trabalham na mesma direção."
            eyebrow="Resultados reais"
            title="Antes e depois com resultados reais de quem parou de tentar sozinho."
          />
        </Reveal>

        <div className="mt-12 grid gap-6 xl:grid-cols-3">
          {transformations.map((item, index) => (
            <Reveal delay={0.1 * index} key={item.name}>
              <motion.article
                className="surface-card flex h-full flex-col rounded-[2rem] p-7 md:p-8"
                transition={{ type: "spring", stiffness: 260, damping: 18 }}
                whileHover={{ y: -6 }}
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="min-w-0">
                    <p className="text-xs font-bold uppercase tracking-[0.32em] text-[#ff6a00]">
                      {item.name}
                    </p>
                    <h3
                      className={`mt-4 font-heading text-[clamp(2.1rem,4vw,3.1rem)] font-bold uppercase leading-[0.92] tracking-[-0.05em] text-white text-balance ${item.resultClassName}`}
                    >
                      {item.result}
                    </h3>
                  </div>
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-[#ff6a00]/25 bg-[#ff6a00]/10 text-[#ff6a00]">
                    <Trophy size={18} />
                  </div>
                </div>

                <p className="mt-6 max-w-[36ch] text-base leading-8 text-white/68">
                  {item.outcome}
                </p>

                <div className="mt-8 grid gap-4 sm:grid-cols-2">
                  <div className="overflow-hidden rounded-[1.6rem] border border-white/10 bg-black/30">
                    <div className="relative aspect-[4/5]">
                      <img
                        alt={item.beforeAlt}
                        className="h-full w-full object-cover"
                        loading="lazy"
                        src={item.beforeImage}
                      />
                      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.05),rgba(0,0,0,0.7))]" />
                      <div className="absolute left-4 right-4 top-4 flex items-center justify-between">
                        <span className="rounded-full border border-white/15 bg-black/45 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.24em] text-white/70">
                          Antes
                        </span>
                        <span className="rounded-full border border-white/15 bg-black/45 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.14em] text-white/70">
                          {item.beforeMetric}
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="overflow-hidden rounded-[1.6rem] border border-[#ff6a00]/18 bg-black/30">
                    <div className="relative aspect-[4/5]">
                      <img
                        alt={item.afterAlt}
                        className="h-full w-full object-cover"
                        loading="lazy"
                        src={item.afterImage}
                      />
                      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,106,0,0.08),rgba(0,0,0,0.72))]" />
                      <div className="absolute left-4 right-4 top-4 flex items-center justify-between">
                        <span className="rounded-full border border-[#ff6a00]/18 bg-black/45 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.24em] text-white/70">
                          Depois
                        </span>
                        <span className="rounded-full border border-[#ff6a00]/18 bg-black/45 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.14em] text-[#ff6a00]">
                          {item.afterMetric}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-5 flex justify-center">
                  <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-black/35 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-white/55">
                    <Camera className="text-[#ff6a00]" size={14} />
                    antes e depois
                  </div>
                </div>

                <div className="mt-auto grid gap-3 pt-8">
                  <div className="flex items-start gap-3 rounded-[1.25rem] border border-white/8 bg-black/18 px-4 py-3 text-sm uppercase tracking-[0.14em] text-white/58">
                    <Target className="mt-0.5 shrink-0 text-[#ff6a00]" size={16} />
                    {item.progress}
                  </div>
                  <div className="flex items-center gap-3 rounded-[1.25rem] border border-white/8 bg-black/18 px-4 py-3 text-sm uppercase tracking-[0.14em] text-white/58">
                    <Timer className="shrink-0 text-[#ff6a00]" size={16} />
                    {item.time}
                  </div>
                </div>
              </motion.article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
