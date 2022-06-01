<template>
  <div class="home">
    <WelcomeArea />

    <DownloadArea style="margin-bottom: 50px" />

    <IntroduceArea style="margin-bottom: 50px" />

    <FilmArea style="margin-bottom: 50px" />

    <ExperienceArea style="margin-bottom: 50px" />

    <AnswerModal />

    <ContactArea />

    <Footer />
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import WelcomeArea from '@/components/WelcomeArea.vue';
import DownloadArea from '@/components/DownloadArea.vue';
import IntroduceArea from '@/components/IntroduceArea.vue';
import FilmArea from '@/components/FilmArea.vue';
import ExperienceArea from '@/components/ExperienceArea.vue';
import ContactArea from '@/components/ContactArea.vue';
import AnswerModal from '@/components/AnswerModal.vue';
import Footer from '@/components/Footer.vue';

export default Vue.extend({
  components: {
    WelcomeArea,
    DownloadArea,
    IntroduceArea,
    FilmArea,
    ExperienceArea,
    ContactArea,
    AnswerModal,
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
