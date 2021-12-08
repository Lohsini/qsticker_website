<template>
  <div class="contact">
    <h1>This is a Login page</h1>
    <div class="container">
      <div class="btn-card">
        <div class="card col-md-4">
          <a href="https://qsticker.github.io/#/login">互動貼圖後台</a>
        </div>
        <div class="card col-md-4">
          <a href="https://qsticker.github.io/#/login">知識地圖後台</a>
        </div>
        <div class="card col-md-4">
          <a href="https://qsticker.github.io/#/login">學力診斷報告</a>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  components: {
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
.container{
  .btn-card{
    display: flex;
    justify-content: center;
    align-items: center;

    .card{
      height: 300px;
      margin: 10px;
    }
    // .card+.card{
    //   margin-left: 10px;
    // }
  }
}
</style>
