<template>
  <article class="rounded-lg border border-border">
    <a :href="project.link" target="_blank" rel="noopener">
      <div class="group h-56 overflow-hidden rounded-tl-lg rounded-tr-lg w-full">
        <div
          v-show="isLoading"
          class="w-full h-56 max-w-full rounded-tl-lg rounded-tr-lg bg-gray-200 animate-pulse"
        ></div>

        <img
          v-show="!isLoading"
          :src="imgUrl"
          :alt="project.label"
          @load="isLoading = false"
          class="w-full h-56 max-w-full object-cover rounded-tl-lg rounded-tr-lg group-hover:scale-125 hover:scale-125 transition-transform duration-[400ms]"
        />
      </div>
    </a>
    <div class="p-4">
      <h2 class="font-bold mb-2">{{ project.label }}</h2>
      <small class="font-regular"
        >{{ formatDate(project.startDate) }} -
        {{ formatDate(project.endDate) }}
      </small>
    </div>
  </article>
</template>
<script lang="ts" setup>
import type { Project } from '@/model/project.model'
import { ref } from 'vue'

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
