
import Lenis from '@studio-freight/lenis';

const lenis = new Lenis({
  // duration: 3,
  lerp: 0.025,
  smooth: true,
  smoothWheel: true,
  wheelMultiplier: 2,
  direction: 'vertical',
})

// lenis.on('scroll', ({ scroll, limit }) => {
//   console.table({ scroll, limit });
// });

function raf(time) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}

requestAnimationFrame(raf);

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.provide('lenis', lenis);

  // scroll to top on route change
  nuxtApp.$router.afterEach((to, from) => {
    if (to.path !== from.path) {
      lenis.scrollTo('.app', { // your container class or id
        offset: 0,
        duration: 0,
        easing: () => {},
        immediate: true
      })
    }
  })
  
});