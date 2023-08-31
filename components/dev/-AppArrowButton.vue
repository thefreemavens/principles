<template>
  <button class="fixed flex end-8 bottom-6 z-30" @click="toggle">
    <span class="text-base"> {{ isOpen? arrowSymbolClose : arrowSymbolOpen }} </span>
  </button>
</template>

<script>
// import { defineEmits, defineProps } from 'vue'

// const emit = defineEmits(['submit'])
// const props = defineProps({
//   isOpen: {
//     type: Boolean,
//     required: true,
//     // default: true
//   }
// })

// function toggle(event) {
//   emit('submit', props.isOpen)
// }

// const { $gsap, $ScrollTrigger } = useNuxtApp()
// const gsap = $gsap

export default {
  props: {
    isOpen: {
      required: true,
    },
  },
  data() {
    return {
      arrowSymbolClose: '--->',
      arrowSymbolOpen: '<---',
    }
  },
  // watch: {
  //   activate(newValue, oldValue) {
  //     gsap.to('button', 0.4, { text: { value: newValue ? 'Deactivate' : 'Activate', padSpace: true }, ease: Power2.easeIn, onUpdate: () => {
  //       this.isOpen = newValue ? 'Deactivate' : 'Activate'
  //     } })
  //     console.log(this.isOpen);
  //   }
  // },
  setup(props, { emit }) {
    const toggle = () => {
      emit("update:isOpen", !props.isOpen)
    }
    return {
      toggle,
    }
  },
  // mounted() {
  //   $gsap.from('.card', {
  //     repeat: -1,
  //     duration: .7,
  //     stagger: .1,
  //     y: -150
  //   })
  // }
}
</script>


<!-- <script setup>
const emit = defineEmits(['submit'])
const props = defineProps(['AirportData'])
const isOpen = ref(Boolean)

function Update(event) {
  emit('submit', props.AirportData)
}

</script> -->