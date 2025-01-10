<template>
  <section class="bg-footer-of-footer w-full h-auto p-36 ">
    <div class="text-6xl text-black text-center">
      <p>Drop By for a Bite.</p>
    </div>
    <div class="w-full h-2/3 mt-12 flex justify-center">
      <div class="border-r border-black w-1/3">
        <InfoBlock title="Address" :datas="[
          '500 Terry Francine St.',
          'San Francisco, CA 94158',
        ]"/>
      </div>
      <div class="w-1/3">
        <InfoBlock title="Opening Hours" :datas="[
          'Mon - Fri: 9am - 6pm',
          'Saturday: 10am - 2pm',
          'Sunday: Closed',
        ]"/>
      </div>
    </div>
  </section>
</template>

<script>
import InfoBlock from "@/components/InfoDir/InfoBlock.vue";

export default {
  name: "Info",
  components: {InfoBlock}
}
</script>

<style scoped>

</style>