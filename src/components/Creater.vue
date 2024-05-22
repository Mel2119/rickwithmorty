<template>
  <section class="bg-slate-300 p-10">
  <h1 class="text-4xl font-serif text-black text-bold text-center mb-4">Creators of the show</h1>
  <p class="text-center font-serif text-[#9a7f3c] mb-4 text-md">Rickandmorty is cocreated by:)</p>

  <div class="images ml-64 grid grid-cols-2 ">
    <div class="image-container relative">
      <img src="../assets/juss.jpg" class="w-76 h-64 object-cover" alt="Justin Roiland">
      <div class="creator-info absolute inset-0 flex justify-center items-center mr-64  text-white text-center text-xl">
        Justin Roiland
      </div>
    </div>
    <div class="image-container relative">
      <img src="../assets/dah.jpg" class="w-76 h-64 object-cover" alt="Dan Harmon">
      <div class="creator-info absolute inset-0 flex justify-center items-center mr-64  text-white text-center text-xl">
        Dan Harmon
      </div>
    </div>
  </div>
</section>


</template>

<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';
</script>

<style>

</style>