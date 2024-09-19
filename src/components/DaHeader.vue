<template>
  <section class="blurring fixed top-0 left-0 w-screen h-12 z-10"></section>
  <header
    class="w-[calc(100%-4rem)] max-w-size fixed top-4 z-10 bg-bg rounded-[2rem] py-2 px-4 transition-all duration-300 flex items-center justify-between border border-border"
  >
    <a
      href="https://damian.work"
      class="font-logo font-[900] text-primary text-3xl transition-colors duration-300 hover:text-primary-hover"
      >D</a
    >

    <nav class="flex gap-4">
      <DaHeaderNavLink label="Start" link="#start" :active="true" />
      <DaHeaderNavLink label="Projekte" link="#projekte" />
      <DaHeaderNavLink label="Kontakt" link="#kontakt" />
    </nav>
  </header>
</template>
<script lang="ts" setup>
import { defineAsyncComponent } from 'vue'

const DaHeaderNavLink = defineAsyncComponent(() => import('./DaHeaderNavLink.vue'))
</script>
<style scoped>
.blurring {
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  background-color: rgba(255, 255, 255, 0.2);
  z-index: 10;
}
</style>
