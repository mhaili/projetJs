<template>
  <div id="app">
    <!-- <HomePage /> -->
    <ItemsComponent />
  </div>
</template>

<script>
  // import HomePage from './components/HomePage.vue'
  import ItemsComponent from './components/ItemsComponent.vue';

  export default {
    name: 'App',
    components: {
      // HomePage,
      ItemsComponent
    }
  }
</script>

<style>
  body {
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  }
</style>
