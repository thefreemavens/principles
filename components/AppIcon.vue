<template>
  <!-- Base -->
  <svg
    class="fill-current">
    <use v-bind="{'xlink:href': url + '#' + name }" />
  </svg>
</template>

<script setup lang="ts">
import svgUrl from '~/assets/svg/icons/picons.svg'

const props = defineProps({
  name: {
    type: String,
    default: ''
  },
  url: {
    type: String,
    default: svgUrl
  }
})
</script>