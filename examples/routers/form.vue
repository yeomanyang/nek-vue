<template>
    <div>
        <kl-form ref="form" :data="form" :rules="rules" layout="horizontal">
            <kl-form-item label="Field1" prop="test.field1" :colon="false">
                <span slot="describe" style="color:aqua">asda</span>
                <input type="text" style="height: 32px;"  v-model="form.field1"/>
            </kl-form-item>
            <kl-form-item label="Field2" prop="field2" required>
                <input type="text" style="height: 32px;" v-model="form.field2" />
            </kl-form-item>
            <kl-form-item :prop="`list.${index}.value`" v-for="(item, index) in form.list">
                <span slot="label" style="color:blueviolet">asd</span>
            </kl-form-item>
        </kl-form>
        <kl-button type="primary" @click="handleSubmit('form')">提交</kl-button>
        <kl-button type="primary" @click="handleReset('form')">重置</kl-button>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                form: {
                    test: {
                        field1: ''
                    },
                    field2: '',
                    list: [{
                        value: ''
                    }, {
                        value: ''
                    }]
                },
                rules: {
                    test: {
                        field1: [
                            { required: true, type: 'string', message: '必须填上Field1', trigger: 'change' }
                        ]
                    },
                    field2: [

                    ],
                    list: [{
                        value: [
                            { required: true, type: 'string', message: '必须填上后面的', trigger: 'change' }
                        ]
                    }]
                }
            };
        },
        methods: {
            async handleSubmit(name) {
                try {
                    await this.$refs[name].validateFields();
                    console.log('校验成功');
                } catch (err) {
                    console.error(err);
                }
            },
            handleReset(name) {
                this.$refs[name].resetFields();
            }
        }
    };
</script>
