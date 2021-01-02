<template>
  <div id="app">
    <div class="nav">
      <Navbar />
    </div>
    <div class="pages" id="pages">
      <div class="pages-item " id="first-page"><Home /></div>
      <div class="pages-item " id="second-page"><Aboutme /></div>
      <div class="pages-item " id="third-page"><Projets /></div>
      <div class="pages-item " id="fourth-page"></div>
    </div>
  </div>
</template>

<script>
import Navbar from ".//Navbar";
import Home from ".//Home";
import Aboutme from ".//Aboutme";
import Projets from ".//Projets";
export default {
  name: "App",
  components: {
    Navbar,
    Home,
    Aboutme,
    Projets,
  },
  data() {
    return {
      index: 0,
      pages: ["first-page", "second-page", "third-page", "fourth-page"],
    };
  },
  /*mounted: function() {
    // Variables
    var isScrolling, start, end, distance;
    var div = document.getElementById("pages");
    // eslint-disable-next-line no-unused-vars
    var pages = this.pages;
    // eslint-disable-next-line no-unused-vars
    var index = this.index;
    // Listen for scroll events
    div.addEventListener(
      "scroll",
      function() {
        // Set starting position
        if (!start) {
          start = window.pageYOffset;
          console.log("la valeur de start est : " + start);
        }

        // Clear our timeout throughout the scroll
        window.clearTimeout(isScrolling);

        // Set a timeout to run after scrolling ends
        isScrolling = setTimeout(function() {
          // Calculate distance
          end = div.pageYOffset;
          distance = end - start;

          // Run the callback
          console.log("oui");
          console.log(distance + start + end);
          index++;
          document.getElementById(pages[index]).scrollIntoView();
          console.log(index);

          // Reset calculations
          start = null;
          end = null;
          distance = null;
        }, 1000);
      },
      false
    );
  },*/
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
