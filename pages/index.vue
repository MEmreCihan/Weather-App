<script setup>
import Card from "../components/card/Card.vue";

definePageMeta({
  middleware: "auth",
});
// SEO uyumlulugu icin server-side head yapisi
useHead({
  title: "Weather Forecast",
  meta: [{ name: "description", content: "Current and 5 days weather forecast web site." }],
  bodyAttrs: {
    class: "test",
  },
});
</script>

<template>
    <Card />
</template>
