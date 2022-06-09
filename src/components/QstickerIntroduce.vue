<template>
  <div class="qsticker-introduce">
    <div>
      <h1 class="title">
        互動貼圖
      </h1>
      <p>搭配【互動貼圖後台】網站</p>
      <p class="mb-5">
        提供設計題目、建立題庫、建立成員群組、設定測驗排程與細節的後台，搭配【互動貼圖 APP】快速蒐集資料。
      </p>
    </div>

    <div class="container">
      <div v-for="(content, key) in qstickerContent" :key="key" class="content col-md-4 col-sm-12">
        <div class="pic"
             data-aos="fade-up"
             data-aos-duration="1000"
             data-aos-once="true"
        >
          <img :src="content.img" :alt="content.img">
        </div>
        <div class="txt">
          <h2>{{ content.title }}</h2>
          <p v-for="(info, i) in content.information" :key="i">
            {{ info }}
          </p>
          <ul>
            <li v-for="(item, k) in content.items" :key="k">
              {{ item }}
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import qstickerContent from '@/assets/contents/qstickerContent';

export default Vue.extend({
  data() {
    return {
      qstickerContent,
    };
  },
});
</script>

<style scoped lang="scss">
.qsticker-introduce{
  .container{
    display: flex;
    justify-content: center;
    align-items: stretch;
    flex-wrap: wrap;
    .content{
      padding-top: 30px;
      .pic{
        border-radius: 2px;
        height: 300px;
        img{
          width: 100%;
          height: 100%;
          object-fit: contain;
          border-radius: 5px;
        }
      }
      .txt{
        padding: 0 6%;
        border-radius: 2px;
        display: flex;
        justify-content: center;
        align-items: flex-start;
        flex-direction: column;
        h2{
          font-size: 1.5rem;
          font-weight: 600;
        }
        p{
          font-weight: 600;
          text-align: justify;
        }
        ul{
          padding: 1rem;
          li{
            text-align: left;
          }
        }
      }
    }
  }
}

@media screen and (max-width: 950px){
  .qsticker-introduce {
    p{
      width: 90%;
      margin: auto;
      margin-bottom: 20px;
    }
    .container {
      margin: 2%;
      .content+.content{
        border-top: solid 1px #aaa;
      }
      .txt{
        margin-top: 20px;
      }
    }
  }
}

@media screen and (max-width: 750px){
  .qsticker-introduce {
    .container {
      flex-direction: row;
      margin-top: 10px;
      width: auto;
      .content+.content{
        border-top: solid 1px #aaa;
      }
      .pic{
        margin-top: 0px;
      }
    }
  }
}
</style>
