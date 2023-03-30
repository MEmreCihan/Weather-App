<script setup>
import appHeader from "~~/components/layout/appHeader.vue";

useHead({
  title: "Weather Forecast",
  meta: [{ name: "description", content: "My amazing site." }],
  bodyAttrs: {
    class:
      "test md:p-6 p-1 bg-gradient-to-r from-[#2980B9] to-[#c7e1f3] sm:h-screen h-[1080px]",
  },
});
</script>

<template>
  <div>
    <app-header />
    <main>
      <slot />
    </main>
  </div>
</template>

<style>
.pages-enter-active,
.pages-leave-active {
  transition: all 0.4s;
}
.pages-enter-from,
.pages-leave-to {
  opacity: 0;
  /* transform: rotate3d(1, 1, 1, 15deg); */
  filter: blur(1rem);
}
</style>
