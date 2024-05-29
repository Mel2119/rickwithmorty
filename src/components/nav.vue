<template>
  <nav class=" mr-8 bg-[#8ae55f] text-white flex flex-wrap font-serif space-x-8 justify-end fixed top-0 left-0 right-0 z-20 "> 
        <!-- <div class="container flex flex-row space-x-4 mt-0">   
            <img src="../assets/rickandmorty.png" class=" logo w-16 " alt="">
            
        </div> -->
        <Router-link :to="`/`">Home</Router-link>
        <RouterLink :to="`/Locationpage`">Locations</RouterLink>
        <RouterLink :to="`/Episodepage`">Episodes</RouterLink>
        <RouterLink :to="`/Characterpage`">Characters</RouterLink>
  </nav>
</template>

<script setup>

</script>

<style>

</style>