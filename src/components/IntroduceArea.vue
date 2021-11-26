<template>
  <div class="introduce-area">
    <div class="container">
      <div class="pic" data-aos="fade-up" data-aos-duration="1000" />
      <div class="txt" data-aos="fade-down" data-aos-duration="1500">
        <h2>一起享受被綠色環繞的療癒</h2>
        <p>當你需要的時候，在自己最喜歡的角落，也有可以療癒自己的綠色。</p>
        <button class="btn">
          看更多
        </button>
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
.introduce-area{
  .container{
    display: flex;
    vertical-align: middle;
    align-items: center;
    .pic{
      width: 55%;
      height: 300px;
      flex-shrink: 0;
      background-image: url('../assets/home_picture.jpg');
      background-position: center;
      background-repeat: no-repeat;
      background-size: cover;
      margin-top: 100px;
      margin-right: -5%;
      z-index: 1;
      border-radius: 2px;
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
