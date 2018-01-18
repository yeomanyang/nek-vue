<template>
    <label
        :class="classes"
         @click="onClick">
        <span class="kl-check__box"
            :class="{ 'kl-check__box--checked': value }">
            <kl-icon v-show="value" class="kl-check__box__okicon" type="ok" />
        </span><slot></slot>
    </label>
</template>
<script>
    export default {
        name: 'kl-check',
        computed: {
            classes() {
                return [
                    'kl-check',
                    {
                        'kl-check--disabled': this.disabled
                    }
                ];
            }
        },
        props: {
            value: {
                type: Boolean,
                default: false
            },
            disabled: {
                type: Boolean,
                default: false
            },
            id: ''
        },
        methods: {
            onClick() {
                // todo: $parent 不是check-group情况
                const $parent = this.$parent;
                $parent.change(this.id);

                this.$emit('input', !this.value);
            }
        }
    };

</script>