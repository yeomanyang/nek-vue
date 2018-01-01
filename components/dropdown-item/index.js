import KLDropdownItem from '../dropdown/src/dropdown-item.vue';

KLDropdownItem.install = function(Vue) {
    Vue.component(KLDropdownItem.name, KLDropdownItem);
};

export default KLDropdownItem;