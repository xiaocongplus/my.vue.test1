import VueRouter from 'vue-router'
import home from './components/tabbar/Home.vue'
import vip from './components/tabbar/Vip.vue'
import shopCar from './components/tabbar/ShopCar.vue'
import search from './components/tabbar/Search.vue'

const router = new VueRouter({
    routes: [
        {path: '/', redirect:'/home'},
        {path: '/home', component: home},
        {path: '/vip', component: vip},
        {path: '/shopCar', component: shopCar},
        {path: '/search', component: search}
    ],
});

export default router;