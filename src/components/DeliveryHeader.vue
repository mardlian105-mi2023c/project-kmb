<template>
  <div
    class="bg-white rounded-2xl shadow-sm border border-slate-100 p-4 md:p-4 font-sans"
  >
    <div
      class="flex flex-col md:flex-row md:items-center justify-between mb-10 gap-4 border-b border-slate-50 pb-6"
    >
      <h2
        class="text-red-600 font-bold text-xl flex items-center tracking-tight"
      >
        <span class="w-1.5 h-6 bg-red-600 rounded-full mr-3"></span>
        Informasi Pengiriman
      </h2>

      <div
        class="flex items-center gap-3 bg-slate-50 px-4 py-2 rounded-lg border border-slate-100"
      >
        <span
          class="text-[10px] text-slate-400 font-semibold uppercase tracking-[0.15em]"
        >
          Status Muat
        </span>
        <span
          class="px-3 py-1 rounded text-[10px] font-bold uppercase tracking-wider"
          :class="
            data.status_cf_muat === 'SUDAH'
              ? 'bg-emerald-50 text-emerald-700'
              : 'bg-amber-50 text-amber-700'
          "
        >
          {{ data.status_cf_muat }}
        </span>
      </div>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-2 gap-y-8 gap-x-12 mb-12">
      <InfoItem label="Nomor Pengiriman" :value="data.deliv_id?.trim()" />
      <InfoItem label="Nomor Pesanan" :value="data.order_id?.trim()" />

      <InfoItem
        label="Tanggal Pengiriman"
        :value="data.ship_date?.split(' ')[0]"
      />
      <InfoItem label="Dikirim Dari" :value="data.mill_name?.trim()" />

      <InfoItem label="Nomor Kendaraan" :value="data.vehicle_id?.trim()" />
      <InfoItem label="Nama Driver" :value="data.driver_id?.trim()" />

      <InfoItem
        label="Customer"
        :value="data.NamaCustomer?.trim()"
        class="col-span-1 md:col-span-2 text-slate-900"
      />

      <InfoItem
        label="Alamat Kirim"
        :value="data.shipto?.trim()"
        class="col-span-1 md:col-span-2 text-slate-600 leading-relaxed"
      />
    </div>

    <div class="overflow-hidden rounded-xl border border-slate-100">
      <table class="w-full text-left border-collapse">
        <thead>
          <tr
            class="bg-slate-50 text-slate-500 text-[10px] font-bold uppercase tracking-widest"
          >
            <th class="p-4 border-b border-slate-100">Deskripsi Material</th>
            <th class="p-4 border-b border-slate-100 text-right w-32">
              Kuantitas
            </th>
          </tr>
        </thead>
        <tbody class="divide-y divide-slate-50">
          <tr
            v-for="(item, index) in details"
            :key="index"
            class="hover:bg-slate-50/30 transition-colors"
          >
            <td class="p-4 text-sm text-slate-700 font-normal">
              {{ item.descr?.trim() }}
            </td>
            <td class="p-4 text-right text-sm text-slate-900 font-medium">
              {{ item.qty_ship }}
              <span class="text-[10px] text-slate-400 ml-1">Unit</span>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script setup>
import InfoItem from "@/components/InfoItem.vue";
defineProps(["data", "details"]);
</script>
