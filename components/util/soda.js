class Soda {
    constructor(vm, options = {}) {
        this.mutations = options.mutations;
        this.state = options.state();
        this.root = vm;
        this.init(vm);
        return this;
    }

    commit(type, payload) {
        this.mutations[type].call(this, this.state, payload);
    }

    init(root = this.root) {
        const inject = (_vm) => {
            if (typeof _vm.soda === 'undefined' || typeof this.$soda !== 'undefined') {
                return;
            }
            _vm.$soda = this;
            _vm.soda = this.state;
        };
        const map = (_vm) => {
            if (!_vm.$children.length) {
                return;
            }
            _vm.$children.forEach((child) => {
                inject(child);
                map(child);
            });
        };
        root.soda = this.state;
        map(root);
    }
  }

export default Soda;