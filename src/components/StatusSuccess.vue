<template>
  <div
    class="max-w-lg mx-auto bg-white p-10 md:p-12 rounded-2xl shadow-lg border border-slate-100 text-center transition-all duration-300"
  >
    <div class="flex justify-center mb-8">
      <div
        class="relative w-20 h-20 flex items-center justify-center rounded-full bg-emerald-50 ring-8 ring-emerald-50/40"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-10 w-10 text-emerald-600"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2.5"
            d="M5 13l4 4L19 7"
          />
        </svg>
      </div>
    </div>

    <h2
      class="text-2xl md:text-3xl font-bold text-slate-900 tracking-tight mb-3"
    >
      Konfirmasi Berhasil
    </h2>

    <p class="text-slate-500 text-sm leading-relaxed max-w-sm mx-auto mb-10">
      Terima kasih. Respon konfirmasi Anda telah tercatat secara resmi oleh
      <span class="font-semibold text-slate-700"> PT Kencana Maju Bersama </span
      >.
    </p>

    <button
      @click="$emit('back')"
      class="inline-flex items-center gap-2 px-6 py-3 bg-red-600 text-white text-sm font-semibold rounded-lg shadow-sm hover:bg-red-700 hover:shadow-md active:scale-[0.98] transition-all duration-200"
    >
      Kembali ke Dokumen

      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="w-4 h-4"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M9 5l7 7-7 7"
        />
      </svg>
    </button>
  </div>
</template>

<script setup>
defineEmits(["back"]);
</script>
