import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Check, Clock, MapPin, Ruler } from "lucide-react";

import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { ServiceIcon } from "@/components/service-icon";
import { WhatsAppButton } from "@/components/whatsapp-button";
import { Button } from "@/components/ui/button";
import { SERVICES, SITE } from "@/lib/site";

const HOW_WE_CHARGE = [
  {
    icon: MapPin,
    title: "Visita técnica sem custo",
    text: "Vamos até o local, medimos e vemos a luz. Você não paga nada para receber a leitura do espaço.",
  },
  {
    icon: Ruler,
    title: "Orçamento fechado por etapa",
    text: "Projeto, implantação e manutenção são orçados separadamente, com a lista de plantas e quantidades.",
  },
  {
    icon: Clock,
    title: "Contrato mensal de manutenção",
    text: "Visitas programadas, material incluso e troca de muda que não pegou, sem cobrar por cima.",
  },
];

export const Route = createFileRoute("/servicos")({
  head: () => ({
    meta: [
      { title: "Serviços de jardinagem e paisagismo — Goiás Paisagismo" },
      {
        name: "description",
        content:
          "Projeto de paisagismo, implantação de jardim, manutenção e poda, muros verdes, irrigação automática e horta de temperos em Goiânia.",
      },
      { property: "og:title", content: "Serviços de jardinagem e paisagismo — Goiás Paisagismo" },
      {
        property: "og:description",
        content:
          "Seis frentes de trabalho: projeto, implantação, manutenção, muros verdes, irrigação e horta.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Servicos,
});

function Servicos() {
  return (
    <main>
      <section className="border-b border-border/70 bg-secondary/40">
        <div className="mx-auto w-full max-w-6xl px-5 py-16 sm:px-8 sm:py-20">
          <p className="eyebrow text-primary">Serviços</p>
          <h1 className="mt-4 max-w-3xl text-4xl leading-[1.05] sm:text-5xl md:text-6xl">
            O que fazemos <span className="italic text-primary">no seu jardim.</span>
          </h1>
          <p className="mt-5 max-w-2xl text-[1.05rem] leading-relaxed text-muted-foreground">
            Cada serviço abaixo tem o que está incluso escrito. Você contrata uma etapa, duas ou o
            ciclo inteiro — e sabe o que vem em cada uma.
          </p>
        </div>
      </section>

      <section className="mx-auto w-full max-w-6xl px-5 py-16 sm:px-8 sm:py-20">
        <div className="grid gap-6 lg:grid-cols-2">
          {SERVICES.map((service, index) => (
            <Reveal key={service.slug} delay={(index % 2) * 90}>
              <article className="flex h-full flex-col rounded-xl border border-border/70 bg-card p-7 shadow-soft transition-shadow hover:shadow-lift sm:p-8">
                <div className="flex items-start gap-4">
                  <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-secondary text-primary">
                    <ServiceIcon slug={service.slug} className="h-5 w-5" />
                  </span>
                  <div>
                    <h2 className="text-2xl leading-snug">{service.title}</h2>
                    <p className="mt-2 text-[0.97rem] leading-relaxed text-muted-foreground">
                      {service.summary}
                    </p>
                  </div>
                </div>

                <ul className="mt-6 space-y-2.5 border-t border-border pt-5">
                  {service.includes.map((item) => (
                    <li key={item} className="flex items-start gap-3 text-[0.94rem]">
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-moss" aria-hidden="true" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                <p className="mt-6 text-[0.88rem] text-muted-foreground">
                  <span className="eyebrow text-primary">Indicado para </span>
                  {service.bestFor}
                </p>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="surface-earth border-y border-border/70">
        <div className="mx-auto w-full max-w-6xl px-5 py-16 sm:px-8 sm:py-20">
          <SectionHeading
            eyebrow="Como cobramos"
            title="Sem taxa escondida, sem 'depende'."
            description="Três regras simples que valem para todo serviço da lista."
          />

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {HOW_WE_CHARGE.map((rule) => (
              <div key={rule.title} className="rounded-xl border border-border/70 bg-card p-7">
                <rule.icon className="h-6 w-6 text-primary" aria-hidden="true" />
                <h3 className="mt-4 text-xl">{rule.title}</h3>
                <p className="mt-2.5 text-[0.95rem] leading-relaxed text-muted-foreground">
                  {rule.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto w-full max-w-6xl px-5 py-16 sm:px-8 sm:py-20">
        <div className="flex flex-col items-start gap-7 rounded-2xl border border-border/70 bg-card p-9 sm:flex-row sm:items-center sm:justify-between sm:p-12">
          <div>
            <p className="eyebrow text-primary">Próximo passo</p>
            <h2 className="mt-3 max-w-lg text-3xl leading-tight">
              Diga o que o seu espaço precisa e a gente orça.
            </h2>
            <p className="mt-3 max-w-md text-[0.97rem] text-muted-foreground">
              Se você não souber descrever, mande foto. A gente identifica a planta, a luz e o
              problema.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <WhatsAppButton
              label="Pedir orçamento"
              size="xl"
              message={`Olá, ${SITE.name}! Quero um orçamento de um dos serviços do site.`}
            />
            <Button asChild variant="outlineInk" size="xl" className="rounded-full">
              <Link to="/contato">
                Ver contato
                <ArrowRight />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
}
