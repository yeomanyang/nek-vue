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
import check from './check';
import checkGroup from './check-group';
import radio from './radio';
import radioGroup from './radio-group';
import crumbItem from './crumb-item';
import crumb from './crumb';
import input from './input';

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
    tooltip,
    check,
    checkGroup,
    radio,
    radioGroup,
    crumbItem,
    crumb,
    input
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
