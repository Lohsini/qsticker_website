<template>
  <div class="home">
    <Banner style="margin-bottom: 100px" />

    <WelcomeArea style="margin: 50px 0" />

    <IntroduceArea style="margin-bottom: 100px" />

    <FilmArea style="margin-bottom: 100px" />

    <ExperienceArea style="margin-bottom: 100px" />

    <ContactArea />

    <Footer />
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import Banner from '@/components/Banner.vue'; // @ is an alias to /src
import WelcomeArea from '@/components/WelcomeArea.vue';
import IntroduceArea from '@/components/IntroduceArea.vue';
import FilmArea from '@/components/FilmArea.vue';
import ExperienceArea from '@/components/ExperienceArea.vue';
import ContactArea from '@/components/ContactArea.vue';
import Footer from '@/components/Footer.vue';

export default Vue.extend({
  components: {
    Banner,
    WelcomeArea,
    IntroduceArea,
    FilmArea,
    ExperienceArea,
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
