import KLToolTip from './src/tooltip.vue';

KLToolTip.install = function(Vue) {
    Vue.component(KLToolTip.name, KLToolTip);
};

export default KLToolTip;