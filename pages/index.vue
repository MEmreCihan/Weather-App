<script setup>
import Card from "../components/card/Card.vue";
import { useProvincesStore } from "../stores/provinces";

// SEO uyumlulugu icin server-side head yapisi
useHead({
  title: "Weather Forecast",
  meta: [
    {
      name: "description",
      content: "Current and 5 days weather forecast web site.",
    },
  ],
  bodyAttrs: {
    class: "test",
  },
});

const provincesStore = useProvincesStore();
await provincesStore.setSelectedCity("İstanbul");
</script>

<template>
  <div>
    <Card />
  </div>
</template>
