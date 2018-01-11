<template>
    <div class="kl-select">
        <div class="kl-select__header" ref="reference" @click="onClick">
            <span class="kl-select__header--placeholder">
                <!-- {{placeholderView}} -->
                {{value}}
                <kl-icon class="kl-select__header__icon" type="chevron-down" />
            </span>
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
         model: {
            prop: 'value',
            event: 'update'
        },
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
            value: '',
            placeholder: {
                type: String,
                default: '请选择'
            }
        },
        data() {
            return {
                isShowPopper: this.isShow
            };
        },
        methods: {
            onClick() {
                this.isShowPopper = !this.isShowPopper;
            }
        },
        computed: {
            placeholderView() {
                return this.value || this.placeholder
            }
        }
    };

</script>