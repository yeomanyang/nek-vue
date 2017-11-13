
<template>
    <div>
        <pre ><code ref="code"><slot></slot></code></pre>
        <!-- <span class="open-fiddle" v-if="title !== 'Code'" @click="openFiddle">
            <Tooltip :content="$t('index.code_jsfiddle')" placement="top" transfer>
                <Icon type="code-working" size="18" />
            </Tooltip>
        </span>
        <span class="copy" @click="clip">
            <Tooltip :content="$t('index.code_copy')" placement="top" transfer>
                <Icon type="clipboard" size="18" v-show="!copied"></Icon>
                <Icon type="checkmark" size="18" v-show="copied" style="color:#5cb85c"></Icon>
            </Tooltip>
        </span> -->
    </div>
</template>
<script>
    import hljs from 'hljs';
    import Clipboard from 'clipboard';
    import tag_map from './tag-map';

    function replaceTag(source, tagMap) {
        Object.keys(tagMap).forEach(i => {
            source = source
                .replace(new RegExp(`<${i}\(\\W+\)`, 'g'), `<${tagMap[i]}$1`)
                .replace(new RegExp(`<\/${i}>`, 'g'), `<\/${tagMap[i]}>`);
        });
        return source;
    }

    export default {
        props: {
            lang: {
                type: String,
                default: 'javascript'
            },
            bg: {
                type: Boolean,
                default: false
            }
        },
        data () {
            return {
                openScale: false,
                code: '',
                copied: false,
                docLang: this.$lang,
                title: 'Code'
            }
        },
        computed: {
            language () {
                if (this.lang == 'auto') {
                    return ''
                } else {
                    return this.lang;
                }
            }
        },
        mounted () {
            this.code = this.$refs.code.innerHTML.replace(/\n/, '');
            this.$refs.code.innerHTML = this.code;
            hljs.highlightBlock(this.$refs.code);
        },
        methods: {
            /*复制*/
            // clip () {
            //     const code = this.code.replace(/&lt;/g,'<').replace(/&gt;/g, '>').replace(/&amp;/g, '&');
            //     const clipboard = new Clipboard('.copy', {
            //         text () {
            //             return code
            //         }
            //     });

            //     clipboard.on('success', (e) => {
            //         e.clearSelection();
            //         clipboard.destroy();
            //         this.copied = true;
            //         if (this.docLang === 'zh-CN') {
            //             this.$Message.success('代码已复制到剪贴板');
            //         } else {
            //             this.$Message.success('Code copied');
            //         }
            //         setTimeout(() => {
            //             this.copied = false;
            //         }, 2000);
            //     });
            // },
            /*在线运行*/
			// getSource(source, type){
			// 	const regex = new RegExp(`<${type}[^>]*>`);
			// 	let openingTag = source.match(regex);

			// 	if (!openingTag) return '';
			// 	else openingTag = openingTag[0];

   //              return source.slice(source.indexOf(openingTag) + openingTag.length, source.lastIndexOf(`</${type}>`));
   //          },
            // openFiddle(){
            //     const source = this.$refs.code.textContent;

            //     const script = this.getSource(source, 'script').replace(/export default/, 'var Main =');
            //     const style = this.getSource(source, 'style');
            //     const template = '<div id="app">' + replaceTag(this.getSource(source, 'template'), tag_map) + '</div>';

            //     const html = [
            //         '<script src="//unpkg.com/vue/dist/vue.js"></scr' + 'ipt>',
            //         '<script src="//unpkg.com/iview/dist/iview.min.js"></scr' + 'ipt>',
            //         template
            //     ].join('\n');

            //     const css = '@import url("//unpkg.com/iview/dist/styles/iview.css");\n#app{padding: 32px;}' + style;
            //     const js = script + '\nvar Component = Vue.extend(Main)\nnew Component().$mount(\'#app\')';

            //     const data = {
            //         js: js,
            //         css: css,
            //         html: html,
            //         panel_css: 1,
            //         panel_js: 3
            //     };

            //     const formAttributes = {
            //         method: 'post',
            //         action: 'https://jsfiddle.net/api/post/library/pure/',
            //         target: '_blank',
            //         id: 'fiddle-form',
            //         style: 'display: none;'
            //     }

            //     const node = document.createElement('textarea');
            //     const form = document.createElement('form');
            //     for (const attr in formAttributes) {
            //         form.setAttribute(attr, formAttributes[attr]);
            //     }

            //     for (let name in data) {
            //         node.name = name;
            //         node.value = data[name].toString();
            //         form.appendChild(node.cloneNode());
            //     }

            //     document.body.appendChild(form);
            //     form.submit();
            //     document.body.removeChild(form);
            // }
        }
    }
</script>
<style module>
@componet-namespace kl {

}
</style>