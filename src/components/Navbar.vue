<template>
  <div class="navbar">
    <div class="navbar-brand">
      <!-- <router-link to="/">
        <i class="far fa-comment fa-flip-horizontal" />
        互動貼圖
      </router-link> -->
    </div>

    <div id="nav">
      <router-link to="/">
        首頁
      </router-link> |
      <router-link to="/about">
        關於
      </router-link> |
      <a href="https://qsticker.github.io/#/login">會員登入</a>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
});
</script>

<style scoped lang="scss">
.navbar {
  height: 50px;
  box-shadow: 0 0 2px #ddd;
  background-color: #fff;
  position:sticky;
  top: 0;
  z-index:10;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 30px;
  a {
    text-decoration: none;
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }

  .navbar-brand a{
    color: #2c3e50;
    font-size: 1.25rem;
    &.router-link-exact-active {
      color: #2c3e50;
    }
  }
  #nav a {
    padding: 0 10px;
  }
}
</style>
