/**
 * Vuex
 *
 * @library
 *
 * https://vuex.vuejs.org/en/
 */

// Lib imports
import Vue from 'vue'
import Vuex from 'vuex'

// Store functionality

import Businesshealthvuex from './businesshealthvuex';

Vue.use(Vuex)

// Create a new store
const store = new Vuex.Store({
  modules: {
    Businesshealthvuex,
  }
})

export default store
