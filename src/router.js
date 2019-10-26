import VueRouter from 'vue-router'
import home from './components/tabbar/Home.vue'
import vip from './components/tabbar/Vip.vue'
import shopCar from './components/tabbar/ShopCar.vue'
import search from './components/tabbar/Search.vue'
import news from './components/news/News.vue'
import photo from './components/photo/Photo.vue'
import goods from './components/goods/Goods.vue'
import newsInfo from './components/news/NewsInfo.vue'
import photoInfo from './components/photo/PhotoInfo.vue'
import goodsInfo from './components/goods/GoodsInfo.vue'
import goodsDesc from './components/goods/GoodsDesc.vue'
import goodsComment from './components/goods/GoodsComment.vue'

const router = new VueRouter({
    routes: [
        {path: '/', redirect:'/home'},
        {path: '/home', component: home},
        {path: '/vip', component: vip},
        {path: '/shopCar', component: shopCar},
        {path: '/search', component: search},
        {path: '/home/news', component: news},
        {path: '/home/photo', component: photo},
        {path: '/home/goods', component: goods},
        {path: '/home/news/newsInfo/:id', component: newsInfo},
        {path: '/home/photo/photoInfo/:id', component: photoInfo},
        {path: '/home/goods/goodsInfo/:id', component: goodsInfo,name:'goodsInfo'},
        {path: '/home/goods/goodsInfo/goodsDesc/:id', component: goodsDesc},
        {path: '/home/goods/goodsInfo/goodsComment/:id', component: goodsComment},
    ],
});

export default router;