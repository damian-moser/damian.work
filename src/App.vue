<template>
  <RouterView />
</template>

<script setup lang="ts">
import { RouterView } from 'vue-router'
</script>

<style scoped>
img,
iframe,
button {
  user-select: none;
  -webkit-user-select: none;
  -moz-user-select: none;
}

*::selection {
  background-color: var(--color-primary);
  color: #ffffff;
}

html {
  -webkit-tap-highlight-color: transparent;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

::-webkit-scrollbar {
  width: 0.5rem;
}

::-webkit-scrollbar-thumb {
  background-color: var(--color-primary);
  border-radius: 1rem;
}

::-webkit-scrollbar-track {
  background-color: #ddd;
  border-radius: 1rem;
}
</style>
