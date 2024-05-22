<template>
    <section class="bg-[#8ee167]">
    <div v-if="loading">
      Loading episodes...
    </div>
    <div v-else-if="error">
      Error: {{ error.message }}
    </div>
    <div v-else>
      <h1>Episodes</h1>
      <ul class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <li v-for="episode in result.episodes.results" :key="episode.name">
          <div class="bg-white rounded-lg shadow-md p-4 flex flex-col items-center">  <h2>{{ episode.name }}</h2>
            <p>Air Date: {{ episode.air_date }}</p>
            <p>Episode: {{ episode.episode }}</p>
          </div>
        </li>
      </ul>
    </div>
</section>
  </template>
<script setup>
import { useQuery } from '@vue/apollo-composable';
import gql from 'graphql-tag';
import {useRoute} from "vue-router";
const { result, loading, error } = useQuery(gql`
query{
  episodes{
    results{
      name
      air_date
      episode
      
    }
  }
}
`);

const route=useRoute()
</script>

