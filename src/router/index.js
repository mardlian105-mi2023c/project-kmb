import { createRouter, createWebHistory } from "vue-router";
import DeliveryConfirmation from "@/pages/DeliveryConfirmation.vue";

const routes = [
  {
    path: "/confirm/default",
    name: "DeliveryDefault",
    component: DeliveryConfirmation,
  },
  {
    path: "/confirm/:id",
    name: "DeliveryConfirmation",
    component: DeliveryConfirmation,
    props: true,
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
            <a href="https://kencanaindonesia.co.id/" class="mt-4 inline-block text-blue-600 font-medium">Kembali ke Beranda</a>
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
