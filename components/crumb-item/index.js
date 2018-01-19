import KLCrumbItem from './src/crumb-item.vue';

KLCrumbItem.install = function(Vue) {
    Vue.component(KLCrumbItem.name, KLCrumbItem);
};

export default KLCrumbItem;