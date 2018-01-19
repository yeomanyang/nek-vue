<template>
    <div>
        <div style="margin-bottom: 30px;">
            <kl-crumb separator="/">
                <kl-crumb-item href="/"><kl-icon type="home" color="#E31436" /></kl-crumb-item>
                <kl-crumb-item href="/radio">促销中心</kl-crumb-item>
                <kl-crumb-item href="/crumb">优惠券管理</kl-crumb-item>
                <kl-crumb-item>优惠券配置</kl-crumb-item>
            </kl-crumb>
        </div>


        <!-- todo: 组件设置icon后面有个边距 -->
        <div style="margin-bottom: 30px;">
            <kl-crumb separator="<b>丨</b>">
                <kl-crumb-item href="/"><kl-icon type="home" />Home</kl-crumb-item>
                <kl-crumb-item href="/radio"><kl-icon type="home" />促销中心</kl-crumb-item>
                <kl-crumb-item href="/crumb"><kl-icon type="home" />优惠券管理</kl-crumb-item>
                <kl-crumb-item><kl-icon type="home" />优惠券配置</kl-crumb-item>
            </kl-crumb>
        </div>

    </div>
</template>
<script>
    export default {
        data() {
            return {

            };
        }
    };
</script>
