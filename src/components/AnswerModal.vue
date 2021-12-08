<template>
  <modal
    name="answer-modal"
    @before-open="beforeOpen"
  >
    <div class="example-modal-content">
      <div class="content">
        <img :src="answerModal" alt="answerModal">
      </div>
    </div>
  </modal>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'AnswerModal',
  data() {
    return {
      answerModal: '',
    };
  },
  methods: {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    beforeOpen(event: any) {
      this.answerModal = event.params.answerModal;
    },
  },
});
</script>
<style lang="scss" scoped>
.content{
  background-color: aquamarine;
  width: 100px;
  img{
    width: 100%;
  }
}
</style>
