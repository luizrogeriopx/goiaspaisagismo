import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { WhatsAppButton } from "@/components/whatsapp-button";
import type { Project } from "@/lib/site";

export function ProjectDialog({
  project,
  onOpenChange,
}: {
  project: Project | null;
  onOpenChange: (open: boolean) => void;
}) {
  return (
    <Dialog open={project !== null} onOpenChange={onOpenChange}>
      {project ? (
        <DialogContent className="max-w-4xl gap-0 overflow-hidden p-0 sm:rounded-2xl">
          <div className="grid max-h-[86vh] overflow-y-auto sm:grid-cols-2">
            <div className="relative aspect-[4/5] sm:aspect-auto sm:min-h-full">
              <img
                src={project.image}
                alt={`${project.title}, ${project.neighborhood}`}
                className="absolute inset-0 h-full w-full object-cover"
              />
            </div>
            <div className="flex flex-col gap-5 p-6 sm:p-8">
              <DialogHeader>
                <p className="eyebrow text-primary">
                  {project.category} · {project.year}
                </p>
                <DialogTitle className="mt-2 text-2xl leading-tight sm:text-3xl">
                  {project.title}
                </DialogTitle>
                <DialogDescription className="mt-2 text-sm">
                  {project.neighborhood} · {project.area}
                </DialogDescription>
              </DialogHeader>

              <p className="text-[0.97rem] leading-relaxed text-muted-foreground">
                {project.brief}
              </p>

              <div className="border-t border-border pt-4">
                <p className="eyebrow text-muted-foreground">O que entrou</p>
                <ul className="mt-3 space-y-2">
                  {project.highlights.map((item) => (
                    <li key={item} className="flex gap-3 text-[0.95rem]">
                      <span className="mt-[0.55rem] h-1.5 w-1.5 shrink-0 rounded-full bg-moss" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <WhatsAppButton
                label="Quero um jardim assim"
                message={`Olá, Goiás Paisagismo! Gostei do projeto "${project.title}" (${project.neighborhood}) do site. Quero conversar sobre um jardim parecido.`}
                className="w-full justify-center"
              />
            </div>
          </div>
        </DialogContent>
      ) : null}
    </Dialog>
  );
}
