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
        <div class="email">
          <div class="icon">
            <i class="fas fa-envelope" />
          </div>
          <p>lohi3152@gmail.com</p>
        </div>
        <div class="phone">
          <div class="icon">
            <i class="fas fa-phone" />
          </div>
          <p>(03) 657-3989</p>
        </div>
      </div>
    </div>
    <div class="copyright">
      <div class="container">
        <p>
          Copyright2021 © 學力科技
        </p>
      </div>
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
      .email, .phone{
        display: flex;
        justify-content: space-between;
        align-items: center;
        .icon{
          width: 1.5rem;
          height: 1.5rem;
          display: flex;
          justify-content: center;
          align-items: center;
          color: rgb(255, 244, 197);
          background-color: #1d4b11;
          border-radius: 5px;
          i{
            width: 1rem;
            height: 1rem;
            font-size: 1rem;
          }
        }
        p{
          margin: 0 20px;
        }
      }
    }

  }
  .copyright{
    // background-color: rgb(252, 230, 133);
    .container{
      padding-top: 0;
    }
    p{
      text-align: left;
      padding: 0 10px;
      margin: 0;
      font-size: 0.7rem;
    }
  }
}
</style>
