<template>
  <div ref="menuRef">
    <!-- Button -->
    <UTooltip text="Menu">
      <UButton
        :icon="'i-heroicons-bars-3-bottom-right'"
        to="/"
        size="lg"
        aria-label="Theme"
        variant="flat"
        @click="toggleTimeline"
        class="z-50"
      />
    </UTooltip>

    <!-- Menu -->
    <div
      class="
      menuClass
      invisible
      left-0
      top-0
      fixed
      z-40
      w-screen
      h-screen
      flex
      justify-center
      items-center
    dark:bg-grey-975/95
      bg-white/95
      backdrop-filter
      backdrop-blur-[10px]
      [@supports(backdrop-filter:blur(0px))]:bg-white/80
      [@supports(backdrop-filter:blur(0px))]:dark:bg-grey-980/70
    ">
      Hello
    </div>

  </div>
</template>

<script setup>
// import { _0 } from '#tailwind-config/theme/backdropBlur';

const { $gsap, $lenis } = useNuxtApp()

const menuRef = ref()
let tl
let ctx

const toggleTimeline = () => {
  tl.reversed(!tl.reversed())
  $lenis.start()
}

onMounted(() => {
  ctx = $gsap.context((self) => {
    const menuClass = self.selector('.menuClass')
    tl = $gsap
      .timeline()
      .to(menuClass, { autoAlpha: 1, ease: 'power2.inOut', duration: 0.33, onComplete: () => $lenis.stop() })
      .reverse()
  }, menuRef.value) // <- Scope!
})

onUnmounted(() => {
  ctx.revert()
})
</script>