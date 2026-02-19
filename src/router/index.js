import { createRouter, createWebHistory } from "vue-router";

import InvoicePage from "../pages/InvoicePage.vue";
import SuratJalanPage from "../pages/SuratJalanPage.vue";
import DeliveryOrderPage from "../pages/DeliveryOrderPage.vue";

const routes = [
  { path: "/", redirect: "/invoice" },
  { path: "/invoice", component: InvoicePage },
  { path: "/surat-jalan", component: SuratJalanPage },
  { path: "/delivery-order", component: DeliveryOrderPage },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
