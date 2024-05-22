<script setup>
import gql from 'graphql-tag'
import {useQuery} from '@vue/apollo-composable';
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css/effect-cube';
import 'swiper/css/pagination';
import { EffectCoverflow } from 'swiper/modules';

import 'swiper/css/effect-coverflow';
const { result,loading,error} = useQuery(gql`

query Characters{
    characters{
      results {
        name
        species
        status
        type
        gender
        origin{name}
        location {name}
        image
        id
      },
    },
  }
`)
</script>
 <template>
 <section class="">
      <p class="container flex justify-center text-3xl font-serif text-black text-bold mb-8  mt-8">Characters</p>
      <div>
        <div class="items-center justify-center">
          <p v-if="error">Something went wrong...</p>
          <p v-if="loading">Loading...</p>
          <Swiper :modules="[EffectCoverflow]" :effect="'coverflow'"
                :grabCursor="true"
                :centeredSlides="true"
                :slidesPerView="'4'"
                :coverflowEffect="{
                  rotate: 50,
                  stretch: 0,
                  depth: 100,
                  modifier: 1,
                  slideShadows: true,
                }"
                :pagination="true"
                class="mySwiper"
              >
              <SwiperSlide v-for="char in result.characters.results" :key="char.id">
                <div class="flex flex-col justify-center items-center w-full h-full shadow-md rounded-lg overflow-hidden ml-0  bg-[#bff1a7]">
                  <span class="text-white text-center text-2xl font-bold"> {{ char.name }}<br></span>
                  <img :src="char.image" :alt="char.name" class="w-48 h-48 object-cover rounded-lg mt-4">
                </div>
            </SwiperSlide>

        </Swiper>
          
        </div>
      </div>
    </section>
</template> 
