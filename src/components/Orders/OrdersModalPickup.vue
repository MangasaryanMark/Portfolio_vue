<template>
  <div class="p-6 w-full min-h-20 border-b border-gray-600 mb-5">
    <div class="w-full flex flex-row items-center text-start text-sm text-black">
      <p>Pickup from: <span class="text-base">San Francisco, CA, USA</span></p>
    </div>
    <div class="w-full mt-3 text-start text-sm text-black">
      <p class="flex flex-col">
        When:
        <span class="text-base flex flex-row items-center">
        <input
            type="radio"
            id="up-to-30"
            name="time-selection"
            value="up-to-30"
            v-model="selectedOption"
            class="me-2 relative appearance-none w-4 h-4 rounded-full color-gray-500 border border-gray-600 checked:before:absolute checked:before:left-[3px] checked:before:top-[3px] checked:before:bg-gray-500 checked:before:content-[''] checked:before:w-2 checked:before:h-2 checked:before:origin-center checked:before:leading-0 checked:before:rounded-full"
            checked
        />
        <label for="up-to-30" class="cursor-pointer">Up to 30 minutes</label>
      </span>
      </p>
      <p class="flex flex-col">
      <span class="text-base flex flex-row items-center">
        <input
            type="radio"
            id="schedule-later"
            name="time-selection"
            value="schedule-later"
            v-model="selectedOption"
            class="me-2 relative appearance-none w-4 h-4 rounded-full color-gray-500 border border-gray-600 checked:before:absolute checked:before:left-[3px] checked:before:top-[3px] checked:before:bg-gray-500 checked:before:content-[''] checked:before:w-2 checked:before:h-2 checked:before:origin-center checked:before:leading-0 checked:before:rounded-full"
        />
        <label for="schedule-later" class="cursor-pointer">Schedule for later</label>
      </span>
      </p>
      <div class="w-full mt-4 flex flex-row items-center  justify-between">
        <div class="w-1/2 relative me-4">
          <button
              @click="isOpen = !isOpen; secondOpen = false"
              class="w-full border border-black ps-4 py-2 text-lg flex items-center justify-between text-gray-700 font-medium focus:outline-none"
          >
            {{ selectedDayValue || 'Today' }}
            <svg xmlns="http://www.w3.org/2000/svg"
                 :class="isOpen ? 'rotate-180' : 'rotate-0'"
                 class="ml-28 mr-6 h-4 w-4 transform transition-transform duration-200"
                 fill="none"
                 viewBox="0 0 24 24"
                 stroke="currentColor"
            >
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
            </svg>
          </button>
          <div v-if="isOpen"
               class="absolute top-[100%] border border-black w-full shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
            <div class="py-1" role="menu" aria-orientation="vertical">
              <OrderTimes :datas="[
                  'Today'
              ]"
                @update:selectedDayValue="updateDayValue"
              />
            </div>
          </div>
        </div>
        <div class="w-1/2 relative">
          <button
              @click="secondOpen = !secondOpen; isOpen = false"
              class="w-full border border-black ps-4 py-2 text-lg flex items-center justify-between text-gray-700 font-medium focus:outline-none"
          >
            {{ selectedTimeValue || nearestTime }}
            <svg xmlns="http://www.w3.org/2000/svg"
                 :class="secondOpen ? 'rotate-180' : 'rotate-0'"
                 class="ml-28 mr-6 h-4 w-4 transform transition-transform duration-200"
                 fill="none"
                 viewBox="0 0 24 24"
                 stroke="currentColor"
            >
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/>
            </svg>
          </button>
          <div v-if="secondOpen"
               class="absolute bottom-full border border-black w-full max-h-64 overflow-y-auto shadow-lg origin-bottom-left bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
            <div class="py-1" role="menu" aria-orientation="vertical">
              <OrderTimes :datas="intervals"
                @update:selectedValue="updateTimeValue"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import {onMounted, ref} from 'vue';
import OrderTimes from "@/components/Orders/OrderTimes.vue";
import moment from "moment";


const selectedOption = ref('up-to-20');
const selectedTimeValue = ref('');
const selectedDayValue = ref('');
const isOpen = ref(false);
const secondOpen = ref(false);
const currentTime = ref("");
const nearestTime = ref("");
const intervals = ref([]);  // Массив интервалов


const updateTimeValue = (value) => {
  selectedTimeValue.value = value;
};
const updateDayValue = (value) => {
  selectedDayValue.value = value;
};

const calculateNearestTime = () => {
  const now = moment();
  currentTime.value = now.format("LT");

  if (now.minute() % 15 !== 0) {
    now.add(15 - (now.minute() % 15), "minutes");
  }

  now.add(45, "minutes");

  nearestTime.value = now.format("LT");
};

const calculateIntervals = () => {
  const now = moment();
  const endTime = moment("11:46 PM", "hh:mm A");


  if (now.minute() % 15 !== 0) {
    now.add(15 - (now.minute() % 15), "minutes");
  }
  now.add(45, "minutes");

  currentTime.value = now.format("LT");

  const tempIntervals = [];
  while (now <= endTime) {
    tempIntervals.push(now.format("LT"));
    now.add(15, "minutes");
  }

  intervals.value = tempIntervals;
  console.log(intervals.value);
};

onMounted(() => {
  calculateNearestTime();
  calculateIntervals();
});
</script>