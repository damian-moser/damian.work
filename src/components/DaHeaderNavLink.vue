<template>
  <router-link
    :to="{ path: '/', hash: hash }"
    class="cursor-pointer select-none text-base py-3 px-4 rounded-full font-medium transition-colors duration-300 text-font-primary dark:text-font-secondary hover:bg-bg dark:hover:bg-bg-dark"
    >{{ label }}</router-link
  >
</template>

<script lang="ts" setup>
defineProps<{
  label: string
  hash: string
}>()
</script>
