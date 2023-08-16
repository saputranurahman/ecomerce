<template>
<br>
<br>
<br>

<div class="grid sm:px-10 lg:grid-cols-2 lg:px-20 xl:px-32">
  <div class="px-4 pt-8">
    <p class="text-xl font-medium">Order Summary</p>
    
    <div class="mt-8 space-y-3 rounded-lg border bg-white px-2 py-4 sm:px-6">
      <div class="flex flex-col rounded-lg bg-white sm:flex-row">
        <img class="m-2 h-24 w-28 rounded-md border object-cover object-center" src="https://sneakers.id/images/products/553558-040/2_1672814156.jpg" alt="" />
        <div class="flex w-full flex-col px-4 py-4">
          <span class="font-semibold">AIR JORDAN 1 LOW SHADOW 3.0</span>
          <span class="float-right text-gray-400">42EU - 8.5US</span>
          <p class="text-lg font-bold">Rp 3.399.000</p>
        </div>
      </div>
     
    </div>

    <p class="mt-8 text-lg font-medium">Jenis Pengiriman</p>
    <form class="mt-5 grid gap-6">
      <div class="relative">
        <input class="peer hidden" id="radio_1" type="radio" name="radio" checked />
        <span class="peer-checked:border-gray-700 absolute right-4 top-1/2 box-content block h-3 w-3 -translate-y-1/2 rounded-full border-8 border-gray-300 bg-white"></span>
        <label class="peer-checked:border-2 peer-checked:border-gray-700 peer-checked:bg-gray-50 flex cursor-pointer select-none rounded-lg border border-gray-300 p-4" for="radio_1">
          <img class="w-14 object-contain" src="data:image/png;base64,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" alt="" />
          <div class="ml-5">
            <span class="mt-2 font-semibold">JNE EXPRESS</span>
            <p class="text-slate-500 text-sm leading-6">Delivery: 2-4 Days</p>
          </div>
        </label>
      </div>
      <div class="relative">
        <input class="peer hidden" id="radio_2" type="radio" name="radio" checked />
        <span class="peer-checked:border-gray-700 absolute right-4 top-1/2 box-content block h-3 w-3 -translate-y-1/2 rounded-full border-8 border-gray-300 bg-white"></span>
        <label class="peer-checked:border-2 peer-checked:border-gray-700 peer-checked:bg-gray-50 flex cursor-pointer select-none rounded-lg border border-gray-300 p-4" for="radio_2">
          <img class="w-14 object-contain" src="data:image/png;base64,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" alt="" />
          <div class="ml-5">
            <span class="mt-2 font-semibold">J&T EXPRESS</span>
            <p class="text-slate-500 text-sm leading-6">Delivery: 2-4 Days</p>
          </div>
        </label>
      </div>
    </form>
  </div>
  <div class="mt-10 bg-gray-50 px-4 pt-8 lg:mt-0">
    <p class="text-xl font-medium">Detail Pembayaran</p>
    <p class="text-gray-400">Selesaikan pesanan Anda dengan memberikan detail pembayaran Anda.</p>
    <div class="">
      <label for="email" class="mt-4 mb-2 block text-sm font-medium">Email</label>
      <div class="relative">
        <input type="text" id="email" name="email" class="w-full rounded-md border border-gray-200 px-4 py-3 pl-11 text-sm shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500" placeholder="your.email@gmail.com" />
        <div class="pointer-events-none absolute inset-y-0 left-0 inline-flex items-center px-3">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
            <path stroke-linecap="round" stroke-linejoin="round" d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207" />
          </svg>
        </div>
      </div>
      <label for="card-holder" class="mt-4 mb-2 block text-sm font-medium">Card Holder</label>
      <div class="relative">
        <input type="text" id="card-holder" name="card-holder" class="w-full rounded-md border border-gray-200 px-4 py-3 pl-11 text-sm uppercase shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500" placeholder="Your full name here" />
        <div class="pointer-events-none absolute inset-y-0 left-0 inline-flex items-center px-3">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
            <path stroke-linecap="round" stroke-linejoin="round" d="M15 9h3.75M15 12h3.75M15 15h3.75M4.5 19.5h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5zm6-10.125a1.875 1.875 0 11-3.75 0 1.875 1.875 0 013.75 0zm1.294 6.336a6.721 6.721 0 01-3.17.789 6.721 6.721 0 01-3.168-.789 3.376 3.376 0 016.338 0z" />
          </svg>
        </div>
      </div>
      <label for="card-no" class="mt-4 mb-2 block text-sm font-medium">Card Details</label>
      <div class="flex">
        <div class="relative w-7/12 flex-shrink-0">
          <input type="text" id="card-no" name="card-no" class="w-full rounded-md border border-gray-200 px-2 py-3 pl-11 text-sm shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500" placeholder="xxxx-xxxx-xxxx-xxxx" />
          <div class="pointer-events-none absolute inset-y-0 left-0 inline-flex items-center px-3">
            <svg class="h-4 w-4 text-gray-400" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
              <path d="M11 5.5a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-1z" />
              <path d="M2 2a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H2zm13 2v5H1V4a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1zm-1 9H2a1 1 0 0 1-1-1v-1h14v1a1 1 0 0 1-1 1z" />
            </svg>
          </div>
        </div>
        <input type="text" name="credit-expiry" class="w-full rounded-md border border-gray-200 px-2 py-3 text-sm shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500" placeholder="MM/YY" />
        <input type="text" name="credit-cvc" class="w-1/6 flex-shrink-0 rounded-md border border-gray-200 px-2 py-3 text-sm shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500" placeholder="CVC" />
      </div>
      <label for="billing-address" class="mt-4 mb-2 block text-sm font-medium">Billing Address</label>
      <div class="flex flex-col sm:flex-row">
        <div class="relative flex-shrink-0 sm:w-7/12">
          <input type="text" id="billing-address" name="billing-address" class="w-full rounded-md border border-gray-200 px-4 py-3 pl-11 text-sm shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500" placeholder="Alamat jalan" />
          <div class="pointer-events-none absolute inset-y-0 left-0 inline-flex items-center px-3">
            <img class="h-4 w-4 object-contain" src="https://img.freepik.com/free-vector/illustration-indonesia-flag_53876-27131.jpg?size=626&ext=jpg&ga=GA1.2.1081581823.1690350210&semt=ais" alt="" />
          </div>
        </div>
        <select type="text" name="billing-state" class="w-full rounded-md border border-gray-200 px-4 py-3 text-sm shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500">
          <option value="State">Negara</option>
        </select>
        <input type="text" name="billing-zip" class="flex-shrink-0 rounded-md border border-gray-200 px-4 py-3 text-sm shadow-sm outline-none sm:w-1/6 focus:z-10 focus:border-blue-500 focus:ring-blue-500" placeholder="ZIP" />
      </div>

      <!-- Total -->
      <div class="mt-6 border-t border-b py-2">
        <div class="flex items-center justify-between">
          <p class="text-sm font-medium text-gray-900">Subtotal</p>
          <p class="font-semibold text-gray-900">Rp 3.399.000   </p>
        </div>
        <div class="flex items-center justify-between">
          <p class="text-sm font-medium text-gray-900">Diskon</p>
          <p class="font-semibold text-gray-900">0%</p>
        </div>
      </div>
      <div class="mt-6 flex items-center justify-between">
        <p class="text-sm font-medium text-gray-900">Total</p>
        <p class="text-2xl font-semibold text-gray-900">Rp 3.399.000</p>
      </div>
    </div>
    <button class="order mt-4 mb-8 w-full rounded-md bg-gray-900 px-6 py-3 font-medium text-white"  >Place Order</button>
  </div>
</div>
<br>
<br>
</template>

