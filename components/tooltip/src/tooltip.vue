<template>
    <div class="kl-tooltip" @mouseover="onMouseover" @mouseout="onMouseout">
        <div class="kl-tooltip__header" ref="reference">
            <slot></slot>
        </div>
        <kl-popper
            class="kl-tooltip__footer"
            :reference="this.$refs.reference"
            :appendToBody="appendToBody"
            :placement="placement"
            :isShow.sync="isShowPopper">
                <div v-show="isShowTips">
                    {{ tip }}
                </div>
                <slot name="tip"></slot>
        </kl-popper>
    </div>
</template>
<script>
    import popper from '../../popper/src/popper.vue';

    // todo: tooltip 上鼠标可以进入；样式调整；延迟多少秒显示的功能
    export default {
        name: 'kl-tooltip',
        component: { popper },
        props: {
            appendToBody: {
                type: Boolean,
                default: true
            },
            placement: {
                type: String,
                default: 'top'
            },
            tip: {
                type: String,
                default: ''
            }
        },
        computed: {
            isShowTips() {
                return this.tip !== '';
            }
        },
        data() {
            return {
                isShowPopper: this.isShow
            };
        },
        methods: {
            onMouseout() {
                this.isShowPopper = false;
            },
            onMouseover() {
                this.isShowPopper = true;
            }

        }
    };

</script>
