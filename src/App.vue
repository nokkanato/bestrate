<template>
  <v-app id="app">
    <v-content>
          <router-view/>
    </v-content>
  </v-app>
</template>
<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: 'Prompt', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
