<template>
    <section class=" container location-details bg-[#8ee167]">
      <div class="container mx-auto px-4 py-8">
        <div class="flex justify-center items-center text-white">
          <div>
            <p class="text-4xl font-bold text-center mb-8">Location</p>
            <div class="">
              <div class="ml-40 text-2xl font-bold "> Detail of the location</div>
              <div class="items-center justify-center ">
                <div v-if="error">Error fetching location details: {{ error.message }}</div>
                <div v-else-if="loading">Loading...</div>
                <div v-else>
                  <NavVue/>
                  <div class="flex flex-wrap p-10 w-full text-xl mb-4 ml-32 ">
                    <div class="flex justify-center">
                      <div>
                        <span class="text-lg font-semibold">Location Name: </span>
                        <span class="text-white">{{ result.location.name }}</span><br />
                        <span class="text-lg font-semibold">Location Type: </span>
                        <span class="text-white">{{ result.location.type }}</span><br />
                        <span class="text-lg font-semibold">Location Dimension: </span>
                        <span class="text-white">{{ result.location.dimension }}</span><br />
                        <span v-if="result.location.created" class="text-lg font-semibold">
                          Location Created:
                          <span class="text-white">{{ result.location.created }}</span><br />
                        </span>
                      </div>
                    </div>
                    
                  </div>
                  <div class="w-screen ml-8 ">
                    <h3 v-if="result.location.residents.length > 0" class="text-2xl font-bold mt-4 mb-4 text-center">Residents</h3>
                    <ul v-if="result.location.residents.length > 0" class="residents-list mb-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                      <li v-for="resident in result.location.residents" :key="resident.id">
                        <div class="resident-card bg-transparent rounded-md shadow-md p-2 flex flex-col">
                          <img :src="resident.image" alt="{{ resident.name }} Photo" class="h-32 w-32 rounded-full mx-auto mb-2 object-cover">
                          <div class="resident-info flex flex-col space-y-1 text-white">
                            <span class="text-center font-bold text-lg ">{{ resident.name }}</span>
                            <p>Status: {{ resident.status }}</p>
                            <p>Species: {{ resident.species }}</p>
                            <p>Gender: {{ resident.gender }}</p>
                          </div>
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
                    <FooterVue/>
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
import FooterVue from '../components/Footer.vue'
import NavVue from '../components/nav.vue'
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

