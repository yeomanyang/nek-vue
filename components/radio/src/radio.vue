<template>
    <label
        :class="classes"
        @click="onClick">
        <span class="kl-radio__box"
            :class="{ 'kl-radio__box--checked': currentValue }">
            <i v-show="currentValue" class="kl-radio__box__okicon"></i>
        </span><slot></slot>
    </label>
</template>

<script>
export default {
    name: 'kl-radio',
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
                'kl-radio',
                {
                    'kl-radio--disabled': this.disabled,
                    'kl-radio--inline': this.layout === '',         // todo
                    'kl-radio--block': this.layout === 'block',     // todo
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
            if (this.disabled || this.currentValue) {
                return;
            }

            this.currentValue = true;
            this.$emit('input', true);


            const $parent = this.$parent;
            if ($parent.$options.name === 'kl-radio-group') {
                $parent.change({
                    value: this.currentValue,
                    id: this.id
                });
            }
        },
        initValue() {
            this.currentValue = (this.id == this.groupValue);
            this.$emit('input', this.currentValue);
        }
    },
    mounted () {
        this.currentValue = this.value;
    }
}
</script>

