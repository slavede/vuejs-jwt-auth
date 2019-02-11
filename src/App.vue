<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>

    <form>
      <label>username</label>
      <input type="text" v-model="credentials.username">

      <label>password</label>
      <input type="text" v-model="credentials.password">

      <button @click.prevent="submit">Submit</button>
    </form>

  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import { UserStateActions } from './stores/user-state';
import axios from 'axios';
import AuthApi from './api/auth-api.js';

export default {
  name: 'app',
  components: {
    HelloWorld
  },
  data() {
    return {
      credentials: {
        username: null,
        password: null
      }
    }
  },
  beforeCreate() {
    console.log('Checking inital token')
    const currentToken = sessionStorage.getItem('TOKEN');
    if (currentToken) {
      console.log('token present, set it to store')
      this.$store.dispatch(UserStateActions.setAuth, currentToken);
    }

  },
  created() {
    this.authApi = new AuthApi()
  },
  methods: {
    submit() {
      console.log('will submit', this.credentials);

      const promise = this.authApi.login(this.credentials.username, this.credentials.password);
      promise.then((response) => {
        // success callback
        console.log('Login response', response);
        // if using vue-resource
        // this.token = response.headers.get('x-mnc-auth');
        // if using axios
        this.token = response.headers['x-mnc-auth'];
        this.$store.dispatch(UserStateActions.setAuth, this.token);
      }, response => {
        // error callback
        console.log('error', response);
      });
    }
  }

}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
