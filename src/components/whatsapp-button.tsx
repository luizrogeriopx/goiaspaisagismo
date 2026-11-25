import { Button } from "@/components/ui/button";
import { whatsappLink } from "@/lib/site";
import { cn } from "@/lib/utils";

export function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className={className}>
      <path d="M12.04 2.4c-5.28 0-9.57 4.29-9.57 9.57 0 1.69.44 3.34 1.28 4.79L2.4 21.6l4.99-1.31a9.53 9.53 0 0 0 4.65 1.19h.01c5.28 0 9.57-4.29 9.57-9.57 0-2.56-.99-4.96-2.8-6.77a9.5 9.5 0 0 0-6.78-2.74Zm0 17.03h-.01a7.94 7.94 0 0 1-4.04-1.11l-.29-.17-2.96.78.79-2.89-.19-.3a7.9 7.9 0 0 1-1.21-4.21c0-4.37 3.55-7.92 7.92-7.92a7.88 7.88 0 0 1 5.6 2.32 7.87 7.87 0 0 1 2.32 5.61c0 4.37-3.56 7.89-7.93 7.89Zm4.35-5.93c-.24-.12-1.42-.7-1.64-.78-.22-.08-.38-.12-.54.12-.16.24-.61.78-.75.94-.14.16-.28.18-.52.06-.24-.12-1.01-.37-1.93-1.19-.71-.63-1.19-1.41-1.33-1.65-.14-.24-.01-.37.1-.49.11-.11.24-.28.36-.42.12-.14.16-.24.24-.4.08-.16.04-.3-.02-.42-.06-.12-.54-1.3-.74-1.78-.2-.47-.39-.4-.54-.41h-.46c-.16 0-.42.06-.64.3-.22.24-.84.82-.84 2 0 1.18.86 2.32.98 2.48.12.16 1.69 2.58 4.1 3.62.57.25 1.02.4 1.37.51.58.18 1.1.16 1.51.1.46-.07 1.42-.58 1.62-1.14.2-.56.2-1.04.14-1.14-.06-.1-.22-.16-.46-.28Z" />
    </svg>
  );
}

type WhatsAppButtonProps = {
  message?: string;
  label?: string;
  className?: string;
  variant?: "leaf" | "clay" | "cream" | "outlineCream" | "outlineInk";
  size?: "default" | "lg" | "xl";
};

export function WhatsAppButton({
  message,
  label = "Falar no WhatsApp",
  className,
  variant = "leaf",
  size = "lg",
}: WhatsAppButtonProps) {
  return (
    <Button asChild variant={variant} size={size} className={cn("rounded-full", className)}>
      <a href={whatsappLink(message)} target="_blank" rel="noopener noreferrer">
        <WhatsAppIcon />
        {label}
      </a>
    </Button>
  );
}
