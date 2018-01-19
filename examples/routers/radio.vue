<template>
    <div>
        <div style="margin-bottom: 30px;">
        <kl-radio v-model="checked">单选按钮</kl-radio>
        <p>checked: {{checked}}</p>
        </div>

        <div style="margin-bottom: 30px;">
        <kl-radio-group v-model="value1">
            <kl-radio v-for="item in list" v-bind:id="item.id">{{item.name}}</kl-radio>
        </kl-radio-group>
        <p>value: {{value1}}</p>
        </div>

        垂直布局
        <div style="margin-bottom: 30px;">
            <kl-radio-group layout="block" v-model="value2">
                <kl-radio v-for="item in list" v-bind:id="item.id">{{item.name}}</kl-radio>
            </kl-radio-group>
            <p>value: {{value2}}</p>
        </div>

        check之间没有margin
        <div style="margin-bottom: 30px;">
            <kl-radio-group layout="inline" v-model="value3">
                <kl-radio v-for="item in list" v-bind:id="item.id">{{item.name}}</kl-radio>
            </kl-radio-group>
            <p>value: {{value3}}</p>
        </div>

    </div>
</template>
<script>
    export default {
        data() {
            return {
                checked: false,
                value1: '2',
                value2: '3',
                value3: '',
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
