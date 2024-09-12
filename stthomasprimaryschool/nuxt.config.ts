// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-04-03",
  devtools: { enabled: true },
  css: ["~/assets/css/tailwind.css"],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  app: {
    head: {
      title: "Fresh Connect",
      meta: [{ name: "description", content: " St Thomas Primary School" }],
      link: [
        {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/css2?family=Material+Icons",
        },
        {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/css2?family=Mooli&display=swap",
        },
      ],
      script: [
        {
          src: `https://maps.googleapis.com/maps/api/js?key=YOUR_ACTUAL_API_KEY&libraries=places`,
          async: true,
          defer: true,
        },
      ],
    },
  },
});
