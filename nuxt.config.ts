// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      htmlAttrs: {
        lang: "en",
      },
    },
  },
  modules: ["@nuxt/content", "@nuxt/a11y", "@nuxt/ui", "@nuxt/image", "nuxt-gtag",],
  devtools: { enabled: true },
  compatibilityDate: "2024-04-03",
  css: ["~/assets/css/main.css"],
  ui: {
    colorMode: false,
  },
  gtag: {
    enabled: process.env.NODE_ENV === "production",
    id: "G-43B4KV5TBT",
  },
});
