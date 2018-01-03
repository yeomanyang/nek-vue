<template>
    <div>
        <kl-form ref="form" :data="form" :rules="rules" layout="horizontal" label-width="40px" label-line-height="40px">
            <kl-form-item label="Field1" prop="field1" label-width="100px">
                <input type="text" />
            </kl-form-item>
            <kl-form-item label="Field2" prop="field2" label-line-height="100px">
                <input type="text" />
            </kl-form-item>
        </kl-form>
        <kl-button type="primary" @click="handleSubmit('form')">提交</kl-button>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                form: {
                    field1: '',
                    field2: ''
                },
                rules: {
                    field1: [
                        { required: true, type: 'string', message: '必须填上Field1', trigger: 'change' }
                    ]
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
            }
        }
    };
</script>
