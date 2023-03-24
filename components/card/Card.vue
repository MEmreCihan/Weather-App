<script setup>
  import {getWeatherBg} from '../../helpers/weather-bg'
  import {useProvincesStore} from '@/stores/provinces'
  import { storeToRefs } from 'pinia'
  import {useForecastStore} from '@/stores/forecast'
  
  const forecastStore = useForecastStore()
  const provincesStore = useProvincesStore()

  const { selectedCity } = storeToRefs(provincesStore)

  // kullanici sehri sectiginde, koordinasyonlari al ve haftalik hava durumunu getir
  watch(selectedCity, (newValue,oldValue) => {
    console.log(newValue)
    const {lat,lon} = provincesStore.cities.find(x => x.name == newValue)
    forecastStore.fetchWeeklyForecast(lat,lon)
  })

  const main = 'rainy'
</script>

<template>
  <div class="flex justify-center">
    <div 
      class="w-[900px] h-[700px] border-2 rounded-md bg-cover bg-center" 
      :style="{backgroundImage: `url(${getWeatherBg(main)})`}"
    >
    <!-- <img class="bg-cover bg-center"> -->
      <h1 class="text-center font-serif font-bold text-3xl">
        {{  provincesStore.selectedCity}}
      </h1>
      <hr />
      <div class="flex justify-between items-center text-center h-96">
        <div class="w-full">
          <p class="text-8xl p-6">16°C</p>
          <p>Partly Cloud</p>
        </div>
        <div class="w-full">
          <p>min: 12°C - max: 20°C</p>
          <p>wind: 7m/s</p>
          <p>humidity: 23%</p>
        </div>
      </div>
      <br />
      <div class="flex h-60 justify-between items-end p-2">
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
