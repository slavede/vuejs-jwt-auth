export default function AuthInterceptor(request) {
  const currentToken = this.$store.state.userState.token;
  if (currentToken) {
    request.headers.set('Authorization', 'Bearer ' + currentToken);
  }
}
