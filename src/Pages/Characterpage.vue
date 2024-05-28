<script setup>
import gql from 'graphql-tag'
import {useQuery} from '@vue/apollo-composable';
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css/effect-cube';
import 'swiper/css/pagination';
import { EffectCoverflow } from 'swiper/modules';

import 'swiper/css/effect-coverflow';
const { result,loading,error} = useQuery(gql`

query Characters{
    characters{
      results {
        name
        species
        status
        type
        gender
        origin{name}
        location {name}
        image
        id
      },
    },
  }
`)
</script>
<template>
  <section class="bg-[#8ee167]">
    <p class="container flex justify-center text-3xl font-serif text-white font-bold mb-8  mt-8">Characters</p>
    <div v-if="error" class="text-red-500 text-center font-bold">Something went wrong: {{ error.message }}</div>
    <div v-if="loading" class="text-blue-500 text-center font-bold">Loading characters...</div>
    <div v-else class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      <div v-for="char in result.characters.results" :key="char.id">
        <div class="flex flex-col justify-center items-center w-full h-full shadow-md rounded-lg overflow-hidden  p-4">
          <span class="text-white text-center text-2xl font-bold"> {{ char.name }}<br></span>
          <img :src="char.image" :alt="char.name" class="w-48 h-48 object-cover rounded-lg mt-4">
          <div class="text-white text-sm mt-4">
            <p>Species: {{ char.species }}</p>
            <p>Gender: {{ char.gender }}</p>
            <p>Status: {{ char.status }}</p>
            </div>
        </div>
      </div>
    </div>
  </section>
</template>
