import { createRouter, createWebHistory } from "vue-router";
import ConfirmDeliveryPage from "../pages/ConfirmDeliveryPage.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: ConfirmDeliveryPage,
  },

  {
    path: "/confirm-delivery/:id",
    name: "confirm-delivery",
    component: ConfirmDeliveryPage,
  },
];

export default createRouter({
  history: createWebHistory(),
  routes,
});
