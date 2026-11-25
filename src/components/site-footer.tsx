import { Link } from "@tanstack/react-router";

import { LeafMark } from "@/components/brand-mark";
import { WhatsAppButton } from "@/components/whatsapp-button";
import { SITE } from "@/lib/site";

const NAV_ITEMS = [
  { to: "/", label: "Início" },
  { to: "/projetos", label: "Projetos" },
  { to: "/servicos", label: "Serviços" },
  { to: "/contato", label: "Contato" },
] as const;

export function SiteFooter() {
  return (
    <footer className="bg-ink text-ink-foreground">
      <div className="mx-auto grid w-full max-w-6xl gap-12 px-5 py-16 sm:px-8 md:grid-cols-[1.4fr_1fr_1fr] md:gap-8">
        <div>
          <div className="flex items-center gap-2.5">
            <LeafMark className="h-8 w-8 text-moss" />
            <span className="flex flex-col leading-none">
              <span className="font-display text-[1.35rem] font-semibold tracking-tight text-cream">
                {SITE.wordmark}
              </span>
              <span className="eyebrow mt-1 text-[0.6rem] text-cream/55">{SITE.wordmarkSub}</span>
            </span>
          </div>
          <p className="mt-5 max-w-sm text-[0.95rem] leading-relaxed text-cream/65">
            {SITE.tagline}. Projeto, implantação e manutenção de jardins — com visita técnica e
            orçamento em até 48 horas.
          </p>
          <WhatsAppButton
            variant="cream"
            label="Falar no WhatsApp"
            className="mt-6"
            message={`Olá, ${SITE.name}! Vim pelo rodapé do site e quero pedir um orçamento.`}
          />
        </div>

        <div>
          <p className="eyebrow text-moss">Navegar</p>
          <ul className="mt-4 space-y-2.5">
            {NAV_ITEMS.map((item) => (
              <li key={item.to}>
                <Link
                  to={item.to}
                  className="text-[0.95rem] text-cream/70 transition-colors hover:text-cream"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="eyebrow text-moss">Contato</p>
          <ul className="mt-4 space-y-2.5 text-[0.95rem] text-cream/70">
            <li>
              WhatsApp {SITE.whatsappDisplay}
              <span className="block text-cream/45">atendimento em horário comercial</span>
            </li>
            <li>
              <a
                href={`mailto:${SITE.email}`}
                className="transition-colors hover:text-cream"
              >
                {SITE.email}
              </a>
            </li>
            <li>
              <a
                href={`https://instagram.com/${SITE.instagram}`}
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors hover:text-cream"
              >
                @{SITE.instagram}
              </a>
            </li>
            <li>
              {SITE.city} — {SITE.state}
              <span className="block text-cream/45">{SITE.hours}</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-cream/10">
        <div className="mx-auto flex w-full max-w-6xl flex-col gap-2 px-5 py-6 text-[0.8rem] text-cream/45 sm:flex-row sm:items-center sm:justify-between sm:px-8">
          <p>
            © {new Date().getFullYear()} {SITE.name} — desde {SITE.since} cuidando de jardins em{" "}
            {SITE.region}.
          </p>
          <p>Paisagismo, jardinagem e manutenção.</p>
        </div>
      </div>
    </footer>
  );
}
