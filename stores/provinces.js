import { defineStore } from "pinia";
import { useForecastStore } from "./forecast";
import { getProvinces } from "../helpers/api-helper";

const forecastStore = useForecastStore();

export const useProvincesStore = defineStore("provinces", () => {
  const cities = ref([]);

  const selectedCity = ref();

  const fetchCities = async () => {
    const resp = await getProvinces();
    cities.value = resp.data.data.map((x) => ({
      name: x.name,
      lat: x.coordinates.latitude,
      lon: x.coordinates.longitude,
    }));
  };

  const setSelectedCity = async (province) => {
    selectedCity.value = province;
    let city = cities.value.find((x) => x.name == province);
    if (!!city) {
      const { lat, lon } = city;
      await forecastStore.fetchWeeklyForecast(lat, lon);
    } else {
      let resp = await getProvinces();
      let { coordinates } = resp.data.data.find((x) => x.name == province);
      await forecastStore.fetchWeeklyForecast(
        coordinates.latitude,
        coordinates.longitude
      );
    }
  };

  return { cities, fetchCities, selectedCity, setSelectedCity };
});
