<template>
    <section class="Genre bg-slate-300">
      <div class="container flex justify-center text-3xl font-serif text-black text-bold  ">
        <h1 class="mt-8 mb-8">Main Stars</h1>
      </div>
      <div class="mx-auto px-20">
        <Swiper
          :modules="modules"
        :slides-per-view="3"
        :space-between="2"
        navigation
        :pagination="{ clickable: true }"
        :scrollbar="{ draggable: true }"
        @swiper="onSwiper"
        @slideChange="onSlideChange"
      >
      <SwiperSlide>
          <div class="flex flex-row grid-cols-2    ">
              <img class="object-cover rounded-lg max-h-48" src="../assets/chris parnell.jpg" alt="Image 1">
              <img class="object-cover  max-h-48" src="../assets/jerry smith.jpg" alt="Image 2">
              <div class="absolute inset-0 flex justify-center items-center ml-2  text-center text-xl font-bold  text-white opacity-0 hover:opacity-95 transition duration-300 ease-in-out font-serif">
                 <p>Chris parnell</p>
             </div>
          </div>
    </SwiperSlide>
   
   <SwiperSlide class="">
      <div class="flex flex-row grid-cols-2 ">
          <img class="object-cover  max-h-48" src="../assets/juss.jpg" alt="Image 1">
          <img class="object-cover rounded-lg max-h-48" src="../assets/rickwithmorty.jpg" alt="Image 2">
          <div class="absolute inset-0 flex justify-center items-center ml-4  text-center text-xl font-bold  text-white opacity-0 hover:opacity-95 transition duration-300 ease-in-out font-serif">
                 <p>Justin Roiland</p>
          </div>
      </div>
   </SwiperSlide>
   <SwiperSlide class="">
      <div class="flex flex-row grid-cols-2 ">
          <img class="object-cover rounded-lg max-h-48" src="../assets/sarah.jpg" alt="Image 1">
          <img class="object-cover  max-h-48" src="../assets/bethsmith.jpg" alt="Image 2">
          <div class="absolute inset-0 flex justify-center items-center ml-4  text-center text-xl font-bold  text-white opacity-0 hover:opacity-95 transition duration-300 ease-in-out font-serif">
                 <p>Sarah Chalke</p>
          </div>
      </div>
   </SwiperSlide>
   <SwiperSlide class="">
      <div class="flex flex-row ">
          <img class="object-cover  max-h-48" src="../assets/spencer.jpg" alt="Image 1">
          <img class="object-cover rounded-lg max-h-48" src="../assets/summersmith.jpg" alt="Image 2">
          <div class="absolute inset-0 flex justify-center items-center ml-4  text-center text-xl font-bold  text-white opacity-0 hover:opacity-95 transition duration-300 ease-in-out font-serif">
                 <h1>Spencer Grammer</h1>
          </div>
      </div>
   </SwiperSlide>
  </Swiper>
      </div>     
    </section>
  </template>
  

<script>
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';
import 'swiper/css/navigation';
  import 'swiper/css/pagination';
  import 'swiper/css/scrollbar';
  import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
  export default {
    components: {
      Swiper,
      SwiperSlide,
    },
    setup() {
      const onSwiper = (swiper) => {
        console.log(swiper);
      };
      const onSlideChange = () => {
        console.log('slide change');
      };
      return {
        onSwiper,
        onSlideChange,
        modules: [Navigation, Pagination, Scrollbar, A11y],
      };
    },
  };
</script>

<style>

</style>