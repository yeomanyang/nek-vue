<template>
    <form :class="classes">
        <slot></slot>
    </form>
</template>

<script>
    export default {
        name: 'kl-form',
        props: {
            data: Object,
            labelWidth: String,
            labelLineHeight: String,
            rules: Object,
            layout: {
                type: String,
                default: 'horizontal'
            },
            colon: {
                type: Boolean,
                default: true
            },
            showMessage: {
                type: Boolean,
                default: true
            },
            statusIcon: {
                type: Boolean,
                default: false
            }
        },
        data() {
            return {
                fields: []
            };
        },
        computed: {
            classes() {
                return [
                    'kl-form',
                    {
                        'kl-form--horizontal': this.layout === 'horizontal',
                        'kl-form--vertical': this.layout === 'vertical',
                        'kl-form--inline': this.layout === 'inline'
                    }
                ];
            }
        },
        methods: {
            getFilteredFields(fieldNames) {
                let fields = this.fields;
                if (fieldNames && fieldNames.length) {
                    fields = fields.filter(field => fieldNames.includes(field.prop));
                }
                return fields;
            },
            validateFields(fieldNames) {
                return new Promise(async (resolve, reject) => {
                    let fields = this.getFilteredFields(fieldNames);
                    const errors = await Promise.all(fields.map(field => field.validate('')));
                    for (const error of errors) {
                        if (error) {
                            return reject(error);
                        }
                    }
                    resolve();
                });
            },
            resetFields(fieldNames) {
                let fields = this.getFilteredFields(fieldNames);
                for (const field of fields) {
                    field.resetField();
                }
            }
        },
        watch: {
            rules() {
                this.validate();
            }
        },
        created() {
            this.$on('form-item-add', (field) => {
                if (field) {
                    this.fields.push(field);
                }
            });
            this.$on('form-item-remove', (field) => {
                if (field.prop) {
                    this.fields.splice(this.fields.indexOf(field), 1);
                }
            });
        }
    };
</script>
