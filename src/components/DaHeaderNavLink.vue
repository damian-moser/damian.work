<template>
  <a
    :href="link"
    class="cursor-pointer text-base py-3 px-4 rounded-full font-medium transition-colors duration-300"
    :class="{
      'bg-primary hover:bg-primary-hover text-header-nav': active,
      'text-secondary hover:bg-header-nav-hover': !active
    }"
    >{{ label }}</a
  >
</template>

<script lang="ts" setup>
defineProps<{
  label: string
  link: string
  active?: boolean
}>()
</script>
