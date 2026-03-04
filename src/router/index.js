import { createRouter, createWebHistory } from "vue-router";
import DeliveryConfirmation from "@/pages/DeliveryConfirmation.vue";

const routes = [
  {
    path: "/",
    redirect: "/confirm/default",
  },
  {
    path: "/confirm/:id",
    name: "DeliveryConfirmation",
    component: DeliveryConfirmation,
    props: true,
  },
  {
    path: "/confirm",
    redirect: "/",
  },
  {
    path: "/:pathMatch(.*)*",
    name: "NotFound",
    component: {
      template: `
        <div class="min-h-screen flex items-center justify-center bg-gray-50 p-4">
          <div class="text-center">
            <h1 class="text-4xl font-bold text-gray-200">404</h1>
            <p class="text-gray-500 mt-2">Halaman tidak ditemukan.</p>
            <router-link to="/" class="mt-4 inline-block text-blue-600 font-medium">Kembali ke Beranda</router-link>
          </div>
        </div>`,
    },
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
  scrollBehavior() {
    return { top: 0 };
  },
});

export default router;
