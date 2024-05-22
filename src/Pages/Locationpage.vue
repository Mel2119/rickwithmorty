<template>
    <section class="bg-[#8ee167] p-8">
      <div v-if="loading">
        Loading locations...
      </div>
      <div v-else-if="error">
        Error: {{ error.message }}
      </div>
      <div v-else>
        <h1 class="text-center text-white text-4xl font-serif   font-extrabold">Locations</h1>
        <ul class="list-none pl-4">
          <li v-for="location in result.locations.results" :key="location.name">
            <div class="bg-white rounded-lg shadow-md p-4 mb-4">
              <h2>{{ location.name }}</h2>
              <p>Type: {{ location.type }}</p>
              <p>Dimension: {{ location.dimension }}</p>
              <p>Residents:</p>
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
          </li>
        </ul>
      </div>
    </section>
  </template>
  
<script setup>
import {useRoute} from "vue-router";
import gql from 'graphql-tag'
import {useQuery} from '@vue/apollo-composable';
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';
import HeaderVue from '../components/Header.vue'
const { result, loading, error }=useQuery(gql`
  query Locations {
    locations {
      results {
        name
        type
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
</script>

