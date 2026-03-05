<template>
  <div
    class="w-full bg-white rounded-2xl shadow-sm border border-slate-100 p-4 md:p-4 font-sans"
  >
    <div
      class="flex flex-col md:flex-row md:items-center justify-between mb-4 gap-4 border-b border-slate-50 pb-6"
    >
      <h2
        class="text-red-600 font-bold text-xl flex items-center tracking-tight"
      >
        <span class="w-1.5 h-6 bg-red-600 rounded-full mr-3"></span>
        Informasi Pengiriman
      </h2>

      <div
        class="flex items-center justify-between bg-white px-5 py-3 rounded-xl border border-slate-200 shadow-sm"
      >
        <div class="flex items-center gap-2">
          <span
            class="text-[11px] text-slate-400 px-3 font-semibold uppercase tracking-widest"
          >
            Status Muat:
          </span>
        </div>

        <span
          class="inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-semibold tracking-wide"
          :class="
            data.status_cf_muat === 'SUDAH'
              ? 'bg-emerald-50 text-emerald-700 border border-emerald-200'
              : 'bg-amber-50 text-amber-700 border border-amber-200'
          "
        >
          <span
            class="w-1.5 h-1.5 rounded-full"
            :class="
              data.status_cf_muat === 'SUDAH'
                ? 'bg-emerald-500'
                : 'bg-amber-500'
            "
          ></span>

          {{ data.status_cf_muat }}
        </span>
      </div>
    </div>

    <div
      class="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-5 mb-8 px-2"
    >
      <InfoItem label="Nomor Pengiriman" :value="data.deliv_id?.trim()" />

      <InfoItem label="Nomor Pesanan" :value="data.order_id?.trim()" />

      <InfoItem
        label="Tanggal Pengiriman"
        :value="data.ship_date?.split(' ')[0]"
      />

      <InfoItem label="Jasa Pengiriman" :value="data.exp_descr?.trim()" />

      <InfoItem label="Nomor Kendaraan" :value="data.vehicle_id?.trim()" />

      <InfoItem label="Nama Driver" :value="data.driver_id?.trim()" />

      <InfoItem label="Dikirim Dari" :value="data.mill_name?.trim()" />

      <InfoItem label="Customer" :value="data.NamaCustomer?.trim()" />

      <InfoItem label="Alamat Kirim" :value="data.shipto?.trim()" />
    </div>

    <div class="overflow-x-auto">
      <div class="overflow-hidden rounded-lg border border-slate-200">
        <table class="w-full table-fixed border-collapse text-xs">
          <thead>
            <tr
              class="bg-red-600 text-white text-[11px] font-semibold uppercase tracking-wide"
            >
              <th class="px-3 py-2 text-left border-b border-slate-200 w-[65%]">
                Deskripsi Material
              </th>

              <th
                class="px-3 py-2 text-center border-b border-slate-200 w-[20%]"
              >
                Dimensi
              </th>

              <th
                class="px-3 py-2 text-right border-b border-slate-200 w-[15%]"
              >
                Qty
              </th>
            </tr>
          </thead>

          <tbody class="divide-y divide-slate-100">
            <tr
              v-for="(item, index) in details"
              :key="index"
              class="hover:bg-slate-50 transition-colors"
            >
              <td class="px-3 py-2 text-slate-700 text-[12px]">
                {{ item.descr?.trim() }}
              </td>

              <td class="px-3 py-2 text-center text-[12px] text-slate-800">
                {{ item.length_ship }}
              </td>

              <td
                class="px-3 py-2 text-right text-[12px] font-semibold text-slate-900"
              >
                {{ item.qty_ship }}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script setup>
import InfoItem from "@/components/InfoItem.vue";
defineProps(["data", "details"]);
</script>
