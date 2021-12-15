<template>
  <div id="app">
    <Navbar />

    <router-view />
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import Navbar from '@/components/Navbar.vue'; // @ is an alias to /src

export default Vue.extend({
  components: {
    Navbar,
  },
});
</script>

<style lang="scss">
*{
  padding: 0;
  margin: 0;
}
#app {
  font-family: 'Noto Sans TC', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

</style>
