export const getIsLoggedIn = state => state.auth.isLogin;
export const getToken = state => state.auth.token;
export const getUser = state => state.auth.user.email;
export const logOut = state => state.auth.logOut;