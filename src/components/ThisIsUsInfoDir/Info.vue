<template>
    <section class="bg-footer-of-footer w-full py-16 px-4 lg:px-36">
      <div class="text-xl sm:text-6xl md:text-4xl lg:text-6xl text-black text-center">
        <p>This Is Us</p>
      </div>
      <div class="w-full lg:w-2/3 mx-auto flex sm:flex-col md:flex-row md:items-baseline lg:flex-row items-center justify-center sm:space-y-8 lg:space-y-0 lg:space-x-8">
          <div class="flex flex-col sm:text-xl md:text-base lg:text-xl items-center p-0 md:p-6 lg:p-6">
            <UsInfoBlock
                title=""
                :datas="[
            'We`re big believers in the power of a good meal and a friendly place to eat it.',
            'Stop by for fresh, locally sourced food, served with a warm smile.',
          ]"
            />
          </div>
        </div>
    </section>
  </template>

<script setup>


import UsInfoBlock from "@/components/ThisIsUsInfoDir/UsInfoBlock.vue";
</script>

<style scoped>

</style>