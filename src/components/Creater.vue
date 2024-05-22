<template>
  <section class="bg-slate-300 p-10">
    <section class="bg-slate-300 p-10">
  <h1 class="text-4xl font-serif text-black text-bold text-center mb-4">Creators of the Show</h1>
  <p class="text-center font-serif text-[#9a7f3c] mb-4 text-md">Rickandmorty is cocreated by:)</p>

  <div class="images ml-64 grid grid-cols-2 gap-4"> <div class="image-container relative">
      <img src="../assets/juss.jpg" class="w-76 h-64 object-cover rounded-lg shadow-md hover:shadow-lg hover:scale-105 transition duration-300 ease-in-out" alt="Justin Roiland">
      <div class="creator-info text-ext absolute inset-0 flex justify-center items-center mr-64 text-[#63d72d] text-center text-xl  opacity-0 hover:opacity-75 transition duration-300 ease-in-out">
        Justin Roiland
      </div>
    </div>
    <div class="image-container relative">
      <img src="../assets/dah.jpg" class="w-76 h-64 object-cover rounded-lg shadow-md hover:shadow-lg hover:scale-105 transition duration-300 ease-in-out" alt="Dan Harmon">
      <div class="creator-info absolute inset-0 flex justify-center items-center mr-64 text-[#63d72d] text-center text-xl  opacity-0 hover:opacity-75 transition duration-300 ease-in-out">
        Dan Harmon
      </div>
    </div>
  </div>
</section>

</section>


</template>

<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';
</script>

<style>

</style>