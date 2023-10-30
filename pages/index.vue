<template>

  <!-- Colums grid  -->
  <div class="grid fixed z-0 grid-cols-1 gap-2 px-16 w-screen h-screen sm:grid-cols-2 lg:grid-cols-4 sm:px-18 md:px-20 lg:px-24 xl:px-28">
    <span class="border-x border-grey-100 dark:border-grey-950"/>
    <span class="border-x border-grey-100 dark:border-grey-950"/>
    <span class="border-x border-grey-100 dark:border-grey-950"/>
    <span class="border-x border-grey-100 dark:border-grey-950"/>
  </div>
  <!-- End grid -->

  <main class="pb-64">
    <!-- <span class="fixed top-0 left-24 text-sm">{{ appScroll }}</span> -->
    <!-- ///////////////////////////////////////////////////////////////////////////// -->
    <!-- PageNav -->
    <ul class="fixed top-0 z-30 end-0">
      <!-- Open/Close INFO_PANEL -->
      <li class="group
          opacity-80
          hover:opacity-100
          hover:bg-grey-200/80
          dark:hover:bg-grey-800/80
          transition-colors
          duration-[2222ms]
          hover:duration-200">
        <button @click="isDark = !isDark">
          <span
            :class="{ 'rotate-[360deg]': isDark, 'rotate-0': !isDark }"
            class="flex justify-center items-center w-12 h-12 transition-transform duration-300 ease-out"
          >
            <AppPicon
              name="CustomColorMode"
              variation="base"
              size="w-[18px] h-[18px]"
            />
          </span>
        </button>
      </li>
      <li>
        <!-- v-show="appScroll < 34 && appScroll > 62 -->
        <button
          :disabled="appScroll > 62 && appScroll < 92 ? !isDisabled : isDisabled"
          class="flex justify-center items-center w-12 h-12 transition-colors duration-200 hover:bg-grey-100 dark:hover:bg-grey-900 disabled:opacity-30"
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
    <!-- INFO_PANEL: Start -->
    <Transition
      enter-active-class="transition-opacity duration-300 ease-in-out"
      leave-active-class="transition-opacity duration-300 ease-in-out"
      enter-from-class="opacity-0"
      leave-to-class="opacity-0"
    >
      <div
      v-show="appScroll > 62 && appScroll < 92 && isOpen"
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
        <!-- <span v-if="principleIndex >= 0" class="flex-1 -mt-2 text-2xs">INIT -> 10{{ principleIndex + 1 }}</span> -->
        <!-- <span v-else class="flex-1 -mt-2 text-2xs">INIT -></span> -->
        <!-- <span v-else class="invisible flex-1 text-2xs md:visible">INIT -//-> Function deOccult()</span> -->
        <!-- <span v-show="principleIndex >= 0" class="invisible flex-1 text-2xs md:visible">Deocculting now:<br> {{  appScroll }}</span> -->
        <!-- <span v-show="principleIndex < 0" class="flex-1 text-2xs"><AppTime /></span> -->
      <!-- </div> -->
      <!-- ///////////////////////////////////////////////////////////////////////////// -->
      <!-- INFO_PANEL: Nav: Back -->
      <nav class="relative z-50 flex-none opacity-0 tl">
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
      class="h-full text-4xl font-thin tracking-tight whitespace-nowrap opacity-0 grow sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl text-grey-975 dark:text-white">
        {{ !cp?'':cp.title }}
        <sup
        class="text-xl align-super sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl -ms-1 md:-ms-2 lg:-ms-4">
            {{ principleIndex + 1 }}
          </sup>
        </h2>

        <!-- ///////////////////////////////////////////////////////////////////////////// -->
        <!-- INFO_PANEL: Desc -->

        <div class="flex-none opacity-0 tl text-grey-975 dark:text-white">

          <!-- INFO_PANEL: Picon -->
          <div class="flex w-24 h-24 md:w-28 md:h-28 lg:w-32 lg:h-32 mb-8 rounded-[22%] p-4 md:p-5 bg-white/70 dark:bg-black/90 shadow-xl dark:drop-shadow-[0_8px_8px_rgba(0,0,0,0.75)]">
            <svg v-if="cp" class="object-contain fill-current text-grey-975 dark:text-white">
              <use v-bind="{'xlink:href': svgUrl + '#' + cp.title }" />
            </svg>
          </div>

          <!-- INFO_PANEL: Subtitle -->
          <h3 class="mb-4 text-lg font-bold tracking-tight leading-snug xl:text-xl">{{ !cp?'':cp.subTitle }}</h3>
          <!-- INFO_PANEL: Description -->
          <p class="mb-6 max-w-xl text-xs leading-relaxed md:text-sm md:leading-relaxed">{{ !cp?'':cp.desc }}</p>
          
        </div>
        <!-- INFO_PANEL: Navigation -->
        <div class="flex-none mt-6 -mb-11 opacity-0 tl">
          <nav class="">
                <button
                  v-show="nextPrinciple.title"
                  size="2xs"
                  class="flex border-b border-transparent text-2xs hover:border-black dark:hover:border-white"
                  @click="$lenis.scrollTo('#' + nextPrinciple.title, {duration: 2})"
                >
                  {{ nextPrinciple.title? '↓ ' + nextPrinciple.title : '' }}
                </button>
          </nav>
        </div>

      <!-- INFO_PANEL: FIN -->
      </div>
    </Transition>

    <hr class="border-y border-grey-100 dark:border-grey-950 h-[50px]" />

    <!-- ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////// -->
    <!-- Content -->

    <!-- HERO -->
    <section class="grid grid-cols-1 gap-0 px-16 sm:grid-cols-2 lg:grid-cols-4 sm:px-18 md:px-20 lg:px-24 xl:px-28">

      <!-- HERO: Arrow -->
      <div class="col-span-2">
          <!-- <MotionHero class="top-[22vh] left-0"/> -->
          <span
          class="font-bold text-7xl transition-transform duration-[1600ms] ease-out"
          :style="{transform: 'skewY(' + appVelocity + 'deg)'}"
          >
          --->
        </span>
      </div>

      <div class="col-span-4 absolute z-0 top-[40vh] lg:top-[3vh] left-0 right-0">
        <MotionSeed
          class="
            transition-transform duration-[1600ms] ease-out
            scale-90 lg:scale-75"
          />
      </div>
      <!-- HERO: Title Uno -->
      <div class="col-span-2">
        <h1
          :style="{transform: 'skewY(' + appVelocity + 'deg)'}"
          class="
            transition-transform duration-[1600ms] ease-out
            mt-32 lg:mt-4
            font-bold
            lowercase
            text-white
            text-6xl sm:text-7xl md:text-8xl lg:text-7xl xl:text-8xl
            tracking-tighter
            mix-blend-difference
        ">
          Discover your true power and learn how to use it<br >
        </h1>
      </div>


      <!-- Hero: Title Duo -->
      <div class="flex relative col-span-4">
        <h2 class="mt-[2em] text-left w-full text-[12vw] lg:text-[10.1vw] xl:text-[14.5vw] transition-transform duration-[1600ms] ease-out mix-blend-difference text-white"
        :style="{transform: 'skewY(' + appVelocity + 'deg)'}">Interactively<br>+<br>Responsibly</h2>
      </div>

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
        blur="blur-[0px]"
        position="top-[10em] left-[-5em] sm:left-[1em] md:left-[4em] lg:left-[10vw]"
        class="flex-1"
      />

      <AppPicon
        name="Mentalism"
        depth="z-20"
        variation="shadow"
        size="w-[20em] h-[20em] md:w-[30em] md:h-[30em] lg:w-[40em] lg:h-[40em]"
        blur="blur-[0px]"
        shadow="shadow-4xl dark:drop-shadow-[0_20px_20px_rgba(0,0,0,0.95)]"
        position="top-[20em] right-[-22vw] sm:right-[-40vw] md:right-[-46vw] lg:right-[-50vw] xl:right-[-60vw]"
      />

      <AppPicon
        name="Polarity"
        depth="z-20"
        variation="shadow"
        size="w-24 h-24 sm:w-32 sm:h-32 lg:w-36 lg:h-36 xl:w-48 xl:h-48"
        blur="blur-[0px]"
        shadow="shadow-lg dark:drop-shadow-[0_5px_5px_rgba(0,0,0,0.95)]"
        position="top-[24em] left-[-24em] sm:left-[-14em] md:left-[-20em] lg:left-[-26em] xl:left-[-15em]"
      />

      <AppPicon
        name="Gender"
        depth="z-10"
        variation="shadow"
        size="w-40 h-40 sm:w-48 sm:h-48 lg:w-56 lg:h-56"
        blur="blur-[0px]"
        shadow="shadow-lg dark:drop-shadow-[0_10px_10px_rgba(0,0,0,0.95)]"
        position="top-[38em] left-[-35em] md:left-[-40em] lg:top-[42em] lg:left-[-50em]"
      />

      <AppPicon
        name="Correspondence"
        depth="z-10"
        variation="shadow"
        size="w-32 h-32 sm:w-56 sm:h-56 lg:w-64 lg:h-64"
        blur="blur-[0px]"
        shadow="shadow-xl dark:drop-shadow-[0_10px_10px_rgba(0,0,0,0.95)]"
        position="top-[47em] left-[-26em] md:top-[54em] md:left-[-30em] lg:top-[68em] lg:left-[-40em] xl:left-[-20em]"
      />
      
      <AppPicon
        name="Vibration"
        depth="z-20"
        variation="shadow"
        size="w-20 h-20 sm:w-32 sm:h-32"
        shadow="shadow-lg dark:drop-shadow-[0_3px_3px_rgba(0,0,0,0.95)]"
        blur="blur-[0px]"
        position="top-[62em] left-[-38em] sm:top-[74em] sm:left-[-35em] lg:top-[80em] xl:top-[90em] xl:left-[-20em]"
      />

      <AppPicon
        name="Causality"
        depth="z-20"
        variation="shadow"
        size="w-[20em] h-[20em] md:w-[24em] md:h-[24em] lg:w-[36em] lg:h-[36em]"
        blur="blur-[0px]"
        shadow="shadow-4xl dark:drop-shadow-[0_30px_30px_rgba(0,0,0,1)]"
        position="top-[55em] left-[-70em] sm:left-[-96em] sm:left-[-92em] lg:top-[60em] lg:left-[-120em]"
      />

    </section>
    
    <!-- ///////////////////////////////////////////////////////////////////////////// -->
    <!-- SCENE: SOL - Seed Of Life -->
    <section class="flex relative justify-center items-center w-screen h-screen pin-section">
      <div class="relative pin-container">

        <div class="relative z-20 pin-icon">
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
            <h4 class="absolute invisible w-full sol-title-ment">Mentalism</h4>
            <h4 class="absolute invisible w-full sol-title-corr">Correspondence</h4>
            <h4 class="absolute invisible w-full sol-title-vibr">Vibration</h4>
            <h4 class="absolute invisible w-full sol-title-pola">Polarity</h4>
            <h4 class="absolute invisible w-full sol-title-rhyt">Rhythm</h4>
            <h4 class="absolute invisible w-full sol-title-caus">Causality</h4>
            <h4 class="absolute invisible w-full sol-title-gend">Gender</h4>
            <h4 class="absolute invisible w-full sol-title-care">Care</h4>
            <h4 class="absolute invisible w-full sol-title-sol">The Seed of Life</h4>
          </div>


        </div>
      </div>
    </section>
    
    <!-- ///////////////////////////////////////////////////////////////////////////// -->
    <!-- MAIN: Titles -->
    <div v-show="!isOpen && appScroll > 62 && appScroll < 92" class="flex fixed top-0 justify-center items-center w-screen h-screen mt-screen">
      <h2 class="mt-12 text-6xl font-thin tracking-tight text-black opacity-0 mix-blend-difference pointer-events-none sm:text-7xl md:text-8xl lg:text-9xl dark:text-white">
      <!-- <h2 class="mt-0 opacity-0 text-6xl sm:text-7xl md:text-8xl lg:text-9xl text-black dark:text-white font-thin tracking-tight mix-blend-difference pointer-events-none transition-transform duration-[1600ms] ease-out"
        :style="{transform: 'skewY(' + (appVelocity) + 'deg)'}
      "> -->
        {{ !cp?'':cp.title }}
      </h2>
    </div>

    <!-- ///////////////////////////////////////////////////////////////////////////// -->
    <!-- MAIN: Principles -->
    <section
      v-for="(principle, index) in principles" :key="index"
      :id="principle.title"
      class="grid grid-cols-1 justify-items-center items-center mt-96 w-screen h-screen mix-blend-difference principle dark:mix-blend-difference">
      <svg class="text-white fill-current w-[88%] h-[88%]">
        <use v-bind="{'xlink:href': svgUrl + '#' + principle.title }" />
      </svg>
    </section>

    <!-- FIN -->
    <div class="grid grid-cols-2 gap-x-2 gap-y-2 px-16 mt-96 sm:px-18 md:px-20 lg:px-24 xl:px-28">

      <div
        class="col-span-1 transition-transform duration-[1600ms] ease-out"
        :style="{transform: 'translateY(' + appVelocity * 20 + 'px)'}"
      >
        <div class="grid grid-cols-1 gap-y-24 justify-items-center md:gap-y-36 lg:gap-y-48">
      
          <AppPicon
            name="Mentalism"
            variation="shadow"
            size="w-24 h-24 sm:w-32 sm:h-32 md:w-48 md:h-48 lg:w-64 lg:h-64"
          />
  
          <AppPicon
            name="Vibration"
            variation="shadow"
            size="w-24 h-24 sm:w-32 sm:h-32 md:w-48 md:h-48 lg:w-64 lg:h-64"
          />
  
          <AppPicon
            name="Rhythm"
            variation="shadow"
            size="w-24 h-24 sm:w-32 sm:h-32 md:w-48 md:h-48 lg:w-64 lg:h-64"
          />
  
          <AppPicon
            name="Gender"
            variation="shadow"
            size="w-24 h-24 sm:w-32 sm:h-32 md:w-48 md:h-48 lg:w-64 lg:h-64"
          />
        
        </div>
      </div>

      <div
        class="col-span-1 transition-transform duration-[1600ms] ease-out"
        :style="{transform: 'translateY(' + appVelocity * 10 + 'px)'}"
        >
        <div class="grid grid-cols-1 gap-y-24 justify-items-center md:gap-y-36 lg:gap-y-48">
  
          <AppPicon
            name="Correspondence"
            variation="shadow"
            size="w-24 h-24 sm:w-32 sm:h-32 md:w-48 md:h-48 lg:w-64 lg:h-64"
          />
  
          <AppPicon
            name="Polarity"
            variation="shadow"
            size="w-24 h-24 sm:w-32 sm:h-32 md:w-48 md:h-48 lg:w-64 lg:h-64"
          />
  
          <AppPicon
            name="Causality"
            variation="shadow"
            size="w-24 h-24 sm:w-32 sm:h-32 md:w-48 md:h-48 lg:w-64 lg:h-64"
          />
  
          <AppPicon
            name="Care"
            variation="shadow"
            size="w-24 h-24 sm:w-32 sm:h-32 md:w-48 md:h-48 lg:w-64 lg:h-64"
          />
        
        </div>
      </div>

      <div class="col-span-2 lg:col-span-1 mt-64 lg:me-12 text-6xl transition-transform duration-[1600ms] ease-out"
        :style="{transform: 'skewY(' + appVelocity + 'deg)'}">
        <div class="transition-transform duration-[1600ms] ease-out"
        :style="{transform: 'translateY(' + appVelocity * 20 + 'px)'}">
        <h3 class="text-6xl">
          Act<br>+<br>Inspire
        </h3>
        <p class="mt-12 text-xl leading-relaxed">
          This presentation was made with true love and care in effort to inspire others to learn and act upon this utmost important knowledge; and by doing so, promoting true freedom.
        </p>
        <NuxtLink to="https://thefreemavens.org/knowledge/the-great-work" class="text-3xl text-white hover:text-white bg-grey-975 dark:text-black dark:hover:text-black dark:bg-white">Learn More --></NuxtLink>
        </div>
      </div>

      <div class="col-span-2 lg:col-span-1 mt-64 lg:me-12 text-6xl transition-transform duration-[1600ms] ease-out"
        :style="{transform: 'skewY(' + appVelocity + 'deg)'}">
        <div class="transition-transform duration-[1600ms] ease-out"
          :style="{transform: 'translateY(' + appVelocity * 10 + 'px)'}">
          <h3 class="text-6xl">
            Free<br>+<br>Open-Source
          </h3>
          <p class="mt-12 text-xl leading-relaxed">
            All Picons (Principles + Icons) used in this presentation are free and Open-Source. You can download, edit, modify and use them in your own work. Free for Freedom.
          </p>
          <NuxtLink to="https://thefreemavens.org/resources/picons" class="text-3xl text-white hover:text-white bg-grey-975 dark:text-black dark:hover:text-black dark:bg-white">Download Picons --></NuxtLink>
        </div>
      </div>     

    </div>

    <div class="grid grid-cols-4 gap-x-2 gap-y-2 px-16 sm:px-18 md:px-20 lg:px-24 xl:px-28">
      <span class=""/>
      <!-- <MotionHero class=" mt-48 col-span-2 scale-[0.75]"/> -->

      </div>

  </main>

  <AppFooter />

</template>

<script setup>
import svgUrl from '~/assets/svg/icons/picons-xl.svg'
// const { $lenis } = useNuxtApp()
const { $gsap } = useNuxtApp()
const appScroll = useState('appScroll', () => false)
const appVelocity = useState('appVelocity', () => false)
const principles = usePrinciples()
const principleIndex = ref(Number)
const arrowSymbolClose = '-->'
const arrowSymbolOpen = '<--'
const isDisabled = ref(true)

// Color Mode
const colorMode = useColorMode()

const isDark = computed({
  get () {
    return colorMode.value === 'dark'
  },
  set () {
    colorMode.preference = colorMode.value === 'dark' ? 'light' : 'dark'
  }
})



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

onMounted(() => {

  isOpen.value = true
  appScroll.value = 0
  
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
    .set('.sol-title-sol', { autoAlpha: 0})
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
    .to('.sol-title-sol', { autoAlpha: 1, delay: 0.5, ease: 'power2', duration: 4 },'<')
    .to('#solCare', { autoAlpha: 1, strokeWidth: 12, ease: 'power2', duration:1 },'<')
    .to('.sol-title-sol', { autoAlpha: 0, duration:4, ease: 'power2' })
    .to('.circle-sm', { autoAlpha: 0, strokeWidth: 2, ease: 'power2.out', duration: 5, scale: 1.15, delay: 0.5 }, '<2')
    .to('.circle-lg', { autoAlpha: 1, ease: 'power2.out', delay: '-=1', strokeWidth: 32, duration: 3}, '<')
    .to('.pin-icon', { scale: 0.8, ease: 'power1.in', delay: '+=1', autoAlpha: 1, borderRadius: '22%', duration: 3}, '<+2')
    .to('.pin-icon-inner', { boxShadow: '0 20px 25px -5px rgb(0 0 0 / 0.1)', autoAlpha: 1, borderRadius: '22%', duration: 3, ease: 'power4.in' }, '<-1')

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

  })

</script>

