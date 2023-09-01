// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    baseURL: '/principles/',
    head: {
        // htmlAttrs: { dir: 'rtl', lang: 'he' },
    },
  },
  // devtools: { enabled: true },
  ssr: false,
  spaLoadingTemplate: 'apploading.html',
  target: 'static',
  router: {
    base: '/principles/',
 },
  modules: [
    '@nuxthq/ui',
    '@nuxtjs/google-fonts',
    '@hypernym/nuxt-gsap'
  ],
  googleFonts: {
    families: {
      // Montserrat: [800, 900],
      Inter: [400, 700, 900],
      // 'Major Mono Display': [400],
      // Roboto: [400, 700, 900],
    }
  },
  gsap: {
    extraPlugins: {
      scrollTrigger: true
    }
  },
  tailwindcss: {
    exposeConfig: true,
    exposeLevel: 3,
  }
})