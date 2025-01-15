<template>
  <div class="p-0 md:p-0 w-full h-full font-extralight">
    <div class=" flex justify-center flex-col">
        <p class="text-2xl md:text-3xl lg:text-6xl text-black text-start">{{ title }}</p>
        <p class="text-base md:text-sm md:font-bold lg:font-bold text-black mt-5 md:mt-3 lg:mt-5 text-start">{{ subtitle }}</p>
        <p class="text-sm sm:text-base md:text-sm lg:text-base text-gray-800 mt-5 md:mt-3 lg:mt-5 text-start sm:leading-6 md:leading-4 lg:leading-6">{{ description }}</p>
    </div>
    <button class="w-1/2 mt-6 md:mt-6 lg:mt-6 md:w-auto bg-transparent text-black py-3 px-10 border border-black hover:bg-button-hover hover:text-white hover:border-transparent transition-all duration-300">
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
        required: false
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