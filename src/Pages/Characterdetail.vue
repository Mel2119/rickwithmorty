<script setup>
import { useQuery } from "@vue/apollo-composable";
import gql from "graphql-tag";
import { ref, onMounted } from 'vue';
import { useRoute } from 'vue-router';
import Character from '../components/Character.vue'
import FooterVue from "../components/Footer.vue";
import NavVue from '../components/nav.vue'
const id = useRoute().params.id;
const { result, error, loading } =  useQuery(gql`
  query {
    character(id:${ id }){
      name
      status
      gender
      species
      image
      episode {
        id
        name
        air_date
        episode
        created
      }
      location{
        name
      }
    }
  }
`);
</script>
<template>
  <section class="bg-[#8ee167]">
    <div class="flex flex-col space-y-4 px-10 py-20">  
      <div class="flex flex-row ">
        <img :src="result.character.image" alt="{{ result.character.name }} Photo" class="h-64 w-64 shadow-[1px_2px_8px] rounded-md object-cover mb-4 ">
        <!-- <span class="text-white  text-2xl flex flex-col space-y-2 font-bold mb-2 ml-4"></span> -->
        <div class="text-white text-lg flex flex-col space-y-2 ml-16 mt-16"> 
          <p class="font-bold text-2xl">Name:{{ result.character.name }}</p>
          <p>Status: {{ result.character.status }}</p>
          <p>Species: {{ result.character.species }}</p>
          <p>Gender: {{ result.character.gender }}</p>
        </div>
      </div>
      <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-0">
        <NavVue />
        <div v-for="episode in result.character.episode" :key="episode.id" class="bg-transparent rounded-md p-4 shadow-md">
          <span class="text-white text-lg font-bold">{{ episode.name }}</span>
          <div class="text-white text-sm">
            <p>Air Date: {{ episode.air_date }}</p>
            <p>Episode: {{ episode.episode }}</p>
          </div>
        </div>
      </div>
      <FooterVue />
    </div>
  </section>
    </template>
  