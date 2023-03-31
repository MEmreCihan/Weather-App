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

const router = useRouter();

const formatter = new Intl.DateTimeFormat("tr-TR");

const dateFormat = (date) => {
  const d = new Date(date);
  return formatter.format(d);
};

const showMore = (date, i) => {
  router.push({ path: `/${selectedCity.value}/${date}` });
};
</script>

<template>
  <div class="flex justify-center relative" v-if="weeklyForecast.length > 0">
    <div>
      <img
        class="w-screen md:w-[900px] sm:h-[630px] h-[500px] opacity-100 bg-cover brightness-75 rounded-md"
        :style="{
          backgroundImage: `url(${getWeatherBg(
            weeklyForecast[0].list[0].main
          )})`,
        }"
      />
    </div>
    <div
      class="w-screen md:w-[900px] border-2 rounded-md bg-cover bg-center absolute p-1"
    >
      <h1 class="text-center font-serif font-bold text-3xl text-white py-2">
        {{ provincesStore.selectedCity }}
      </h1>
      <hr />
      <div class="h-[400px]">
        <div class="h-3/4 flex justify-between items-center text-center">
          <div class="w-full">
            <p class="md:text-8xl text-4xl p-6 text-white">
              {{ Math.round(weeklyForecast[0].list[0].temp) }} °C
            </p>
          </div>
          <div class="w-full">
            <p class="md:text-4xl text-2xl text-white">
              {{ weeklyForecast[0].list[0].main }}
            </p>
          </div>
        </div>
        <div class="h-1/4 text-white">
          <div class="flex justify-around">
            <p>
              Min: {{ Math.round(weeklyForecast[0].temp_min) }}°C - Max:
              {{ Math.round(weeklyForecast[0].temp_max) }}°C
            </p>
            <p>
              Wind: {{ Math.round(weeklyForecast[0].list[0].wind_speed) }}m/s
            </p>
            <p>
              Humidity: {{ Math.round(weeklyForecast[0].list[0].humidity) }}%
            </p>
          </div>
          <div class="flex justify-around pt-10">
            <p>
              Feels Like:
              {{ Math.round(weeklyForecast[0].list[0].feels_like) }}°C
            </p>
            <p>
              Pressure: {{ Math.round(weeklyForecast[0].list[0].pressure) }}
            </p>
          </div>
        </div>
      </div>
      <div class="flex flex-wrap mt-10 justify-between items-end p-2">
        <template v-for="(item, i) in weeklyForecast.slice(1)" :key="i">
          <div
            class="w-36 text-center shadow-md cursor-pointer hover:-translate-y-2 duration-700 border-2 rounded-md text-white my-1"
            @click="showMore(item.date, i)"
          >
            <p class="text-lg font-semibold">{{ dateFormat(item.date) }}</p>
            <div class="flex gap-4 p-1">
              <img
                :src="`https://openweathermap.org/img/wn/${item.icon}d@2x.png`"
                class="w-16 h-16"
              />
              <p>
                {{ Math.round(item.temp_min) }}°C
                {{ Math.round(item.temp_max) }}°C
              </p>
            </div>
          </div>
        </template>
      </div>
    </div>
  </div>
</template>
