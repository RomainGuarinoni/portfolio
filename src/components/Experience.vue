<template>
  <div class="boxAll">
    <div class="box">
      <h1><span class="underline">Expérien</span>ce</h1>
      <div class="box-item">
        <div class="item">
          <div class="date">
            <p>Juin 2020 - Juil 2020</p>
            <p>Nanterre, France</p>
          </div>
          <div class="content">
            <h2>Manager assistant département affranchissement</h2>
            <p class="lieu">La Poste</p>
            <ul>
              <li>
                Affranchissement des lettres entreprises des villes avoisinantes
              </li>
              <li>
                Formation de différents stagiaires dans les différents domaines
                du département
              </li>
              <li>Optimisation des processus et du poste de travail</li>
            </ul>
          </div>
        </div>
        <div class="item">
          <div class="date">
            <p>Juin 2020 - Juil 2020</p>
            <p>Essonne, France</p>
          </div>
          <div class="content">
            <h2>Bénévolat, assistance scolaire pour enfant</h2>
            <p class="lieu">Grand Paris Sud</p>
            <ul>
              <li>
                Assistance scolaire pour 3 enfants en difficultés à cause du
                confinement
              </li>
              <li>
                Cours en maths, francais, anglais, physique du CP à la 4ème
              </li>
            </ul>
          </div>
        </div>
        <div class="item">
          <div class="date">
            <p>Août 2019</p>
            <p>Paris, France</p>
          </div>
          <div class="content">
            <h2>Assistant gestionnaire Middle Office</h2>
            <p class="lieu">ODDO BHF</p>
            <ul>
              <li>
                Traitement des rachats, versement, taches administratives
              </li>
              <li>
                Classement et archivages du courrier
              </li>
              <li>gestion des archives</li>
            </ul>
          </div>
        </div>
        <div class="item">
          <div class="date">
            <p>févr 2019 - avr 2019</p>
            <p>Bondoufle, France</p>
          </div>
          <div class="content">
            <h2>Réceptionniste des commandes - Assistant chef de production</h2>
            <p class="lieu">Hutchinson Composite Industrie</p>
            <ul>
              <li>
                Réceptionniste et préparateur des pièces aéraunotique
                endommagées / réparées
              </li>
              <li>
                Gestion de la production du service MRO (Maintenance, repair,
                operations)
              </li>
              <li>Découverte de la structure de l’entreprise</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
@media all and (max-width: 1207px) {
  .date {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    align-items: center;
  }
  .date p {
    margin-right: 50px !important;
  }
}
.boxAll {
  position: relative;
  height: 86%;
  overflow-y: scroll;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 130px;
  color: var(--txt);
}
.underline {
  border-bottom: 4px solid var(--txt);
}
h1 {
  font-size: 40px;
}
.box {
  width: 80%;
  height: 100%;
}
.box-item {
  width: 100%;
  height: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: flex-start;
}
.item {
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  justify-content: flex-start;
  width: 70%;
}
.date {
  width: 200px;
  margin-right: 50px;
}
.lieu {
  font-weight: bold;
}
.date p {
  margin: 0;
}
h2 {
  color: var(--brown);
  margin: 0;
}
</style>
