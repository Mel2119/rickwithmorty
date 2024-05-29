<template>
 <section v-if="result && result.episode" class="episode-details bg-[#8ee167]  px-10 py-20 rounded-md shadow-md">
    <h2 class="text-4xl font-bold mb-4 text-center text-white">{{ result.episode.name }}</h2>
    <div class="flex flex-col space-y-4 mb-4 justify-center text-xl font-semibold episode-details ml-16 text-white">
      <p>Air Date: {{ result.episode.air_date }}</p>
      <p>Episode: {{ result.episode.episode }}</p>
      <p>Created: {{ result.episode.created }}</p>
    </div>
    <h3 v-if="result.episode.characters.length > 0" class="text-2xl font-bold mb-4 text-center text-white">Characters</h3>
    <ul v-if="result.episode.characters.length > 0" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 characters-list mb-">
      <NavVue />
      <li v-for="character in result.episode.characters" :key="character.id">
        <div class="character-card bg-transparent rounded-md shadow-md p-2 flex flex-col items-center">
          <img :src="character.image" alt="{{ character.name }} Photo" class="h-16 w-16 rounded-full mx-auto mb-2 object-cover">
          <div class="character-info flex flex-col space-y-1 text-white">
            <span class="text-center font-bold text-lg ">{{ character.name }}</span>
            <p>Status: {{ character.status }}</p>
            <p>Species: {{ character.species }}</p>
            <p>Gender: {{ character.gender }}</p>
          </div>
        </div>
      </li>
      
    </ul>
    <p v-else class="text-center text-gray-400">No characters found for this episode.</p>
    <FooterVue />
    
  </section>
  
</template>




<script setup>
import { useQuery } from "@vue/apollo-composable";
import gql from "graphql-tag";
import { ref, onMounted } from 'vue';
import { useRouter } from "vue-router"; // Import if needed for routing
import { useRoute } from 'vue-router';
import FooterVue from '../components/Footer.vue'
import NavVue from '../components/nav.vue'

const id = useRoute().params.id;
const { result, loading, error } =  useQuery(gql`
  query{
    episode(id:${id}) {
      name
      air_date
      episode
      created
      id
      characters {
        name
        image
        status 
        gender
        species
      }
    }
  }
`);
</script>

