import type { BaseLayoutProps } from "fumadocs-ui/layouts/shared";
import { ExternalLinkIcon } from "lucide-react";
/**
 * Shared layout configurations
 *
 * you can customise layouts individually from:
 * Home Layout: app/(home)/layout.tsx
 * Docs Layout: app/docs/layout.tsx
 */
export function baseOptions(): BaseLayoutProps {
  return {
    nav: {
      title: (
        <>
          <img
            src="/logo/square-acorn.svg"
            alt="Squirrelly Logo"
            className="h-8 w-8"
          />
          <span>Squirrelly</span>
        </>
      ),
    },
    githubUrl: "https://github.com/bgub/squirrelly",
    // see https://fumadocs.dev/docs/ui/navigation/links
    links: [
      {
        text: "Playground",
        url: "/playground",
      },
      {
        text: "Docs (v7)",
        url: "https://v7--squirrellyjs.netlify.app/",
        icon: <ExternalLinkIcon />,
      },
    ],
  };
}
