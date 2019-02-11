<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <p>
      For a guide and recipes on how to configure / customize this project,<br>
      check out the
      <a href="https://cli.vuejs.org" target="_blank" rel="noopener">vue-cli documentation</a>.
    </p>
    <h3>Installed CLI Plugins</h3>
    <ul>
      <li><a href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-babel" target="_blank" rel="noopener">babel</a></li>
      <li><a href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-eslint" target="_blank" rel="noopener">eslint</a></li>
    </ul>
    <h3>Essential Links</h3>
    <ul>
      <li><a href="https://vuejs.org" target="_blank" rel="noopener">Core Docs</a></li>
      <li><a href="https://forum.vuejs.org" target="_blank" rel="noopener">Forum</a></li>
      <li><a href="https://chat.vuejs.org" target="_blank" rel="noopener">Community Chat</a></li>
      <li><a href="https://twitter.com/vuejs" target="_blank" rel="noopener">Twitter</a></li>
      <li><a href="https://news.vuejs.org" target="_blank" rel="noopener">News</a></li>
    </ul>
    <h3>Ecosystem</h3>
    <ul>
      <li><a href="https://router.vuejs.org" target="_blank" rel="noopener">vue-router</a></li>
      <li><a href="https://vuex.vuejs.org" target="_blank" rel="noopener">vuex</a></li>
      <li><a href="https://github.com/vuejs/vue-devtools#vue-devtools" target="_blank" rel="noopener">vue-devtools</a></li>
      <li><a href="https://vue-loader.vuejs.org" target="_blank" rel="noopener">vue-loader</a></li>
      <li><a href="https://github.com/vuejs/awesome-vue" target="_blank" rel="noopener">awesome-vue</a></li>
    </ul>

  <div>


    <div>
      <div>
        Current token {{token}}
      </div>
      <button @click.prevent="validate">Validate Token</button>
    </div>
  </div>

  </div>


</template>

<script>
import {UserStateActions} from '../stores/user-state.js';
import axios from 'axios';

export default {
  name: 'HelloWorld',
  data: () => {
    console.log('Returning data');
    return {
      token: null
    }
  },
  created() {
    console.log('subscribe to setAuth mutation');
    const currentToken = this.$store.state.userState.token;
    if (currentToken) {
      console.log('init set token');
      this.setToken(currentToken);
    }
    this.$store.subscribe((mutation, state) => {
      if (mutation.type === UserStateActions.setAuth && state.userState.token) {
        console.log('change set token');
        this.setToken(state.userState.token);
      }
    });
  },
  methods: {
    validate() {
      console.log('Validating token');

      // const promise = this.$http.post('/api/v1/token/validate', {
      //   token: this.token
      // })
      // if using axios
      const promise = axios.post('/api/v1/token/validate', {
        token: this.token
      });

      promise.then((response) => {
        // success callback
        console.log('success', response);
      }, response => {
        // error callback
        console.log('error', response);
      });
    },
    setToken(token) {
      this.token = token;
    }
  },
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
