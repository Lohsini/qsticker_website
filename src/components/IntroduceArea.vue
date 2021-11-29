<template>
  <div class="introduce-area">
    <div class="container">
      <div class="pic" data-aos="fade-up" data-aos-duration="1000">
        <img :src="card1" :alt="card1">
      </div>
      <div class="txt" data-aos="fade-down" data-aos-duration="1500">
        <h2>1. 互動貼圖</h2>
        <p>快速蒐集資料</p>
        <button class="btn">
          看更多
        </button>
      </div>
    </div>

    <div class="container">
      <div class="txt" data-aos="fade-down" data-aos-duration="1500">
        <h2>2. 學力診斷分析</h2>
        <p>產生知識地圖</p>
        <button class="btn">
          看更多
        </button>
      </div>
      <div class="pic" data-aos="fade-up" data-aos-duration="1000">
        <img :src="card2" :alt="card2">
      </div>
    </div>

    <div class="container">
      <div class="pic" data-aos="fade-up" data-aos-duration="1000">
        <img :src="card3" :alt="card3">
      </div>
      <div class="txt" data-aos="fade-down" data-aos-duration="1500">
        <h2>3. 完成</h2>
        <p>獲得成效</p>
        <button class="btn">
          看更多
        </button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import card1 from '@/assets/card1.jpg';
import card2 from '@/assets/card2.jpg';
import card3 from '@/assets/card3.jpg';

export default Vue.extend({
  data() {
    return {
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
      width: 55%;
      height: 300px;
      flex-shrink: 0;
      margin-top: 100px;
      margin-right: -5%;
      z-index: 1;
      border-radius: 2px;
      img{
        width: 100%;
        height: 100%;
        object-fit: cover;
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
      align-items: center;
      flex-direction: column;
      button{
        font-size: 1rem;
        font-weight: 100;
        background-color: #1d4b11;
        color: #fff;
        border-radius: 2px;
        padding: 5px 20px;
        border: none;
        transition: all 0.2s;
        animation-name: show;
        animation-duration: 1.2s;
        animation-timing-function: ease-in-out;
        &:hover{
          cursor: pointer;
          opacity: 0.9;
          transition: all 0.2s;
        }
      }
    }
  }
}
</style>
