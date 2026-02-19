<script setup>
import BaseDocumentLayout from "@/components/BaseDocumentLayout.vue";
import FeedbackForm from "@/components/FeedbackForm.vue";
import PaymentInfo from "@/components/PaymentInfo.vue";
</script>

<template>
  <BaseDocumentLayout>
    <div class="bg-white rounded-xl shadow p-6">
      <h3 class="font-bold text-lg mb-3">INVOICE</h3>

      <div class="text-sm space-y-1 mb-4">
        <p>No : INV-2602-001</p>
        <p>Tanggal : 18 Februari 2026</p>
        <p>Customer : PT Sumber Rejeki</p>
      </div>

      <table class="w-full text-sm">
        <thead>
          <tr class="border-b border-red-400">
            <th class="text-left py-2">Barang</th>
            <th class="text-center py-2">Qty</th>
            <th class="text-right py-2">Harga</th>
          </tr>
        </thead>

        <tbody>
          <tr v-for="i in 4" :key="i" class="bg-red-50 border-b border-red-200">
            <td class="py-2">Produk A</td>
            <td class="text-center">100</td>
            <td class="text-right">Rp. 1.000.xxx</td>
          </tr>
        </tbody>
      </table>

      <div class="text-right mt-3 font-semibold">Subtotal : Rp. 4.000.xxx</div>

      <PaymentInfo />
    </div>
    <FeedbackForm />
  </BaseDocumentLayout>
</template>
