/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

import './bootstrap'
import { createApp } from 'vue'
import { VuelidatePlugin } from '@vuelidate/core'

// const files = require.context('./main/components', true, /\.vue$/i)
// files.keys().map(key => window.Vue.component(key.split('/').pop().split('.')[0], files(key).default))

import Contact from './main/components/Contact.vue'

const app = createApp({
  components: {
    Contact
  }
})

app.use(VuelidatePlugin)

app.mount('#app')
