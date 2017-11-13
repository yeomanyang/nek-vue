<template>
    <div :class="$style['kl-to-top']" @click="changeTotop" v-if="show">
        <div :class="$style['kl-to-top__inner']">
            <i :class="$style['kl-to-top__icon']"></i>
        </div>
    </div>
</template>
<script>

export default {

    data() {
        return {
            show: true,
            
        }
    },
    mounted: function () {
        this.$nextTick(function () {
            if (this.$parent.$el.scrollTop > 0 ) {
                this.show = true;
            } else {
                this.show = false;
            }
        });
    },
    methods: {
        changeTotop() {
            console.log(1);
        }
    },

};
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style module>
@component-namespace kl {
    @b to-top {
        position: fixed;
        bottom: 80px;
        right: 75px;
        cursor: pointer;
        z-index: 10;
        @e inner {
            background-color: rgba(0,0,0,.6);
            border-radius: 15%;
            box-shadow: 0 1px 3px rgba(0,0,0,.2);
            transition: all .2s ease-in-out;
            width: 45px;
            height: 40px;
            text-align: center;
        }
        @e icon {
            display: inline-block;
            width: 16px;
            height: 16px;
            margin-top: 13px;
            border-radius: 15%;
            border-top: 5px solid #fff;
            border-left: 5px solid #fff;
            transform: rotateZ(45deg);
        }
    }
}
</style>
