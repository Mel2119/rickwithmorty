<template class="bg-red-400">
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.0/css/all.min.css">
  <HeaderVue />
  <FeaturedVue />
  <AboutVue />
  <GenreVue />
  <MainStarVue />
  <EpisodeVue />
  <CharacterVue />
  <LocationVue />
  <CreaterVue />
  <RatingVue />
  <div class="flex justify-center text-purple-800 font-bold">
  <a href="https://www.figma.com/design/iLk6KEEMR46ZrhA7mlttk5/Relocate---Travel-website-Landing-page-(Community)?node-id=668-40&t=3M5D8YGFeyLctH5M-0">
    <p class="group hover:text-blue-500 transition duration-300 ease-in-out">
      <i class="fas fa-long-arrow-alt-right group-hover:translate-x-4 mb-8 mt-8">Look into the  Figma</i>
    </p>
  </a>
</div>

  <FooterVue />
  
</template>

<script setup>
import AboutVue from "../components/About.vue";
import CreaterVue from "../components/Creater.vue";
import FeaturedVue from "../components/Featured.vue";
import FooterVue from "../components/Footer.vue";
import GenreVue from "../components/Genre.vue";
import HeaderVue from "../components/Header.vue";
import MainStarVue from "../components/MainStar.vue";
import EpisodeVue from "../components/Episode.vue"
import CharacterVue from "../components/Character.vue"
import LocationVue from "../components/Location.vue"
import RatingVue from "../components/Rating.vue";
import CharacterpageVue from "./Characterpage.vue";
import EpisodesVue from "./Episodes.vue";
import LocationpageVue from "./Locationpage.vue";
</script>

