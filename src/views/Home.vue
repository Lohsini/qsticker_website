<template>
  <div class="home">
    <Banner id="brand-anchor" class="mb-5" />

    <WelcomeArea />

    <IntroduceArea class="m-5" />

    <Footer />
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import Banner from '@/components/Banner.vue'; // @ is an alias to /src
import WelcomeArea from '@/components/WelcomeArea.vue';
import IntroduceArea from '@/components/IntroduceArea.vue';
import Footer from '@/components/Footer.vue';

export default Vue.extend({
  components: {
    Banner,
    WelcomeArea,
    IntroduceArea,
    Footer,
  },
  data() {
    return {
    };
  },
  methods: {
  },
});
</script>

<style lang="scss" scoped>
</style>
