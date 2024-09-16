<template>
  <div class="w-screen max-w-full min-h-screen flex justify-center px-8 overflow-x-hidden bg-bg">
    <DaHeader />
    <main class="max-w-size w-size">
      <DaStart />
      <DaProjects />
      <DaContact />
    </main>
  </div>
</template>
<script lang="ts" setup>
import { defineAsyncComponent } from 'vue'

const DaHeader = defineAsyncComponent(() => import('../components/DaHeader.vue'))
const DaStart = defineAsyncComponent(() => import('../components/DaStart.vue'))
const DaProjects = defineAsyncComponent(() => import('../components/DaProjects.vue'))
const DaContact = defineAsyncComponent(() => import('../components/DaContact.vue'))
</script>
