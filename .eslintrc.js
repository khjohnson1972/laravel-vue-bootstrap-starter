module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es6: true
  },
  extends: [
    'plugin:vue/essential',
    'plugin:vue/recommended',
    'standard'
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
    axios: true,
    $: true,
    Vue: true
  },
  parserOptions: {
    ecmaVersion: 2018
  },
  plugins: [
    'vue'
  ],
  rules: {
    "indent": ["error", 4],
    "vue/html-indent": ["warn", 4]
  }
}
