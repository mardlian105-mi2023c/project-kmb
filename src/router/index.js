import { createRouter, createWebHistory } from "vue-router";
import DeliveryConfirmation from "@/pages/DeliveryConfirmation.vue";

const routes = [
  {
    path: "/delivery-confirmation/:id",
    name: "DeliveryConfirmation",
    component: DeliveryConfirmation,
    props: true,
  },
  {
    path: "/:pathMatch(.*)*",
    name: "NotFound",
    component: {
      template: `
        <div class="min-h-screen flex items-center justify-center bg-slate-50 p-6 font-sans antialiased text-slate-800">
          <div class="text-center max-w-sm bg-white p-10 rounded-2xl border border-slate-100 shadow-sm">
            <h1 class="text-6xl font-bold text-slate-100 tracking-tighter uppercase">404</h1>
            <p class="text-slate-500 mt-4 text-sm font-medium leading-relaxed">
              Dokumen tidak ditemukan atau tautan sudah tidak berlaku.
            </p>
            <div class="mt-8">
              <a 
                href="https://kencanaindonesia.co.id/" 
                class="inline-block w-full py-3.5 bg-slate-900 text-white rounded-full text-[10px] font-bold uppercase tracking-[0.2em] hover:bg-slate-800 transition-all"
              >
                Kembali ke Beranda
              </a>
            </div>
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
