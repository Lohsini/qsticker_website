<template>
  <div class="experience-area">
    <div class="title">
      <h1 class="mb-5">
        互動體驗區
      </h1>
    </div>

    <div class="steps">
      <div class="section">
        <div class="container row m-auto p-0">
          <div class="item col-md-4 col-sm-12">
            <div class="info">
              <h2>1</h2>
              <p>
                手機掃描QRCode / 點擊<a href="https://line.me/R/ti/p/6P9KY8DWLN">連結</a>
                <br>
                加入「互動貼圖」line頻道
              </p>
            </div>
            <div class="image">
              <img :src="QRCode" alt="QRCode">
            </div>
          </div>
          <div class="item col-md-4 col-sm-12">
            <div class="info">
              <h2>2</h2>
              <p>打開「選單」<br>點擊選單「加入班級」</p>
            </div>
            <div class="image">
              <img :src="joinClass" alt="join_class">
            </div>
          </div>
          <div class="item col-md-4 col-sm-12">
            <div class="info">
              <h2>3</h2>
              <p>輸入班級名稱：<br>「demo#122」</p>
            </div>
            <div class="image addMemberGroup">
              <img :src="addMemberGroup" alt="addMemberGroup">
            </div>
          </div>
        </div>
      </div>
      <div class="section mb-3">
        <div class="container row m-auto p-0">
          <div class="item col-md-4 col-sm-12">
            <div class="info">
              <h2>4</h2>
              <p>選擇以下體驗題組<br>於對話框輸入代碼後即可開始做題</p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="cards">
      <div class="container row m-auto p-0">
        <div v-for="(item, key) in contents" :key="key" class="content col-md-4 col-sm-12"
             data-aos="flip-left"
             data-aos-duration="1500"
             data-aos-once="true"
             :data-aos-delay="key*200"
        >
          <div class="main">
            <ExperienceCard
              :content="item"
            />
            <button class="btn" @click.prevent="openAnswerModal(item.answerPic)">
              看解答
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import ExperienceCard from '@/components/ExperienceCard.vue';

import QRCode from '@/assets/QRCode.png';
import joinClass from '@/assets/join_class.png';
import addMemberGroup from '@/assets/add_memberGroup.png';
import answer1 from '@/assets/answer1.png';
import answer2 from '@/assets/answer2.png';
import answer3 from '@/assets/answer3.png';

export default Vue.extend({
  components: {
    ExperienceCard,
  },
  data() {
    return {
      answer1,
      answer2,
      answer3,
      QRCode,
      joinClass,
      addMemberGroup,
      contents: [
        {
          imgURL: 'https://storage.googleapis.com/quiz-storage/images/7IIOZaGCu3xVCqq',
          alt: '《滿意度調查》',
          title: '《滿意度調查》',
          txt: '適用於活動結束後收集資料',
          shortId: 'qvbiix', // 真的
          answerPic: answer1,
        },
        {
          imgURL: 'https://storage.googleapis.com/quiz-storage/images/6lJIuuJC326fFeu',
          alt: '《認識動物》',
          title: '《認識動物》',
          txt: '簡單易懂的圖卡設計，適用於幼兒及低年級學生',
          shortId: 'qrhkmv', // 真的
          answerPic: answer2,
        },
        {
          imgURL: 'https://storage.googleapis.com/quiz-storage/images/kJE5YaavHKlB2mN',
          alt: '《Indonesia Demo》',
          title: '《Indonesia Demo》',
          txt: '專門用印尼文製作的題目，此測驗擁有完整體驗流程，適用於補習班',
          shortId: 'q0pvlq', // 真的
          answerPic: answer3,
        },
      ],
    };
  },
  methods: {
    openAnswerModal(imgURL: string) {
      this.$modal.show('answer-modal', {
        answerModal: imgURL,
      });
    },
  },
});
</script>

<style scoped lang="scss">
.experience-area{
  border: #1d4b11 2px dashed;
  margin: 2%;
  padding-top: 50px;
  padding-bottom: 50px;
  .steps{
    .section{
      margin-bottom: 50px;
      .item{
        padding: 10px;
        .info{
          display: flex;
          align-items: center;
          h2{
            width: 10%;
            color: #aaa;
          }
          p{
            width: 75%;
            margin: 0;
          }
          a{
            text-decoration: none;
            color: #42b983;
          }
        }
        .image{
          margin: auto;
          height: 200px;
          margin-top: 20px;
          img{
            height: 100%;
          }
        }
        .addMemberGroup{
          img{
            border: #aaa 1px solid;
          }
        }
      }
    }
  }

  .cards{
    .container{
      .content{
        display: flex;
        flex-direction: column;
        justify-content: space-between;

        .main{
          border: 1px solid #fce685;
          border-radius: 2px;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          height: 100%;
          margin: 10px;

          .btn{
            border-radius: 2px;
            background-color: rgba(252, 230, 133, 0.5);
            width: 90%;
            align-self: center;
            margin-bottom: 20px;
            &:hover{
              background-color: rgba(252, 131, 131, 0.5);
            }
          }
          &:hover{
            border: #fc8585 1px solid;
          }
        }

      }
    }
  }
}

@media screen and (max-width: 800px){
  .experience-area {
    .steps {
      .section{
        .item{
          .image{
            height: auto;
            width: 200px;
            img{
              height: 100%;
              width: 100%;
            }
          }
        }
      }
    }
  }
}

</style>
