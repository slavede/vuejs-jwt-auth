import Vue from 'vue'
import Vuex from 'vuex';
import VueResource from 'vue-resource'
import { UserState } from './stores/user-state';
import AuthInterceptor from './interceptors/auth.interceptor';

Vue.use(VueResource);
Vue.use(Vuex)

Vue.http.interceptors.push(AuthInterceptor);

import App from './App.vue'


Vue.config.productionTip = false

const store = new Vuex.Store({
  modules: {
    userState: UserState
  }
})


new Vue({
  store,
  render: h => h(App),
}).$mount('#app')
