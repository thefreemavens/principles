<script setup>
import svgUrl from '~/assets/svg/icons/picons-xl.svg'

const colorMode = useColorMode()

const isDark = computed({
  get () {
    return colorMode.value === 'dark'
  },
  set () {
    colorMode.preference = colorMode.value === 'dark' ? 'light' : 'dark'
  }
})

// console.log(isDark)

</script>

<template>
  <ClientOnly>
    <!-- :class="{ 'rotate-[270deg]': isDark, 'rotate-90': !isDark }" -->
    <!-- :class="{ 'rotate-180': isDark, 'rotate-0': !isDark }" -->
    <button
      :class="{ 'rotate-[270deg]': isDark, 'rotate-90': !isDark }"
      class="transition-transform duration-200 ease-out"
      @click="isDark = !isDark"
    >
      <AppPicon
        name="CustomColorMode"
        variation="base"
        size="w-4 h-4"
      />
    </button>


    <!-- <UButton
      :icon="isDark ? 'i-heroicons-moon-solid' : 'i-heroicons-sun-solid'"
      aria-label="Theme"
      size="xl"
      @click="isDark = !isDark"
    /> -->

    <!-- <template #fallback>
      <div class="w-8 h-8" />
    </template> -->
  </ClientOnly>
</template>
