<template>
  <header class="">
    <nav class="flex gap-6 sp justify-between items-center">
      <NuxtLink to="/">Home</NuxtLink>
      <h1 class="text-4xl">How Is The Weather</h1>
      <NuxtLink :to="'/about'">About</NuxtLink>
    </nav>
    <div class="flex justify-center items-center p-4">
      <input
        type="text"
        placeholder="Enter a city"
        class="border-2 h-8 w-60 rounded-lg  shadow-md"
      />
    </div>
  </header>
</template>
