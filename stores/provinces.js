import { defineStore } from "pinia";

export const useProvincesStore = defineStore("provinces", () => {
  const cities = ref([]);

  const selectedCity = ref("İstanbul");

  const fetchCities = async () => {
    const resp = await useFetch(
      "https://turkiyeapi.cyclic.app/api/v1/provinces"
    );
    cities.value = resp.data.value.data.map((x) => ({
      name: x.name,
      lat: x.coordinates.latitude,
      lon: x.coordinates.longitude,
    }));
  };

  return { cities, fetchCities, selectedCity };
});
