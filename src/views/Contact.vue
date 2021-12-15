<template>
  <div class="contact">
    <h1 class="title">
      聯絡我們
    </h1>
    <ContactArea />
    <Footer />
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
  .title{
    margin: 20px;
    font-weight: 600;
  }
}
</style>
