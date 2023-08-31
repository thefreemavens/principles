<script setup lang="js">
const { $lenis } = useNuxtApp()
// const isMenuOpen = ref()
const menu = useMenu()

function setMenu() {
  menu.value = !menu.value
  menu.value ? $lenis.stop() : $lenis.start()
}

</script>

<template>
  <header class="fixed top-0 left-0 right-0 py-0 px-1 sm:px-2 z-50">
    <div class="flex items-center justify-center">
      <!-- Head 1/3 -->
      <div class="flex flex-1 items-center justify-start">
        <div class="flex items-center justify-center w-12 h-12">
          <NuxtLink to="/">
            <AppLogomark
              title="The Free Mavens"
              class="w-9 h-9 cursor-pointer relative z-50"
              @click="$lenis.scrollTo('top', {duration: 6})"
            />
          </NuxtLink>
        </div>
      </div>
      
      <!-- Head 2/3 -->
      <div />

      <!-- Head 3/3 -->
      <div class="flex flex-1 items-center justify-end">        
        <UTooltip text="Color Mode">
          <AppColorModeButton/>
        </UTooltip>
        
        <UTooltip text="Menu">
          <UButton
            :icon="'i-heroicons-bars-3-bottom-right'"
            to="/"
            size="lg"
            aria-label="Theme"
            variant="flat"
            class="z-50"
            @click="setMenu()"
          />
        </UTooltip>
      </div>
    </div>
  </header>
</template>
