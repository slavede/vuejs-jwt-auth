import axios from 'axios';

export default class AuthApi {
  loginEndpoint = '/api/v1/auth/login';
  validateTokenApi = '/api/v1/token/validate';

  login(username, password) {
    // if using vue-resource
    // const promise = this.$http.post(this.loginEndpoint, {
    //   username,
    //   password
    // });

    // if using axios
    const promise = axios.post(this.loginEndpoint, {
      username,
      password
    });


    return promise;
  }

  validateToken(token) {

    // const promise = this.$http.post(this.validateTokenApi, {
    //   token
    // });

    const promise = axios.post(this.validateTokenApi, {
      token
    });

    return promise;
  }
}
