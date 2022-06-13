<template>
  <div class="contact-area">
    <div class="container row">
      <div class="section txt col-md-4 col-sm-12">
        <h2>聯絡我們</h2>
        <p>電話：(03) 657-3989</p>
        <p>傳真：(03) 657-3889</p>
        <p>地址：新竹縣竹北市縣政二路488號2樓</p>
      </div>
      <div class="section input-area col-md-8 col-sm-12"
           data-aos="zoom-in"
           data-aos-duration="1000"
           data-aos-once="true"
      >
        <h2>取得最新消息</h2>
        <input v-model="userEmail" type="email" placeholder="請填寫E-mail">
        <button class="btn" @click="submit">
          送出
        </button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import emailjs from 'emailjs-com';

export default Vue.extend({
  data() {
    return {
      userEmail: '',
    };
  },
  methods: {
    submit() {
      const templateParams = {
        client_email: this.userEmail,
      };
      emailjs.send('service_plife5c', 'template_ohbm8mh', templateParams, 'dvIGl74P-za-4_hz1')
        .then((response) => {
          console.log('SUCCESS!', response.status, response.text);
          // eslint-disable-next-line no-alert
          alert(`已寄送相關資料至${this.userEmail}`);
        }, (error) => {
          console.log('FAILED...', error);
        });
    },
  },
});
</script>

<style scoped lang="scss">
.contact-area{
  background-image: url('../assets/paper_bg.jpg');
  .container{
    margin: auto;
    padding: 50px 0;
    .section{
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
        margin-bottom: 20px;
      }
    }
    .input-area{
      background-color: #69696915;
      input{
        border: none;
        background-color: transparent;
        border-bottom: #1d4b11 solid 1px;
        margin: 20px;
        width: 60%;
        padding: 10px;
        border-radius: 0;
        &:focus{
          outline: none;
        }
      }
      button{
        font-size: 1rem;
        font-weight: 100;
        background-color: #1d4b11;
        background-color: rgb(87, 191, 255);
        background-color: #111c4b;
        background-color: #485072;
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

@media screen and (max-width: 750px){
  .contact-area {
    .container {
      padding: 20px;
      .txt{
        height: 200px;
      }
    }
  }
}
</style>
