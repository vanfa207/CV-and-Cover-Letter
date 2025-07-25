<template>
  <div id="app" class="font-sans antialiased">
    <router-view></router-view>
  </div>
</template>

<script setup>
// No script needed here for a simple router-view setup
</script>

<style>
/* You might want to include your main Tailwind CSS imports here if not already in main.js/main.css */
/* @import 'tailwindcss/base'; */
/* @import 'tailwindcss/components'; */
/* @import 'tailwindcss/utilities'; */

html, body, #app {
  height: 100%;
  margin: 0;
  padding: 0;
}
</style>