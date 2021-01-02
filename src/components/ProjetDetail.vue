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
      <div class="fonctionnalite" v-show="projet[this.id].fonctionnalite != ''">
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
        {
          title: "Portfolio",
          date: "Janvier 2021",
          site: "",
          git: "https://github.com/RomainGuarinoni/portfolio",
          description: [
            "<p> La première itération de mon portfolio ! </p>",
            "<p> Construit avec<span style='color : var(--brown);'> Vue.js </span>, il permet de mettre en avant mes projets ainsi quue ma formation et mes expériences professionnelles </p>",
          ],
          stack: ["Vues.js", "Gsap", "Github Pages"],
          fonctionnalite: [""],
        },

        {
          title: "Inspiring Music Theory",
          date: "Novembre 2020",
          site: "https://github.com/RomainGuarinoni/Inspiring-Music-Theory",
          git: "https://github.com/RomainGuarinoni/Inspiring-Music-Theory",
          description: ["<p> </p>"],
          stack: [""],
          fonctionnalite: [""],
        },
        {
          title: "Steam Market Notifier",
          date: "Octobre 2020",
          site: "https://romainguarinoni.github.io/Steam-Market-Notifier/#/",
          git: "https://github.com/RomainGuarinoni/Steam-Market-Notifier",
          description: [
            "<p> Ce site est <span style='color : var(--brown);'>un store </span>qui permet d'ajouter des éléments dans son panier, de les modifier et/ou de les supprimer.</p>",
            "<p>Etant un grand fan du jeu Counter Strike Global Offensive et de son <span style='color : var(--brown);'>marché de skins</span>, j'ai voulu créer un site qui permet de <span style='color : var(--brown);'>signaler aux joueurs </span>lorsque leurs skins préférés sont au prix le plus bas.</p>",
            "<p>Pour cela, l'utilisateur choisis le skin qu'il désire, choisis le <span style='color : var(--brown);'> prix maximal </span> et attend que le site le notifie quand le prix de skin sur le marché steam est inférieur ou égal au prix maximal qu'il a choisis</p>",
            "<p>Le site utilise <span style='color : var(--brown);'>l'API steam </span> pour pouvoir afficher les prix des skins</p>",
          ],
          stack: [
            "Vue.js",
            "Github Pages",
            "axios",
            "gsap",
            "AOS",
            "API steam",
          ],
          fonctionnalite: [
            "Gestion d'un store d'item : ajout, modification, délétion",
            "utilisation de l'API steam",
            "Animation avec GSAP et Animation On Scroll",
          ],
        },
        {
          title: "Exam Answer Interface",
          date: "Octobre 2020",
          site: "https://romainguarinoni.github.io/Exam_answer_interface/",
          git: "https://github.com/RomainGuarinoni/Exam_answer_interface",
          description: [
            "<p> ce site est une petite web app qui permet de <span style='color : var(--brown);'> s'entrainer au Toeic</span> ou à tout autre examen sous forme de QCM</p>",
            "<p>Il permet de voir nos résultat et de de <span style='color : var(--brown);'> s'entrainer plus rapidement </span> car il n'y a pas à tout écrire sur une feuille mais juste <span style='color : var(--brown);'>cliquer sur des boutons </span></p>",
          ],
          stack: ["HTML", "CSS", "javascript", "Github Pages"],
          fonctionnalite: [
            "selection du nombre de question et si besoin d'une question de départ et d'un pas",
            "possibilité de customiser les couleurs des réponses",
            "Darkmode pour s'entrainer la nuit",
          ],
        },
        {
          title: "",
          date: "",
          site: "",
          git: "",
          description: ["<p> </p>"],
          stack: [""],
          fonctionnalite: [""],
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
