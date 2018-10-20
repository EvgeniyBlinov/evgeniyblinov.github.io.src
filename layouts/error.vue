<template>
  <div class="container">
    <div v-if="error.statusCode === 404">
        <h1 class="center">Page not found</h1>
        <h2 class="center">404</h2>
    </div>
    <h1 v-else>An error occurred</h1>
    <nuxt-link to="/">Home page</nuxt-link>
  </div>
</template>

<script>
export default {
  props: ['error'],
  layout: 'default'
}
</script>
