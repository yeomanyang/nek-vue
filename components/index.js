import button from './button';
import icon from './icon'; 

const components = [
    button,
    icon
];

const install = function(Vue) {
    components.map((component) => {
        Vue.component(component.name, component);
    });
};

if (typeof window !== 'undefined' && window.Vue) {
    install(window.Vue);
}

module.exports = {
    install,
    button,
    icon
};