<template>
  <div class="w-full me-3">
    <label class="text-sm md:text-xs lg:text-sm font-medium text-gray-900">{{ title }}</label>
    <input :type="{ type }" id="email" class="bg-transparent border text-sm block w-full p-3 mt-3 border-black focus:border-gray-500 focus:ring-gray-500" placeholder="" required/>
  </div>
</template>

<script setup>
const props = defineProps({
  title: {
    required: true,
    type: String
  },
  type: {
    required: true,
    type: String
  }
})
</script>

<style scoped>

</style>