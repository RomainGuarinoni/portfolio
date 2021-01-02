<template>
  <div class="navBox">
    <div class="box">
      <div class="logo">
        <p><a href="#first-page">Portfolio</a></p>
      </div>
      <div class="nav-items-box">
        <div class="nav-items">
          <p><a href="#second-page">about me</a></p>
          <span></span>
        </div>
        <div class="nav-items">
          <a href="#third-page"><p>projets</p></a>
          <span></span>
        </div>
        <div class="nav-items">
          <a href="#fourth-page"><p>formations</p></a>
          <span></span>
        </div>
        <div class="nav-items">
          <p>expériences</p>
          <span></span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
@media all and (max-width: 860px) {
  .nav-items-box {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    align-items: center;
    flex: 1 !important;
  }
}
@media all and (max-width: 634px) {
  .nav-items-box {
    display: none !important;
  }
  .logo {
    width: 100% !important;
    text-align: center;
  }
}
.navBox {
  width: 100%;
  background-color: none;
  background: var(--primary);
}
.box {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  margin: 0 30px;
}
.nav-items-box {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: center;
  width: 50%;
}
p,
.nav-items {
  color: var(--brown);
  font-weight: bold;
  letter-spacing: 0.075em;
  font-style: normal;
}
.logo p {
  font-size: 36px;
  cursor: pointer;
}
.nav-items {
  font-size: 14px;
  cursor: pointer;
  transition: all ease 20ms;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.nav-items p {
  margin: 5px 0;
  padding: 0;
}
span {
  border-bottom: 3px solid var(--brown);
  width: 110%;
  transition: all ease 200ms;
  opacity: 0;
  margin: 0;
}
.nav-items:hover span {
  opacity: 1;
}
</style>
