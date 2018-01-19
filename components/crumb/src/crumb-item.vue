<template>
    <span class="kl-crumb-item">
        <span class="kl-crumb-item__separator" v-html="separator">
        </span><span>
            <a v-if="href" class="kl-crumb-item__link" href="javascript:;" @click="onClick"><slot></slot></a>
            <span v-else><slot></slot></span>
        </span>
    </span>
</template>
<script>
    export default {
        name: 'kl-crumb-item',
        data() {
            return {
               separator: ''
            }
        },
        props: {
            href: '',
            replace: {
                type: Boolean,
                default: false
            }
        },
        methods: {
            onClick() {
                const hasRoute = this.$router;
                if (hasRoute) {
                    this.replace ? this.$router.replace(this.href) : this.$router.push(this.href);
                } else {
                    window.location.href = this.href;
                }
            }
        }
    };

</script>