import Vue from 'vue';
import Router from 'vue-router';
import components from './components';

Vue.use(Router);

export default new Router({
    mode: 'hash',
    routes: [
        {
            path: '/docs',
            name: 'docs',
            components: {
                header: resolve => require(['@/components/HeaderBar'], resolve),
                sidebar: resolve => require(['@/components/SideBar'], resolve),
                main: resolve => require(['@/components/main'], resolve)
            },
            children: [
                ...components
            ]
        },
        {
            path: '/index',
            name: 'index',
            components: {
                main: resolve => require(['@/components/index'], resolve)
            }
        }
    ]

})
