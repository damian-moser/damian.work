<template>
  <section id="projekte" class="py-24">
    <h1 class="text-xl mb-8 animate-fade-in-left-slow">Projekte</h1>
    <ul class="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      <li
        v-for="(project, index) in projects"
        :key="project.link"
        :class="{
          'animate-fade-in-left-slow': index % 3 === 0,
          'animate-fade-in-left-mid': index % 3 === 1,
          'animate-fade-in-left-fast': index % 3 === 2
        }"
      >
        <DaProject :project="project" />
      </li>
    </ul>
  </section>
</template>
<script lang="ts" setup>
import type { Project } from '@/model/project.model'
import { defineAsyncComponent } from 'vue'

const DaProject = defineAsyncComponent(() => import('./DaProject.vue'))

const projects: Project[] = [
  {
    label: 'Gemeinde Wachseldorn',
    link: 'https://wachseldorn.ch',
    img: 'wachseldorn.png',
    startDate: new Date(2023, 10, 21),
    endDate: new Date(2024, 1, 17)
  }
]
</script>
