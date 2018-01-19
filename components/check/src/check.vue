<template>
    <label
        :class="classes"
         @click="onClick">
        <span class="kl-check__box"
            :class="{ 'kl-check__box--checked': currentValue }">
            <kl-icon v-show="currentValue" class="kl-check__box__okicon" type="ok" />
        </span><slot></slot>
    </label>
</template>
<script>
    export default {
        name: 'kl-check',
        data() {
            return {
                currentValue: '',
                groupValue: [],
                layout: 'inline'
            }
        },
        computed: {
            classes() {
                return [
                    'kl-check',
                    {
                        'kl-check--disabled': this.disabled,
                        'kl-check--inline': this.layout === '',         // todo
                        'kl-check--block': this.layout === 'block',     // todo
                    }
                ];
            }
        },
        props: {
            value: {
                type: Boolean,
                default: false
            },
            disabled: {
                type: Boolean,
                default: false
            },
            id: ''
        },
        watch: {
            value(newValue) {
                this.currentValue = newValue;
            }
        },
        methods: {
            onClick() {

                this.currentValue = !this.currentValue;

                const $parent = this.$parent;
                if ($parent.$options.name === 'kl-check-group') {
                    $parent.change({
                        value: this.currentValue,
                        id: this.id
                    });
                }

                this.$emit('input', this.currentValue);
            },
            initValue() {
                const checked = this.groupValue.indexOf(this.id) >= 0;

                this.currentValue = checked;
                this.$emit('input', this.currentValue);
            }
        },
        mounted () {
            this.currentValue = this.value;
        }
    };

</script>