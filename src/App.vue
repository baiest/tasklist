<template>
  <div id="app" class="col-md-8 offset-md-2">
    <Principal />
  </div>
</template>

<script>
import Principal from './components/Principal.vue'

export default {
  name: 'App',
  components: {
    Principal
  }
}
</script>

<style>

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #fff;
  margin-top: 60px;
  background: #010b2fe0;
  padding: 5%;
}
</style>
