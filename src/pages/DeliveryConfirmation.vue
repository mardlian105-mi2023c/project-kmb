<template>
  <BaseDocumentLayout>
    <div
      class="max-w-360 mx-auto p-6 md:p-10 min-h-screen antialiased text-slate-800"
    >
      <div
        v-if="loading"
        class="flex flex-col items-center justify-center py-40"
      >
        <div
          class="animate-spin rounded-full h-10 w-10 border-t-2 border-slate-900"
        ></div>
        <p
          class="mt-6 text-slate-400 text-[10px] tracking-[0.3em] uppercase font-semibold"
        >
          Sinkronisasi Data Sistem
        </p>
      </div>

      <div
        v-else-if="error"
        class="max-w-md mx-auto bg-white p-10 rounded-xl shadow-sm border border-slate-200 text-center"
      >
        <div class="text-red-700 mb-4 font-serif italic text-lg">
          Pemberitahuan
        </div>
        <p class="text-sm text-slate-500 mb-8 leading-relaxed">{{ error }}</p>
        <button
          @click="fetchData"
          class="w-full bg-slate-900 text-white py-3.5 rounded-lg font-bold text-[10px] tracking-[0.2em] transition-all hover:bg-slate-800"
        >
          Muat Ulang Halaman
        </button>
      </div>

      <div
        v-else-if="isSuccess"
        class="max-w-2xl mx-auto bg-white p-12 rounded-2xl shadow-sm border border-slate-100 text-center animate-fade-in"
      >
        <div
          class="w-16 h-16 bg-emerald-50 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-8"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-8 w-8"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M5 13l4 4L19 7"
            />
          </svg>
        </div>
        <h2 class="text-2xl font-bold text-slate-900 mb-3 tracking-tight">
          Konfirmasi Berhasil Diterima
        </h2>
        <p
          class="text-slate-500 mb-10 text-sm leading-relaxed max-w-sm mx-auto font-light"
        >
          Terima kasih. Respon konfirmasi Anda telah tercatat secara resmi oleh
          PT Kencana Maju Bersama.
        </p>
        <button
          @click="isSuccess = false"
          class="text-slate-400 hover:text-red-700 font-bold uppercase text-[9px] tracking-[0.25em] transition-colors"
        >
          Kembali ke Rincian Dokumen
        </button>
      </div>

      <div
        v-else-if="deliveryData"
        class="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start"
      >
        <div class="lg:col-span-8">
          <DeliveryHeader :data="deliveryData" :details="details" />
        </div>
        <div class="lg:col-span-4">
          <ConfirmationForm
            v-model="isAccepted"
            :form="form"
            :submitting="submitting"
            @submit="handleConfirm"
          />
        </div>
      </div>
    </div>
  </BaseDocumentLayout>
</template>

<script setup>
import { ref, onMounted, reactive } from "vue";
import api from "@/api/axios";
import BaseDocumentLayout from "@/components/BaseDocumentLayout.vue";
import DeliveryHeader from "@/components/DeliveryHeader.vue";
import ConfirmationForm from "@/components/ConfirmationForm.vue";

const deliveryData = ref(null);
const details = ref([]);
const loading = ref(true);
const submitting = ref(false);
const isSuccess = ref(false);
const error = ref(null);
const isAccepted = ref(null);
const form = reactive({ newDate: "", note: "" });

const getDeliveryIdFromUrl = () => {
  const params = new URLSearchParams(window.location.search);
  const id = params.get("id");
  return id ? id.toString().trim() : null;
};

const fetchData = async () => {
  try {
    loading.value = true;
    error.value = null;

    const delivId = getDeliveryIdFromUrl();

    if (!delivId) {
      error.value = "Identitas dokumen tidak ditemukan dalam tautan.";
      return;
    }

    if (delivId.length % 2 !== 0) {
      error.value = "Format identitas dokumen tidak valid atau terpotong.";
      return;
    }

    const { data: res } = await api.post("/getDeliveryInfoCustomer", {
      deliv_id: delivId,
    });

    if (res.status === "success" && res.result.length > 0) {
      deliveryData.value = res.result[0];
      details.value = res.detail;
      form.note = "";
    } else {
      error.value = "Identitas dokumen tidak ditemukan dalam sistem kami.";
    }
  } catch (err) {
    error.value =
      "Terjadi gangguan koneksi. Silakan periksa jaringan Anda dan coba lagi.";
  } finally {
    loading.value = false;
  }
};

const handleConfirm = async () => {
  const delivId = getDeliveryIdFromUrl();

  if (!isAccepted.value) {
    alert("Mohon tentukan status penerimaan Anda.");
    return;
  }

  if (isAccepted.value === "N") {
    if (!form.newDate) {
      alert("Mohon pilih tanggal pengiriman ulang.");
      return;
    }
    if (!form.note.trim()) {
      alert("Mohon isi catatan alasan penjadwalan ulang.");
      return;
    }
  }

  submitting.value = true;
  try {
    const finalReqDate =
      isAccepted.value === "Y"
        ? deliveryData.value.ship_date
        : `${form.newDate} 00:00:00.000`;

    const payload = {
      delivery_id: delivId,
      customer_notes: form.note.trim(),
      cust_req_date: finalReqDate,
      requested_ship_date: isAccepted.value === "N" ? form.newDate : null,
    };

    const { data } = await api.post("/confirmCustomerDelivery", payload);

    if (data.status === "success") {
      isSuccess.value = true;
      fetchData();
    } else {
      alert("Sistem gagal memproses konfirmasi Anda.");
    }
  } catch (err) {
    alert("Koneksi internet terputus. Silakan coba kembali.");
  } finally {
    submitting.value = false;
  }
};

onMounted(fetchData);
</script>
