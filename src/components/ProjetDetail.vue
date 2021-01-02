<template>
  <div class="projetBox">
    <div class="retour" @click="retour">
      <div class="circle">
        <font-awesome-icon class="arrow" :icon="['fas', 'arrow-down']" />
      </div>
      <p>retour</p>
    </div>
    <div class="content">
      <div class="header">
        <h1>{{ projet[this.id].title }}</h1>
        <p>{{ projet[this.id].date }}</p>
      </div>
      <div class="web">
        <a :href="projet[this.id].site" target="_blank"
          ><div class="site">
            <font-awesome-icon :icon="['fas', 'globe']" />
            <p>le site</p>
          </div></a
        >
        <a :href="projet[this.id].git" target="_blank"
          ><div class="site">
            <font-awesome-icon :icon="['fab', 'github']" />
            <p>github</p>
          </div></a
        >
      </div>
      <div class="description">
        <div v-for="(line, index) in projet[this.id].description" :key="index">
          <p v-html="line"></p>
        </div>
      </div>
      <div class="stack">
        <div
          class="stack-item"
          v-for="(item, index) in projet[this.id].stack"
          :key="index"
        >
          <p>{{ item }}</p>
        </div>
      </div>
      <div class="fonctionnalite">
        <h2>Fonctionnalités</h2>
        <ul>
          <li
            v-for="(item, index) in projet[this.id].fonctionnalite"
            :key="index"
          >
            {{ item }}
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
//<span style='color : var(--brown);'>
export default {
  props: ["id"],
  data() {
    return {
      projet: [
        {
          title: "letsJam",
          date: "Décembre 2020",
          site: "https://letsjamimt.herokuapp.com/#/salle",
          git: "https://github.com/RomainGuarinoni/letsJam",
          description: [
            "<p>Mon école possède 2 salles de musiques pour les étudiants. Ces derniers doivent poster un message sur une conv whatsapp lorsqu’ils veulent prendrre une salle ou la libérer.</p>",
            "<p>Cette application permet de <span style='color : var(--brown);'>simplifier ce processus </span> et de le rendre <span style='color : var(--brown);'>plus moderne</span>, en proposant simplement de cliquer sur un bouton réserver ou libérer.</p>",
            "<p>Les étudiant peuvent <span style='color : var(--brown);'>voir rapidemment </span>si la salle est libre ou pas, et le statut des salles se met automatiquement à jour, sans recharger la page, grâce au <span style='color : var(--brown);'>websocket</span>.</p> ",
          ],
          stack: [
            "Vue.js",
            "node.js",
            "express",
            "mongodb",
            "socket.io",
            "Heroku",
          ],
          fonctionnalite: [
            "Réservation et libération des salles avec un bouton ",
            "Possibilité de voir qui est dans la salle et depuis combien de temps",
            "Possibilité de voir qui est dans la salle et depuis combien de temps",
            "Update du site facile grace à heroku et git",
          ],
        },
      ],
    };
  },
  methods: {
    retour() {
      this.$store.dispatch("changeretour", { index: this.id });
      this.$router.push({ name: "App" });
    },
  },
};
</script>

<style scoped>
.projetBox {
  background: var(--primary);
  width: 100%;
  height: 100%;
  overflow-y: scroll;
  display: flex;
  justify-content: center;
}
.content {
  color: var(--txt);
  font-size: 17px;
  width: 60%;
  margin-top: 180px;
}
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  margin-bottom: 10px;
}
.header h1 {
  font-size: 45px;
  border-bottom: 4px solid var(--txt);
  margin: 0px;
}
.header p {
  font-weight: bold;
}
.web {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-wrap: wrap;
}
.site {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  margin-right: 20px;
  cursor: pointer;
  transition: all ease 200ms;
}
.site:hover {
  color: var(--brown);
}
.site p {
  margin-left: 5px;
}
.description {
  width: 70%;
  margin: 40px 0;
}
.stack {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: flex-start;
}
.stack-item {
  border: 2px solid var(--light-brown);
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  margin: 10px 10px 0 0;
  height: 30px;
  width: 140px;
}
li {
  margin: 30px 0;
}
.retour {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 110px;
  font-weight: bold;
  color: var(--brown);
  cursor: pointer;
  position: absolute;
  top: 7%;
  left: 7%;
}
.circle {
  width: 45px;
  height: 45px;
  background: rgba(196, 196, 196, 0.2);
  border: none;
  border-radius: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 30px;
}
.retour:hover .circle {
  background: rgba(98, 87, 87, 0.829);
}
.arrow {
  transform: rotate(90deg);
}
</style>
