# nek-vue

UI components based on [Vue.js]

[![Build Status][travis-image]][travis-url] [![npm][npm-image]][npm-url]

## Install nek-vue

using npm

```javascript
npm install nek-vue --save
```

## Usage

```javascript
import nek from 'nek-vue'
import 'nek-vue/lib/style/index.css'
Vue.use(nek)
```

### 按需引用

借助 [babel-plugin-component](https://github.com/ElementUI/babel-plugin-component)，我们可以只引入需要的组件，以达到减小项目体积的目的。

首先，安装 babel-plugin-component：

```bash
npm install babel-plugin-component -D
```

然后，在 .babelrc 添加如下配置：

```babel
  "plugins": [["component", [
    {
      "libraryName": "nek-vue",
      "styleLibraryName": "style",
      "styleLibrary": {
        "name": "/",
        "base": true,
        "path": "[module]/style/index.css",
        "mixin": false
      },
      "camel2Dash": true
    }
  ]]]
```

接下来，如果你只希望引入部分组件，比如 Button 和 Select，那么需要在 main.js 中写入以下内容：

```javascript
import { Button } from 'nek-vue'
Vue.component(Button.name, Button)
```

## LICENSE

MIT

 [npm-url]: https://www.npmjs.com/package/nek-vue
 [npm-image]: https://img.shields.io/npm/v/nek-vue.svg

 [travis-url]: https://travis-ci.org/yeomanyang/nek-vue
 [travis-image]: https://travis-ci.org/yeomanyang/nek-vue.svg?branch=develop
