<template>
  <div class="container bg-slate-300 ">
   <header class="w-full h-screen relative ">
    <nav class=" mr-8 text-white flex flex-wrap font-serif space-x-8 justify-end fixed top-0 left-0 right-0 z-20 bg-transparent"> 
        <a href="#" class="">Home</a>
        <RouterLink :to="`/Locationpage`">Locations</RouterLink>
        <RouterLink :to="`/Episodepage`">Episodes</RouterLink>
        <RouterLink :to="`/Characterpage`">Characters</RouterLink>
    </nav>
    <div class="absolute inset-0 w-full">
        <img src="../assets/new.webp" class="w-full h-full object-cover" alt="">
    </div>  
    <!-- <h1 class="text-white text-center absolute bottom-0 font-extrabold text-3xl w-full  pb-44  pl-96 ml-16  z-50 font-lg font-serif">Welcome to the<span class="text-white "><br>Rickandmorty</span>  tv show!</h1> -->
    <!-- <i class="fa-regular fa-circle-down text-white absolute bottom-2 right-4 z-50"></i> -->
   </header>
  </div>

</template>

<script setup>
import {RouterLink} from 'vue-router'
 
</script>

