<template>
  <header :class="{'bg-header-color sticky top-0 w-full md:w-full h-[100px] text-center items-center z-50 transition-all': true,'transform -translate-y-full': isScrollingDown,'translate-y-0': !isScrollingDown}">
    <div class="relative flex justify-between items-center px-6 py-4">

      <div class="w-1/3 cursor-pointer">
        <p class="absolute left-9 md:left-7 top-[20px] text-3xl md:text-5xl">47</p>
        <p class="absolute left-[74px] md:left-[83px] top-[15px] text-base md:text-xl">th</p>
        <p class="absolute left-[65px] md:left-[75px] top-[27px] md:top-[30px] text-3xl md:text-5xl text-zinc-600">cafe</p>
      </div>

      <div class="w-2/3 flex justify-end items-center text-center p-4">

        <button class="text-white lg:hidden focus:outline-none focus:ring-2 focus:ring-white" @click="toggleMenu">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"
               stroke-width="2">
            <path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16m-7 6h7"/>
          </svg>
        </button>

        <div v-if="menuOpen" class="absolute top-[100px] right-0 w-full bg-header-color text-white p-4 lg:hidden">
          <router-link to="/" class="block px-6 py-2 text-sm sm:text-base cursor-pointer font-light text-zinc-600">Home</router-link>
          <router-link to="thisIsUs" class="block px-6 py-2 text-sm sm:text-base cursor-pointer font-light text-zinc-600">This is Us</router-link>
          <router-link to="menu" class="block px-6 py-2 text-sm sm:text-base cursor-pointer font-light text-zinc-600">Menu</router-link>
          <router-link to="orders" class="block px-6 py-2 text-sm sm:text-base cursor-pointer font-light text-zinc-600">Order Online</router-link>
          <router-link to="contact" class="block px-6 py-2 text-sm sm:text-base cursor-pointer font-light text-zinc-600">Contact Us</router-link>

          <button class="block px-6 py-2 text-sm sm:text-base cursor-pointer font-light text-zinc-600">Log In</button>
          <button class="block px-6 py-2 text-sm sm:text-base cursor-pointer font-light text-zinc-600">Cart (0)</button>
        </div>

        <nav class="hidden lg:flex items-center gap-6">
          <router-link to="/" class="text-base font-light hover:text-zinc-600">Home</router-link>
          <router-link to="thisIsUs" class="text-base font-light hover:text-zinc-600">This is Us</router-link>
          <router-link to="menu" class="text-base font-light hover:text-zinc-600">Menu</router-link>
          <router-link to="orders" class="text-base font-light hover:text-zinc-600">Order Online</router-link>
          <router-link to="contact" class="text-base font-light hover:text-zinc-600">Contact Us</router-link>

          <div>
            <svg xmlns="http://www.w3.org/2000/svg" class="w-[40px] h-[40px]" viewBox="0 0 50 50">
              <path
                  d="M 25 2.0078125 C 12.309296 2.0078125 2.0000002 12.317108 2 25.007812 C 2 37.112262 11.38131 47.043195 23.259766 47.935547 C 23.283185 47.93745 23.306613 47.939576 23.330078 47.941406 C 23.882405 47.981205 24.437631 48.007812 25 48.007812 C 25.562369 48.007812 26.117595 47.981205 26.669922 47.941406 C 26.693387 47.939576 26.716815 47.93745 26.740234 47.935547 C 38.61869 47.043195 48 37.112262 48 25.007812 C 48 12.317108 37.690704 2.0078125 25 2.0078125 z M 25 4.0078125 C 36.609824 4.0078125 46 13.397988 46 25.007812 C 46 30.739515 43.704813 35.924072 39.990234 39.710938 C 38.401074 38.55372 36.437194 37.863387 34.677734 37.246094 C 32.593734 36.516094 30.622172 35.824094 30.076172 34.621094 C 29.990172 33.594094 29.997859 32.792094 30.005859 31.871094 L 30.007812 31.480469 C 30.895813 30.635469 32.012531 28.852078 32.394531 27.205078 C 33.054531 26.853078 33.861516 26.009281 34.103516 23.988281 C 34.224516 22.985281 33.939062 22.2085 33.539062 21.6875 C 34.079062 19.8325 35.153484 15.136469 33.271484 12.105469 C 32.475484 10.824469 31.274313 10.016266 29.695312 9.6972656 C 28.808312 8.5992656 27.134484 8 24.896484 8 C 21.495484 8.063 19.002234 9.1047031 17.490234 11.095703 C 15.707234 13.445703 15.370328 16.996297 16.486328 21.654297 C 16.073328 22.175297 15.775438 22.963328 15.898438 23.986328 C 16.141438 26.007328 16.945469 26.851125 17.605469 27.203125 C 17.987469 28.852125 19.103188 30.635469 19.992188 31.480469 L 19.994141 31.861328 C 20.002141 32.786328 20.009828 33.590094 19.923828 34.621094 C 19.375828 35.827094 17.394781 36.526625 15.300781 37.265625 C 13.551886 37.88319 11.599631 38.574586 10.013672 39.716797 C 6.2962191 35.929504 4 30.742023 4 25.007812 C 4.0000002 13.397989 13.390176 4.0078125 25 4.0078125 z"/>
            </svg>
          </div>
          <button class="font-light text-zinc-600" @click="goToLogin">Log In</button>
          <button class="font-light">Cart (0)</button>
        </nav>
      </div>
    </div>
  </header>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue';
import { useRouter } from 'vue-router';

const menuOpen = ref(false);
const lastScrollTop = ref(0);
const isScrollingDown = ref(false);

const toggleMenu = () => {
  menuOpen.value = !menuOpen.value;
};

const router = useRouter();
const goToLogin = () => {
  router.push({ name: 'home' });
};

const handleScroll = () => {
  const currentScroll = window.pageYOffset || document.documentElement.scrollTop;

  if (currentScroll < 100) {
    return;
  }

  if (currentScroll > lastScrollTop.value) {
    isScrollingDown.value = true;
  } else {
    isScrollingDown.value = false;
  }

  lastScrollTop.value = currentScroll <= 0 ? 0 : currentScroll;
};

onMounted(() => {
  window.addEventListener('scroll', handleScroll);
});

onBeforeUnmount(() => {
  window.removeEventListener('scroll', handleScroll);
});
</script>

<style scoped>
/* Плавное скрытие навбара */
.transition-all {
  transition: transform 0.3s ease-in-out;
}

@media (min-width: 1024px) {
  .dropdown-menu {
    display: none;
  }
}

@media (max-width: 700px) {
  nav a {
    font-size: 12px;
  }
}

@media (min-width: 1024px) {
  nav a {
    font-size: 16px;
  }
}
</style>