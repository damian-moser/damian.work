import { useMediaQuery } from '@vueuse/core'
import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useUserStore = defineStore('user', () => {
  const isMobileMenuOpen = ref<boolean>(false)
  const isClosing = ref<boolean>(false)

  const isLargeScreen = useMediaQuery('(min-width: 1024px)')
  const prefersDark = useMediaQuery('(prefers-color-scheme: dark)')

  const openMobileMenu = () => {
    document.body.style.overflowY = 'hidden'
    isMobileMenuOpen.value = true
  }

  const closeMobileMenu = () => {
    isClosing.value = true

    setTimeout(() => {
      document.body.style.overflowY = 'scroll'
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
    isClosing
  }
})
