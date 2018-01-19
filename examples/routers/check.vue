<template>
    <div>
        <div style="margin-bottom: 30px;">
        <kl-check v-model="checked">多选按钮</kl-check>
        <p>checked: {{checked}}</p>
        </div>

        <div style="margin-bottom: 30px;">
        <kl-check-group v-model="value1">
            <kl-check v-for="item in list" v-bind:id="item.id">{{item.name}}</kl-check>
        </kl-check-group>
        <p>value: {{value1}}</p>
        </div>

        垂直布局
        <div style="margin-bottom: 30px;">
            <kl-check-group layout="block" v-model="value2">
                <kl-check v-for="item in list" v-bind:id="item.id">{{item.name}}</kl-check>
            </kl-check-group>
            <p>value: {{value2}}</p>
        </div>

        check之间没有margin
        <div style="margin-bottom: 30px;">
            <kl-check-group layout="inline" v-model="value3">
                <kl-check v-for="item in list" v-bind:id="item.id">{{item.name}}</kl-check>
            </kl-check-group>
            <p>value: {{value3}}</p>
        </div>

    </div>
</template>
<script>
    export default {
        data() {
            return {
                checked: true,
                value1: [2,3,4],
                value2: [],
                value3: [],
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
