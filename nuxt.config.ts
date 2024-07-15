// https://nuxt.com/docs/api/configuration/nuxt-config

import { resolve } from "path";

export default defineNuxtConfig({
  devtools: { enabled: true },

  alias: {
    "@": resolve(__dirname, "/")
  },

  css: ["@/assets/styles/main.scss"],

  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },

  modules: ["@nuxtjs/tailwindcss"],

  // // 构建时启动类型检查
  // typescript: {
  //   typeCheck: true
  // }
})
