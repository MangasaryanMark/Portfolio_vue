<template>
  <ul class="text-gray-800 mt-2 text-thin">
    <li class="mt-2" v-for="(data, index) in datas" :key="index">{{ data }}</li>
  </ul>
</template>

<script setup>
const props = defineProps({
  datas: {
    type: Array,
    required: true,
  }
})
</script>

<style scoped>

</style>