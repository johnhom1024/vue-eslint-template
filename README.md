# vue-cli项目基础配置

在使用了`vue-cli`脚手架生成vue的项目之后，我们需要对项目进行一些基础的配置，以确保在团队开发的过程中，使用  `prettier`配合`eslint`对代码进行格式化时，保持相同的代码风格。

## prettier配置

`.prettiercc`文件

```json
{
  "tabWidth": 2,
  "printWidth": 80,
  "useTabs": false,
  "semi": true,
  "singleQuote": true,
  "endOfLine": "lf",
  "quoteProps": "consistent",
  "vueIndentScriptAndStyle": false,
  "htmlWhitespaceSensitivity": "ignore",
}
```

属性解析：

* `tabWidth: 2` 规定每个缩进级别的空格数为2
* `printWidthL 80` 每行最多80个字符换行
* `useTabs: false` 用空格来缩进
* `semi: true` 句末使用分号
* `singleQuote: true` 使用单引号
* `endOfLine: "lf"` 结尾换行使用`\n`（即"lf"）的字符
* `quoteProps: "consistent"` 要求对象字面量属性名称都使用引号，这里配合eslint的[quote-props](http://eslint.cn/docs/rules/quote-props)默认规则
* `vueIndentScriptAndStyle: false` 不要在 Vue 文件中缩进 script 和 style 标签。
* `htmlWhitespaceSensitivity: "ignore"` 忽略空格敏感模式


## eslint配置

首先介绍一下需要安装的几个eslint配合prettier的插件

### @vue/eslint-config-prettier 插件

> 如果是在其他非vue项目中，可以用`eslint-config-prettier`代替。

#### 安装

```
npm install --save-dev @vue/eslint-config-prettier
```

关闭所有不必要的或可能与 Prettier 冲突的规则。

#### 使用方式

将`"prettier"`添加到 `.eslintrc.*` 文件中的`"extends"`数组。确保把它放在最后，这样它就有机会覆盖其他配置。

```js
{
  "extends": [
    "some-other-config-you-use",
    "@vue/prettier"
  ]
}
/**
 * 如果使用的是eslint-config-prettier，则引入的方式修改为
 * {
 *  "extends": [
 *    "some-other-config-you-use",
 *    "prettier"
 *  ]
 * }
 */
```


### eslint-plugin-prettier 插件

将 Prettier 作为 ESLint 规则运行，并将差异报告为单个 ESLint 问题。

#### 安装

```
npm install --save-dev eslint-plugin-prettier
```

#### 使用方式

由于`@vue/eslint-config-prettier`模块中已经导出了一些配置：

```js
// @vue/eslint-config-prettier/index.js
module.exports = {
  plugins: ['prettier'],  // => 这里已经写了
  // ...
}
```

所以安装之后无需做其他的配置。
