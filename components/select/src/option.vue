<template>
    <li :class="classes" @click="onClick"><slot></slot></li>
</template>
<script>
    export default {
        name: 'kl-option',
        props: {
            disabled: {
                type: Boolean,
                default: false
            },
            selected: {
                type: Boolean,
                default: false
            },
            divided: {
                type: Boolean,
                default: false
            }
        },
        methods: {
            onClick() {
                const $parent = this.$parent.$parent.$parent;

                $parent.$emit('click');
                console.log($parent);

                if ($parent.trigger == 'custom') {
                    return;
                }
                $parent.isShowPopper = false;
            }
        },
        computed: {
            classes() {
                return [
                    'kl-option',
                    {
                        'kl-option--disabled': this.disabled,
                        'kl-option--selected': this.selected,
                        'kl-option--divided': this.divided
                    }
                ];
            }
        }
    };
</script>