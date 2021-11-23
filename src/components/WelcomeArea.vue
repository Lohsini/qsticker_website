<template>
  <div class="welcome-area">
    <div class="title">
      <h1>歡迎來到學力科技</h1>
    </div>
    <div class="icon">
      <i class="fas fa-caret-down" />
    </div>
    <div class="txt">
      多肉行旅想把種植多肉植物的各種美好分享給大家，<br>
      就像好友之間訴說著彼此的種植經驗、以及對於美好生活的想像。<br>
      經歷過工作與生活的衝撞，多肉植物讓兩者產生平衡，<br>
      透過養護植物，也時時提醒著看照自己的心情，<br>
      慢下腳步感受情緒，活力有朝氣的過每一天。<br>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
});
</script>

<style scoped lang="scss">
.welcome-area{
  .title{
    h1{
      margin: 0;
    }
  }
  .icon{
    margin: 10px;
    animation-name: iconAnimate;
    animation-duration: 0.6s;
    animation-iteration-count: infinite;
    animation-direction: alternate-reverse;
    animation-timing-function: linear;
    i{
      font-size: 1.3rem;
    }
  }
  .txt{

  }
}

@keyframes iconAnimate {
  from {
    transform: translateY(3px);
  }
  to{
    transform: translateY(-3px);
  }
}
</style>
