import KLButton from './components/KLButton';

const nekVue = {
    'kl-button': KLButton
};

const install = function(Vue) {
    Object.keys(nekVue).forEach((key) => {
        Vue.component(key, nekVue[key]);
    });
};

// auto install
if (typeof window !== 'undefined' && window.Vue) {
    install(window.Vue);
}

export default Object.assign(nekVue, {install});