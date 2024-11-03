<template>
  <div class="relative">
    <textarea
      v-model="model"
      ref="textarea"
      :id="placeholder"
      :rows="rows"
      class="px-4 pt-5 pb-3 resize-none rounded-md w-full text-base font-regular bg-white outline outline-2 outline-bg focus:outline-primary transition-all"
      @focusin="isFocused = true"
      @focusout="isFocused = false"
    ></textarea>
    <label
      class="absolute left-4 select-none cursor-text font-regular transition-all"
      :class="{
        'text-base top-4': !isFocused && !model,
        'top-0 text-sm': isFocused || model
      }"
      :for="placeholder"
      @click="$refs.textarea.focus()"
      >{{ placeholder }}</label
    >
  </div>
</template>
<script lang="ts" setup>
import { ref } from 'vue'

defineProps<{
  rows: number
  placeholder?: string
}>()

const textarea = ref<HTMLInputElement>()
const model = defineModel<string | number>()
const isFocused = ref<boolean>(false)
</script>
