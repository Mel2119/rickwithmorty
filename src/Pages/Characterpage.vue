<script setup>
import gql from 'graphql-tag'
import {useQuery} from '@vue/apollo-composable';
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css/effect-cube';
import 'swiper/css/pagination';
import { RouterLink, useRouter } from 'vue-router';
import { EffectCoverflow } from 'swiper/modules';
import FooterVue from "../components/Footer.vue";
import 'swiper/css/effect-coverflow';
import NavVue from '../components/nav.vue'
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
const router = useRouter()
</script>
<template>
  <section class="bg-[#8ee167]">
    <p class="container flex justify-center text-2xl font-serif text-white font-bold mb-8 mt-5  ">Characters</p>
    <div v-if="error" class="text-red-500 text-center font-bold">Something went wrong: {{ error.message }}</div>
    <div v-if="loading" class="text-blue-500 text-center font-bold">Loading characters...</div>
    <div v-else class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      <NavVue />
      <div v-for="char in result.characters.results" :key="char.id">
        <div class="flex flex-col justify-center items-center w-full h-full shadow-md rounded-lg overflow-hidden  p-4"  @click="router.push(`/Character/${char.id}`)">
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
    <div class="flex justify-center text-purple-800 font-bold"  >
  <a href="https://www.figma.com/design/iLk6KEEMR46ZrhA7mlttk5/Relocate---Travel-website-Landing-page-(Community)?node-id=668-40&t=zjsUcG2fMXrJMHUj-0" target="_blank">
    <p class="group hover:text-blue-500 transition duration-300 ease-in-out">
      <i class="fas fa-long-arrow-alt-right group-hover:translate-x-4 mb-8 mt-8">Look into the  Figma</i>
    </p>
  </a>/
</div>
    <FooterVue />
  </section>
</template>
