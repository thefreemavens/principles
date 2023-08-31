<template>

  <main class="relative">

    <div class="fixed w-screen h-screen flex justify-center items-center">
      <h2 class="opacity-0 text-4xl sm:text-6xl md:text-7xl lg:text-8xl text-black dark:text-white font-thin tracking-tight mix-blend-difference pointer-events-none">
        {{ currentPrinciple }}
      </h2>
    </div>

    <section class="w-screen h-screen grid grid-cols-1 justify-items-center items-center mix-blend-difference dark:mix-blend-difference" />

    <!-- 1. Mentalism -->
    <section
      id="mentalismSection"
      class="section w-screen h-screen grid grid-cols-1 justify-items-center items-center mix-blend-difference dark:mix-blend-difference mt-96">
      <svg class="text-white fill-current w-[88%] h-[88%]">
        <use xlink:href="~/assets/svg/icons/picons-xl.svg#Mentalism" />
      </svg>
    </section>


    <!-- 2. Correspondence -->
    <section
      id="correspondenceSection"
      class="section w-screen h-screen flex justify-center items-center mix-blend-difference dark:mix-blend-difference mt-96">
      <svg class="text-white fill-current w-[88%] h-[88%]">
        <use xlink:href="~/assets/svg/icons/picons-xl.svg#Correspondence" />
      </svg>
    </section>

    <!-- 3. Vibration -->
    <section
      id="vibrationSection"
      class="section w-screen h-screen flex justify-center items-center mix-blend-difference dark:mix-blend-difference mt-96">
      <svg class="text-white fill-current w-[88%] h-[88%]">
        <use xlink:href="~/assets/svg/icons/picons-xl.svg#Vibration" />
      </svg>
    </section>

    <!-- 4. Polarity -->
    <section
      id="polaritySection"
      class="section w-screen h-screen flex justify-center items-center mix-blend-difference dark:mix-blend-difference mt-96">
      <svg class="text-white fill-current w-[88%] h-[88%]">
        <use xlink:href="~/assets/svg/icons/picons-xl.svg#Polarity" />
      </svg>
    </section>

    <!-- 5. Rhythm -->
    <section
      id="rhythmSection"
      class="section w-screen h-screen flex justify-center items-center mix-blend-difference dark:mix-blend-difference mt-96">
      <svg class="text-white fill-current w-[88%] h-[88%]">
        <use xlink:href="~/assets/svg/icons/picons-xl.svg#Rhythm" />
      </svg>
    </section>

    <!-- 6. Causality -->
    <section
      id="causalitySection"
      class="section w-screen h-screen flex justify-center items-center mix-blend-difference dark:mix-blend-difference mt-96">
      <svg class="text-white fill-current w-[88%] h-[88%]">
        <use xlink:href="~/assets/svg/icons/picons-xl.svg#Causality" />
      </svg>
    </section>

    <!-- 7. Gender -->
    <section
      id="genderSection"
      class="section w-screen h-screen flex justify-center items-center mix-blend-difference dark:mix-blend-difference mt-96">
      <svg class="text-white fill-current w-[88%] h-[88%]">
        <use xlink:href="~/assets/svg/icons/picons-xl.svg#Gender" />
      </svg>
    </section>

    <!-- 8. Care -->
    <section
      id="careSection"
      class="section w-screen h-screen flex justify-center items-center mix-blend-difference dark:mix-blend-difference mt-96 mb-[56em]">
      <svg class="text-white fill-current w-[88%] h-[88%]">
        <use xlink:href="~/assets/svg/icons/picons-xl.svg#Care" />
      </svg>
    </section>
  </main>
</template>

<script setup lang="js">
const { $gsap, $ScrollTrigger } = useNuxtApp()
const gsap = $gsap
const ScrollTrigger = $ScrollTrigger

const principles = ref([ '', 'Mentalism', 'Correspondence', 'Vibration', 'Polarity', 'Rhythm', 'Causality', 'Gender', 'Care' ])
const principleIndex = ref(0)

const currentPrinciple = computed({
  get() {
    return principles.value[principleIndex.value]
  },
  set(newValue) {
    principles.value[principleIndex.value] = newValue
  }
})

function setNextPrinciple() {
  principleIndex.value++
}

function setPrevPrinciple() {
  principleIndex.value--
}

onMounted(() => {
  // -------------------------------------------------------->
  // TESTS

  // -------------------------------------------------------->
  // TIMELINE

  const sections = gsap.utils.toArray(".section")
  
  sections.forEach(section => {
    let tl = gsap.timeline({
      scrollTrigger: {
        trigger: section,
        once: false,
        start: 'top 50%',
        end: 'bottom 50%',
        scrub: true,
        preventOverlaps: true,
        fastScrollEnd: true,
        onEnter: () => setNextPrinciple(),
        onLeaveBack: () => setPrevPrinciple(),
        // toggleClass: {targets: "h2", className: "active"},
        // pin: '.pin',
        // markers: true,
      }
    })

    tl.to('h2', { autoAlpha: 1, duration: 5, y: -50, ease: 'power2' })
      .to('h2', { autoAlpha: 0, duration: 1, ease: 'power2' })
      .to('h2', { duration: 0.01, y: 50, })
  })

})
</script>

