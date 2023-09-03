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
      <MotionHero class="invisible lg:visible w-full h-[100dvh] scale-75 flex justify-center items-center fixed pe-[48rem] -z-[1]"/>
    </section>
    <section class="flex items-start justify-center lg:items-start lg:justify-start w-full lg:max-w-xl min-h-[100dvh] px-20 py-8 lg:px-12 --bg-grey-50 --dark:bg-grey-950 border-l border-grey-100 dark:border-grey-900">
      <div>
        <AppLogomark class="w-16 h-16 -ms-2 mb-12" />
        <AppForm />
      </div>
    </section>
  </div>
</template>