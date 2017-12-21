<template>
    <div class="kl-dropdown">
        <div class="kl-dropdown__header" @click="onClick">
            <slot></slot>
        </div>
        <div class="kl-dropdown__footer" v-bind:class="{ 'kl-dropdown__footer--show': !currentVisible }">
            <slot name="list"></slot>
        </div>
    </div>
</template>
<script>
    import store from './store';
    import Soda from '../../util/soda';

    export default {
        name: 'kl-dropdown',
        computed: {
            currentVisible() {
                return this.soda.visible;
            }
        },
        watch: {
            visible(val) {
                this.$soda.commit('changeVisible', val);
            }
        },
        data() {
            return {
                soda: {}
            };
        },
        props: {
            visible: {
                type: Boolean,
                default: true
            },
            trigger: {
                type: String,
                default: 'click'
            }
        },
        methods: {
            onClick() {
                this.$emit('click');
                if (this.soda.trigger == 'custom') {
                    return;
                }
                this.$soda.commit('changeVisible', !this.soda.visible);
            }
        },
        mounted() {
            this.$nextTick(() => {
                this.$soda = new Soda(this, store);
                this.soda.visible = this.visible;
                this.soda.trigger = this.trigger;
            });
        }
    };
</script>