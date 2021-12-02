<template>
  <div class="experience-area">
    <div class="title">
      <h1 class="mb-5">
        互動體驗區
      </h1>
    </div>

    <div class="steps">
      <div class="container">
        <div class="block">
          <div class="item col-md-4">
            <div class="info">
              <h2>1</h2>
              <p>
                手機掃描QRCode / 點擊<a href="https://line.me/R/ti/p/6P9KY8DWLN">連結</a>
                <br>
                加入「互動貼圖」line頻道
              </p>
            </div>
            <div class="image">
              <img src="../assets/QRCode.png" alt="">
            </div>
          </div>
          <div class="item col-md-4">
            <div class="info">
              <h2>2</h2>
              <p>打開「選單」<br>點擊選單「加入班級」</p>
            </div>
            <div class="image">
              <img src="../assets/join_class.png" alt="">
            </div>
          </div>
          <div class="item col-md-4">
            <div class="info">
              <h2>3</h2>
              <p>輸入班級名稱：<br>「體驗班#125」</p>
            </div>
            <div class="image">
              <img :src="card1" alt="">
            </div>
          </div>
        </div>
        <div class="block">
          <div class="item col-md-4">
            <div class="info">
              <h2>4</h2>
              <p>選擇以下體驗題組<br>於對話框輸入代碼後即可開始做題體驗</p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="cards">
      <div class="container">
        <div v-for="(item, key) in contents" :key="key" class="block"
             data-aos="flip-left"
             data-aos-duration="1500"
             :data-aos-delay="key*200"
        >
          <ExperienceCard
            :content="item"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import ExperienceCard from '@/components/ExperienceCard.vue';
import card1 from '@/assets/card1.jpg';
import card2 from '@/assets/card2.jpg';
import card3 from '@/assets/card3.jpg';

export default Vue.extend({
  components: {
    ExperienceCard,
  },
  data() {
    return {
      card1,
      contents: [
        {
          imgURL: card1,
          alt: 'card1.jpg',
          title: '《滿意度調查》',
          txt: '適用於活動結束後收集資料',
          shortId: 'q1458',
        },
        {
          imgURL: card2,
          alt: 'card2.jpg',
          title: '《認識動物》',
          txt: '簡單易懂的圖卡設計，適用於幼兒及低年級學生',
          shortId: 'q2785',
        },
        {
          imgURL: card3,
          alt: 'card3.jpg',
          title: '《Indonesia Demo》',
          txt: '專門用印尼文製作的題目，此測驗擁有完整體驗流程，適用於補習班',
          shortId: 'q3643',
        },
      ],
    };
  },
  methods: {
  },
});
</script>

<style scoped lang="scss">
*{
  margin: 0;
  padding: 0;
}
.experience-area{
  // padding: 30px 0;
  .steps{
    .block{
      // background-color: #fc8585;
      margin: 20px;
      display: flex;
      justify-content: flex-start;
      align-items: center;
      .item{
        .info{
          display: flex;
          align-items: center;
          h2{
            width: 10%;
            color: #aaa;
            margin-right: 20px;
          }
          p{
            width: 70%;
          }
          a{
            text-decoration: none;
            color: #42b983;
          }
        }
        .image{
          margin: auto;
          height: 100px;
          img{
            height: 100%;
          }
        }
      }
    }
  }

  .cards{
    .container{
      display: flex;
      justify-content: center;
      .block{
        border: 1px solid #fce685;
        border-radius: 2px;
        overflow: hidden;
        position: relative;
        background-color: #fff;
        width: 30%;
      }
      .block + .block{
        margin-left: 10px;
      }
      .block:hover{
        border: #fc8585 1px solid;
      }
    }
  }
}

</style>
