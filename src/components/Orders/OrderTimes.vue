<template>
  <ul>
    <li
        class="block cursor-pointer px-4 py-2 text-lg text-gray-700 hover:bg-gray-200 transition-all duration-300"
        @click="handleClick(data);"
        role="menuitem"
        v-for="(data, index) in datas"
        :key="index"
    >
      {{ data }}
    </li>
  </ul>
</template>

<script setup>
import { ref, defineEmits } from 'vue';

const props = defineProps({
  datas: {
    type: Array,
    required: true,
  },
});

const emit = defineEmits(['update:selectedValue']);

const handleClick = (value) => {
  emit('update:selectedValue', value);
};
</script>