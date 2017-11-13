<template>
    <div class="kl-example" >
        <h2 class="kl-example__title">{{ title }}</h2>
        <div class="kl-example__desc">
            <slot name="desc"></slot>
        </div>
        <div class="kl-example__case">
            <slot name="demo"></slot>
        </div>
        <div class="kl-example__code">
            <div class="iconLine" @click="showCode = !showCode">
                <div class="iconOuter" :class="{revert : showCode}"> 
                    <i class="kl-icon kl-icon__angle-down "></i>
                </div>
            </div>
            <div v-show="showCode" class="code_display">
                <slot name="code"></slot>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'Demo',
    props: {
        title: {
            type: String,
            default: ''
        }
    },
    data () {
        return {
            showCode: false
        }
    }
}
</script>
