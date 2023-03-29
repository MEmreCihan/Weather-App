<script setup>
import Card from "../../components/card/Card.vue";
import { useRoute } from "vue-router";
import { useForecastStore } from "../../stores/forecast";
import { useProvincesStore } from "../../stores/provinces";

const provincesStore = useProvincesStore();
const route = useRoute();

const { selectedCity, date } = route.params;

await provincesStore.setSelectedCity(selectedCity);

const forecastStore = useForecastStore();
const dailyForecast = ref(
  forecastStore.weeklyForecast.find((x) => x.date == date)
);
console.log(dailyForecast);
</script>

<template>
  <div
    class="flex justify-center relative bg-slate-900"
    v-if="forecastStore.weeklyForecast"
  >
    <div
      class="w-[750px] h-[550px] border-2 rounded-md bg-cover bg-center absolute mt-10"
    >
      <h1 class="text-center font-serif font-bold text-3xl text-white py-2">
        {{ provincesStore.selectedCity }}
      </h1>
      <p class="text-center font-serif font-bold text-xl text-white py-2">
        ({{ date }})
      </p>
      <hr />
      <div>
        <div class="flex justify-center">
          <img
            :src="`https://openweathermap.org/img/wn/${dailyForecast.icon}d@2x.png`"
            class="w-30 h-30"
          />
        </div>
        <div class="flex justify-center gap-6">
          <p>Min: {{ Math.round(dailyForecast.temp_min) }}°C</p>
          <p>Max: {{ Math.round(dailyForecast.temp_max) }}°C</p>
        </div>
        <div>Chart</div>
      </div>
      <div class="flex justify-center">
        <button class="border-2 rounded-md border-slate-50 bg-[#5da7d8] hover:bg-[#c7e1f3] hover:border-[#5da7d8] h-10 w-60">
          Back to 5 Days Forecast
        </button>
      </div>
    </div>
  </div>
</template>
