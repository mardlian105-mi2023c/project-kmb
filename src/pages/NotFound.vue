<template>
  <div
    class="min-h-screen flex items-center justify-center bg-slate-50 p-6 font-sans antialiased text-slate-800"
  >
    <div
      class="text-center max-w-sm bg-white p-10 rounded-2xl border border-slate-100 shadow-sm"
    >
      <h1 class="text-6xl font-bold text-slate-100 tracking-tighter uppercase">
        404
      </h1>
      <h2 class="text-lg font-bold text-slate-900 mt-4 tracking-tight">
        Halaman Tidak Ditemukan
      </h2>
      <p class="text-slate-500 mt-2 text-sm leading-relaxed font-light">
        Tautan yang Anda akses mungkin sudah tidak berlaku atau dokumen telah
        dihapus dari sistem.
      </p>
      <div class="mt-8 border-t border-slate-50 pt-8">
        <a
          href="https://kencanaindonesia.co.id/"
          class="inline-block w-full py-3.5 bg-slate-900 text-white rounded-full text-[10px] font-bold uppercase tracking-[0.2em] hover:bg-slate-800 transition-all shadow-lg shadow-slate-200"
        >
          Kembali ke Beranda
        </a>
        <p
          class="mt-6 text-slate-300 text-[9px] uppercase tracking-widest font-medium"
        >
          PT Kencana Maju Bersama
        </p>
      </div>
    </div>
  </div>
</template>

<style scoped>
.min-h-screen {
  animation: fadeIn 0.5s ease-out;
}
@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>
