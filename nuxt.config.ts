// https://nuxt.com/docs/api/configuration/nuxt-config
import eslintPlugin from "vite-plugin-eslint"

export default defineNuxtConfig({
    devtools: { enabled: true },
    app: {
        head: {
            title: "Hi",
            meta: [
                { charset: "utf-8" },
                { name: "viewport", content: "width=device-width, initial-scale=1" },
                { property: "name", content: "test!" },
                { name: "format-detection", content: "telephone=no" }
            ],
            link: [{ rel: "icon", type: "image/svg", href: "/favicon.ico" }]
        }
        // baseURL: "/thumb/",
        // buildAssetsDir: "assets",
        // cdnURL: process.env.CDN_URL
    },
    modules: ["nuxt-swiper", "@pinia/nuxt"],
    css: ["@/assets/styles/main.scss"],
    alias: {
        "@images": process.env.IMG_BASE_URL
    },
    vite: {
        plugins: [eslintPlugin()],
        css: {
            preprocessorOptions: {
                scss: {
                    additionalData: `
                        @import "@/assets/styles/abstracts/_variables.scss";
                        @import "@/assets/styles/abstracts/_mixins.scss";
                    `
                }
            }
        }
    }
})
