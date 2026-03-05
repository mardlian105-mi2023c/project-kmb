<template>
  <BaseDocumentLayout>
    <div class="w-full px-2 md:px-4 mt-5 antialiased text-slate-800">
      <StatusLoading v-if="loading" />

      <StatusError v-else-if="error" :message="error" @retry="fetchData" />

      <StatusSuccess v-else-if="isSuccess" @back="isSuccess = false" />

      <div
        v-else-if="deliveryData"
        class="grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-6 items-start w-full"
      >
        <div class="lg:col-span-8 w-full">
          <DeliveryHeader :data="deliveryData" :details="details" />
        </div>
        <div class="lg:col-span-4 w-full">
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
import StatusLoading from "@/components/Loading.vue";
import StatusError from "@/components/StatusError.vue";
import StatusSuccess from "@/components/StatusSuccess.vue";

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
