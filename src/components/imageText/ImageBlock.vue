<template>
  <img :src="href" class="bg-cover bg-center w-full h-full" alt=""/>
</template>

<script setup>

const props = defineProps({
  href: {
    type: String,
    required: true,
  }
})
</script>

<style scoped>

</style>