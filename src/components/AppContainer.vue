<template>
  <div id="app">
    <div class="nav">
      <Navbar />
    </div>
    <div class="pages" id="pages">
      <div class="pages-item " id="first-page"><Home /></div>
      <div class="pages-item " id="second-page"><Aboutme /></div>
      <div class="pages-item " id="third-page"><Projets /></div>
      <div class="pages-item " id="fourth-page"><Formations /></div>
      <div class="pages-item" id="fifth-page"><Experience /></div>
    </div>
  </div>
</template>

<script>
import Navbar from ".//Navbar";
import Home from ".//Home";
import Aboutme from ".//Aboutme";
import Projets from ".//Projets";
import Formations from "./Formations";
import Experience from "./Experience";
export default {
  name: "App",
  components: {
    Navbar,
    Home,
    Aboutme,
    Projets,
    Formations,
    Experience,
  },
  data() {
    return {
      index: 0,
      pages: ["first-page", "second-page", "third-page", "fourth-page"],
    };
  },
};
</script>

<style>
@media all and (max-width: 696px) {
  .pages {
    height: auto !important;
  }
  .pages-item {
    height: auto !important;
  }
}
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
  scroll-behavior: smooth;
}
@media all and (max-width: 768px) {
  .pages {
    scroll-snap-type: none !important;
  }
  .down {
    display: none !important;
  }
}
.pages-item {
  width: 100%;
  height: 100vh;
  scroll-snap-align: start;
  scroll-snap-stop: normal;
  background: var(--primary);
  border: 2px solid red;
}

a {
  text-decoration: none;
  color: inherit;
}
</style>
