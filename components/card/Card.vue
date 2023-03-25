<script setup>
import { getWeatherBg } from "../../helpers/weather-bg";
import { useProvincesStore } from "@/stores/provinces";
import { storeToRefs } from "pinia";
import { useForecastStore } from "@/stores/forecast";
import { useRouter } from "vue-router";

const forecastStore = useForecastStore();
const provincesStore = useProvincesStore();
const { selectedCity } = storeToRefs(provincesStore);

const route = useRouter();

// kullanici sehri sectiginde, koordinasyonlari al ve haftalik hava durumunu getir
watch(selectedCity, (newValue, oldValue) => {
  console.log(newValue);
  const { lat, lon } = provincesStore.cities.find((x) => x.name == newValue);
  forecastStore.fetchWeeklyForecast(lat, lon);
  route.push({ path: `/${selectedCity.value}` })
});

//genel hava durumu bilgisi
const main = "rainy";
</script>

<template>
  <div class="flex justify-center relative">
    <img
      class="w-[900px] h-[700px] opacity-100 bg-cover brightness-75 rounded-md"
      :style="{ backgroundImage: `url(${getWeatherBg(main)})` }"
    />
    <div
      class="w-[900px] h-[700px] border-2 rounded-md bg-cover bg-center absolute"
    >
      <h1 class="text-center font-serif font-bold text-3xl text-white py-2">
        {{ provincesStore.selectedCity }}
      </h1>
      <hr />
      <div class="h-[400px]">
        <div class="h-3/4 flex justify-between items-center text-center">
          <div class="w-full">
            <p class="text-9xl p-6 text-white">16°C</p>
          </div>
          <div class="w-full">
            <p class="text-2xl text-white">Partly Cloud</p>
          </div>
        </div>
        <div class="h-1/4 text-white">
          <div class="flex justify-around">
            <p>min: 12°C - max: 20°C</p>
            <p>wind: 7m/s</p>
            <p>humidity: 23%</p>
          </div>
          <div class="flex justify-around pt-10">
            <p>feels like: 15°C</p>
            <p>pressure: 99</p>
          </div>
        </div>
      </div>
      <div class="flex h-52 justify-between items-end px-2">
        <div
          class="w-40 text-center shadow-md cursor-pointer hover:-translate-y-2 duration-700 border-2 rounded-md text-white"
        >
          <p class="text-lg font-semibold">date</p>
          <div class="flex gap-2 p-1">
            <p>img</p>
            <p>min-max temprature</p>
          </div>
        </div>
        <div
          class="w-40 text-center shadow-md cursor-pointer hover:-translate-y-2 duration-700 border-2 rounded-md"
        >
          <p class="text-lg font-semibold">date</p>
          <div class="flex gap-2 p-1">
            <p>img</p>
            <p>min-max temprature</p>
          </div>
        </div>
        <div
          class="w-40 text-center shadow-md cursor-pointer hover:-translate-y-2 duration-700 border-2 rounded-md"
        >
          <p class="text-lg font-semibold">date</p>
          <div class="flex gap-2 p-1">
            <p>img</p>
            <p>min-max temprature</p>
          </div>
        </div>
        <div
          class="w-40 text-center shadow-md cursor-pointer hover:-translate-y-2 duration-700 border-2 rounded-md"
        >
          <p class="text-lg font-semibold">date</p>
          <div class="flex gap-2 p-1">
            <p>img</p>
            <p>min-max temprature</p>
          </div>
        </div>
        <div
          class="w-40 text-center shadow-md cursor-pointer hover:-translate-y-2 duration-700 border-2 rounded-md"
        >
          <p class="text-lg font-semibold">date</p>
          <div class="flex gap-2 p-1">
            <p>img</p>
            <p>min-max temprature</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
;
