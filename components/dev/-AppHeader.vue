<script setup lang="ts">
const isOpen = ref(false)
const appConfig = useAppConfig()

</script>

<template>
  <header class="fixed top-0 left-0 right-0 py-3 z-20 backdrop-filter backdrop-blur-[16px] bg-white/0 dark:bg-grey-975/0 border-gray-200 dark:border-gray-900/70">
    <div class="flex mx-auto flex-row items-center px-4">
      <!-- Head 1/3 -->
      <div class="flex flex-1 flex-row items-center justify-start">
        <div class="flex items-center">
          <NuxtLink to="/">
            <AppLogomark
              title="The Free Mavens"
              class="w-10 h-10 cursor-pointer"
            />
          </NuxtLink>
              <!-- @click="isOpen = true" -->
              <!-- <h1 class="font-display font-bold uppercase tracking-wide text-lg ml-2">LexRex</h1> -->
  
            <UModal v-model="isOpen">
              <!-- Content -->
              <UContainer class="pt-8">
                <div class="mx-auto w-36 h-36 md:w-42 md:h-42 lg:w-40 lg:h-40 bg-[url('/img/togw-logomark-app-black-on-white.jpg')] dark:bg-[url('/img/togw-logomark-app-white-on-zinc.jpg')] bg-contain" />
  
                <UBadge :label="appConfig.version" size="xs" class="absolute top-4 end-4" />
  
                <h1 class="text-center text-3xl font-black text-zinc-900 dark:text-zinc-200 pt-4">
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
            </UModal>
        </div>

      </div>
      
      <!-- Head 2/3 -->
      <div>
      </div>

      <!-- Head 3/3 -->
      <div class="flex flex-1 flex-row items-center justify-end">
        <!-- <UTooltip text="TODO">
          <UButton
            :icon="'i-heroicons-bolt-solid'"
            to="/theme"
            aria-label="Theme"
          />
        </UTooltip> -->
        
        <UTooltip text="Color Mode" class="">
          <ColorModeButton/>
        </UTooltip>

        <UTooltip text="Menu">
          <UButton
            :icon="'i-heroicons-bars-2'"
            to="/"
            size="lg"
            aria-label="Theme"
          />
        </UTooltip>
      </div>
    </div>
  </header>
</template>
