<template>
  <DaSection title="Projekte" id="projekte">
    <ul class="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      <li v-for="project in projects" :key="project.link">
        <DaProject :project="project" />
      </li>
    </ul>
  </DaSection>
</template>
<script lang="ts" setup>
import type { Project } from '@/model/project.model'
import { defineAsyncComponent } from 'vue'

const DaProject = defineAsyncComponent(() => import('./DaProject.vue'))
const DaSection = defineAsyncComponent(() => import('./DaSection.vue'))

const projects: Project[] = [
  {
    label: 'Wachseldorn',
    link: 'https://wachseldorn.ch',
    img: 'wachseldorn.png',
    startDate: new Date(2023, 10, 21),
    endDate: new Date(2024, 1, 17)
  },
  {
    label: 'Franziska Moser',
    link: 'https://moserfranziska.ch',
    img: 'moserfranziska.png',
    startDate: new Date(2024, 0, 14),
    endDate: new Date(2024, 4, 20)
  }
]
</script>
