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
                groupValue: []
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
            },
            layout: ''   // 名字(传值)还没想好
        },
        methods: {
            onClick() {
                this.$emit('input', !this.value);
            },
            change(options) {
                const id = options.id;

                if (options.value === true) {
                    this.groupValue.push(id)
                } else {
                    this.groupValue = this.groupValue.filter(item => item != id);
                }
                console.log(123);
                this.$emit('input', this.groupValue);
            }
        },
        mounted () {
            this.groupValue = this.value;
            this.$children.forEach(element => {
                element.groupValue = this.value;
                element.initValue();

                // 设置样式：横向布局还是垂直布局
                element.layout = this.layout || '';
            });
        }
    };

</script>