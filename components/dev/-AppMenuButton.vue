<template>
  <ClientOnly>
    <button
      :class="{ 'rotate-[-180deg]': menu, 'rotate-0': !menu }"
      class="transition-transform duration-300 ease-out rounded-sm relative z-50"
      @click="setMenu()"
    >
      <AppPicon
        name="Hex"
        variation="outline"
        stroke-width="stroke-[38]"
        size="w-[17px] h-[17px]"
      />
    </button>
  </ClientOnly>
</template>

<script setup>
const { $lenis } = useNuxtApp()
const menu = useMenu()

function setMenu() {
  menu.value = !menu.value
  menu.value ? $lenis.stop() : $lenis.start()
}
</script>

