<template>
  <div class="boxall" id="aboutme">
    <div class="top">
      <div class="pres">
        <h1><span class="underline">Qui suis</span>-je ?</h1>
        <p>
          Je suis étudiant en 3ème année du cursus en 5 ans de l’<span
            class="highlight"
            >IMT Lille Douai</span
          >, et je compte me spécialiser dans
          <span class="highlight">l’ingénierie informatique.</span>
        </p>
        <p>
          J’ai découvert le développement web pendant les vacances d’été de 2020
          et j’en suis tombé amoureux. Ce que j’adore avec
          <span class="highlight">le développement web</span>, c’est la
          possibilité de pouvoir
          <span class="highlight">réaliser toutes mes idées </span> de voir le
          résultat se créer sous nos yeux.
        </p>
      </div>
      <div class="svg">
        <img src="../assets/dev.svg" alt="" width="350" height="350" />
      </div>
      <div class="prog">
        <h3>Les technologies avec lesquelles je travaille en ce moment</h3>
        <div class="tech">
          <div class="tech-item"><span>HTML</span></div>
          <div class="tech-item"><span>CSS</span></div>
          <div class="tech-item"><span>Vue.js</span></div>
          <div class="tech-item"><span>node.js</span></div>
          <div class="tech-item"><span>express</span></div>
          <div class="tech-item"><span>mongodb</span></div>
          <div class="tech-item"><span>javascript</span></div>
          <div class="tech-item"><span>php</span></div>
          <div class="tech-item"><span>java</span></div>
          <div class="tech-item"><span>git</span></div>
          <div class="tech-item"><span>github</span></div>
          <div class="tech-item"><span>github Pages</span></div>
          <div class="tech-item"><span>Figma</span></div>
          <div class="tech-item"><span>Heroku</span></div>
        </div>
      </div>
    </div>
    <div class="bottom">
      <div class="svg">
        <img src="../assets/bike.svg" alt="" width="350" height="350" />
      </div>
      <div class="passions">
        <h1><span class="underline">Mes autres pa</span>ssions</h1>
        <p>
          Je suis également
          <span class="highlight">passioné par la musique</span> depuis l’âge de
          mes 5 ans. J’ai appris la batterie et le piano pendant
          <span class="highlight">15 ans au conservatoire</span> et la guitare
          en autodidacte. Je pratique aussi
          <span class="highlight">beaucoup de sport</span> : le vélo, le
          streetWorkout et la piscine sont mes préférés.
        </p>
      </div>
    </div>
    <a href="#third-page"
      ><div class="down">
        <font-awesome-icon :icon="['fas', 'arrow-down']" /></div
    ></a>
  </div>
</template>

<script>
export default {
  data() {
    return {
      observe: 0,
    };
  },
};
</script>

<style scoped>
@media all and (max-width: 1350px) {
  .boxall {
    height: 85% !important;
    padding-top: 130px !important;
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
  }
  .pres {
    height: 280px !important;
  }
  p {
    font-size: 14px !important;
    line-height: 31px;
  }
  h1 {
    font-size: 30px !important;
    letter-spacing: 5px;
  }
  .svg img {
    width: 200px !important;
    height: 200px !important;
  }
  .prog {
    height: 200px !important;
    width: 100% !important;
  }
  .prog h3 {
    margin: 20px 0 0 0 !important;
    text-align: center;
  }
  .tech {
    justify-content: space-around !important;
  }
  .tech-item {
    font-size: 12px !important;
  }
}
@media all and (max-width: 696px) {
  .down {
    display: none !important;
  }
  h1 {
    text-align: center !important;
  }
  .boxall {
    position: static !important;
  }
  .bottom .svg {
    display: none !important;
  }
}
* {
  margin: 0;
  padding: 0;
  color: var(--txt);
}
.boxall {
  height: 83%;
  padding-top: 170px;
  position: relative;
}
p {
  font-size: 17px;
  line-height: 31px;
}
h1 {
  font-size: 40px;
  letter-spacing: 5px;
}
h3 {
  letter-spacing: 2px;
  margin-bottom: 30px;
}
.highlight {
  color: var(--brown);
}
.underline {
  border-bottom: 4px solid var(--txt);
}

.top {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}

.bottom {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: center;
}
.pres {
  width: 500px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.prog {
  width: 500px;
}
.passions {
  width: 700px;
}
.passions h1 {
  margin-bottom: 20px;
}
.tech {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-wrap: wrap;
}
.tech-item {
  border: 3px solid var(--light-brown);
  padding: 5px;
  margin: 20px 40px 0 0;
  border-radius: 5px;
  display: flex;
  font-weight: bold;
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
