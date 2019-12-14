<template>
  <div
    class="max-w-3xl p-8 sm:px-12 sm:pt-10 sm:pb-12 rounded bg-white sm:shadow-md"
  >
    <time class="block mb-8">
      <span class="block text-xl font-bold leading-none text-gray-700">{{
        sessionDateString
      }}</span>
      <span class="block text-gray-600">{{
        sessionRelativeDateTimeString
      }}</span>
    </time>
    <div class="flex flex-col sm:flex-row mb-6">
      <NuxtLink
        :to="`/person/${item.pid}`"
        class="w-32 h-32 sm:w-20 sm:h-20 mb-3 sm:mb-0 sm:mr-3"
      >
        <img
          :src="personPhotoSrc"
          :alt="`${personName}. Фотография`"
          class="w-32 h-32 sm:w-20 sm:h-20 rounded-full"
        />
      </NuxtLink>
      <div>
        <NuxtLink
          :to="`/person/${item.pid}`"
          class="text-3xl font-bold leading-none text-gray-700 tracking-tight"
          >{{ personName }}
        </NuxtLink>
        <p class="leading-snug text-gray-600 max-w-xs">
          {{ item.description }}
        </p>
      </div>
    </div>

    <div v-html="personCase" class="c-case-description text-gray-700 mb-6" />

    <a
      :href="item.courtLink"
      target="_blank"
      class="flex items-center text-indigo-600 hover:text-indigo-800 focus:shadow-none transition-250 transition-out-sine transition-colors"
    >
      <Icon name="map-marker-f" class="w-5 h-5 mr-2" />
      {{ item.court }}
    </a>

    <div class="h-px mt-10 mb-3 bg-gray-300" />

    <div class="flex items-start mb-6">
      <span class="text-6xl font-bold text-indigo-600 leading-none">{{
        item.count
      }}</span>
      <span class="text-gray-600 text-sm mt-1 ml-2">собираются прийти</span>
    </div>

    <SubmitVote v-bind="{ sessionId: item.id }" />
  </div>
</template>

<script>
// Deps
import ruLocale from 'date-fns/locale/ru'
import { formatRelative, format } from 'date-fns'
import { computed } from '@vue/composition-api'

// Components
import Icon from '~/components/Icon'
import SubmitVote from '~/components/SubmitVote'

// State modules
import { usePeopleStore } from '~/store/people'

export default {
  name: 'Session',
  components: { Icon, SubmitVote },
  props: {
    item: {
      type: Object,
      required: true
    }
  },
  setup(props, { root }) {
    const { findPerson } = usePeopleStore()

    /** Computed */
    const sessionDateString = computed(() =>
      format(props.item.timestamp, 'd MMMM', {
        locale: ruLocale
      })
    )
    const sessionRelativeDateTimeString = computed(() =>
      formatRelative(props.item.timestamp, new Date(), {
        locale: ruLocale
      })
    )

    const person = computed(() => findPerson.value(props.item.pid))
    const personName = computed(() => person.value && person.value.name)
    const personPhotoSrc = computed(() => person.value && person.value.photo)
    const personCase = computed(
      () => person.value && root.$sanitize(person.value.case)
    )
    const personClauses = computed(() => person.value && person.value.clauses)

    return {
      // Computed
      sessionDateString,
      sessionRelativeDateTimeString,
      personName,
      personPhotoSrc,
      personCase,
      personClauses
    }
  }
}
</script>
