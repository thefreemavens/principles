// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    // baseURL: '/principles/',
    head: {
        // htmlAttrs: { dir: 'rtl', lang: 'he' },
    },
  },
  // devtools: { enabled: true },
  ssr: true,
  spaLoadingTemplate: 'apploading.html',
//   target: 'static',
//   router: {
//     base: '/principles/',
//  },
  nitro: { 
    preset: 'static',
    serveStatic: true,
    prerender: {
      crawlLinks: true,
      // failOnError: false,
      // routes: [
      //   '/sitemap.xml',
      //   ...routes
      // ]
    }
  },
  modules: [
    '@nuxthq/ui',
    '@hypernym/nuxt-gsap'
  ],
  // googleFonts: {
  //   families: {
  //     // Montserrat: [800, 900],
  //     Inter: [400, 700, 900],
  //     // 'Major Mono Display': [400],
  //     // Roboto: [400, 700, 900],
  //   }
  // },
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
