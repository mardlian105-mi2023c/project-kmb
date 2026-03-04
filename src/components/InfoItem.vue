<template>
  <div class="flex flex-col space-y-1">
    <span
      class="text-[10px] font-bold text-slate-400 uppercase tracking-widest"
    >
      {{ label }}
    </span>
    <span class="text-sm text-slate-800 font-medium tracking-tight">
      {{ value || "-" }}
    </span>
  </div>
</template>

<script setup>
defineProps(["label", "value"]);
</script>
