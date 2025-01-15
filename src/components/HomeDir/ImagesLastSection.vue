<template>
  <section class="w-full">
    <div class="w-full h-4/5 flex flex-col md:flex-row lg:flex-row justify-between">
      <div class="sm:w-full md:w-1/5 lg:w-1/5 p-8 md:p-2 lg:p-2">
        <ImageBlock
            href="https://static.wixstatic.com/media/c837a6_81d939f67f774d688ab6c00798633c93~mv2.jpg/v1/fill/w_304,h_404,q_90/c837a6_81d939f67f774d688ab6c00798633c93~mv2.webp"/>
      </div>
      <div class="sm:w-full md:w-1/5 lg:w-1/5 p-8 md:p-2 lg:p-2">
        <ImageBlock
            href="https://static.wixstatic.com/media/c837a6_6d5b30895ef24c53ab446b93a107a6f0~mv2.jpg/v1/fill/w_304,h_404,q_90/c837a6_6d5b30895ef24c53ab446b93a107a6f0~mv2.webp"/>
      </div>
      <div class="sm:w-full md:w-1/5 lg:w-1/5 p-8 md:p-2 lg:p-2">
        <ImageBlock
            href="https://static.wixstatic.com/media/c837a6_1b6492bb36aa454383353353445c3026~mv2.jpg/v1/fill/w_304,h_404,q_90/c837a6_1b6492bb36aa454383353353445c3026~mv2.webp"/>
      </div>
      <div class="sm:w-full md:w-1/5 lg:w-1/5 p-8 md:p-2 lg:p-2">
        <ImageBlock
            href="https://static.wixstatic.com/media/c837a6_528fac98ab7549999cdc047acf09e94d~mv2.jpg/v1/fill/w_304,h_404,q_90/c837a6_528fac98ab7549999cdc047acf09e94d~mv2.webp"/>
      </div>
      <div class="sm:w-full md:w-1/5 lg:w-1/5 p-8 md:p-2 lg:p-2">
        <ImageBlock
            href="https://static.wixstatic.com/media/c837a6_901e74dd86954fe5acdec3ff08ee2d42~mv2.jpg/v1/fill/w_303,h_404,q_90/c837a6_901e74dd86954fe5acdec3ff08ee2d42~mv2.webp"/>
      </div>
    </div>
  </section>
</template>

<script>
import ImageBlock from "@/components/imageText/ImageBlock.vue";

export default {
  name: "ImagesLastSection",
  components: {ImageBlock}
}
</script>

<style scoped>

</style>