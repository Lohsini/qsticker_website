<template>
  <div class="contact">
    <div>
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
          <div class="btn-area row">
            <div class="big-btn col-md-4 col-sm-12">
              <div class="content">
                <a href="https://qsticker.github.io/#/login">
                  <p><span>互動貼圖後台</span></p>
                  <img :src="pic1" alt="pic1">
                </a>
              </div>
            </div>
            <div class="big-btn col-md-4 col-sm-12">
              <div class="content">
                <a href="https://qsticker.github.io/#/login" @click.prevent="enter">
                  <p><span>AITutor數據分析平台</span></p>
                  <img :src="pic3" alt="pic3">
                </a>
              </div>
            </div>
            <div class="big-btn col-md-4 col-sm-12">
              <div class="content">
                <a href="https://qsticker.github.io/#/login" @click.prevent="enter">
                  <p><span>影片編輯平台</span></p>
                  <img :src="pic4" alt="pic4">
                </a>
              </div>
            </div>
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
import pic4 from '@/assets/pic4.png';

export default Vue.extend({
  components: {
    Footer,
  },
  data() {
    return {
      pic1,
      pic2,
      pic3,
      pic4,
    };
  },
  methods: {
    enter() {
      // eslint-disable-next-line no-alert
      window.alert('尚未開放');
    },
  },
});
</script>

<style lang="scss" scoped>
.contact{
  height: 100%;
  min-height: calc(100vh - 50px);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  .banner{
    .title{
      padding: 20px;
      margin: 20px;
      margin-top: 0;
      padding-top: 40px;
      border-bottom: rgb(216, 216, 216) dotted 5px;
      font-weight: 600;
    }
    .info{
      background-color: aliceblue;
      padding: 20px;
      margin: 30px;
      font-size: 1.2rem;
    }
  }
  .login-btns{
    margin: 20px;
    .container{
      .btn-area{
        display: flex;
        justify-content: center;
        align-items: center;
        .big-btn{
          height: 350px;
          padding: 5px;
          .content{
            height: 100%;
            // max-height: 250px;
            border: aliceblue solid 5px;
            border-radius: 5px;
            overflow: hidden;
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
                max-height: 250px;
                object-fit: contain;
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
  }
  .footer{
    width: 100%;
  }
}
</style>
