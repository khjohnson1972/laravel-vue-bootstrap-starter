/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

import './bootstrap'
import { createApp } from 'vue'

// const files = require.context('./main/components', true, /\.vue$/i)
// files.keys().map(key => window.Vue.component(key.split('/').pop().split('.')[0], files(key).default))

import Example from './main/components/Example.vue'

const app = createApp({
  components: {
    Example
  }
})
app.mount('#app')
