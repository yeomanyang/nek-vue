<template>
    <div :class="$style['kl-main']">
        <router-view></router-view>
        <footer-bar></footer-bar>
        <to-top></to-top>
    </div>
</template>
<script>
import FooterBar from './FooterBar.vue';
import ToTop from './ToTop.vue';
export default {
    components: {
        FooterBar,
        ToTop
    }
};
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style module>
@component-namespace kl {
    @b main {
        min-width: 800px;
        position: absolute;
        bottom: 0px;
        right: 0px;
        left: 250px;
        top: 60px;
        padding: 15px;
        background-color: rgba(255,255,255,0.4);
        overflow: auto;
        @e footer {
            text-align: center;
            color: #9FA6AF;
            font-size: 12px;
        }
    }
}
</style>
