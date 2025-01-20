<template>
  <Header/>
  <section class="w-full h-96">
    <ImageBlock
        href="https://static.wixstatic.com/media/11062b_70dd114a397245ad901875a7cb7b1389~mv2.jpg/v1/fill/w_1899,h_500,fp_0.50_0.50,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/11062b_70dd114a397245ad901875a7cb7b1389~mv2.jpg"/>
  </section>
  <section class="w-full p-12 min-h-96">
    <div class="w-full min-h-96 mx-auto">
      <div class="w-full text-start text-6xl pb-4 text-black font-medium">
        <h2>Order Online</h2>
      </div>
      <div class="w-full text-start text-base text-gray-800 font-medium">
        <p>You can order online! Browse our menu items and choose what you’d like to order from us.</p>
      </div>
      <div class="w-full flex items-center flex-row justify-start text-start text-sm mt-4 text-gray-800 font-medium">
        <div class="bg-footer-of-footer flex items-center flex-row justify-start p-4 w-40 text-sm h-9 rounded-full">
          <div class="w-2.5 h-2.5 bg-green-500 me-1 rounded-full"></div>
          <p>Accepting Orders</p>
        </div>
      </div>
      <div class="w-full flex items-center flex-row justify-start text-start text-sm mt-6 text-gray-800 font-medium">
        <div class="flex items-center flex-row justify-start w-96 text-sm">
          <div
              class="w-1/2 py-3 px-4 bg-button-hover cursor-pointer text-center text-base border border-r-0 border-gray-600"
              @click="openMultipleModals('pickup')"
          >
            <p class="text-white">Pickup</p>
          </div>
          <div
              class="w-1/2 py-3 px-4 text-center cursor-pointer text-base border border-gray-600"
              @click="openMultipleModals('delivery')"
          >
            <p class="text-black">Delivery</p>
          </div>

          <div v-if="isModalOpen" class="fixed z-50 inset-0 flex items-center justify-center bg-black bg-opacity-50">
            <div class="bg-white shadow-lg w-2/4">
              <div class="p-6">
                <div class=" flex flex-row items-center justify-between">
                  <h2 class="text-lg font-semibold mb-4">{{ modalContent }}</h2>
                  <button class="text-white rounded mb-4" @click="closeModal">
                    <svg data-bbox="33 33 133.333 133.333" viewBox="0 0 200 200" height="20" width="20"
                         xmlns="http://www.w3.org/2000/svg" data-type="shape">
                      <g>
                        <path
                            d="M166.333 38.892 160.442 33 99.667 93.775 38.892 33 33 38.892l60.775 60.775L33 160.442l5.892 5.891 60.775-60.775 60.775 60.775 5.891-5.891-60.775-60.775 60.775-60.775Z"
                            fill-rule="evenodd"></path>
                      </g>
                    </svg>
                  </button>
                </div>
                <div class="text-sm w-full text-gray-600 cursor-pointer flex flex-row items-center">
                  <div
                      class="w-1/2 py-3 px-4 text-center text-base border border-r-0 border-gray-600"
                      :class="{ 'bg-gray-200': activeOption === 'pickup' }"
                      @click="setActiveOption('pickup')"
                  >
                    <p class="text-black">Pickup</p>
                  </div>
                  <div
                      class="w-1/2 py-3 px-4 text-center text-base border border-gray-600"
                      :class="{ 'bg-gray-200': activeOption === 'delivery' }"
                      @click="setActiveOption('delivery')"
                  >
                    <p class="text-black">Delivery</p>
                  </div>
                </div>
              </div>
                <OrdersModalPickup/>
            </div>
          </div>
        </div>
      </div>
      <div class="w-full flex items-center flex-row justify-start text-start text-sm mt-6 text-gray-800 font-medium">
        <div class="w-full flex items-center flex-row justify-start text-sm">
          <div class="w-1-6 me-3 text-center text-base flex flex-row items-center">
            <svg class="me-1" preserveAspectRatio="xMidYMid meet" data-bbox="4 3 13 13"
                 xmlns="http://www.w3.org/2000/svg" viewBox="4 3 13 13" height="15" width="15" data-type="shape"
                 role="presentation" aria-hidden="true" aria-label="">
              <path
                  d="M10.5 3C14.084 3 17 5.916 17 9.5S14.084 16 10.5 16A6.508 6.508 0 0 1 4 9.5C4 5.916 6.916 3 10.5 3Zm0 1A5.506 5.506 0 0 0 5 9.5c0 3.033 2.467 5.5 5.5 5.5S16 12.533 16 9.5 13.533 4 10.5 4Zm.5 2v3h3v1h-4V6h1Z"
                  fill="#000000" clip-rule="evenodd" fill-rule="evenodd"></path>
            </svg>
            <p class="text-gray-600">Pickup time: up to 30 minutes <span
                class="cursor-pointer underline decoration-solid hover:text-gray-400"
                @click="openMultipleModals('pickup')"
            >  Change</span></p>
          </div>
          <div class="w-1/2 text-center text-base flex flex-row items-center">
            <svg class="me-1" preserveAspectRatio="xMidYMid meet" data-bbox="2.999 2 13.009 16.005"
                 xmlns="http://www.w3.org/2000/svg" viewBox="2.999 2 13.009 16.005" height="15" width="15"
                 data-type="shape" role="presentation" aria-hidden="true" aria-label="">
              <path
                  d="M7.058 8.015c.19-.99.98-1.78 1.97-1.97h.01c.82-.15 1.66.11 2.25.69.59.58.85 1.43.69 2.25-.19.99-.98 1.78-1.97 1.97-.16.03-.32.04-.48.04-.67 0-1.31-.26-1.78-.73-.59-.58-.85-1.43-.69-2.25Zm2.76 1.95c.58-.11 1.06-.59 1.17-1.17.1-.51-.05-1-.41-1.36-.29-.29-.66-.44-1.06-.44a1.498 1.498 0 0 0-1.47 1.2c-.1.51.05 1 .41 1.36.36.36.85.5 1.36.41Z"
                  fill="#000000" clip-rule="evenodd" fill-rule="evenodd"></path>
              <path
                  d="M8.088 2.145c1.97-.41 3.98.06 5.51 1.3a6.474 6.474 0 0 1 2.41 5.05 6.462 6.462 0 0 1-.568 2.664c-.006.012-.012.021-.012.036-.87 1.9-2.51 4.05-4.87 6.38-.29.29-.67.43-1.05.43s-.76-.15-1.05-.43c-2.37-2.34-4.01-4.49-4.88-6.4-.002-.006-.005-.01-.008-.015-.006-.011-.012-.02-.012-.035a6.554 6.554 0 0 1-.39-4.13c.54-2.39 2.51-4.34 4.92-4.85Zm6.41 8.66c.01-.01.02-.04.02-.04h.01c.32-.72.49-1.49.49-2.28 0-1.66-.75-3.22-2.04-4.27-1.3-1.05-3-1.46-4.67-1.1-2.03.43-3.7 2.07-4.15 4.09-.28 1.22-.16 2.44.34 3.54.02.01.02.03.02.04.82 1.79 2.39 3.83 4.65 6.06.19.19.49.19.69 0 2.25-2.23 3.82-4.26 4.64-6.04Z"
                  fill="#000000" clip-rule="evenodd" fill-rule="evenodd"></path>
            </svg>
            <p class="text-gray-600">Pickup Address: San Francisco, CA</p>
          </div>
        </div>
      </div>
      <div class="flex items-center mt-5 space-x-4 ps-0 p-4">
        <div class="relative inline-block text-left">
          <button @click="toggleMenu"
                  class="flex items-center justify-between text-gray-700 font-medium focus:outline-none">
            Drinks
            <svg xmlns="http://www.w3.org/2000/svg" :class="isOpen ? 'rotate-180' : 'rotate-0'"
                 class="ml-28 mr-6 h-4 w-4 transform transition-transform duration-200" fill="none" viewBox="0 0 24 24"
                 stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/>
            </svg>
          </button>
          <div v-if="isOpen"
               class="absolute border border-gray-300 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
            <div class="py-1" role="menu" aria-orientation="vertical">
              <a href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem">
                Drinks
              </a>
              <a href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem">
                All Day Every Day
              </a>
            </div>
          </div>
        </div>
        <div class="h-8 w-px bg-gray-400"></div>
        <div class="flex cursor-pointer border-b border-gray-600">
          <a @click.prevent="default" to="orders" class="text-gray-700 font-medium px-4 hover:text-black border-b-2 border-black pb-3 relative">
            Coffee
          </a>
          <a @click.prevent="default" to="orders" class="text-gray-700 font-medium hover:text-black hover:border-b-2 border-black pb-3 relative">
            Specialty Drinks
          </a>
        </div>
      </div>
      <OrderDrinks/>
      <OrderFood/>
    </div>
  </section>
  <Footer/>
</template>

<script setup>

import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";
import ImageBlock from "@/components/imageText/ImageBlock.vue";
import Menu from "@/pages/Menu.vue";
import MenuDrinks from "@/components/MenuDir/MenuDrinks.vue";
import OrderDrinks from "@/components/Orders/OrderDrinks.vue";
import OrderFood from "@/components/Orders/OrderFood.vue";
import {ref} from "vue";
import OrdersModalPickup from "@/components/Orders/OrdersModalPickup.vue";

const activeOption = ref('pickup');
const isOpen = ref(false);

const toggleMenu = () => {
  isOpen.value = !isOpen.value;
};

const isModalOpen = ref(false);
const modalContent = ref("");

const setActiveOption = (option) => {
  activeOption.value = option;
  openModal('How would you like to receive your order?');
};

const openModal = (type) => {
  modalContent.value = type;
  isModalOpen.value = true;
};

const openMultipleModals = (param) => {
  openModal('How would you like to receive your order?');
  setActiveOption(param)
}

const closeModal = () => {
  isModalOpen.value = false;
};
</script>

<style scoped>

</style>