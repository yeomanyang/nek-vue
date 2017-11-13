<template>
    <header :class="$style['kl-header']">
        <div :class="$style['kl-header__left']" @click="handleClickHome()">
            <img :class="$style['kl-header__logo']" :src="imgs.logo">
            <span :class="$style['kl-header__name']" >nek-vue</span>
        </div>
        <div :class="$style['kl-header__right']">
            <ul :class="$style['kl-header__nav']">
                <li><router-link :to="{ name: 'docs'}">首页</router-link></li>
                <li><router-link :to="{ name: 'docs'}">组件</router-link></li>
                <li><router-link :to="{ name: 'docs'}">工具</router-link></li>
                <li >
                    <a >资源</a><span ></span>
                    <ul :class="$style['kl-nav-dropdown']">
                        <li><router-link :to="{ name: 'docs'}">Snippets</router-link></li>
                        <li><router-link :to="{ name: 'docs'}">NEK</router-link></li>
                        <li><router-link :to="{ name: 'docs'}">RegularJS</router-link></li>
                        <li><router-link :to="{ name: 'docs'}">V0.5文档</router-link></li>
                    </ul>
                </li>
                <li>
                    <span :class="$style['kl-header__lang']" @click="handleChangeLang">
                        <template v-if="lang === 'zh-CN'">EN</template>
                        <template v-else>中文</template>
                    </span>
                </li>
            </ul>
        </div>
    </header>
</template>
<script>

export default {
    data() {
        return {
            lang: 'zh-CN',
            imgs: {
                logo: require('@/assets/images/logo.png')
            }
        };
    },
    methods: {
        handleClickHome() {
            this.$router.push({
                name: 'index'
            });
        },
        handleChangeLang () {
            const lang = this.lang === 'zh-CN' ? 'en-US' : 'zh-CN';
        },
        handleGoUserCenter() {
            this.$router.push({name: 'personal'});
        }
    }
};
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style module>
@component-namespace kl {
    @b header {
        position: fixed;
        width: 100%;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        display: flex;
        justify-content: space-between;
        align-items: center;
        height: 60px;
        background-color: rgba(255,255,255,0.4);
        border-bottom: 1px #e3e8ed solid;
        transition: background-color 0.3s ease-in-out;
        z-index: 1;
        @e left {
            display: flex;
            align-items: center;
            margin-left: 30px;
            line-height: 40px;
            font-family: 'PingFangTC-Regular', 'Dosis', 'Source Sans Pro', 'Helvetica Neue', Arial, sans-serif;
            font-weight: 500;
            font-size: 18px;
            color: #333;
            cursor: pointer;
            width: 200px;
        }
        @e logo {
            vertical-align: middle;
            margin-right: 6px;
            width: 40px;
            height: 40px;
            border: none;
        }
        @e name {
            margin-left: 10px;
            line-height: 40px;
        }
        @e right {
            display: flex;
            align-items: center;
            margin-right: 30px;
            color: #34495e;
            font-size: 15px;
        }
        @e nav {
            list-style-type: none;
            margin: 0;
            padding: 0;
            position: absolute;
            right: 40px;
            top: 10px;
            height: 40px;
            line-height: 40px;
            position: fixed;
            li {
                display: inline-block;
                position: relative;
                margin: 0 0.6em;
                cursor: pointer;
                a {
                    text-decoration: none;
                    background: transparent;
                }
            }
        }
        @e lang {

        }
    }
    @b nav-dropdown {
        display: none;
        box-sizing: border-box;
        max-height: calc(100vh - 61px);
        overflow-y: hidden;
        position: fixed;
        top: 45px;
        right: 85px;
        background-color: #fff;
        padding: 10px 0;
        border: 1px solid #ddd;
        border-bottom-color: #ccc;
        text-align: left;
        border-radius: 4px;
        white-space: nowrap;
        li {
            line-height: 1.8em;
            margin: 0;
            display: block;
        }
        a {
            color: #3a5169;
            font-size: 0.9em;
            display: block;
            padding: 0 24px 0 20px;
        }
    }
}
</style>
