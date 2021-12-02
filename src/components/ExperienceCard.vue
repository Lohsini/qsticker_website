<template>
  <div class="experience-card">
    <div class="image">
      <img :src="content.imgURL" :alt="content.alt">
    </div>
    <div class="info">
      <div class="title">
        {{ content.title }}
      </div>
      <p class="copy" title="複製測驗代碼" @click="copyEventCode(content.shortId)">
        題組代碼：{{ content.shortId }}
        <span v-if="copyMessageDisplay === false">
          <i class="far fa-copy" />
        </span>
        <span v-if="copyMessageDisplay === true">
          <i class="fas fa-check-circle text-success" />
        </span>
      </p>
      <p class="txt">
        題組簡介：<br>{{ content.txt }}
      </p>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  components: {
  },
  props: {
    content: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      copyMessageDisplay: false,
      copyMessageTimeoutId: 0,
    };
  },
  methods: {
    copyEventCode(shortId: string) {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      this.$copyText(shortId).then((e) => {
        this.copyMessageDisplay = true;
        console.log(`copy${shortId}`);
        this.copyMessageTimeoutId = setTimeout(this.clearCopyMessage, 1500);
      }, (e) => {
        console.error('複製失败', e.text);
      });
    },
    clearCopyMessage() {
      this.copyMessageDisplay = false;
    },
    clearCopyMessageTimeout() {
      this.clearCopyMessage();
      clearTimeout(this.copyMessageTimeoutId);
    },

  },
});
</script>

<style scoped lang="scss">
*{
  margin: 0;
  padding: 0;
}
.experience-card{
  .image{
    position: relative;
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
    p{
      text-align: left;
      margin-bottom: 10px;
    }
    .copy{
      &:hover{
        cursor: pointer;
      }
    }
  }
}

</style>
