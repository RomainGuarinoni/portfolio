<template>
  <div id="app">
    <div class="sticky">
      <p>yyeaahh</p>
    </div>
    <div class="test">
      <div class="first">
        <h1>Scroll vers le bas</h1>
        <p><a href="#test">Hello</a></p>
      </div>
      <div class="second">
        <h1 id="test">test</h1>
      </div>
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
  position: absolute;
  scroll-behavior: smooth;
  overflow-y: scroll;
  overflow-x: hidden;
  text-align: center;
  scroll-snap-type: y mandatory;
}
.test {
  width: 100%;
  margin: 0;
  padding: 0;
  height: 100vh;
  position: absolute;
  scroll-behavior: smooth;
  overflow-y: scroll;
  overflow-x: hidden;
  text-align: center;
  z-index: 1;
  scroll-snap-type: y mandatory;
}
::-webkit-scrollbar {
  width: 0;
}
a {
  color: white;
}
.sticky {
  color: rgba(9255, 255, 255);
  background: rgba(160, 35, 35, 0.116);
  top: 0px;
  z-index: 2;
  position: -webkit-sticky !important;
  position: sticky !important;
}
.nav {
  position: -webkit-sticky;
  position: sticky;
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

.second,
.first {
  display: flex;
  flex-direction: column;
  position: relative;
  z-index: 1;
  justify-content: center;
}
</style>
