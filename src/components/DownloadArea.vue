<template>
  <div class="download-area">
    <div>
      <h1 class="title">
        APP下載區
      </h1>
      <p class="m-0">
        Android / iOS
      </p>
      <div class="container">
        <div v-for="(content, key) in downloadContent" :key="key" class="content col-md-3 col-sm-12">
          <div class="pic"
               data-aos="fade-up"
               data-aos-duration="1000"
               data-aos-once="true"
          >
            <img :src="content.img" :alt="content.img">
          </div>
          <br>
          <div class="txt">
            <h2>{{ content.title }}</h2>
            <p v-for="(info, i) in content.information" :key="i">
              {{ info }}
            </p>
            <ul>
              <li v-for="(item, k) in content.items" :key="k">
                {{ item }}
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div class="qrCode">
        <div class="container row m-auto p-0">
          <div class="col-md-6 col-sm-12">
            <div class="image">
              <img :src="androidQrcode" alt="androidQrcode">
            </div>
            <br>
            <button class="bt" disabled>
              Android 下載
            </button>
          </div>
          <div class="col-md-6 col-sm-12">
            <div class="image">
              <img :src="iosQrcode" alt="iosQrcode">
            </div>
            <br>
            <button class="bt" disabled>
              iOS 下載
            </button>
            <br>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import downloadContent from '@/assets/contents/downloadContent';
import androidQrcode from '@/assets/androidQrcode.png';
import iosQrcode from '@/assets/iosQrcode.png';

export default Vue.extend({
  data() {
    return {
      androidQrcode,
      iosQrcode,
      downloadContent,
    };
  },
});
</script>

<style scoped lang="scss">
.qrCode{
  margin: 30px;
  padding-bottom: 60px;
  .image{
    margin: auto;
    height: 200px;
    margin-top: 75px;
    img{
      height: 100%;
    }
  }
  p{
    font-size: 1.5rem;
  }
  .bt{
      font-weight: 600;
      font-size: 1.5rem;
      color: rgb(255, 255, 255);
      font-size: 1.5rem;
      background-color: rgb(255, 238, 161);
      color: #000;
      border-radius: 50px;
      padding: 5px 30px;
      margin: 5px 30px;
      border: none;
      transition: all 0.2s;
  }
}
.download-area{
  .container{
    display: flex;
    justify-content: center;
    align-items: stretch;
    flex-wrap: wrap;
    .content{
      padding-top: 30px;
      .pic{
        border-radius: 2px;
        height: 300px;
        img{
          width: 100%;
          height: 100%;
          object-fit: contain;
          border-radius: 5px;
        }
      }
      .txt{
        border-radius: 2px;
        justify-content: center;
        align-items: flex-start;
        flex-direction: column;
        h2{
          font-size: 1.5rem;
          font-weight: 600;
        }
        p{
          font-weight: 600;
          //text-align: justify;
        }
        ul{
          //padding: 4rem;
          li{
            text-align: left;
          }
        }
      }
    }
  }
}
@media screen and (max-width: 950px){
  .download-area {
    p{
      width: 90%;
      margin: auto;
      margin-bottom: 20px;
    }
    .container {
      margin: 2%;
      .content+.content{
        border-top: solid 1px #aaa;
      }
      .txt{
        margin-top: 20px;
      }
    }
  }
}
@media screen and (max-width: 750px){
  .download-area {
    .container {
      flex-direction: row;
      margin-top: 10px;
      width: auto;
      .content+.content{
        border-top: solid 1px #aaa;
      }
      .pic{
        margin-top: 0px;
      }
    }
  }
}
</style>
