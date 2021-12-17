<template>
  <div class="introduce-area">
    <div class="container">
      <div class="pic"
           data-aos="fade-up"
           data-aos-duration="1000"
           data-aos-once="true"
      >
        <img :src="pic1" :alt="pic1">
      </div>
      <div class="txt">
        <h3 class="number first">
          01
        </h3>
        <h2>互動貼圖</h2>
        <p>搭配【互動貼圖後台】</p>
        <p>
          提供設計題目、建立題庫、建立成員群組、設定測驗排程與細節的後台，搭配通訊軟體快速蒐集資料。
        </p>
        <button class="btn">
          看更多
        </button>
      </div>
    </div>

    <div class="container second">
      <div class="txt">
        <h3 class="number">
          02
        </h3>
        <h2>學力診斷分析</h2>
        <p>搭配【AITutot分析+影片平台】<br>搭配【貼圖診斷平台】</p>
        <p>
          產生知識地圖。不確定以上兩種是不是同一個平台，介紹文字介紹文字介紹文字介紹文字。
        </p>
        <button class="btn">
          看更多
        </button>
      </div>
      <div class="pic"
           data-aos="fade-up"
           data-aos-duration="1000"
           data-aos-once="true"
           style="margin-right: 0; margin-left: 0%;"
      >
        <img :src="pic2" :alt="pic2">
      </div>
    </div>

    <div class="container">
      <div class="pic"
           data-aos="fade-up"
           data-aos-duration="1000"
           data-aos-once="true"
      >
        <img :src="pic3" :alt="pic3">
      </div>
      <div class="txt">
        <h3 class="number third">
          03
        </h3>
        <h2>取得報告</h2>
        <p>搭配【作答數據分析平台】</p>
        <p>
          察看結果。HotelsCombined全球最佳飯店比價網站！
          只需一次搜尋就可比價所有熱門訂房網站與旅客評價，保證找到最優惠價格！
        </p>
        <button class="btn">
          看更多
        </button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import pic1 from '@/assets/pic1.png';
import pic2 from '@/assets/pic2.png';
import pic3 from '@/assets/pic3.png';
import card1 from '@/assets/card1.jpg';
import card2 from '@/assets/card2.jpg';
import card3 from '@/assets/card3.jpg';

export default Vue.extend({
  data() {
    return {
      pic1,
      pic2,
      pic3,
      card1,
      card2,
      card3,
    };
  },
});
</script>

<style scoped lang="scss">
.introduce-area{
  .container{
    display: flex;
    vertical-align: middle;
    align-items: center;
    .pic{
      width: 50%;
      height: 300px;
      flex-shrink: 0;
      margin-top: 100px;
      // margin-right: -5%;
      z-index: 1;
      border-radius: 2px;
      img{
        width: 100%;
        height: 100%;
        object-fit: contain;
      }
    }
    .txt{
      width: 50%;
      height: 300px;
      flex-shrink: 0;
      background-color: rgba(255, 238, 161, 0.6);
      padding: 0 6%;
      border-radius: 2px;
      display: flex;
      justify-content: center;
      align-items: flex-start;
      flex-direction: column;
      position: relative;
      h3.number{
        position: absolute;
        top: 10px;
        right: 10px;
        width: 4rem;
        height: 4rem;
        color: #1d4b11;
        border-radius: 50px;
        display: flex;
        justify-content: center;
        align-items: center;
        border: 2px #1d4b11 solid;
      }
      p{
        text-align: justify;
        width: 70%;
      }
      button{
        font-size: 1rem;
        font-weight: 100;
        background-color: #1d4b11;
        color: #fff;
        border-radius: 2px;
        padding: 5px 20px;
        border: none;
        transition: all 0.2s;
        &:hover{
          cursor: pointer;
          opacity: 0.9;
          transition: all 0.2s;
        }
      }
    }
  }
  .second{
    .txt{
      align-items: flex-end;
      h3{
        left: 10px;
      }
      p{
        text-align: right;
      }
    }
  }
}
</style>
