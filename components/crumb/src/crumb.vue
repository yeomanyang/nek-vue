<template>
    <div class="kl-crumb">
        <slot></slot>
    </div>
</template>
<script>
    export default {
        name: 'kl-crumb',
        props: {
            separator: ''
        },
        mounted () {
            this.$children.forEach((childVm, childVmIndex) => {
                console.log(childVmIndex)
                if (childVmIndex != 0) {
                    childVm.separator = this.separator;
                }
            });
        }
    };

</script>