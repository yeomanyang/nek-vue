import button from './button';
import icon from './icon';
import dropdown from './dropdown';
import dropdownItem from './dropdown-item';
import dropdownMenu from './dropdown-menu';

const components = [
    button,
    icon,
    dropdown,
    dropdownItem,
    dropdownMenu
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
    icon,
    dropdown,
    dropdownItem,
    dropdownMenu
};