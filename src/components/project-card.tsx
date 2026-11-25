import { Link } from "@tanstack/react-router";

import { cn } from "@/lib/utils";
import type { Project } from "@/lib/site";

type ProjectCardProps = {
  project: Project;
  className?: string;
  eager?: boolean;
  ratio?: "tall" | "wide";
  onSelect?: (project: Project) => void;
};

export function ProjectCard({
  project,
  className,
  eager = false,
  ratio = "tall",
  onSelect,
}: ProjectCardProps) {
  const shell = cn(
    "group relative block w-full overflow-hidden rounded-xl border border-border/60 bg-ink text-left shadow-soft transition-shadow duration-500 hover:shadow-lift focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background",
    className,
  );

  const inner = (
    <>
      <div className={cn("overflow-hidden", ratio === "tall" ? "aspect-[4/5]" : "aspect-[3/2]")}>
        <img
          src={project.image}
          alt={`${project.title}, ${project.neighborhood}`}
          loading={eager ? "eager" : "lazy"}
          className="h-full w-full object-cover transition-transform duration-[1100ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.06]"
        />
      </div>
      <div className="surface-scrim pointer-events-none absolute inset-0" />
      <div className="absolute inset-x-0 bottom-0 p-5">
        <p className="eyebrow text-moss">{project.category}</p>
        <h3 className="mt-2 font-display text-xl leading-snug text-cream">{project.title}</h3>
        <p className="mt-1 text-sm text-cream/65">
          {project.neighborhood} · {project.year} · {project.area}
        </p>
      </div>
    </>
  );

  if (onSelect) {
    return (
      <button type="button" onClick={() => onSelect(project)} className={shell}>
        {inner}
      </button>
    );
  }

  return (
    <Link to="/projetos" className={shell}>
      {inner}
    </Link>
  );
}
