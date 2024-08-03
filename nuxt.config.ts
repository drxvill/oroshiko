// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    modules: ["@nuxt/ui", "@nuxt/fonts", "@nuxt/image"],
    devtools: { enabled: false },
    fonts: {
        families: [
            { name: "Outfit", provider: "google" }
        ]
    },
    runtimeConfig: { public: { POCKETBASE: process.env.POCKETBASE_URL } }
});