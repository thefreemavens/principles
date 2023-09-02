<template>
  <!-- Colums grid  -->
  <!-- <div class="
    fixed z-[-1]
    w-screen h-screen
    grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 px-16 sm:px-18 md:px-20 lg:px-24 xl:px-28 gap-2
  ">
    <span class="border-x border-grey-100 dark:border-grey-950"/>
    <span class="border-x border-grey-100 dark:border-grey-950"/>
    <span class="border-x border-grey-100 dark:border-grey-950"/>
    <span class="border-x border-grey-100 dark:border-grey-950"/>
  </div> -->
  <!-- End grid -->
  <div class="flex">
    <section class="flex-1">
      <MotionHero class="invisible lg:visible w-full h-[100dvh] scale-90 flex justify-center items-center"/>
    </section>
    <section class="w-full lg:max-w-xl h-[100dvh] px-20 py-8 lg:px-12 self-end bg-grey-50 dark:bg-grey-950">
      <AppLogomark class="w-16 h-16 mx-auto" />
      <AppForm />
    </section>
    <!-- <section class="w-[61.8%] h-[100dvh] fixed flex object-contain z-10 bg-white dark:bg-grey-975">
    </section>
    <section class="w-full h-[100dvh] flex justify-center items-center ps-[61.8%] bg-grey-975/10">
      Init
    </section> -->
  </div>
</template>