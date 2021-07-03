module.exports = {
  root: true,
  env: {
    node: true,
    browser: true,
  },
  extends: ['plugin:vue/essential', 'eslint:recommended', '@vue/prettier'],
  rules: {
    'prettier/prettier': [
      'error'
    ],
    // 要求使用拖尾逗号
    "comma-dangle": ["error", "always-multiline"]
  },
  parserOptions: {
    parser: 'babel-eslint',
  },
};
