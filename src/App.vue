<template>
  <div id="app">
    <div class="first">
      <h1>Scroll vers le bas</h1>
    </div>
    <div class="second">
      <h1>Scroll vers le haut</h1>
    </div>
  </div>
</template>

<script>
export default {
  name: "App",
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  width: 100%;
  margin: 0;
  padding: 0;
  height: 100vh;
  position: fixed;

  overflow-y: scroll;
  overflow-x: hidden;
  text-align: center;
  scroll-snap-type: y mandatory;
}
::-webkit-scrollbar {
  width: 0;
}
h1 {
  padding: 0;
  margin: 0;
  color: white;
}
.first {
  width: 100%;
  height: 100%;
  background: blue;
  scroll-snap-align: start;
  scroll-snap-stop: normal;
}
.second {
  width: 100%;
  height: 100%;
  background: red;
  scroll-snap-align: start;
  scroll-snap-stop: normal;
}
.first,
.second {
  display: flex;
  flex-direction: column;
  justify-content: center;
}
</style>
