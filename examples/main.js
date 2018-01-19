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
        }, {
            path: '/form',
            component: require('./routers/form.vue')
        }, {
            path: '/dropdown',
            component: require('./routers/dropdown.vue')
        },
        {
            path: '/select',
            component: require('./routers/select.vue')
        },
        {
            path: '/tooltip',
            component: require('./routers/tooltip.vue')
        },
        {
            path: '/icon',
            component: require('./routers/icon.vue')
        },
        {
            path: '/check',
            component: require('./routers/check.vue')
        },
        {
            path: '/radio',
            component: require('./routers/radio.vue')
        },
        {
            path: '/crumb',
            component: require('./routers/crumb.vue')
        }
    ]
});

new Vue({
    el: '#app',
    router,
    render: h => h(App)
});
