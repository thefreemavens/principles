<template>
  <header class="fixed top-[2px] left-0 bottom-0 z-50">
    <nav>
      <ul class="flex flex-col justify-start">

        <!-- Main Menu -->
        <li class="mx-4 my-4">
          <!-- <UTooltip text="Menu"> -->
          <NuxtLink to="https://thefreemavens.org" class="">
            <AppLogomark class="w-11 h-11" />
          </NuxtLink>
          <!-- </UTooltip> -->
        </li>

        <!-- Color Mode -->
        <li class="">
          <!-- <UTooltip text="Color Mode"> -->
            <!-- <button @click="isDark = !isDark">
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
            </button> -->
          <!-- </UTooltip> -->
        </li>

      </ul>
    </nav>
  </header>
</template>

<script setup>
// Main Menu
const { $lenis } = useNuxtApp()
// const menu = useMenu()
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
