<template>
  <Header/>
  <section class="bg-footer-of-footer py-20 w-full pt-86 px-4 lg:px-36">
    <div class="text-xl sm:text-gray-600-4xl lg:text-6xl text-black text-center">
      <p>Our Menu</p>
    </div>
    <div
        class="w-full lg:w-2/3 mx-auto flex sm:flex-col md:flex-row md:items-baseline lg:flex-row items-center justify-center sm:space-y-5 lg:space-y-0 lg:space-x-5">
      <div class="flex flex-col sm:text-xl md:text-base lg:text-xl items-center p-0 md:p-6 lg:p-6">
        <UsInfoBlock
            :datas="[
            'I`m a paragraph. Click here to add your own text and edit me.',
            'Let your users get to know you.',
          ]"
        />
      </div>
    </div>
  </section>
  <section class="w-full min-h-screen">
    <div class="flex justify-center">
      <div class="w-2/3 h-48 flex items-end justify-end">
        <div class="m-12 h-1/3 flex">
          <div class="w-2/3">
            <button
                class="cursor-pointer pb-2 pt-4 px-5 text-center text-sm text-gray-600 border-gray-600 border-b-2"
                @click="changingMenu = MenuFood"
            >
              All day Every Day
            </button>
          </div>
          <div class="w-1/3">
            <button
                class="cursor-pointer border-b border-gray-600 pt-4 px-5 pb-2 text-center text-sm text-gray-600"
                @click="changingMenu = MenuDrinks"
            >
              Drinks
            </button>
          </div>
        </div>
      </div>
    </div>
    <component :is="changingMenu" />
  </section>

  <Footer/>
</template>

<script setup>
import { ref } from "vue";


import Header from "@/components/Header.vue";
import UsInfoBlock from "@/components/ThisIsUsInfoDir/UsInfoBlock.vue";
import Footer from "@/components/Footer.vue";
import MenuFood from "@/components/MenuFood.vue";
import MenuDrinks from "@/components/MenuDrinks.vue";

const changingMenu = ref(MenuFood);
</script>

<style scoped>

</style>