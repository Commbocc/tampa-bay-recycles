import { defineContentConfig, defineCollection } from "@nuxt/content";
import { z } from "zod";

export default defineContentConfig({
  collections: {
    content: defineCollection({
      type: "page",
      source: "index.md",
    }),
    partners: defineCollection({
      type: "data",
      source: "partners/*.md",
      schema: z.object({
        logo: z.string(),
        name: z.string(),
        url: z.string(),
      }),
    }),
    recyclingTabs: defineCollection({
      type: "page",
      source: "recycling-tabs/*.md",
      schema: z.object({
        title: z.string(),
      }),
    }),
  },
});
