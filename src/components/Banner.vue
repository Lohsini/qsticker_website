<template>
  <div class="banner">
    <div class="background">
      <div class="content">
        <div class="left">
          <div class="icon title">
            <i class="far fa-comment fa-flip-horizontal" />
          </div>
          <div class="title">
            互動貼圖
          </div>
          <div class="title mx-3">
            X
          </div>
          <div class="title">
            學力診斷分析
          </div>
        </div>
        <div class="right">
          <button class="btn">
            立即加入
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
});
</script>

<style scoped lang="scss">
.banner{
  width: 100%;
  height: 500px;
  max-height: 100vh;
  // background-image: url('../assets/home_banner.jpg');
   background-image: linear-gradient(0.2turn, #2f2f30, #1e3012, #034628);
  background-position: center;
  background-repeat: no-repeat;
  position: relative;
  .background{
    // background-color: rgba(255, 255, 255, 0.2);
    display: flex;
    position: absolute;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    .content{
      display: flex;
      justify-content: center;
      align-items: center;
      // background-color: rgba(255, 255, 255, 0.6);
      width: 100%;
      padding: 30px;
      .left{
        display: flex;
        width: 60%;
        justify-content: center;
        font-size: 3rem;
        color: #fff;
        // text-shadow: 2px 2px 2px #818d92;
        .icon{
          padding-right: 10px;
        }
        .title{
          font-weight: 600;
          animation-name: showTitle;
          animation-duration: 1.2s;
          animation-timing-function: ease-in-out;
        }
      }
      .right{
        margin: 30px;
        button{
          font-size: 1.5rem;
          font-weight: 600;
          background-color: #3f87a6;
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
}

@keyframes showTitle{
  0% {
    opacity: 0;
    transform: translate(50px, 0px);
  }
  100% {
    opacity: 1;
    transform: translate(0px, 0px);
  }
}

@keyframes show{
  0% {
    opacity: 0;
    transform: translate(0px, 50px);
  }
  100% {
    opacity: 1;
    transform: translate(0px, 0px);
  }
}
</style>
