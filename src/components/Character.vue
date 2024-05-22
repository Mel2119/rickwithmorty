<script setup>
import gql from 'graphql-tag'
import {useQuery} from '@vue/apollo-composable';
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css/effect-cube';
import 'swiper/css/pagination';
import { EffectCoverflow } from 'swiper/modules';

import 'swiper/css/effect-coverflow';
import { RouterLink, useRouter } from 'vue-router';


const router = useRouter()
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
 <section class="bg-slate-300">
      <p class="container flex justify-center text-3xl font-serif text-black text-bold mb-8  mt-8">Characters</p>
      <div>
        <div class="items-center justify-center">
          <p v-if="error">Something went wrong...</p>
          <p v-else-if="loading">Loading...</p>
          <Swiper v-else :modules="[EffectCoverflow]" :effect="'coverflow'"
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
              <SwiperSlide  v-for="char in result.characters.results" :key="char.id">
                <!-- <router-link
                  :to="{ name: 'character', params: { id: char.id } }"
                > -->
                <div @click="router.push(`/Character/${char.id}`)">
                  
                  <img class="cursor-pointer " :src="char.image" alt="" />
                  <h3 class="text-2xl ml-4 mb-6">{{ char.name }}</h3>
                </div>
                  
                <!-- </router-link> -->
                
            </SwiperSlide>

        </Swiper>
          
        </div>
      </div>
    </section>

 
</template> 


