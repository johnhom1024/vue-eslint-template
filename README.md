#


## prettier 配置


.prettiercc
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


