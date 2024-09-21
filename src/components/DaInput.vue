<template>
  <div class="relative">
    <input
      v-model="model"
      ref="input"
      :type="type"
      class="px-4 pt-5 pb-3 rounded-md w-full text-base text-black font-regular bg-white outline outline-2 outline-bg focus:outline-primary transition-all"
      @focusin="isFocused = true"
      @focusout="isFocused = false"
    />
    <label
      class="absolute left-4 select-none cursor-text font-regular transition-all duration-300"
      :class="{
        'text-base top-[calc(50%-12px)]': !isFocused && !model,
        'top-0 text-sm': isFocused || model
      }"
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
