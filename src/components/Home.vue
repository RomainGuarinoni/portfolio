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
            <a href="mailto:romain.guar01@gmail.com"
              ><font-awesome-icon :icon="['far', 'envelope']"
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
import { gsap } from "gsap";
export default {
  mounted: () => {
    let tl = gsap.timeline();
    tl.from(".left p", { duration: 0.5, opacity: 0, y: -50, stagger: 0.1 }, 0);
    tl.from(".right", { duration: 1, opacity: 0, y: 50 }, 0);
    tl.from(
      ".down",
      {
        duration: 2,
        opacity: 0,
        y: 500,
        ease: "elastic.out(0.5, 0.3)",
      },
      "-=0.9"
    );
  },
};
</script>

<style scoped>
@media all and (max-width: 1489px) {
  .content {
    width: 100% !important;
    justify-content: space-around !important;
  }
}
@media all and (max-width: 1100px) {
  .circle {
    margin: 0;
    padding: 0;
    background: radial-gradient(
        50% 50% at 50% 50%,
        rgba(170, 133, 95, 0.33) 0%,
        rgba(255, 255, 255, 0) 100%
      ),
      center/65% no-repeat url("../assets/moi.png");
    width: 300px !important;
    height: 300px !important;
    border: none;
    border-radius: 100%;
  }
  span {
    font-weight: bold;
    font-size: 43px !important;
    letter-spacing: 0.15em;
  }
  p {
    letter-spacing: 0.075em;
    font-size: 18px !important;
  }
}
@media all and (max-width: 799px) {
  .left {
    text-align: center !important;
  }
  .brand {
    justify-content: space-around !important;
    width: 100% !important;
  }
}
@media all and (max-width: 696px) {
  .boxAll {
    display: block !important;
    position: static !important;
  }
}
@media all and (max-width: 1660px) and (min-width: 769px) {
  .down {
    bottom: 80px !important;
  }
}
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
