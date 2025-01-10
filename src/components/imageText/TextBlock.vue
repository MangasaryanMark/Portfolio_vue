<template>
  <div class="p-10 font-extralight">
    <p class="text-6xl text-black text-start">{{ title }}</p>
    <p class="text-xl text-black mt-6 text-start">{{ subtitle }}</p>
    <p class="text-base text-gray-800 mt-6 text-start leading-8">{{ description }}</p>
    <button
        class="w-full mt-6 md:w-auto bg-transparent text-black py-3 px-10 border border-black hover:bg-button-hover hover:text-white hover:border-transparent transition-all duration-300">
      {{buttonText}}
    </button>
  </div>
</template>

<script setup>
const props = defineProps(
    {
      title: {
        type: String,
        required: true
      },
      subtitle: {
        type: String,
        required: true
      },
      description: {
        type: String,
        required: true
      },
      buttonText: {
        type: String,
        required: true,
      }
    }
)
</script>

<style scoped>

</style>