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
        <p>快速蒐集資料</p>
        <button class="btn">
          看更多
        </button>
      </div>
    </div>

    <div class="container">
      <div class="txt">
        <h3 class="number second">
          02
        </h3>
        <h2>學力診斷分析</h2>
        <p>產生知識地圖</p>
        <button class="btn">
          看更多
        </button>
      </div>
      <div class="pic"
           data-aos="fade-up"
           data-aos-duration="1000"
           data-aos-once="true"
           style="margin-right: 0; margin-left: -5%;"
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
        <p>完成</p>
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
      align-items: center;
      flex-direction: column;
      position: relative;
      h3.number{
        position: absolute;
        top: 10px;
        right: 10px;
        width: 5rem;
        height: 5rem;
        color: #1d4b11;
        border-radius: 50px;
        display: flex;
        justify-content: center;
        align-items: center;
        border: 2px #1d4b11 solid;
      }
      h3.second{
        left: 10px;
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
}
</style>
