<template>
  <div
    class="max-w-3xl my-8 p-8 sm:px-12 sm:pt-10 sm:pb-12 rounded bg-white sm:shadow-md"
  >
    <div class="flex flex-col mb-6">
      <img
        :src="person.photo"
        :alt="`${person.name}. Фотография`"
        class="w-32 h-32 rounded-full mb-3"
      />
      <h2 class="text-3xl font-bold leading-none text-gray-700 tracking-tight">
        {{ person.name }}
      </h2>
    </div>
    <div v-html="personCase" class="c-case-description text-gray-700 mb-6" />

    <div>Куда отнести передачку или письмо</div>
    <div>Счет для родственников, чтобы можно было сделать перевод</div>

    <section>
      <h3
        class="mt-10 mb-4 px-8 sm:px-0 font-bold tracking-wide text-gray-600 uppercase"
      >
        Ближайшие заседания
      </h3>
    </section>
    <ul>
      Список слушаний сортированный по количеству зарегистрированных на
      слушанья, в порядке возрастания
    </ul>
  </div>
</template>

<script>
// Deps
import { computed } from '@vue/composition-api'

// State modules
import { usePeopleStore } from '~/store/people'

export default {
  setup(props, { root }) {
    const { findPerson } = usePeopleStore()
    /** Refs */

    /** Computed */
    const personId = computed(() => Number(root.$route.params.id))
    const person = computed(() => findPerson.value(personId.value))

    const personCase = computed(
      () => person.value && root.$sanitize(person.value.case)
    )

    /** Functions */
    /** Watchers */
    /** Do something */
    return {
      person,
      personCase
    }
  }
}
</script>
