import button from './button';
import icon from './icon';
import dropdown from './dropdown';
import dropdownItem from './dropdown-item';
import dropdownMenu from './dropdown-menu';
import popper from './popper';

const components = {
    button,
    icon,
    dropdown,
    dropdownItem,
    dropdownMenu,
    popper
};

const install = function(Vue) {
    for (const component in components) {
        if (components.hasOwnProperty(component)) {
            Vue.component(components[component].name, components[component]);
        }
    }
};

if (typeof window !== 'undefined' && window.Vue) {
    install(window.Vue);
}

components.install = install;

module.exports = components;