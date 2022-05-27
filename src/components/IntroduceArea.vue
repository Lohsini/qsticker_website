<template>
  <div class="introduce-area">
    <qstickerIntroduce class="divider" />

    <!-- <analysisIntroduce class="divider" /> -->
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import qstickerIntroduce from '@/components/QstickerIntroduce.vue';
// import analysisIntroduce from '@/components/AnalysisIntroduce.vue';

export default Vue.extend({
  components: {
    qstickerIntroduce,
    // analysisIntroduce,
  },
  data() {
    return {
    };
  },
});
</script>

<style scoped lang="scss">
.introduce-area{
  .divider{
    margin-bottom: 50px;
    padding-bottom: 50px;
    border-bottom: solid 5px rgb(245, 245, 245);
  }
}
</style>
