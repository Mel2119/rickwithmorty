<template>
    <section class="location-details bg-[#63d72d]">
      <div class="container mx-auto px-4 py-8">
        <div class="flex justify-center items-center">
          <div>
            <p class="text-4xl font-bold text-center mb-8">Location</p>
            <span class="flex justify-center text-4xl text-blue-400 mb-12">——o——</span>
            <div>
              <p class="mb-6 text-2xl font-semibold">Full detail of the location</p>
              <div class="items-center justify-center">
                <div v-if="error">Error fetching location details: {{ error.message }}</div>
                <div v-else-if="loading">Loading...</div>
                <div v-else>
                  <div class="flex flex-wrap p-10 w-full text-xl mb-4">
                    <div class="flex justify-center">
                      <div>
                        <span class="text-lg font-semibold">Location Name:</span>
                        <span class="text-red-400 ml-2">{{ result.location.name }}</span><br />
                        <span class="text-lg font-semibold">Location Type:</span>
                        <span class="text-red-400 ml-2">{{ result.location.type }}</span><br />
                        <span class="text-lg font-semibold">Location Dimension:</span>
                        <span class="text-red-400 ml-2">{{ result.location.dimension }}</span><br />
                        <span v-if="result.location.created" class="text-lg font-semibold">
                          Location Created:
                          <span class="text-red-400 ml-2">{{ result.location.created }}</span><br />
                        </span>
                      </div>
                    </div>
                    <h3 v-if="result.location.residents.length > 0" class="text-2xl font-bold mt-4 mb-4">Residents</h3>
                    <ul v-if="result.location.residents.length > 0" class="residents-list grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                      <li v-for="resident in result.location.residents" :key="resident.id">
                        <div class="resident-card bg-white rounded-md shadow-md p-4 flex flex-col items-center">
                          <img :src="resident.image" alt="{{ resident.name }} Photo" class="h-32 w-32 rounded-full mx-auto mb-2 object-cover">
                          <div class="resident-info flex flex-col space-y-1">
                            <span class="text-center font-bold text-lg">{{ resident.name }}</span>
                            <p>Status: {{ resident.status }}</p>
                            <p>Species: {{ resident.species }}</p>
                            <p>Gender: {{ resident.gender }}</p>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </template>
  
  
  

<script setup>
import { useQuery } from "@vue/apollo-composable";
import gql from "graphql-tag";

// Import if needed for routing
import { useRoute } from 'vue-router';
const id = useRoute().params.id;

const { result, error, loading } =  useQuery(gql`
  query {
    location(id:${id}) {
      id
      name
      type
      created
      dimension
      residents {
        id
        name
        status
        species
        gender
        image
      }
    }
  }
`);
</script>

