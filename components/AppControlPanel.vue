<template>
  <header class="fixed top-[2px] left-0 bottom-0 z-50">
    <nav>
      <ul class="flex flex-col justify-start">

        <!-- Main Menu -->
        <li class="hover:bg-grey-100/80 dark:hover:bg-grey-900/80 transition-all duration-[1555ms] hover:duration-200">
          <!-- <UTooltip text="Menu"> -->
            <button @click="setMenu()">
              <span
                :class="{'rotate-[60deg]': menu, 'rotate-0': !menu}"
                class="flex justify-center items-center transition-transform duration-300 ease-out w-12 h-12"
              >
                <AppPicon
                  name="Hex"
                  variation="outline"
                  stroke-width="stroke-[38]"
                  size="w-[18px] h-[18px]"
                  color="stroke-white"
                />
              </span>
            </button>
          <!-- </UTooltip> -->
        </li>

        <!-- Color Mode -->
        <li class="hover:bg-grey-100/80 dark:hover:bg-grey-900/80 transition-all duration-[555ms] hover:duration-200">
          <!-- <UTooltip text="Color Mode"> -->
            <button @click="isDark = !isDark">
              <span
                :class="{ 'rotate-[360deg]': isDark, 'rotate-0': !isDark }"
                class="flex justify-center items-center w-12 h-12 transition-transform duration-300 ease-out"
              >
                <AppPicon
                  name="CustomColorMode"
                  variation="base"
                  size="w-[18px] h-[18px]"
                />
              </span>
            </button>
          <!-- </UTooltip> -->
        </li>

      </ul>
    </nav>
  </header>
</template>

<script setup>
// Main Menu
const { $lenis } = useNuxtApp()
const menu = useMenu()
const principles = usePrinciples()

function setMenu() {
  menu.value = !menu.value
  menu.value ? $lenis.stop() : $lenis.start()
}

// Color Mode
const colorMode = useColorMode()

const isDark = computed({
  get () {
    return colorMode.value === 'dark'
  },
  set () {
    colorMode.preference = colorMode.value === 'dark' ? 'light' : 'dark'
  }
})

// onMounted(() => {
//   console.log(principles.value)
// })

</script>
