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
          title: "Synctube",
          date: "Janvier 2021",
          site: "https://synctube-online.herokuapp.com/",
          git: "https://github.com/RomainGuarinoni/synctube",
          description: [
            "<p> Ce site permet de<span style='color : var(--brown);'> regarder des vidéos youtube </span> avec des amis <span style='color : var(--brown);'> de manière synchronisé</span> </p>",
            "<p>Lorsque qu'un utilisateur <span style='color : var(--brown);'>lance, met en pause ou avance la vidéo </span>, ces mises à jours se font <span style='color : var(--brown);'>automatiquement pour tous les autres utilisateurs </span>connectés</p>",
            "<p>De plus, un <span style='color : var(--brown);'> système d'historique</span> permet de re regarder les anciennes vidéos</p>",
          ],
          stack: [
            "Vue.js",
            "node.js",
            "websocket",
            "mongodb",
            "express",
            "youtube Api",
            "Heroku",
          ],
          fonctionnalite: [
            "regarder une vidéo  youtube avec une url ou une vidéo de l'historique",
            "Lire , mettre en pause ou avancer la vidéo en synchronisation avec tous les utilisateurs",
            "Un historique pour regarder d'anciennes vidéos",
            "bientot : un Chat pour parler avec les utilisateurs connectés",
          ],
        },
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
            "<p>La maquette a été conçu sur Figma :<span style='color : var(--brown);'> <a href='https://www.figma.com/file/7pt98UnXs6YurXuRW47Z3T/Portfolio?node-id=0%3A1'>Cliquez ici</a></span></p>",
          ],
          stack: ["Vues.js", "Gsap", "Github Pages", "Figma"],
          fonctionnalite: [""],
        },

        {
          title: "Inspiring Music Theory",
          date: "Novembre 2020",
          site: "https://github.com/RomainGuarinoni/Inspiring-Music-Theory",
          git: "https://github.com/RomainGuarinoni/Inspiring-Music-Theory",
          description: [
            "<p> Ce site est un<span style='color : var(--brown);'> mini jeux de lecture de note</span> dans lequel on peut choisir un niveau de difficulté qui correspond à l'écart des notes et une clef.</p>",
            "<p>Ce jeux a été réalisé dans le cadre d'<span style='color : var(--brown);'>un projet avec un conservatoire </span> dans lequel nous devons créer un site pour aider les élèves à apprendre la musique. </p>",
            "<p>Dans ce projet, je suis chargé <span style='color : var(--brown);'>d'intégrer entièrement le site </span> et de <span style='color : var(--brown);'> développer des mini-jeux </span> comme celui ci </p>",
          ],
          stack: ["vue.js", "vexflow"],
          fonctionnalite: [
            "la partition est créée aléatoirement à chaque nouvelle partie",
            "choisir un niveau de difficulté et la clef de lecture",
            "Feedback sur sa partie en fonction du temps mis pour le finir et du nombre de fautes",
          ],
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
          title: "Grapheur de fonctions mathématiques",
          date: "Mars 2020",
          site: "https://github.com/xThePizzaManx/grapheur_L2",
          git: "https://github.com/xThePizzaManx/grapheur_L2",
          description: [
            "<p> Cette application permet de <span style='color : var(--brown);'> représenter graphiquement une fonction </span> rentré en entré sur un graphique.  </p>",
            "<p> Ce projet  a été réalisé lors de ma L2 en école d'ingénieur avec 8 autres étudiants.</p>",
            "<p>Ce projet ma permit <span style='color : var(--brown);'> d'améliorer mes connaissances en C</span> et ma logique </p>",
          ],
          stack: ["C prog", "OpenGL", "Gitlab"],
          fonctionnalite: [
            "Permet de grapher nimporte qu'elle fonctions avec comme variable x",
            "Selection de la borne xmin et xmax et du pas pour le graphique",
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
@media all and (max-width: 768px) {
  .description {
    width: 100% !important;
  }
  .content {
    width: 80% !important;
  }
}
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
