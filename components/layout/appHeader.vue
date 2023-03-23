<script setup>
import { ref } from 'vue';

const { data: provinces } = await useFetch(
  "https://turkiyeapi.cyclic.app/api/v1/provinces"
);

const cities = provinces.value.data.map((x) => ({
  name: x.name,
  lat: x.coordinates.latitude,
  lon: x.coordinates.longitude,
}));
console.log(cities);
const selectedCity = ref('');

const selectHandler = () => {
  console.log(selectedCity.value);
  selectedCity.value=''
}
</script>

<template>
  <header class="">
    <nav class="flex gap-6 sp justify-between items-center">
      <NuxtLink to="/">Home</NuxtLink>
      <h1 class="text-4xl">How Is The Weather</h1>
      <NuxtLink :to="'/about'">About</NuxtLink>
    </nav>
    <div class="flex justify-center items-center p-4">
      <select
        class="border-2 h-8 w-60 rounded-lg shadow-md border-gray-300"
        v-model="selectedCity"
        @click="selectHandler"
      >
        <option disabled value="">Enter a city</option>
        <option
          v-for="city in cities"
          :key="city.name"
        >{{ city.name }}</option>
    </select>
    </div>
  </header>
</template>
