<template>
  <modal
    name="answer-modal"
    :width="modalWidth + '%'"
    :height="modalHeight + '%'"
    @before-open="beforeOpen"
  >
    <!-- width="90%" -->
    <div class="example-modal-content">
      <div class="content">
        <img :src="answerModal" alt="answerModal">
      </div>
    </div>
  </modal>
</template>

<script lang="ts">
import Vue from 'vue';

const MODAL_WIDTH = 80;
const MODAL_HEIGHT = 80;
export default Vue.extend({
  name: 'AnswerModal',
  data() {
    return {
      answerModal: '',
      modalWidth: MODAL_WIDTH,
      modalHeight: MODAL_HEIGHT,
    };
  },
  created() {
    this.modalWidth = window.innerWidth < MODAL_WIDTH ? MODAL_WIDTH / 2 : MODAL_WIDTH;
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
  // background-color: rgb(255, 225, 127);
  img{
    width: 100%;
    object-fit: contain;
  }
}
</style>
