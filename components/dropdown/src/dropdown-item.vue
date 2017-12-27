<template>
    <li :class="classes" @click="onClick"><slot></slot></li>
</template>
<script>
    export default {
        name: 'kl-dropdown-item',
        data() {
            return {
                soda: {}
            };
        },
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
                    'kl-dropdown-item',
                    {
                        'kl-dropdown-item--disabled': this.disabled,
                        'kl-dropdown-item--selected': this.selected,
                        'kl-dropdown-item--divided': this.divided
                    }
                ];
            }
        }
    };
</script>