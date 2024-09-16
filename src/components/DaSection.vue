<template>
  <section :id="id" class="py-16">
    <h1 class="font-bold text-xl mb-8">{{ title }}</h1>
    <slot></slot>
  </section>
</template>
<script lang="ts" setup>
defineProps<{
  title: string
  id: string
}>()
</script>
