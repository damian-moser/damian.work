<template>
  <div class="relative w-full">
    <input
      v-model="model"
      ref="input"
      :id="placeholder"
      :type="type"
      class="px-4 pt-5 pb-3 rounded-md w-full text-base text-font-primary dark:text-font-secondary font-regular bg-white dark:bg-bg-dark outline outline-2 outline-bg dark:outline-outline-dark focus:!outline-primary transition-all"
      @focusin="isFocused = true"
      @focusout="isFocused = false"
    />
    <label
      class="absolute left-4 select-none cursor-text text-font-primary dark:text-font-secondary font-regular transition-all duration-300"
      :class="{
        'text-base top-[calc(50%-12px)]': !isFocused && !model,
        'top-0 text-sm': isFocused || model
      }"
      :for="placeholder"
      @click="$refs.input.focus()"
      >{{ placeholder }}</label
    >
  </div>
</template>
<script lang="ts" setup>
import { ref } from 'vue'

withDefaults(
  defineProps<{
    type?: string
    placeholder?: string
  }>(),
  {
    type: 'text'
  }
)

const input = ref<HTMLInputElement>()
const model = defineModel<string | number>()
const isFocused = ref<boolean>(false)
</script>
