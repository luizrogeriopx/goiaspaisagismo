import { Droplets, Leaf, PencilRuler, Scissors, Sprout, Trees, type LucideIcon } from "lucide-react";

const ICONS: Record<string, LucideIcon> = {
  "projeto-de-paisagismo": PencilRuler,
  "implantacao-de-jardim": Sprout,
  "manutencao-e-poda": Scissors,
  "muros-verdes": Trees,
  "irrigacao": Droplets,
  "horta-e-temperos": Leaf,
};

export function ServiceIcon({ slug, className }: { slug: string; className?: string }) {
  const Icon = ICONS[slug] ?? Leaf;
  return <Icon className={className} aria-hidden="true" />;
}
