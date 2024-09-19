<template>
  <DaSection title="Kontakt" id="kontakt" class="mb-96 flex flex-col gap-4">
    <DaInput v-model="string" placeholder="Vorname" />
    <DaInput v-model="string" placeholder="Nachname" />
    <DaInput v-model="string" type="email" placeholder="E-Mail Adresse" />
  </DaSection>
</template>
<script lang="ts" setup>
import { defineAsyncComponent } from 'vue'

const DaSection = defineAsyncComponent(() => import('./DaSection.vue'))
const DaInput = defineAsyncComponent(() => import('./DaInput.vue'))

const string = defineModel<string>()
</script>
