<template>
    <section class="bg-[#8ee167] w-full">
      <h1 class="text-2xl text-white font-bold font-serif  text-center  mb-8 mt-5">Episodes</h1>
    <div v-if="loading">
      Loading episodes...
    </div>
    <div v-else-if="error">
      Error: {{ error.message }}
    </div>
  
    <div v-else> 
      <NavVue/> 
      <ul class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <li v-for="episode in result.episodes.results" :key="episode.name">
          <div class="bg-white rounded-lg shadow-md p-4 flex flex-col items-center" @click="router.push(`/Episode/${episode.id}`)" > 
             <h2 class="text-xl font-bold font-sans">{{ episode.name }}</h2>
            <p>Air Date: {{ episode.air_date }}</p>
            <p>Episode: {{ episode.episode }}</p>
          </div>
        </li>
      </ul>
     <div class="flex justify-center text-purple-800 font-bold"  >
  <a href="https://www.figma.com/design/iLk6KEEMR46ZrhA7mlttk5/Relocate---Travel-website-Landing-page-(Community)?node-id=668-40&t=zjsUcG2fMXrJMHUj-0" target="_blank">
    <p class="group hover:text-blue-500 transition duration-300 ease-in-out">
      <i class="fas fa-long-arrow-alt-right group-hover:translate-x-4 mb-8 mt-8">Look into the  Figma</i>
    </p>
  </a>/
</div>
      <FooterVue />
    </div>
</section>
  </template>
<script setup>
import { useQuery } from '@vue/apollo-composable';
import gql from 'graphql-tag';
import FooterVue from '../components/Footer.vue'
import {useRoute} from "vue-router";
import { RouterLink, useRouter } from 'vue-router';
import NavVue from '../components/nav.vue'
const { result, loading, error } = useQuery(gql`
query{
  episodes{
    results{
      name
      air_date
      episode
      id
      
    }
  }
}
`);

const route=useRoute()
const router = useRouter()
</script>

