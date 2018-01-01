<template>
    <div>
        <div class="index">
            <header-bar :isIndex="true"></header-bar>
            <div :class="$style['kl-index-hero']">
                <div :class="$style['kl-index-hero__inner']">
                    <div :class="$style['kl-index-hero__left']">
                        <img :class="$style['kl-index-hero__logo']" :src="imgs.logo">
                    </div>
                    <div :class="$style['kl-index-hero__right']">
                        <h1>
                            NEK VUE<br>后台 UI 组件库
                        </h1>
                        <p>
                            <router-link :class="$style['kl-index-hero__button']" :to="{ name: 'docs'}">快速开始</router-link>
                            <a :class="$style['kl-index-hero__button']" href="https://github.com/kaola-fed/nek-ui" target="_blank">GITHUB</a>
                        </p>
                    </div>
                </div>
            </div>
            <div :class="$style['kl-highlights']">
                <div :class="$style['kl-highlights__inner']">
                    <div :class="$style['kl-highlights__point']">
                        <h2>丰富</h2>
                        <p>作为后台组件库，包括了各种场景的组件，避免无意义地造轮子。</p>
                    </div>
                    <div :class="$style['kl-highlights__point']">
                        <h2>规范</h2>
                        <p>统一了规范，规避了开发人员个人喜好带来的代码不统一问题。</p>
                    </div>    
                    <div :class="$style['kl-highlights__point']">
                        <h2>可定制</h2>
                        <p>主题色可以根据项目实际情况进行个性化定制。</p>
                    </div>
                </div>
            </div>
        </div>
        <!-- 首页动画 -->
        <canvas id="indexLizi" style="position:fixed;top:0;left:0;pointer-events:none;"></canvas>
    </div>
</template>
<script>
import HeaderBar from '@/components/HeaderBar.vue';
export default {
    components: {
        HeaderBar
    },
    data() {
        return {
            imgs: {
                logo: require('@/assets/images/logo.png')
            }
        };
    },
    mounted() {
        this.liziInit();
    },
    methods: {
        /*动画效果*/
        liziInit() {
            let canvas = document.querySelector('#indexLizi'),
                ctx = canvas.getContext('2d'),
                particles = [],
                amount = 0,
                mouse = {
                    x: 0,
                    y: 0
                },
                radius = 0.7; //Init radius of the force field

            let colors = ['rgba(26, 188, 156, .6)', 'rgba(46, 204, 113, .4)', 'rgba(52, 152, 219, .4)', 'rgba(52, 152, 219, .4)',
                'rgba(241, 196, 15, .6)', 'rgba(231, 76, 60, .4)'];

            let colorsTwo = ['rgba(26, 188, 156, 1)', 'rgba(46, 204, 113, 1)', 'rgba(52, 152, 219, 1)', 'rgba(52, 152, 219, 1)',
                'rgba(241, 196, 15, 1)', 'rgba(231, 76, 60, 1)'];

            let copy = 'nek-ui'; // Text to display

            let initSize = Math.floor(Math.random() * .6) + 1;
            let hoverSize = initSize + .7;

            let ww = canvas.width = window.innerWidth;
            let wh = canvas.height = window.innerHeight;

            function Particle(x, y) {
                this.x = Math.random() * ww;
                this.y = Math.random() * wh;
                this.dest = {
                    x,
                    y
                };
                this.vx = (Math.random() - 0.5) * 2;
                this.vy = (Math.random() - 0.5) * 2;
                this.accX = 0;
                this.accY = 0;
                this.friction = Math.random() * 0.015 + 0.94;
            }

            Particle.prototype.render = function() {
                this.accX = (this.dest.x - this.x) / 200; //acceleration for X
                this.accY = (this.dest.y - this.y) / 200; //acceleration for Y
                this.vx += this.accX;
                this.vy += this.accY;
                this.vx *= this.friction;
                this.vy *= this.friction;

                this.x += this.vx;
                this.y += this.vy;

                ctx.fillStyle = this.color;
                ctx.beginPath();
                ctx.arc(this.x, this.y, this.r, Math.PI * 2, false);
                ctx.fill();

                let a = this.x - mouse.x;
                let b = this.y - mouse.y;

                let distance = Math.sqrt(a * a + b * b);
                if (distance < (radius * 70)) {
                    this.accX = (this.x - mouse.x) / 20;
                    this.accY = (this.y - mouse.y) / 20;
                    this.vx += this.accX;
                    this.vy += this.accY;
                }
                if (distance < (radius * 70)) {
                    this.colorTwo = colorsTwo[Math.floor(Math.random() * 10)];
                    ctx.fillStyle = this.colorTwo;
                    this.r = hoverSize; // the size of bubbles
                }
                if (distance > (radius * 70)) {
                    this.colorOne = colors[Math.floor(Math.random() * 10)];
                    ctx.fillStyle = this.colorOne;
                    this.r = initSize;
                }
            };

            function onMouseMove(e) {
                mouse.x = e.clientX;
                mouse.y = e.clientY;
            }

            function initScene() {
                ww = canvas.width = window.innerWidth;
                wh = canvas.height = window.innerHeight;

                ctx.clearRect(0, 0, canvas.width, canvas.height);

                ctx.font = `bold ${ww / 10}px sans-serif`; // Size of the text
                ctx.textAlign = 'center';
                ctx.fillText(copy, ww / 2, wh / 2); //Centering

                let data = ctx.getImageData(0, 0, ww, wh).data;
                ctx.clearRect(0, 0, canvas.width, canvas.height);
                ctx.globalCompositeOperation = 'screen';

                particles = [];
                for (let i = 0; i < ww; i += Math.round(ww / 400)) { //400 here represents the amount of particles
                    for (let j = 0; j < wh; j += Math.round(ww / 400)) {
                        if (data[((i + j * ww) * 4) + 3] > 250) {
                            particles.push(new Particle(i, j));
                        }
                    }
                }
                amount = particles.length;

            }

            function onMouseClick() {
                radius = 4; //onclick expand radius
                
            }

            function offMouseClick() {
                radius = 0.5; //offClick init radius
            }

            function delayedInitRadius() {
                setTimeout(offMouseClick, 500); //delay for offClick init radius
            }

            function render(a) {
                requestAnimationFrame(render);
                ctx.clearRect(0, 0, canvas.width, canvas.height);
                for (let i = 0; i < amount; i++) {
                    particles[i].render();
                }
            };

            window.addEventListener('resize', initScene);
            window.addEventListener('mousemove', onMouseMove);
            window.addEventListener('mousedown', onMouseClick);
            window.addEventListener('mouseup', delayedInitRadius);
            initScene();
            requestAnimationFrame(render);
        }
        /*语言切换*/
    }
};
</script>
<style module>
@component-namespace kl {
    @b index-hero {
        margin-top: 60px;
        padding: 50px 40px;
        background-color: #fff;
        @e inner {
            max-width: 900px;
            margin: 0 auto;
            div {
                display: inline-block;
                vertical-align: top;
                box-sizing: border-box;
            }
        }
        @e logo {
            width: 215px;
            height: 215px;
            float: right;
            margin-right: 60px;
            max-width: 100%;
            vertical-align: middle;
        }
        @e left {
            width: 39%;
        }
        @e right {
            text-align: left;
            width: 60%;
            h1 {
                font-weight: 300;
                margin: 0;
                font-size: 3.2em;
                line-height: normal;
                color: #2c3e50;
            }
            p {
                word-spacing: 0.05em;
            }
        }
        @e button {
            margin: 1em 0;
            font-size: 1.05em;
            font-weight: 600;
            letter-spacing: 0.1em;
            margin-right: 1em;
            border-radius: 5px;
        }
        a {
            padding: 0.75em 2em;
            display: inline-block;
            color: #fff;
            background-color: #31995e;
            transition: all 0.15s ease;
            box-sizing: border-box;
            border: 1px solid #31995e;
            &:nth-child(2) {
                background-color: #fff;
                color: #31995e;
            };
        }
    }
    @b highlights {
        background-color: #fff;
        padding-bottom: 70px;
        @e inner {
            max-width: 900px;
            margin: 0 auto;
            text-align: center;
        }
        @e point {
            width: 33%;
            display: inline-block;
            vertical-align: top;
            box-sizing: border-box;
            padding: 0 2em;
            h2 {
                color: #31995e;
                font-size: 1.5em;
                font-weight: 400;
                margin: 0;
                padding: 0.5em 0;
            }
            p {
                color: #7f8c8d;
            }
        }
    }
}
</style>