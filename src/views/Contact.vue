<template>
  <div class="contact">
    <h1 class="title">
      聯絡我們
    </h1>
    <iframe
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3621.838765273085!2d120.95844621500167!3d24.8009739840821!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x346835946a07f875%3A0x5a85310c740ea434!2zMzAw5paw56u55biC5YyX5Y2A5Zub57at6LevODnomZ_kuYsgMg!5e0!3m2!1szh-TW!2stw!4v1680856568231!5m2!1szh-TW!2stw"
      width="100%"
      height="450"
      style="border:0;"
      allowfullscreen=""
      loading="lazy"
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
  .title{
    margin: 20px;
    padding: 20px;
    margin-top: 0;
    padding-top: 40px;
    border-bottom: rgb(216, 216, 216) dotted 5px;
    font-weight: 600;
  }
  iframe{
    padding: 50px;
  }
}

@media screen and (max-width: 750px){
  .contact{
    iframe{
      padding: 20px;
    }
  }
}
</style>
