<script setup>
import { useRoute, useRouter } from "vue-router";
import { useForecastStore } from "../../stores/forecast";
import { useProvincesStore } from "../../stores/provinces";
import Chart from "../../components/chart/Chart.vue";

const provincesStore = useProvincesStore();
const route = useRoute();
const router = useRouter();

const { selectedCity, date } = route.params;

await provincesStore.setSelectedCity(selectedCity);

const forecastStore = useForecastStore();
const dailyForecast = ref(forecastStore.weeklyForecast.find((x) => x.date == date));
console.log(dailyForecast);

const formatter = new Intl.DateTimeFormat("en-GB", { dateStyle: 'full'});

const dateFormat = (date) => {
  const d = new Date(date);
  return formatter.format(d);
};

</script>

<template>
  <div
    class="flex justify-center relative"
    v-if="dailyForecast"
  >
    <div
      class="border-2 rounded-md bg-cover bg-slate-800 bg-center mt-10"
    >
      <h1 class="text-center font-serif font-bold text-3xl text-white py-2">
        {{ provincesStore.selectedCity }}
      </h1>
      <p class="text-center font-serif font-bold text-xl text-white py-2">
        ({{ dateFormat(date) }})
      </p>
      <hr />
      <div>
        <div class="flex justify-center">
          <img
            :src="`https://openweathermap.org/img/wn/${dailyForecast.icon}d@2x.png`"
            class="w-30 h-30"
          />
        </div>
        <div class="flex justify-center gap-6 text-white">
          <p>Min: {{ Math.round(dailyForecast.temp_min) }}°C</p>
          <p>Max: {{ Math.round(dailyForecast.temp_max) }}°C</p>
        </div>
        <div>
          <Chart 
            :dates="dailyForecast.list.map(x => x.date.split(' ')[1].substring(0,5))" 
            :temps="dailyForecast.list.map(x => Math.round(x.temp))"/>
        </div>
      </div>
      <div class="flex justify-center pb-2">
        <button class="border-2 rounded-md border-slate-50 bg-[#5da7d8] hover:bg-[#c7e1f3] hover:border-[#5da7d8] h-10 w-60" @click="router.back()">
          Back to 5 Days Forecast
        </button>
      </div>
    </div>
  </div>
</template>
