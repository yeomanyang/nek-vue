<template>
    <div>
        <div style="margin-bottom: 30px;">
            <kl-input placeholder="请输入" v-model="value"></kl-input>
            <p>{{value}}</p>
        </div>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                value: ''
            };
        }
    };
</script>
