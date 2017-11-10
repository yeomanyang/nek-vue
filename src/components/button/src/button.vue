<template>
    <transition name="clicked">
        <button type="button" class="kl-button" 
            :disabled="disabled"
            :class="classObject"  
            :autofocus="autofocus"
            @click="onClick"
        >
            <kl-icon v-if="icon" :type="icon"></kl-icon>
            <span v-if="$slots.default"><slot></slot></span>
        </button>
    </transition>
</template>

<script>
import KLIcon from '../../icon/index';

export default {
    name: 'kl-button',
    components: {
        'kl-icon': KLIcon
    },
    props: {
        disabled: Boolean,
        autofocus: Boolean,
        type: String,
        size: String,
        icon: String
    },
    methods: {
        onClick(event) {
            this.$emit('click', event);
        }
    },
    computed: {
        classObject() {
            return {
                [`kl-button--${this.type}`]: !!this.type,
                [`kl-button--${this.size}`]: !!this.size,
                'is-disabled': this.disabled
            };
        }
    }
};
</script>