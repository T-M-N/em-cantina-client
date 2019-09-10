import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import Vuelidate from 'vuelidate'
import VueToasted from 'vue-toasted'
import Vuex from 'vuex'
import router from './router.js'

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
      userSearch: ""
    }
  },
  actions: {
    updateUserSearch: function (context, value) {
      context.commit('UPDATE_USER_SEARCH', value);
    }
  },
  mutations: {
    UPDATE_USER_SEARCH: function (state, value) {
      state.userSearch = value;
    }
  }
})

new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')