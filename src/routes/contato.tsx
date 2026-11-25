import { createFileRoute } from "@tanstack/react-router";
import { Clock, Instagram, Mail, MapPin, Phone } from "lucide-react";

import { Reveal } from "@/components/reveal";
import { WhatsAppButton, WhatsAppIcon } from "@/components/whatsapp-button";
import { SITE, whatsappLink } from "@/lib/site";

const QUICK_MESSAGES = [
  {
    title: "Orçamento para o jardim",
    text: `Olá, ${SITE.name}! Quero um orçamento para o meu jardim. Segue a foto e as medidas do espaço.`,
  },
  {
    title: "Só manutenção e poda",
    text: `Olá, ${SITE.name}! Meu jardim já existe, mas precisa de poda e manutenção. Quero um orçamento.`,
  },
  {
    title: "Muro verde ou varanda",
    text: `Olá, ${SITE.name}! Quero um muro verde ou um jardim de varanda. Tenho uma parede de uns 6 m².`,
  },
  {
    title: "Irrigação automática",
    text: `Olá, ${SITE.name}! Quero instalar irrigação automática no meu jardim. Pode me ajudar?`,
  },
];

const INFO = [
  {
    icon: MapPin,
    label: "Onde atendemos",
    value: SITE.region,
    note: "Consulte para outras cidades do entorno.",
  },
  {
    icon: Clock,
    label: "Horário",
    value: SITE.hours,
    note: "Urgência de poda: a gente encaixa na semana.",
  },
  {
    icon: Mail,
    label: "E-mail",
    value: SITE.email,
    note: "Para contratos e notas.",
  },
  {
    icon: Instagram,
    label: "Instagram",
    value: `@${SITE.instagram}`,
    note: "Obras em andamento, toda semana.",
  },
];

export const Route = createFileRoute("/contato")({
  head: () => ({
    meta: [
      { title: "Contato — Goiás Paisagismo" },
      {
        name: "description",
        content:
          "Fale com a Goiás Paisagismo pelo WhatsApp: orçamento de jardim, poda, manutenção, muro verde e irrigação em Goiânia e região.",
      },
      { property: "og:title", content: "Contato — Goiás Paisagismo" },
      {
        property: "og:description",
        content:
          "Orçamento em até 48h pelo WhatsApp. Atendimento em Goiânia e região metropolitana.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Contato,
});

function Contato() {
  return (
    <main>
      <section className="border-b border-border/70 bg-secondary/40">
        <div className="mx-auto w-full max-w-6xl px-5 py-16 sm:px-8 sm:py-20">
          <p className="eyebrow text-primary">Contato</p>
          <h1 className="mt-4 max-w-3xl text-4xl leading-[1.05] sm:text-5xl md:text-6xl">
            Fale com a gente <span className="italic text-primary">no WhatsApp.</span>
          </h1>
          <p className="mt-5 max-w-2xl text-[1.05rem] leading-relaxed text-muted-foreground">
            É o caminho mais rápido: você manda foto do espaço, a gente responde em até 48h com a
            leitura do terreno e a lista de plantas.
          </p>
        </div>
      </section>

      <section className="mx-auto w-full max-w-6xl px-5 py-16 sm:px-8 sm:py-20">
        <div className="grid gap-10 lg:grid-cols-[1.15fr_1fr]">
          <div>
            <div className="surface-leaf rounded-2xl p-8 shadow-lift sm:p-10">
              <WhatsAppIcon className="h-9 w-9 text-cream/85" />
              <h2 className="mt-5 text-3xl leading-tight text-primary-foreground">
                Comece com uma mensagem pronta.
              </h2>
              <p className="mt-3 text-[0.98rem] text-cream/75">
                Escolha uma das opções abaixo: ela já abre o WhatsApp com o texto escrito.
              </p>

              <div className="mt-8 grid gap-3 sm:grid-cols-2">
                {QUICK_MESSAGES.map((message) => (
                  <a
                    key={message.title}
                    href={whatsappLink(message.text)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group rounded-xl border border-cream/25 bg-cream/[0.07] p-5 transition-colors hover:bg-cream/15"
                  >
                    <span className="flex items-center gap-2 font-display text-[1.05rem] text-cream">
                      <Phone className="h-4 w-4 text-moss" aria-hidden="true" />
                      {message.title}
                    </span>
                    <span className="mt-2 block text-[0.85rem] leading-relaxed text-cream/60">
                      {message.text}
                    </span>
                  </a>
                ))}
              </div>

              <WhatsAppButton
                variant="cream"
                label={`Chamar no ${SITE.whatsappDisplay}`}
                size="xl"
                className="mt-8 w-full justify-center"
              />
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
            {INFO.map((item, index) => (
              <Reveal key={item.label} delay={index * 70}>
                <div className="flex h-full items-start gap-4 rounded-xl border border-border/70 bg-card p-6">
                  <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-secondary text-primary">
                    <item.icon className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <div>
                    <p className="eyebrow text-muted-foreground">{item.label}</p>
                    <p className="mt-1.5 text-[1.02rem] font-medium">{item.value}</p>
                    <p className="mt-1 text-[0.85rem] text-muted-foreground">{item.note}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        <div className="mt-16 rounded-2xl border border-border/70 bg-card p-8 sm:p-10">
          <h2 className="text-2xl sm:text-3xl">Como a conversa continua</h2>
          <ol className="mt-6 grid gap-5 sm:grid-cols-3">
            {[
              "Você manda foto, medidas e o que quer mudar.",
              "A gente responde com a leitura do espaço e o orçamento.",
              "Marcamos a visita, e a implantação sai na semana combinada.",
            ].map((step, index) => (
              <li key={step} className="flex gap-3">
                <span className="font-display text-3xl leading-none text-moss/50">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span className="text-[0.95rem] leading-relaxed text-muted-foreground">{step}</span>
              </li>
            ))}
          </ol>
        </div>
      </section>
    </main>
  );
}
