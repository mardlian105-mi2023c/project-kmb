<template>
  <div
    class="max-w-md mx-auto bg-white p-10 rounded-xl shadow-sm border border-slate-200 text-center"
  >
    <div class="text-red-700 mb-4 font-serif italic text-lg">Pemberitahuan</div>
    <p class="text-sm text-slate-500 mb-8 leading-relaxed">{{ message }}</p>
    <button
      @click="$emit('retry')"
      class="inline-flex items-center gap-2 px-6 py-3 bg-red-600 text-white text-sm font-semibold rounded-lg shadow-sm hover:bg-red-700 hover:shadow-md active:scale-[0.98] transition-all duration-200"
    >
      Muat Ulang Halaman
    </button>
  </div>
</template>

<script setup>
defineProps(["message"]);
defineEmits(["retry"]);
</script>
