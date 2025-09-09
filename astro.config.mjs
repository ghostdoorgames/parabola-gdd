// @ts-check
import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";

// https://astro.build/config
export default defineConfig({
  integrations: [
    starlight({
      title: "PARABOLA",

      customCss: ["./src/styles/custom.css"],
      social: [
        {
          icon: "github",
          label: "GitHub",
          href: "https://github.com/ghostdoorgames/parabola-gdd",
        },
      ],
      sidebar: [
        {
          label: "Game Charter",
          autogenerate: { directory: "charter" },
        },
        {
          label: "Narrative",
          autogenerate: { directory: "narrative" },
        },
      ],
    }),
  ],
});
