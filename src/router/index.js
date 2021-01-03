import Vue from "vue";
import VueRouter from "vue-router";
import AppContainer from "../components/AppContainer";
import ProjetDetail from "../components/ProjetDetail";
Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "App",
    component: AppContainer,
  },
  {
    path: "/first-page",
    name: "App",
    component: AppContainer,
  },
  {
    path: "/projet/:id",
    component: ProjetDetail,
    props: true,
  },
];

const router = new VueRouter({
  routes,
});

export default router;
