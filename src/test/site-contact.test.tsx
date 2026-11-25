import { createMemoryHistory, createRouter, RouterProvider } from "@tanstack/react-router";
import { QueryClient } from "@tanstack/react-query";
import { render, screen, waitFor } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import { routeTree } from "@/routeTree.gen";
import { PROJECTS, PROJECT_CATEGORIES, SITE, whatsappLink } from "@/lib/site";

async function renderLoadedApp(entry: string) {
  const router = createRouter({
    routeTree,
    history: createMemoryHistory({ initialEntries: [entry] }),
    context: { queryClient: new QueryClient() },
  });
  await router.load();
  render(<RouterProvider router={router} />);
  return router;
}

function whatsappLinksInDocument() {
  return screen
    .getAllByRole("link")
    .filter((link) => (link.getAttribute("href") ?? "").startsWith("https://wa.me/"));
}

describe("Contato", () => {
  it("monta o link do WhatsApp com o número e a mensagem do site", () => {
    expect(whatsappLink("Oi")).toBe(`https://wa.me/${SITE.whatsapp}?text=Oi`);
    expect(whatsappLink("Quero orçamento")).toContain("text=Quero%20or%C3%A7amento");
  });

  it("oferece WhatsApp tanto no topo quanto no rodapé da home", async () => {
    await renderLoadedApp("/");

    await waitFor(() => {
      expect(whatsappLinksInDocument().length).toBeGreaterThanOrEqual(2);
    });

    for (const link of whatsappLinksInDocument()) {
      expect(link.getAttribute("href")).toContain(`wa.me/${SITE.whatsapp}`);
    }
  });
});

describe("Portfólio", () => {
  it("tem projetos com imagem, categoria válida e texto próprio", () => {
    expect(PROJECTS.length).toBeGreaterThanOrEqual(6);

    for (const project of PROJECTS) {
      expect(project.image).toMatch(/^\/images\/[\w-]+\.jpg$/);
      expect(PROJECT_CATEGORIES).toContain(project.category);
      expect(project.brief.length).toBeGreaterThan(80);
      expect(project.highlights.length).toBeGreaterThanOrEqual(3);
    }

    const slugs = PROJECTS.map((project) => project.slug);
    expect(new Set(slugs).size).toBe(slugs.length);
  });
});
