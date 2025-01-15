<template>
  <Header/>
  <HomeMain/>
  <ImageText/>
  <Info/>
  <ImagesLastSection/>
  <Footer/>
</template>


<script setup>
import { onMounted } from "vue";
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";
import HomeMain from "@/components/HomeDir/HomeMain.vue";
import ImageText from "@/components/imageText/ImageText.vue";
import Info from "@/components/HomeInfoDir/Info.vue";
import ImagesLastSection from "@/components/HomeDir/ImagesLastSection.vue";


onMounted(() => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});
</script>

