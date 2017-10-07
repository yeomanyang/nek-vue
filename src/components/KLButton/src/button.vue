<template>
    <button :disabled="disabled" class="kl-button" :class="classObject" type="button" @click="onClick">
        <kl-icon v-if="icon" :type="icon"></kl-icon>
        {{ title }}
    </button>
</template>

<script>
import KLIcon from '../../KLIcon/index';

export default {
    name: 'kl-button',
    components: {
        'kl-icon': KLIcon
    },
    props: {
        disabled: Boolean,
        title: String,
        type: String,
        icon: String
    },
    methods: {
        onClick() {
            this.$emit('click');
        }
    },
    computed: {
        classObject() {
            return {
                [`kl-button-${this.type}`]: !!this.type,
                [`kl-button-${this.size}`]: !!this.size
            };
        }
    }
};
</script>