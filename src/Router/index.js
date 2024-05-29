import {createRouter,createWebHistory} from "vue-router"
import Home from '../Pages/Home.vue'
import Locationpage from '../Pages/Locationpage.vue'
import Episodepage from '../Pages/Episodes.vue'
import Characterpage from "../Pages/Characterpage.vue"
import Characterdetail from '../Pages/Characterdetail.vue'
import Episodedetail from '../Pages/Episodedetail.vue'
import Locationdetail from '../Pages/Locationdetail.vue'
const router=createRouter({
    history:createWebHistory(import.meta.env.BASE_URL),
    routes:[
       {
         path:"/",
         name:"Home",
         component:Home
       },
       {
        path:"/Locationpage",
        name:"Locationpage",
        component:Locationpage
      },

       {
        path:"/Episodepage",
        name:"Episodepage",
        component:Episodepage
      },
      {
        path:"/Characterpage",
        name:"Characterpage",
        component:Characterpage
      },
      {
        path:"/Character/:id",
        name:"Characterdetail",
        component:Characterdetail
      },
      {
        path:"/Episode/:id",
        name:"Episodedetail",
        component:Episodedetail
      },
      {
        path:"/Location/:id",
        name:"Locationdetail",
        component:Locationdetail
      },
    ]
})
export default router;