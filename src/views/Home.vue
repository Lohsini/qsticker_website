<template>
  <div class="home">
    <Banner />
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import Banner from '@/components/Banner.vue'; // @ is an alias to /src

export default Vue.extend({
  components: {
    Banner,
  },
});
</script>
