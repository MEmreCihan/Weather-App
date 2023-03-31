<script setup>
import { storeToRefs } from "pinia";
import { useProvincesStore } from "../../stores/provinces";
import { useRouter } from "vue-router";
import VueMultiselect from "vue-multiselect";

const router = useRouter();

const provincesStore = useProvincesStore();
const { selectedCity } = storeToRefs(provincesStore);
const label = ref({});

// kullanici sehri sectiginde, koordinasyonlari al ve haftalik hava durumunu getir
watch(label, (newValue, oldValue) => {
  selectedCity.value = label.value.name;
  router.push({ path: `/${selectedCity.value}` });
});

await provincesStore.fetchCities();

</script>

<template>
  <header>
    <nav class="flex justify-center items-center">
      <NuxtLink to="/">
        <h1 class="text-4xl text-center">How Is The Weather</h1>
      </NuxtLink>
    </nav>
    <div class="flex justify-center items-center p-4">
      <div class="w-60">
        <VueMultiselect
          v-model="label"
          :options="provincesStore.cities"
          :options-limit="7"
          :allow-empty="false"
          placeholder="Select a City"
          label="name"
          track-by="name"
          deselect-label="Already selected"
        >
        </VueMultiselect>
      </div>
    </div>
  </header>
</template>

<style src="vue-multiselect/dist/vue-multiselect.css"></style>
