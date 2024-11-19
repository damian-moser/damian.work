import { useMediaQuery } from '@vueuse/core'
import { defineStore } from 'pinia'
import { computed, ref } from 'vue'

export const useUserStore = defineStore('user', () => {
  const isMobileMenuOpen = ref<boolean>(false)
  const isClosing = ref<boolean>(false)
  const isOpening = ref<boolean>(false)

  const isLargeScreen = useMediaQuery('(min-width: 1024px)')
  const isSmallScreen = useMediaQuery('(max-width: 640px)')
  const prefersDark = useMediaQuery('(prefers-color-scheme: dark)')

  const isDarkModeActive = computed<boolean>(() => prefersDark.value)

  const openMobileMenu = () => {
    document.body.style.overflowY = 'hidden'
    isOpening.value = true
    isMobileMenuOpen.value = true

    setTimeout(() => {
      isOpening.value = false
    }, 600)
  }

  const closeMobileMenu = () => {
    isClosing.value = true
    document.body.style.overflowY = 'scroll'

    setTimeout(() => {
      isMobileMenuOpen.value = false
      isClosing.value = false
    }, 750)
  }

  return {
    isLargeScreen,
    openMobileMenu,
    closeMobileMenu,
    isMobileMenuOpen,
    isClosing,
    isOpening,
    isDarkModeActive,
    isSmallScreen
  }
})
