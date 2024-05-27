import './style.css'
import { createApp, provide, h } from 'vue'
import { DefaultApolloClient } from '@vue/apollo-composable'
import { ApolloClient, InMemoryCache } from '@apollo/client/core'
import App from './App.vue'
import router from '../src/Router/index'
import VueTypedJs from 'vue-typed-js';


const cache = new InMemoryCache()

const apolloClient = new ApolloClient({
  cache,
  uri: 'https://rickandmortyapi.com/graphql',
})

const app = createApp({
  setup () {
    provide(DefaultApolloClient, apolloClient)
  },

  render: () => h(App),
})
app.use(router)
app.use(VueTypedJs);
app.mount('#app');