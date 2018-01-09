<template>
    <div class="kl-select"
        v-bind:value="value"
        v-on:input="updateValue($event.target.value)">
        <div class="kl-select__header" ref="reference" @click="onClick">
        <span>{{value}}+</span>
        </div>
        <kl-popper
            class="kl-select__footer"
            :reference="this.$refs.reference"
            :appendToBody="appendToBody"
            :placement="placement"
            :isShow.sync="isShowPopper">
                <slot></slot>
        </kl-popper>
    </div>
</template>
<script>
    import popper from '../../popper/src/popper.vue';

    export default {
        name: 'kl-select',
        component: { popper },
        props: {
            isShow: {
                type: Boolean,
                default: false
            },
            appendToBody: {
                type: Boolean,
                default: true
            },
            placement: {
                type: String,
                default: 'bottom'
            },
            value: String
            }
        },
        data() {
            return {
                isShowPopper: this.isShow
            };
        },
        methods: {
            onClick() {
                this.isShowPopper = true;
                if (this.trigger == 'custom') {
                    this.isShowPopper = true;
                    return;
                }
                this.isShowPopper = !this.isShowPopper;
            }
        }
    };

</script>