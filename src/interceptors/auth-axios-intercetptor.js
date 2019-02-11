
export default function AuthAxiosInterceptor(userStore) {
  return function(requestConfig) {
    const currentToken = userStore.state.token;

    if (currentToken) {
      requestConfig.headers['Authorization'] = 'Bearer ' + currentToken;
    }

    return requestConfig;
  }
}
