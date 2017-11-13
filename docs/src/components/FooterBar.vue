<template>
    <div :class="$style['kl-footer']">
        想让文档更完善？
        <a href="https://github.com/kaola-fed/nek-ui" target="_blank">
        来 GitHub 提个 PR 吧！
        </a>
    </div>
</template>
<script>

export default {
};
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style module>
@component-namespace kl {
    @b footer {
        color: #7f8c8d;
        padding-top: 2em;
        font-size: 0.9em;
        text-align: left;
        margin-left: 60px;
        a {
            color: #0398ff;
            font-weight: 400;
        }
    }
}
</style>
