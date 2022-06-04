<template>
  <div class="download-area">
    <div>
      <h1 class="title">
        APP下載區
      </h1>
      <p class="m-0">
        QRcode
      </p>
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
</template>

<script lang="ts">
import Vue from 'vue';
import androidQrcode from '@/assets/androidQrcode.png';
import iosQrcode from '@/assets/iosQrcode.png';

export default Vue.extend({
  data() {
    return {
      androidQrcode,
      iosQrcode,
    };
  },
});
</script>

<style scoped lang="scss">
.download-area{
  margin: 30px;
  padding-bottom: 60px;
  border-bottom: rgb(216, 216, 216) dotted 5px;
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
</style>
