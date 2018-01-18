<template>
    <li :class="classes" @click="onClick">{{name}}<slot></slot></li>
</template>
<script>
    export default {
        name: 'kl-option',
        props: {
            disabled: {
                type: Boolean,
                default: false
            },
            divided: {
                type: Boolean,
                default: false
            },
            id: '',
            name: String
        },
        methods: {
            onClick() {
                const $parent = this.$parent.$parent;

                $parent.$emit('click', {
                    selected: {
                        id: this.id,
                        name: this.name
                    }
                });

                $parent.$emit('update:value', this.id);
                $parent.$emit('update', this.id);

                $parent.isShowPopper = false;
                $parent.name = this.name;
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