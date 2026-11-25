import { createFileRoute } from "@tanstack/react-router";
import { MapPin, Phone, Clock, MessageCircle } from "lucide-react";

import { Faq } from "@/components/faq";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { WhatsAppButton } from "@/components/whatsapp-button";
import {
  ABOUT,
  BENEFITS,
  FAQ,
  MISSION_IMAGES,
  PLANTS_STRIP,
  SERVICES,
  SITE,
  STATS,
  TESTIMONIALS,
} from "@/lib/site";

export const Route = createFileRoute("/")(({
  head: () => ({
    meta: [
      { title: "Goiás Paisagismo e Jardinagem — Goiânia" },
      {
        name: "description",
        content:
          "Jardinagem e paisagismo em Goiânia. Projetos personalizados, manutenção de jardins, poda e limpeza para residências e empresas. Orçamento pelo WhatsApp.",
      },
      { property: "og:title", content: "Goiás Paisagismo e Jardinagem" },
      {
        property: "og:description",
        content:
          "Paisagismo residencial e comercial. Jardinagem, poda, plantio, manutenção e revitalização de áreas verdes.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
}));

function Index() {
  return (
    <main>
      {/* ===== HERO ===== */}
      <section id="inicio" className="relative isolate overflow-hidden">
        <img
          src="/images/paisagismo.jpg"
          alt="Jardim paisagístico com vegetação exuberante"
          fetchPriority="high"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(45,106,79,0.90),rgba(45,106,79,0.70))]" />

        <div className="relative mx-auto flex min-h-[100vh] w-full max-w-6xl flex-col items-start justify-center gap-0 px-5 pb-16 pt-28 sm:px-8 lg:grid lg:grid-cols-2 lg:items-center lg:gap-16">
          {/* Left — text */}
          <div>
            <h1 className="text-[2.6rem] font-bold leading-[1.1] text-white sm:text-5xl md:text-6xl">
              Paisagismo e jardinagem que valorizam seu espaço e conectam você à natureza.
            </h1>
            <p className="mt-5 max-w-xl text-[1.1rem] leading-relaxed text-white/85">
              Jardinagem, poda, plantio, manutenção e revitalização de áreas verdes. Mais
              verde, mais vida, mais bem-estar.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <WhatsAppButton
                label="Falar no WhatsApp"
                size="xl"
                message={`Olá, ${SITE.name}! Vi o site e quero um orçamento para o meu jardim.`}
              />
            </div>

            {/* Stats */}
            <dl className="mt-12 flex flex-wrap gap-10 border-t border-white/20 pt-8">
              {STATS.map((stat) => (
                <div key={stat.label}>
                  <dt className="text-[2rem] font-extrabold text-white">{stat.value}</dt>
                  <dd className="mt-1 max-w-[160px] text-[0.82rem] leading-snug text-white/70">
                    {stat.label}
                  </dd>
                </div>
              ))}
            </dl>
          </div>

          {/* Right — logo circle */}
          <div className="hidden lg:flex lg:justify-center">
            <div className="h-[380px] w-[380px] overflow-hidden rounded-full border-[5px] border-white/20 shadow-[0_20px_60px_rgba(45,106,79,0.4)]">
              <img
                src="/images/logo-jardinagem.png"
                alt="Logo Goiás Paisagismo e Jardinagem"
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ===== PLANT STRIP ===== */}
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

      {/* ===== SOBRE ===== */}
      <section id="sobre" className="bg-white">
        <div className="mx-auto w-full max-w-6xl px-5 py-20 sm:px-8 sm:py-28">
          <SectionHeading
            eyebrow="Sobre nós"
            title="Sobre a Goiás Paisagismo e Jardinagem"
            description="Conheça a nossa história!"
          />

          <div className="mt-14 grid gap-12 lg:grid-cols-2 lg:items-center">
            {/* Image */}
            <div className="overflow-hidden rounded-2xl shadow-soft">
              <img
                src={ABOUT.image}
                alt="Goiás Paisagismo e Jardinagem"
                className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
              />
            </div>

            {/* Text */}
            <div className="space-y-5">
              {ABOUT.paragraphs.map((p, i) => (
                <p
                  key={i}
                  className="text-[1.05rem] leading-relaxed text-muted-foreground"
                  dangerouslySetInnerHTML={{ __html: p }}
                />
              ))}
              <div className="pt-2">
                <WhatsAppButton
                  label="Falar no WhatsApp"
                  message={`Olá, ${SITE.name}! Quero saber mais sobre os serviços.`}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== MISSÃO / GALERIA ===== */}
      <section className="bg-[#f0f9f4]">
        <div className="mx-auto w-full max-w-6xl px-5 py-20 sm:px-8 sm:py-28">
          <SectionHeading
            eyebrow="Nossa missão"
            title="Nossa missão"
            description="Criar jardins que acolhem, inspiram e transformam o seu dia a dia."
          />

          <div
            className="mt-12 grid gap-3"
            style={{
              gridTemplateColumns: "repeat(4, 1fr)",
              gridTemplateRows: "repeat(2, 200px)",
            }}
          >
            {MISSION_IMAGES.map((img, i) => (
              <div
                key={i}
                className="overflow-hidden rounded-lg"
                style={i === 0 ? { gridColumn: "span 2", gridRow: "span 2" } : {}}
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  className="h-full w-full object-cover transition-transform duration-300 hover:scale-110"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== SERVIÇOS ===== */}
      <section id="servicos" className="bg-[#e9f5ec]">
        <div className="mx-auto w-full max-w-6xl px-5 py-20 sm:px-8 sm:py-28">
          <SectionHeading
            eyebrow="O que fazemos"
            title="Serviços Oferecidos"
            description="Atendimentos personalizados para cada objetivo"
          />

          <div className="mt-12 grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
            {SERVICES.map((service, index) => (
              <Reveal key={service.slug} delay={index * 70}>
                <div className="group overflow-hidden rounded-2xl bg-white shadow-soft transition-all duration-300 hover:-translate-y-1.5 hover:shadow-lift">
                  <div className="h-[180px] overflow-hidden">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                  </div>
                  <div className="p-6 text-center">
                    <h3 className="text-xl text-foreground">{service.title}</h3>
                    <p className="mt-3 text-[0.93rem] leading-relaxed text-muted-foreground">
                      {service.summary}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ===== BENEFÍCIOS ===== */}
      <section
        id="destaques"
        className="bg-[linear-gradient(135deg,#2d6a4f,#1b4332)] text-white"
      >
        <div className="mx-auto w-full max-w-6xl px-5 py-20 sm:px-8 sm:py-28">
          <SectionHeading
            eyebrow="Diferenciais"
            title="Por Que Escolher a Goiás Paisagismo e Jardinagem?"
            description="Diferenciais que fazem a diferença no seu tratamento"
            tone="ink"
          />

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {BENEFITS.map((b, index) => (
              <Reveal key={b.title} delay={index * 70}>
                <div className="rounded-2xl border border-white/20 bg-white/10 p-8 text-center backdrop-blur-sm transition-all duration-300 hover:-translate-y-1.5 hover:bg-white/20">
                  <div className="text-4xl">{b.icon}</div>
                  <h3 className="mt-4 text-[1.1rem] font-semibold text-white">{b.title}</h3>
                  <p className="mt-2 text-[0.93rem] leading-relaxed text-white/85">{b.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ===== DEPOIMENTOS ===== */}
      <section id="depoimentos" className="bg-[#e9f5ec]">
        <div className="mx-auto w-full max-w-6xl px-5 py-20 sm:px-8 sm:py-28">
          <SectionHeading
            eyebrow="Quem já contratou"
            title="O Que Nossos Clientes Falam?"
            description="Confie em quem entende de paisagismo e jardinagem."
          />

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {TESTIMONIALS.map((t, index) => (
              <Reveal key={t.name} delay={index * 80}>
                <figure className="flex h-full flex-col rounded-2xl bg-white p-7 shadow-soft transition-all duration-300 hover:-translate-y-1.5 hover:shadow-lift">
                  <div className="flex items-center gap-4">
                    <div className="h-[50px] w-[50px] shrink-0 overflow-hidden rounded-full">
                      <img
                        src={t.avatar}
                        alt={t.name}
                        className="h-full w-full object-cover"
                      />
                    </div>
                    <div>
                      <h4 className="text-[0.95rem] font-semibold text-foreground">
                        {t.name}
                      </h4>
                      <span className="text-[0.8rem] text-muted-foreground">{t.where}</span>
                    </div>
                  </div>
                  <blockquote className="mt-5 flex-1 text-[0.93rem] italic leading-relaxed text-muted-foreground">
                    "{t.quote}"
                  </blockquote>
                  <div className="mt-4 text-[0.95rem] tracking-widest text-yellow-400">
                    ⭐⭐⭐⭐⭐
                  </div>
                </figure>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ===== FAQ ===== */}
      <section id="faq" className="bg-white">
        <div className="mx-auto w-full max-w-6xl px-5 py-20 sm:px-8 sm:py-28">
          <SectionHeading
            eyebrow="Dúvidas"
            title="Perguntas Frequentes"
            description="Tire suas dúvidas sobre paisagismo e jardinagem!"
          />
          <div className="mt-12">
            <Faq items={FAQ} />
          </div>
        </div>
      </section>

      {/* ===== CONTATO ===== */}
      <section id="contato" className="bg-[#e9f5ec]">
        <div className="mx-auto w-full max-w-6xl px-5 py-20 sm:px-8 sm:py-28">
          <SectionHeading
            eyebrow="Fale conosco"
            title="Solicite um orçamento!"
            description="Paisagismo residencial e comercial. Jardinagem, poda, plantio, manutenção e revitalização de áreas verdes."
          />

          <div className="mt-14 grid gap-10 lg:grid-cols-2 lg:items-start">
            {/* Info */}
            <div className="space-y-8">
              <div className="flex items-start gap-5">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <Phone className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground">Telefone</h4>
                  <p className="mt-1 text-muted-foreground">{SITE.whatsappDisplay}</p>
                </div>
              </div>

              <div className="flex items-start gap-5">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#25d366]/10 text-[#25d366]">
                  <MessageCircle className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground">WhatsApp</h4>
                  <p className="mt-1 text-muted-foreground">{SITE.whatsappDisplay}</p>
                  <div className="mt-3">
                    <WhatsAppButton
                      label="Solicitar pelo WhatsApp"
                      message={`Olá, ${SITE.name}! Gostaria de solicitar um orçamento.`}
                    />
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-5">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <MapPin className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground">Endereço</h4>
                  <p className="mt-1 text-muted-foreground">
                    Av. T-63, 1639
                    <br />
                    Jardim América, Goiânia - GO
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-5">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <Clock className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground">Horário de Atendimento</h4>
                  <p className="mt-1 text-muted-foreground">
                    Seg a Sex: 8h às 17h
                    <br />
                    Sábado: 8h às 12h
                  </p>
                </div>
              </div>
            </div>

            {/* Map */}
            <div className="overflow-hidden rounded-2xl shadow-soft">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3821.2502149308!2d-49.274568699999996!3d-16.714362599999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x935ef128f58dac6d%3A0x50db4b66b20e35b3!2sAv.%20T-63%2C%201639%20-%20Jardim%20Am%C3%A9rica%2C%20Goi%C3%A2nia%20-%20GO%2C%2074250-320!5e0!3m2!1spt-BR!2sbr!4v1765849528778!5m2!1spt-BR!2sbr"
                width="100%"
                height="420"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Localização Goiás Paisagismo"
              />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
