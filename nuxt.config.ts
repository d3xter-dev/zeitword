import tailwindcss from "@tailwindcss/vite"

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2025-01-23",
  future: { compatibilityVersion: 4 },
  vite: { plugins: [tailwindcss()] },
  ssr: false,

  devtools: { enabled: false },

  css: ["@/app.css"],
  modules: ["@vueuse/nuxt", "nuxt-auth-utils", "@nuxt/fonts"],

  fonts: { experimental: { processCSSVariables: true } },

  runtimeConfig: {
    // S3 credentials
    s3AccessKeyId: "",
    s3SecretAccessKey: "",
    s3Endpoint: "",
    s3Bucket: "",
    s3Region: "",

    // Postmark credentials
    postmarkServerToken: "",

    //Resend
    resend: "",

    public: {
      siteUrl: ""
    }
  },

  nitro: {
    // preset: "bun",

    experimental: {
      openAPI: true
    },
    storage: { limiter: { driver: "memory" } }
  },

  app: {
    head: {
      title: "Zeitword",
      link: [
        {
          rel: "icon",
          type: "image/x-icon",
          href: "/favicon.png",
          media: "(prefers-color-scheme: dark)"
        },
        {
          rel: "icon",
          type: "image/x-icon",
          href: "/favicon-light.png",
          media: "(prefers-color-scheme: light)"
        }
      ]
    }
  }
})
