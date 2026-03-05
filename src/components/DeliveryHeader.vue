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
      class="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-y-6 gap-x-10 mb-10 px-2"
    >
      <InfoItem label="Nomor Pengiriman" :value="data.deliv_id?.trim()" />
      <InfoItem label="Nomor Pesanan" :value="data.order_id?.trim()" />
      <InfoItem label="Date Year" :value="data.ship_date?.split(' ')[0]" />

      <InfoItem label="Dikirim Dari" :value="data.mill_name?.trim()" />
      <InfoItem label="Nomor Kendaraan" :value="data.vehicle_id?.trim()" />
      <InfoItem label="Nama Driver" :value="data.driver_id?.trim()" />

      <InfoItem
        label="Customer"
        :value="data.NamaCustomer?.trim()"
        class="col-span-1 md:col-span-2 lg:col-span-3 text-slate-900 border-t border-slate-50 pt-4"
      />

      <InfoItem
        label="Alamat Kirim"
        :value="data.shipto?.trim()"
        class="col-span-1 md:col-span-2 lg:col-span-3 text-slate-600 leading-relaxed"
      />
    </div>

    <div class="overflow-x-auto">
      <div class="overflow-hidden rounded-xl border border-slate-200 shadow-sm">
        <table class="w-full table-fixed border-collapse">
          <thead>
            <tr
              class="bg-slate-50 text-slate-500 text-xs font-semibold uppercase tracking-wider"
            >
              <th
                class="p-4 text-left text-xs border-b border-slate-200 w-[60%]"
              >
                Deskripsi Material
              </th>

              <th
                class="p-4 text-center text-xs border-b border-slate-200 w-[20%]"
              >
                Dimensi Panjang
              </th>

              <th
                class="p-4 text-right text-xs border-b border-slate-200 w-[20%]"
              >
                Qty
              </th>
            </tr>
          </thead>

          <tbody class="divide-y divide-slate-100">
            <tr
              v-for="(item, index) in details"
              :key="index"
              class="hover:bg-slate-50 transition"
            >
              <td class="p-4 text-sm text-slate-700">
                {{ item.descr?.trim() }}
              </td>

              <td class="p-4 text-center text-sm text-slate-900 font-medium">
                {{ item.length_ship }}
              </td>

              <td class="p-4 text-right text-sm text-slate-900 font-semibold">
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
