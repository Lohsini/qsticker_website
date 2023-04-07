<template>
  <div class="footer">
    <div class="container section">
      <div class="navbar-links">
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
      <div class="contact">
        <div class="email">
          <div class="icon">
            <i class="fas fa-envelope" />
          </div>
          <p>qsticker.service@gmail.com</p>
        </div>
        <div class="phone">
          <div class="icon">
            <i class="fas fa-phone" />
          </div>
          <p>0986-123-331(徐小姐)</p>
        </div>
      </div>
    </div>
    <div class="copyright">
      <div class="container">
        <p>
          Copyright{{ year }} © 學力科技
        </p>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  data() {
    return {
      year: new Date().getFullYear(),
    };
  },
  methods: {
  },
});
</script>

<style scoped lang="scss">
.footer{
  background-color: rgb(80, 80, 80);
  color: #fff;
  .container{
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 30px;

    .navbar-links{
      a {
        text-decoration: none;
        color: #fff;
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
          color: rgb(80, 80, 80);
          background-color: #1d4b11;
          background-color: rgb(80, 40, 2);
          background-color: #fff;
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

@media screen and (max-width: 1000px){
  .footer {
    .container{
      flex-direction: column;
      .navbar-links{
        margin-bottom: 30px;
      }
    }
  }
}

@media screen and (max-width: 750px){
  .footer {
    .section {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      .navbar-links{
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        span{
          display: none;
        }
        a{
          padding: 5px 10px;
        }
      }
      .contact{
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        padding: 5px 10px;
        p{
          padding: 5px 0;
        }
      }
    }
  }
}
</style>
