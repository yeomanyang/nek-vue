<template>
   
</template>

<script>
export default {
    name: 'kl-form-item',
    props: {
        prop: String,
        label: String,
        labelWidth: String,
        required: {
            type: Boolean,
            default: false
        },
        showMessage: {
            type: Boolean,
            default: true
        },
        descTemplate: String,
        textAlign: {
            type: String,
            default: 'right'
        }
    },
    methods: {
    },
    computed: {
        classObject() {
            return {
                
            };
        }
    }
};
</script>