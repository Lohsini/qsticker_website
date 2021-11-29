<template>
  <div class="home">
    <Banner class="mb-5" />

    <WelcomeArea />

    <IntroduceArea class="m-5" />

    <CardsArea style="margin-top: 100px" class="mb-5" />

    <Footer />
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import Banner from '@/components/Banner.vue'; // @ is an alias to /src
import WelcomeArea from '@/components/WelcomeArea.vue';
import IntroduceArea from '@/components/IntroduceArea.vue';
import CardsArea from '@/components/CardsArea.vue';
import Footer from '@/components/Footer.vue';

export default Vue.extend({
  components: {
    Banner,
    WelcomeArea,
    IntroduceArea,
    CardsArea,
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
