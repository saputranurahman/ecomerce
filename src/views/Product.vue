<template>
    <br>
    <br>

    

<div class="my-20 mx-auto flex w-screen max-w-screen-lg flex-col rounded-3xl bg-green-50 px-4">
  <p class="mt-20 text-center sm:text-lg font-semibold text-lime-500">Our Blog</p>
  <h1 class="mx-auto mt-2 max-w-3xl text-center text-2xl font-semibold leading-tight sm:text-4xl md:text-5xl">tampilan produk dari situs web penjualan</h1>
  <p class="mx-auto hidden sm:block mt-4 max-w-5xl text-center text-gray-500 sm:mt-8 sm:text-lg">Dapatkan Diskon Setiap Harinya Hingga 80%</p>

  <div class="mx-auto mt-8 mb-20 flex w-full flex-col space-y-2 sm:w-auto sm:flex-row sm:space-y-0 sm:space-x-6">
    <button class="rounded-full bg-black px-10 py-3 font-medium text-white hover:opacity-80 sm:w-auto">Get Started</button>
 <a href="#produk">   <button class="rounded-full border-2 border-black px-10 py-3 font-medium text-black transition hover:bg-black hover:text-white sm:w-auto">Mulai Melihat</button></a>
  </div>
</div>

       
    <div class="flex flex-row m-7" id="produk">
      <div class="basis-1/3 m-2">
        <div class="relative m-10 flex w-full max-w-xs flex-col overflow-hidden rounded-lg border border-gray-100 bg-white shadow-md">
  <a class="relative mx-3 mt-3 flex h-60 overflow-hidden rounded-xl" href="#">
    <img class="object-cover w-full" src="data:image/jpeg;base64,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" alt="product image" />
    <span class="absolute top-0 left-0 m-2 rounded-full bg-black px-2 text-center text-sm font-medium text-white">39% OFF</span>
  </a>
  <div class="mt-4 px-5 pb-5">
    <a href=" ">
      <h5 class="text-xl tracking-tight text-slate-900">Nike Air MX Super 2500 - Red</h5>
    </a>
    <div class="mt-2 mb-5 flex items-center justify-between">
      <p>
        <span class="text-3xl font-bold text-slate-900">$449</span>
        <span class="text-sm text-slate-900 line-through">$699</span>
      </p>
      <div class="flex items-center">
        <svg aria-hidden="true" class="h-5 w-5 text-yellow-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
        </svg>
        <svg aria-hidden="true" class="h-5 w-5 text-yellow-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
        </svg>
        <svg aria-hidden="true" class="h-5 w-5 text-yellow-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
        </svg>
        <svg aria-hidden="true" class="h-5 w-5 text-yellow-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
        </svg>
        <svg aria-hidden="true" class="h-5 w-5 text-yellow-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
        </svg>
        <span class="mr-2 ml-3 rounded bg-yellow-200 px-2.5 py-0.5 text-xs font-semibold">5.0</span>
      </div>
    </div>
    <a href="/singleproduct " class="flex items-center justify-center rounded-md bg-slate-900 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-blue-300">
      
      Lihat Detail</a
    >
  </div>
</div>
      </div>

      <div class="basis-1/3 m-2">
        <div class="relative m-10 flex w-full max-w-xs flex-col overflow-hidden rounded-lg border border-gray-100 bg-white shadow-md">
  <a class="relative mx-3 mt-3 flex h-60 overflow-hidden rounded-xl" href="#">
    <img class="object-cover" src="https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8c25lYWtlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" alt="product image" />
    <span class="absolute top-0 left-0 m-2 rounded-full bg-black px-2 text-center text-sm font-medium text-white">39% OFF</span>
  </a>
  <div class="mt-4 px-5 pb-5">
    <a href=" ">
      <h5 class="text-xl tracking-tight text-slate-900">Nike Air MX Super 2500 - Red</h5>
    </a>
    <div class="mt-2 mb-5 flex items-center justify-between">
      <p>
        <span class="text-3xl font-bold text-slate-900">$449</span>
        <span class="text-sm text-slate-900 line-through">$699</span>
      </p>
      <div class="flex items-center">
        <svg aria-hidden="true" class="h-5 w-5 text-yellow-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
        </svg>
        <svg aria-hidden="true" class="h-5 w-5 text-yellow-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
        </svg>
        <svg aria-hidden="true" class="h-5 w-5 text-yellow-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
        </svg>
        <svg aria-hidden="true" class="h-5 w-5 text-yellow-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
        </svg>
        <svg aria-hidden="true" class="h-5 w-5 text-yellow-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
        </svg>
        <span class="mr-2 ml-3 rounded bg-yellow-200 px-2.5 py-0.5 text-xs font-semibold">5.0</span>
      </div>
    </div>
    <a href="/singleproduct" class="flex items-center justify-center rounded-md bg-slate-900 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-blue-300">
     
      Lihat Detail</a
    >
  </div>
</div>
      </div>

      <div class="basis-1/3 m-2">
        <div class="relative m-10 flex w-full max-w-xs flex-col overflow-hidden rounded-lg border border-gray-100 bg-white shadow-md">
  <a class="relative mx-3 mt-3 flex h-60 overflow-hidden rounded-xl" href="#">
    <img class="object-cover" src="https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8c25lYWtlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" alt="product image" />
    <span class="absolute top-0 left-0 m-2 rounded-full bg-black px-2 text-center text-sm font-medium text-white">39% OFF</span>
  </a>
  <div class="mt-4 px-5 pb-5">
    <a href=" ">
      <h5 class="text-xl tracking-tight text-slate-900">Nike Air MX Super 2500 - Red</h5>
    </a>
    <div class="mt-2 mb-5 flex items-center justify-between">
      <p>
        <span class="text-3xl font-bold text-slate-900">$449</span>
        <span class="text-sm text-slate-900 line-through">$699</span>
      </p>
      <div class="flex items-center">
        <svg aria-hidden="true" class="h-5 w-5 text-yellow-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
        </svg>
        <svg aria-hidden="true" class="h-5 w-5 text-yellow-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
        </svg>
        <svg aria-hidden="true" class="h-5 w-5 text-yellow-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
        </svg>
        <svg aria-hidden="true" class="h-5 w-5 text-yellow-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
        </svg>
        <svg aria-hidden="true" class="h-5 w-5 text-yellow-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
        </svg>
        <span class="mr-2 ml-3 rounded bg-yellow-200 px-2.5 py-0.5 text-xs font-semibold">5.0</span>
      </div>
    </div>
    <a href="/singleproduct" class="flex items-center justify-center rounded-md bg-slate-900 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-blue-300">
     
      Lihat Detail</a
    >
  </div>
</div>
      </div>

      
    </div>
</template>

