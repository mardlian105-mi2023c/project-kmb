<script setup>
import BaseLayout from "@/components/BaseDocumentLayout.vue";
import { ref, onMounted } from "vue";

import DeliveryInfoCard from "@/components/DeliveryInfoCard.vue";
import DeliveryItemsTable from "@/components/DeliveryItemsTable.vue";
import DeliveryConfirmPanel from "@/components/DeliveryConfirmPanel.vue";

const delivery = ref(null);
const items = ref([]);

const fetchData = async () => {
  const res = await fetch("/dummy/customer-confirm.json");
  const json = await res.json();

  delivery.value = json.result[0];
  items.value = json.items;
};

const handleSubmit = (payload) => {
  console.log("CONFIRM PAYLOAD", payload);
};

onMounted(fetchData);
</script>

<template>
  <BaseLayout>
    <div class="grid grid-cols-1 xl:grid-cols-12 gap-8">
      <div v-if="delivery" class="xl:col-span-8">
        <DeliveryInfoCard :delivery="delivery">
          <DeliveryItemsTable :items="items" />
        </DeliveryInfoCard>
      </div>
      <div class="xl:col-span-4">
        <DeliveryConfirmPanel @submit="handleSubmit" />
      </div>
    </div>
  </BaseLayout>
</template>
