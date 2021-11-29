<template>
  <div class="cards-area">
    <div class="title">
      <h1 class="mb-4">
        互動體驗區
      </h1>
    </div>
    <div class="container">
      <div v-for="(item, key) in contents" :key="key" class="block col-md-4"
           data-aos="flip-left"
           data-aos-duration="1500"
           :data-aos-delay="key*200"
           @click.prevent="enterExperience(item.title)"
      >
        <div class="image">
          <img :src="item.imgURL" :alt="item.alt">
        </div>
        <div class="info">
          <p class="title">
            {{ item.title }}
          </p>
          <p>題目簡介：</p>
          <p class="txt">
            {{ item.txt }}
          </p>
        </div>
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
  components: {
  },
  data() {
    return {
      contents: [
        {
          imgURL: card1,
          alt: 'card1.jpg',
          title: '《滿意度調查》',
          txt: '適用於活動結束後收集資料',
        },
        {
          imgURL: card2,
          alt: 'card2.jpg',
          title: '《認識動物》',
          txt: '簡單易懂的圖卡設計，適用於幼兒及低年級學生',
        },
        {
          imgURL: card3,
          alt: 'card3.jpg',
          title: '《Indonesia Demo》',
          txt: '專門用印尼文製作的題目，此測驗擁有完整體驗流程，適用於補習班',
        },
      ],
    };
  },
  methods: {
    enterExperience(id:string) {
      console.log(`enterExperience${id}`);
    },
  },
});
</script>

<style scoped lang="scss">
*{
  margin: 0;
  padding: 0;
}
.cards-area{
  // background-image: url('../assets/kraft_paper.jpg');
  // padding: 30px 0;
  .container{
    display: flex;
    justify-content: center;
    .block{
      border: 1px solid #fce685;
      border-radius: 2px;
      overflow: hidden;
      position: relative;
      background-color: #fff;
      .image{
        img{
          width: 100%;
          height: 300px;
          object-fit: cover;
        }
      }
      .info{
         padding: 20px;
        .title{
          font-size: 1.2rem;
          font-weight: 600;
          margin-bottom: 10px;
        }
        .txt{
        }
      }
    }
    .block + .block{
      margin-left: 50px;
    }
    .block:hover{
      cursor: pointer;
      border: #fc8585 1px solid;
    }
  }
}

</style>
