<template>
    <div class="kl-dropdown">
        <div class="kl-dropdown__header" @click="onClick">
            <slot></slot>
        </div>
        <div class="kl-dropdown__footer" v-bind:class="{ 'kl-dropdown__footer--show': visible }">
            <slot name="list"></slot>
        </div>
    </div>
</template>
<script>
    export default {
        name: 'kl-dropdown',
        // props: {
        //     visible: Boolean,
        // },
        methods: {
            onClick: function() {
                this.visible = !this.visible;
                this.$emit('click');
            }
        },
        data: function () {
            return {
               visible: false
            }
        }
    };
</script>