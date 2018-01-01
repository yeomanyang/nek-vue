import KLDropdownMenu from '../dropdown/src/dropdown-menu.vue';

KLDropdownMenu.install = function(Vue) {
    Vue.component(KLDropdownMenu.name, KLDropdownMenu);
};

export default KLDropdownMenu;