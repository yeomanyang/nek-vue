<template>
    <div class="kl-dropdown">
        <div class="kl-dropdown__header" ref="reference" @click="onClick">
            <slot></slot>
        </div>
        <kl-popper
            class="kl-dropdown__footer"
            :reference="this.$refs.reference"
            :appendToBody="appendToBody"
            :placement="placement"
            :isShow.sync="isShowPopper">
                <slot name="list"></slot>
        </kl-popper>
    </div>
</template>
<script>
    import popper from '../../popper/src/popper.vue';

    import store from './store';
    import Soda from '../../util/soda';

    export default {
        name: 'kl-dropdown',
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
            trigger: {
                type: String,
                default: 'click'
            },
            placement: {
                type: String,
                default: 'bottom'
            },
        },
        data () {
            return {
                isShowPopper: this.isShow
            };
        },
        methods: {
            onClick() {
                if (this.trigger == 'custom') {
                    this.isShowPopper = true;
                    return;
                }
                this.isShowPopper = !this.isShowPopper;
            },
        }
    };

</script>