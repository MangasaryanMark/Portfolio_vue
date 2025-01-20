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
            class="me-2 relative appearance-none w-4 h-4 rounded-full color-gray-500 border border-gray-600 checked:before:absolute checked:before:left-1/4 checked:before:top-1/4 checked:before:bg-gray-500 checked:before:content-[''] checked:before:w-2 checked:before:h-2 checked:before:origin-center checked:before:leading-0 checked:before:rounded-full"
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
            class="me-2 relative appearance-none w-4 h-4 rounded-full color-gray-500 border border-gray-600 checked:before:absolute checked:before:left-1/4 checked:before:top-1/4 checked:before:bg-gray-500 checked:before:content-[''] checked:before:w-2 checked:before:h-2 checked:before:origin-center checked:before:leading-0 checked:before:rounded-full"
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
            {{ selectedTimeValue || '8:15 AM' }}
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
              <OrderTimes :datas="[
                  '6:15 AM','6:30 AM','6:45 AM','7:00 AM','7:15 AM','7:30 AM','7:45 AM','8:00 AM','8:15 AM',
                  '8:30 AM','8:45 AM','9:00 AM','9:15 AM','9:30 AM','9:45 AM','10:00 AM','10:15 AM','10:30 AM',
                  '10:45 AM','11:00 AM','11:15 AM','11:30 AM','11:45 AM','12:00 PM','12:15 PM','12:30 PM',
                  '12:45 PM','1:00 PM','1:15 PM','1:30 PM','1:45 PM','2:00 PM','2:15 PM','2:30 PM','2:45 PM','3:00 PM',
                  '3:15 PM','3:30 PM','3:45 PM','4:00 PM','4:15 PM','4:30 PM','4:45 PM','5:00 PM','5:15 PM',
                  '5:30 PM','5:45 PM','6:00 PM','6:15 PM','6:30 PM','6:45 PM','7:00 PM','7:15 PM','7:30 PM',
                  '7:45 PM','8:00 PM','8:15 PM','8:30 PM','8:45 PM','9:00 PM','9:15 PM','9:30 PM','9:45 PM',
                  '10:00 PM','10:15 PM','10:30 PM','10:45 PM','11:00 PM','11:15 PM','11:30 PM','11:45 PM'
              ]"
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
import {ref} from 'vue';
import OrderTimes from "@/components/Orders/OrderTimes.vue";

const selectedOption = ref('up-to-20');
const selectedTimeValue = ref('');
const selectedDayValue = ref('');
const isOpen = ref(false);
const secondOpen = ref(false);
const updateTimeValue = (value) => {
  selectedTimeValue.value = value;
};
const updateDayValue = (value) => {
  selectedDayValue.value = value;
};
</script>