<script setup>
import BaseLayout from "@/components/BaseDocumentLayout.vue";
import { ref, onMounted } from "vue";
const delivery = ref(null);
const items = ref([]);
const confirmStatus = ref("");
const selectedDate = ref("");
const note = ref("");
const success = ref(false);

const fetchData = async () => {
  const res = await fetch("/dummy/customer-confirm.json");
  const json = await res.json();

  delivery.value = json.result.delivery;
  items.value = json.result.items;
};

const submitConfirm = () => {
  success.value = true;
};

onMounted(fetchData);
</script>

<template>
  <BaseLayout>
    <div v-if="delivery" class="bg-white rounded-xl shadow p-6">
      <h2 class="font-bold text-lg mb-3">Informasi Pengiriman</h2>

      <div class="text-sm space-y-1">
        <p><b>No DO:</b> {{ delivery.deliv_id }}</p>
        <p><b>Tanggal:</b> {{ delivery.tanggal_kirim }}</p>
        <p><b>Customer:</b> {{ delivery.customer }}</p>
        <p><b>Alamat:</b> {{ delivery.alamat }}</p>
      </div>

      <div class="mt-5 overflow-x-auto">
        <table class="w-full text-sm">
          <thead>
            <tr class="border-b border-red-300">
              <th class="text-left py-2">Barang</th>
              <th class="text-center py-2">Qty</th>
            </tr>
          </thead>

          <tbody>
            <tr v-for="(item, i) in items" :key="i" class="border-b">
              <td class="py-2">{{ item.nama }}</td>
              <td class="text-center">{{ item.qty }} {{ item.satuan }}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>

    <div class="bg-white rounded-xl shadow p-6">
      <h3 class="font-semibold mb-3">Konfirmasi</h3>

      <div v-if="success" class="text-green-600 font-semibold text-center">
        Terima kasih, konfirmasi terkirim
      </div>

      <div v-else class="space-y-3">
        <label class="feedback-box">
          <input type="radio" value="ready" v-model="confirmStatus" />
          Barang siap diterima
        </label>

        <label class="feedback-box">
          <input type="radio" value="not_ready" v-model="confirmStatus" />
          Tidak siap diterima
        </label>

        <div v-if="confirmStatus === 'not_ready'">
          <p class="text-xs mb-1">Pilih tanggal</p>
          <input type="date" v-model="selectedDate" class="input" />
        </div>

        <textarea v-model="note" rows="3" placeholder="Catatan" class="input" />

        <button
          @click="submitConfirm"
          class="w-full bg-green-500 text-white py-2 rounded-full"
        >
          Submit
        </button>
      </div>
    </div>
  </BaseLayout>
</template>

<style scoped>
.feedback-box {
  display: flex;
  gap: 10px;
  border: 2px solid #ef4444;
  padding: 12px;
  border-radius: 12px;
  cursor: pointer;
}

.input {
  width: 100%;
  border: 2px solid #ef4444;
  padding: 10px;
  border-radius: 12px;
}
</style>
