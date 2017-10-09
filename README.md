# nek-vue
UI components based on [Vue.js]

[![Build Status][travis-image]][travis-url] [![npm][npm-image]][npm-url]

### Install nek-vue

using npm
```
npm install nek-vue --save

## Usage

```
import nek from 'nek-vue'
import 'nek-vue/dist/styles/nek-vue.css'
Vue.use(nek)
```

### 按需引用

```
import KLButton from 'nek-vue/src/components/KLButton'
import 'nek-vue/dist/styles/nek-vue.css'
Vue.component(KLButton.name, KLButton)
```

* 按需引用的时候需要对node_modules中的源码进行babel转换

```
{ 
    test: /nek-vue.src.*?js$/, 
    loader: 'babel-loader' 
}
```

### LICENSE
MIT

 [npm-url]: https://www.npmjs.com/package/nek-vue
 [npm-image]: https://img.shields.io/npm/v/nek-vue.svg

 [travis-url]: https://travis-ci.org/yeomanyang/nek-vue
 [travis-image]: https://travis-ci.org/yeomanyang/nek-vue.svg?branch=develop