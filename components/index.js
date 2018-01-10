import button from './button';
import form from './form';
import formItem from './form-item';
import icon from './icon';
import dropdown from './dropdown';
import dropdownItem from './dropdown-item';
import dropdownMenu from './dropdown-menu';
import popper from './popper';
import select from './select';
import option from './option';
import tooltip from './tooltip';

const components = {
    button,
    form,
    formItem,
    icon,
    dropdown,
    dropdownItem,
    dropdownMenu,
    popper,
    select,
    option,
    tooltip
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
