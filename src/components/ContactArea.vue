<template>
  <div class="contact-area">
    <div class="container">
      <div class="block txt">
        <h2>聯絡我們</h2>
        <p>電話：(03) 657-3989</p>
        <p>傳真：(03) 657-3889</p>
        <p>地址：新竹縣竹北市縣政二路488號2樓</p>
      </div>
      <div class="block input-area" data-aos="zoom-in" data-aos-duration="1000">
        <h2>取得最新消息</h2>
        <input type="email" placeholder="請填寫E-mail">
        <button class="btn">
          送出
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
.contact-area{
  // background-image: url('../assets/kraft_paper.jpg');
  background-image: url('../assets/paper_bg.jpg');
  .container{
    display: flex;
    vertical-align: middle;
    align-items: center;
    padding: 50px;
    .block{
      width: 50%;
      height: 300px;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      border-radius: 2px;
    }
    .txt{
      font-weight: 600;
      h2{
        margin: 20px;
      }
    }
    .input-area{
      // background-color: rgba(255, 238, 161, 0.6);
      background-color: #69696915;
      input{
        border: none;
        background-color: transparent;
        border-bottom: #1d4b11 solid 1px;
        margin: 20px;
        width: 60%;
        padding: 10px;
        &:focus{
          outline: none;
        }
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
