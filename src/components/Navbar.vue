<template>
  <div class="navbar">
    <div class="navbar-brand">
      <router-link to="/">
        學力科技
      </router-link>
    </div>

    <button class="btn dropDownBtn" @click="isActive = !isActive">
      <i v-if="!isActive" class="fas fa-bars" />
      <i v-if="isActive" class="fas fa-times" />
    </button>

    <div id="nav">
      <div class="content" :class="{'trans': isActive}" @click="isActive = !isActive">
        <router-link to="/">
          首頁
        </router-link> <span>|</span>
        <router-link to="/contact">
          聯絡我們
        </router-link> <span>|</span>
        <router-link to="/login">
          會員登入
        </router-link> <span>|</span>
        <a href="https://qsticker.github.io/#/login">互動貼圖後台</a>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  data() {
    return {
      isActive: false,
    };
  },
  methods: {
  },
});
</script>

<style scoped lang="scss">
.navbar {
  height: 50px;
  box-shadow: 0 0 2px #ddd;
  background-color: #fff;
  position:sticky;
  top: 0;
  z-index:30;
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

    &:hover{
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
  .dropDownBtn{
    display: none;
    width: 30px;
    padding: 0;
    &:focus{
      outline: none;
      box-shadow: none;
    }
  }
}

@media screen and (max-width: 750px){
  .navbar {
    position:sticky;

    #nav {
      position: absolute;
      top: 110%;
      left: 0;
      width: 100%;
      overflow: hidden;
      background-color: #fff;
      border-radius: 0px;
      box-shadow: 0px 2px 10px #ddd;
      .content{
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        transition: height 0.3s;
        z-index:30;
        height: 0px;
        a{
          padding: 10px;
          width: 100%;
        }
        span{
          display: none;
        }
      }
      .trans{
        transition: height 0.3s;
        height: 200px;
      }
    }
    .dropDownBtn{
      display: block;
    }
  }
}

</style>
