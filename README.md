## ✨ 特性

- 支持 Promise API
- 支持 Typescript 开发
- 拦截请求和响应
- 自定义配置请求实例
- 多种 Method 方法请求
- 支持 RequestTask 操作

## 🍟 文档

**[uniajax.ponjs.com][1]**

## 🥗 安装

**插件市场**

- 在插件市场右上角选择`使用HBuilder X 导入插件`或者`下载插件ZIP`。
- 如果您的项目是由`HBuilder X`创建，将下载解压后的`uni-ajax`文件夹，放到项目根目录。
- 如果您的项目是由`vue-cli`模式创建的，将下载解压后的`uni-ajax`文件夹放到项目的`src`文件夹中。

**NPM**

```bash
# 如果您的项目是HBuilder X创建的，根目录又没有package.json文件的话，请先执行如下命令：
# npm init -y

# 安装
npm install uni-ajax

# 更新
npm update uni-ajax
```

## 🥐 实例

新建`ajax.js`文件（文件名自定义）用于处理拦截器、接口根地址、默认参数等，详细配置请[查看文档][2]

```JavaScript
// ajax.js

import ajax from 'uni-ajax'                             // 引入 uni-ajax 模块

const _ajax = ajax.create(config)                       // 创建请求实例 可配置默认项

_ajax.interceptors.request.use(fulfilled, rejected)     // 注册请求拦截器
_ajax.interceptors.response.use(fulfilled, rejected)    // 注册响应拦截器

export default _ajax                                    // 导出创建后的实例
```

然后在`main.js`引入该`ajax.js`

```JavaScript
// main.js

import ajax from './utils/ajax'    // 路径需根据项目实际情况
Vue.prototype.$ajax = ajax         // 挂载在 Vue 原型链上（通过 this.$ajax 调用）
```

## 🥪 使用

**请求方法**

```JavaScript
// 常规方法
ajax()

// 请求方法别名
ajax.get()
ajax.post()
ajax.put()
ajax.delete()
```

**RequestTask**

```JavaScript
const request = ajax()                  // 请求方法每项皆可

request.abort()                         // 中断请求任务
request.onHeadersReceived(callback)     // 监听 HTTP Response Header 事件
request.offHeadersReceived(callback)    // 取消监听 HTTP Response Header 事件
```

**其他属性**

```JavaScript
ajax.baseURL    // 获取配置的接口根地址 baseURL
ajax.origin     // 根据配置的接口根地址获取源地址 origin
```

[1]: https://uniajax.ponjs.com
[2]: https://uniajax.ponjs.com/instance/create.html
