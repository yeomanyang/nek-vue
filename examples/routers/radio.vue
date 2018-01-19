<template>
    <div>
        <div style="margin-bottom: 30px;">
        <kl-radio v-model="checked">单选按钮</kl-radio>
        <p>checked: {{checked}}</p>
        </div>

    </div>
</template>
<script>
    export default {
        data() {
            return {
                checked: false,
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
