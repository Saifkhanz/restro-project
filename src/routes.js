import homePage from "./components/homePage.vue";
import signUp from "./components/signUp.vue";
import loginPage from "./components/loginPage.vue";
import addPage from "./components/addPage.vue";
import updatePage from "./components/updatePage.vue";
import { createRouter, createWebHistory } from "vue-router";
const routes = [
  {
    name: "homePage",
    component: homePage,
    path: "/",
  },
  {
    name: "signUp",
    component: signUp,
    path: "/sign-Up",
  },
  {
    name: "loginPage",
    component: loginPage,
    path: "/loginPage",
  },
  {
    name: "addPage",
    component: addPage,
    path: "/addpage",
  },
  {
    name: "updatePage",
    component: updatePage,
    path: "/updatepage/:id",
  },
];
const router = createRouter({
  history: createWebHistory(),
  routes,
});
export default router;
