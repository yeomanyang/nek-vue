<template>
    <input
        class="kl-input"
        :value="value"
        :placeholder="placeholder"
        :maxlength="maxlength"
        :disabled="disabled"
        :autofocus="autofocus"
        @focus="onFocus"
        @keyup="onKeyUp"
        @keydown="onKeyDown"
        @keypress="onKeyPress"
        @blur="onBlur"
        @change="onChange"
        @input="onInput">
</template>
<script>
    export default {
        name: 'kl-input',
        props: {
            value: '',
            placeholder: {
                type: String,
                default: ''
            },
            maxlength: {
                type: Number
            },
            disabled: false,
            autofocus: false,
        },
        methods: {
            onFocus(event) {
                this.$emit('focus', event);
            },
            onKeyUp(event) {
                this.$emit('keyup', event);
            },
            onKeyDown(event) {
                this.$emit('keydown', event);
            },
            onKeyPress(event) {
                this.$emit('keypress', event);
            },
            onBlur(event) {
                this.$emit('blur', event);
            },
            onChange() {
                this.$emit('change', event);
            },
            onInput(event) {
                this.$emit('input', event.target.value);
            }
        }
    };

</script>