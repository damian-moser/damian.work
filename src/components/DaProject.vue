<template>
  <article
    class="relative rounded-default h-project overflow-hidden w-full hover:scale-105 transition-transform duration-300"
  >
    <div
      v-show="isLoading"
      class="w-full h-project max-w-full rounded-default bg-gray-200 animate-pulse"
    ></div>
    <img
      v-show="!isLoading"
      :src="imgUrl"
      :alt="project.label"
      @load="isLoading = false"
      class="w-full h-project max-w-full object-cover rounded-default"
    />

    <div class="absolute left-6 bottom-6">
      <p class="text-font-secondary">
        {{ formatDate(project.startDate) }} -
        {{ formatDate(project.endDate) }}
      </p>
      <h2 class="text-xl mb-2 text-font-secondary">{{ project.label }}</h2>
      <a :href="project.link" target="_blank" rel="noopener" class="btn">
        <div class="flex items-center gap-2">
          <span>entdecken</span>
          <ArrowRightIcon />
        </div>
      </a>
    </div>
  </article>
</template>
<script lang="ts" setup>
import type { Project } from '@/model/project.model'
import { ref, defineAsyncComponent } from 'vue'

const ArrowRightIcon = defineAsyncComponent(() => import('./ArrowRightIcon.vue'))

const props = defineProps<{
  project: Project
}>()

const isLoading = ref<boolean>(true)

const imgUrl = new URL(`../assets/img/${props.project.img}`, import.meta.url).href

const formatDate = (date: Date) => {
  return date.toLocaleDateString('de-DE', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric'
  })
}
</script>
