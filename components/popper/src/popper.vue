<template>
    <transition name="fade">
        <div class="class"
            ref="popper"
            v-clickoutside="onClose"
            v-show="isShow"><slot></slot></div>
    </transition>
</template>
<script>
    import Popper from 'popper.js';
    import clickoutside from '../../util/directives/clickoutside';

    export default {
        name: 'kl-popper',
        directives: {
            clickoutside
        },
        props: {
            reference: {},
            appendToBody: {
                type: Boolean,
                default: false
            },
            placement: {
                type: String,
                default: 'bottom'
            },
            isShow: false
        },
        data() {
            return {
                referenceElm: null,
                popperJS: null,
                showPopper: false,
                currentPlacement: ''
            };
        },
        computed: {
            transition() {
                return ['bottom-start', 'bottom', 'bottom-end'].indexOf(this.placement) > -1 ? 'slide-up' : 'fade';
            }
        },
        watch: {
            isShow(newVal) {
                if (newVal) {
                    this.$emit('show');
                    this.updatePopper();
                } else {
                    this.$emit('hide');
                }
            }
        },
        methods: {
            destroyPopper() {
                this.popperJS.destroy();
                this.popperJS = null;
            },
            updatePopper() {
                if (!this.popperJS && this.appendToBody === true) {
                    document.body.appendChild(this.$refs.popper);
                    this.popperJS = new Popper(this.reference, this.$refs.popper, {
                        placement: this.placement,
                        modifiers: {
                            preventOverflow: {
                                // boundariesElement: document.querySelector(".myclass"),
                                enabled: true
                            },
                            hide: {
                                ModifierFn(data, options) {
                                    console.log(123);
                                }
                            }
                        },
                        onUpdate: () => {
                            if (this.$refs.popper.attributes['x-out-of-boundaries']) {
                                this.$emit('update:isShow', false);
                            }
                        }
                    });
                }

                this.popperJS.update();
            },
            onClose() {
                if (this.isShow === true) {
                    this.$emit('update:isShow', false);
                }
            }
        },
        mounted() {

        },
        destroyed() {
            this.destroyPopper();
        }
    };
</script>