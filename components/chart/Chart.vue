<template>
  <div v-if="!!getData()">
    <LineChart
      :chartData="getData()"
      class="md:w-[720px] md:h-[320px] m-2 bg-slate-300"
    />
  </div>
</template>

<script setup>
import { LineChart } from "vue-chart-3";

const props = defineProps(["dates", "temps"]);

const getData = () => {
  if (!!props) {
    return {
      labels: props.dates,
      datasets: [
        {
          label: "Daily Forecast",
          data: props.temps,
          backgroundColor: [
            "#123E6B",
            "#0079AF",
            "#123E6B",
            "#0079AF",
            "#123E6B",
            "#0079AF",
            "#123E6B",
            "#0079AF",
          ],
        },
      ],
    };
  } else {
    return null;
  }
};
</script>
