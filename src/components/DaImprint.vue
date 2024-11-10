<template>
  <DaPopup title="Impressum" @close="$emit('close')">
    <div>
      <h2 class="text-sm">Informationen</h2>
      <p>Damian Moser</p>
      <p>Ottisbergstrasse 33</p>
      <p>3186 Düdingen</p>
      <p>Schweiz</p>
    </div>
    <div class="mt-4">
      <h2 class="text-sm">Kontakt</h2>
      <a href="mailto:hello@damian.work">hello@damian.work</a>
      <p>damian.work/#kontakt</p>
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
