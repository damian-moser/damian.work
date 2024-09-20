<template>
  <DaPopup title="Impressum" @close="$emit('close')">
    <div>
      <h2 class="text-sm font-bold">Informationen</h2>
      <p class="font-regular">Damian Moser</p>
      <p class="font-regular">Ottisbergstrasse 33</p>
      <p class="font-regular">3186 Düdingen</p>
      <p class="font-regular">Schweiz</p>
    </div>
    <div class="mt-4">
      <h2 class="text-sm font-bold">Kontakt</h2>
      <a class="font-regular" href="mailto:hello@damian.work">hello@damian.work</a>
      <p class="font-regular" href="#kontakt">damian.work#kontakt</p>
    </div>
  </DaPopup>
</template>
<script lang="ts" setup>
import { defineAsyncComponent } from 'vue'

const DaPopup = defineAsyncComponent(() => import('./DaPopup.vue'))

defineEmits<{
  (e: 'close'): void
}>()
</script>
