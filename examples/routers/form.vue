<template>
    <div>
        <kl-form ref="form" :data="form" :rules="rules">
            <kl-form-item label="名字" prop="name">

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
                    name: '12312',
                    age: 12
                },
                rules: {
                    name: [
                        { required: true, type: 'string', message: '必须填上名字', trigger: 'change' }
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
