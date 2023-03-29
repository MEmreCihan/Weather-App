<script setup>
import appHeader from "~~/components/layout/appHeader.vue";
import appFooter from "~~/components/layout/appFooter.vue";

useHead({
  title: "Weather Forecast",
  meta: [{ name: "description", content: "My amazing site." }],
  bodyAttrs: {
    class: "test p-6 bg-gradient-to-r from-[#2980B9] to-[#FFFFFF] h-screen",
  },
});
</script>

<template>
  <div>
    <app-header />
    <main>
      <slot />
    </main>
    <app-footer />
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