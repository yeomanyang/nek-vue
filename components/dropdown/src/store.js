const store = {
    state() {
        return {
            isShow: false,
            trigger: 'click'
        };
    },
    mutations: {
        click() {
            this.root.$emit('onItemClick');
        },
        isShow(state, isShow) {
            this.state.isShow = isShow;
        },
        changeTrigger(state, type) {
            this.state.trigger = type;
        }
    }
};

export default store;