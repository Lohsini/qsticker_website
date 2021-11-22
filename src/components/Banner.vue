<template>
  <div class="banner">
    <div class="background">
      <div class="content">
        <div class="left">
          <div class="icon">
            <i class="far fa-comment fa-flip-horizontal" />
          </div>
          <div class="title">
            互動貼圖
            <div class="subtitle">
              QSticker
            </div>
          </div>
        </div>
        <div class="right">
          <button class="btn btn-primary">
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
  height: 550px;
  max-height: 100vh;

  // background-image: linear-gradient(0.3turn, #3f87a6, #ebf8e1, #42b983);
  background-image: url('../assets/home_banner.jpg');
  background-position: center;
  background-repeat: no-repeat;
  position: relative;
  .background{
    background-color: rgba(255, 255, 255, 0.2);
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
      background-color: rgba(255, 255, 255, 0.6);
      width: 100%;
      padding: 30px;
      .left{
        display: flex;
        width: 50%;
        justify-content: center;
        font-size: 3rem;
        text-shadow: 2px 2px 2px #818d92;
        .icon{
          padding-right: 10px;
          i{
            animation-name: rotateIcon;
            animation-duration: 0.2s;
            animation-fill-mode: backwards;
            animation-iteration-count: 5;
            animation-timing-function: linear;
          }
        }
        .title{
          font-weight: 600;
          animation-name: showTitle;
          animation-duration: 1.2s;
          animation-timing-function: ease-in-out;
          .subtitle{
            font-size: 2rem;
            text-align: left;
            padding-left: 10px;
          }
        }
      }
      .right{
        margin: 30px;
        button{
          font-size: 1.5rem;
          font-weight: 600;
          background-color: #3f87a6;
          color: #fff;
          border-radius: 50px;
          padding: 5px 20px;
          border: none;
          transition: all 0.2s;
          box-shadow: 2px 2px 2px #20576e;
          font-weight: 600;
          animation-name: show;
          animation-duration: 1.2s;
          animation-timing-function: ease-in-out;
          &:hover{
            cursor: pointer;
            transform: translate(0px, 2px);
            transition: all 0.2s;
          }
        }
      }
    }
  }
}

@keyframes rotateIcon{
  0% {
    transform: rotate(360deg), scale(2);
  }
  100% {
    transform: rotate(-360deg);
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
