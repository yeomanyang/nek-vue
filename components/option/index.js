import KLOption from '../select/src/option.vue';

KLOption.install = function(Vue) {
    Vue.component(KLOption.name, KLOption);
};

export default KLOption;