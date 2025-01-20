<template>
  <div class="p-0 md:p-0 w-full h-full w-1/3 me-7 mb-5 cursor-pointer font-extralight">
    <div
        class="flex justify-center bg-footer-of-footer p-5 flex-col transition-transform duration-300 hover:scale-105"
    >
      <p class="text-lg md:text-base lg:text-lg text-black font-medium text-thin text-start">
        {{ title }}
      </p>
      <p class="text-sm md:text-xs lg:text-sm text-gray-700 text-thin mt-3 md:mt-3 lg:mt-3 text-start">
        {{ description }}
      </p>
      <p class="text-xl md:text-sm lg:text-base text-gray-700 text-thin mt-12 md:mt-4 lg:mt-12 text-start sm:leading-6 md:leading-4 lg:leading-6">
        ${{ price }}
      </p>
    </div>
  </div>
</template>

<script setup>
const props = defineProps(
    {
      title: {
        type: String,
        required: true
      },
      description: {
        type: String,
        required: true
      },
      price: {
        type: String,
        required: false
      }
    }
)
</script>

<style scoped>

</style>