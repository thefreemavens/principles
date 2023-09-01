<template>
  <!-- Colums grid  -->
  <div class="
    fixed z-[-1]
    w-screen h-screen
    grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 px-16 sm:px-18 md:px-20 lg:px-24 xl:px-28 gap-2
  ">
    <span class="border-x border-grey-100 dark:border-grey-950"/>
    <span class="border-x border-grey-100 dark:border-grey-950"/>
    <span class="border-x border-grey-100 dark:border-grey-950"/>
    <span class="border-x border-grey-100 dark:border-grey-950"/>
    <!-- <MotionHero class="w-screen absolute h-[100dvh] top-0 scale-100 flex justify-center items-center"/> -->
  </div>
  <!-- End grid -->
  <div class="">
    <AppForm />
    <!-- <section class="w-[61.8%] h-[100dvh] fixed flex object-contain z-10 bg-white dark:bg-grey-975">
    </section>
    <section class="w-full h-[100dvh] flex justify-center items-center ps-[61.8%] bg-grey-975/10">
      Init
    </section> -->
  </div>
</template>