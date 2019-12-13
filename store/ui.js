import { createStore } from 'pinia'

export const useUiStore = createStore('ui', () => ({
  isSmallScreen: false,
  isIOS: false
}))
