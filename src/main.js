import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import Vuelidate from 'vuelidate'
import VueToasted from 'vue-toasted'
import Vuex from 'vuex'
import router from './router.js'

import { library } from '@fortawesome/fontawesome-svg-core'
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons'
import { faTimesCircle } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faPlusCircle)
library.add(faTimesCircle)

Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.use(VueRouter) // Enregistre le plugin "VueRouter" à l'application Vue.js
Vue.use(Vuelidate) // Enregistre le plugin "Vuelidate" à l'application Vue.js
Vue.use(VueToasted, {
  duration: 5000
}) // Enregistre le plugin "VueToasted" à l'application Vue.js
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