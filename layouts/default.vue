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

export default {
  components: { Header, Footer }
}
</script>
