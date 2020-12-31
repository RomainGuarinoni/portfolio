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
                  <p>découvrir</p>
                </div>
              </div>
            </div>
            <div class="caroussel-right">
              <img :src="projets[this.index].img" alt="" />
            </div>
          </div>
          <div class="caroussel-point">
            <div class="point" :class="{ point_selected: index == 0 }"></div>
            <div class="point" :class="{ point_selected: index == 1 }"></div>
            <div class="point" :class="{ point_selected: index == 2 }"></div>
            <div class="point" :class="{ point_selected: index == 3 }"></div>
            <div class="point" :class="{ point_selected: index == 4 }"></div>
            <div class="point" :class="{ point_selected: index == 5 }"></div>
          </div>
        </div>
      </div>
      <div class="chevron" @click="increase">
        <font-awesome-icon :icon="['fas', 'chevron-right']" />
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
export default {
  data() {
    return {
      index: 0,
      projets: [
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
          title: "Steam market Notifier",
          description:
            "Un store pour pouvoir choisir des skins csgo au bon prix",
          stack: ["Vue.js", "gsap", "AOS", "github Pages"],
          img: require("../assets/steam.jpg"),
        },

        {
          title: "Inspiring music Theory",
          description:
            "Un jeux de lecture de note pour un projet avec une école de musique",
          stack: ["Vue.js", "vexflow"],
          img: require("../assets/jeux.jpg"),
        },
        {
          title: "Exam Answer Interface",
          description: "une petite web App qui permet de faire des QCM",
          stack: ["VHTML", "CSS", "javascript"],
          img: require("../assets/qcm.jpg"),
        },
        {
          title: "Steam market Notifier",
          description:
            "Un store pour pouvoir choisir des skins csgo au bon prix",
          stack: ["Vue.js", "gsap", "AOS", "github Pages"],
          img: require("../assets/steam.jpg"),
        },
      ],
    };
  },
  methods: {
    increase() {
      gsap.to(".caroussel-content", { duration: 0.3, opacity: 0 });
      setTimeout(() => {
        if (this.index == 5) {
          this.index = 0;
        } else {
          this.index++;
        }
        gsap.to(".caroussel-content", { duration: 0.3, opacity: 1 });
      }, 300);
    },
    decrease() {
      gsap.to(".caroussel-content", { duration: 0.3, opacity: 0 });
      setTimeout(() => {
        if (this.index == 0) {
          this.index = 5;
        } else {
          this.index--;
        }
        gsap.to(".caroussel-content", { duration: 0.3, opacity: 1 });
      }, 300);
    },
  },
};
</script>

<style scoped>
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
  border: 3px solid #be9063;
  box-sizing: border-box;
  box-shadow: 0px 0px 12px 2px rgba(160, 116, 116, 0.25);
  border-radius: 20px;
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
}
.caroussel-left {
  width: 300px;
}
.caroussel-stack {
  display: flex;
  flex-wrap: wrap;
  width: 350px;
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
}
.point_selected {
  background: rgb(104, 61, 13);
}
.decouvrir {
  background: rgba(126, 117, 117, 0.21);
  border: 2px solid var(--brown);
  border-radius: 15px;
  margin-top: 20px;
  width: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.decouvrir p {
  margin: 5px 10px;
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
