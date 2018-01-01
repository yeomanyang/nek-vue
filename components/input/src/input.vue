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
            placeholder: {
                type: String,
                default: ''
            },
            maxlength: {
                type: Number,
            }
        },
        methods: {
        }
    };

</script>