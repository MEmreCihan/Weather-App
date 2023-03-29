<script setup>
import { storeToRefs } from "pinia";
import { useProvincesStore } from "../../stores/provinces";
import { useRouter } from "vue-router";

const router = useRouter();

const provincesStore = useProvincesStore();
const { selectedCity } = storeToRefs(provincesStore);

// kullanici sehri sectiginde, koordinasyonlari al ve haftalik hava durumunu getir
watch(selectedCity, (newValue, oldValue) => {
  router.push({ path: `/${selectedCity.value}` });
});

await provincesStore.fetchCities();
</script>

<template>
  <header>
    <nav class="flex gap-6 justify-between items-center">
      <NuxtLink to="/">Home</NuxtLink>
      <h1 class="text-4xl">How Is The Weather</h1>
      <NuxtLink :to="'/about'">About</NuxtLink>
      <NuxtLink :to="'/other'">Other</NuxtLink>
    </nav>
    <div class="flex justify-center items-center p-4">
      <select
        class="border-2 h-8 w-60 rounded-lg shadow-md border-gray-300"
        v-model="provincesStore.selectedCity"
      >
        <option disabled value="">Enter a city</option>
        <option
          v-for="city in provincesStore.cities"
          :key="city.name"
          :value="city.name"
        >
          {{ city.name }}
        </option>
      </select>
    </div>
  </header>
</template>
