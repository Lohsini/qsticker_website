<template>
  <div class="welcome-area">
    <div class="background">
      <div class="clouds">
        <img :src="clouds" alt="clouds">
      </div>
      <div class="building">
        <img :src="building" alt="building">
      </div>
    </div>

    <div class="title py-5">
      <div class="d-flex">
        <div class="brand txt">
          <i class="far fa-comment fa-flip-horizontal" />
        </div>
        <div class="txt">
          互動貼圖
        </div>
      </div>
      <div class="txt mx-3">
        X
      </div>
      <div class="txt">
        學力診斷分析
      </div>
    </div>

    <div class="content">
      <h1>歡迎來到學力科技</h1>
      <div class="icon">
        <i class="fas fa-caret-down" />
      </div>
      <div class="txt m-auto" style="max-width: 50%;">
        學力科技的互動貼圖平台提供題目設計、建立班級以及設定測驗的功能，搭配APP快速蒐集用戶資料。
        並根據互動貼圖蒐集到的資料，使用AI分析模型進行學力診斷及預測，配合陳立集團「標靶治療」概念，建立出一套完整的學習系統。
      </div>
    </div>

    <div class="btn-area mt-5">
      <button class="btn">
        <a href="https://qsticker.github.io/#/register">立即加入<i class="fas fa-chevron-right" /></a>
      </button>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import clouds from '@/assets/clouds.png';
import building from '@/assets/building.png';

export default Vue.extend({
  data() {
    return {
      clouds,
      building,
    };
  },
});
</script>

<style scoped lang="scss">
.welcome-area{
  position: relative;
  .background{
    .clouds{
      position: absolute;
      z-index: -1;
      top: 180px;
      width: 30%;
      animation-name: cloudsAnimate;
      animation-duration: 15s;
      animation-iteration-count: infinite;
      animation-timing-function: linear;
      img{
        width: 100%;
      }
    }
    .building{
      position: absolute;
      z-index: -1;
      // top: 300px;
      bottom: -50px;
      right: 0;
      width: 30%;
      img{
        width: 100%;
      }
    }
  }
  .title{
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 3rem;
    color: #000;
    margin: 50px;
    margin-top: 0;
    .brand{
      padding-right: 10px;
    }
    .txt{
      font-weight: 600;
      animation-name: showTitle;
      animation-duration: 1.2s;
      animation-timing-function: ease-in-out;
    }
  }
  .content{
    h1{
      margin: 0;
    }
    .icon{
      margin: 10px;
      animation-name: iconAnimate;
      animation-duration: 0.6s;
      animation-iteration-count: infinite;
      animation-direction: alternate-reverse;
      animation-timing-function: linear;
      i{
        font-size: 1.3rem;
      }
    }
  }
  .btn-area{
    margin: 30px;
    padding-bottom: 60px;
    border-bottom: rgb(216, 216, 216) dotted 5px;
    button{
      font-size: 1.5rem;
      font-weight: 600;
      background-color: rgb(144, 208, 248);
      color: #fff;
      border-radius: 50px;
      padding: 5px 20px;
      border: none;
      transition: all 0.2s;
      animation-name: show;
      animation-duration: 1.2s;
      animation-timing-function: ease-in-out;
      a{
        text-decoration: none;
        color: #fff;
        i{
          margin-left: 10px;
        }
      }
      &:hover{
        background-color: #5bc0ff;
        cursor: pointer;
        transition: all 0.2s;
      }
    }
  }
}

@media screen and (max-width: 750px){
  .welcome-area {
    .background {
      .clouds{
        top: 150px;
        right: 300px;
        width: 100%;
      }
      .building{
        bottom: -50px;
        width: 470px;
      }
    }
    .title{
      flex-direction: column;
      font-size: 2.3rem;
      margin: 0;
    }
    .content{
      padding: 0 30px;
    }
  }
}

@keyframes iconAnimate {
  from {
    transform: translateY(3px);
  }
  to{
    transform: translateY(-3px);
  }
}

@keyframes cloudsAnimate {
  from {
    transform: translateX(0%);
    opacity: 0;
  }
  10%{
    opacity: 1;
  }
  80%{
    opacity: 0.8;
  }
  to{
    transform: translateX(100%);
    opacity: 0;
  }
}
</style>
