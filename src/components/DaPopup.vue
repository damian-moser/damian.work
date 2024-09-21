<template>
  <section
    class="fixed left-0 top-0 w-screen h-screen bg-[#00000052] flex justify-center z-10 p-4 overflow-y-scroll"
  >
    <div class="h-fit bg-bg p-8 rounded-[2rem] max-w-3xl min-w-[600px] animate-fade-in-top-fast">
      <div class="flex justify-between items-center mb-4">
        <h1 class="font-bold text-xl">{{ title }}</h1>
        <span
          class="bg-[#eee] p-4 flex items-center justify-center rounded-full transition-all duration-300 cursor-pointer hover:bg-[#ddd]"
          @click="$emit('close')"
        >
          <XmarkIcon />
        </span>
      </div>
      <slot></slot>
      <div class="flex justify-end mt-4">
        <button class="btn" @click="$emit('close')">Schliessen</button>
      </div>
    </div>
  </section>
</template>
<script lang="ts" setup>
import { defineAsyncComponent } from 'vue'

const XmarkIcon = defineAsyncComponent(() => import('./XmarkIcon.vue'))

defineProps<{
  title: string
}>()

defineEmits<{
  (e: 'close'): void
}>()
</script>
