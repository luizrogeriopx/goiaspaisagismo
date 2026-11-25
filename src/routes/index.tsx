import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Quote } from "lucide-react";

import { ProjectCard } from "@/components/project-card";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { ServiceIcon } from "@/components/service-icon";
import { WhatsAppButton } from "@/components/whatsapp-button";
import { Button } from "@/components/ui/button";
import {
  PLANTS_STRIP,
  PROCESS_STEPS,
  PROJECTS,
  SERVICES,
  SITE,
  STATS,
  TESTIMONIALS,
} from "@/lib/site";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Goiás Paisagismo — jardins que envelhecem bem" },
      {
        name: "description",
        content:
          "Veja os jardins que a Goiás Paisagismo implantou em Goiânia: residenciais, comerciais, muros verdes e pequenos espaços. Orçamento pelo WhatsApp.",
      },
      { property: "og:title", content: "Goiás Paisagismo — jardins que envelhecem bem" },
      {
        property: "og:description",
        content:
          "Portfólio de jardins residenciais e comerciais em Goiânia, com projeto, implantação e manutenção.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  const featured = PROJECTS.slice(0, 3);

  return (
    <main>
      <section className="relative isolate overflow-hidden">
        <img
          src="/images/hero-jardim.jpg"
          alt="Jardim residencial com grama, canteiros em camadas e caminho de pedra no fim de tarde"
          fetchPriority="high"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="surface-canopy absolute inset-0" />

        <div className="relative mx-auto flex min-h-[86vh] w-full max-w-6xl flex-col justify-end px-5 pb-14 pt-36 sm:px-8">
          <p className="eyebrow text-moss">
            {SITE.city} · desde {SITE.since}
          </p>
          <h1 className="mt-5 max-w-3xl text-[2.75rem] leading-[1.03] text-cream sm:text-6xl md:text-[4.5rem]">
            Jardins que
            <span className="italic text-moss"> envelhecem bem.</span>
          </h1>
          <p className="mt-6 max-w-xl text-[1.06rem] leading-relaxed text-cream/75">
            Projeto, implantação e manutenção de jardins em {SITE.region}. A gente escolhe a planta
            certa para a luz que o seu espaço tem — e volta para cuidar dela.
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-3">
            <WhatsAppButton
              label="Pedir orçamento"
              size="xl"
              message={`Olá, ${SITE.name}! Vi o site e quero um orçamento para o meu jardim.`}
            />
            <Button asChild variant="outlineCream" size="xl" className="rounded-full">
              <Link to="/projetos">
                Ver os projetos
                <ArrowRight />
              </Link>
            </Button>
          </div>

          <dl className="mt-14 grid gap-6 border-t border-cream/15 pt-7 sm:grid-cols-3">
            {STATS.map((stat) => (
              <div key={stat.label}>
                <dt className="font-display text-4xl text-cream">{stat.value}</dt>
                <dd className="mt-1 text-[0.9rem] text-cream/60">{stat.label}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <div className="overflow-hidden border-b border-border/70 bg-secondary/50 py-3.5">
        <div className="flex w-max animate-marquee gap-10 whitespace-nowrap">
          {[...PLANTS_STRIP, ...PLANTS_STRIP].map((plant, index) => (
            <span
              key={`${plant}-${index}`}
              className="eyebrow flex items-center gap-10 text-muted-foreground"
            >
              {plant}
              <span className="h-1 w-1 rounded-full bg-moss" />
            </span>
          ))}
        </div>
      </div>

      <section className="mx-auto w-full max-w-6xl px-5 py-20 sm:px-8 sm:py-28">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <SectionHeading
            eyebrow="Portfólio"
            title="Jardins entregues, um por um."
            description="Cada projeto abaixo foi implantado por nós, com as espécies que continuam crescendo hoje. Clique para ver o que entrou em cada um."
          />
          <Button asChild variant="outlineInk" className="rounded-full">
            <Link to="/projetos">
              Todos os projetos
              <ArrowRight />
            </Link>
          </Button>
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {featured.map((project, index) => (
            <Reveal key={project.slug} delay={index * 90}>
              <ProjectCard project={project} eager={index === 0} />
            </Reveal>
          ))}
        </div>
      </section>

      <section className="surface-earth border-y border-border/70">
        <div className="mx-auto w-full max-w-6xl px-5 py-20 sm:px-8 sm:py-28">
          <SectionHeading
            eyebrow="O que fazemos"
            title="Do papel ao jardim pronto, e depois dele."
            description="Seis frentes de trabalho. Você pode contratar uma, duas ou o ciclo inteiro."
          />

          <div className="mt-12 grid gap-px overflow-hidden rounded-xl border border-border/70 bg-border/70 sm:grid-cols-2 lg:grid-cols-3">
            {SERVICES.map((service) => (
              <div key={service.slug} className="bg-card p-7">
                <span className="inline-flex h-11 w-11 items-center justify-center rounded-lg bg-secondary text-primary">
                  <ServiceIcon slug={service.slug} className="h-5 w-5" />
                </span>
                <h3 className="mt-5 text-xl">{service.title}</h3>
                <p className="mt-2.5 text-[0.95rem] leading-relaxed text-muted-foreground">
                  {service.summary}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-10">
            <Button asChild variant="outlineInk" className="rounded-full">
              <Link to="/servicos">
                Ver serviços em detalhe
                <ArrowRight />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="mx-auto w-full max-w-6xl px-5 py-20 sm:px-8 sm:py-28">
        <SectionHeading
          eyebrow="Como trabalhamos"
          title="Quatro passos, sem surpresa no meio."
        />

        <ol className="mt-12 grid gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
          {PROCESS_STEPS.map((step, index) => (
            <Reveal key={step.number} delay={index * 80}>
              <li className="relative">
                <span className="font-display text-5xl text-moss/45">{step.number}</span>
                <h3 className="mt-3 text-lg">{step.title}</h3>
                <p className="mt-2 text-[0.94rem] leading-relaxed text-muted-foreground">
                  {step.text}
                </p>
              </li>
            </Reveal>
          ))}
        </ol>
      </section>

      <section className="bg-ink">
        <div className="mx-auto w-full max-w-6xl px-5 py-20 sm:px-8 sm:py-28">
          <SectionHeading
            eyebrow="Quem já contratou"
            title="O que dizem depois de um ano de jardim."
            tone="ink"
          />

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {TESTIMONIALS.map((testimonial, index) => (
              <Reveal key={testimonial.name} delay={index * 90}>
                <figure className="flex h-full flex-col rounded-xl border border-cream/12 bg-cream/[0.04] p-7">
                  <Quote className="h-6 w-6 text-moss" aria-hidden="true" />
                  <blockquote className="mt-4 flex-1 text-[0.98rem] leading-relaxed text-cream/80">
                    “{testimonial.quote}”
                  </blockquote>
                  <figcaption className="mt-6 border-t border-cream/10 pt-4 text-[0.88rem] text-cream/55">
                    {testimonial.name} · {testimonial.where}
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto w-full max-w-6xl px-5 py-20 sm:px-8 sm:py-24">
        <div className="surface-leaf flex flex-col items-start gap-7 rounded-2xl p-9 shadow-lift sm:flex-row sm:items-center sm:justify-between sm:p-12">
          <div>
            <p className="eyebrow text-cream/70">Orçamento</p>
            <h2 className="mt-3 max-w-lg text-3xl leading-tight text-primary-foreground sm:text-4xl">
              Mande uma foto do seu espaço no WhatsApp.
            </h2>
            <p className="mt-3 max-w-md text-[0.98rem] text-cream/75">
              Respondemos em até 48h com a leitura do espaço e a lista de plantas.
            </p>
          </div>
          <WhatsAppButton
            variant="cream"
            label="Falar agora"
            size="xl"
            className="shrink-0"
            message={`Olá, ${SITE.name}! Quero um orçamento. Segue a foto do meu espaço.`}
          />
        </div>
      </section>
    </main>
  );
}
