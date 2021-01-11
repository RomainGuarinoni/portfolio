<template>
  <div class="boxall">
    <h1><span class="highlight">Mes proj</span>ets</h1>
    <div class="caroussel">
      <div class="chevron" @click="decrease">
        <font-awesome-icon :icon="['fas', 'chevron-right']" />
      </div>
      <div class="caroussel-box">
        <div class="caroussel-box-template">
          <div class="caroussel-content">
            <div class="caroussel-left">
              <h2>{{ projets[this.index].title }}</h2>
              <p>{{ projets[this.index].description }}</p>
              <div class="caroussel-stack">
                <div
                  class="stack-item"
                  v-for="(stack, index) in projets[this.index].stack"
                  :key="index"
                >
                  <p>{{ stack }}</p>
                </div>
              </div>
              <div class="bouton-box">
                <div class="decouvrir">
                  <p @click="pushToDetail(index)">découvrir</p>
                </div>
              </div>
            </div>
            <div class="caroussel-right">
              <img :src="projets[this.index].img" alt="" />
            </div>
          </div>
          <div class="caroussel-point">
            <div
              class="point"
              @click="goTo(0)"
              :class="{ point_selected: index == 0 }"
            ></div>
            <div
              class="point"
              @click="goTo(1)"
              :class="{ point_selected: index == 1 }"
            ></div>
            <div
              class="point"
              @click="goTo(2)"
              :class="{ point_selected: index == 2 }"
            ></div>
            <div
              class="point"
              @click="goTo(3)"
              :class="{ point_selected: index == 3 }"
            ></div>
            <div
              class="point"
              @click="goTo(4)"
              :class="{ point_selected: index == 4 }"
            ></div>
            <div
              class="point"
              @click="goTo(5)"
              :class="{ point_selected: index == 5 }"
            ></div>
          </div>
        </div>
      </div>
      <div class="chevron" @click="increase">
        <font-awesome-icon :icon="['fas', 'chevron-right']" />
      </div>
    </div>
    <div class="projet-liste">
      <div class="item" v-for="(item, index) in projets" :key="index">
        <div class="caroussel-content">
          <div class="caroussel-left">
            <h2>{{ item.title }}</h2>
            <p>{{ item.description }}</p>
            <div class="caroussel-stack">
              <div
                class="stack-item"
                v-for="(stack, index) in item.stack"
                :key="index"
              >
                <p>{{ stack }}</p>
              </div>
            </div>
            <div class="bouton-box">
              <div class="decouvrir">
                <p @click="pushToDetail(index)">découvrir</p>
              </div>
            </div>
          </div>
          <div class="caroussel-right">
            <img :src="item.img" alt="" />
          </div>
        </div>
      </div>
    </div>
    <a href="#fourth-page"
      ><div class="down">
        <font-awesome-icon :icon="['fas', 'arrow-down']" /></div
    ></a>
  </div>
</template>

<script>
import { gsap } from "gsap";
import { mapState } from "vuex";
export default {
  data() {
    return {
      index: 0,
      projets: [
        {
          title: "Synctube",
          description:
            "Une WebApp qui permet de regarder des vidéos youtube en parfaite synchronisation avec ses amis ! ",
          stack: [
            "Vue.js",
            "node.js",
            "websocket",
            "mongodb",
            "express",
            "youtube Api",
            "Heroku",
          ],
          img: require("../assets/synctube.jpg"),
        },
        {
          title: "letsJam",
          description:
            "Une application pour gérer les réservations des salles de musique de mon école",
          stack: ["Vue.js", "node.js", "websocket", "mongodb", "express"],
          img: require("../assets/letsjam.jpg"),
        },
        {
          title: "Portfolio",
          description: "Mon portfolio actuel",
          stack: ["Vue.js", "gsap", "github Pages"],
          img: require("../assets/portfolio.jpg"),
        },
        {
          title: "Inspiring music Theory",
          description:
            "Un jeux de lecture de note pour un projet avec une école de musique",
          stack: ["Vue.js", "vexflow"],
          img: require("../assets/jeux.jpg"),
        },
        {
          title: "Steam market Notifier",
          description:
            "Un store pour pouvoir choisir des skins d'arme csgo au bon prix",
          stack: ["Vue.js", "gsap", "AOS", "github Pages"],
          img: require("../assets/steam.jpg"),
        },
        {
          title: "Grapheur de fonctions mathématiques",
          description:
            "Une application qui permet de visualiser des fonctions mathématiques sur un graphique",
          stack: ["C prog", "OpenGL", "Gitlab"],
          img: require("../assets/c.jpg"),
        },
      ],
    };
  },
  computed: {
    ...mapState(["retour", "indexRetour"]),
  },
  methods: {
    showCaroussel() {
      return document.getElementById("App").matchMedia("(max-width : 1176px")
        .matches;
    },
    increase() {
      gsap.to(".caroussel-content", {
        duration: 0.3,
        opacity: 0,
        onComplete: () => {
          if (this.index == 5) {
            this.index = 0;
          } else {
            this.index++;
          }
          gsap.to(".caroussel-content", { duration: 0.3, opacity: 1 });
        },
      });
    },
    decrease() {
      gsap.to(".caroussel-content", {
        duration: 0.3,
        opacity: 0,
        onComplete: () => {
          if (this.index == 0) {
            this.index = 5;
          } else {
            this.index--;
          }
          gsap.to(".caroussel-content", { duration: 0.3, opacity: 1 });
        },
      });
    },
    goTo(index) {
      gsap.to(".caroussel-content", {
        duration: 0.3,
        opacity: 0,
        onComplete: () => {
          this.index = index;
          gsap.to(".caroussel-content", { duration: 0.3, opacity: 1 });
        },
      });
    },
    pushToDetail(index) {
      let path = "/projet/" + index;
      this.$router.push({ path: path });
    },
  },
  mounted: function() {
    if (this.retour == true) {
      this.index = this.indexRetour;
      document.getElementById("third-page").scrollIntoView();
      this.$store.dispatch("changeretour", { index: 0 });
    }
  },
};
</script>

<style scoped>
@media all and (max-width: 1440px) {
  .boxall {
    height: 88% !important;
    padding-top: 110px !important;
  }
  .caroussel {
    margin: 0 !important;
  }
}
@media all and (max-width: 1182px) {
  .caroussel-box-template {
    width: 850px !important;
  }
  .caroussel-right img {
    width: 400px !important;
  }
}
@media all and (max-width: 768px) {
  .caroussel {
    display: none !important;
  }
  .projet-liste {
    display: block !important;
  }
  .caroussel-content {
    margin: 50px 0 !important;
  }
  .boxall {
    overflow: scroll !important;
  }
  .boxall h1 {
    width: 100% !important;
    margin: 0;
    text-align: center;
  }
  .bouton-box {
    margin: 20px 0 !important;
    width: 100% !important;
    display: flex;
    justify-content: center;
  }
  ::-webkit-scrollbar {
    width: 2px !important;
    color: var(--brown) !important;
  }
}
@media all and (max-width: 1185px) {
  .caroussel-left {
    font-size: 15px !important;
  }
}
@media all and (max-width: 768px) {
  .caroussel-left {
    align-items: center !important;
    text-align: justify;
  }
}
@media all and (max-width: 625px) {
  .caroussel-left {
    width: 80% !important;
  }
}
.bouton-box {
  transition: all ease 200ms;
}
.projet-liste {
  display: none;
}

.boxall {
  height: 83%;
  padding-top: 170px;
  position: relative;
}
* {
  color: var(--txt);
}
h1 {
  font-size: 40px;
  letter-spacing: 5px;
  margin-left: 200px;
}
.highlight {
  border-bottom: 4px solid var(--txt);
}
.caroussel {
  margin-top: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.chevron {
  width: 50px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  border-radius: 100%;
  background: rgba(98, 87, 87, 0.44);
  cursor: pointer;
  margin: 0 20px;
  margin-bottom: 30px;
  transition: all ease 200ms;
}
.chevron:hover {
  background: rgba(98, 87, 87, 0.829);
}
.chevron:nth-child(1) {
  transform: rotate(180deg);
}
.caroussel-box {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
}
.caroussel-box-template {
  width: 1000px;
  height: 500px;
  box-sizing: border-box;
  border: 2px solid var(--brown);
  border-radius: 20px;
  border-radius: 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: center;
}
.caroussel-content {
  display: flex;
  flex-wrap: wrap;

  justify-content: space-around;
  align-items: center;
  width: 100%;
  height: 100%;
}
.caroussel-right img {
  width: 500px;
  box-shadow: 0px 0px 15px rgba(73, 73, 73, 0.342);
}
.caroussel-left {
  font-size: 20px;
  width: 40%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  height: 60%;
}
.caroussel-stack {
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  justify-content: flex-start;
  align-items: center;
}
.stack-item {
  background: rgba(196, 196, 196, 0.28);
  border: none;
  border-radius: 15px;
  margin: 10px;
}
.stack-item p {
  margin: 5px 10px;
}
.caroussel-point {
  display: flex;
  justify-content: space-around;
  width: 300px;
  margin-top: 30px;
}

.point {
  width: 13px;
  height: 13px;
  background: var(--light-brown);
  border: none;
  border-radius: 100%;
  cursor: pointer;
}
.point_selected {
  background: rgb(104, 61, 13);
}
.decouvrir {
  background: var(--brown);

  border-radius: 10px;
  margin-top: 20px;
  width: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  transition: all ease 100ms;
  font-weight: bold;
  letter-spacing: 1.1px;
  padding: 6px 17px;
}
.decouvrir:hover {
  transform: scale(1.1);
}
.decouvrir p {
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
