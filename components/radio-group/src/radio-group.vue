<template>
    <div :class="classes">
        <slot></slot>
    </div>
</template>
<script>
    export default {
        name: 'kl-radio-group',
        computed: {
            classes() {
                return [
                    'kl-radio-group',
                    {
                        'kl-radio-group--disabled': this.disabled
                    }
                ];
            }
        },
        watch: {
            value(newValue) {
                this.updateCheckStatus();
            }
        },
        data() {
            return {
                groupValue: ''
            };
        },
        props: {
            value: '',
            disabled: {
                type: Boolean,
                default: false
            },
            layout: ''   // 名字(传值)还没想好
        },
        methods: {
            change(options) {
                const id = options.id;
                this.groupValue = this.id;
                this.$emit('input', id);
            },
            updateCheckStatus() {
                this.$children.forEach(element => {
                    element.groupValue = this.value;
                    element.initValue();
                    console.log(this.value);

                    // 设置样式：横向布局还是垂直布局
                    element.layout = this.layout || '';
                });
            }
        },
        mounted () {
            this.groupValue = this.value;
            this.updateCheckStatus();
        }
    };

</script>