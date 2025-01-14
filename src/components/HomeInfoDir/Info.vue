<template>
  <section class="bg-footer-of-footer w-full py-16 px-4 lg:px-36">
    <div class="text-xl sm:text-2xl md:text-4xl lg:text-6xl text-black text-center">
      <p>Drop By for a Bite.</p>
    </div>
    <div class="w-full mt-12 lg:mt-16">
      <div class="w-full lg:w-2/3 mx-auto flex sm:flex-col md:flex-row md:items-baseline lg:flex-row items-center justify-center sm:space-y-8 lg:space-y-0 lg:space-x-8">
        <div class="flex flex-col text-center items-center md:border-r lg:border-r border-black p-0 md:p-6 lg:p-6">
          <InfoBlock
              title="Address"
              :datas="[
            '500 Terry Francine St.',
            'San Francisco, CA 94158',
          ]"
          />
        </div>
        <div class="flex flex-col text-center items-center md:p-6 lg:p-6">
          <InfoBlock
              title="Opening Hours"
              :datas="[
            'Mon - Fri: 9am - 6pm',
            'Saturday: 10am - 2pm',
            'Sunday: Closed',
          ]"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import InfoBlock from "@/components/HomeInfoDir/InfoBlock.vue";

export default {
  name: "HomeInfo",
  components: {InfoBlock}
}
</script>

<style scoped>

</style>