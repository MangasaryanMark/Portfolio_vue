<template>
  <h2 class="text-center text-black text-2xl">{{ title }}</h2>
  <ul class="text-center text-gray-800 mt-6">
    <li v-for="(data, index) in datas" :key="index">{{ data }}</li>
  </ul>
</template>

<script setup>
const props = defineProps({
  title: {
    type: String,
    required: true,
  },
  datas: {
    type: Array,
    required: true,
  }
})
</script>

<style scoped>

</style>