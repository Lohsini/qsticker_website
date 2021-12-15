<template>
  <div class="contact">
    <h1 class="title">
      聯絡我們
    </h1>
    <iframe
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14488.444016750323!2d120.97311543557453!3d24.79165222556012!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x34683672cd4db607%3A0x112b5d5bda760413!2z5ZyL56uL5riF6I-v5aSn5a24!5e0!3m2!1szh-TW!2stw!4v1639554456603!5m2!1szh-TW!2stw"
      width="100%"
      height="450"
      style="border:0;"
      allowfullscreen=""
      loading="lazy"
      class="p-5"
    />
    <ContactArea />
    <!-- <div class="footer"> -->
    <Footer />
    <!-- </div> -->
  </div>
</template>
<script lang="ts">
import Vue from 'vue';
import ContactArea from '@/components/ContactArea.vue';
import Footer from '@/components/Footer.vue';

export default Vue.extend({
  components: {
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
.contact{
  // position: relative;
  // min-height: calc(100vh - 50px);
  .title{
    margin: 20px;
    font-weight: 600;
  }
  // .footer{
  //   width: 100%;
  //   position: absolute;
  //   bottom: 0;
  // }
}
</style>
