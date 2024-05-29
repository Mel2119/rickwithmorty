<template>
    <section class="bg-[#8ee167] p-8">
      <div v-if="loading">
        Loading locations...
      </div>
      <div v-else-if="error">
        Error: {{ error.message }}
      </div>
      <div v-else>
        <h1 class="text-center text-white text-4xl font-serif   font-extrabold mb-4">Locations</h1>
        <ul class=" list-none pl-4 ">
          <NavVue/>
          <li v-for="location in result.locations.results" :key="location.name">
           <div  @click="router.push(`/Location/${location.id}`)">
            <div class="bg-white rounded-lg shadow-md p-4 mb-4">
              <h2 class="text-2xl font-bold font-sans">{{ location.name }}</h2>
              <p><span class="text-lg font bold text-black">Type: </span>{{ location.type }}</p>
              <p><span class="text-lg font bold text-black">Dimension: </span> {{ location.dimension }}</p>
              <p><span class="text-lg font bold text-black">Residents: </span></p>
              <div class="mx-auto max-w-7xl">
                <Swiper :slidesPerView="6" :spaceBetween="0" :pagination="{ clickable: true }" class="mySwiper">
                  <SwiperSlide v-for="resident in location.residents" :key="resident.name">
                    <div class="flex flex-col items-center text-center mb-2">
                      <img :src="resident.image" alt="{{ resident.name }}" class="w-20 h-20 rounded-full">
                      <span>{{ resident.name }}</span>
                    </div>
                  </SwiperSlide>
                </Swiper>
            </div>
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
    </section>
    
  </template>
  
<script setup>
import {useRoute} from "vue-router";
import gql from 'graphql-tag'
import FooterVue from '../components/Footer.vue'
import {useQuery} from '@vue/apollo-composable';
import NavVue from '../components/nav.vue'
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';
import { RouterLink, useRouter } from 'vue-router';
import HeaderVue from '../components/Header.vue'
const { result, loading, error }=useQuery(gql`
  query Locations {
    locations {
      results {
        name
        type
        id
        dimension
        residents {
          name
          image
        }
      }
    }
  }
`)
const route=useRoute()
const router = useRouter()
</script>

