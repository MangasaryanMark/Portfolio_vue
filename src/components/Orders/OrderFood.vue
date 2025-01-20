<template>

  <div class="items-center mt-12">
    <div class="w-full h-20 text-black text-4xl">
      <p>All Day Every Day</p>
    </div>
    <div class="w-full mb-5">
      <div class="w-full h-8 text-3xl mb-7 text-start align-middle">
        <p>Bakery</p>
      </div>
      <div class="w-full flex flex-col md:flex-row lg:flex-row justify-between mt-2">
        <Menu title="Croissant (Plain/Chocolate)" description="I’m a dish description. Click “Edit Menu” to open the Restaurant Menu editor and change my text." price="6.00"/>
        <Menu title="Daily Muffin" description="I’m a dish description. Click “Edit Menu” to open the Restaurant Menu editor and change my text." price="6.00"/>
        <Menu title="Cheesecake" description="I’m a dish description. Click “Edit Menu” to open the Restaurant Menu editor and change my text." price="6.00"/>
      </div>
    </div>
  </div>
  <div class="w-full items-center mt-5">
    <div class="w-full">
      <div class="w-full h-8 mb-7 text-3xl text-start align-middle">
        <p>All-Day Breakfast</p>
      </div>
      <div class="w-full flex flex-col md:flex-row lg:flex-row justify-between mt-2">
        <Menu title="Granola & Greek Yogurt"
              description="I’m a dish description. Click “Edit Menu” to open the Restaurant Menu editor and change my text."
              price="12.00"/>
        <Menu title="Chia Pudding"
              description="I’m a dish description. Click “Edit Menu” to open the Restaurant Menu editor and change my text."
              price="12.00"/>
        <Menu title="Superfood Acai Bowl"
              description="I’m a dish description. Click “Edit Menu” to open the Restaurant Menu editor and change my text."
              price="12.00"/>
      </div>
      <div class="w-full flex flex-col md:flex-row lg:flex-row justify-between mt-2">
        <Menu title="Avocado Toast"
              description="I’m a dish description. Click “Edit Menu” to open the Restaurant Menu editor and change my text."
              price="12.00"/>
        <Menu title="Eggs Benedict"
              description="I’m a dish description. Click “Edit Menu” to open the Restaurant Menu editor and change my text."
              price="12.00"/>
        <Menu title="Bacon & Eggs on Rye"
              description="I’m a dish description. Click “Edit Menu” to open the Restaurant Menu editor and change my text."
              price="12.00"/>
      </div>
      <div class="w-full flex flex-col md:flex-row lg:flex-row justify-between mt-2">
        <Menu title="Spinach & Salmon Brioche"
              description="I’m a dish description. Click “Edit Menu” to open the Restaurant Menu editor and change my text."
              price="12.00"/>
        <Menu title="Smoked Salmon Bagel"
              description="I’m a dish description. Click “Edit Menu” to open the Restaurant Menu editor and change my text."
              price="12.00"/>
        <Menu title="Green Shakshuka"
              description="I’m a dish description. Click “Edit Menu” to open the Restaurant Menu editor and change my text."
              price="12.00"/>
      </div>
    </div>
  </div>
</template>

<script setup>

import Menu from "@/components/Orders/OrderMenu.vue";

</script>

<style scoped>

</style>