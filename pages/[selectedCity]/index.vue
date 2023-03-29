<script setup>
import Card from "~~/components/card/Card.vue";
import { useRoute } from 'vue-router'
import { useForecastStore } from '../../stores/forecast'
import { useProvincesStore } from "../../stores/provinces";

const forecastStore = useForecastStore();

const {params} = useRoute();
const cityName = params.selectedCity

const provincesStore = useProvincesStore();

await provincesStore.setSelectedCity(cityName)

</script>

<template>
  <div>
    <Card />
  </div>
</template>
