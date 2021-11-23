<template>
  <div class="footer">
    <div class="container">
      <div class="navbar-links">
        <router-link to="/">
          首頁
        </router-link> |
        <router-link to="/about">
          關於
        </router-link> |
        <router-link to="/about">
          會員登入
        </router-link> |
        <a href="https://qsticker.github.io/#/login">互動貼圖後台</a> |
        <a href="https://qsticker.github.io/#/login">知識地圖後台</a> |
        <router-link to="/about">
          圖表分析
        </router-link>
      </div>
      <div class="contact">
        <div class="line">
          <i class="fab fa-line" />
        </div>
        <p>互動貼圖</p>
        <div class="email">
          <i class="fas fa-envelope" />
        </div>
        <p>lohi3152@gmail.com</p>
      </div>
    </div>
    <div class="copyright">
      Copyright2021 © 學力科技
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  methods: {
  },
});
</script>

<style scoped lang="scss">
.footer{
  background-color: rgb(255, 244, 197);
  font-weight: bold;
  .container{
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 30px;

    .navbar-links{
      a {
        text-decoration: none;
        color: #2c3e50;
        padding: 0 10px;

        &.router-link-exact-active {
          color: #42b983;
        }

        &:hover{
          color: #42b983;
        }
      }
    }
    .contact{
      display: flex;
      justify-content: space-between;
      align-items: center;
      flex-direction: column;
      .line{
        i{
          font-size: 2.2rem;
          color: #999;
          &:hover{
            color: #555;
          }
        }
      }
      .email{
        width: 2rem;
        height: 2rem;
        display: flex;
        justify-content: center;
        align-items: center;
        color: rgb(255, 244, 197);
        background-color: #999;
        border-radius: 5px;
        i{
          width: 1.5rem;
          height: 1.5rem;
          font-size: 1.5rem;
        }
        &:hover{
          background-color: #555;
        }
      }
    }

  }
  .copyright{
    background-color: rgb(252, 230, 133);
    padding: 5px;
    font-size: 0.9rem;
  }
}
</style>
