<template>

  <!-- Base -->
  <svg
    v-if="variation == 'base'"
    :class="[size, color.base, custom]"
    class="fill-current">
    <use v-bind="{'xlink:href': url + '#' + name }" />
  </svg>

  <!-- Solid -->
  <div
    v-if="variation == 'solid'"
    :class="[size, background, custom]"
    class="flex relative rounded-[22%]">
    <svg
      :class="[color]"
      class="fill-current object-contain p-[17%]">
      <use v-bind="{'xlink:href': url + '#' + name }" />
    </svg>
  </div>

  <!-- Outline -->
  <div
    v-if="variation == 'outline'"
    :class="[size, color.outline, custom]"
    class="flex rounded-[22%]">
    <svg
      :class="strokeWidth"
      class="stroke-current fill-none object-contain origin-center subpixel-antialiased"
      stroke="currentcolor"
    >
      <use v-bind="{'xlink:href': url + '#' + name }" />
    </svg>
  </div>

  <!-- Shadow -->
  <div
    v-if="variation == 'shadow'"
    :class="[depth, blur, position]"
    class="relative"
  >
    <div
    :class="[size, shadow, background.base]"
      class="
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
     ">
      <svg
        :class="[size, color.base]"
        class="fill-current object-contain">
        <use v-bind="{'xlink:href': url + '#' + name }" />
      </svg>
    </div>
  </div>

</template>

<script setup>
import { _strokeWidth } from '#tailwind-config/theme';
import svgUrl from '~/assets/svg/icons/picons-xl.svg'
const props = defineProps({
  name: {
    type: String,
    default: 'Mentalism'
  },
  desc: {
    type: String,
    default: 'Picon'
  },
  size: {
    type: String,
    default:'w-12 h-12'
  },
  color: {
    type: String,
    base: 'text-grey-975 dark:text-white',
    outline: 'stroke-white dark:stroke-white',
    default: 'text-white dark:text-grey-975',
  },
  background: {
    type: String,
    base: 'bg-white dark:bg-grey-975',
    default: 'bg-grey-975 dark:bg-white'
  },
  variation: {
    type: String,
    default: 'solid' // base, solid, outline, invert, shadow
  },
  url: {
    type: String,
    default: svgUrl
  },
  depth: {
    type: String,
    default: 'z-0'
  },
  blur: {
    type: String,
    default: 'blur-[0px]'
  },
  glow: {
    type: String,
    default: 'blur-xl'
  },
  position: {
    type: String,
    default: 'inset-0'
  },
  shadow: {
    type: String,
    default: 'shadow-2xl'   
  },
  strokeWidth: {
    type: String,
    default: 'stroke-[54]'
  },
  custom: {
    type: String,
    default: ''
  }
})

</script>
