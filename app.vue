<template>
  <AppContainer>
    <AppProgress />
    <AppControlPanel />
      <!-- <Transition
        enter-active-class="transition-opacity duration-300 ease-in-out"
        leave-active-class="transition-opacity duration-200 ease-in-out"
        enter-from-class="opacity-0"
        leave-to-class="opacity-0"
      >
        <AppMenuModal v-show="menu"/>
      </Transition> -->
      <PageContainer>
        <!-- Preload animation: Change options -->
        <!-- <NuxtLoadingIndicator color="#47ffd4" :height="3" /> -->
        <NuxtPage />
      </PageContainer>
    <!-- <AppFooter /> -->
  </AppContainer>
</template>

<script setup lang="ts">
// const menu = useMenu()

useSeoMeta({
  title: 'The Principles of Natural Law',
  description: 'Discover your true power and learn how to use it.',
  ogTitle: 'The Principles of Natural Law',
  ogDescription: 'Discover your true power and learn how to use it.',
  ogType: 'website',
  ogUrl: 'https://principles.thefreemavens.org',
  ogImage: '/tfm-og-img.webp',
  twitterTitle: 'The Principles of Natural Law',
  twitterDescription: 'Discover your true power and learn how to use it.',
  twitterCard: 'summary_large_image',
  twitterSite: 'https://principles.thefreemavens.org',
  twitterCreator: '@thefreemavens',
})

useHead({
  title: 'The Principles of Natural Law',
  link: [
    { rel: 'apple-touch-icon', sizes: '180x180', href: '/apple-touch-icon.png' },
    { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/favicon-32x32.png' },
    { rel: 'icon', type: 'image/png', sizes: '16x16x', href: '/favicon-16x16.png' },
    { rel: 'icon', href: '/favicon.ico' },
    { rel: 'manifest', href: '/site.webmanifest' },
    { rel: 'mask-icon', href: '/safari-pinned-tab.svg', color: '#000000' },
  ],
  bodyAttrs: {
    class: 'app' // used by Lenis plugin
  }
})

</script>

<style lang="postcss">
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