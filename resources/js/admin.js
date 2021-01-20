/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

import './bootstrap'
import { createApp } from 'vue'

// const files = require.context('./main/components', true, /\.vue$/i)
// files.keys().map(key => window.Vue.component(key.split('/').pop().split('.')[0], files(key).default))

import Alert from './admin/components/Alert.vue'

const app = createApp({
  data () {
    return {
      state: window.state
    }
  },
  components: {
    Alert
  }
})
app.mount('#app')
