import Vue from 'vue'
import Vuex from 'vuex';
import VueResource from 'vue-resource'
import { UserState } from './stores/user-state';
import AuthInterceptor from './interceptors/auth.interceptor';
import axios from 'axios';

Vue.use(VueResource);
Vue.use(Vuex)

// Vue.http.interceptors.push(AuthInterceptor);

axios.interceptors.request.use(AuthAxiosInterceptor(UserState));

import App from './App.vue'
import AuthAxiosInterceptor from './interceptors/auth-axios-intercetptor';


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
