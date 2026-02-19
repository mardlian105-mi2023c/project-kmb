<template>
  <div class="min-h-screen bg-gray-100">
    <!-- HEADER -->
    <div class="bg-red-600 px-4 py-3 flex items-center justify-between">
      <img src="/logo.svg" class="h-8 object-contain" />

      <!-- hamburger -->
      <div class="space-y-1">
        <div class="w-6 h-0.5 bg-white"></div>
        <div class="w-6 h-0.5 bg-white"></div>
        <div class="w-6 h-0.5 bg-white"></div>
      </div>
    </div>

    <div class="max-w-6xl mx-auto px-4 py-6">
      <!-- CUSTOMER TEXT -->
      <div class="text-center max-w-xl mx-auto">
        <h2 class="font-semibold">Customer yang terhormat,</h2>
        <p class="text-gray-600 text-sm mt-2">
          Terima kasih telah membuka dokumen Anda Dokumen resmi dari PT Kencana
          Maju Bersama dapat Anda lihat di bawah ini :
        </p>
      </div>

      <!-- DOC MENU -->
      <div class="flex justify-center gap-8 mt-6 text-xs">
        <div class="flex flex-col items-center text-gray-700">
          <span class="text-2xl">📄</span>
          <span>INVOICE</span>
        </div>
        <div class="flex flex-col items-center text-gray-700">
          <span class="text-2xl">📑</span>
          <span>SURAT JALAN</span>
        </div>
        <div class="flex flex-col items-center text-gray-700">
          <span class="text-2xl">✉️</span>
          <span>DELIVERY ORDER</span>
        </div>
      </div>

      <!-- MAIN GRID -->
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-8">
        <!-- LEFT CONTENT -->
        <div class="bg-white rounded-xl shadow p-6">
          <h3 class="font-bold text-lg mb-3">INVOICE</h3>

          <div class="text-sm space-y-1 mb-4">
            <p>No : INV-2602-001</p>
            <p>Tanggal : 18 Februari 2026</p>
            <p>Customer : PT Sumber Rejeki</p>
          </div>

          <!-- TABLE -->
          <div class="overflow-x-auto">
            <table class="w-full text-sm">
              <thead>
                <tr class="border-b border-red-400">
                  <th class="text-left py-2">Barang</th>
                  <th class="text-center py-2">Qty</th>
                  <th class="text-right py-2">Harga</th>
                </tr>
              </thead>
              <tbody>
                <tr
                  v-for="i in 4"
                  :key="i"
                  class="bg-red-50 border-b border-red-200"
                >
                  <td class="py-2">Produk A</td>
                  <td class="text-center">100</td>
                  <td class="text-right">Rp. 1.000.xxx</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div class="flex justify-between mt-3 text-sm">
            <span>Subtotal</span>
            <span class="font-semibold">Rp. 4.000.xxx</span>
          </div>

          <!-- PAYMENT -->
          <div class="mt-6 border-t pt-4 text-sm">
            <h4 class="font-semibold mb-2">INFORMASI PEMBAYARAN</h4>
            <p>Bank : BCA</p>
            <p>No Rekening : 1234567890</p>
            <p>Atas Nama : PT Kencana Maju Bersama</p>
          </div>
        </div>

        <!-- RIGHT FEEDBACK -->
        <div class="bg-white rounded-xl shadow p-6">
          <h4 class="text-red-500 font-semibold text-sm mb-3">
            Mohon konfirmasi pesanan barang Anda:
          </h4>

          <!-- RADIO CARD -->
          <div class="space-y-4">
            <label
              class="flex items-center gap-3 border-2 border-red-400 rounded-xl p-4 cursor-pointer"
            >
              <input type="radio" value="sesuai" v-model="feedback" />
              <span>Sesuai</span>
            </label>

            <label
              class="flex items-center gap-3 border-2 border-red-400 rounded-xl p-4 cursor-pointer"
            >
              <input type="radio" value="tidak" v-model="feedback" />
              <span>Tidak sesuai</span>
            </label>
          </div>

          <!-- TEXTAREA -->
          <div class="mt-6">
            <p class="text-sm text-blue-700 mb-2">Berikan Masukkan</p>
            <textarea
              v-model="message"
              rows="4"
              class="w-full border-2 border-red-400 rounded-xl p-3 text-sm focus:outline-none"
              placeholder="Text"
            />
          </div>

          <!-- BUTTON -->
          <button
            class="mt-6 w-full bg-green-500 hover:bg-green-600 text-white py-3 rounded-full"
          >
            Submit Feedback
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

const feedback = ref("");
const message = ref("");
</script>
