<template>
  <section>
    <p>Section</p>
  </section>
  <section>
    <p>Section</p>
  </section>
  <section class="pin-section">
    <div class="pin-icon">
        <AppPicon
          name="Care"
          depth="z-50"
          variation="shadow"
          size="w-96 h-96"
          blur="blur-[0px]"
          position="auto"
        />
      </div>
  </section>
  <section>
    <p>Section</p>
  </section>
  <section>
    <p>Section</p>
  </section>
  <section>
    <p>Section</p>
  </section>
</template>

<script setup lang="ts">
// import { _rotate } from '#tailwind-config/theme';

const { $gsap, $ScrollTrigger } = useNuxtApp()
// let scrollTrigger = $ScrollTrigger

// let tl = $gsap.timeline({
//   scrollTrigger: {
//       trigger: ".pin-section",
//       start: "center center", 
//       end: "+=200%",
//       pin: true,
//       scrub: 1
//     }
// })

onMounted(() => {
  // console.log($gsap)
  // console.log($ScrollTrigger)

  // scrollTrigger.create({
  //   trigger: ".pin-section",
  //   start: "center center", 
  //   end: "+=200%",
  //   pin: true,
  //   scrub: 1
  // })

  let tl = $gsap.timeline({
  scrollTrigger: {
      trigger: ".pin-section",
      start: "center center", 
      end: "+=400%",
      pin: true,
      scrub: 1
    }
})

  tl.to('.pin-icons', {
    scale: 4
  })

})


// tlPin.to('.pin-text', {
//   scale: 2
// })

</script>

<style scoped>
section {
  background: black;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 30px;
  
  &:nth-child(1) {
    background: #6F38C5;
  }
  
  &:nth-child(2) {
    background: #87A2FB;
  }
  
  &:nth-child(3) {
    background: #ADDDD0;
  }
  
  &:nth-child(4) {
    background: #FA7070;
  }
  
  &:nth-child(5) {
    background: #D800A6;
  }
  
  &:nth-child(6) {
    background: #C6EBC5;
  }
  
  &:nth-child(7) {
    background: #A1C298;
  }
}

.pin-section {
  background: white !important;
  color: black !important;
}
</style>