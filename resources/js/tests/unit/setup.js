import Vue from 'vue'
import Vuelidate from 'vuelidate'

// ===
// Utility functions
// ===

// https://vue-test-utils.vuejs.org/
const vueTestUtils = require('@vue/test-utils')

// Don't warn about not using the production build of Vue, as
// we care more about the quality of errors than performance
// for tests.
Vue.config.productionTip = false
Vue.use(Vuelidate)

// ===
// Globals helpers
// ===

// https://vue-test-utils.vuejs.org/api/#mount
global.mount = vueTestUtils.mount

// https://vue-test-utils.vuejs.org/api/#shallowmount
global.shallowMount = vueTestUtils.shallowMount

// https://vue-test-utils.vuejs.org/api/#enableautodestroy-hook
global.enableAutoDestroy = vueTestUtils.enableAutoDestroy

// https://vue-test-utils.vuejs.org/api/#enableautodestroy-hook
global.createLocalVue = vueTestUtils.createLocalVue

// A helper for creating Vue component mocks
global.createComponentMocks = ({ store, style, mocks, stubs } = {}) => {
  // Use a local version of Vue, to avoid polluting the global
  // Vue and thereby affecting other tests.
  // https://vue-test-utils.vuejs.org/api/#createlocalvue
  const localVue = vueTestUtils.createLocalVue()

  // add Vuelidate
  localVue.use(Vuelidate)

  const returnOptions = { localVue }

  // https://vue-test-utils.vuejs.org/api/options.html#stubs
  returnOptions.stubs = stubs || {}
  // https://vue-test-utils.vuejs.org/api/options.html#mocks
  returnOptions.mocks = mocks || {}

  // Converts a `store` option shaped like:
  //
  // store: {
  //   someModuleName: {
  //     state: { ... },
  //     getters: { ... },
  //     actions: { ... },
  //   },
  //   anotherModuleName: {
  //     getters: { ... },
  //   },
  // },
  //
  // to a store instance, with each module namespaced by
  // default, just like in our app.
  /*
  if (store) {
    localVue.use(Vuex)
    returnOptions.store = new Vuex.Store({
      modules: Object.keys(store)
        .map((moduleName) => {
          const storeModule = store[moduleName]
          return {
            [moduleName]: {
              state: storeModule.state || {},
              getters: storeModule.getters || {},
              actions: storeModule.actions || {},
              namespaced:
                typeof storeModule.namespaced === 'undefined'
                  ? true
                  : storeModule.namespaced,
            },
          }
        })
        .reduce((moduleA, moduleB) => Object.assign({}, moduleA, moduleB), {}),
    })
  } */

  // returnOptions.vuetify = new Vuetify()
  // returnOptions.stubs['router-link'] = true
  // returnOptions.stubs['router-view'] = true

  // If a `style` object is provided, mock some styles.
  // if (style) {
  //  returnOptions.mocks.$style = style
  // }

  return returnOptions
}
