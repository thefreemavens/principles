<template>
  <section class="w-full h-full flex justify-center items-center">
    <div class="
      flex
      flex-wrap
      justify-between items-center
      px-0
      font-display
      text-grey-975  dark:text-white
      text-6xl
      w-[70vw] h-[70vh]
    ">
    <!-- text-6xl sm:text-7xl md:text-8xl lg:text-9xl xl:text-[9rem] -->
      <span
        v-for="(headlineChar, index) in headlineChars" :key="index"
        class="w-[5vw] mx-2">
        {{ headlineChar }}
      </span>
      <!-- <span class="font-display">-></span> -->
    </div>
  </section>
  <!-- <h1 class="ps-24 font-display text-grey-975 dark:text-white text-6xl sm:text-7xl md:text-8xl lg:text-9xl xl:text-[9rem]">
    DiscoVeR YouR trUe pOWeR And how tO Use it
  </h1> -->
  <!-- <h1 class="scale-75 text-grey-975 dark:text-white text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-thin tracking-tighter leading-10">
  <b class="font-bold">
    ->
    <span class="text-white hover:text-grey-975 dark:text-grey-975 dark:hover:text-white transition-colors duration-[11111ms] ease-in-out hover:duration-300 cursor-pointer"
      @click="$lenis.scrollTo('#footer', {duration: 2})">
      Discover
    </span>
  </b>
  your true power and
  <b class="font-bold text-white hover:text-grey-975 dark:text-grey-975 dark:hover:text-white transition-colors duration-[11111ms] ease-in-out hover:duration-300 cursor-pointer" @click="$lenis.scrollTo('#Causality', {duration: 3})">learn</b>
  how to 
  <b class="font-bold text-white hover:text-grey-975 dark:text-grey-975 dark:hover:text-white transition-colors duration-[11111ms] ease-in-out hover:duration-300 cursor-pointer" @click="$lenis.scrollTo('#SeedOfLife', {duration: 6})">use</b> 
  it
  </h1> -->

  <!-- ///////////////////////////////////////////////////////////////////////////// -->
  <!-- HERO -->
  <section class="w-screen h-screen grid grid-cols-2 gap-6 items-start relative z-10">
    <div class="flex flex-col justify-center items-center bg-white dark:bg-grey-975 h-full">
      <AppLogomark
        title="The Free Mavens"
        class="relative -top-24 w-72 h-72"
      />
      <h3
        class="absolute bottom-6 font-bold mb-6 tracking-widest uppercase text-base text-grey-200 dark:text-grey-800"
      >
        Worldwide
      </h3>
    </div>


    <h1 class="scale-75 text-grey-975 dark:text-white text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-thin tracking-tighter leading-10">
      <b class="font-bold">
      --->
        <span class="text-white hover:text-grey-975 dark:text-grey-975 dark:hover:text-white transition-colors duration-[11111ms] ease-in-out hover:duration-300 cursor-pointer"
          @click="$lenis.scrollTo('#footer', {duration: 2})">
          Discover
        </span>
      </b>
      your true power and
      <b class="font-bold text-white hover:text-grey-975 dark:text-grey-975 dark:hover:text-white transition-colors duration-[11111ms] ease-in-out hover:duration-300 cursor-pointer" @click="$lenis.scrollTo('#Causality', {duration: 3})">learn</b>
      how to 
      <b class="font-bold text-white hover:text-grey-975 dark:text-grey-975 dark:hover:text-white transition-colors duration-[11111ms] ease-in-out hover:duration-300 cursor-pointer" @click="$lenis.scrollTo('#SeedOfLife', {duration: 6})">use</b> 
      it
    </h1>
  </section>
</template>

<script setup>
const headline = 'Di§c@VeR YouR trUœ ₧OWeR And ŀeARN ħōW t0 Us€ i₺ '
let headlineChars = headline.split('')

</script>