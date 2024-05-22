<template>
  <section class="bg-slate-300">
    <div class="container flex justify-center text-3xl font-serif text-black text-bold  mt-8">Episodes</div>
    <div v-if="result">
      <p v-if="loading">Loading episodes...</p>
      <p v-if="error">{{ error }}</p>
      <Swiper v-else 
        :slidesPerView="4"
        :spaceBetween="5"
        :pagination="{
          clickable: true,
        }"
        :modules="modules"
        class="mySwiper ">
        <SwiperSlide v-for="episode in result.episodes.results" :key="episode.id">
          <div @click="router.push(`/Episode/${episode.id}`)">
          <div class=" rounded-lg shadow-md p-8 flex bg-[#63d72d] text-white flex-col items-center text-bold  ml-16 mr-16 mt-8 text-lg">  <div class="text-md mb-4 ">
              {{ episode.episode }} <br>{{ episode.name }}
            </div>
            <ul class="flex">
              <li class="mx-2 text-white" v-for="character in episode.characters" :key="character.id">
                <h3>{{ character.name }}</h3>
              </li>
            </ul>
          </div> 
        </div></SwiperSlide>
      </Swiper>
    </div>
  </section>
</template>


<script setup>
import gql from 'graphql-tag';
import { useQuery } from '@vue/apollo-composable';
import { Swiper, SwiperSlide } from 'swiper/vue';
import { RouterLink, useRouter } from 'vue-router';
const router = useRouter()
import 'swiper/css';
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


</script>