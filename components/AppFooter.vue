<template>
  <!-- Menu -->
  <!-- <hr class="absolute  border-y border-grey-100 dark:border-grey-950 h-[50px] w-full" /> -->
  <footer
    class="
      relative
      z-10
      w-full
      --h-screen
      h-[90dvh]
      px-16
      sm:px-18
      md:px-20
      lg:px-24
      xl:px-28
    bg-white dark:bg-grey-975
  ">
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2 w-full">

      <section class="bg-white/0 h-full flex justify-start items-start">
        <ul class="mt-4 tracking-wide bg-white/0">
          <li class="mb-2 sm:mb-4 lg:mb-6 font-bold text-xs uppercase text-grey-975 dark:text-white">Base</li>
       <li
            v-for="(menuItem, index) in menuItems1" :key="index"
            class="my-0 py-2"
          >
            <NuxtLink :to="menuItem.url" @click="closeModal()" class="group flex">
              <span class="hover:underline hover:underline-offset-8">{{ menuItem.title }}</span>
              <span class="mt-0.5 ms-2 opacity-0 group-hover:opacity-100">--></span>
            </NuxtLink>
          </li> 
        </ul>
      </section>

      <section class="bg-white/0 h-full flex justify-start items-start">
        <ul class="mt-4 tracking-wide bg-white/0">
          <li class="mb-2 sm:mb-4 lg:mb-6 font-bold text-xs uppercase text-grey-975 dark:text-white">Data</li>
          <li
            v-for="(menuItem, index) in menuItems2" :key="index"
            class="my-0 py-2"
          >
            <NuxtLink :to="menuItem.url" @click="closeModal()" class="group">
              <span class="hover:underline hover:underline-offset-8">{{ menuItem.title }}</span>
              <span class="mt-0.5 ms-2 flex-1 opacity-0 group-hover:opacity-100">--></span>
            </NuxtLink>
          </li> 
        </ul>
      </section>

      <section class="bg-white/0 h-full flex justify-start items-start">
        <ul class="mt-4 tracking-wide bg-white/0">
          <li class="mb-2 sm:mb-4 lg:mb-6 font-bold text-xs uppercase text-grey-975 dark:text-white">Join</li>
          <li
            v-for="(menuItem, index) in menuItems3" :key="index"
            class="my-0 py-2"
          >
            <NuxtLink :to="menuItem.url" @click="closeModal()" class="group">
              <span class="hover:underline hover:underline-offset-8">{{ menuItem.title }}</span>
              <span class="mt-0.5 ms-2 flex-1 opacity-0 group-hover:opacity-100">--></span>
            </NuxtLink>
          </li> 
        </ul>
      </section>


      <section class="bg-white/0 h-full flex justify-start items-start">
        <ul class="mt-4 tracking-wide bg-white/0">
          <li class="mb-2 sm:mb-4 lg:mb-6 font-bold text-xs uppercase text-grey-975 dark:text-white">Misc</li>
          <li
            v-for="(menuItem, index) in menuItems4" :key="index"
            class="my-0 py-2"
          >
            <NuxtLink :to="menuItem.url" @click="closeModal()" class="group">
              <span class="hover:underline hover:underline-offset-8">{{ menuItem.title }}</span>
              <span class="mt-0.5 ms-2 flex-1 opacity-0 group-hover:opacity-100">--></span>
            </NuxtLink>
          </li> 
        </ul>
      </section>

    </div>
  </footer>
</template>


<script setup>
const { $lenis } = useNuxtApp()
const menu = useMenu()

function closeModal() {
  menu.value = !menu.value
  menu.value ? $lenis.stop() : $lenis.start()
}

// ------------------------------------------------>
// Menu Items

const menuItems1 = ref([
  {
    title: 'Home',
    slug: 'home',
    url: '/'
  },
  // {
  //   title: 'Freemavenry',
  //   slug: 'freemavenry',
  //   url: '/freemavenry'
  // },
  // {
  //   title: 'Natural Law',
  //   slug: 'natural-law',
  //   url: '/natural-law'
  // },
  // {
  //   title: '#NoConsent',
  //   slug: 'natural-law',
  //   url: '/natural-law'
  // },
  // {
  //   title: '#Initiation',
  //   slug: 'initiation',
  //   url: '/initiation'
  // }
])

const menuItems2 = ref([
  // {
  //   title: 'Home',
  //   slug: 'home',
  //   url: '/'
  // },
  {
    title: 'Freemavenry',
    slug: 'freemavenry',
    url: '/freemavenry'
  },
  {
    title: 'Natural Law',
    slug: 'natural-law',
    url: '/natural-law'
  },
  {
    title: 'The Principles',
    slug: 'principles',
    url: '/principles'
  },
  // {
  //   title: '#NoConsent',
  //   slug: 'natural-law',
  //   url: '/natural-law'
  // },
  // {
  //   title: '#Initiation',
  //   slug: 'initiation',
  //   url: '/initiation'
  // }
])

const menuItems3 = ref([
  // {
  //   title: 'Home',
  //   slug: 'home',
  //   url: '/'
  // },
  // {
  //   title: 'Freemavenry',
  //   slug: 'freemavenry',
  //   url: '/freemavenry'
  // },
  // {
  //   title: 'Natural Law',
  //   slug: 'natural-law',
  //   url: '/natural-law'
  // },
  // {
  //   title: '#NoConsent',
  //   slug: 'natural-law',
  //   url: '/natural-law'
  // },
  {
    title: '#Initiation',
    slug: 'initiation',
    url: '/initiation'
  }
])

const menuItems4 = ref([
  // {
  //   title: 'Home',
  //   slug: 'home',
  //   url: '/'
  // },
  // {
  //   title: 'Freemavenry',
  //   slug: 'freemavenry',
  //   url: '/freemavenry'
  // },
  // {
  //   title: 'Natural Law',
  //   slug: 'natural-law',
  //   url: '/natural-law'
  // },
  {
    title: '#NoConsent',
    slug: 'natural-law',
    url: '/natural-law'
  },
  // {
  //   title: '#Initiation',
  //   slug: 'initiation',
  //   url: '/initiation'
  // }
])

onMounted(() => {
  // Press ESC key to exit modal
  document.body.addEventListener('keyup', (e) => {
    if (e.keyCode === 27 && menu.value == true) {
      closeModal()
    }
  })
})
</script>