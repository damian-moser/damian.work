import { useMediaQuery } from '@vueuse/core'
import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useUserStore = defineStore('user', () => {
  const isMobileMenuOpen = ref<boolean>(false)
  const isClosing = ref<boolean>(false)
  const isOpening = ref<boolean>(false)

  const isLargeScreen = useMediaQuery('(min-width: 1024px)')
  const prefersDark = useMediaQuery('(prefers-color-scheme: dark)')

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
    prefersDark,
    openMobileMenu,
    closeMobileMenu,
    isMobileMenuOpen,
    isClosing,
    isOpening
  }
})
