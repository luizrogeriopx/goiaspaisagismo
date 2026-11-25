import { Droplets, Leaf, PencilRuler, Scissors, Sprout, Trees, Shovel, Wind, type LucideIcon } from "lucide-react";

const ICONS: Record<string, LucideIcon> = {
  // Original slugs
  "projeto-de-paisagismo": PencilRuler,
  "implantacao-de-jardim": Sprout,
  "manutencao-e-poda": Scissors,
  "muros-verdes": Trees,
  "irrigacao": Droplets,
  "horta-e-temperos": Leaf,
  // New slugs
  "jardinagem": Leaf,
  "poda": Scissors,
  "plantio": Sprout,
  "paisagismo": PencilRuler,
  "manutencao": Shovel,
  "limpeza": Wind,
};

export function ServiceIcon({ slug, className }: { slug: string; className?: string }) {
  const Icon = ICONS[slug] ?? Leaf;
  return <Icon className={className} aria-hidden="true" />;
}
