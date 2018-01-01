import Vue from 'vue';
import Popper from 'popper.js';

export default {
    props: {
        reference: {},
        popper: {},
        appendToBody: {
            type: Boolean,
            default: false
        },
        placement: 'bottom'
    },
    data() {
        return {
            referenceElm: null,
            popperJS: null,
            showPopper: false,
            currentPlacement: ''
        };
    },
    mounted() {
        this.popperJS = new Popper(reference, popper, options);
        // this.popperJS.onCreate(popper => {
        //     this.resetTransformOrigin(popper);
        //     this.$nextTick(this.updatePopper);
        //     this.$emit('created', this);
        // });
    },
    methods: {
        destroyPopper() {
            this.popperJS.destroy();
            this.popperJS = null;
        }
    },
    destroyed() {
        this.destroyPopper();
    }
};