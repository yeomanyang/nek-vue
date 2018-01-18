<template>
    <div>
        <div style="margin-bottom: 30px;">
        <kl-check v-model="checked">多选按钮</kl-check>
        <p>checked: {{checked}}</p>
        </div>

        <div style="margin-bottom: 30px;">
        <kl-check-group v-model="value">
            <kl-check v-for="item in list" v-bind:id="item.id">{{item.name}}</kl-check>
        </kl-check-group>
        <p>value: {{value}}</p>
        </div>

    </div>
</template>
<script>
    export default {
        data() {
            return {
                checked: false,
                value: [],
                list:  [
                    {name: '一般贸易', id: 1},
                    {name: '海淘', id: 2},
                    {name: '直邮', id: 3},
                    {name: '保税', id: 4}
                ]
            };
        }
    };
</script>
