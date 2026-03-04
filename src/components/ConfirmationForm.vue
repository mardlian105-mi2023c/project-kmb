<template>
  <div
    class="bg-white rounded-2xl shadow-xl border border-gray-100 p-6 md:p-7 sticky top-24"
  >
    <h3
      class="text-gray-800 font-black text-sm uppercase tracking-wider mb-6 flex items-center"
    >
      <span class="w-1.5 h-4 bg-red-600 rounded-full mr-2"></span>
      Konfirmasi Anda
    </h3>

    <div class="space-y-4">
      <label
        @click="$emit('update:modelValue', 'Y')"
        class="flex items-center p-4 border-2 rounded-2xl cursor-pointer transition-all hover:bg-gray-50"
        :class="
          modelValue === 'Y'
            ? 'border-red-600 bg-red-50/20'
            : 'border-gray-100 bg-gray-50/30'
        "
      >
        <div
          class="w-5 h-5 rounded-full border-2 mr-3 flex items-center justify-center transition-colors"
          :class="modelValue === 'Y' ? 'border-red-600' : 'border-gray-300'"
        >
          <div
            v-if="modelValue === 'Y'"
            class="w-2.5 h-2.5 bg-red-600 rounded-full animate-scale"
          ></div>
        </div>
        <div class="flex flex-col">
          <span
            class="text-[13px] font-bold"
            :class="modelValue === 'Y' ? 'text-red-700' : 'text-gray-600'"
            >Ya, Barang Siap Diterima</span
          >
          <span class="text-[10px] text-gray-400 font-medium"
            >Sesuai jadwal pengiriman asli</span
          >
        </div>
      </label>

      <label
        @click="$emit('update:modelValue', 'N')"
        class="flex items-center p-4 border-2 rounded-2xl cursor-pointer transition-all hover:bg-gray-50"
        :class="
          modelValue === 'N'
            ? 'border-red-600 bg-red-50/20'
            : 'border-gray-100 bg-gray-50/30'
        "
      >
        <div
          class="w-5 h-5 rounded-full border-2 mr-3 flex items-center justify-center transition-colors"
          :class="modelValue === 'N' ? 'border-red-600' : 'border-gray-300'"
        >
          <div
            v-if="modelValue === 'N'"
            class="w-2.5 h-2.5 bg-red-600 rounded-full animate-scale"
          ></div>
        </div>
        <div class="flex flex-col">
          <span
            class="text-[13px] font-bold"
            :class="modelValue === 'N' ? 'text-red-700' : 'text-gray-600'"
            >Tidak, Jadwalkan Ulang</span
          >
          <span class="text-[10px] text-gray-400 font-medium"
            >Pilih tanggal kedatangan baru</span
          >
        </div>
      </label>

      <div v-if="modelValue === 'N'" class="pt-2 animate-slide-down">
        <label
          class="text-[10px] font-extrabold text-gray-400 uppercase mb-1.5 block ml-1 tracking-widest"
        >
          Request Tanggal Kedatangan
        </label>
        <input
          type="date"
          v-model="form.newDate"
          class="w-full p-4 bg-gray-50 border-2 border-transparent rounded-2xl focus:border-red-500 focus:bg-white outline-none text-sm transition-all font-bold"
        />
      </div>

      <div class="pt-2">
        <label
          class="text-[10px] font-extrabold text-gray-400 uppercase mb-1.5 block ml-1 tracking-widest"
        >
          Catatan Tambahan
        </label>
        <textarea
          v-model="form.note"
          rows="4"
          placeholder="Catatan tambahan..."
          class="w-full p-4 bg-gray-50 border-2 border-transparent rounded-2xl focus:border-red-500 focus:bg-white outline-none text-sm resize-none transition-all"
        ></textarea>
      </div>

      <button
        @click="$emit('submit')"
        :disabled="submitting || !modelValue"
        class="w-full py-4 mt-2 text-white font-black rounded-2xl shadow-xl transition-all flex items-center justify-center space-x-3 group active:scale-95"
        :class="
          modelValue
            ? 'bg-red-600 hover:bg-red-700 shadow-red-100'
            : 'bg-gray-300 cursor-not-allowed'
        "
      >
        <div
          v-if="submitting"
          class="animate-spin h-5 w-5 border-2 border-white border-t-transparent rounded-full"
        ></div>
        <span class="tracking-tighter">{{
          submitting ? "PROSES MENGIRIM..." : "KONFIRMASI SEKARANG"
        }}</span>
      </button>
    </div>
  </div>
</template>

<script setup>
defineProps(["modelValue", "form", "submitting"]);
defineEmits(["update:modelValue", "submit"]);
</script>
