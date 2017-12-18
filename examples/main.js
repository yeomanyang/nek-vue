/**
 * Created by yeoman on 17/10/16.
 */
import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './app.vue';
import nekVue from '../components/index';

Vue.use(VueRouter);
Vue.use(nekVue);

// 开启debug模式
Vue.config.debug = true;

// 路由配置
const router = new VueRouter({
    routes: [
        {
            path: '/button',
            component: require('./routers/button.vue')
        },
        {
            path: '/dropdown',
            component: require('./routers/dropdown.vue')
        }
    ]
});

new Vue({
    el: '#app',
    router,
    render: h => h(App)
});
