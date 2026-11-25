import { cn } from "@/lib/utils";

export function SectionHeading({
  eyebrow,
  title,
  description,
  tone = "paper",
  align = "left",
  className,
}: {
  eyebrow: string;
  title: string;
  description?: string;
  tone?: "paper" | "ink";
  align?: "left" | "center";
  className?: string;
}) {
  return (
    <div
      className={cn(
        "max-w-2xl",
        align === "center" && "mx-auto text-center",
        className,
      )}
    >
      <div
        className={cn(
          "flex items-center gap-3",
          align === "center" && "justify-center",
        )}
      >
        <span className={cn("h-px w-8 rule-leaf", tone === "ink" && "opacity-80")} />
        <span className={cn("eyebrow", tone === "ink" ? "text-moss" : "text-primary")}>
          {eyebrow}
        </span>
      </div>
      <h2
        className={cn(
          "mt-4 text-3xl leading-[1.08] sm:text-4xl md:text-[2.75rem]",
          tone === "ink" ? "text-cream" : "text-foreground",
        )}
      >
        {title}
      </h2>
      {description ? (
        <p
          className={cn(
            "mt-4 text-[1.02rem] leading-relaxed",
            tone === "ink" ? "text-cream/70" : "text-muted-foreground",
          )}
        >
          {description}
        </p>
      ) : null}
    </div>
  );
}
