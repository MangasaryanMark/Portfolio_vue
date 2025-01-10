<template>
  <section class="w-full h-auto">
    <div class="w-full h-1/3 flex">
      <div class="w-1/2 h-full p-24">
        <TextBlock title="Eat."
                   subtitle="Breakfast, Lunch and Artisanal Pastries"
                   description="I'm a paragraph. Click here to add your own text and edit me. I’m a great place for you to tell a story and let your users know a little more about you."
                   buttonText="See More"
        />
      </div>
      <div class="w-1/2 h-full">
        <ImageBlock
            href="https://static.wixstatic.com/media/c837a6_b12138462b31409aaf8029cf7a2dd7ed~mv2.jpg/v1/fill/w_951,h_738,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/c837a6_b12138462b31409aaf8029cf7a2dd7ed~mv2.jpg"/>
      </div>
    </div>
    <div class="w-full h-1/3 flex">
      <div class="w-1/2 h-full">
        <ImageBlock
            href="https://static.wixstatic.com/media/c837a6_1c8f21588e024e4aa589012f541f7a3b~mv2.jpg/v1/fill/w_948,h_738,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/c837a6_1c8f21588e024e4aa589012f541f7a3b~mv2.jpg"/>
      </div>
      <div class="w-1/2 h-full p-24">
        <TextBlock title="Drink."
                   subtitle="The Freshest Cup in Town"
                   description="I'm a paragraph. Click here to add your own text and edit me. I’m a great place for you to tell a story and let your users know a little more about you."
                   buttonText="See More"
        />
      </div>
    </div>
    <div class="w-full h-1/3 flex">
      <div class="w-1/2 h-full p-24">
        <TextBlock title="Enjoy."
                   subtitle="Make Yourself at Home"
                   description="I'm a paragraph. Click here to add your own text and edit me. I’m a great place for you to tell a story and let your users know a little more about you."
                   buttonText="Visit Us"
        />
      </div>
      <div class="w-1/2 h-full">
        <ImageBlock
            href="https://static.wixstatic.com/media/c837a6_5d9b5804b420484aa112d37fa3ce3f45~mv2.jpg/v1/fill/w_951,h_738,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/c837a6_5d9b5804b420484aa112d37fa3ce3f45~mv2.jpg"/>
      </div>
    </div>

  </section>
</template>

<script setup>


import TextBlock from "@/components/imageText/TextBlock.vue";
import ImageBlock from "@/components/imageText/ImageBlock.vue";
</script>

<style scoped>

</style>