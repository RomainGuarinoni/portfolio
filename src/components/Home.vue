<template>
  <div class="boxAll">
    <div class="content">
      <div class="left">
        <p>Salut, je suis</p>
        <p><span>Romain Guarinoni</span></p>
        <div class="close">
          <p>Etudiant à l'IMT Lille Douai</p>
          <p>et passionné par le Web development</p>
        </div>
        <div class="brand">
          <p>
            <a href="https://www.facebook.com/romain.bat17/" target="_blank"
              ><font-awesome-icon :icon="['fab', 'facebook-square']"
            /></a>
          </p>
          <p>
            <a href="https://github.com/RomainGuarinoni" target="_blank"
              ><font-awesome-icon :icon="['fab', 'github']"
            /></a>
          </p>
          <p>
            <a
              href="https://www.linkedin.com/in/romain-guarinoni-535445189/"
              target="_blank"
              ><font-awesome-icon :icon="['fab', 'linkedin']"
            /></a>
          </p>
          <p>
            <a
              href="https://www.instagram.com/romain.guar91/?hl=fr"
              target="_blank"
              ><font-awesome-icon :icon="['fab', 'instagram']"
            /></a>
          </p>
        </div>
      </div>
      <div class="right">
        <div class="circle"></div>
      </div>
    </div>
    <a href="#second-page"
      ><div class="down">
        <font-awesome-icon :icon="['fas', 'arrow-down']" /></div
    ></a>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.boxAll {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
}
.content {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  width: 70%;
}

.left p {
  color: var(--txt);
}
span {
  font-weight: bold;
  font-size: 45px;
  letter-spacing: 0.15em;
}
p {
  letter-spacing: 0.075em;
  font-size: 24px;
}
.close p {
  margin: 0;
}
.brand {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  width: 80%;
}
.brand p {
  color: var(--brown);
  font-size: 40px;
}

.circle {
  margin: 0;
  padding: 0;
  background: radial-gradient(
      50% 50% at 50% 50%,
      rgba(170, 133, 95, 0.33) 0%,
      rgba(255, 255, 255, 0) 100%
    ),
    center/65% no-repeat url("../assets/moi.png");
  width: 500px;
  height: 500px;
  border: none;
  border-radius: 100%;
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
