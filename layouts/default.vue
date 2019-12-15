<template>
  <div class="flex flex-col min-h-screen">
    <Header class="flex-shrink-0" />
    <main class="container flex-grow mx-auto sm:px-8">
      <Nuxt />
    </main>
    <Footer class="flex-shrink-0" />
  </div>
</template>

<script>
// Deps
import Header from '~/components/Header'
import Footer from '~/components/Footer'

import { usePeopleStore } from '~/store/people'
import { useSessionsStore } from '~/store/sessions'

export default {
  components: { Header, Footer },
  setup(props, { root }) {
    const sessionsStore = useSessionsStore()
    const peopleStore = usePeopleStore()
    /** Refs */

    /** Template refs */
    /** Computed */
    /** Functions */
    const fetchSessions = async function() {
      const { data } = await root.$axios.get(
        `${process.env.REST_API_URL}/user/get_all_sittings`
      )

      const { result } = data
      sessionsStore.state.list = result
      console.log('fetchSessions', { result })
    }

    const fetchAccuseds = async function() {
      const { data } = await root.$axios.get(
        `${process.env.REST_API_URL}/user/get_all_accuseds`
      )

      const { result } = data
      peopleStore.state.list = result
      console.log('fetchAccuseds', { result })
    }
    /** Watchers */
    /** Execute */
    fetchSessions()
    fetchAccuseds()

    return {}
  }
}
</script>
