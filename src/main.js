import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import Vuelidate from 'vuelidate'
import VueToasted from 'vue-toasted'
import Vuex from 'vuex'
import router from './router.js'

// FONTAWESOME
import { library } from '@fortawesome/fontawesome-svg-core'
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons'
import { faTimesCircle } from '@fortawesome/free-solid-svg-icons'
import { faUtensils } from '@fortawesome/free-solid-svg-icons'
import { faBookOpen } from '@fortawesome/free-solid-svg-icons'
import { faHome } from '@fortawesome/free-solid-svg-icons'
import { faListUl } from '@fortawesome/free-solid-svg-icons'
import { faEdit } from '@fortawesome/free-solid-svg-icons'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faPlusCircle)
library.add(faTimesCircle)
library.add(faUtensils)
library.add(faBookOpen)
library.add(faListUl)
library.add(faHome)
library.add(faEdit)
library.add(faBars)



Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.use(VueRouter) 
Vue.use(Vuelidate)
Vue.use(VueToasted, {
  duration: 5000
})
Vue.use(Vuex)

Vue.config.productionTip = false

const store = new Vuex.Store({
  state: function () {
    return {
      recipeSearch: ""
    }
  },
  actions: {
    updateRecipeSearch: function (context, value) {
      context.commit('UPDATE_RECIPE_SEARCH', value);
    }
  },
  mutations: {
    UPDATE_RECIPE_SEARCH: function (state, value) {
      state.recipeSearch = value;
    }
  }
})

new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')