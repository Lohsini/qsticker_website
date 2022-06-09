<template>
  <div class="film-area">
    <h1>介紹影片</h1>
    <div class="film">
      <video class="viedo" controls autoplay muted>
        <source src="../assets/DEMO(Chinese).mp4" type="video/mp4">
      </video>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.film-area{
  width: 100%;
  padding: 30px 10px;
  // background-image: url('../assets/kraft_paper.jpg');
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  h1{
    // color: rgb(255, 255, 255);
    margin-bottom: 30px;
  }
  .film{
  border: solid 10px rgba(127, 174, 178, 0.219);

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    .viedo{
      width: 100%;
      max-width: 800px;
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
