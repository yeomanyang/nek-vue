<template>
    <i class="kl-icon" :class="klass" :style="style" @click="onClick"></i>
</template>

<script>
export default {
    name: 'kl-icon',
    props: {
        type: String,
        fontSize: Number,
        color: String
    },
    methods: {
        onClick(event) {
            this.$emit('click', {
                event
            });
        }
    },
    computed: {
        klass() {
            return {
                [`kl-icon_${this.type}`]: !!this.type
            };
        },
        style() {
            let style = {};

            if (!!this.fontSize) {
                style.fontSize = `${this.fontSize}px`;
            }

            if (!!this.color) {
                style.color = this.color;
            }

            return style;
        }
    }
};
</script>
