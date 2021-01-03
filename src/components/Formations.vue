<template>
  <div class="boxAll">
    <div class="box">
      <h1><span class="underline">Formati</span>on</h1>
      <div class="content">
        <div class="ecole">
          <div class="ecole-item">
            <h2>IMT Lille Douai</h2>
            <p class="date">2019 - 2023</p>
            <p class="txt">
              Science de l’ingénieurie, programmation en C/Java, base de
              données, managment ...
            </p>
            <p class="txt">Membre de l’association musique</p>
          </div>
          <div class="ecole-item">
            <h2>Saint Pierre Intitut</h2>
            <p class="date">2017 - 2019</p>
            <p class="txt">
              Baccalauréat général scientifique - Option européenne Anglais,
              Mention très bien
            </p>
          </div>
        </div>
        <div class="svg">
          <img src="../assets/exam.svg" alt="" width="400" height="400" />
        </div>
      </div>
    </div>
    <a href="#fifth-page"
      ><div class="down">
        <font-awesome-icon :icon="['fas', 'arrow-down']" /></div
    ></a>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.boxAll {
  position: relative;
  height: 83%;
  padding-top: 170px;
  color: var(--txt);
  display: flex;
  justify-content: center;
  align-items: center;
}
.box {
  width: 80%;
  height: 100%;
}
.underline {
  border-bottom: 4px solid var(--txt);
}
h1 {
  font-size: 40px;
  letter-spacing: 3px;
}
.content {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  align-items: center;
}
.ecole-item {
  margin: 100px 0 0 40px;
}
h2 {
  color: var(--brown);
  margin: 0;
}
.date {
  margin: 0;
}
.down {
  color: var(--txt);
  width: 30px;
  height: 30px;
  border-radius: 100%;
  border: 4px solid var(--txt);
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  bottom: 20px;
  left: 50%;
  cursor: pointer;
  font-size: 20px;
}
</style>
