<script setup lang="js">
// const isOpen = ref(false)
// const appConfig = useAppConfig()

const { $lenis } = useNuxtApp()
const lenis = $lenis

</script>

<template>
  <header class="fixed flex top-0 start-0 bottom-0 py-4 h-full z-50 bg-white/0 dark:bg-grey-975/0 border-gray-200 dark:border-gray-900/70">
    <div class="flex flex-col px-1 sm:px-2 md:px-3 lg:px-4">
      <!-- Head 1/3 -->
      <div class="basis-1/4">
        <div class="flex flex-col">
          <!-- <NuxtLink to="/"> -->
            <AppLogomark
              title="The Free Mavens"
              class="w-12 h-12 cursor-pointer"
              @click="lenis.scrollTo('top', {duration: 6})"
              />
            <!-- </NuxtLink> -->
            <!-- background="fill-none"
            color="text-black" -->
              <!-- <h1 class="font-display font-bold uppercase tracking-wide text-lg ml-2">LexRex</h1> -->
  
              <!-- Content -->
            <!-- <UModal v-model="isOpen">
              <UContainer class="pt-8">
                <div class="mx-auto w-36 h-36 md:w-42 md:h-42 lg:w-40 lg:h-40 bg-[url('/img/togw-logomark-app-black-on-white.jpg')] dark:bg-[url('/img/togw-logomark-app-white-on-zinc.jpg')] bg-contain" />
  
                <UBadge :label="appConfig.version" size="xs" class="absolute top-4 end-4" />
  
                <h1 class="text-center text-3xl font-bold text-zinc-900 dark:text-zinc-200 pt-4">
                  Title
                </h1>
                <span class="text-sm text-center text-gray-600 dark:text-gray-300 tracking-wide block mt-2">
                  subtitle
                </span>
                
                <hr class="my-4 border-l-zinc-100 dark:border-zinc-900"/>
                
                <div class="flex flex-col md:flex-row max-w-xl text-gray-600 dark:text-gray-400">
                  <p class="flex-1 p-2">
                    paragraph
                  </p>
  
                  <p class="flex-1 p-2">
                    paragraph
                  </p>
                </div>
  
                <NuxtLink to="#" target="_blank" class="flex justify-center mx-auto mt-4 mb-4 font-thin text-xs text-gray-500">
                  footer link
                </NuxtLink>
              </UContainer>
            </UModal> -->
        </div>

      </div>
      
      <!-- Head 2/3 -->
      <div class="basis-1/4">
      </div>

      <!-- Head 3/3 -->
      <div class="basis-1/2 flex flex-col-reverse items-center justify-start">
        <!-- <UTooltip text="TODO">
          <UButton
            :icon="'i-heroicons-bolt-solid'"
            to="/theme"
            aria-label="Theme"
          />
        </UTooltip> -->
        <UTooltip text="Menu">
          <UButton
            :icon="'i-heroicons-bars-2'"
            to="/"
            size="xl"
            aria-label="Theme"
          />
        </UTooltip>
        
        <UTooltip text="Color Mode" class="">
          <ColorModeButton/>
        </UTooltip>

      </div>
    </div>
  </header>
</template>
