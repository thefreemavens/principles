<template>
  <AppContainer>
    <AppProgress />
    <AppControlPanel />
      <Transition
        enter-active-class="transition-opacity duration-300 ease-in-out"
        leave-active-class="transition-opacity duration-200 ease-in-out"
        enter-from-class="opacity-0"
        leave-to-class="opacity-0"
      >
        <AppMenuModal v-show="menu"/>
      </Transition>
      <PageContainer>
        <!-- Preload animation: Change options -->
        <!-- <NuxtLoadingIndicator color="#47ffd4" :height="3" /> -->
        <NuxtPage />
      </PageContainer>
    <!-- <AppFooter /> -->
  </AppContainer>
</template>

<script setup lang="ts">
const menu = useMenu()
useHead({
  title: 'The Free Mavens',
  meta: [
    { name: 'title', content: 'The Free Mavens' },
    { name: 'description', content: 'DESCRIPTION' },
    { name: 'msapplication-TileColor', content: '#000000' },
    { name: 'theme-color', content: '#ffffff' },
    // Open Graph / Facebook
    { property: 'og:type', content: 'website' },
    { property: 'og:url', content: 'https://lexxrex.github.io/togw/' },
    { property: 'og:title', content: 'The Free Mavens' },
    { property: 'og:description', content: 'DESCRIPTION' },
    { property: 'og:image', content: 'OG_IMAGE' },

    // Twitter
    { property: 'twitter:card', content: 'summary_large_image' },
    { property: 'twitter:url', content: 'https://lexxrex.github.io/togw/' },
    { property: 'twitter:title', content: 'The Free Mavens' },
    { property: 'twitter:description', content: 'DESCRIPTION' },
    { property: 'twitter:image', content: 'OG_IMAGE' },
  ],
  link: [
    { rel: 'apple-touch-icon', sizes: '180x180', href: './apple-touch-icon.png' },
    { rel: 'icon', type: 'image/png', sizes: '32x32', href: './favicon-32x32.png' },
    { rel: 'icon', type: 'image/png', sizes: '16x16x', href: './favicon-16x16.png' },
    { rel: 'icon', href: './favicon.ico' },
    { rel: 'manifest', href: '/site.webmanifest' },
    { rel: 'mask-icon', href: '/safari-pinned-tab.svg', color: '#000000' },
  ],
  //
  // Leave for syntex options example:
  bodyAttrs: {
    // used by Lenis plugin
    class: 'app'
  },
  // script: [ { innerHTML: 'console.log(\'Hello world\')' } ]
  //
})

</script>

<style>
/* Set Color Mode */
body {
  @apply
    text-grey-975 dark:text-white
    bg-white dark:bg-grey-975
    selection:text-white selection:bg-grey-975 dark:selection:text-grey-975 dark:selection:bg-white;
}
/* Lenis */
html.lenis{height:auto}.lenis.lenis-smooth{scroll-behavior:auto}.lenis.lenis-smooth [data-lenis-prevent]{overscroll-behavior:contain}.lenis.lenis-stopped{overflow:hidden}.lenis.lenis-scrolling iframe{pointer-events:none}
</style>