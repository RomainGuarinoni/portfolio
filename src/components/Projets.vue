<template>
  <div class="boxall">
    <h1><span class="highlight">Mes proj</span>ets</h1>
    <div class="caroussel">
      <div class="chevron" @click="decrease">
        <font-awesome-icon :icon="['fas', 'chevron-right']" />
      </div>
      <div class="caroussel-box">
        <div class="caroussel-box-template"></div>
        <div class="caroussel-point">
          <div class="point" :class="{ point_selected: index == 0 }"></div>
          <div class="point" :class="{ point_selected: index == 1 }"></div>
          <div class="point" :class="{ point_selected: index == 2 }"></div>
          <div class="point" :class="{ point_selected: index == 3 }"></div>
          <div class="point" :class="{ point_selected: index == 4 }"></div>
          <div class="point" :class="{ point_selected: index == 5 }"></div>
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
export default {
  data() {
    return {
      index: 0,
    };
  },
  methods: {
    increase() {
      if (this.index == 5) {
        this.index = 0;
      } else {
        this.index++;
      }
    },
    decrease() {
      if (this.index == 0) {
        this.index = 5;
      } else {
        this.index--;
      }
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
  background: var(--brown);
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
