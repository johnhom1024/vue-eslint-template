module.exports = {
  root: true,
  env: {
    node: true,
    browser: true,
  },
  extends: ['plugin:vue/essential', 'eslint:recommended', '@vue/prettier'],
  rules: {
    'prettier/prettier': 'error',
    // 要求使用拖尾逗号
    'comma-dangle': ['error', 'always-multiline'],
    // 使用数字作为属性名时需要加上引号 http://eslint.cn/docs/rules/quote-props
    'quote-props': ['error', 'as-needed', { numbers: true }],
  },
  parserOptions: {
    parser: 'babel-eslint',
  },
};
