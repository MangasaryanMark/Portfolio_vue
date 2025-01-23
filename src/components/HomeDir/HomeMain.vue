<template>
  <section
      class="bg-[url('https://static.wixstatic.com/media/c837a6_3072f98b6961440ca0c47ce752c6d052~mv2.jpg/v1/fill/w_1899,h_891,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/c837a6_3072f98b6961440ca0c47ce752c6d052~mv2.jpg')] bg-cover bg-center bg-fixed sm:h-96 md:h-96 lg:h-lvh w-full"
  >
    <div class="w-full h-full bg-black bg-opacity-20 flex justify-center items-center">
      <div class="w-11/12 h-4/6 text-start p-4 md:p-6">
        <div class="w-full text-lg md:text-xl text-white text-thin">
          <p>Cafe & Restaurant Est. 2035</p>
        </div>
        <div class="w-full text-3xl sm:text-3xl md:text-5xl lg:text-7xl text-white text-thin mt-6 md:mt-8">
          <p>Your Go-to Spot for</p>
          <p class="mt-2 md:mt-3">Delicious Eats & Coffee</p>
        </div>
        <div class="w-full md:w-1/3 mt-6 flex flex-col md:flex-row justify-start md:mt-12 gap-4">
          <router-link to="orders"
              class="w-full md:w-auto bg-transparent text-sm md:text-sm text-center text-white py-3 px-8 md:px-10 lg:px-10 border border-white hover:bg-button-hover transition-all duration-300 whitespace-nowrap flex items-center justify-center"
          >
            Order Online
          </router-link>
          <router-link to="menu"
              class="w-full md:w-auto bg-transparent text-sm md:text-sm text-white py-3 px-8 md:px-10 border border-white hover:bg-button-hover transition-all duration-300 whitespace-nowrap inline-flex items-center justify-center"
          >
            Our Menu
          </router-link>
        </div>
      </div>
    </div>
  </section>

  <section
      class="bg-button-hover w-full h-16 text-center relative"
      @mouseover="stopAutoScroll"
      @mouseleave="startAutoScroll"
  >
    <button
        @click="prevItem"
        data-testid="prevButton"
        aria-label="Previous"
        class="absolute left-0 top-1/2 transform -translate-y-1/2 p-2 md:p-4 text-white font-light hover:text-gray-600"
    >
      <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 21 41"
          class="w-4 h-4 md:w-5 md:h-5 fill-current text-white hover:text-gray-400 transition-all duration-200"
      >
        <path d="M20.3 40.8 0 20.5 20.3.2l.7.7L1.3 20.5 21 40.1z"></path>
      </svg>
    </button>

    <div class="flex justify-center items-center h-full">
      <p class="text-white text-base md:text-xl font-medium transition-all duration-500">
        {{ texts[currentIndex] }}
      </p>
    </div>

    <button
        @click="nextItem"
        data-testid="nextButton"
        aria-label="Next"
        class="absolute right-0 top-1/2 transform -translate-y-1/2 p-2 md:p-4 text-white hover:text-gray-400"
    >
      <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 21 41"
          class="w-4 h-4 md:w-5 md:h-5 transform rotate-180 fill-current text-white hover:text-gray-400"
      >
        <path d="M20.3 40.8 0 20.5 20.3.2l.7.7L1.3 20.5 21 40.1z"></path>
      </svg>
    </button>
  </section>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';

const texts = [
  "Weekend Brunch | Saturday 9am - 2pm",
  "Daily Deal | Coffee & Pastry $3.99"
];

const currentIndex = ref(0);

// Function to go to the next item
const nextItem = () => {
  currentIndex.value = (currentIndex.value + 1) % texts.length;
};

// Function to go to the previous item
const prevItem = () => {
  currentIndex.value = (currentIndex.value - 1 + texts.length) % texts.length;
};

// Auto-switch text every 3 seconds
let intervalId;
const startAutoScroll = () => {
  intervalId = setInterval(nextItem, 4000);
};

const stopAutoScroll = () => {
  clearInterval(intervalId);
};

onMounted(() => {
  startAutoScroll();
});

onUnmounted(() => {
  clearInterval(intervalId);
});
</script>

<style scoped>


/* Smooth transition effect */
p {
  transition: opacity 0.5s ease-in-out, transform 0.5s ease-in-out;
}

/* Ensure text fades in/out smoothly */
p.enter-active, p.leave-active {
  transition: opacity 0.5s, transform 0.5s;
}

p.enter, p.leave-to {
  opacity: 0;
  transform: translateX(20px);
}
</style>