<script setup>
import BaseDocumentLayout from "@/components/BaseDocumentLayout.vue";
import FeedbackForm from "@/components/FeedbackForm.vue";
</script>

<template>
  <BaseDocumentLayout>
    <div class="bg-white rounded-xl shadow p-6">
      <h3 class="font-bold text-lg mb-3">SURAT JALAN</h3>

      <div class="text-sm space-y-1 mb-4">
        <p>No : SJ-2602-001</p>
        <p>Tanggal : 18 Februari 2026</p>
        <p>Penerima : PT Sumber Rejeki</p>
        <p>Alamat : Surabaya</p>
      </div>

      <table class="w-full text-sm">
        <thead>
          <tr class="border-b border-red-400">
            <th class="text-left py-2">Barang</th>
            <th class="text-center py-2">Qty</th>
          </tr>
        </thead>

        <tbody>
          <tr v-for="i in 4" :key="i" class="bg-red-50 border-b border-red-200">
            <td class="py-2">Produk A</td>
            <td class="text-center">100</td>
          </tr>
        </tbody>
      </table>
    </div>
    <FeedbackForm />
  </BaseDocumentLayout>
</template>
