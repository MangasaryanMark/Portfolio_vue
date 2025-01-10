<template>
  <footer class="w-full">
    <div class="w-full bg-xaki-kanach">
      <div class="flex flex-wrap p-12 justify-between">
        <div class="w-full md:w-1/3 p-12 md:p-6">
          <div class="text-start">
            <p class="text-white text-3xl">Newsletter</p>
          </div>
          <div class="text-start pt-6 md:pt-12">
            <p class="text-white text-sm">Stay up to date with all the latest from 47th Cafe</p>
          </div>
          <div class="pt-6">
            <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email *</label>
            <input type="text"
                   class="bg-transparent border border-white text-gray-900 text-sm w-full p-2.5 hover:bg-gray-100 hover:bg-opacity-20 transition-all duration-300"
                   required />
          </div>
          <div class="w-full flex flex-wrap items-center">
            <div class="w-full md:w-2/3 flex py-4 md:py-6 items-center">
              <input id="subscribe" type="checkbox" class="appearance-none cursor-pointer w-4 h-4 border border-white">
              <label for="subscribe" class="ms-2 text-sm md:text-sm cursor-pointer text-white text-nowrap">Yes, subscribe me to your newsletter</label>
            </div>
            <div class="w-full md:w-1/3 mt-4 flex justify-end md:mt-0">
              <button class="w-full md:w-auto bg-transparent text-white py-3 px-10 border border-white hover:bg-gray-100 hover:bg-opacity-20 transition-all duration-300">Join</button>
            </div>
          </div>
        </div>

        <div class="w-full md:w-1/3 p-12 md:p-6">
          <div class="flex items-start text-white text-start text-3xl">
            <p>Talk to Us</p>
          </div>
          <div class="mt-6 md:mt-12 text-gray-100 text-start">
            <p class="text-sm md:text-base">123-456-7890</p>
            <p class="text-sm md:text-base cursor-pointer">info@mysite.com</p>
          </div>
          <div class="mt-6 md:mt-12 text-gray-100 text-start">
            <p class="text-sm md:text-base">500 Terry Francine St.</p>
            <p class="text-sm md:text-base">San Francisco, CA 94158</p>
          </div>
        </div>

        <div class="w-full md:w-1/3 p-12 md:p-6">
          <div class="text-4xl md:text-6xl text-white text-start">
            <a href="https://www.instagram.com/wix/">Instagram</a>
          </div>
          <div class="text-4xl md:text-6xl mt-6 md:mt-12 text-white text-start">
            <a href="https://www.facebook.com/wix">Facebook</a>
          </div>
          <div class="text-4xl md:text-6xl mt-6 md:mt-12 text-white text-start">
            <a href="https://www.twitter.com/wix">Twitter</a>
          </div>
        </div>
      </div>
    </div>
    <div class="w-full bg-footer-of-footer flex justify-center  text-center h-[30px]">
      <p class="text-xs text-zinc-600 my-auto">© 2035 by 47th Cafe . Powered and secured by Wix</p>
    </div>
  </footer>
</template>

<script>

</script>

<style scoped>
/* Для планшетов и устройств с разрешением меньше 1024px */
@media (max-width: 1024px) {
  .container {
    flex-wrap: wrap;
  }
  .container > div {
    width: 100%;
    padding: 16px;
  }
}

/* Для мобильных устройств с разрешением меньше 768px */
@media (max-width: 768px) {
  .p-24 {
    padding: 16px;
  }
  .text-3xl {
    font-size: 1.5rem; /* Уменьшенный размер текста */
  }
  .text-6xl {
    font-size: 2.5rem; /* Уменьшенный размер текста */
  }
  .py-6 {
    padding-top: 12px;
    padding-bottom: 12px;
  }
  .px-10 {
    padding-left: 16px;
    padding-right: 16px;
  }
}
</style>