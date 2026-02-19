<script setup>
import { ref } from "vue";

const feedback = ref("");
const message = ref("");
</script>

<template>
  <div class="bg-white rounded-xl shadow p-6">
    <h4 class="text-red-500 font-semibold text-sm mb-3">
      Mohon konfirmasi pesanan barang Anda:
    </h4>

    <label
      class="flex items-center gap-3 border-2 border-red-400 rounded-xl p-4 mb-3 cursor-pointer"
    >
      <input type="radio" value="sesuai" v-model="feedback" />
      Sesuai
    </label>

    <label
      class="flex items-center gap-3 border-2 border-red-400 rounded-xl p-4 cursor-pointer"
    >
      <input type="radio" value="tidak" v-model="feedback" />
      Tidak sesuai
    </label>

    <div class="mt-4">
      <p class="text-sm text-gray-600 mb-1">Berikan Masukkan</p>
      <textarea
        v-model="message"
        rows="4"
        placeholder="Text"
        class="w-full border-2 border-red-400 rounded-xl p-3"
      ></textarea>
    </div>

    <button
      class="mt-4 w-full bg-green-500 hover:bg-green-600 text-white py-3 rounded-full"
    >
      Submit Feedback
    </button>
  </div>
</template>
