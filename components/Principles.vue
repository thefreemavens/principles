<template>
  <div class="relative">
    <!-- ///////////////////////////////////////////////////////////////////////////// -->
    <!-- PageNav -->
    <ul class="fixed top-0 end-0 z-30">
      <!-- Open/Close INFO_PANEL -->
      <li>
        <!-- v-show="appScroll < 34 && appScroll > 3" -->
        <button
          :disabled="appScroll < 34 && appScroll > 3 ? !isDisabled : isDisabled"
          class="
            w-12 h-12
            flex justify-center items-center
            hover:bg-grey-100 dark:hover:bg-grey-900
            transition-colors duration-200
            disabled:opacity-30
            "
          @click="isOpen = !isOpen"
        >
          <span class="text-base">
            {{ isOpen? arrowSymbolClose : arrowSymbolOpen }}
          </span>
        </button>
      </li>
      <!-- Principles -->
      <li
        v-for="(principle, index) in principles" :key="index"
        class="
          group
          opacity-80
          hover:opacity-100
          hover:bg-grey-200/80
          dark:hover:bg-grey-800/80
          transition-colors
          duration-[2222ms]
          hover:duration-200
        ">
        <button @click="$lenis.scrollTo('#' + principle.title, {duration: 2})">
          <span class="flex justify-center items-center w-12 h-12">
            <AppPicon :name="principle.title" variation="base" size="w-[18px] h-[18px] scale-[0.75] group-hover:scale-110 duration-200 ease-in-out"/>
          </span>
        </button>
      </li>
    </ul>

    <!-- ///////////////////////////////////////////////////////////////////////////// -->
    <!-- INFO_PANEL: Button -->
    <!-- <AppArrowButton v-show="sLog == '-> Principles'" v-model:isOpen="isOpen" /> -->
    <!-- <button v-show="appScroll < 34 && appScroll > 3" class="fixed end-0 top-0 z-30 w-12 h-12 flex justify-center items-center bg-grey-50 dark:bg-grey-950 hover:bg-grey-100 dark:hover:bg-grey-900 transition-colors duration-200" @click="isOpen = !isOpen">
      <span class="text-base"> {{ isOpen? arrowSymbolClose : arrowSymbolOpen }} </span>
    </button> -->

    <!-- ///////////////////////////////////////////////////////////////////////////// -->
    <!-- INFO_PANEL: Start -->
    <Transition
      enter-active-class="transition-opacity duration-300 ease-in-out"
      leave-active-class="transition-opacity duration-300 ease-in-out"
      enter-from-class="opacity-0"
      leave-to-class="opacity-0"
    >
      <div
      v-show="appScroll < 34 && appScroll > 2.2 && isOpen"
      class="
      panel
      fixed
      z-10
      w-[80vw]
      sm:w-[70vw]
      md:w-[61.8vw]
      lg:w-[50.04vw]
      h-screen
      end-0
      lg:start-[49.96vw]
      flex
      flex-col
      py-6
      px-6
      md:px-8
      lg:px-8
      dark:bg-grey-975/95
      bg-white/95
      backdrop-filter
      backdrop-blur-[10px]
      [@supports(backdrop-filter:blur(0px))]:bg-white/80
      [@supports(backdrop-filter:blur(0px))]:dark:bg-grey-975/80
    ">
      <!-- <div class="flex mb-32"> -->
        <!-- <span v-if="principleIndex >= 0" class="flex-1 text-2xs -mt-2">INIT -> 10{{ principleIndex + 1 }}</span> -->
        <!-- <span v-else class="flex-1 text-2xs -mt-2">INIT -></span> -->
        <!-- <span v-else class="flex-1 text-2xs invisible md:visible">INIT -//-> Function deOccult()</span> -->
        <!-- <span v-show="principleIndex >= 0" class="flex-1 text-2xs invisible md:visible">Deocculting now:<br> {{  appScroll }}</span> -->
        <!-- <span v-show="principleIndex < 0" class="flex-1 text-2xs"><AppTime /></span> -->
      <!-- </div> -->
      <!-- ///////////////////////////////////////////////////////////////////////////// -->
      <!-- INFO_PANEL: Nav: Back -->
      <nav class="tl opacity-0 relative z-50 flex-none">
        <div class="mt-10 mb-16">
          <div class="flex-1 text-2xs">
            <!-- v-show="prevPrinciple.title" -->
            <button
              size="2xs"
              class="border-b border-transparent hover:border-black dark:hover:border-white"
              @click="$lenis.scrollTo('#' + prevPrinciple.title, {duration: 2})"
            >
              {{ prevPrinciple.title? '↑ ' + prevPrinciple.title : ''}}
            </button>
          </div>
        </div>
      </nav>
      

      <!-- ///////////////////////////////////////////////////////////////////////////// -->
      <!-- INFO_PANEL: Title -->
      <h2
      class="
        grow
        h-full
        opacity-0
        text-4xl
        sm:text-4xl
        md:text-5xl
        lg:text-6xl
        xl:text-7xl
        2xl:text-8xl
        text-grey-975
        dark:text-white
        font-thin
        tracking-tight
        whitespace-nowrap
        ">
        {{ !cp?'':cp.title }}
        <sup
        class="
          align-super
          text-xl
          sm:text-2xl
          md:text-3xl
          lg:text-4xl
          xl:text-5xl
          2xl:text-6xl
          -ms-1
          md:-ms-2
          lg:-ms-4
          ">
            {{ principleIndex + 1 }}
          </sup>
        </h2>

        <!-- ///////////////////////////////////////////////////////////////////////////// -->
        <!-- INFO_PANEL: Desc -->

        <div class="tl opacity-0 flex-none text-grey-975 dark:text-white">

          <!-- INFO_PANEL: Picon -->
          <div class="flex w-24 h-24 md:w-28 md:h-28 mb-8 rounded-[22%] p-4 md:p-5 bg-white/70 dark:bg-black/90 shadow-xl dark:drop-shadow-[0_8px_8px_rgba(0,0,0,0.75)]">
            <svg v-if="cp" class="text-grey-975 dark:text-white fill-current object-contain">
              <use v-bind="{'xlink:href': svgUrl + '#' + cp.title }" />
            </svg>
          </div>

          <!-- INFO_PANEL: Subtitle -->
          <h3 class="mb-4 text-lg xl:text-xl font-bold tracking-tight leading-snug">{{ !cp?'':cp.subTitle }}</h3>
          <!-- INFO_PANEL: Description -->
          <p class="mb-6 text-xs md:text-sm max-w-xl leading-relaxed md:leading-relaxed">{{ !cp?'':cp.desc }}</p>
          
        </div>
        <!-- INFO_PANEL: Navigation -->
        <div class="flex-none tl opacity-0 mt-6 -mb-11">
          <nav class="">
                <button
                  v-show="nextPrinciple.title"
                  size="2xs"
                  class="text-2xs flex border-b border-transparent hover:border-black dark:hover:border-white"
                  @click="$lenis.scrollTo('#' + nextPrinciple.title, {duration: 2})"
                >
                  {{ nextPrinciple.title? '↓ ' + nextPrinciple.title : '' }}
                </button>
          </nav>
        </div>

      <!-- INFO_PANEL: FIN -->
      </div>
    </Transition>

    <!-- ///////////////////////////////////////////////////////////////////////////// -->
    <!-- HERO -->
    
    <section class="
      relative w-screen h-screen items-start
      grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4
      px-16 sm:px-18 md:px-20 lg:px-24 xl:px-28
      gap-2 overflow-clip
    ">
      <!-- <div class="absolute z-20 self-start"> -->
        <AppHero class="col-span-4 absolute top-0 self-end scale-100 z-0" />
      <h1 class="relative z-10 col-span-4 self-start text-grey-975 dark:text-white text-6xl sm:text-7xl md:text-8xl lg:text-9xl xl:text-[9rem] font-thin tracking-tighter leading-[1.1] sm:leading-[1.1] md:leading-[1.1] lg:leading-[1.1] mt-20 transition-transform duration-[2000ms] ease-out"
          :style="{transform: 'skewY(' + appVelocity + 'deg)'}">
        <b class="font-bold">
          --->
          <span class="text-transparent hover:text-grey-975 dark:hover:text-white transition-colors duration-[11111ms] ease-in-out hover:duration-300 cursor-pointer"
            @click="$lenis.scrollTo('footer', {duration: 2})">
            Discover
          </span>
        </b>
        your true power and
        <b class="font-bold text-transparent hover:text-grey-975 dark:hover:text-white transition-colors duration-[11111ms] ease-in-out hover:duration-300 cursor-pointer" @click="$lenis.scrollTo('#Causality', {duration: 3})">learn</b>
        how to 
        <b class="font-bold text-transparent hover:text-grey-975 dark:hover:text-white transition-colors duration-[11111ms] ease-in-out hover:duration-300 cursor-pointer" @click="$lenis.scrollTo('#SeedOfLife', {duration: 6})">use</b> 
        it
      </h1>
      <!-- </div> -->
    </section>
    
    <!-- ///////////////////////////////////////////////////////////////////////////// -->
    <!-- MAIN: Titles -->
    <div v-show="!isOpen" class="fixed top-0 w-screen h-screen flex justify-center items-center mt-screen">
      <h2 class="mt-16 opacity-0 text-6xl sm:text-7xl md:text-8xl lg:text-9xl text-black dark:text-white font-thin tracking-tight mix-blend-difference pointer-events-none transition-transform duration-[1600ms] ease-out"
    :style="{transform: 'skewY(' + (appVelocity) + 'deg)'}
    ">
        {{ !cp?'':cp.title }}
      </h2>
    </div>

    <!-- ///////////////////////////////////////////////////////////////////////////// -->
    <!-- MAIN: Principles -->
    <section
      v-for="(principle, index) in principles" :key="index"
      :id="principle.title"
      class="
        principle
        w-screen
        h-screen
        grid
        grid-cols-1
        justify-items-center
        items-center
        mix-blend-difference
        dark:mix-blend-difference
        mt-96
      ">
      <svg class="text-white fill-current w-[88%] h-[88%]">
        <use v-bind="{'xlink:href': svgUrl + '#' + principle.title }" />
      </svg>
    </section>

    <!-- ///////////////////////////////////////////////////////////////////////////// -->
    <!-- SCENE: Picons -->
    <!-- Optional background: bg-gradient-to-r from-white via-grey-50 to-white -->
    <section id="Picons" class="w-screen relative inline-flex mx-auto overflow-x-clip h-[136vh] lg:h-[160vh] xl:h-[150vh]">
      <AppPicon
        name="Rhythm"
        depth="z-10"
        variation="shadow"
        size="w-48 h-48 md:w-56 md:h-56 lg:w-64 lg:h-64 xl:w-72 xl:h-72"
        shadow="shadow-2xl dark:drop-shadow-[0_20px_20px_rgba(0,0,0,0.95)]"
        blur="blur-[2px]"
        position="top-[10em] left-[-5em] sm:left-[1em] md:left-[4em] lg:left-[10vw]"
        class="flex-1"
      />

      <AppPicon
        name="Mentalism"
        depth="z-20"
        variation="shadow"
        size="w-[20em] h-[20em] md:w-[30em] md:h-[30em] lg:w-[40em] lg:h-[40em]"
        blur="blur-[3px]"
        shadow="shadow-4xl dark:drop-shadow-[0_20px_20px_rgba(0,0,0,0.95)]"
        position="top-[20em] right-[-22vw] sm:right-[-40vw] md:right-[-46vw] lg:right-[-50vw] xl:right-[-60vw]"
      />

      <AppPicon
        name="Polarity"
        depth="z-20"
        variation="shadow"
        size="w-24 h-24 sm:w-32 sm:h-32 lg:w-36 lg:h-36 xl:w-48 xl:h-48"
        blur="blur-[1px]"
        shadow="shadow-lg dark:drop-shadow-[0_5px_5px_rgba(0,0,0,0.95)]"
        position="top-[24em] left-[-24em] sm:left-[-14em] md:left-[-20em] lg:left-[-26em] xl:left-[-15em]"
      />

      <AppPicon
        name="Gender"
        depth="z-10"
        variation="shadow"
        size="w-40 h-40 sm:w-48 sm:h-48 lg:w-56 lg:h-56"
        blur="blur-[1px]"
        shadow="shadow-lg dark:drop-shadow-[0_10px_10px_rgba(0,0,0,0.95)]"
        position="top-[38em] left-[-35em] md:left-[-40em] lg:top-[42em] lg:left-[-50em]"
      />

      <AppPicon
        name="Correspondence"
        depth="z-10"
        variation="shadow"
        size="w-32 h-32 sm:w-56 sm:h-56 lg:w-64 lg:h-64"
        blur="blur-[1px]"
        shadow="shadow-xl dark:drop-shadow-[0_10px_10px_rgba(0,0,0,0.95)]"
        position="top-[47em] left-[-26em] md:top-[54em] md:left-[-30em] lg:top-[68em] lg:left-[-40em] xl:left-[-20em]"
      />
      
      <AppPicon
        name="Vibration"
        depth="z-20"
        variation="shadow"
        size="w-20 h-20 sm:w-32 sm:h-32"
        shadow="shadow-lg"
        blur="blur-[1px] dark:drop-shadow-[0_3px_3px_rgba(0,0,0,0.95)]"
        position="top-[62em] left-[-38em] sm:top-[74em] sm:left-[-35em] lg:top-[80em] xl:top-[90em] xl:left-[-20em]"
      />

      <AppPicon
        name="Causality"
        depth="z-20"
        variation="shadow"
        size="w-[20em] h-[20em] md:w-[24em] md:h-[24em] lg:w-[36em] lg:h-[36em]"
        blur="blur-[3px]"
        shadow="shadow-4xl dark:drop-shadow-[0_30px_30px_rgba(0,0,0,1)]"
        position="top-[55em] left-[-70em] sm:left-[-96em] sm:left-[-92em] lg:top-[60em] lg:left-[-120em]"
      />

    </section>
    
    <!-- ///////////////////////////////////////////////////////////////////////////// -->
    <!-- SCENE: SOL - Seed Of Life -->
    <section class="relative pin-section w-screen flex justify-center items-center h-screen">
      <div class="pin-container relative">

        <div class="pin-icon relative z-20">
          <!-- <div class="pin-icon-shadow-black absolute z-0 rounded-[22%] top-[4%] left-0 dark:bg-black w-48 h-48 lg:w-96 lg:h-96 blur-xl" /> -->
          <div
            class="
              pin-icon-inner
              w-48 h-48 md:w-96 md:h-96
              bg-white dark:bg-grey-975
              relative
              flex
              justify-center
              items-center
              z-10
              p-[17%]
              rounded-[22%]
              border
              border-grey-100
              dark:border-gray-950
              bg-gradient-to-br
              from-grey-50
              to-white
              dark:bg-gradient-to-br
              dark:from-grey-975
              dark:to-black
              shadow-3xl
              dark:drop-shadow-[0_20px_20px_rgba(0,0,0,0.95)]
          ">
          </div>
          <svg
            class="absolute top-0 scale-[0.66] rotate-[30deg] stroke-[2] fill-none z-10 text-white/60 dark:text-black/60 stroke-black dark:stroke-white origin-center object-contain w-48 h-48 md:w-96 md:h-96"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            viewBox="0 0 546 546"
          >
            <ellipse class="circle circle-lg stroke-[32]" rx="256" ry="256" cx="273" cy="273"/>
            <ellipse class="circle circle-sm" rx="128" ry="128" cx="273" cy="273"/>
            <ellipse class="circle circle-sm" rx="128" ry="128" cx="209" cy="162.148"/>
            <ellipse class="circle circle-sm" rx="128" ry="128" cx="337" cy="162.148"/>
            <ellipse class="circle circle-sm" rx="128" ry="128" cx="401" cy="273"/>
            <ellipse class="circle circle-sm" rx="128" ry="128" cx="337" cy="383.851"/>
            <ellipse class="circle circle-sm" rx="128" ry="128" cx="209" cy="383.851"/>
            <ellipse class="circle circle-sm" rx="128" ry="128" cx="145" cy="273"/>

            <ellipse id="solCare" class="invisible fill-none" rx="256" ry="256" cx="273" cy="273"/>
            <ellipse id="solMent" class="invisible fill-current" rx="128" ry="128" cx="273" cy="273"/>
            <ellipse id="solCorr" class="invisible fill-current" rx="128" ry="128" cx="209" cy="162.148"/>
            <ellipse id="solVibr" class="invisible fill-current" rx="128" ry="128" cx="337" cy="162.148"/>
            <ellipse id="solPola" class="invisible fill-current" rx="128" ry="128" cx="401" cy="273"/>
            <ellipse id="solRhyt" class="invisible fill-current" rx="128" ry="128" cx="337" cy="383.851"/>
            <ellipse id="solCaus" class="invisible fill-current" rx="128" ry="128" cx="209" cy="383.851"/>
            <ellipse id="solGend" class="invisible fill-current" rx="128" ry="128" cx="145" cy="273"/>

          </svg>

          <!-- P1 -->
          <div id="SeedOfLife" class="sol-picon-ment absolute top-[43.6%] left-[43.6%] md:top-[44%] md:left-[44%] z-10 invisible">
            <AppPicon
              name="Mentalism"
              variation="base"
              size="w-6 h-6 md:w-12 md:h-12"
            />
          </div>
          <!-- P2 -->
          <div class="sol-picon-corr absolute top-[28%] left-[43.6%] md:top-[28%] md:left-[44%] z-10 invisible scale-95">
            <AppPicon
              name="Correspondence"
              variation="base"
              size="w-6 h-6 md:w-12 md:h-12"
            />
          </div>
          <!-- P3 -->
          <div class="sol-picon-vibr absolute top-[36%] left-[57.6%] md:top-[36%] md:left-[57.185%] z-10 invisible scale-105">
            <AppPicon
              name="Vibration"
              variation="base"
              size="w-6 h-6 md:w-12 md:h-12"
            />
          </div>
          <!-- P4 -->
          <div class="sol-picon-pola absolute top-[51.5%] left-[57.5%] md:top-[51.5%] md:left-[57.25%] z-10 invisible">
            <AppPicon
              name="Polarity"
              variation="base"
              size="w-6 h-6 md:w-12 md:h-12"
            />
          </div>
          <!-- P5 -->
          <div class="sol-picon-rhyt absolute top-[59.25%] left-[43.6%] md:top-[59%] md:left-[44%] z-10 invisible">
            <AppPicon
              name="Rhythm"
              variation="base"
              size="w-6 h-6 md:w-12 md:h-12"
            />
          </div>
          <!-- P6 -->
          <div class="sol-picon-caus absolute top-[51.45%] left-[30.25%] md:top-[51.5%] md:left-[30.5%] z-10 invisible">
            <AppPicon
              name="Causality"
              variation="base"
              size="w-6 h-6 md:w-12 md:h-12"
            />
          </div>
          <!-- P7 -->
          <div class="sol-picon-gend absolute top-[36.125%] left-[30.25%] md:top-[36%] md:left-[30.1%] z-10 invisible">
            <AppPicon
              name="Gender"
              variation="base"
              size="w-6 h-6 md:w-12 md:h-12"
            />
          </div>
          <!-- P8: No small icon shown, excluded -->

          <!-- SOL Titles -->
          <div class="absolute bottom-4 md:bottom-8 w-full text-center text-[0.5rem] md:text-2xs tracking-[0.125rem] md:tracking-[0.25rem] uppercase ms-1 lg:ms-1">
            <h4 class="invisible absolute w-full sol-title-ment">Mentalism</h4>
            <h4 class="invisible absolute w-full sol-title-corr">Correspondence</h4>
            <h4 class="invisible absolute w-full sol-title-vibr">Vibration</h4>
            <h4 class="invisible absolute w-full sol-title-pola">Polarity</h4>
            <h4 class="invisible absolute w-full sol-title-rhyt">Rhythm</h4>
            <h4 class="invisible absolute w-full sol-title-caus">Causality</h4>
            <h4 class="invisible absolute w-full sol-title-gend">Gender</h4>
            <h4 class="invisible absolute w-full sol-title-care">Care</h4>
          </div>


        </div>
      </div>
    </section>
  
  </div>
</template>

<script setup lang="js">
// -------------------------------------------------------->
// Setup
import svgUrl from '~/assets/svg/icons/picons-xl.svg'
const { $gsap, $lenis } = useNuxtApp()
const appScroll = useState('appScroll', () => false)
const appVelocity = useState('appVelocity', () => Math.round())
const principles = usePrinciples()
const principleIndex = ref(Number)
const arrowSymbolClose = '-->'
const arrowSymbolOpen = '<--'
const isDisabled = ref(true)

// computed / current principle (cp)
const cp = computed({
  get() {
    return principles.value[principleIndex.value]
  },
  set(newValue) {
    principles.value[principleIndex.value ] = newValue
  }
})

// COMPUTED: Previous principle
const prevPrinciple = computed({
  get() {
    if (principleIndex.value >= 1 ) {
      return principles.value[principleIndex.value - 1]
    } else {
      return ''
    }
  },
  set(newValue) {
    principles.value[principleIndex.value - 1] = newValue
  }
})

// COMPUTED: Next principle
const nextPrinciple = computed({
  get() {
    if (principleIndex.value <= 6 ) {
      return principles.value[principleIndex.value + 1]
    } else {
      return ''
    }
  },
  set(newValue) {
    principles.value[principleIndex.value + 1] = newValue
  }
})

function setNextPrinciple() {
  principleIndex.value >= 0 ? principleIndex.value++ : principleIndex.value = 0  
}

function setPrevPrinciple() {
  principleIndex.value--
}


// -------------------------------------------------------->
// INFO__PANEL: Animation
const isOpen = ref()

function setIsOpen() {
  principleIndex.value == 7 ? isOpen.value = false : ''
}

// computed / current principle (cp)
// const sLog = computed({
//   get() {
//     if (appScroll.value < 3) {
//       return 'INIT -->'
//     } else if (appScroll.value < 34) {
//       return '--> Principles'
//     } else if (appScroll.value < 42.5) {
//       return '--> Picons'
//     } else if (appScroll.value < 97) {
//       return '--> Seed of Life'
//     } else if (appScroll.value < 100) {
//       return '--> TFM'
//     } else if (appScroll.value = 100) {
//       return '--> FIN'
//     } else {
//       return 'INIT -->'
//     } 
//   },
//   set(newValue) {
//     newValue = newValue
//     // appScroll.value > 0 ? 'Init Principles' === newValue : 'Init --->' === newValue
//   }
// })



onMounted(() => {

  isOpen.value = true
  appScroll.value = 0


  // -------------------------------------------------------->
  // TESTS
  // console.log(gsap.getProperty())
  // gsap.to('.panel', {x: '50vw', duration: 0.66, ease: 'super3'})
    // console.log(headlineChars)
  // -------------------------------------------------------->
  // MISC

  // -------------------------------------------------------->
  // TIMELINE: PRINCIPLES

  const principles = $gsap.utils.toArray(".principle")
  
  principles.forEach(principle => {
    let tl = $gsap.timeline({
      scrollTrigger: {
        trigger: principle,
        once: false,
        start: 'top 50%',
        end: 'bottom 50%',
        scrub: true,
        preventOverlaps: true,
        fastScrollEnd: true,
        onEnter: () => setNextPrinciple(),
        onLeaveBack: () => setPrevPrinciple(),
        onLeave: () => setIsOpen(),
        // onUpdate: (self) => appScrollLenis(self),
        // onScrubComplete: ({progress, direction, isActive}) => console.log(progress, direction, isActive)
        // toggleClass: {targets: "h2", className: "active"},
        // pin: '.pin',
        // markers: true,
      }
    })

    tl.to(['h2', '.tl'], { autoAlpha: 1, duration: 5, y: -50, ease: 'power2' })
      .to(['h2', '.tl'], { autoAlpha: 0, duration: 1, ease: 'power2' })
      .to(['h2', '.tl'], { duration: 0.01, y: 75, })
  })

  // Seed Of Life: Trigger
  let ctl = $gsap.timeline({
    scrollTrigger: {
      trigger: ".pin-section",
      start: "center center", 
      end: "+=2000%",
      once: false,
      pin: true,
      // pinSpacing: false,
      scrub: 1,
      onEnter: () => setIsOpen()
    }
  })

  // -------------------------------------------------------->
  // TIMELINE: SEED OF LIFE

  ctl.set('.pin-icon-inner', { boxShadow: '0px 25px 25px 0 rgb(0 0 0 / 0.15)', autoAlpha: 1 }, 0)
    .set('.circle-sm', {autoAlpha:0, strokeWidth:0, strokeDasharray: 804, strokeDashoffset: 804 })
    .to('.pin-icon-shadow-black', { autoAlpha: 0, delay: '-=2.675', ease: 'power1'})
    .to('.pin-icon-inner', { boxShadow: '0px 0px 0px 0 rgb(0 0 0 / 0.15)', autoAlpha: 0, borderRadius: '50%', duration: 0.675 }, 0)
    .to('.pin-icon', { scale: 1.6, ease: 'power1', delay: '-=1', autoAlpha: 1, borderRadius: '50%', duration: 1.675}, 0)
    .to('.circle-lg', { ease: 'slow', delay: '-=1', strokeWidth: 4, duration: 1}, 0)
    .to('.circle-sm', {
      // scale: .9,
      transformOrigin: 'center',
      strokeDashoffset: 0,
      strokeDasharray: 804,
      strokeWidth:2,
      autoAlpha: 1,
      stagger: {
          autoAlpha: 1,
          each: 0.25,
          ease: 'linear',
          from: 'end'
        }
      }, 0.5)
    .to('.circle', { autoAlpha: 0.2, ease: 'power2', duration: 1.5 }, '=-0.5')
    // P1
    .to('#solMent', { autoAlpha: 1, strokeWidth: 16, ease: 'power2' },'<')
    .to(['.sol-picon-ment', '.sol-title-ment'], { autoAlpha: 1, ease: 'slow', duration: 0.66 },'<+0.2')
    .to(['#solMent', '.sol-picon-ment', '.sol-title-ment'], { autoAlpha: 0, delay: 0.5, ease: 'power2' })
    // P2
    .to('#solCorr', { autoAlpha: 1, strokeWidth: 16, ease: 'power2' },'<')
    .to(['.sol-picon-corr', '.sol-title-corr'], { autoAlpha: 1, ease: 'slow', duration: 0.66 },'<+0.2')
    .to(['#solCorr', '.sol-picon-corr', '.sol-title-corr'], { autoAlpha: 0, delay: 0.5, ease: 'power2' })
    // P3
    .to('#solVibr', { autoAlpha: 1, strokeWidth: 16, ease: 'power2' },'<')
    .to(['.sol-picon-vibr', '.sol-title-vibr'], { autoAlpha: 1, ease: 'slow', duration: 0.66 },'<+0.2')
    .to(['#solVibr', '.sol-picon-vibr', '.sol-title-vibr'], { autoAlpha: 0, delay: 0.5, ease: 'power2' })
    // P4
    .to('#solPola', { autoAlpha: 1, strokeWidth: 16, ease: 'power2' },'<')
    .to(['.sol-picon-pola', '.sol-title-pola'], { autoAlpha: 1, ease: 'slow', duration: 0.66 },'<+0.2')
    .to(['#solPola', '.sol-picon-pola', '.sol-title-pola'], { autoAlpha: 0, delay: 0.5, ease: 'power2' })
    // P5
    .to('#solRhyt', { autoAlpha: 1, strokeWidth: 16, ease: 'power2' },'<')
    .to(['.sol-picon-rhyt', '.sol-title-rhyt'], { autoAlpha: 1, ease: 'slow', duration: 0.66 },'<+0.2')
    .to(['#solRhyt', '.sol-picon-rhyt', '.sol-title-rhyt'], { autoAlpha: 0, delay: 0.5, ease: 'power2' })
    // P6
    .to('#solCaus', { autoAlpha: 1, strokeWidth: 16, ease: 'power2' },'<')
    .to(['.sol-picon-caus', '.sol-title-caus'], { autoAlpha: 1, ease: 'slow', duration: 0.66 },'<+0.2')
    .to(['#solCaus', '.sol-picon-caus', '.sol-title-caus'], { autoAlpha: 0, delay: 0.5, ease: 'power2' })
    // P7
    .to('#solGend', { autoAlpha: 1, strokeWidth: 16, ease: 'power2' },'<')
    .to(['.sol-picon-gend', '.sol-title-gend'], { autoAlpha: 1, ease: 'slow', duration: 0.66 },'<+0.2')
    .to(['#solGend', '.sol-picon-gend', '.sol-title-gend'], { autoAlpha: 0, delay: 0.5, ease: 'power2' })
    // P8
    .to('#solCare', { autoAlpha: 1, strokeWidth: 32, ease: 'power2', duration: 1 },'<')
    .to(['.sol-title-care'], { autoAlpha: 1, ease: 'slow', duration: 0.66 },'<+0.2')
    .to(['.sol-title-care'], { autoAlpha: 0, delay: 0.5, ease: 'power2' })
    .to('.circle-sm', {
    // scale: .9,
      transformOrigin: 'center',
      strokeDashoffset: 0,
      strokeDasharray: 804,
      strokeWidth: 12,
      autoAlpha: 1,
      // ease: 'linear',
      stagger: {
        autoAlpha: 1,
        // scale:1,
        each: 0.25,
        ease: 'slow',
        from: 'start'
      }}, '<')
    .to('#solCare', { autoAlpha: 1, strokeWidth: 12, ease: 'power2', duration:1 },'<')
    .to('.circle-sm', { autoAlpha: 0, strokeWidth: 2, ease: 'power2.out', duration: 5, scale: 1.15, delay: 0.5 }, '<2')
    .to('.circle-lg', { autoAlpha: 1, ease: 'power2.out', delay: '-=1', strokeWidth: 32, duration: 3}, '<')
    .to('.pin-icon', { scale: 0.8, ease: 'power1.in', delay: '+=1', autoAlpha: 1, borderRadius: '22%', duration: 3}, '<+2')
    .to('.pin-icon-inner', { boxShadow: '0 20px 25px -5px rgb(0 0 0 / 0.1)', autoAlpha: 1, borderRadius: '22%', duration: 3, ease: 'power4.in' }, '<-1')



  })

</script>


