module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es6: true,
    jest: true
  },
  extends: [
    'plugin:vue/essential',
    'plugin:vue/recommended',
    'standard'
  ],
  ignorePatterns: 'webpack.config.js',
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
    axios: false,
    $: false,
    Vue: false,
    mount: false,
    shallowMount: false,
    shallowMountView: false,
    enableAutoDestroy: false,
    createComponentMocks: false,
    createModuleStore: false
  },
  parserOptions: {
    ecmaVersion: 2018
  },
  plugins: [
    'vue'
  ],
  rules: {
    "indent": ["error", 2],
    "vue/html-indent": ["warn", 4],
    "vue/html-self-closing": ["off"]
  }
}
