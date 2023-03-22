<script setup>
import appHeader from "~~/components/layout/appHeader.vue";
import appFooter from "~~/components/layout/appFooter.vue";

useHead({
  title: "My App",
  meta: [{ name: "description", content: "My amazing site." }],
  bodyAttrs: {
    class: "test p-6 bg-slate-100 h-screen",
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
