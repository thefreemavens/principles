<template>
  <div class="flex">
    {{ time }}
  </div>
</template>

<script setup>

let date = new Date()
let time = ref()

setInterval(() => {
    date.setSeconds(date.getSeconds() + 1)

    time.value = `${date.getHours()}:${('0' + date.getMinutes()).slice(-2)}:${('0' + date.getSeconds()).slice(-2)}`
}, 1000)

// console.log(date)

</script>