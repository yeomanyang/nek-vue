const store = {
    state() {
        return {
            visible: true,
            trigger: 'click'
        };
    },
    mutations: {
        click() {
            this.root.$emit('onItemClick');
        },
        changeVisible(state, isVisible) {
            this.state.visible = isVisible;
        },
        changeTrigger(state, type) {
            this.state.trigger = type;
        }
    }
};

export default store;