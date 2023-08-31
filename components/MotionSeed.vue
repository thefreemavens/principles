<template>
  <div class="">
    <!-- <button class="restart absolute top-12 start-20 z-50 cursor-pointer" @click="restart">restart</button> -->
    <svg
      xmlns:xlink="http://www.w3.org/1999/xlink"
      viewBox="0 0 546 546"
      class="
      sol
      w-full h-full
      rotate-[0deg]
      stroke-[2] md:stroke-[0.5] fill-none
      stroke-black dark:stroke-white
      origin-center object-contain
      ">
      <!-- text-black/100 dark: text-black/100 -->
      <ellipse class="sol-ment oval oval-sm fill-none" rx="128" ry="128" cx="273" cy="273"/>
      <ellipse class="sol-corr oval oval-sm fill-none" rx="128" ry="128" cx="273" cy="145"/>
      <ellipse class="sol-vibr oval oval-sm fill-none" rx="128" ry="128" cx="384" cy="209"/>
      <ellipse class="sol-pola oval oval-sm fill-none" rx="128" ry="128" cx="384" cy="337"/>
      <ellipse class="sol-rhyt oval oval-sm fill-none" rx="128" ry="128" cx="273" cy="401"/>
      <ellipse class="sol-caus oval oval-sm fill-none" rx="128" ry="128" cx="162" cy="337"/>
      <ellipse class="sol-gend oval oval-sm fill-none" rx="128" ry="128" cx="162" cy="209"/>
      <ellipse class="sol-care oval oval-lg fill-none" rx="256" ry="256" cx="273" cy="273"/>

    </svg>

  </div>
</template>

<script setup>
const { $gsap } = useNuxtApp()


// Animate onMounted 
onMounted(() => {

  // const restart = () => sol.restart()

  // Set Timeline
  const sol = $gsap.timeline({
    // repeat: -1,
    // repeatDelay: 0,
    // yoyo: true,
    // timeScale: 0.2,
    defaults: {
      duration: 1,
      ease: "power2.inOut"
    }
  })

  // Timeline Animation
  sol.set(".oval", {
    autoAlpha: 1,
    transformOrigin:'50% 50%',
    strokeDasharray:804,
    strokeDashoffset:804,
    rotate:-90
    // cx:273, cy:273,
    // strokeWidth:1,
  })
    .set('.sol-care', {strokeDasharray:1608, strokeDashoffset:-1608})
    .to('.sol-care', {strokeDashoffset:0, duration:10}, '<1')
    .to('.oval-sm', { strokeDashoffset:0, duration:10, stagger: {
          each: 5,
          ease: 'linear',
          from: "random",
          // from: 'end'
        }
      }, '<')
    // .to('.sol-ment', {strokeDashoffset:0, duration:5})

    // .to('.sol-rhyt', {strokeDashoffset:0, duration:5}, '<')
    // .to('.sol-corr', {strokeDashoffset:0, duration:5}, '<')
    // .to('.sol-caus', {strokeDashoffset:0, duration:5}, '<')
    // .to('.sol-vibr', {strokeDashoffset:0, duration:5}, '<')
    // .to('.sol-pola', {strokeDashoffset:0, duration:5}, '<')
    // .to('.sol-gend', {strokeDashoffset:0, duration:5}, '<')
    // .to('.oval', { duration:3}, '>')
    // .to('.sol-m', {autoAlpha:1, strokeDashoffset:0, duration:4}, '<-1')
    // .to('.sol-f', {autoAlpha:1, strokeDashoffset:0, duration:3}, '<1')
    // .to('.logomark', {autoAlpha:1, duration: 2}, '>')
    // Done
    // Option 1:
    // .to('.sol-line', {autoAlpha:0, strokeDasharray:256, strokeDashoffset:-256, stagger: 0.25, duration:2}, '<-1')
    // .to('.oval', {autoAlpha:0, duration:5}, '<')
    // Option 2:
    // .set(['.sol-hex', '.sol-m', '.sol-f'], {autoAlpha:0})
    // .to('.logomark', {autoAlpha:0, duration:1, delay:5}, '>')

})

</script>