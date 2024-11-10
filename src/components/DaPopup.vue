<template>
  <section
    class="fixed left-0 top-0 w-screen h-screen bg-[#00000052] flex justify-center z-10 p-4 overflow-y-scroll"
  >
    <div
      class="h-fit bg-bg dark:bg-bg-dark p-8 rounded-[2rem] max-w-3xl min-w-full md:min-w-[600px] animate-fade-in-top-fast"
    >
      <div class="flex justify-between items-center mb-4">
        <h1 class="font-bold text-xl">{{ title }}</h1>
        <span
          v-if="showXmark && !isSmallScreen"
          class="bg-popup-close dark:bg-popup-close-dark p-4 flex items-center justify-center rounded-full transition-all duration-300 cursor-pointer hover:bg-[#ddd] dark:hover:bg-bg-dark"
          @click="$emit('close')"
        >
          <XmarkIcon :fill="isDarkModeActive ? '#fff' : ''" />
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
import { useUserStore } from '@/stores/user.store'
import { defineAsyncComponent, toRefs } from 'vue'

const XmarkIcon = defineAsyncComponent(() => import('./XmarkIcon.vue'))

const userStore = useUserStore()
const { isSmallScreen, isDarkModeActive } = toRefs(userStore)

withDefaults(
  defineProps<{
    title: string
    showXmark?: boolean
  }>(),
  {
    showXmark: true
  }
)

defineEmits<{
  (e: 'close'): void
}>()
</script>
