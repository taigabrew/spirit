import { onMounted, onBeforeUnmount, ref } from '@vue/composition-api'
import { unwrap } from './utils'

export default function useEvent(el = ref(document), eventName, handler) {
  el = unwrap(el)

  const remove = () => el && el.removeEventListener(eventName, handler)

  onMounted(() => el && el.addEventListener(eventName, handler))
  onBeforeUnmount(remove)

  return remove
}
