export default {
    bind(el, binding) {
        document.addEventListener('click', (e) => {
            if (el.contains(e.target)) {
                return false;
            }
            if (binding.expression) {
                binding.value(e);
            }
        });
    },
    unbind(el, binding) {
        document.removeEventListener('click', (e) => {
            if (el.contains(e.target)) {
                return false;
            }
            if (binding.expression) {
                binding.value(e);
            }
        });
    }
};