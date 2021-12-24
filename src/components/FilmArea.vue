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
          <a href="https://qsticker.github.io/#/login">登入</a>
        </button>
        <button class="btn btn-primary">
          <a href="https://qsticker.github.io/#/register">註冊</a>
        </button>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.film-area{
  width: 100%;
  padding: 30px 10px;
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
      width: 100%;
      max-width: 800px;
    }
    .action-btns{
      margin: 30px;
      p{
        font-size: 1.5rem;
        // font-weight: 600;
        color: rgb(255, 255, 255);
      }
      button{
        font-size: 1.5rem;
        font-weight: 600;
        background-color: rgb(255, 238, 161);
        color: #000;
        border-radius: 50px;
        padding: 5px 50px;
        margin: 5px 20px;
        border: none;
        transition: all 0.2s;
        a{
          text-decoration: none;
          color: #000;
        }
        &:hover{
          cursor: pointer;
          transition: all 0.2s;
          background-color: #fdbf50;
          color: #fff;
          a{
            color: #fff;;
          }
        }
      }
    }
  }
}

@media screen and (max-width: 750px){
  .film-area {
    .film {
      .action-btns{
        button{
          font-size: 1rem;
        }
      }
    }
  }
}
</style>
