<template>
  <RouterView />
  <div ref="appCursor" id="app-cursor"></div>
</template>

<script setup lang="ts">
import { onBeforeUnmount, onMounted, ref, toRefs } from 'vue'
import { RouterView } from 'vue-router'
import { useUserStore } from './stores/user.store'

const userStore = useUserStore()
const { isDarkModeActive } = toRefs(userStore)

const appCursor = ref<HTMLDivElement | null>()

const handleMouseMove = (e: MouseEvent) => {
  if (appCursor.value)
    appCursor.value.style.transform = `translate(${e.clientX - 10}px, ${e.clientY - 10}px)`
}

onMounted(() => {
  document.documentElement.classList.add(isDarkModeActive.value ? 'dark' : 'light')
  document.addEventListener('mousemove', handleMouseMove)
})

onBeforeUnmount(() => {
  document.removeEventListener('mousemove', handleMouseMove)
})
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
