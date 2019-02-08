import jwt_decode from 'jwt-decode';

const UserStateActions = {
  setAuth: 'setAuth'
};

const UserState = {
  state: {
    user: null,
    token: null
  },
  mutations: {
    setAuth(state, token) {
      state.token = token;
      state.user = jwt_decode(token);
    }
  },
  actions: {
    setAuth(context, token) {
      sessionStorage.setItem('TOKEN', token);
      context.commit('setAuth', token);
    }
  }
}

export {
  UserState,
  UserStateActions
};
