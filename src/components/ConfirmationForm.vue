<template>
  <div
    class="bg-white rounded-2xl shadow-sm border border-slate-100 p-4 md:p-4 sticky top-24 font-sans antialiased"
  >
    <h3 class="text-red-600 font-bold text-l mb-6 flex items-center px-1">
      <span class="w-1.5 h-4 bg-red-600 rounded-full mr-3"></span>
      Konfirmasi Pengiriman
    </h3>

    <div class="space-y-4">
      <label
        @click="$emit('update:modelValue', 'Y')"
        class="flex items-center p-4 border rounded-xl cursor-pointer transition-colors w-full"
        :class="
          modelValue === 'Y'
            ? 'border-red-600 bg-red-50/30'
            : 'border-slate-100 bg-slate-50/50 hover:bg-slate-50'
        "
      >
        <div
          class="w-5 h-5 rounded-full border mr-3 shrink-0 flex items-center justify-center transition-colors"
          :class="
            modelValue === 'Y'
              ? 'border-red-600 bg-red-600'
              : 'border-slate-300'
          "
        >
          <div
            v-if="modelValue === 'Y'"
            class="w-1.5 h-1.5 bg-white rounded-full"
          ></div>
        </div>
        <div class="flex flex-col">
          <span
            class="text-[13px] font-medium leading-tight"
            :class="modelValue === 'Y' ? 'text-red-700' : 'text-slate-700'"
            >Ya, Barang Siap Diterima</span
          >
          <span class="text-[10px] text-slate-400 font-normal mt-0.5"
            >Sesuai jadwal pengiriman asli</span
          >
        </div>
      </label>

      <label
        @click="$emit('update:modelValue', 'N')"
        class="flex items-center p-4 border rounded-xl cursor-pointer transition-colors w-full"
        :class="
          modelValue === 'N'
            ? 'border-red-600 bg-red-50/30'
            : 'border-slate-100 bg-slate-50/50 hover:bg-slate-50'
        "
      >
        <div
          class="w-5 h-5 rounded-full border mr-3 shrink-0 flex items-center justify-center transition-colors"
          :class="
            modelValue === 'N'
              ? 'border-red-600 bg-red-600'
              : 'border-slate-300'
          "
        >
          <div
            v-if="modelValue === 'N'"
            class="w-1.5 h-1.5 bg-white rounded-full"
          ></div>
        </div>
        <div class="flex flex-col">
          <span
            class="text-[13px] font-medium leading-tight"
            :class="modelValue === 'N' ? 'text-red-700' : 'text-slate-700'"
            >Tidak, Jadwalkan Ulang</span
          >
          <span class="text-[10px] text-slate-400 font-normal mt-0.5"
            >Pilih tanggal pengiriman</span
          >
        </div>
      </label>

      <div v-if="modelValue === 'N'" class="pt-2">
        <label
          class="text-[10px] font-semibold text-slate-400 uppercase mb-2 block ml-1 tracking-widest"
        >
          Pilih Tanggal Pengiriman
        </label>
        <input
          type="date"
          v-model="form.newDate"
          class="w-full p-4 bg-slate-50 border border-slate-100 rounded-xl focus:border-red-500 focus:bg-white outline-none text-sm font-normal text-slate-700 transition-all"
        />
      </div>

      <div class="pt-2">
        <label
          class="text-[10px] font-semibold text-slate-400 uppercase mb-2 block ml-1 tracking-widest"
        >
          Catatan Tambahan
        </label>
        <textarea
          v-model="form.note"
          rows="4"
          placeholder="Tulis catatan di sini..."
          class="w-full p-4 bg-slate-50 border border-slate-100 rounded-xl focus:border-red-500 focus:bg-white outline-none text-sm font-normal text-slate-600 resize-none transition-all placeholder:text-slate-300"
        ></textarea>
      </div>

      <button
        @click="$emit('submit')"
        :disabled="submitting || !modelValue"
        class="w-full py-4 mt-2 text-white font-semibold rounded-full shadow-sm transition-all flex items-center justify-center space-x-3 active:scale-[0.98]"
        :class="
          modelValue
            ? 'bg-red-600 hover:bg-red-700'
            : 'bg-slate-200 cursor-not-allowed text-slate-400'
        "
      >
        <div
          v-if="submitting"
          class="animate-spin h-4 w-4 border-2 border-white border-t-transparent rounded-full"
        ></div>
        <span class="text-xs uppercase tracking-widest">{{
          submitting ? "Mengirim..." : "Konfirmasi Sekarang"
        }}</span>
      </button>
    </div>
  </div>
</template>

<script setup>
defineProps(["modelValue", "form", "submitting"]);
defineEmits(["update:modelValue", "submit"]);
</script>
