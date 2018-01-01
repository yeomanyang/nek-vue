<template>
    <form :class="classObject">
        <slot></slot>
    </form>
</template>

<script>
export default {
    name: 'kl-form',
    props: {
        data: Object,
        layout: {
            type: String,
            default: 'horizontal'
        },
        labelWidth: String,
        rules: Object,
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
    created() {
        this.$on('form-item-add', (field) => {
            if (field) this.fields.push(field);
        });
        this.$on('form-item-remove', (field) => {
            if (field.prop) this.fields.splice(this.fields.indexOf(field), 1);
        });
    },
    methods: {
        validateFields(fieldNames) {
            
        },

        resetFields(fieldNames) {

        }
    },
    computed: {
        classObject() {
            return {
                [`kl-button--${this.type}`]: !!this.type,
                [`kl-button--${this.size}`]: !!this.size,
            };
        }
    }
};
</script>