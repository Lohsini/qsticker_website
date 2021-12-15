<template>
  <div class="contact">
    <div class="banner">
      <h1 class="title">
        會員登入
      </h1>
      <p class="info">
        請選擇登入平台
      </p>
    </div>
    <div class="login-btns">
      <div class="container">
        <div class="btn-area">
          <div class="big-btn col-md-4">
            <a href="https://qsticker.github.io/#/login">
              <p><span>互動貼圖後台</span></p>
              <img :src="pic1" alt="pic1">
            </a>
          </div>
          <div class="big-btn col-md-4">
            <a href="https://qsticker.github.io/#/login">
              <p><span>知識地圖後台</span></p>
              <img :src="pic2" alt="pic2">
            </a>
          </div>
          <div class="big-btn col-md-4">
            <a href="https://qsticker.github.io/#/login">
              <p><span>學力診斷報告</span></p>
              <img :src="pic3" alt="pic3">
            </a>
          </div>
        </div>
      </div>
    </div>
    <div class="footer">
      <Footer />
    </div>
  </div>
</template>
<script lang="ts">
import Vue from 'vue';
import Footer from '@/components/Footer.vue';
import pic1 from '@/assets/pic1.png';
import pic2 from '@/assets/pic2.png';
import pic3 from '@/assets/pic3.png';

export default Vue.extend({
  components: {
    Footer,
  },
  data() {
    return {
      pic1,
      pic2,
      pic3,
    };
  },
  methods: {
  },
});
</script>

<style lang="scss" scoped>
.contact{
  position: relative;
  min-height: calc(100vh - 50px);
  .banner{
    .title{
      padding: 20px;
      font-weight: 600;
      margin: 0;

    }
    .info{
      background-color: aliceblue;
      padding: 20px;
      margin: 30px;
      font-size: 1.2rem;
    }
  }
  .login-btns{
    .container{
      .btn-area{
        display: flex;
        justify-content: center;
        align-items: center;
        .big-btn{
          height: 350px;
          margin: 10px;
          border: aliceblue solid 5px;
          overflow: hidden;
          border-radius: 5px;
          a{
            width: 100%;
            height: 100%;
            display: flex;
            flex-direction: column;
            justify-content: center;
            text-decoration: none;
            p{
              color: #888;
              font-size: 1.5rem;
              font-weight: 600;
              padding-bottom: 10px;
              margin: 0;
              span{
                padding: 8px;
                border-bottom: rgb(107, 186, 255) 1px dashed;
              }
            }
            img{
              width: 100%;
              height: 250px;
              object-fit: cover;
            }
          }
          &:hover{
            // box-shadow: 0px 0px 10px#ddd;
            border: rgb(181, 220, 255) 5px solid;
            p {
              color: #555;
            }
          }
        }
      }
    }
  }
  .footer{
    width: 100%;
    position: absolute;
    bottom: 0;
  }
}
</style>
