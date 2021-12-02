<template>
  <div class="film-area">
    <h1>介紹影片</h1>
    <div class="film">
      <video class="viedo" controls autoplay muted>
        <source src="../assets/DEMO(Chinese).mp4" type="video/mp4">
      </video>
      <div class="action-btns">
        <p>
          現在就去
        </p>
        <button class="btn btn-primary">
          登入
        </button>
        <button class="btn btn-primary">
          註冊
        </button>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.film-area{
  width: 100%;
  padding: 30px;
  // background-image: url('../assets/paper_bg.jpg');
  background-image: url('../assets/kraft_paper.jpg');
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  h1{
    margin: 30px;
    color: rgb(255, 255, 255);
    // font-weight: 600;
  }
  .film{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    .viedo{
      max-width: 800px;
    }
    .action-btns{
      margin: 30px;
      p{
        font-size: 1.5rem;
        font-weight: 600;
        color: rgb(255, 255, 255);
      }
      button{
        font-size: 1.5rem;
        font-weight: 600;
        background-color: rgb(255, 238, 161);
        color: #000;
        border-radius: 2px;
        padding: 5px 20px;
        margin: 5px;
        border: none;
        transition: all 0.2s;
        &:hover{
          cursor: pointer;
          opacity: 0.9;
          transition: all 0.2s;
          background-color: #1d4b11;
          color: #fff;

        }
      }
    }
  }
}
</style>
