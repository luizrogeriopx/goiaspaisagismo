import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";

import { ProjectCard } from "@/components/project-card";
import { ProjectDialog } from "@/components/project-dialog";
import { Reveal } from "@/components/reveal";
import { WhatsAppButton } from "@/components/whatsapp-button";
import { cn } from "@/lib/utils";
import { PROJECT_CATEGORIES, PROJECTS, SITE, type Project, type ProjectCategory } from "@/lib/site";

type Filter = "Todos" | ProjectCategory;

const FILTERS: Filter[] = ["Todos", ...PROJECT_CATEGORIES];

export const Route = createFileRoute("/projetos")({
  head: () => ({
    meta: [
      { title: "Projetos de jardim — Goiás Paisagismo" },
      {
        name: "description",
        content:
          "Portfólio completo da Goiás Paisagismo: jardins residenciais, áreas de piscina, muros verdes, varandas, entradas comerciais e renovação de sebes em Goiânia.",
      },
      { property: "og:title", content: "Projetos de jardim — Goiás Paisagismo" },
      {
        property: "og:description",
        content:
          "Jardins residenciais, comerciais, muros verdes e pequenos espaços implantados em Goiânia e região.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Projetos,
});

function Projetos() {
  const [filter, setFilter] = useState<Filter>("Todos");
  const [selected, setSelected] = useState<Project | null>(null);

  const visible =
    filter === "Todos" ? PROJECTS : PROJECTS.filter((project) => project.category === filter);

  return (
    <main>
      <section className="border-b border-border/70 bg-secondary/40">
        <div className="mx-auto w-full max-w-6xl px-5 py-16 sm:px-8 sm:py-20">
          <p className="eyebrow text-primary">Portfólio</p>
          <h1 className="mt-4 max-w-3xl text-4xl leading-[1.05] sm:text-5xl md:text-6xl">
            Jardins prontos, <span className="italic text-primary">um por um.</span>
          </h1>
          <p className="mt-5 max-w-2xl text-[1.05rem] leading-relaxed text-muted-foreground">
            São projetos implantados pela nossa equipe em {SITE.region}. Clique em qualquer card
            para ver o que foi usado, o tamanho do espaço e a história por trás dele.
          </p>
        </div>
      </section>

      <section className="mx-auto w-full max-w-6xl px-5 py-12 sm:px-8 sm:py-16">
        <div className="flex flex-wrap items-center gap-2.5">
          {FILTERS.map((item) => (
            <button
              key={item}
              type="button"
              onClick={() => setFilter(item)}
              aria-pressed={filter === item}
              className={cn(
                "rounded-full border px-4 py-2 text-[0.88rem] font-medium transition-colors",
                filter === item
                  ? "border-primary bg-primary text-primary-foreground"
                  : "border-border bg-card text-muted-foreground hover:border-primary/50 hover:text-foreground",
              )}
            >
              {item}
            </button>
          ))}
          <span className="ml-auto text-[0.85rem] text-muted-foreground">
            {visible.length} {visible.length === 1 ? "projeto" : "projetos"}
          </span>
        </div>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {visible.map((project, index) => (
            <Reveal key={project.slug} delay={(index % 3) * 80}>
              <ProjectCard project={project} eager={index < 3} onSelect={setSelected} />
            </Reveal>
          ))}
        </div>

        <div className="mt-16 rounded-2xl border border-border/70 bg-card p-8 sm:p-10">
          <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <h2 className="text-2xl sm:text-3xl">Nenhum dos projetos parece o seu?</h2>
              <p className="mt-2 max-w-lg text-[0.97rem] text-muted-foreground">
                Mande uma foto e as medidas do seu espaço. A gente responde com uma leitura do
                terreno e três caminhos de jardim possíveis.
              </p>
            </div>
            <WhatsAppButton
              label="Mandar fotos"
              size="xl"
              className="shrink-0"
              message={`Olá, ${SITE.name}! Nenhum projeto do site é parecido com o meu espaço. Quero uma leitura do meu terreno.`}
            />
          </div>
        </div>
      </section>

      <ProjectDialog project={selected} onOpenChange={(open) => !open && setSelected(null)} />
    </main>
  );
}
