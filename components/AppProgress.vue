<template>
  <div class="fixed top-0 z-50 w-screen flex">
    <span class="bg-black dark:bg-white h-[2px] block" :style="{width: appScroll + 'vw'}" />
  </div>
</template>

<script setup>
const { $lenis } = useNuxtApp()

const appScroll = useState('appScroll', () => false)
const appVelocity = useState('appVelocity', () => false)

onMounted(() => {

  $lenis.on('scroll', ({ scroll, limit, velocity }) => {
    appScroll.value = scroll * 100 / limit
    if (velocity > 8) {
      return appVelocity.value = 8
    } if (velocity < -8) {
      return appVelocity.value = -8
    } else {
      return appVelocity.value = Math.trunc(velocity)
    } 
  })

})
</script>