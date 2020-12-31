<template>
  <div id="app">
    <div class="nav">
      <Navbar />
    </div>
    <div class="pages">
      <div class="first" id="first-page"><Home /></div>
      <div class="second" id="second-page"><Aboutme /></div>
      <div class="third" id="third-page"></div>
    </div>
  </div>
</template>

<script>
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Aboutme from "./components/Aboutme";
export default {
  name: "App",
  components: {
    Navbar,
    Home,
    Aboutme,
  },
};
</script>

<style>
#app {
  font-family: "Poppins", sans-serif;
  --primary: #061b20;
  --txt: #f2f2f2;
  --light-brown: #a4978e;
  --brown: #be9063;
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  scroll-behavior: smooth;
}
::-webkit-scrollbar {
  width: 0;
}
.nav {
  width: 100%;
  position: relative;
  z-index: 2;
}
.pages {
  width: 100%;
  height: 100vh;
  position: absolute;
  z-index: 1;
  overflow-y: scroll;
  scroll-snap-type: y mandatory;
  scroll-behavior: smooth;
}
.first,
.second,
.third {
  width: 100%;
  height: 100vh;
  scroll-snap-align: start;
  scroll-snap-stop: normal;
}
.first,
.second {
  background: var(--primary);
}
.third {
  background: blue;
}
a {
  text-decoration: none;
  color: inherit;
}
</style>
