<template>
  <DaSection title="Kontakt" id="kontakt"></DaSection>
</template>
<script lang="ts" setup>
import { defineAsyncComponent } from 'vue'

const DaSection = defineAsyncComponent(() => import('./DaSection.vue'))
</script>
