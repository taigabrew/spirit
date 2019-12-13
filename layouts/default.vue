<template>
  <div
    :class="[
      { 'ios-device': isIOS },
      { 'h-screen-mobile': isSmallScreen || isIOS }
    ]"
  >
    <Nuxt />
  </div>
</template>

<script>
// Deps
import { computed, onMounted } from '@vue/composition-api'

// State modules
import { useUiStore } from '~/store/ui'

export default {
  setup(props, { root }) {
    /** Stores */
    const uiStore = useUiStore()

    /** Computed */
    const isSmallScreen = computed(() => uiStore.state.isSmallScreen)
    const isIOS = computed(() => uiStore.state.isIOS)

    /** Functions */
    const updateSmallScreen = function() {
      uiStore.state.isSmallScreen = window.innerWidth < parseInt(screens.md)

      if (isSmallScreen.value || isIOS.value) {
        const vh = window.innerHeight * 0.01
        document.documentElement.style.setProperty('--vh', `${vh}px`)
      }
    }

    /** Execute */
    useEvent(window, 'resize', updateSmallScreen)

    onMounted(() => {
      updateSmallScreen()

      uiStore.state.isIOS = /(iPad|iPhone|iPod)/g.test(navigator.userAgent)

      if (
        isIOS.value ||
        (navigator.userAgent.includes('Safari') &&
          !navigator.userAgent.includes('Chrome'))
      )
        document.documentElement.classList.add('is-safari')
    })

    return {
      // Computed
      isSmallScreen,
      isIOS
    }
  }
}
</script>
