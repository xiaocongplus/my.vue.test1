//程序js入口
import Vue from 'vue'
import Axios from 'axios'
import Vuex from 'vuex'
import VueRouter from 'vue-router'
import VueAxios from 'vue-axios'
import router from './router.js'
import app from './app.vue'
import ViewUI from 'view-design';
import moment from 'moment';
import 'view-design/dist/styles/iview.css';
// import 'bootstrap/dist/css/bootstrap.css'

Vue.use(VueRouter);
Vue.use(ViewUI);

Vue.use(VueAxios,Axios);
Axios.defaults.baseURL = 'http://www.liulongbin.top:3005/';


Vue.use(Vuex);


var car = JSON.parse(localStorage.getItem('car')||'[]');
//vuex 数据仓库
var store = new Vuex.Store({
    state:{
        car:car,
        // car:[],
    },
    mutations:{
        addToCar(state,goodInfo){
            var flag = false;
            state.car.some(item =>{
                if(item.id === goodInfo.id){
                    item.num += parseInt(goodInfo.num);
                    flag = true;
                    return true;
                }
            });
            if(!flag){
                state.car.push(goodInfo);
            }
            localStorage.setItem('car',JSON.stringify(state.car));
        },
        updateNum(state,goodInfo){
            console.log('goodInfo change');
            console.log(goodInfo);
            state.car.some(item =>{
                if(item.id === goodInfo.id){
                    item.num = parseInt(goodInfo.num);
                    return true;
                }
            });
            localStorage.setItem('car',JSON.stringify(state.car));
        },
        delGo(state,id){
            state.car.some((item,i) =>{
                if(item.id === id){
                    state.car.splice(i,1);
                    return true;
                }
            });
            localStorage.setItem('car',JSON.stringify(state.car));
        },
        selectedChange(state,id){
            state.car.some(item =>{
                if(item.id === id){
                    item.selected = !item.selected;
                    return true;
                }
            });
            localStorage.setItem('car',JSON.stringify(state.car));
        }
    },
    getters:{
        getAllNum(state){
            var n = 0;
            state.car.forEach(item =>{
                n += parseInt(item.num);
            });
            return n;
        },
        getIdAndNum(state){
            var m = {};
            state.car.forEach(item =>{
                m[item.id] = item.num;
            });
            return m;
        },
        getSelected(state){
            var m = {};
            state.car.forEach(item =>{
                m[item.id] = item.selected;
            });
            return m;
        },
        getNumAndTotalPrice(state){
            var info = {
                cou: 0,
                tol: 0
            };

            state.car.forEach(item =>{
                if(item.selected){
                    info.tol += parseInt(item.num) * parseInt(item.price);
                    info.cou += parseInt(item.num);
                }
            });
            return info;
        }
    }
});










//过滤器格式化日期
Vue.filter('dateFilter',function (dateStr,pattern = 'YYYY-MM-DD HH:mm:ss') {
    return moment(dateStr).format(pattern);
});

const vm = new Vue({
    el: '#app',
    data: {},
    router,
    methods: {},
    render: c => c(app),
    store
});

//cnpm install --save axios vue-axios