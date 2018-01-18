<template>
    <div :class="classes">
        <slot></slot>
    </div>
</template>
<script>
    export default {
        name: 'kl-check-group',
        computed: {
            classes() {
                return [
                    'kl-check-group',
                    {
                        'kl-check-group--disabled': this.disabled
                    }
                ];
            }
        },
        data() {
            return {
                modelValue: []
            };
        },
        props: {
            value: {
                type: Array,
                default() {
                    return [];
                }
            },
            disabled: {
                type: Boolean,
                default: false
            }
        },
        methods: {
            onClick() {
                this.$emit('input', !this.value);
            },
            change(value) {
                this.modelValue.push(value);
                this.$emit('input', this.modelValue);
            }
        }
    };

</script>