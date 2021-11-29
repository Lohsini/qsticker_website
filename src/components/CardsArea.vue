<template>
  <div class="cards-area">
    <div class="title">
      <h1 class="mb-4">
        This is H1 title.
      </h1>
    </div>
    <div class="container">
      <div v-for="(item, key) in contents" :key="key" class="block col-md-4"
           data-aos="flip-left"
           data-aos-duration="1500"
           :data-aos-delay="key*200"
      >
        <div class="image">
          <img :src="item.imgURL" :alt="item.alt">
        </div>
        <div class="info">
          <p class="title">
            {{ item.title }}
          </p>
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
import cards1 from '@/assets/card1.jpg';
import cards2 from '@/assets/card2.jpg';
import cards3 from '@/assets/card3.jpg';

export default Vue.extend({
  components: {
  },
  data() {
    return {
      contents: [
        {
          imgURL: cards1,
          alt: 'cards1.jpg',
          title: '1. 互動貼圖',
          txt: '快速蒐集資料',
        },
        {
          imgURL: cards2,
          alt: 'cards2.jpg',
          title: '2. 學力診斷分析',
          txt: '產生知識地圖',
        },
        {
          imgURL: cards3,
          alt: 'cards3.jpg',
          title: '3. 完成',
          txt: '獲得成效',
        },
      ],
    };
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
  }
}

</style>
