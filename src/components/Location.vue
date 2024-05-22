<template>
  <section class="bg-slate-300">
  <div v-if="loading">
    Loading locations...
  </div>
  <div v-else-if="error">
    Error: {{ error.message }}
  </div>
  <div v-else>
    <h1>Locations</h1>  
    <ul v-if="result && result.locations && result.locations.results.length > 0">
      <Swiper
        :slidesPerView="4"
        :spaceBetween="5"
        :pagination="{
          clickable: true,
        }"
        :modules="modules"
        class="mySwiper">

      <SwiperSlide v-for="location in result.locations.results" :key="location.name">
        <div @click="router.push(`/Location/${location.id}`)">
            <h2>{{ location.name }}</h2>
            <p>Type: {{ location.type }}</p>
            <p>Dimension: {{ location.dimension }}</p>
            <p>Residents:</p>
            <ul>
              <li v-for="resident in location.residents" :key="resident.name">
                <img :src="resident.image" alt="{{ resident.name }}" width="50" height="50">
                {{ resident.name }}
              </li>
            </ul>
      </div>
      </SwiperSlide>
    </Swiper>
    </ul>
    <p v-else>No locations found.</p>
  </div>
</section>
</template>

<script setup>
import gql from 'graphql-tag'
import {useQuery} from '@vue/apollo-composable';
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';
import { RouterLink, useRouter } from 'vue-router';
const { result,loading,error } = useQuery(gql`
query{
  locations{
    results{
      name
        type
        dimension
        id
        
       
      
    }
    
  }
}
`)
const router = useRouter()
</script>
