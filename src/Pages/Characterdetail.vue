<script setup>
import { useQuery } from "@vue/apollo-composable";
import gql from "graphql-tag";
import { ref, onMounted } from 'vue';
import { useRoute } from 'vue-router';

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
  <div class="flex justify-between items-start px-10 py-20 mx-8  rounded-md  bg-[#63d72d] shadow-[1px_2px_8px] space-x-32">
    <div class="flex flex-col items-center">
      <img :src="result.character.image" alt="{{ result.character.name }} Photo" class="h-64 w-64 rounded-full object-cover mb-4">
      <span class="text-white text-center text-2xl font-bold mb-2">{{ result.character.name }}</span>
      <div class="text-white text-lg flex flex-col space-y-2">
        <p>Status: {{ result.character.status }}</p>
        <p>Species: {{ result.character.species }}</p>
        <p>Gender: {{ result.character.gender }}</p>
      </div>
    </div>
    <div class="flex flex-col space-y-2 w-full">
      <h3 class="text-white text-xl font-bold mb-2">Episodes</h3>
      <ul class="list-disc pl-4 text-white">
        <li v-for="episode in result.character.episode" :key="episode.id">
          <span>{{ episode.name }}</span> – {{ episode.air_date }} (Episode: {{ episode.episode }})
        </li>
      </ul>
    </div>
  </div>
    </template>