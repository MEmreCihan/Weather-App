<script setup>
import { getWeatherBg } from "../../helpers/weather-bg";
import { useProvincesStore } from "@/stores/provinces";
import { storeToRefs } from "pinia";
import { useForecastStore } from "@/stores/forecast";
import { useRouter } from "vue-router";

const forecastStore = useForecastStore();
const { weeklyForecast } = storeToRefs(forecastStore);
const provincesStore = useProvincesStore();
const { selectedCity } = storeToRefs(provincesStore);

const route = useRouter();

// kullanici sehri sectiginde, koordinasyonlari al ve haftalik hava durumunu getir
watch(selectedCity, (newValue, oldValue) => {
  const { lat, lon } = provincesStore.cities.find((x) => x.name == newValue);
  forecastStore.fetchWeeklyForecast(lat, lon);
  route.push({ path: `/${selectedCity.value}` });
  console.log("tetiklendi");
});

const formatter = new Intl.DateTimeFormat("en-US");

const dateFormat = (date) => {
  const d = new Date(date);
  return formatter.format(d);
};

const showMore = (date) => {
  route.push({ path: `/${selectedCity.value}/${date}` });
};
</script>

<template>
  <div class="flex justify-center relative" v-if="weeklyForecast.length > 0">
    <img
      class="w-[900px] h-[700px] opacity-100 bg-cover brightness-75 rounded-md"
      :style="{
        backgroundImage: `url(${getWeatherBg(weeklyForecast[0].list[0].main)})`,
      }"
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
            <p class="text-8xl p-6 text-white">
              {{ Math.round(weeklyForecast[0].list[0].temp) }} °C
            </p>
          </div>
          <div class="w-full">
            <p class="text-4xl text-white">
              {{ weeklyForecast[0].list[0].main }}
            </p>
          </div>
        </div>
        <div class="h-1/4 text-white">
          <div class="flex justify-around">
            <p>
              min: {{ Math.round(weeklyForecast[0].temp_min) }}°C - max:
              {{ Math.round(weeklyForecast[0].temp_max) }}°C
            </p>
            <p>
              wind: {{ Math.round(weeklyForecast[0].list[0].wind_speed) }}m/s
            </p>
            <p>
              humidity: {{ Math.round(weeklyForecast[0].list[0].humidity) }}%
            </p>
          </div>
          <div class="flex justify-around pt-10">
            <p>
              feels like:
              {{ Math.round(weeklyForecast[0].list[0].feels_like) }}°C
            </p>
            <p>
              pressure: {{ Math.round(weeklyForecast[0].list[0].pressure) }}
            </p>
          </div>
        </div>
      </div>
      <div class="flex h-52 justify-between items-end px-2">
        <template
          v-for="(item, i) in weeklyForecast.slice(1)"
          :key="i"
          
        >
          <div
            class="w-40 text-center shadow-md cursor-pointer hover:-translate-y-2 duration-700 border-2 rounded-md text-white" @click="showMore(item.date)"
          >
            <p class="text-lg font-semibold">{{ dateFormat(item.date) }}</p>
            <div class="flex gap-2 p-1">
              <p>img</p>
              <p>
                {{ Math.round(item.temp_min) }}°C-{{
                  Math.round(item.temp_max)
                }}°C
              </p>
            </div>
          </div>
        </template>
      </div>
    </div>
  </div>
</template>
