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
      stroke-[0.3] fill-none
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

      <!-- <path class="sol-hex fill-current" rx="0" ry="0" d="M162,209L162,337L273,401L384,337L384,209L273,145L162,209Z"/> -->
      <path class="sol-hex" rx="0" ry="0" d="M282.821,398.366L376.437,344.200C382.516,340.681,386.255,334.192,386.255,327.163L386.255,218.835C386.255,211.808,382.516,205.319,376.438,201.798L282.823,147.635C276.744,144.122,269.265,144.122,263.188,147.634L169.565,201.796C163.484,205.319,159.745,211.808,159.745,218.835L159.745,327.163C159.745,334.191,163.485,340.681,169.562,344.199L263.186,398.365C269.265,401.878,276.743,401.878,282.821,398.366ZZ"/>

      <path class="sol-line sol-line-0-corr" rx="0" ry="0" d="M273,17L273,273"/>
      <path class="sol-line sol-line-60-vibr" rx="0" ry="0" d="M494.705,145L273,273"/>
      <path class="sol-line sol-line-120-pola" rx="0" ry="0" d="M494.700,401L273,273"/>
      <path class="sol-line sol-line-0-rhyt" rx="0" ry="0" d="M273,273L273,529"/>
      <path class="sol-line sol-line-60-caus" rx="0" ry="0" d="M273,273L51.3,401"/>
      <path class="sol-line sol-line-120-gend" rx="0" ry="0" d="M273,273L51.3,145"/>

      <path class="sol-m" rx="0" ry="0" d="M326.021,226.341C328.404,224.963,331.381,226.686,331.381,229.438L331.381,316.561C331.381,319.313,328.403,321.037,326.021,319.658L319.409,315.831C318.304,315.192,317.624,314.011,317.624,312.734L317.624,247.116L274.163,272.269C273.620,272.582,273.004,272.748,272.377,272.748C271.748,272.748,271.132,272.583,270.587,272.268L215.154,240.188C214.050,239.548,213.371,238.368,213.371,237.091L213.371,229.438C213.371,226.686,216.347,224.963,218.730,226.341L272.374,257.387L326.021,226.341ZL326.021,226.341Z"/>
      <path class="sol-f" rx="0" ry="0" d="M227.128,312.736C227.128,314.013,226.447,315.194,225.343,315.832L218.730,319.659C216.348,321.037,213.371,319.314,213.371,316.562L213.371,252.401C213.371,249.649,216.348,247.926,218.731,249.305L274.165,281.385C276.545,282.763,276.544,286.203,274.164,287.579L267.548,291.405C266.443,292.045,265.081,292.045,263.975,291.405L227.128,270.082L227.128,312.736ZL227.128,312.736Z"/>

      <AppLogomark class="logomark scale-[0.59] origin-center opacity-0"/>

    </svg>

  </div>
</template>

<script setup>
// import { _1 } from '#tailwind-config/theme/aspectRatio'
// import { _0 } from '#tailwind-config/theme/backdropBlur';

const { $gsap } = useNuxtApp()


// Animate onMounted 
onMounted(() => {

  const restart = () => sol.restart()

  // Set Timeline
  const sol2 = $gsap.timeline({
    repeat: -1,
    repeatDelay: 0,
    yoyo: true,
    // timeScale: 0.2,
    defaults: {
      duration: 1,
      ease: "power2.inOut"
    }
  })

  // Timeline Animation
  sol2.set(".oval", {
    autoAlpha: 0,
    cx:273, cy:273,
    transformOrigin:'50% 50%',
    strokeDasharray:804,
    strokeDashoffset:0,
    // strokeWidth:1,
  })
    .set('.sol-ment', {autoAlpha:1, strokeDashoffset:804, rotate:-90})
    .set('.sol-hex', {autoAlpha:0, strokeWidth:1, strokeDasharray:774, strokeDashoffset:774, transformOrigin:'50% 50%', rotate:180})
    .set('.logomark', {autoAlpha:0})
    .set(['.sol-line-0-corr'], {autoAlpha:0, strokeDasharray:256, strokeDashoffset:-256})
    .set(['.sol-line-0-rhyt'], {autoAlpha:0, strokeDasharray:256, strokeDashoffset:256})
    .set(['.sol-line-60-vibr'], {autoAlpha:0, strokeDasharray:256, strokeDashoffset:-256})
    .set(['.sol-line-60-caus'], {autoAlpha:0, strokeDasharray:256, strokeDashoffset:256})
    .set(['.sol-line-120-pola'], {autoAlpha:0, strokeDasharray:256, strokeDashoffset:-256})
    .set(['.sol-line-120-gend'], {autoAlpha:0, strokeDasharray:256, strokeDashoffset:256})
    .set(['.sol-m'], {autoAlpha:0, strokeWidth:1, strokeDasharray:440, strokeDashoffset:-440})
    .set(['.sol-f'], {autoAlpha:0, strokeWidth:1, strokeDasharray:260, strokeDashoffset:260})
    .to('.sol-ment', {strokeDashoffset:0, duration:5})
    .to('.sol-rhyt', {autoAlpha:1, cx:273, cy:401, duration:3}, '>-1')
    .to('.sol-corr', {autoAlpha:1, cx:273, cy:145, duration:3}, '<')
    .set('.sol-care', {autoAlpha:1, strokeDasharray:1608, strokeDashoffset:1608, rotate:-90})
    .to('.sol-care', {strokeDashoffset:0, duration:4}, '<')
    .to('.sol-caus', {autoAlpha:1, cx:162, cy:337, duration:2.5}, '<+2')
    .to('.sol-vibr', {autoAlpha:1, cx:384, cy:209, duration:2.5}, '<')
    .to('.sol-pola', {autoAlpha:1, cx:384, cy:337, duration:2}, '<+2')
    .to('.sol-gend', {autoAlpha:1, cx:162, cy: 209, duration:2}, '<')
    .to('.sol-line', {autoAlpha:1, strokeDasharray:256, strokeDashoffset:0, stagger: 0.1, duration:1}, '>-2')
    .to('.sol-hex', {autoAlpha:1, strokeDashoffset:1548, duration:5.5}, '<')
    .to(['.oval', '.sol-line'], {autoAlpha:1, duration:3}, '>')
    .to('.sol-m', {autoAlpha:1, strokeDashoffset:0, duration:4}, '<-1')
    .to('.sol-f', {autoAlpha:1, strokeDashoffset:0, duration:3}, '<1')
    .to('.logomark', {autoAlpha:1, duration: 2}, '>')
    // Done
    // Option 1:
    .to('.sol-line', {autoAlpha:0, strokeDasharray:256, strokeDashoffset:-256, stagger: 0.25, duration:2}, '<-1')
    .to('.oval', {autoAlpha:0, duration:5}, '<')
    // Option 2:
    // .set(['.sol-hex', '.sol-m', '.sol-f'], {autoAlpha:0})
    // .to('.logomark', {autoAlpha:0, duration:1, delay:5}, '>')

})

</script>