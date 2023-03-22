<script setup>
import Card from "../components/card/Card.vue"

definePageMeta({
  middleware: "auth",
});
useHead({
  title: "My App Home",
  meta: [{ name: "description", content: "My amazing site." }],
  bodyAttrs: {
    class: "test",
  },
});
</script>

<template>
  <Card />
</template>
