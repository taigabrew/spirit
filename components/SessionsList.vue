<template>
  <section class="py-5">
    <h2
      class="mb-5 px-8 sm:px-0 font-bold tracking-wide text-gray-600 uppercase"
    >
      Ближайшие заседания
    </h2>

    <ul class="flex flex-col w-full">
      <li v-for="item in list" :key="`session-${item.id}`" class="mb-8">
        <Session v-bind="{ item }" />
      </li>
    </ul>
  </section>
</template>

<script>
// Components
import Session from '~/components/Session'

// State modules
import { useSessionsStore } from '~/store/sessions'

export default {
  name: 'SessionsList',
  components: { Session },
  setup(props, { root }) {
    const sessionStore = useSessionsStore()

    /** Refs */

    /** Template refs */
    /** Computed */
    /** Functions */
    /** Watchers */
    /** Do something */
    return {
      list: sessionStore.state.list
    }
  }
}
</script>
