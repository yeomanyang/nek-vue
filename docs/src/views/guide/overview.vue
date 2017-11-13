
<template>
    
</template>
<script>
    export default {
        data () {
            return {
                navigate: navigate,
                filePath: Config.filePath,
                span: 8
            }
        },
        computed: {
        
        },
        methods: {
            updateSpin () {
                const width = document.body.clientWidth;
                if (width > 1440) {
                    this.span = 6;
                } else {
                    this.span = 8;
                }
            }
        }
    }
</script>
<style lang="less">
    .overview{
        a, a:hover{
            color: #666;
        }
        .ivu-card{
            margin: 10px;
        }

        &-card-img{
            img{
                width: 100%;
                height: auto !important;
            }
        }
    }
</style>