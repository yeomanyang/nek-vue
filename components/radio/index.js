import KLRadio from './src/radio.vue';

KLRadio.install = function(Vue) {
    Vue.component(KLRadio.name, KLRadio);
};

export default KLRadio;