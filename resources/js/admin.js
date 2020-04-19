/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

import Vue from 'vue'

require('./bootstrap')

window.Vue = require('vue')

/**
 * The following block of code may be used to automatically register your
 * Vue components. It will recursively scan this directory for the Vue
 * components and automatically register them with their "basename".
 *
 * Eg. ./components/ExampleComponent.vue -> <example-component></example-component>
 */

const files = require.context('./admin/components', true, /\.vue$/i)
files.keys().map(key => Vue.component(key.split('/').pop().split('.')[0], files(key).default))

/* eslint-disable no-unused-vars */
const app = new Vue({
  el: '#app',

  data: {
    state: window.state,
    alert: {
      title: '',
      message: '',
      context: ''
    }
  },

  mounted: function () {
    if (this.state && this.state.alert) {
      this.toggleAlert(this.state.alert.title, this.state.alert.message, this.state.alert.context)
    }
  },

  methods: {

    toggleAlert: function (title, message, context) {
      this.alert.title = title
      this.alert.message = message
      this.alert.context = context
    }
  }
})
/* eslint-enable no-unused-vars */