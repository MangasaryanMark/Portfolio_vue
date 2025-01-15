<template>
  <Header/>
  <UsInfo/>
  <section class="w-full h-auto">
    <div class="w-full h-1/3 flex flex-col md:flex-row lg:flex-row">
      <div class="w-full md:w-1/2 lg:w-1/2">
        <ImageBlock href="https://static.wixstatic.com/media/c837a6_45216043ba6541838c690ad89cdeb432~mv2.jpg/v1/fill/w_948,h_813,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/c837a6_45216043ba6541838c690ad89cdeb432~mv2.jpg"/>
      </div>
      <div @click="router.push({name: 'menu'})" class="w-full md:w-1/2 lg:w-1/2 h-full p-16 md:p-24 lg:p-36 flex flex-col justify-center">
        <TextBlock title="The Best Bite in the Neighborhood" button-text="View Menu" description="I'm an extra long title. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font. I’m a great place for you to tell a story and let your users know a little more about you." subtitle=""/>
      </div>
    </div>
  </section>
  <section class="bg-button-hover w-full h-36 text-center relative">
    <div class="flex justify-center items-center p-8 h-full">
      <p class="text-white text-base sm:text-4xl md:text-3xl lg:text-4xl py-8 font-medium transition-all duration-500">
        Real Food. No Secret Ingredients.
      </p>
    </div>
      <svg class="w-24 absolute top-[-32%] left-3/4" preserveAspectRatio="xMidYMid meet" data-bbox="24 17 160 160" xmlns="http://www.w3.org/2000/svg" viewBox="24 17 160 160" data-type="color" role="presentation" aria-hidden="true">
        <g>
          <path fill="#F7E5D2" d="m182.301 113.439-8.246 5.784 3.402 9.481-8.878 3.872 1.469 9.576-9.831 2.189-.485 10.062-9.685.181-2.306 9.409-9.921-1.74-4.295 9.104-9.017-3.538-5.73 7.809-8.499-5.402-7.453 6.774-6.977-6.721-8.282 5.024-5.787-8.248-9.481 3.405-3.874-8.88-9.574 1.473-2.19-9.831-10.061-.485-.18-9.684-9.41-2.306 1.74-9.92-9.112-4.297 3.54-9.019-7.812-5.73 5.405-8.501L24 95.822l6.722-6.975-5.024-8.285 8.245-5.783-3.404-9.478 8.88-3.873-1.473-9.575 9.831-2.189.483-10.064 9.686-.18 2.305-9.411 9.923 1.741 4.298-9.109 9.016 3.539 5.731-7.81 8.5 5.403L105.174 17l6.977 6.722 8.283-5.024 5.785 8.246 9.48-3.402 3.873 8.878 9.574-1.47 2.19 9.829 10.059.484.181 9.685 9.409 2.305-1.739 9.923 9.112 4.299-3.539 9.018 7.81 5.73-5.403 8.501L184 98.181l-6.723 6.976 5.024 8.282Z" data-color="1"></path>
          <path fill="#60695D" d="m81.764 107.008-4.79 17.938 17.868-5.047-5.704-5.622 42.95-43.572-1.669-1.646-42.95 43.572-5.705-5.623Z" data-color="2"></path>
        </g>
      </svg>
  </section>
  <section class="w-full h-auto">
    <div class="w-full h-1/3 flex flex-col md:flex-row lg:flex-row">
      <div  class="w-full md:w-1/2 lg:w-1/2 h-full p-16 md:p-24 lg:p-36 flex flex-col justify-center">
        <TextBlock @click="router.push({name: 'contact'})" title="From Our Hearts to Your Plate" button-text="Visit Us" description="I'm an extra long title. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font. I’m a great place for you to tell a story and let your users know a little more about you." subtitle=""/>
      </div>
      <div class="w-full md:w-1/2 lg:w-1/2">
        <ImageBlock href="https://static.wixstatic.com/media/c837a6_2274a6485ced4ff4b8953b86ffdffee7~mv2.jpg/v1/fill/w_951,h_825,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/c837a6_2274a6485ced4ff4b8953b86ffdffee7~mv2.jpg"/>
      </div>
    </div>
  </section>
  <Footer/>
</template>

<script setup>
import {onMounted} from "vue";
const router = useRouter()

import {useRouter} from "vue-router";
import Header from "@/components/Header.vue";
import UsInfo from "@/components/ThisIsUsInfoDir/Info.vue";
import Footer from "@/components/Footer.vue";
import ImageBlock from "@/components/imageText/ImageBlock.vue";
import TextBlock from "@/components/imageText/TextBlock.vue";


onMounted(() => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});
</script>

<style scoped>

</style>