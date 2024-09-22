<template>
  <router-link
    :to="{ path: '/', hash: hash }"
    class="cursor-pointer select-none text-base py-3 px-4 rounded-full font-medium transition-colors duration-300"
    :class="{
      'bg-primary hover:bg-primary-hover text-header-nav': active,
      'text-secondary hover:bg-header-nav-hover': !active
    }"
    >{{ label }}</router-link
  >
</template>

<script lang="ts" setup>
defineProps<{
  label: string
  hash: string
  active?: boolean
}>()
</script>
