<script setup>
import { useRoute } from "vue-router";
import { useForecastStore } from "@/stores/forecast";

const route = useRoute()

const date = route.params.date
</script>

<template>
    <div>Date</div>
</template>