<template>
  <div class="home">
    <Banner style="margin-bottom: 100px" />

    <WelcomeArea style="margin: 50px 0" />

    <IntroduceArea style="margin-bottom: 100px" />

    <CardsArea style="margin: 100px 0" />

    <ContactArea />

    <Footer />
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import Banner from '@/components/Banner.vue'; // @ is an alias to /src
import WelcomeArea from '@/components/WelcomeArea.vue';
import IntroduceArea from '@/components/IntroduceArea.vue';
import CardsArea from '@/components/CardsArea.vue';
import ContactArea from '@/components/ContactArea.vue';
import Footer from '@/components/Footer.vue';

export default Vue.extend({
  components: {
    Banner,
    WelcomeArea,
    IntroduceArea,
    CardsArea,
    ContactArea,
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
