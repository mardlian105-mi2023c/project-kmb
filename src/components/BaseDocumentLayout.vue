<template>
  <div class="min-h-screen bg-gray-100">
    <div class="bg-red-600 px-4 py-3 flex items-center justify-between">
      <img src="@/assets/logo.svg" class="h-8 object-contain" />

      <div class="space-y-1">
        <div class="w-6 h-0.5 bg-white"></div>
        <div class="w-6 h-0.5 bg-white"></div>
        <div class="w-6 h-0.5 bg-white"></div>
      </div>
    </div>

    <div class="max-w-6xl mx-auto px-4 py-6">
      <div class="text-center max-w-xl mx-auto">
        <h2 class="font-semibold">Customer yang terhormat,</h2>
        <p class="text-gray-600 text-sm mt-2">
          Terima kasih telah membuka dokumen Anda Dokumen resmi dari PT Kencana
          Maju Bersama dapat Anda lihat di bawah ini :
        </p>
      </div>

      <div class="flex justify-center gap-8 mt-6 text-xs">
        <router-link
          to="/invoice"
          class="flex flex-col items-center gap-1"
          :class="
            $route.path === '/invoice'
              ? 'text-red-600 font-semibold'
              : 'text-gray-600'
          "
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.8"
            stroke="currentColor"
            class="w-7 h-7"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M19.5 14.25v-8.25A2.25 2.25 0 0017.25 3.75h-10.5A2.25 2.25 0 004.5 6v12l3-1.5 3 1.5 3-1.5 3 1.5 3-1.5z"
            />
          </svg>
          <span>INVOICE</span>
        </router-link>

        <router-link
          to="/surat-jalan"
          class="flex flex-col items-center gap-1"
          :class="
            $route.path === '/surat-jalan'
              ? 'text-red-600 font-semibold'
              : 'text-gray-600'
          "
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.8"
            stroke="currentColor"
            class="w-7 h-7"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M9 12h6m-6 4h6M7.5 4.5h9A2.25 2.25 0 0118.75 6.75v10.5A2.25 2.25 0 0116.5 19.5h-9A2.25 2.25 0 015.25 17.25V6.75A2.25 2.25 0 017.5 4.5z"
            />
          </svg>
          <span>SURAT JALAN</span>
        </router-link>

        <router-link
          to="/delivery-order"
          class="flex flex-col items-center gap-1"
          :class="
            $route.path === '/delivery-order'
              ? 'text-red-600 font-semibold'
              : 'text-gray-600'
          "
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.8"
            stroke="currentColor"
            class="w-7 h-7"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M6 12l12-8-4 8 4 8-12-8z"
            />
          </svg>
          <span>DELIVERY ORDER</span>
        </router-link>
      </div>

      <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-8">
        <slot />
      </div>
    </div>
  </div>
</template>
