// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import router from './router';
import '@/style/index.css';
import KlCode from '@/components/code.vue';
import KlDemo from '@/components/demo.vue';

Vue.use(KlCode);
Vue.use(KlDemo);
Vue.component('kl-code', KlCode);
Vue.component('kl-demo', KlDemo);

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    template: '<App/>',
    components: { App }
});
