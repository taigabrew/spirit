import Vue from 'vue'
import Hammer from 'hammerjs'
// delete Hammer.defaults.cssProps.userSelect

Vue.directive('touch', {
  bind(el, binding) {
    if (typeof binding.value === 'function') {
      const mc = new Hammer.Manager(el, {
        recognizers: [
          [Hammer.Press, { threshold: 40, time: 500 }],
          [Hammer.Pan, { direction: Hammer.DIRECTION_HORIZONTAL }]
        ]
      })
      // binding.modifiers, binding.arg

      if (binding.arg === 'press' || binding.arg === 'pan') {
        mc.on(binding.arg, binding.value)
      }
    }
  }
})
