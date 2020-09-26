import Vue from 'vue'
import Vuex from 'vuex'
import productCollection from './productCollection'
import legaltextCollection from './legaltextCollection'
import navigationCollection from './navigationCollection'
import visitor from './visitor'
import promotions from './promotions'
import spots from './spots'
// Importing only required Lodash functions to reduce app size
// https://dev.to/ratracegrad/how-to-reduce-your-vue-js-bundle-size-with-webpack-4gpf
// seems to cause odd console errors when using the Vue DevTools plugin,
// unless we use 'tree-shakeable' version (lodash-es)
// https://stackoverflow.com/questions/35250500/correct-way-to-import-lodash
import { cloneDeep, forOwn } from 'lodash-es'

Vue.use(Vuex)

// TODO: Do the key/values below need to be different? Refactor to same name.
export const initialStoreModules = {
  productCatalogue: productCollection,
  legaltexts: legaltextCollection,
  navigation: navigationCollection,
  visitor,
  promotions,
  spots
}

export default new Vuex.Store({
  /**
   * Assign the modules to the store
   * using lodash deepClone to avoid changing the initial store module values
   * Source: https://stackoverflow.com/questions/49548622/vuex-empty-state-on-logout
   */
  modules: cloneDeep(initialStoreModules),
  mutations: {
    // reset default state modules by looping around the initialStoreModules
    resetState (state) {
      forOwn(initialStoreModules, (value, key) => {
        state[key] = cloneDeep(value.state)
      })
    }
  }
})
