import KLPopper from './src/popper.vue';

KLPopper.install = function(Vue) {
    Vue.component(KLPopper.name, KLPopper);
};

export default KLPopper;