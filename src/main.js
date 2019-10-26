//程序js入口
import Vue from 'vue'
import Axios from 'axios'
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

//格式化日期
Vue.filter('dateFilter',function (dateStr,pattern = 'YYYY-MM-DD HH:mm:ss') {
    return moment(dateStr).format(pattern);
});

const vm = new Vue({
    el: '#app',
    data: {},
    router,
    methods: {},
    render: c => c(app)
});

//cnpm install --save axios vue-axios